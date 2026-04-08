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

const EmailIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);
const PhoneIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.06 1.18 2 2 0 012.04 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
  </svg>
);

export default function ContactBlock({ onOpen, dark }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const addRipple = useRipple();
  const { contact } = PORTFOLIO;

  return (
    <div
      ref={ref}
      id={`${styles.bCon}`}
      className={`${styles.blk}`}
      onClick={(e) => {
        addRipple(ref.current!, e);
        setTimeout(() => onOpen("contact", ref.current!), 80);
      }}
    >
      <span
        className={`${styles.lbl}`}
        style={
          dark
            ? { color: "var(--fg2)" }
            : {}
        }
      >
        Contact
      </span>
      <div className={`${styles.conRows}`}>
        <div className={`${styles.conRow}`}>
          <div
            className={`${styles.conIcon}`}
            style={dark ? { color: "var(--fg)" } : {}}
          >
            <EmailIcon />
          </div>
          <span className={`${styles.conVal}`}>
            <a
              href={`mailto:${contact.email}`}
              onClick={(e) => e.stopPropagation()}
            >
              {contact.email}
            </a>
          </span>
        </div>
        <div className={`${styles.conRow}`}>
          <div
            className={`${styles.conIcon}`}
            style={dark ? { color: "var(--fg)" } : {}}
          >
            <PhoneIcon />
          </div>
          <span className={`${styles.conVal}`}>{contact.phone}</span>
        </div>
      </div>
      {/* <button
        className={`${styles.ctaS}`}
        onClick={(e) => {
          e.stopPropagation();
          window.location.href = `mailto:${contact.email}`;
        }}
      >
        Hello →
      </button> */}
      <div
        className={`${styles.tapHint}`}
        style={{ color: dark ? "white" : "" }}
      >
        ↗ tap for more
      </div>
    </div>
  );
}
