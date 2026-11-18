import type { Metadata } from "next";
import { PrivacyPage } from "@/components/site";

export const metadata: Metadata = { title: "Datenschutzerklärung" };

export default function Page() {
  return <PrivacyPage lang="de" />;
}
