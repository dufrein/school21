"use client";

import React from "react";
import { VideoListProps } from "./types";
import styles from "./styles.module.scss";
import { getImageSrc } from "@helpers/getImageSrc";
import { NavLink } from "@components";

/**
 * Список видеолекций
 * @param videos - список видеолекций
 * @returns список видеолекций
 */
export const VideoList: React.FC<VideoListProps> = ({ videos }) => {
console.log('videos',videos);
  return (
    <div className={styles.videoList} >
      {videos.map((video) => (
        <div key={video.documentId} className={styles.videoItem}>
          <NavLink href={video.url}>
            <img
              src={getImageSrc(video.preview, "small")}
              alt={video.name}
              className={styles.videoPreview}
            />
            <div className={styles.videoInfo}>
              <p className={styles.videoName}>{video.name}</p>
              <p className={styles.videoDescription}>{video.description}</p>
            </div>
          </NavLink>
        </div>
      ))}
    </div>
  );
};
