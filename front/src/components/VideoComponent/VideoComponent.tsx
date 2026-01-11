import React from "react";
import { VideoComponentProps } from "./types";
import { NavLink } from "@components/NavLink";
import { StrapiImage } from "@components/StrapiImage";
import styles from "./video.module.scss";
import { getClassList } from "@utils";

export const VideoComponent: React.FC<VideoComponentProps> = (props) => {
  const { video, className } = props;
  const classList = getClassList([styles.videoItem, className]);

  return (
    <div className={classList}>
      <NavLink href={video.url} target="='_blank">
        <div className={styles.video}>
          <StrapiImage
            alt={video.name}
            className={styles.videoPreview}
            image={video.preview}
            size={"small"}
          />
          <img className={styles.playButton} src="/playButton.svg" alt="кнопка плей" width={40} />
        </div>
        <div className={styles.videoInfo}>
          <p className={styles.videoName}>{video.name}</p>
          <p className={styles.videoDescription}>{video.description}</p>
        </div>
      </NavLink>
    </div>
  );
};
