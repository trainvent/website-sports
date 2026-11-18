import type { Metadata } from "next";
import "../../globals.css";

export const metadata: Metadata = {
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
