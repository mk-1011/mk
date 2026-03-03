import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <span className={styles.main}>MK</span>
      <span className={styles.morse}>-- -.-</span>
    </div>
  );
}