"use client";

import React, { createContext } from "react";
import { LearningContextProps, LearningContextType } from "./types";
import { useGetValues } from "./hooks/useGetValues";

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
  // const courseLessonsIdsList =  openedCourse?.topics.reduce((previousList, currentTopic)=>{
  //   return [...previousList, currentTopic.l]
  // },[])
  return (
    <LearningContext.Provider
      value={{ openedCourse, openedTopic, openedLesson, nextLesson, nextTopic }}
    >
      {children}
    </LearningContext.Provider>
  );
};
