"use client";

import { useParams } from "next/navigation";
import {  CourseFull, Lesson, Topic } from "@types";
import { useEffect, useState } from "react";
import { getFullCourse, getTopicById, getLessonById } from "@api";
import { getNextElement } from "@helpers/getNextElement";

/**
 * Хук для получения данных открытого курса, темы и урока
 */
export const useGetValues = () => {
  const [openedCourse, setOpenedCourse] = useState<CourseFull | null>(null);
  const [openedTopic, setOpenedTopic] = useState<Topic | null>(null);
  const [openedLesson, setOpenedLesson] = useState<Lesson | null>(null);
  const [nextTopic, setNextTopic] = useState<Topic | null>(null);
  const [nextLesson, setNextLesson] = useState<Lesson | null>(null);  

  const params = useParams<{
    courseId?: string;
    topicId?: string;
    lessonId?: string;
    [key: string]: string | undefined;
  }>();

  useEffect(() => {
    if (params.courseId) {
      getFullCourse(params.courseId).then((data) => setOpenedCourse(data));

      return;
    }

    setOpenedCourse(null);
  }, [params.courseId]);

  useEffect(() => {
    if (params.topicId) {
      getTopicById(params.topicId).then((data) => setOpenedTopic(data));
      const nextElement = getNextElement({list:openedCourse?.topics,currentElementId: params.topicId})

      setNextTopic(nextElement);

      return;
    }

    setOpenedTopic(null);
  }, [params.topicId, openedCourse]);

  useEffect(() => {
    if (params.lessonId) {
      getLessonById(params.lessonId).then((data) => setOpenedLesson(data));
      const nextElement = getNextElement({list:openedTopic?.lessons,currentElementId: params.lessonId})

      setNextLesson(nextElement);

      return;
    }

    setOpenedLesson(null);
  }, [openedTopic?.lessons, params.lessonId]);

  return {
    openedCourse,
    openedTopic,
    openedLesson,
    nextTopic,
    nextLesson
  };
};
