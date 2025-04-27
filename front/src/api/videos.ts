import { VideoLesson } from "@types";

export const getVideos = async (populate?: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API}/videos${populate ? `?populate=${populate}` : ""}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch videoLessons");
  }
  const data: { data: VideoLesson[] } = await response.json();

  return data.data;
};

export const getVideoById = async (id: string, populate?: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API}/videos/${id}${populate ? `?populate=${populate}` : ""}`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch videoLesson with id ${id}`);
  }
  const data: { data: VideoLesson } = await response.json();

  return data.data;
};
