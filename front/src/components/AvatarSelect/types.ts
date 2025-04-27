import { SexEnum } from "@constants";
import { StrapiImage } from "@types";

export interface AvatarSelectProps {
  avatarsWoman: StrapiImage[];
  avatarsMan: StrapiImage[];
  currentAvatarId: string;
  sex: SexEnum;
  onAvatarSelect: (avatarId: string) => void;
}
