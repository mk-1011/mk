"use client";

import styles from "@/styles/scrollscene.module.css";

export default function AsciiObject({
  scrollY,
  index,
  ascii,
}: {
  scrollY: number;
  index: number;
  ascii: string;
}) {
  const depth = 400 - scrollY * 0.4 - index * 80;
  const yMove = scrollY * 0.2 - index * 60;
  const rotate = scrollY * 0.05;

  const style = {
    transform: `
      perspective(1000px)
      translateY(${yMove}px)
      translateZ(${depth}px)
      rotateX(${rotate}deg)
      rotateY(${rotate * 0.5}deg)
    `,
    opacity: Math.max(0, 1 - scrollY / 800),
  };

  return (
    <div className={styles.ascii} style={style}>
      {ascii}
    </div>
  );
}