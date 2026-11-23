import Link from "next/link";
import { Shell } from "@/components/site";
import { CONTENT, PATHS, type Lang } from "@/lib/content";
import { GUIDES, readDoc, type GuideSlug } from "@/lib/docs";

const other = (lang: Lang): Lang => (lang === "en" ? "de" : "en");

/** Side tree: every guide, with the open guide's sections below it. */
function DocsNav({ lang, current }: { lang: Lang; current?: GuideSlug }) {
  const text = CONTENT[lang].docs;
  return (
    <nav className="docs-nav" aria-label={text.guides}>
      <p className="docs-nav-title">{text.guides}</p>
        <ul>
          {GUIDES.map(guide => {
            const doc = readDoc(lang, guide.slug);
            const open = guide.slug === current;
            return (
              <li key={guide.slug}>
                <Link href={`${PATHS[lang].docs}${guide.slug}/`} aria-current={open ? "page" : undefined}>{doc.title}</Link>
                {open && doc.headings.length > 0 && (
                  <ul aria-label={text.contents}>
                    {doc.headings.map(heading => <li key={heading.id}><a href={`#${heading.id}`}>{heading.text}</a></li>)}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
    </nav>
  );
}

export function DocsIndex({ lang }: { lang: Lang }) {
  const text = CONTENT[lang].docs;
  return (
    <Shell lang={lang} other={PATHS[other(lang)].docs} wide>
      <div className="docs">
        <DocsNav lang={lang} />
        <article className="doc">
          <h1>{text.title}</h1>
          <p className="lead">{text.lead}</p>
          <ul className="doc-list">
            {GUIDES.map(guide => {
              const doc = readDoc(lang, guide.slug);
              return (
                <li key={guide.slug}>
                  <Link href={`${PATHS[lang].docs}${guide.slug}/`}>{doc.title}</Link>
                  <p className="muted">{doc.summary}</p>
                </li>
              );
            })}
          </ul>
        </article>
      </div>
    </Shell>
  );
}

export function DocPage({ lang, slug }: { lang: Lang; slug: GuideSlug }) {
  const doc = readDoc(lang, slug);
  return (
    <Shell lang={lang} other={`${PATHS[other(lang)].docs}${slug}/`} wide>
      <div className="docs">
        <DocsNav lang={lang} current={slug} />
        {/* The guides are this project's own Markdown, rendered at build time. */}
        <article className="doc" dangerouslySetInnerHTML={{ __html: doc.html }} />
      </div>
    </Shell>
  );
}

export const docTitle = (lang: Lang, slug: GuideSlug): string => readDoc(lang, slug).title;
export const docParams = () => GUIDES.map(guide => ({ slug: guide.slug }));
export const isGuide = (slug: string): slug is GuideSlug => GUIDES.some(guide => guide.slug === slug);
