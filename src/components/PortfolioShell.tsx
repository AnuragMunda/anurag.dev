// The top-level "client shell" — wires all blocks, modals, theme, and layout together.
// app/page.tsx (server component) simply imports and renders this.

"use client";

import { useTheme, useModal } from "@/lib/hooks";
import { PORTFOLIO } from "@/lib/data";

import Cursor from "./Cursor";
import AmbientLights from "./AmbientLights";
import FloatingBar from "./FloatingBar";
import Tray from "./Tray";
import Modal from "./Modal";

import AboutBlock from "./blocks/AboutBlock";
import ProjectsBlock from "./blocks/ProjectsBlock";
import ExperienceBlock from "./blocks/ExperienceBlock";
import MusicBlock from "./blocks/MusicBlock";
import ContactBlock from "./blocks/ContactBlock";
import SkillsBlock from "./blocks/SkillsBlock";

// Modal content is imported from a separate file to keep this file lean
import {
  AboutModalContent,
  SkillsModalContent,
  ExperienceModalContent,
  ContactModalContent,
  ProjectModalContent,
} from "./ModalContents";

import styles from "./PortfolioShell.module.css";

export default function PortfolioShell() {
  const { dark, toggle } = useTheme();
  const {
    activeModal,
    activeProject,
    sourceEl,
    openModal,
    openProject,
    closeModal,
  } = useModal();

  const modalTitle: Record<string, string> = {
    about: "About Me",
    skills: "Craft & Tools",
    experience: "Work History",
    contact: "Let's Talk",
  };

  return (
    // dark class applied here controls CSS variable switching
    <div
      className={`${dark ? "dark" : ""} ${styles.root}`}
      style={{ minHeight: "100dvh" }}
    >
      <Cursor />
      <AmbientLights dark={dark} />

      {/* Ambient blobs */}
      <div className={`${styles.amb}`} id={`${styles.a1}`} />
      <div className={`${styles.amb}`} id={`${styles.a2}`} />
      <div className={`${styles.amb}`} id={`${styles.a3}`} />

      {/* Main layout */}
      <div id={`${styles.app}`}>
        <header id={`${styles.header}`}>
          <h1 id={`${styles.name}`}>
            {PORTFOLIO.name.first} <em>{PORTFOLIO.name.last}</em>
          </h1>
          <span id={`${styles.tagline}`}>{PORTFOLIO.tagline}</span>
        </header>

        <Tray>
          {/* Row 1–2: About | Projects */}
          <AboutBlock onOpen={openModal} dark={dark} />
          <ProjectsBlock onOpenProject={openProject} dark={dark} />
          {/* Row 3–4: Experience | Music | Contact | Skills */}
          <ExperienceBlock onOpen={openModal} dark={dark} />
          <MusicBlock dark={dark} />
          <ContactBlock onOpen={openModal} dark={dark} />
          <SkillsBlock onOpen={openModal} dark={dark} />
        </Tray>
      </div>

      <FloatingBar dark={dark} onToggleTheme={toggle} />

      {/* Block modals */}
      <Modal
        isOpen={activeModal !== null}
        onClose={closeModal}
        title={activeModal ? modalTitle[activeModal] : ""}
        sourceEl={sourceEl}
      >
        {activeModal === "about" && <AboutModalContent />}
        {activeModal === "skills" && <SkillsModalContent />}
        {activeModal === "experience" && <ExperienceModalContent />}
        {activeModal === "contact" && <ContactModalContent />}
      </Modal>

      {/* Project modals */}
      <Modal
        isOpen={activeProject !== null}
        onClose={closeModal}
        title={
          activeProject
            ? (PORTFOLIO.projects.find((p) => p.id === activeProject)?.name ??
              "")
            : ""
        }
        sourceEl={sourceEl}
      >
        {activeProject && <ProjectModalContent projectId={activeProject} />}
      </Modal>
    </div>
  );
}
