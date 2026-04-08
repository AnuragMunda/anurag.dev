// FILE: components/Modal.tsx
// macOS-style zoom-from-source modal with traffic light buttons.
// The parent passes `title`, `children`, `isOpen`, `onClose`, and optionally
// `sourceEl` (the DOM element the modal should zoom from).

"use client";

import { useEffect, useRef } from "react";
import styles from "./Modal.module.css";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  sourceEl?: HTMLElement | null;
  children: React.ReactNode;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  sourceEl,
  children,
}: Props) {
  const boxRef = useRef<HTMLDivElement>(null);

  // Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  // Set transform-origin from the clicked block's centre
  useEffect(() => {
    if (!boxRef.current) return;
    if (sourceEl) {
      const r = sourceEl.getBoundingClientRect();
      boxRef.current.style.transformOrigin = `${r.left + r.width / 2}px ${r.top + r.height / 2}px`;
    } else {
      boxRef.current.style.transformOrigin = "center center";
    }
  }, [isOpen, sourceEl]);

  return (
    <div
      id={styles.overlay}
      className={isOpen ? styles.open : ""}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div id={styles.mbox} ref={boxRef}>
        <div id={styles.mtbar}>
          <button
            className={styles.macBtn}
            id={styles.mcClose}
            onClick={onClose}
            style={{ background: "#ff5f56" }}
          />
          <button
            className={styles.macBtn}
            id={styles.mcMin}
            onClick={onClose}
            style={{ background: "#ffbd2e" }}
          />
          <button
            className={styles.macBtn}
            id={styles.mcMax}
            style={{ background: "#27c93f" }}
          />
          <div id={styles.mtbarTitle}>{title}</div>
        </div>
        <div id={styles.mbodyWrap}>
          <div id={styles.mbody}>{children}</div>
        </div>
      </div>
    </div>
  );
}
