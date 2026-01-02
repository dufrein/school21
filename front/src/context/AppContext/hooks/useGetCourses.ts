import { useEffect, useState } from "react";
import { getCourseById, getCourses } from "@api";
import { getTopicById } from "@api/topics";
import { Course } from "@types";
import { Complexity } from "@constants";

/**
 * Хук для получения курсов по уровню сложности
 * @param complexity
 */
export const useGetCourses = (complexity?: Complexity) => {
  const [userCourses, setUserCourses] = useState<Course[] | null>(null);

  useEffect(() => {
    const fullCourses: Course[] = [];
    getCourses(true).then((allCourses) => {
      const filteredCourses = complexity
        ? allCourses.filter((courseItem) => courseItem.complexity === complexity)
        : allCourses;

      console.log("filteredCourses", filteredCourses);

      filteredCourses.forEach((courseItem, index) => {
        getCourseById(courseItem.documentId).then((courseData) => {
          const fullCourseData = courseData;

          const promises = courseData.topics.map((topicItem) => getTopicById(topicItem.documentId));

          Promise.all(promises).then((topics) => {
            fullCourseData.topics = topics;
            fullCourses.push(fullCourseData);
            if (index === filteredCourses.length - 1) {
              setUserCourses([...fullCourses]);
            }
          });
        });
      });
    });
  }, [complexity]);

  return userCourses;
};
