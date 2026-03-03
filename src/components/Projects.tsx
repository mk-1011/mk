"use client";
import Link from "next/link";
import { projects } from "@/data/projects";
import styles from "@/styles/projects.module.css";

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <h2>Projects</h2>
      <div className={styles.grid}>
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className={styles.card}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className={styles.tags}>
              {project.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}