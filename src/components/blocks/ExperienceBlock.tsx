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

export default function ExperienceBlock({ onOpen, dark }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const addRipple = useRipple();

  return (
    <div
      ref={ref}
      id={`${styles.bExp}`}
      className={`${styles.blk}`}
      onClick={(e) => {
        addRipple(ref.current!, e);
        setTimeout(() => onOpen("experience", ref.current!), 80);
      }}
    >
      <span
        className={`${styles.lbl}`}
        style={dark ? { color: "var(--fg2)" } : {}}
      >
        Experience
      </span>
      <div className={`${styles.blkScroll}`}>
        <div className={`${styles.expList}`}>
          {PORTFOLIO.experience.map((exp) => (
            <div key={exp.company} className={`${styles.ei}`}>
              <span className={`${styles.ey}`}>{exp.period}</span>
              <div>
                <div className={`${styles.er}`}>{exp.role}</div>
                <div className={`${styles.ec}`}>{exp.company}</div>
              </div>
            </div>
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
