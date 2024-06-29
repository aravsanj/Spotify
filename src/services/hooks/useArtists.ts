"use client";
import { NEXT_GET_ARTISTS } from "@/data/endpoints";
import getArtists from "@/data/getArtists";
import useSWR from "swr";

export default function useArtists() {
  const { data, error, isLoading } = useSWR(
    NEXT_GET_ARTISTS({ limit: 5 }),
    getArtists
  );

  return {
    artists: data?.results,
    isLoading,
    error,
  };
}
