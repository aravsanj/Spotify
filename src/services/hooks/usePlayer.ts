import { useContext } from "react";
import { PlayerContext } from "../contexts/PlayerContext";

export default function usePlayer() {
  return useContext(PlayerContext);
}
