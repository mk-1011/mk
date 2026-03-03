import styles from "./LoadingScreen.module.css";

export default function LoadingScreen() {
  return (
    <div className={styles.loader}>
      <div className={styles.morse}>-- -.-</div>
      <div className={styles.text}>initializing signal...</div>
    </div>
  );
}