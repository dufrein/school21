import { CourseContent } from "@features/CourseContent";
import { getCourseById } from "@api";

export default async function Course({ params }: { params: Promise<{ courseId: string }> }) {
  const { courseId } = await params;
  const course = await getCourseById(courseId);

  return <CourseContent course={course} />;
}
