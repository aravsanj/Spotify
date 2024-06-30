"use client";
import { NEXT_GET_TRACKS } from "@/data/endpoints";
import getTracks from "@/data/getTracks";
import useSWR from "swr";

export default function useTracks() {
  const { data, error, isLoading } = useSWR(
    NEXT_GET_TRACKS({ limit: 5 }),
    getTracks,
    {
      revalidateOnFocus: false,
    }
  );

  return {
    tracks: data?.results,
    isLoading,
    error,
  };
}
