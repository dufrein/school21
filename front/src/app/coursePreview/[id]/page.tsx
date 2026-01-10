import { CoursePreview } from "@features/CoursePreview";
import { getCourseById } from "@api";

export default async function Preview({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const course = await getCourseById(id);

  if (!course) {
    return null;
  }

  return <div className="pageContainer"><CoursePreview course={course} /></div>;
}
