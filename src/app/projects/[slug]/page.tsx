import { projects } from "@/data/projects";
import { notFound } from "next/navigation";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <section style={{ padding: "140px 10%" }}>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <h3>Skills Used</h3>
      <ul>
        {project.skills.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </section>
  );
}