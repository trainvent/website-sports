import type { Metadata } from "next";
import { PrivacyPage } from "@/components/site";
import { PATHS, languageAlternates } from "@/lib/content";

export const metadata: Metadata = { title: "Datenschutzerklärung", alternates: languageAlternates("de", { en: PATHS.en.privacy, de: PATHS.de.privacy }) };

export default function Page() {
  return <PrivacyPage lang="de" />;
}
