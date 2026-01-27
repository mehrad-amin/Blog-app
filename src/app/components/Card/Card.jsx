import styles from "@/app/components/Card/Card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/p1.jpeg" alt="Post Image" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>1.1.2026 - </span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <h1>
          <Link href="/">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Link>
        </h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos tempora
          reiciendis deleniti aliquam, id, earum maiores possimus recusandae
          unde ut dolorum. Error, cupiditate provident. Numquam.
        </p>
        <Link href="/" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
