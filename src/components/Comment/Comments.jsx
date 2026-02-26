"use client";
import styles from "@/components/Comment/comment.module.css";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import useSWR from "swr";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }
  return data;
};
const Comments = ({ postSlug }) => {
  const [desc, setDesc] = useState("");
  const [isSending, setIsSending] = useState(false);

  const { status } = useSession();
  const { data, mutate, isLoading } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetcher,
  );
  const sendHandler = async () => {
    if (!desc.trim()) return;
    setIsSending(true);
    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          desc,
          postSlug,
        }),
      });
      if (res.ok) {
        setDesc("");
        mutate(); // بروزرسانی لیست SWR
      }
    } catch (error) {
      console.error("Error sending comment:", error);
    } finally {
      setIsSending(false);
    }
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.writeCommentContainer}>
          <textarea
            className={styles.textarea}
            placeholder="Write your comment here..."
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            disabled={isSending}
          ></textarea>
          <button
            className={styles.sendButton}
            onClick={sendHandler}
            disabled={isSending || !desc.trim()}
          >
            {isSending ? "Sending..." : "Send"}
          </button>
        </div>
      ) : (
        <Link href="/login">Login to post a comment</Link>
      )}
      <div className={styles.commentsList}>
        {isLoading
          ? // تعداد ۵ عدد اسکلتون برای شبیه‌سازی لیست کامنت‌ها
            Array(3)
              .fill(0)
              .map((_, i) => (
                <div key={i} style={{ marginBottom: "1.5rem" }}>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <Skeleton circle width={50} height={50} /> {/* جای عکس */}
                    <div>
                      <Skeleton width={100} /> {/* جای نام */}
                      <Skeleton width={60} height={10} /> {/* جای تاریخ */}
                    </div>
                  </div>
                  <Skeleton count={1} style={{ marginTop: "10px" }} />{" "}
                  {/* جای متن کامنت */}
                </div>
              ))
          : data?.map((item) => (
              <div className={styles.comment} key={item._id}>
                <div className={styles.user}>
                  {item?.user.image && (
                    <Image
                      src={item.user.image}
                      alt="user image"
                      width={50}
                      height={50}
                      className={styles.userImage}
                    />
                  )}
                  <div className={styles.userInfo}>
                    <span className={styles.commentAuthor}>
                      {item.user.name}
                    </span>
                    <span className={styles.commentDate}>
                      {item.createdAt.substring(0, 10)}
                    </span>
                  </div>
                </div>
                <p className={styles.commentText}>{item.desc}</p>
              </div>
            ))}

        {/* <div className={styles.comment}>
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
        </div> */}
      </div>
    </div>
  );
};

export default Comments;
