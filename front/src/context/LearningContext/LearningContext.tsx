'use client'

import React, { createContext } from "react";
import { LearningContextProps, LearningContextType } from "./types";
import { useGetValues } from "./hooks/useGetValues";

const initialValues = {
  openedCourse: null,
  openedTopic: null,
  openedLesson: null,
};

export const LearningContext = createContext<LearningContextType>(initialValues);

export const LearningContextProvider: React.FC<LearningContextProps> = (props) => {
  const { children } = props;
  const { openedCourse, openedTopic, openedLesson } = useGetValues();
  // const courseLessonsIdsList =  openedCourse?.topics.reduce((previousList, currentTopic)=>{
  //   return [...previousList, currentTopic.l]
  // },[])
  return (
    <LearningContext.Provider value={{ openedCourse, openedTopic, openedLesson }}>
      {children}
    </LearningContext.Provider>
  );
};
