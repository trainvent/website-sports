import type { Metadata } from "next";
import { HomePage } from "@/components/site";
import { PATHS, languageAlternates } from "@/lib/content";

export const metadata: Metadata = { alternates: languageAlternates("de", { en: PATHS.en.home, de: PATHS.de.home }) };

export default function Page() {
  return <HomePage lang="de" />;
}
