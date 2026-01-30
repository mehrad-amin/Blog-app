import styles from "@/app/[slug]/singlePage.module.css";
import Menu from "../components/Menu/Menu";
import Image from "next/image";
import Comments from "../components/Comment/Comments";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, quos.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image
                src="/p1.jpeg"
                alt="user image"
                fill
                className={styles.avatar}
              />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.userName}>Mehrad</span>
              <span className={styles.Date}>1.1.2026</span>
            </div>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="/p1.jpeg"
            alt="post image"
            fill
            className={styles.Image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.desc}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel animi
              harum quam aspernatur officiis praesentium ipsa aperiam
              cupiditate, pariatur nesciunt vitae deleniti et doloremque, quasi
              assumenda totam fugiat, culpa eos?
            </p>
            <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel animi
              harum quam aspernatur officiis praesentium ipsa aperiam
              cupiditate, pariatur nesciunt vitae deleniti et doloremque, quasi
              assumenda totam fugiat, culpa eos?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel animi
              harum quam aspernatur officiis praesentium ipsa aperiam
              cupiditate, pariatur nesciunt vitae deleniti et doloremque, quasi
              assumenda totam fugiat, culpa eos?
            </p>
          </div>
          <div className={styles.commentsSection}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
