"use client";

import { useEffect, useState } from "react";
import styles from "@/styles/scrollscene.module.css";
import AsciiObject from "./AsciiObject";

export default function ScrollScene() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.scene}>
      <AsciiObject scrollY={scrollY} index={0} ascii="</>" />
      <AsciiObject scrollY={scrollY} index={1} ascii="[AI]" />
      <AsciiObject scrollY={scrollY} index={2} ascii="{SYS}" />
      <AsciiObject scrollY={scrollY} index={3} ascii="0101" />
    </div>
  );
}