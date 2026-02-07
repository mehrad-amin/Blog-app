import styles from "@/components/Navbar/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLink from "@/components/AuthLink/AuthLink";
import ThemeToggle from "@/components/ThemeToggle/ThemeToggle";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.png" alt="Facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="Instagram" width={24} height={24} />
        <Image src="/tiktok.png" alt="TikTok" width={24} height={24} />
        <Image src="/youtube.png" alt="YouTube" width={24} height={24} />
      </div>
      <div className={styles.logo}>Blog</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>
          Home
        </Link>
        <Link href="/about" className={styles.link}>
          About
        </Link>
        <Link href="/contact" className={styles.link}>
          Contact
        </Link>
        <AuthLink />
      </div>
    </div>
  );
};

export default Navbar;
