import { VideoList } from "@features/VideoList";
import styles from "./page.module.scss";
import { getVideos } from "@api/videos";

export default async function VideoLessonsPage() {
  const videos = (await getVideos({ populate: "*" })) || [];
  const filteredVideos = videos.filter((video) => video.showOnVideoPage);

  return (
    <div className={styles.container}>
      <h2>Видеолекции</h2>
      <VideoList videos={filteredVideos} />
    </div>
  );
}
