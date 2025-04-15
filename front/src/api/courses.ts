import { Course } from "@types";

export const getCourseById = async (courseId: string, populate?: boolean) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API}/courses/${courseId}${populate ? "?populate=*" : ""}`
  );
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
