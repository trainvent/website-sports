import type { Metadata } from "next";
import { PrivacyPage } from "@/components/site";
import { PATHS, languageAlternates } from "@/lib/content";

export const metadata: Metadata = { title: "Privacy policy", alternates: languageAlternates("en", { en: PATHS.en.privacy, de: PATHS.de.privacy }) };

export default function Page() {
  return <PrivacyPage lang="en" />;
}
