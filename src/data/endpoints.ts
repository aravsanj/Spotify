import { CLIENT_ID } from "./constants";

export const JAMENDO_GET_ALBUMS = ({ limit }: { limit: number }) =>
  `/v3.0/albums/?client_id=${CLIENT_ID}&format=jsonpretty&limit=${limit}`;

export const NEXT_GET_ALBUMS = ({ limit }: { limit: number }) =>
  `/api/albums?limit=${limit}`;

export const JAMENDO_GET_TRACKS = ({ limit }: { limit: number }) =>
  `/v3.0/tracks/?client_id=${CLIENT_ID}&format=jsonpretty&limit=${limit}&fuzzytags=groove+rock&speed=high+veryhigh&include=musicinfo&groupby=artist_id`;

export const NEXT_GET_TRACKS = ({ limit }: { limit: number }) =>
  `/api/tracks?limit=${limit}`;
