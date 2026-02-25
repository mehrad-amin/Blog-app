"use client";
import styles from "@/components/AuthLink/AuthLink.module.css";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const AuthLink = () => {
  const { status } = useSession();
  const router = useRouter();

  const [open, setOpen] = useState(false);

  return (
    <>
      {status === "unauthenticated" ? (
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
        {status === "unauthenticated" ? (
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
