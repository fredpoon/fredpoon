import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="mx-auto">
      <h1 className="text-2xl">sapere-aude</h1>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className="border-2 border-slate-500 rounded-lg p-1 hover:scale-110 hover:border-blue-500 transition"
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={750}
                height={300}
                className="object-cover border border-slate-500 rounded-lg"
              />
            )}
            <div className="font-thin px-2 pt-2">{project.name}</div>
            <div className="text-sm font-semibold px-2 pb-2">
              {project.description}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
