import { getProjects } from "@/sanity/sanity-utils";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-7xl font-extrabold">Fred Poon</h1>
      {projects.map((project) => (
        <div key={project._id}>{project.name}</div>
      ))}
    </div>
  );
}
