import styles from "@/components/CategoryList/CategoryList.module.css";
import Image from "next/image";
import Link from "next/link";
const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }
  return res.json();
};

const CategoryList = async () => {
  const data = await getData();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {data.map((category) => (
          <div key={category._id} className={styles.category}>
            <Link
              href={`/blog?cat=${category.slug}`}
              className={`${styles.categoryItem} ${styles[category.slug]}`}
            >
              {category.img && (
                <Image
                  src={category.img}
                  alt={category.title + " category"}
                  width={32}
                  height={32}
                  className={styles.image}
                />
              )}
              {category.title}
            </Link>
          </div>
        ))}
        {/* <div className={styles.category}>
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
        </div> */}
      </div>
    </div>
  );
};

export default CategoryList;
