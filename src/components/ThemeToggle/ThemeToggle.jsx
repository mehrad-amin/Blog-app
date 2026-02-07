"use client";
import styles from "@/components/ThemeToggle/ThemeToggle.module.css";
import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";
import { useContext } from "react";

const ThemeToggle = () => {
  const { toggle, theme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <div
      className={styles.container}
      style={
        theme === "dark" ? { background: "#ffffff" } : { background: "#0f172a" }
      }
      onClick={() => toggle()}
    >
      <Image src="/moon.png" alt="Theme Toggle" height={14} width={14} />
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? { left: 1, background: "#0f172a" }
            : { right: 1, background: "#ffffff" }
        }
      ></div>
      <Image src="/sun.png" alt="Theme Toggle" height={14} width={14} />
    </div>
  );
};

export default ThemeToggle;
