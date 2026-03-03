import styles from "@/styles/sections.module.css";

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <h2>Classified Skills</h2>
      <div className={styles.skillGrid}>
        <div className={styles.card}>Machine Learning</div>
        <div className={styles.card}>System Design</div>
        <div className={styles.card}>Distributed Systems</div>
        <div className={styles.card}>TypeScript</div>
        <div className={styles.card}>Next.js</div>
        <div className={styles.card}>Python</div>
      </div>
    </section>
  );
}