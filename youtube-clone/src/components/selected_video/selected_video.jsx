import React from "react";
import styles from "./selected_video.module.css";

function SelectedVideo({ video, video: { id, snippet } }) {
  return (
    <>
      <iframe
        title="video"
        className={styles.video}
        type="text/html"
        width="100%"
        height="500px"
        src={`https://www.youtube.com/embed/${id}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className={styles.description}>
        <h1 className={styles.title}>{video.snippet.title}</h1>
        <h3>{snippet.channelTitle}</h3>
        <p>{snippet.description}</p>
      </div>
    </>
  );
}

export default SelectedVideo;
