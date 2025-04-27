"use client";

import React, { createContext, useEffect, useState } from "react";
import { AppContextProps, AppContextType } from "./types";
import { Course, Tariff } from "@types";
import { getCourseById } from "@api";
import { getTopic } from "@api/topics";

export const AppContext = createContext<AppContextType>({
  tariffs: [],
  activeTariff: null,
  userCourses: null,
});

export const AppContextProvider: React.FC<AppContextProps> = (props) => {
  const [tariffs, setTariffs] = useState<Tariff[]>([]);
  const [activeTariff, setActiveTariff] = useState<Tariff | null>(null);
  const [userCourses, setUserCourses] = useState<Course[] | null>(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API}/tariffs?populate=*`)
      .then((res) => {
        return res.json();
      })
      .then((tariffsData: { data: Tariff[] }) => {
        const sortedTariffs = tariffsData.data.sort(
          (tariffItem1, tariffItem2) => tariffItem1.price - tariffItem2.price
        );
        setTariffs(sortedTariffs);
        setActiveTariff(sortedTariffs[0]);
      });
  }, []);

  useEffect(() => {
    if (!activeTariff) {
      return;
    }
    const fullCourses: Course[] = [];

    activeTariff?.courses.forEach((courseItem, index) => {
      getCourseById(courseItem.documentId).then((courseData) => {
        const fullCourseData = courseData;

        const promises = courseData.topics.map((topicItem) => getTopic(topicItem.documentId));

        Promise.all(promises).then((topics) => {
          fullCourseData.topics = topics;
          fullCourses.push(fullCourseData);
          if (index === activeTariff?.courses.length - 1) {
            setUserCourses([...fullCourses]);
          }
        });
      });
    });
  }, [activeTariff]);

  return (
    <AppContext.Provider value={{ tariffs, activeTariff, userCourses }}>
      {props.children}
    </AppContext.Provider>
  );
};
