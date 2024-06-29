import axios from "axios";

export default async function getAlbums(url: string) {
  const res = await axios.get(url);
  return res.data;
}
