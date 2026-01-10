"use client";

import React, { useContext } from "react";
import styles from "./styles.module.scss";
import { NavLink } from "@components";
import { VideosListContext } from "@context/VideosListContext";
import { PaginationFeature } from "@features/PaginationFeature";
import { StrapiImage } from "@components/StrapiImage";

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
          <div key={video.documentId} className={styles.videoItem}>
            <NavLink href={video.url} target="='_blank">
              <StrapiImage
                alt={video.name}
                className={styles.videoPreview}
                image={video.preview}
                size={"small"}
              />

              <div className={styles.videoInfo}>
                <p className={styles.videoName}>{video.name}</p>
                <p className={styles.videoDescription}>{video.description}</p>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};
