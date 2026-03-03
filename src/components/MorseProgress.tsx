"use client";

import { useEffect, useState } from "react";
import styles from "./MorseProgress.module.css";

export default function MorseProgress() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrollProgress = window.scrollY / totalHeight;
      setScroll(scrollProgress * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.container}>
      <div
        className={styles.progress}
        style={{ width: `${scroll}%` }}
      />
    </div>
  );
}