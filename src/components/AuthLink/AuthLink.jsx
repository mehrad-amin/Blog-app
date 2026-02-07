"use client";
import styles from "@/components/AuthLink/AuthLink.module.css";
import Link from "next/link";
import { useState } from "react";

const AuthLink = () => {
  const [open, setOpen] = useState(false);
  const status = "Not Authenticated";
  return (
    <>
      {status === "Not Authenticated" ? (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>
            Write
          </Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      <div className={`${styles.responsiveMenu} ${open ? styles.open : ""}`}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        {status === "Not Authenticated" ? (
          <Link href="/login">Login</Link>
        ) : (
          <>
            <Link href="/write">Write</Link>
            <span className={styles.logout}>Logout</span>
          </>
        )}
      </div>
    </>
  );
};

export default AuthLink;
