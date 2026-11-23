import type { Metadata } from "next";
import { SITE_URL } from "@/lib/content";
import "../../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Sports für Obsidian", template: "%s · Sports" },
  description: "Trainingspläne, Trainings von deiner Uhr und Fortschrittsdiagramme in Obsidian.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
