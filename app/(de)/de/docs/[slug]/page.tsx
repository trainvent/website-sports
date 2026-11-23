import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DocPage, docParams, docTitle, isGuide } from "@/components/docs";
import { PATHS, languageAlternates } from "@/lib/content";

export const dynamicParams = false;
export const generateStaticParams = docParams;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return isGuide(slug) ? { title: docTitle("de", slug), alternates: languageAlternates("de", { en: `${PATHS.en.docs}${slug}/`, de: `${PATHS.de.docs}${slug}/` }) } : {};
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!isGuide(slug)) notFound();
  return <DocPage lang="de" slug={slug} />;
}
