"use client";

import { useEffect, useRef } from "react";

export default function AmbientLights({ dark }: { dark: boolean }) {
  const a1 = useRef<HTMLDivElement>(null);
  const a2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.innerWidth <= 768) return;
    const onMove = (e: MouseEvent) => {
      const cx = (e.clientX / window.innerWidth - 0.5) * 22;
      const cy = (e.clientY / window.innerHeight - 0.5) * 22;
      if (a1.current) a1.current.style.transform = `translate(${cx}px,${cy}px)`;
      if (a2.current)
        a2.current.style.transform = `translate(${-cx}px,${-cy}px)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const base: React.CSSProperties = {
    position: "fixed",
    borderRadius: "50%",
    filter: "blur(90px)",
    pointerEvents: "none",
    zIndex: 0,
    transition: "background .6s, transform .1s linear",
  };

  return (
    <>
      <div
        ref={a1}
        style={{
          ...base,
          width: 520,
          height: 520,
          background: dark ? "#3a3228" : "#d4c8a0",
          top: -130,
          left: -110,
          opacity: dark ? 0.28 : 0.16,
        }}
      />
      <div
        ref={a2}
        style={{
          ...base,
          width: 420,
          height: 420,
          background: dark ? "#22303a" : "#b8c4d0",
          bottom: -90,
          right: -90,
          opacity: dark ? 0.22 : 0.14,
        }}
      />
      <div
        style={{
          ...base,
          width: 300,
          height: 300,
          background: dark ? "#3a2828" : "#d0b8b0",
          top: "45%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: dark ? 0.12 : 0.08,
        }}
      />
    </>
  );
}
