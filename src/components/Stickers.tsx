// FILE: components/Stickers.tsx
// Decorative SVG stickers that float around the tray edges.
// Each sticker has inline color, float animation, and blur→clear on hover.

"use client";

import styles from "./Stickers.module.css";

// Sticker data: each defines position, size, rotation, float distance, animation timing, and SVG content
const STICKERS = [
  {
    id: "lightning",
    color: "#f5c842",
    svg: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="40" r="38" fill="currentColor" opacity=".18" stroke="currentColor" stroke-width="1.5" stroke-opacity=".5"/>
      <path d="M46 14L28 44h14l-8 22L62 36H46L54 14z" fill="currentColor" opacity=".85"/>
    </svg>`,
    style: {
      top: "0px",
      left: "0px",
      width: 58,
      rotation: "-15deg",
      dy: "-10px",
      duration: "7s",
      delay: "0s",
    },
  },
  {
    id: "star",
    color: "#f07070",
    svg: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M40 8l7.6 15.4L64 26l-12 11.7 2.8 16.5L40 46.4l-14.8 7.8L28 37.7 16 26l16.4-2.6z" fill="currentColor" opacity=".8"/>
    </svg>`,
    style: {
      top: "-34px",
      right: "-20px",
      width: 83,
      rotation: "20deg",
      dy: "-8px",
      duration: "8.5s",
      delay: ".8s",
    },
  },
  {
    id: "shield",
    color: "#5eaaf5",
    svg: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M40 10 L68 22 L68 42 C68 58 54 68 40 72 C26 68 12 58 12 42 L12 22 Z" fill="currentColor" opacity=".22" stroke="currentColor" stroke-width="1.5" stroke-opacity=".7"/>
      <path d="M40 20 L58 30 L58 44 C58 54 49 61 40 64 C31 61 22 54 22 44 L22 30 Z" fill="currentColor" opacity=".3"/>
      <path d="M32 40l6 6 12-14" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" opacity=".9"/>
    </svg>`,
    style: {
      bottom: "-28px",
      left: "-80px",
      width: 70,
      rotation: "10deg",
      dy: "9px",
      duration: "9s",
      delay: "1.5s",
    },
  },
  {
    id: "mask",
    color: "#ff8c42",
    svg: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="40" cy="44" rx="30" ry="26" fill="currentColor" opacity=".22" stroke="currentColor" stroke-width="1.5" stroke-opacity=".55"/>
      <ellipse cx="26" cy="36" rx="10" ry="12" fill="currentColor" opacity=".35"/>
      <ellipse cx="54" cy="36" rx="10" ry="12" fill="currentColor" opacity=".35"/>
      <path d="M10 34 C10 34 22 22 40 22 C58 22 70 34 70 34" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity=".7"/>
      <path d="M26 24 L18 14" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" opacity=".75"/>
      <path d="M54 24 L62 14" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" opacity=".75"/>
    </svg>`,
    style: {
      top: "25%",
      left: "-200px",
      width: 58,
      rotation: "-8deg",
      dy: "-12px",
      duration: "10s",
      delay: "2s",
    },
  },
  {
    id: "infinity",
    color: "#4ecf8a",
    svg: `<svg viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M28 20 C28 12 16 6 10 12 C4 18 4 22 10 28 C16 34 28 28 40 20 C52 12 64 6 70 12 C76 18 76 22 70 28 C64 34 52 28 40 20 Z" stroke="currentColor" stroke-width="3" fill="none" opacity=".75" stroke-linecap="round"/>
    </svg>`,
    style: {
      bottom: "50px",
      right: "-76px",
      width: 86,
      height: 46,
      rotation: "5deg",
      dy: "7px",
      duration: "11s",
      delay: ".3s",
    },
  },
  {
    id: "planet",
    color: "#a57be8",
    svg: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="40" r="20" fill="currentColor" opacity=".28" stroke="currentColor" stroke-width="1.5" stroke-opacity=".6"/>
      <ellipse cx="40" cy="40" rx="38" ry="12" stroke="currentColor" stroke-width="2" fill="none" opacity=".55" transform="rotate(-20 40 40)"/>
      <circle cx="34" cy="34" r="4" fill="currentColor" opacity=".35"/>
    </svg>`,
    style: {
      top: "55%",
      left: "-42px",
      width: 95,
      rotation: "12deg",
      dy: "-9px",
      duration: "8s",
      delay: "3s",
    },
  },
  {
    id: "eye",
    color: "#38c9d6",
    svg: `<svg viewBox="0 0 80 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 25 C20 8 60 8 72 25 C60 42 20 42 8 25Z" fill="currentColor" opacity=".18" stroke="currentColor" stroke-width="1.5" stroke-opacity=".55"/>
      <circle cx="40" cy="25" r="12" fill="currentColor" opacity=".28" stroke="currentColor" stroke-width="1.5" stroke-opacity=".7"/>
      <circle cx="40" cy="25" r="6" fill="currentColor" opacity=".7"/>
      <circle cx="44" cy="21" r="2" fill="white" opacity=".55"/>
    </svg>`,
    style: {
      top: "38%",
      right: "-148px",
      width: 74,
      rotation: "-12deg",
      dy: "-6px",
      duration: "9.5s",
      delay: "1.2s",
    },
  },
  {
    id: "atom",
    color: "#e84fa8",
    svg: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="40" r="6" fill="currentColor" opacity=".8"/>
      <ellipse cx="40" cy="40" rx="30" ry="12" stroke="currentColor" stroke-width="1.5" fill="none" opacity=".6"/>
      <ellipse cx="40" cy="40" rx="30" ry="12" stroke="currentColor" stroke-width="1.5" fill="none" opacity=".45" transform="rotate(60 40 40)"/>
      <ellipse cx="40" cy="40" rx="30" ry="12" stroke="currentColor" stroke-width="1.5" fill="none" opacity=".45" transform="rotate(-60 40 40)"/>
    </svg>`,
    style: {
      bottom: "-32px",
      right: "25%",
      width: 94,
      rotation: "18deg",
      dy: "10px",
      duration: "12s",
      delay: ".6s",
    },
  },
  {
    id: "crown",
    color: "#e8a020",
    svg: `<svg viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 52 L10 24 L26 36 L40 10 L54 36 L70 24 L72 52 Z" fill="currentColor" opacity=".28" stroke="currentColor" stroke-width="1.5" stroke-opacity=".7" stroke-linejoin="round"/>
      <rect x="8" y="52" width="64" height="6" rx="3" fill="currentColor" opacity=".55"/>
      <circle cx="40" cy="12" r="4" fill="currentColor" opacity=".85"/>
      <circle cx="16" cy="26" r="3" fill="currentColor" opacity=".7"/>
      <circle cx="64" cy="26" r="3" fill="currentColor" opacity=".7"/>
    </svg>`,
    style: {
      top: "-16px",
      left: "52%",
      width: 60,
      rotation: "-5deg",
      dy: "-8px",
      duration: "7.5s",
      delay: "2.5s",
    },
  },
];

export default function Stickers() {
  return (
    <div id={styles.stickerLayer} aria-hidden>
      {STICKERS.map((s) => (
        <div
          key={s.id}
          className={styles.stk}
          style={{
            top: s.style.top ?? undefined,
            bottom: s.style.bottom ?? undefined,
            left: s.style.left ?? undefined,
            right: s.style.right ?? undefined,
            width: s.style.width,
            height: s.style.height ?? s.style.width, // Fallback to square
            color: s.color, // These inject the values into your CSS variables
            "--r": s.style.rotation,
            "--dy": s.style.dy,
            animationDuration: s.style.duration,
            animationDelay: s.style.delay,
          } as React.CSSProperties}
          dangerouslySetInnerHTML={{ __html: s.svg }}
        />
      ))}
    </div>
  );
}
