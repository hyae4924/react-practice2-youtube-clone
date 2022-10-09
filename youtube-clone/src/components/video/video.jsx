import React from "react";
import styles from "./video.module.css";
function Video({
  className,
  video,
  video: { snippet },
  video: {
    snippet: { thumbnails },
  },
  selectHandle,
}) {
  const display = className === "main" ? styles.main : styles.side;
  const onClick = event => {
    selectHandle(video);
  };
  return (
    <li className={`${styles.video} ${display}`} onClick={onClick}>
      <img
        alt="thumbnail-img"
        className={styles.img}
        src={thumbnails.medium.url}
      ></img>
      <div className={styles.description}>
        <p className={styles.title}>{snippet.title}</p>
        <p className={styles.channelTitle}>{snippet.channelTitle}</p>
      </div>
    </li>
  );
}

export default Video;
