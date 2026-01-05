import { VideosList } from "@features/VideosList";
import styles from "./page.module.scss";
import { VideosListContextProvider } from "@context/VideosListContext";
import { getVideosHelper } from "@context/VideosListContext/helpers";

export default async function VideoLessonsPage() {
  const videosData = await getVideosHelper({ start: 0 });

  return (
    <div className={styles.container}>
      <VideosListContextProvider videosData={videosData}>
        <VideosList />
      </VideosListContextProvider>
    </div>
  );
}
