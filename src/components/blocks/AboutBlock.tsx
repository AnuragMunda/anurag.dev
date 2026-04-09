"use client";

import { useRef } from "react";
import { useRipple } from "@/lib/hooks";
import { PORTFOLIO } from "@/lib/data";
import type { ModalKey } from "@/lib/hooks";
import styles from "./Blocks.module.css";

interface Props {
  onOpen: (key: ModalKey, el: HTMLElement) => void;
  dark: boolean;
}

export default function AboutBlock({ onOpen, dark }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const addRipple = useRipple();

  return (
    <div
      ref={ref}
      id={`${styles.bAbout}`}
      className={`${styles.blk}`}
      data-modal="about"
      onClick={(e) => {
        addRipple(ref.current!, e);
        setTimeout(() => onOpen("about", ref.current!), 80);
      }}
    >
      <span className={styles.lbl} style={dark ? { color: "var(--fg2)" } : {}}>
        About
      </span>
      <div className={`${styles.aboutInner}`}>
        <div className={styles.picInfo}>
          <div className={`${styles.avWrap}`}>
            <img
              src={PORTFOLIO.about.avatar}
              alt="Profile"
              onError={(e) => {
                (e.target as HTMLImageElement).style.background =
                  "var(--block)";
              }}
            />
          </div>

          <div className={styles.info}>
            <p className={styles.name}>Anurag Munda</p>
            <p className={styles.role}>Software Engineer</p>
          </div>
        </div>
        <p className={`${styles.bigText}`}>
          Transforming static ideas into <em>dynamic digital realities</em> using modern technologies.
        </p>
        {PORTFOLIO.available && (
          <div className={`${styles.avail}`}>
            <span className={`${styles.sdot}`} />
            Available for freelance
          </div>
        )}
      </div>

      <div className={styles.tapHint} style={{ color: dark ? "white" : "" }}>
        ↗ tap to view more
      </div>
    </div>
  );
}
