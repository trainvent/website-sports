import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
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
