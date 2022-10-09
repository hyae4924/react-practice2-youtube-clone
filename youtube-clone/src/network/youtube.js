import axios from "axios";
class Youtube {
  constructor(key) {
    this.key = key;
  }

  mostPopular = async () => {
    const mostPopularConfig = {
      method: "get",
      url: `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=26&key=${this.key}`,
      headers: {},
    };
    const result = await axios(mostPopularConfig);
    return result.data.items;
  };
  search = async query => {
    const searchConfig = {
      method: "get",
      url: `https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&maxResults=25&q=${query}&key=${this.key}`,
      headers: {},
    };
    const result = await axios(searchConfig);

    const data = result.data.items.map(item => ({
      ...item,
      id: item.id.videoId,
    }));
    return data;
  };
}
export default Youtube;
