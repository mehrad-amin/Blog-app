import styles from "@/app/components/Featured/Featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <strong>Hey, Mehrad Here!</strong> Discover my stories and creative
        ideas
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image
            src="/p1.jpeg"
            alt="Featured Image"
            fill={true}
            className={styles.image}
          />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.postTitle}>Welcome to My Blog</h2>
          <p className={styles.postDesc}>
            Dive into a world of insights, stories, and creative ideas. Join me
            on this exciting journey!
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
