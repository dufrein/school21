import { LessonContent } from "@features/LessonContent";
import { getLessonByIdWithAnswers } from "@api";

export default async function Lesson({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  const lesson = await getLessonByIdWithAnswers(lessonId);

  return <LessonContent lesson={lesson} />;
}
