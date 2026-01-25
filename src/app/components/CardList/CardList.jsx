import styles from "@/app/components/CardList/CardList.module.css";
import Image from "next/image";
import Card from "@/app/components/Card/Card";
const CardList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {/* Posts will be rendered here */}
        <div className={styles.post}>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default CardList;
