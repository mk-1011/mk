"use client";
import { useState } from "react";
import styles from "@/styles/sections.module.css";

export default function Contact() {
  const [message, setMessage] = useState("");

  return (
    <section id="contact" className={styles.section}>
      <h2>Contact</h2>
      <textarea
        placeholder="Transmit message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className={styles.textarea}
      />
      <button className={styles.button}>Send</button>
    </section>
  );
}