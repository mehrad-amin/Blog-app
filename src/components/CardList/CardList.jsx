import styles from "@/components/CardList/CardList.module.css";
import Card from "@/components/Card/Card";
import Pagination from "@/components/Pagination/Pagination";

const getData = async (page, cat) => {
  const res = await fetch(
    `http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`,
    {
      cache: "no-store",
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
};
const CardList = async ({ page, cat }) => {
  const { posts, count } = await getData(page, cat);
  const POST_PER_PAGE = 2;
  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {/* Posts will be rendered here */}
        {posts?.map((item) => (
          <Card key={item._id} item={item} />
        ))}
        {/* <Card />
        <Card />
        <Card /> */}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
};

export default CardList;
