// import styles from "./app.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Serach from "./components/serach/serach";
import Videos from "./components/videos/videos";

function App() {
  const key = process.env.REACT_APP_YOUTUBE_API_KEY;
  const [videoDatas, setfirstVideoDatas] = useState([]);
  const searchHandle = async query => {
    const config = {
      method: "get",
      url: `https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&maxResults=25&q=${query}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
      headers: {},
    };
    const result = await axios(config);
    const data = result.data.items.map(item => ({
      ...item,
      id: item.id.videoId,
    }));
    setfirstVideoDatas(data);
  };
  useEffect(() => {
    const config = {
      method: "get",
      url: `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=26&key=${key}`,
      headers: {},
    };
    axios(config).then(result => setfirstVideoDatas(result.data.items));
  }, []);

  // console.log(videoDatas);

  return (
    <>
      <Serach searchHandle={searchHandle} />
      <Videos videoDatas={videoDatas} />
    </>
  );
}

export default App;
