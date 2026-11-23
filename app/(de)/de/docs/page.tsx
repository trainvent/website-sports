import type { Metadata } from "next";
import { DocsIndex } from "@/components/docs";
import { PATHS, languageAlternates } from "@/lib/content";

export const metadata: Metadata = { title: "Dokumentation", alternates: languageAlternates("de", { en: PATHS.en.docs, de: PATHS.de.docs }) };

export default function Page() {
  return <DocsIndex lang="de" />;
}
