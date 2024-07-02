import useAlbums from "@/services/hooks/useAlbums";
import AlbumItem from "./AlbumItem";
import { Album } from "./types/Album";
import AlbumItemSkeleton from "./skeleton/AlbumItemSkeleton";

export default function Albums() {
  const { albums, isLoading } = useAlbums();
  const loadingSkeletons = new Array(6).fill({});

  return (
    <div className="grid grid-cols-2 gap-x-10 gap-y-6 md:grid-cols-3 lg:grid-cols-2 lg:gap-x-8 xl:grid-cols-3">
      {isLoading
        ? loadingSkeletons.map((_, index) => <AlbumItemSkeleton />)
        : albums?.map((album: Album) => (
            <AlbumItem key={album.id} album={album} />
          ))}
    </div>
  );
}
