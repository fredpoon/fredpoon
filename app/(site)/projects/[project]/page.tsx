import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "next-sanity";

type Props = {
  params: { project: string };
};

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <div>
      <header>
        <h1>{project.name}</h1>
      </header>
      <div className="prose">
        <PortableText value={project.content} />
      </div>
    </div>
  );
}
