"use client";

import { FC, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { AvatarProps } from "./types";
import iconAvatar from "public/icon_user.svg";
import { getAvatars } from "@api/avatars";
import { SexEnum } from "@constants";
import { getImageSrc } from "@helpers";
import { StrapiImage } from "@types";

/**
 * Avatar component
 * @param sex?: SexEnum;
 * @param email?: string;
 * @param avatarId?: string;
 * @param className?: string;
 * @returns FC<AvatarProps>
 */
export const Avatar: FC<AvatarProps> = (props) => {
  const { avatarId, className, sex, email } = props;
  const [avatar, setAvatar] = useState<StrapiImage | null>(null);

  useEffect(() => {
    if (avatarId) {
      getAvatars().then((avatars) => {
        if (!avatars) {
          return;
        }

        const avatarsList = sex === SexEnum.WOMAN ? avatars.avatarsWoman : avatars.avatarsMan;
        setAvatar(avatarsList.find((avatar) => avatar.documentId === avatarId) || null);
      });
    }
  }, [avatarId, sex]);
  const avatarUrl = avatar ? getImageSrc(avatar) : iconAvatar.src;

  return (
    <div className={`${styles.avatar} ${className || ""}`}>
      <img src={avatarUrl} alt="User avatar" className={styles.avatarImage} title={email} />
    </div>
  );
};
