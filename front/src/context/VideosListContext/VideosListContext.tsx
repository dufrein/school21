"use client";

import React, { createContext, useState } from "react";
import { VideosListContextProps, VideosListContextType } from "./types";
import { paginationChangePage } from "@components/Pagination/paginationChangePage";
import { getVideosHelper } from "./helpers/getVideosHelper";
import { FetchFullResponse, VideoLesson } from "@types";
import { IS_SSR } from "@constants";

export const VideosListContext = createContext<VideosListContextType>({
  videos: [],
  meta: null,
  activePageNumber: 0,
  activePageNumberHandler: () => {},
});

export const VideosListContextProvider: React.FC<VideosListContextProps> = (props) => {
  const { videosData: videoDataInitial, children } = props;

  const [videosData, setVideosData] = useState(videoDataInitial);
  const [activePageNumber, setActivePageNumber] = useState(0);

  const setVideosDataHandler = (videosDataArg: FetchFullResponse<VideoLesson>) => {
    setVideosData(videosDataArg);
  };

  const setActivePageNumberHandler = (activePageNumberArg: number) => {
    setActivePageNumber(activePageNumberArg);

    if (IS_SSR) {
      window.scrollTo(0, 0);
    }
  };

  const activePageNumberHandler = (pageNumber: number) => {
    paginationChangePage<VideoLesson>({
      pageNumber,
      docsList: videosData,
      activePageNumber,
      getDocsFetcher: getVideosHelper,
      setDocsDataHandler: setVideosDataHandler,
      setActivePageNumberHandler,
    });
  };

  const filteredVideos = videosData.data?.filter((video) => video.showOnVideoPage);

  return (
    <VideosListContext.Provider
      value={{
        videos: filteredVideos || [],
        meta: videosData.meta,
        activePageNumber,
        activePageNumberHandler,
      }}
    >
      {children}
    </VideosListContext.Provider>
  );
};
