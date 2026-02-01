import { VideosList } from "@features/VideosList";
import { VideosListContextProvider } from "@context/VideosListContext";
import { getVideosHelper } from "@context/VideosListContext/helpers";

export default async function VideoLessonsPage() {
  const videosData = await getVideosHelper({ start: 0 });

  return (
    <VideosListContextProvider videosData={videosData}>
      <VideosList />
    </VideosListContextProvider>
  );
}
