"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  ArrowDown,
  ArrowRight,
  Github,
  Sun,
  Moon,
  Menu,
  X,
  Code2,
  GraduationCap,
  Layers3,
  Sparkles,
  BriefcaseBusiness,
  FileDown,
} from "lucide-react";
import { content, projects, technologies, type Language } from "@/data/content";
const ids = ["sobre", "projetos", "tecnologias", "trajetoria", "contato"];
function External({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
export default function Portfolio() {
  const [language, setLanguage] = useState<Language>("pt");
  const [light, setLight] = useState(false);
  const [open, setOpen] = useState(false);
  const t = content[language];
  useEffect(() => {
    let lang: Language = "pt";
    try {
      lang = localStorage.getItem("language") === "en" ? "en" : "pt";
    } catch {}
    // Restore saved browser preferences after hydration.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLanguage(lang);
    setLight(document.documentElement.dataset.theme === "light");
    document.documentElement.classList.add("motion-ready");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.08 },
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", escape);
    return () => {
      observer.disconnect();
      document.removeEventListener("keydown", escape);
    };
  }, []);
  function toggleLanguage() {
    const next = language === "pt" ? "en" : "pt";
    setLanguage(next);
    document.documentElement.lang = next === "pt" ? "pt-BR" : "en";
    try {
      localStorage.setItem("language", next);
    } catch {}
  }
  function toggleTheme() {
    const next = !light;
    setLight(next);
    document.documentElement.dataset.theme = next ? "light" : "dark";
    try {
      localStorage.setItem("theme", next ? "light" : "dark");
    } catch {}
  }
  return (
    <>
      <a className="skip" href="#main">
        {t.skip}
      </a>
      <header className="header">
        <div className="header-inner">
          <a href="#inicio" className="logo" aria-label="Gustavo Sérgio">
            g<span>s</span>
            <i>.</i>
          </a>
          <nav
            className="desktop-nav"
            aria-label={
              language === "pt" ? "Navegação principal" : "Main navigation"
            }
          >
            {ids.map((id, i) => (
              <a key={id} href={`#${id}`}>
                {t.nav[i]}
              </a>
            ))}
          </nav>
          <div className="controls">
            <button
              onClick={toggleLanguage}
              aria-label={t.language}
              className="language"
            >
              {language.toUpperCase()}
              <span> / {language === "pt" ? "EN" : "PT"}</span>
            </button>
            <span className="divider" />
            <button
              className="icon-button"
              onClick={toggleTheme}
              aria-label={t.theme}
            >
              {light ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button
              className="icon-button mobile-toggle"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? t.close : t.menu}
              onClick={() => setOpen(!open)}
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {open && (
          <nav
            id="mobile-menu"
            className="mobile-nav"
            aria-label={
              language === "pt" ? "Navegação móvel" : "Mobile navigation"
            }
          >
            {ids.map((id, i) => (
              <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
                {t.nav[i]}
              </a>
            ))}
          </nav>
        )}
      </header>
      <main id="main">
        <section id="inicio" className="hero container">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" />
              {t.eyebrow}
            </div>
            <p className="greeting">{t.greeting}</p>
            <h1>
              Gustavo Sérgio<span className="accent">.</span>
            </h1>
            <h2>
              {t.headline}
              <br />
              <span>{t.headlineEnd}</span>
            </h2>
            <p className="intro">{t.intro}</p>
            <div className="hero-actions">
              <a className="button primary" href="#projetos">
                {t.projects}
                <ArrowUpRight size={18} />
              </a>
              <a className="button secondary" href="#contato">
                {t.contact}
                <ArrowRight size={17} />
              </a>
            </div>
            <External
              href="https://github.com/gustavosergio"
              className="social"
            >
              <Github size={18} />
              GitHub
              <ArrowUpRight size={14} />
            </External>
          </div>
          <div className="portrait-area">
            <span className="orbit orbit-one" />
            <span className="orbit orbit-two" />
            <div className="portrait-card">
              <div className="portrait-top">
                <span />
                <span />
                <span />
                <Code2 size={17} />
              </div>
              <div className="portrait-image">
                <Image
                  src="/fotominha3.jpeg"
                  alt={t.portrait}
                  width={270}
                  height={367}
                  priority
                  sizes="(max-width: 700px) 80vw, 340px"
                />
              </div>
              <div className="portrait-caption">
                <span>{t.captionSmall}</span>
                <p>{t.caption}</p>
              </div>
            </div>
            <div className="floating-label">
              <span className="code-icon">
                <Code2 size={20} />
              </span>
              <div>
                Full Stack<span>Next.js · React · TypeScript</span>
              </div>
              <span className="status-dot" />
            </div>
            <span className="decor-plus plus-one">+</span>
            <span className="decor-plus plus-two">+</span>
          </div>
          <a href="#sobre" className="scroll-hint">
            <ArrowDown size={15} />
            {t.scroll}
            <span>01 — 05</span>
          </a>
        </section>
        <section id="sobre" className="section container reveal">
          <p className="section-label">{t.aboutLabel}</p>
          <div className="about-grid">
            <div>
              <h2 className="section-title">{t.aboutTitle}</h2>
              <p className="body-text">{t.aboutText}</p>
              <p className="body-text">{t.aboutText2}</p>
            </div>
            <div className="about-facts">
              {[
                [GraduationCap, t.study, t.studySub],
                [Layers3, t.approach, t.approachSub],
                [Sparkles, t.mindset, t.mindsetSub],
              ].map(([Icon, title, sub], i) => {
                const I = Icon as typeof GraduationCap;
                return (
                  <div className="fact" key={i}>
                    <span className="fact-icon">
                      <I size={22} />
                    </span>
                    <div>
                      <h3>{title as string}</h3>
                      <p>{sub as string}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section id="projetos" className="section container reveal">
          <div className="section-heading">
            <div>
              <p className="section-label">{t.projectsLabel}</p>
              <h2 className="section-title">{t.projectsTitle}</h2>
            </div>
            <p>{t.projectsIntro}</p>
          </div>
          <div className="projects-grid">
            {projects.map((project, i) => (
              <article className="project-card" key={project.id}>
                <div className={`project-art art-${project.id}`}>
                  <span className="art-number">0{i + 1}</span>
                  {i === 0 ? (
                    <div className="shop-concept">
                      <span>DONA SIL</span>
                      <div className="shop-line" />
                      <h3>{t.shop}</h3>
                      <p>{t.shopSub}</p>
                      <div className="swatches">
                        <span />
                        <span />
                        <span />
                      </div>
                    </div>
                  ) : (
                    <div className="doctor-concept">
                      <span className="doctor-monogram">J.</span>
                      <h3>{t.doctor}</h3>
                      <p>{t.doctorSub}</p>
                      <div className="doctor-line" />
                    </div>
                  )}
                  <span className="concept-label">{t.concept}</span>
                </div>
                <div className="project-info">
                  <p className="section-label">
                    {i === 0 ? t.firstType : t.secondType}
                  </p>
                  <h3>
                    {language === "en" && project.id === "juliana"
                      ? "Landing Page — Dr. Juliana"
                      : project.name}
                  </h3>
                  <p>{i === 0 ? t.firstDesc : t.secondDesc}</p>
                  <div className="tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    {i === 0 ? (
                      <External href={project.repo}>
                        <Github size={16} />
                        {t.source}
                      </External>
                    ) : (
                      <span className="unavailable">{t.unavailable}</span>
                    )}
                    {project.live && (
                      <External href={project.live}>
                        {t.live}
                        <ArrowUpRight size={16} />
                      </External>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section id="tecnologias" className="section container reveal">
          <p className="section-label">{t.techLabel}</p>
          <h2 className="section-title">{t.techTitle}</h2>
          <p className="section-intro">{t.techIntro}</p>
          <div className="tech-grid">
            {technologies.map(([name, mark]) => (
              <div className="tech-card" key={name}>
                {name === "GitHub" ? (
                  <Github size={25} />
                ) : (
                  <span
                    aria-hidden="true"
                    className={`tech-mark tech-${name.replace(/[^a-z]/gi, "").toLowerCase()}`}
                  >
                    {mark}
                  </span>
                )}
                <span>{name}</span>
              </div>
            ))}
          </div>
        </section>
        <section id="trajetoria" className="section container reveal">
          <p className="section-label">{t.journeyLabel}</p>
          <h2 className="section-title">{t.journeyTitle}</h2>
          <div className="journey-grid">
            <article className="journey-card">
              <BriefcaseBusiness className="purple" size={24} />
              <p className="overline">{t.experience}</p>
              <h3>{t.role}</h3>
              <p className="company">{t.company}</p>
              <p className="body-text">{t.job}</p>
            </article>
            <div className="education-stack">
              <article className="journey-card">
                <GraduationCap className="purple" size={24} />
                <p className="overline">{t.education}</p>
                <h3>{t.degree}</h3>
                <p>{t.university}</p>
                <span className="semester">{t.semester}</span>
              </article>
              <article className="certificates">
                <Sparkles size={20} />
                <div>
                  <h3>{t.certificates}</h3>
                  <p>{t.certificatesText}</p>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section id="contato" className="container section reveal">
          <div className="contact-panel">
            <div>
              <p className="section-label">{t.contactLabel}</p>
              <h2>
                {t.contactTitle}
                <br />
                <span>{t.contactEnd}</span>
              </h2>
              <p>{t.contactText}</p>
              <External
                href="https://github.com/gustavosergio"
                className="button primary"
              >
                {t.githubContact}
                <ArrowUpRight size={18} />
              </External>
            </div>
            <div className="contact-options">
              <External href="https://github.com/gustavosergio">
                <Github size={20} />
                <span>
                  GitHub<small>@gustavosergio</small>
                </span>
                <ArrowUpRight size={20} />
              </External>
              {["LinkedIn", t.email, t.resume].map((label, i) => (
                <button key={label} disabled>
                  {i === 2 ? (
                    <FileDown size={20} />
                  ) : (
                    <span className="contact-symbol">
                      {i === 0 ? "in" : "@"}
                    </span>
                  )}
                  <span>
                    {label}
                    <small>{t.pending}</small>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="container footer">
        <a className="logo" href="#inicio">
          g<span>s</span>
          <i>.</i>
        </a>
        <p>
          © {new Date().getFullYear()} {t.rights} <span>· {t.footer}</span>
        </p>
        <a href="#inicio" aria-label={t.back}>
          <ArrowUpRight size={20} />
        </a>
      </footer>
    </>
  );
}
