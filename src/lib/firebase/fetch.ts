import { collection, getDocs, query, where } from "@firebase/firestore";
import { db } from "./firebase";
import { Project, ProjectDetail } from "@/types";

export async function getProjectByCname(
  cname: string
): Promise<ProjectDetail | null> {
  const q = query(collection(db, "project"), where("cname", "==", cname));
  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) return null;

  const d = querySnapshot.docs[0].data();
  return {
    id: querySnapshot.docs[0].id,
    title: d.title,
    description: d.description,
    image: d.image,
    techStack: d.tech_stack,
    linkSC: d.link_sc,
    liveDemo: d.live_demo,
  };
}
