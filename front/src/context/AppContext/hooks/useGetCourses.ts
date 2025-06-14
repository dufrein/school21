import { useEffect, useState } from "react";
import { getCourseById } from "@api";
import { getTopicById } from "@api/topics";
import { Course, Tariff } from "@types";

export const useGetCourses = (activeTariff: Tariff | null) => {
  const [userCourses, setUserCourses] = useState<Course[] | null>(null);
  
  useEffect(() => {
    if (!activeTariff) {
      return;
    }
    const fullCourses: Course[] = [];

    activeTariff?.courses.forEach((courseItem, index) => {
      getCourseById(courseItem.documentId).then((courseData) => {
        const fullCourseData = courseData;

        const promises = courseData.topics.map((topicItem) => getTopicById(topicItem.documentId));

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

  return userCourses;
};
