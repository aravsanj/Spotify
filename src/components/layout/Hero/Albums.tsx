import useAlbums from "@/services/hooks/useAlbums";
import AlbumItem from "./AlbumItem";
import { Album } from "./types/Album";

export default function Albums() {
  const { albums, isLoading } = useAlbums();
  console.log(albums, isLoading);

  return (
    <div className="grid grid-cols-2 gap-x-10 gap-y-6 md:grid-cols-3 lg:grid-cols-2 lg:gap-x-8 xl:grid-cols-3">
      {albums?.map((album: Album) => (
        <AlbumItem key={album.id} album={album} />
      ))}
    </div>
  );
}
