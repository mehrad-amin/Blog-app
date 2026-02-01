import styles from "@/app/components/Comment/comment.module.css";
import Image from "next/image";
import Link from "next/link";

const Comments = () => {
  const status = "authenticated"; // "unauthenticated"
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.writeCommentContainer}>
          <textarea
            className={styles.textarea}
            placeholder="Write your comment here..."
          ></textarea>
          <button className={styles.sendButton}>Send</button>
        </div>
      ) : (
        <Link href="/login">Login to post a comment</Link>
      )}
      <div className={styles.commentsList}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt="user image"
              width={50}
              height={50}
              className={styles.userImage}
            />
            <div className={styles.userInfo}>
              <span className={styles.commentAuthor}>Mehrad</span>
              <span className={styles.commentDate}>1.1.2026</span>
            </div>
          </div>
          <p className={styles.commentText}>This is a sample comment text.</p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt="user image"
              width={50}
              height={50}
              className={styles.userImage}
            />
            <div className={styles.userInfo}>
              <span className={styles.commentAuthor}>Mehrad</span>
              <span className={styles.commentDate}>1.1.2026</span>
            </div>
          </div>
          <p className={styles.commentText}>This is a sample comment text.</p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt="user image"
              width={50}
              height={50}
              className={styles.userImage}
            />
            <div className={styles.userInfo}>
              <span className={styles.commentAuthor}>Mehrad</span>
              <span className={styles.commentDate}>1.1.2026</span>
            </div>
          </div>
          <p className={styles.commentText}>This is a sample comment text.</p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt="user image"
              width={50}
              height={50}
              className={styles.userImage}
            />
            <div className={styles.userInfo}>
              <span className={styles.commentAuthor}>Mehrad</span>
              <span className={styles.commentDate}>1.1.2026</span>
            </div>
          </div>
          <p className={styles.commentText}>This is a sample comment text.</p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
