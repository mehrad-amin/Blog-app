import styles from "@/app/components/Comment/Comments.module.css";
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
    </div>
  );
};

export default Comments;
