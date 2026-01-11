"use client";

import React, { useContext } from "react";
import styles from "./styles.module.scss";
import { VideosListContext } from "@context/VideosListContext";
import { PaginationFeature } from "@features/PaginationFeature";
import { VideoComponent } from "@components/VideoComponent";

/**
 * Список видеолекций
 */
export const VideosList: React.FC = () => {
  const { videos, meta, activePageNumber, activePageNumberHandler } = useContext(VideosListContext);

  return (
    <div className={styles.videosPage}>
      <h2>Видеолекции</h2>
      <br />
      <div className={styles.videoList}>
        <PaginationFeature
          meta={meta}
          activePageNumber={activePageNumber}
          activePageNumberHandler={activePageNumberHandler}
        />
        {videos.map((video) => (
          <VideoComponent key={video.documentId} video={video} />
        ))}
      </div>
    </div>
  );
};
