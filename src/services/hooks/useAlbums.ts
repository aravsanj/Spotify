"use client";
import { NEXT_GET_ALBUMS } from "@/data/endpoints";
import getAlbums from "@/data/getAlbums";
import useSWR from "swr";

export default function useAlbums() {
  const { data, error, isLoading } = useSWR(
    NEXT_GET_ALBUMS({ limit: 6 }),
    getAlbums,
    {
      revalidateOnFocus: false,
    }
  );

  return {
    albums: data?.results,
    isLoading,
    error,
  };
}
