import { getCoursesFull } from "@api";
import { AllCourses } from "@features/AllCourses";
import { Complexity } from "@constants";

type AllCoursesPageProps = {
  searchParams: Promise<{ complexity?: string }>;
};

export default async function AllCoursesPage({ searchParams }: AllCoursesPageProps) {
  const params = await searchParams;
  const { data: allCourses } = await getCoursesFull({});

  let courses = allCourses || [];
  let complexityLevel: Complexity | undefined;

  if (params.complexity && Object.values(Complexity).includes(params.complexity as Complexity)) {
    complexityLevel = params.complexity as Complexity;
    courses = courses.filter((course) => course.complexity === complexityLevel);
  }

  return <AllCourses courses={courses} complexityLevel={complexityLevel} />;
}
