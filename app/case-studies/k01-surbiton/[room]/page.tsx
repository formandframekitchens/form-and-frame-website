import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyRoom } from "../../../components/case-study-room";
import { getCaseStudy, getK01Room, isCaseStudyPublished, k01NestedRooms, k01Photo, k01RoomDescription, k01RoomHref, k01RoomSlug } from "../../../lib/case-studies";
import { siteUrl } from "../../../lib/site";

type Props=PageProps<"/case-studies/k01-surbiton/[room]">;
function availableRoom(slug:string) { const study=getCaseStudy("k01-surbiton"); return study && isCaseStudyPublished(study)?getK01Room(slug):undefined; }
export function generateStaticParams() { return k01NestedRooms.map(ch=>({room:k01RoomSlug(ch)})); }
export async function generateMetadata({params}:Props):Promise<Metadata> {
  const chapter=availableRoom((await params).room);
  if(!chapter)return {robots:{index:false,follow:false}};
  const title=`K01 ${chapter.label} Case Study | Form & Frame`;
  const description=k01RoomDescription(chapter);
  const url=`${siteUrl}${k01RoomHref(chapter)}`;
  const hero=k01Photo(chapter.photos[0]);
  return {title,description,alternates:{canonical:url},robots:{index:true,follow:true},openGraph:{title,description,url,type:"article",publishedTime:"2026-10-18",modifiedTime:chapter.dateModified ?? "2026-10-18",images:[{url:hero.src,width:hero.width,height:hero.height,alt:hero.alt}]},twitter:{card:"summary_large_image",title,description,images:[hero.src]}};
}
export default async function RoomPage({params}:Props) { const chapter=availableRoom((await params).room); if(!chapter)notFound(); return <CaseStudyRoom chapter={chapter}/>; }
