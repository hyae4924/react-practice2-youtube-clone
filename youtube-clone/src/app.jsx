// import styles from "./app.module.css";
import { useEffect, useState } from "react";
import Serach from "./components/serach/serach";
import Videos from "./components/videos/videos";

function App({ youtube }) {
  const [videoDatas, setVideoDatas] = useState([]);

  const searchHandle = async query => {
    const data = await youtube.search(query);
    setVideoDatas(data);
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
      <Serach searchHandle={searchHandle} />
      <Videos videoDatas={videoDatas} />
    </>
  );
}

export default App;
