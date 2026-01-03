import { CourseContent } from "@features/CourseContent";
import { getFullCourse } from "@api";

export default async function Course({ params }: { params: Promise<{ courseId: string }> }) {
  const { courseId } = await params;
  const course = await getFullCourse(courseId);

  return <CourseContent course={course} />;
}
