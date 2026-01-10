import { LessonContent } from "@features/LessonContent";
import { getLessonById } from "@api";

export default async function Lesson({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  const lesson = await getLessonById(lessonId);

  return <LessonContent lesson={lesson} />;
}
