import styles from "@/app/components/CardList/CardList.module.css";
import Image from "next/image";
const CardList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {/* Posts will be rendered here */}
        <div className={styles.post}>
          <div className={styles.imgContainer}>
            <Image src="/p1.jpeg" alt="Post Image" fill />
          </div>
          <div className={styles.textContainer}></div>
        </div>
      </div>
    </div>
  );
};

export default CardList;
