import CardList from "@/components/CardList/CardList";
import CategoryList from "@/components/CategoryList/CategoryList";
import Featured from "@/components/Featured/Featured";
import styles from "@/app/page.module.css";
import Menu from "@/components/Menu/Menu";
import Pagination from "@/components/Pagination/Pagination";
export default async function Home({ searchParams }) {
  const params = await searchParams;
  const page = parseInt(params.page) || 1;

  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList page={page} />
        <Menu />
      </div>
    </div>
  );
}
