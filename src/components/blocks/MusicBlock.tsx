// Midnight-themed vinyl player. Click the record to spin/stop it.
// "Listen Now" opens the track in YouTube Music.
"use client";

import { useEffect, useRef, useState } from "react";
import { PORTFOLIO } from "@/lib/data";
import styles from "./Blocks.module.css";

export default function MusicBlock({ dark }: { dark: boolean }) {
  const [spinning, setSpinning] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { music } = PORTFOLIO;

  // Auto-spin briefly on mount to hint interactivity
  useEffect(() => {
    const t = setTimeout(() => {
      setSpinning(true);
      timeoutRef.current = setTimeout(() => setSpinning(false), 8000);
    }, 900);
    return () => {
      clearTimeout(t);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const toggleSpin = () => {
    if (spinning) {
      setSpinning(false);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    } else {
      setSpinning(true);
      timeoutRef.current = setTimeout(() => setSpinning(false), 8000);
    }
  };

  return (
    <div id={`${styles.bMusic}`} className={`${styles.blk}`}>
      <span
        className={`${styles.lbl}`}
        style={dark ? { color: "var(--fg2)" } : {}}
      >
        Now Playing
      </span>
      <div className={`${styles.musicContent}`}>
        {/* Vinyl */}
        <div
          className={`${styles.vinylWrap}`}
          onClick={toggleSpin}
          title="Click to spin"
        >
          <div
            className={`${styles.vinyl}${spinning ? ` ${styles.spinning}` : ""}`}
            id={`${styles.vinylDisc}`}
          />
          <div
            className={`${styles.toneArm}`}
            style={{ transform: spinning ? "rotate(22deg)" : "rotate(28deg)" }}
          />
        </div>
        {/* Info */}
        <div className={`${styles.musicInfo}`}>
          <div className={`${styles.musicTrackName}`}>{music.title}</div>
          <div className={`${styles.musicTrackArtist}`}>
            {music.artist} • {music.album}
          </div>
          <a
            className={`${styles.musicListenBtn}`}
            href={music.ytUrl}
            target="_blank"
            rel="noopener"
            onClick={(e) => e.stopPropagation()}
          >
            Listen Now
            <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5,3 19,12 5,21" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
