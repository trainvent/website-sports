import type { Metadata } from "next";
import { PrivacyPage } from "@/components/site";

export const metadata: Metadata = { title: "Privacy policy" };

export default function Page() {
  return <PrivacyPage lang="en" />;
}
