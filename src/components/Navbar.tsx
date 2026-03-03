"use client";

import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import styles from "./Navbar.module.css";

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <Logo />
            <ThemeToggle />
        </nav>
    );
}