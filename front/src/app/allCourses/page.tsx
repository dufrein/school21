import { getCourses } from "@api";
import { AllCourses } from "@features/AllCourses";

export default async function AllCoursesPage() {
  const courses = await getCourses(true);
  return <AllCourses courses={courses} />;
}
