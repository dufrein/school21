import { CoursePreview } from "@features/CoursePreview";
import { getCourseById } from "@api";

export default async function Preview({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const course = await getCourseById(id);

  return <CoursePreview course={course} />;
}
