import styles from "@/styles/sections.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© MK — Manasa Kallam</p>
      <div>
        <a href="#">GitHub</a>
        <a href="#">LinkedIn</a>
      </div>
    </footer>
  );
}