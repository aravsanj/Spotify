import { CLIENT_ID } from "./constants";

export const JAMENDO_GET_ALBUMS = ({ limit }: { limit: number }) =>
  `/v3.0/albums/?client_id=${CLIENT_ID}&format=jsonpretty&limit=${limit}`;

export const NEXT_GET_ALBUMS = ({ limit }: { limit: number }) =>
  `/api/albums?limit=${limit}`;

export const JAMENDO_GET_TRACKS = ({
  limit,
  offset = 0,
}: {
  limit: number;
  offset?: number;
}) =>
  `/v3.0/tracks/?client_id=${CLIENT_ID}&format=jsonpretty&limit=${limit}&fuzzytags=groove+rock&speed=high+veryhigh&include=musicinfo&groupby=artist_id&offset=${offset}`;

export const NEXT_GET_TRACKS = ({
  limit,
  offset = 0,
}: {
  limit: number;
  offset?: number;
}) => `/api/tracks?limit=${limit}&offset=${offset}`;

export const JAMENDO_GET_ARTISTS = ({ limit }: { limit: number }) =>
  `/v3.0/artists/?client_id=${CLIENT_ID}&format=jsonpretty&hasimage=true&limit=${limit}`;

export const NEXT_GET_ARTISTS = ({ limit }: { limit: number }) =>
  `/api/artists?limit=${limit}`;

export const JAMENDO_SEARCH_TRACKS = ({
  query,
  offset,
  limit,
}: {
  query: string;
  offset: number;
  limit: number;
}) =>
  `/v3.0/tracks/?client_id=${CLIENT_ID}&format=jsonpretty&fullcount=true&search=${query}&limit=${limit}&offset=${offset}`;

export const NEXT_SEARCH_TRACKS = ({
  query,
  offset,
  limit,
}: {
  query: string;
  offset: number;
  limit: number;
}) => `/api/tracks/search?query=${query}&offset=${offset}&limit=${limit}`;
