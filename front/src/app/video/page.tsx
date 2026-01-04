import { VideoList } from "@features/VideoList";
import styles from "./page.module.scss";
import { getVideos } from "@api/videos";

export default async function VideoLessonsPage() {
  const { data: videos } = await getVideos({ populate: "*" });
  const videosArray = videos || [];
  const filteredVideos = videosArray.filter((video) => video.showOnVideoPage);

  return (
    <div className={styles.container}>
      <h2>Видеолекции</h2>
      <VideoList videos={filteredVideos} />
    </div>
  );
}
