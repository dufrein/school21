import { useEffect, useState } from "react";
import { getCourseById, getCourses } from "@api";
import { getTopicById } from "@api/topics";
import { Course, StudentType } from "@types";

export const useGetCourses = (userLevel: StudentType['level']) => {
  const [userCourses, setUserCourses] = useState<Course[] | null>(null);
  
  useEffect(() => {
    if (!userLevel) {
      return;
    }
    const fullCourses: Course[] = [];
     getCourses(true).then(allCourses=>allCourses.forEach((courseItem, index) => {
      getCourseById(courseItem.documentId).then((courseData) => {
        const fullCourseData = courseData;

        const promises = courseData.topics.map((topicItem) => getTopicById(topicItem.documentId));

        Promise.all(promises).then((topics) => {
          fullCourseData.topics = topics;
          fullCourses.push(fullCourseData);
          if (index === allCourses.length - 1) {
            setUserCourses([...fullCourses]);
          }
        });
      });
    }));
  }, [userLevel]);

  return userCourses;
};
