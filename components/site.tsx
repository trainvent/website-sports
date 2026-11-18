import Link from "next/link";
import type { ReactNode } from "react";
import { CONTENT, LINKS, PATHS, POLICY_DATE, type Lang } from "@/lib/content";

function Shell({ lang, other, children }: { lang: Lang; other: string; children: ReactNode }) {
  const text = CONTENT[lang];
  return (
    <>
      <header className="bar">
        <Link href={PATHS[lang].home} className="brand">
          {/* eslint-disable-next-line @next/next/no-img-element -- static export serves the SVG as is */}
          <img src="/logo.svg" alt="" width={28} height={28} />
          <span>Sports</span>
        </Link>
        <nav>
          <Link href={PATHS[lang].privacy}>{text.nav.privacy}</Link>
          <Link href={other} hrefLang={lang === "en" ? "de" : "en"}>{text.switchLabel}</Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="bar">
        <span>© 2026 {text.footer}</span>
        <nav>
          <Link href={PATHS[lang].privacy}>{text.nav.privacy}</Link>
          <a href={LINKS.imprint}>{text.nav.imprint}</a>
        </nav>
      </footer>
    </>
  );
}

export function HomePage({ lang }: { lang: Lang }) {
  const text = CONTENT[lang].home;
  return (
    <Shell lang={lang} other={PATHS[lang === "en" ? "de" : "en"].home}>
      <section className="hero">
        <h1>{text.title}</h1>
        <p className="lead">{text.lead}</p>
        <div className="actions">
          <a className="button primary" href={LINKS.plugin}>{text.primary}</a>
          <a className="button" href={LINKS.docs}>{text.secondary}</a>
        </div>
      </section>
      <section>
        <h2>{text.featuresHeading}</h2>
        <ul className="features">{text.features.map(item => <li key={item}>{item}</li>)}</ul>
      </section>
      <section id="google-health">
        <h2>{text.googleHeading}</h2>
        {text.google.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
        <p><Link href={PATHS[lang].privacy}>{text.privacyLink}</Link></p>
      </section>
    </Shell>
  );
}

export function PrivacyPage({ lang }: { lang: Lang }) {
  const text = CONTENT[lang].privacy;
  return (
    <Shell lang={lang} other={PATHS[lang === "en" ? "de" : "en"].privacy}>
      <article className="policy">
        <h1>{text.title}</h1>
        <p className="muted">{text.updated}: {POLICY_DATE[lang]}</p>
        {text.sections.map(section => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs.map((paragraph, index) => (
              <div key={paragraph}>
                <p>{paragraph}</p>
                {index === 0 && "list" in section && section.list && <ul>{section.list.map(item => <li key={item}>{item}</li>)}</ul>}
              </div>
            ))}
            {"links" in section && section.links && <p>{section.links.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}</p>}
          </section>
        ))}
      </article>
    </Shell>
  );
}
