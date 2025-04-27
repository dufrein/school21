import { StrapiImage } from "./common";

export type AvatarType = {
  id: string;
  documentId: string;
  avatarsMan: StrapiImage[];
  avatarsWoman: StrapiImage[];
};
