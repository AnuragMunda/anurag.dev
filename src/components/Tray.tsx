// FILE: components/Tray.tsx
// The main glass tray container. Handles 3D tilt on mouse move.
// Renders sticker layer (outside tray-inner) + grid children (inside).

"use client";

import { useRef } from "react";
import { useTilt } from "@/lib/hooks";
import styles from "./Tray.module.css";
import Stickers from "./Stickers";

interface Props {
  children: React.ReactNode;
}

export default function Tray({ children }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transition = "none";
    el.style.transform = `perspective(1200px) rotateY(${x * 4}deg) rotateX(${-y * 3}deg)`;
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transition = "transform 0.6s ease";
    el.style.transform = "perspective(1200px) rotateY(0deg) rotateX(0deg)";
  };

  return (
    <>
    <div
      id={`${styles.tray}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Stickers />
      <div id={styles.trayInner}
      ref={ref}>
        <div id={`${styles.grid}`}>{children}</div>
      </div>
    </div>
    </>
  );
}
