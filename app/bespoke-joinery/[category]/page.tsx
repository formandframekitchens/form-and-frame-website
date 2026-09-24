import { notFound } from "next/navigation";
import { JoineryCategoryPage } from "../../components/joinery-category-page";
import { getJoineryCategory, joineryCategories } from "../../lib/joinery-categories";
import { serviceMetadata } from "../../lib/service-metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return joineryCategories.map(({ slug }) => ({ category: slug }));
}

export async function generateMetadata({ params }: PageProps<"/bespoke-joinery/[category]">) {
  const category = getJoineryCategory((await params).category);
  if (!category) notFound();
  return serviceMetadata(`${category.title} in Luton`, `${category.copy} Bespoke joinery from Form & Frame in Luton, Bedfordshire and Hertfordshire.`, `/bespoke-joinery/${category.slug}`);
}

export default async function Page({ params }: PageProps<"/bespoke-joinery/[category]">) {
  const category = getJoineryCategory((await params).category);
  if (!category) notFound();
  return <JoineryCategoryPage category={category} />;
}
