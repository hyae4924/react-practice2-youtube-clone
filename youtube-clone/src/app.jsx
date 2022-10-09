import styles from "./app.module.css";
import { useEffect, useState } from "react";
import Serach from "./components/serach/serach";
import Videos from "./components/videos/videos";
import SelectedVideo from "./components/selected_video/selected_video";
function App({ youtube }) {
  const [videoDatas, setVideoDatas] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const selected_video_className = selectedVideo ? "side" : "main";

  const searchHandle = async query => {
    const data = await youtube.search(query);
    setVideoDatas(data);
    setSelectedVideo(null);
  };
  const selectHandle = async video => {
    setSelectedVideo(video);
  };
  useEffect(() => {
    const firstRender = async () => {
      const data = await youtube.mostPopular();
      setVideoDatas(data);
    };
    firstRender();
  }, []);

  return (
    <>
      <div className={styles.app}>
        <Serach searchHandle={searchHandle} />
        <section className={styles.content}>
          {selectedVideo && (
            <div className={styles.selected}>
              <SelectedVideo video={selectedVideo} />
            </div>
          )}
          <div className={styles.list}>
            <Videos
              className={selected_video_className}
              selectHandle={selectHandle}
              videoDatas={videoDatas}
            />
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
