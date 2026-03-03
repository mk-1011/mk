"use client";

import { useEffect, useRef } from "react";
import styles from "@/styles/asciiFormation.module.css";

const asciiArt = [
  "M   M  K   K",
  "MM MM  K  K ",
  "M M M  KKK  ",
  "M   M  K  K ",
  "M   M  K   K",
];

type Particle = {
  char: string;
  startX: number;
  startY: number;
  startZ: number;
  targetX: number;
  targetY: number;
};

export default function AsciiFormation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const fontSize = 20;
    const spacing = 22;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    const particles: Particle[] = [];

    asciiArt.forEach((row, rowIndex) => {
      row.split("").forEach((char, colIndex) => {
        if (char !== " ") {
          const targetX =
            centerX +
            (colIndex - row.length / 2) * spacing;

          const targetY =
            centerY +
            (rowIndex - asciiArt.length / 2) * spacing;

          particles.push({
            char,
            startX: Math.random() * canvas.width,
            startY: Math.random() * canvas.height,
            startZ: Math.random() * 2000 - 1000,
            targetX,
            targetY,
          });
        }
      });
    });

    particlesRef.current = particles;

    let scrollProgress = 0;

    const handleScroll = () => {
      const maxScroll =
        document.body.scrollHeight - window.innerHeight;
      scrollProgress = window.scrollY / maxScroll;
    };

    window.addEventListener("scroll", handleScroll);

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const perspective = 800;

      particlesRef.current.forEach((p) => {
        // Interpolation
        const x =
          p.startX + (p.targetX - p.startX) * scrollProgress;

        const y =
          p.startY + (p.targetY - p.startY) * scrollProgress;

        const z =
          p.startZ * (1 - scrollProgress);

        const scale = perspective / (perspective + z);

        const projectedX = x * scale;
        const projectedY = y * scale;

        ctx.font = `${fontSize * scale}px monospace`;
        ctx.fillStyle = `rgba(255,255,255,${
          0.2 + 0.8 * scrollProgress
        })`;

        ctx.fillText(
          p.char,
          projectedX,
          projectedY
        );
      });

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={styles.canvas}
    />
  );
}