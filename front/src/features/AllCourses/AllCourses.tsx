"use client";

import React, { useState } from "react";
import { AllCoursesProps } from "./types";
import styles from "./styles.module.scss";
import { CourseItem } from "./components/CourseItem/CourseItem";
import { COMPLEXITY_LEVEL } from "@constants";

export const AllCourses: React.FC<AllCoursesProps> = ({ courses, complexityLevel }) => {
  const [expandedCourses, setExpandedCourses] = useState<Set<string>>(new Set());

  const toggleCourse = (courseId: string) => {
    const newExpandedCourses = new Set(expandedCourses);
    if (newExpandedCourses.has(courseId)) {
      newExpandedCourses.delete(courseId);
    } else {
      newExpandedCourses.add(courseId);
    }
    setExpandedCourses(newExpandedCourses);
  };

  const title = complexityLevel
    ? `Курсы уровня "${COMPLEXITY_LEVEL[complexityLevel]}"`
    : "Все курсы";

  return (
    <div className={styles.courses}>
      <h2 className={styles.coursesTitle}>{title}</h2>
      {courses.map((course) => (
        <CourseItem
          key={course.id}
          course={course}
          isExpanded={expandedCourses.has(course.id)}
          onToggle={toggleCourse}
        />
      ))}
    </div>
  );
};
