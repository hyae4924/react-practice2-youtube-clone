import React from "react";
import styles from "./video.module.css";
function Video({
  video,
  video: { snippet },
  video: {
    snippet: { thumbnails },
  },
}) {
  return (
    <li className={styles.video}>
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
