// import styles from "./app.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Videos from "./components/videos/videos";

function App() {
  const key = process.env.REACT_APP_YOUTUBE_API_KEY;
  const [videoDatas, setfirstVideoDatas] = useState([]);
  useEffect(() => {
    const config = {
      method: "get",
      url: `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=26&key=${key}`,
      headers: {},
    };
    axios(config).then(result => setfirstVideoDatas(result.data.items));
  }, []);

  // console.log(videoDatas);
  return <Videos videoDatas={videoDatas}></Videos>;
}

export default App;
