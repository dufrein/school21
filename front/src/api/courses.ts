import { Course } from "@types";
import { getTopic } from "./topics";
export const getCourseById = async (courseId: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/courses/${courseId}?populate=*`);
  if (!response.ok) {
    throw new Error("Failed to fetch course");
  }
  const data: { data: Course } = await response.json();

  return data.data;
};

export const getCourses = async (populate?: boolean) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API}/courses${populate ? "?populate=*" : ""}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch courses");
  }
  const data: { data: Course[] } = await response.json();

  return data.data;
};

export const getFullCourse = async (courseId: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/courses/${courseId}?populate=*`);
  if (!response.ok) {
    throw new Error("Failed to fetch course");
  }
  const data: { data: Course } = await response.json();
  const course = data.data;
  const [...fullTopicsArray] = await Promise.all(
    course.topics.map(async (topic) => {
      const fullTopic = await getTopic(topic.documentId);
      return fullTopic;
    })
  );
  course.topics = fullTopicsArray;

  return course;
};
