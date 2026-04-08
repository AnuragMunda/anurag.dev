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

export default function SkillsBlock({ onOpen, dark }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const addRipple = useRipple();

  return (
    <div
      ref={ref}
      id={`${styles.bSkills}`}
      className={`${styles.blk}`}
      onClick={(e) => {
        addRipple(ref.current!, e);
        setTimeout(() => onOpen("skills", ref.current!), 80);
      }}
    >
      <span
        className={`${styles.lbl}`}
        style={dark ? { color: "var(--fg2)" } : {}}
      >
        Skills
      </span>
      <div className={`${styles.blkScroll}`}>
        <div className={`${styles.skillsGrid}`}>
          {PORTFOLIO.skillsList.map((skill) => (
            <span key={skill} className={`${styles.sp}`}>
              {skill}
            </span>
          ))}
        </div>
      </div>
      <div
        className={`${styles.tapHint}`}
        style={{ color: dark ? "white" : "" }}
      >
        ↗ tap to view more
      </div>
    </div>
  );
}
