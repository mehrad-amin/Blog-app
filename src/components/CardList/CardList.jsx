import styles from "@/components/CardList/CardList.module.css";

import Card from "@/components/Card/Card";
import Pagination from "@/components/Pagination/Pagination";
const CardList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {/* Posts will be rendered here */}
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Pagination />
    </div>
  );
};

export default CardList;
