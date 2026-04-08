"use client";

import { useState, useEffect, useCallback, useRef } from "react";

// ── Theme toggle ──────────────────────────────────────────
export function useTheme() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") setDark(true);
  }, []);

  const toggle = useCallback(() => {
    setDark((prev) => {
      const next = !prev;
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  }, []);

  return { dark, toggle };
}

// ── Ripple effect ─────────────────────────────────────────
export function useRipple() {
  return useCallback((el: HTMLElement, e: React.MouseEvent) => {
    const rect = el.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const ripple = document.createElement("div");
    ripple.style.cssText = `
      position:absolute; border-radius:50%;
      background:var(--ripple);
      width:${size}px; height:${size}px;
      left:${e.clientX - rect.left - size / 2}px;
      top:${e.clientY - rect.top - size / 2}px;
      transform:scale(0);
      animation:ripple-anim 0.55s ease-out forwards;
      pointer-events:none; z-index:0;
    `;
    el.appendChild(ripple);
    ripple.addEventListener("animationend", () => ripple.remove());
  }, []);
}

// ── Copy to clipboard ─────────────────────────────────────
export function useCopy() {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = useCallback((text: string, key: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(key);
      setTimeout(() => setCopied(null), 2000);
    });
  }, []);

  return { copied, copy };
}

// ── Tray 3D tilt ──────────────────────────────────────────
export function useTilt(ref: React.RefObject<HTMLElement>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transition = "none";
      el.style.transform = `perspective(1200px) rotateY(${x * 4}deg) rotateX(${-y * 3}deg)`;
    };

    const onLeave = () => {
      el.style.transition = "transform 0.6s ease";
      el.style.transform = "perspective(1200px) rotateY(0deg) rotateX(0deg)";
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [ref]);
}

// ── Modal open state ──────────────────────────────────────
export type ModalKey = "about" | "skills" | "experience" | "contact" | null;
export type ProjectKey = "aether" | "forma" | "noctua" | null;

export function useModal() {
  const [activeModal, setActiveModal] = useState<ModalKey>(null);
  const [activeProject, setActiveProject] = useState<ProjectKey>(null);
  const [sourceEl, setSourceEl] = useState<HTMLElement | null>(null);

  const openModal = useCallback((key: ModalKey, el?: HTMLElement) => {
    setActiveModal(key);
    setSourceEl(el ?? null);
    setActiveProject(null);
  }, []);

  const openProject = useCallback((key: ProjectKey, el?: HTMLElement) => {
    setActiveProject(key);
    setSourceEl(el ?? null);
    setActiveModal(null);
  }, []);

  const closeModal = useCallback(() => {
    setActiveModal(null);
    setActiveProject(null);
    setSourceEl(null);
  }, []);

  return {
    activeModal,
    activeProject,
    sourceEl,
    openModal,
    openProject,
    closeModal,
  };
}
