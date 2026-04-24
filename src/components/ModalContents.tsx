// All modal content components in one file. Each renders the body of a modal.
// The About modal includes live IST + UTC clocks using useEffect.

"use client";

import { useEffect, useRef } from "react";
import { PORTFOLIO } from "@/lib/data";
import { useCopy } from "@/lib/hooks";
import styles from "./ModalContent.module.css";

// ── About ──────────────────────────────────────────────────
export function AboutModalContent() {
  const istTimeRef = useRef<HTMLDivElement>(null);
  const istDateRef = useRef<HTMLDivElement>(null);
  const utcTimeRef = useRef<HTMLDivElement>(null);
  const utcDateRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function fmt(tz: string) {
      const now = new Date();
      const p = new Intl.DateTimeFormat("en-US", {
        timeZone: tz,
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        month: "short",
        day: "numeric",
      }).formatToParts(now);
      const g = (t: string) => p.find((x) => x.type === t)?.value ?? "";
      return {
        time: `${g("hour")}:${g("minute")}`,
        date: `${g("day")} ${g("month")}`,
      };
    }

    const tick = () => {
      const ist = fmt(PORTFOLIO.about.timezone);
      const utc = fmt("UTC");
      if (istTimeRef.current) istTimeRef.current.textContent = ist.time;
      if (istDateRef.current)
        istDateRef.current.textContent = `${ist.date} · ${PORTFOLIO.about.utcOffset}`;
      if (utcTimeRef.current) utcTimeRef.current.textContent = utc.time;
      if (utcDateRef.current)
        utcDateRef.current.textContent = `${utc.date} · UTC±0`;
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <div className={styles.mAboutHdr}>
        <img
          src={PORTFOLIO.about.avatar}
          className={styles.mAv}
          alt=""
          width={70}
          height={70}
        />
        <div>
          <div className={styles.mBadge}>
            <span className={styles.sdot} /> Available for freelance
          </div>
          <p className={styles.mHdln}>
            Transforming static ideas into <em>dynamic digital realities</em>{" "}
            using modern technologies.
          </p>
        </div>
      </div>
      <div className={styles.mBio}>
        {PORTFOLIO.about.bio.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
      {/* Timezone clocks */}
      <div style={{ display: "flex", gap: 8, marginTop: 14, flexWrap: "wrap" }}>
        {[
          { label: "IST (India)", timeRef: istTimeRef, dateRef: istDateRef },
          { label: "UTC", timeRef: utcTimeRef, dateRef: utcDateRef },
        ].map(({ label, timeRef, dateRef }) => (
          <div
            key={label}
            style={{
              flex: 1,
              minWidth: 120,
              padding: "10px 12px",
              background: "var(--block)",
              border: "1px solid var(--block-border)",
              borderRadius: 10,
            }}
          >
            <div
              style={{
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: ".15em",
                textTransform: "uppercase",
                color: "var(--fg2)",
                marginBottom: 1,
              }}
            >
              {label}
            </div>
            <div
              ref={timeRef}
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.5rem",
                fontWeight: 300,
                color: "var(--fg)",
                lineHeight: 1,
              }}
            >
              --:--
            </div>
            <div
              ref={dateRef}
              style={{ fontSize: 11.5, color: "var(--fg2)", marginTop: 4 }}
            >
              –
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

// ── Skills ─────────────────────────────────────────────────
export function SkillsModalContent() {
  return (
    <>
      {Object.entries(PORTFOLIO.skills).map(([cat, items]) => (
        <div key={cat} className={styles.scat}>
          <span className={styles.scatT}>{cat}</span>
          <div className={styles.scatG}>
            {items.map((s) => (
              <span key={s} className={styles.sch}>
                {s}
              </span>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

// ── Experience ─────────────────────────────────────────────
export function ExperienceModalContent() {
  return (
    <div className={styles.mExpList}>
      {PORTFOLIO.experience.map((exp, i, arr) => (
        <div key={exp.company} className={styles.mExpItem}>
          <div className={styles.mExpDot} />
          {i < arr.length - 1 && <div className={styles.mExpLine} />}
          <div>
            <span className={styles.mExpP}>{exp.period}</span>
            <div className={styles.mExpR}>{exp.role}</div>
            <div className={styles.mExpC}>{exp.company}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Contact ────────────────────────────────────────────────
export function ContactModalContent() {
  const { copied, copy } = useCopy();
  const { contact } = PORTFOLIO;

  const CopyIcon = ({ done }: { done: boolean }) =>
    done ? (
      <svg
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ) : (
      <svg
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="9" y="9" width="13" height="13" rx="2" />
        <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
      </svg>
    );

  return (
    <>
      <p
        style={{
          fontSize: 13.5,
          color: "var(--fg)",
          lineHeight: 1.8,
          marginBottom: 16,
        }}
      >
        Open to freelance, full-time opportunities, and interesting
        collaborations.
      </p>
      {[
        {
          label: "Email",
          value: contact.email,
          href: `mailto:${contact.email}`,
          key: "email",
        },
        {
          label: "Phone",
          value: contact.phone,
          href: `tel:${contact.phone}`,
          key: "phone",
        },
      ].map(({ label, value, href, key }) => (
        <div key={key} className={styles.mConField}>
          <div className={styles.mConFieldIcon}>
            {key === "email" ? (
              <svg
                width="14"
                height="14"
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
            ) : (
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.06 1.18 2 2 0 012.04 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
            )}
          </div>
          <div className={styles.mConFieldVal}>
            <a href={href}>{value}</a>
          </div>
          <button
            className={`${styles.mCopyBtn}${copied === key ? ` ${styles.done}` : ""}`}
            onClick={() => copy(value, key)}
          >
            <CopyIcon done={copied === key} />
          </button>
        </div>
      ))}
      <p
        style={{
          fontSize: 12,
          color: "var(--fg2)",
          fontStyle: "italic",
          marginTop: 8,
        }}
      >
        Response time: usually within 24 hours.
      </p>
    </>
  );
}

// ── Project ────────────────────────────────────────────────
// Renders a generative canvas "screenshot" + project details
export function ProjectModalContent({ projectId }: { projectId: string }) {
  const project = PORTFOLIO.projects.find((p) => p.id === projectId);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current || !project) return;
    const canvas = canvasRef.current;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = canvas.offsetWidth * dpr;
    canvas.height = canvas.offsetHeight * dpr;
    const ctx = canvas.getContext("2d")!;
    ctx.scale(dpr, dpr);

    // Simple generative preview: gradient bg + grid + project colour accent
    const w = canvas.offsetWidth,
      h = canvas.offsetHeight;
    const c = project.color;
    const bg = ctx.createLinearGradient(0, 0, w, h);
    bg.addColorStop(0, "#0a0e1a");
    bg.addColorStop(1, "#0d1520");
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, w, h);

    // Grid
    ctx.strokeStyle = `${c}18`;
    ctx.lineWidth = 0.5;
    for (let x = 0; x < w; x += 18) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }
    for (let y = 0; y < h; y += 18) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }

    // Glow
    const g = ctx.createRadialGradient(
      w * 0.8,
      h * 0.25,
      0,
      w * 0.8,
      h * 0.25,
      60,
    );
    g.addColorStop(0, `${c}55`);
    g.addColorStop(1, `${c}00`);
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(w * 0.8, h * 0.25, 60, 0, Math.PI * 2);
    ctx.fill();

    // Mock UI bars
    ctx.fillStyle = `${c}22`;
    ctx.strokeStyle = `${c}44`;
    ctx.lineWidth = 0.6;
    [
      [0.05, 0.1, 0.5, 0.55],
      [0.58, 0.1, 0.38, 0.52],
      [0.05, 0.68, 0.9, 0.2],
    ].forEach(([x, y, bw, bh]) => {
      ctx.beginPath();
      ctx.roundRect(x * w, y * h, bw * w, bh * h, 6);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = `${c}55`;
      ctx.fillRect(x * w + 5, y * h + 5, bw * w - 10, 2);
      ctx.fillStyle = `${c}22`;
    });
  }, [project]);

  if (!project) return null;

  const GhIcon = () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
  const LinkIcon = () => (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );

  return (
    <div>
      {/* Generative canvas preview */}
      <div className={styles.mProjImgPlaceholder}>
        <canvas
          ref={canvasRef}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 9,
            display: "block",
          }}
        />
      </div>
      <div className={styles.mProjBigName}>{project.name}</div>
      <span className={styles.mProjTagPill}>{project.tag}</span>
      <p className={styles.mProjDescFull}>{project.fullDesc}</p>
      <p className={styles.mProjDescFull} style={{ marginTop: -4 }}>
        {project.fullDesc2}
      </p>
      <div className={styles.mProjLinksRow}>
        <a
          href={project.github}
          target="_blank"
          rel="noopener"
          className={styles.mPlink}
        >
          <GhIcon /> View on GitHub
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener"
            className={styles.mPlink}
          >
            <LinkIcon /> Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
