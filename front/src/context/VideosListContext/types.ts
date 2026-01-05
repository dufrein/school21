import { PaginationFeatureProps } from "@features/PaginationFeature/types";
import { FetchFullResponse, VideoLesson } from "@types";
import { PropsWithChildren } from "react";

export type VideosListContextProps = PropsWithChildren<{
  videosData: FetchFullResponse<VideoLesson>;
}>;

export type VideosListContextType = PaginationFeatureProps & {
  videos: VideoLesson[];
};
