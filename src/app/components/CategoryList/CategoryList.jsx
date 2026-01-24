import styles from "@/app/components/CategoryList/CategoryList.module.css";
import Image from "next/image";
import Link from "next/link";

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        <div className={styles.category}>
          <Link
            href="/blog?cat=style"
            className={`${styles.categoryItem} ${styles.style}`}
          >
            <Image
              src="/style.png"
              alt="style category"
              width={32}
              height={32}
              className={styles.image}
            />
            style
          </Link>
        </div>
        <div className={styles.category}>
          <Link
            href="/blog"
            className={`${styles.categoryItem} ${styles.fashion}`}
          >
            <Image
              src="/fashion.png"
              alt="fashion category"
              width={32}
              height={32}
              className={styles.image}
            />
            Fashion
          </Link>
        </div>
        <div className={styles.category}>
          <Link
            href="/blog"
            className={`${styles.categoryItem} ${styles.food}`}
          >
            <Image
              src="/food.png"
              alt="food category"
              width={32}
              height={32}
              className={styles.image}
            />
            Food
          </Link>
        </div>
        <div className={styles.category}>
          <Link
            href="/blog"
            className={`${styles.categoryItem} ${styles.travel}`}
          >
            <Image
              src="/travel.png"
              alt="travel category"
              width={32}
              height={32}
              className={styles.image}
            />
            Travel
          </Link>
        </div>
        <div className={styles.category}>
          <Link
            href="/blog"
            className={`${styles.categoryItem} ${styles.culture}`}
          >
            <Image
              src="/culture.png"
              alt="culture category"
              width={32}
              height={32}
              className={styles.image}
            />
            Culture
          </Link>
        </div>
        <div className={styles.category}>
          <Link
            href="/blog"
            className={`${styles.categoryItem} ${styles.coding}`}
          >
            <Image
              src="/coding.png"
              alt="culture category"
              width={32}
              height={32}
              className={styles.image}
            />
            Coding
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
