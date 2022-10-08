import React from "react";
import Video from "../video/video";
import styles from "./videos.module.css";
function Videos({ videoDatas }) {
  return (
    <ul className={styles.videos}>
      {videoDatas.map(video => (
        <Video key={video.id} video={video}></Video>
      ))}
    </ul>
  );
}

export default Videos;
