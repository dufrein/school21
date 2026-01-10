"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { LearningContextProps, LearningContextType } from "./types";
import { useGetValues } from "./hooks/useGetValues";
import { CongrateModal } from "@features/CongrateModal";
import { UserContext } from "@context/UserContext";
import { getCourseProgress } from "@helpers/getCourseProgress";

const initialValues: LearningContextType = {
  openedCourse: null,
  openedTopic: null,
  openedLesson: null,
  nextLesson: null,
  nextTopic: null,
};

export const LearningContext = createContext<LearningContextType>(initialValues);

export const LearningContextProvider: React.FC<LearningContextProps> = (props) => {
  const { children } = props;
  const { openedCourse, openedTopic, openedLesson, nextLesson, nextTopic } = useGetValues();
  const { user } = useContext(UserContext);
  const [isCongratsOpened, setIsCongratsOpened] = useState(false);

  useEffect(() => {
    console.log("mount");
  }, []);

  useEffect(() => {
    const { progress } = getCourseProgress(openedCourse, user);
    console.log("progress", progress);
    if (progress === 100) {
      console.log("modal");
      setIsCongratsOpened(true);
    }
  }, [user?.finishedLessonsIds]);

  return (
    <LearningContext.Provider
      value={{ openedCourse, openedTopic, openedLesson, nextLesson, nextTopic }}
    >
      {children}
      <CongrateModal isOpened={isCongratsOpened} onClose={() => setIsCongratsOpened(false)} />
    </LearningContext.Provider>
  );
};
