import { CourseContent } from "@features/CourseContent";
import { getCourseById } from "@api";
import { checkUserAccess } from "@actions/session/session";
import styles from "./page.module.scss";
import { NavLink } from "@components/NavLink";
import { ROUTES } from "@constants";

export default async function Course({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const course = await getCourseById(id);
  const hasAccess = await checkUserAccess(id);
  console.log("course", course);

  if (!hasAccess) {
    return (
      <div className={styles.noAccess}>
        <h2>{course.name}</h2>
        <h3>У вас нет доступа к этому курсу</h3>
        <h4>Курс входит в тарифы:</h4>
        {course.tariffs?.map((tariff) => (
          <div key={tariff.id}>
            <NavLink href={`${ROUTES.PRICING}/${tariff.documentId}`} className={styles.tariffLink}>
              {tariff.name}
            </NavLink>
          </div>
        ))}
      </div>
    );
  }

  return <CourseContent course={course} />;
}
