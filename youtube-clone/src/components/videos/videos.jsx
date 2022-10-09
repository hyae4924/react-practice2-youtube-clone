import React from "react";
import Video from "../video/video";
import styles from "./videos.module.css";
function Videos({ className, videoDatas, selectHandle }) {
  return (
    <ul className={styles.videos}>
      {videoDatas.map(video => (
        <Video
          className={className}
          selectHandle={selectHandle}
          key={video.id}
          video={video}
        ></Video>
      ))}
    </ul>
  );
}

export default Videos;
