import { notFound } from "next/navigation";
import { JoineryCategoryPage } from "../../components/joinery-category-page";
import { getJoineryCategory, joineryCategories } from "../../lib/joinery-categories";
import { serviceMetadata } from "../../lib/service-metadata";
import { joineryServiceCopy } from "../../lib/joinery-service-copy";
import { categoriesForProject } from "../../lib/gallery-catalog";
import { publicGalleryProjects } from "../../lib/gallery-projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return joineryCategories.map(({ slug }) => ({ category: slug }));
}

export async function generateMetadata({ params }: PageProps<"/bespoke-joinery/[category]">) {
  const category = getJoineryCategory((await params).category);
  if (!category) notFound();
  const copy = joineryServiceCopy[category.slug];
  const cover = category.slug === "under-stairs-storage" ? undefined : publicGalleryProjects.find(project => categoriesForProject(project).includes(category.slug as Exclude<typeof category.slug, "under-stairs-storage">))?.cover;
  return serviceMetadata(copy.seoTitle, copy.description, `/bespoke-joinery/${category.slug}`, cover);
}

export default async function Page({ params }: PageProps<"/bespoke-joinery/[category]">) {
  const category = getJoineryCategory((await params).category);
  if (!category) notFound();
  return <JoineryCategoryPage category={category} />;
}
