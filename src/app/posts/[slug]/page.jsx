import styles from "@/app/posts/[slug]/singlePage.module.css";
import Comments from "@/components/Comment/Comments";
import Menu from "@/components/Menu/Menu";
import Image from "next/image";
const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
};

const SinglePage = async ({ params }) => {
  const { slug } = await params;
  const data = await getData(slug);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{data?.title}</h1>
          <div className={styles.user}>
            {data?.user.image && (
              <div className={styles.userImageContainer}>
                <Image
                  src={data.user.image}
                  alt="user image"
                  fill
                  className={styles.avatar}
                />
              </div>
            )}
            <div className={styles.userTextContainer}>
              <span className={styles.userName}>{data?.user.name}</span>
              <span className={styles.Date}>
                {data?.createdAt.substring(0, 10)}
              </span>
            </div>
          </div>
        </div>
        {data?.img && (
          <div className={styles.imgContainer}>
            <Image
              src="/p1.jpeg"
              alt="post image"
              fill
              className={styles.Image}
            />
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div
            className={styles.desc}
            dangerouslySetInnerHTML={{ __html: data?.desc }}
          />
          <div className={styles.commentsSection}>
            <Comments postSlug={slug} />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
