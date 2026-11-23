import type { Metadata } from "next";
import { SITE_URL } from "@/lib/content";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Sports for Obsidian", template: "%s · Sports" },
  description: "Training plans, workouts from your watch and progress charts in Obsidian.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
