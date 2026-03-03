import MorseProgress from "@/components/MorseProgress";
import styles from "./Hero.module.css";
import AsciiFormation from "@/components/AsciiFormation";

export default function Hero() {
  return (
    <>
      <AsciiFormation />
      <section style={{ height: "200vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div>
          <h1>MK — Manasa Kallam</h1>
          <p>Artificial Intelligence × Systems</p>
        </div>
      </section>
    </>
  );
}