import styles from "@/components/Menu/Menu.module.css";
import Image from "next/image";
import Link from "next/link";

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <div className={styles.items}>
        <Link href="/" className={styles.item}>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>
              Travel
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Mehrad</span>
              <span className={styles.date}> - 1.1.2026</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.culture}`}>
              Culture
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Mehrad</span>
              <span className={styles.date}> - 1.1.2026</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.food}`}>Food</span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Mehrad</span>
              <span className={styles.date}> - 1.1.2026</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.fashion}`}>
              Fashion
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Mehrad</span>
              <span className={styles.date}> - 1.1.2026</span>
            </div>
          </div>
        </Link>
      </div>
      <h2 className={styles.subtitle}>{"Discover by topic"}</h2>
      <h1 className={styles.title}>Categories</h1>
      <div className={styles.categoryList}>
        <Link
          href="/blog?cat=style"
          className={`${styles.categoryItem} ${styles.style}`}
        >
          Style
        </Link>
        <Link
          href="/blog"
          className={`${styles.categoryItem} ${styles.travel}`}
        >
          Travel
        </Link>
        <Link href="/blog" className={`${styles.categoryItem} ${styles.food}`}>
          Food
        </Link>
        <Link
          href="/blog"
          className={`${styles.categoryItem} ${styles.fashion}`}
        >
          Fashion
        </Link>
        <Link
          href="/blog"
          className={`${styles.categoryItem} ${styles.coding}`}
        >
          Coding
        </Link>
        <Link
          href="/blog"
          className={`${styles.categoryItem} ${styles.culture}`}
        >
          Culture
        </Link>
      </div>
      <h2 className={styles.subtitle}>{"Chosen by the Editor"}</h2>
      <h1 className={styles.title}>Editors Pick</h1>
      <div className={styles.items}>
        <Link href="/" className={styles.item}>
          <div className={styles.imgContainer}>
            <Image
              src="/p1.jpeg"
              alt="Post Image"
              fill
              className={styles.image}
            />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>
              Travel
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Mehrad</span>
              <span className={styles.date}> - 1.1.2026</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.imgContainer}>
            <Image
              src="/p1.jpeg"
              alt="Post Image"
              fill
              className={styles.image}
            />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.culture}`}>
              Culture
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Mehrad</span>
              <span className={styles.date}> - 1.1.2026</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.imgContainer}>
            <Image
              src="/p1.jpeg"
              alt="Post Image"
              fill
              className={styles.image}
            />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.food}`}>Food</span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Mehrad</span>
              <span className={styles.date}> - 1.1.2026</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.imgContainer}>
            <Image
              src="/p1.jpeg"
              alt="Post Image"
              fill
              className={styles.image}
            />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.fashion}`}>
              Fashion
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Mehrad</span>
              <span className={styles.date}> - 1.1.2026</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
