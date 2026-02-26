import React from "react";
import styles from "@/app/blog/blogPage.module.css";
import Menu from "@/components/Menu/Menu";
import CardList from "@/components/CardList/CardList";

const BlogPage = async ({ searchParams }) => {
  const params = await searchParams;
  const page = parseInt(params.page) || 1;
  const { cat } = params;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{cat} Blog</h1>
      <div className={styles.content}>
        <CardList page={page} cat={cat} />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
