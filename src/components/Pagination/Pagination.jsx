import React from "react";
import styles from "@/components/Pagination/Pagination.module.css";

const Pagination = () => {
  return (
    <div className={styles.container}>
      <button className={styles.button}>Previous</button>
      <button className={styles.button}>Next</button>
    </div>
  );
};

export default Pagination;
