import { readFileSync } from "node:fs";
import { join } from "node:path";
import GithubSlugger from "github-slugger";
import { Marked, type Tokens } from "marked";
import { LINKS, PATHS, type Lang } from "@/lib/content";

/** Guides in reading order, with their file names in the plugin's docs. */
export const GUIDES = [
  { slug: "using-sports", files: { en: "Using-Sports.md", de: "Sports-verwenden.md" } },
  { slug: "workbook", files: { en: "Workbook.md", de: "Arbeitsmappe.md" } },
  { slug: "tracking", files: { en: "Tracking.md", de: "Erfassung.md" } },
  { slug: "troubleshooting", files: { en: "Troubleshooting.md", de: "Fehlerbehebung.md" } },
] as const;
export type GuideSlug = (typeof GUIDES)[number]["slug"];

export interface DocHeading { id: string; text: string }
export interface Doc { slug: GuideSlug; title: string; summary: string; html: string; headings: DocHeading[] }

const decode = (text: string): string =>
  text.replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
const plain = (html: string): string => decode(html.replace(/<[^>]+>/g, "")).trim();
const escapeAttribute = (text: string): string => text.replace(/&/g, "&amp;").replace(/"/g, "&quot;");

/** Links between guides point to their pages; other relative links go to the public repository. */
function rewriteHref(href: string, lang: Lang): string {
  if (/^[a-z]+:/i.test(href) || href.startsWith("#")) return href;
  const [path = "", hash = ""] = href.split(/(?=#)/);
  const file = path.split("/").pop() ?? "";
  const guide = GUIDES.find(item => item.files.en === file || item.files.de === file);
  if (guide) return `${PATHS[lang].docs}${guide.slug}/${hash}`;
  return `${LINKS.plugin}/blob/main/${path.replace(/^(\.\.\/)+/, "")}${hash}`;
}

export function readDoc(lang: Lang, slug: GuideSlug): Doc {
  const source = readFileSync(join(process.cwd(), "content", "docs", lang, `${slug}.md`), "utf8");
  const slugger = new GithubSlugger();
  const headings: DocHeading[] = [];
  let title = "";
  let summary = "";
  const marked = new Marked({ gfm: true });
  marked.use({
    renderer: {
      heading({ tokens, depth }: Tokens.Heading) {
        const inner = this.parser.parseInline(tokens);
        const text = plain(inner);
        if (depth === 1) { title ||= text; return `<h1>${inner}</h1>\n`; }
        const id = slugger.slug(text);
        if (depth === 2) headings.push({ id, text });
        return `<h${depth} id="${escapeAttribute(id)}"><a class="anchor" href="#${escapeAttribute(id)}">${inner}</a></h${depth}>\n`;
      },
      paragraph({ tokens }: Tokens.Paragraph) {
        const inner = this.parser.parseInline(tokens);
        if (!summary && title) summary = plain(inner);
        return `<p>${inner}</p>\n`;
      },
      link({ href, title: linkTitle, tokens }: Tokens.Link) {
        const target = rewriteHref(href, lang);
        const external = /^https?:/.test(target) && !target.startsWith("https://sports.trainvent.com");
        return `<a href="${escapeAttribute(target)}"${linkTitle ? ` title="${escapeAttribute(linkTitle)}"` : ""}${external ? ' rel="noopener"' : ""}>${this.parser.parseInline(tokens)}</a>`;
      },
      table(token: Tokens.Table) {
        const cells = (row: Tokens.TableCell[], tag: "th" | "td") => `<tr>${row.map(cell => `<${tag}${cell.align ? ` style="text-align:${cell.align}"` : ""}>${this.parser.parseInline(cell.tokens)}</${tag}>`).join("")}</tr>`;
        return `<div class="table"><table><thead>${cells(token.header, "th")}</thead><tbody>${token.rows.map(row => cells(row, "td")).join("")}</tbody></table></div>\n`;
      },
    },
  });
  const html = marked.parse(source, { async: false });
  return { slug, title, summary, html, headings };
}
