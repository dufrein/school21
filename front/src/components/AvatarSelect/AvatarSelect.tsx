"use client";

import { useState } from "react";
import styles from "./styles.module.scss";
import { getImageSrc } from "@helpers";
import { AvatarSelectProps } from "./types";
import { SexEnum } from "@constants";
import { getClassList } from "@utils";
import { StrapiImage } from "@types";

/**
 * Компонент для выбора аватара
 */
export const AvatarSelect = (props: AvatarSelectProps) => {
  const { avatarsWoman, avatarsMan, currentAvatarId, sex, onAvatarSelect } = props;
  const [showAvatarSelect, setShowAvatarSelect] = useState(false);

  const currentAvatar =
    sex === SexEnum.WOMAN
      ? avatarsWoman.find((avatar) => avatar.documentId === currentAvatarId)
      : avatarsMan.find((avatar) => avatar.documentId === currentAvatarId);

  const getAvatarPlateClassList = (avatar: StrapiImage) =>
    getClassList([
      styles.avatarOption,
      currentAvatarId === avatar.documentId ? styles.selected : "",
    ]);

  return (
    <div className={styles.avatarSelect}>
      {!showAvatarSelect && currentAvatar ? (
        <div className={styles.currentAvatar}>
          <img
            src={getImageSrc(currentAvatar)}
            alt={currentAvatar.name}
            className={styles.avatarPreview}
          />
          <button className={getClassList([styles.changeAvatarButton, "button"])} onClick={() => setShowAvatarSelect(true)}>
            Сменить аватар
          </button>
        </div>
      ) : (
        <div className={styles.avatarGrid}>
          {(sex === SexEnum.WOMAN ? avatarsWoman : avatarsMan).map((avatar) => (
            <div
              key={avatar.id}
              className={getAvatarPlateClassList(avatar)}
              onClick={() => {
                onAvatarSelect(avatar.documentId);
                setShowAvatarSelect(false);
              }}
            >
              <img src={getImageSrc(avatar)} alt={avatar.name} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
