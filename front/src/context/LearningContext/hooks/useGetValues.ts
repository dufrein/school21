"use client";

import { useParams } from "next/navigation";
import { Course, Lesson, Topic } from "@types";
import { useEffect, useState } from "react";
import { getCourseById, getTopicById, getLessonById } from "@api";

/**
 * Хук для получения данных открытого курса, темы и урока
 */
export const useGetValues = () => {
  const [openedCourse, setOpenedCourse] = useState<Course | null>(null);
  const [openedTopic, setOpenedTopic] = useState<Topic | null>(null);
  const [openedLesson, setOpenedLesson] = useState<Lesson | null>(null);

  const params = useParams<{
    courseId?: string;
    topicId?: string;
    lessonId?: string;
    [key: string]: string | undefined;
  }>();

  useEffect(() => {
    if (params.courseId) {
      getCourseById(params.courseId).then((data) => setOpenedCourse(data));
      return;
    }
    setOpenedCourse(null);
  }, [params.courseId]);

  useEffect(() => {
    if (params.topicId) {
      getTopicById(params.topicId).then((data) => setOpenedTopic(data));
      return;
    }
    setOpenedTopic(null);
  }, [params.topicId]);

  useEffect(() => {
    if (params.lessonId) {
      getLessonById(params.lessonId).then((data) => setOpenedLesson(data));
      return;
    }
    setOpenedLesson(null);
  }, [params.lessonId]);

  return {
    openedCourse,
    openedTopic,
    openedLesson,
  };
};
