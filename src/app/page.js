import CardList from "./components/CardList/CardList";
import CategoryList from "./components/CategoryList/CategoryList";
import Featured from "./components/Featured/Featured";
import styles from "@/app/page.module.css";
import Menu from "./components/Menu/Menu";
import Pagination from "./components/Pagination/Pagination";
export default function Home() {
  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
}
