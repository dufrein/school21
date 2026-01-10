import React from "react";
import { CourseItemProps } from "./types";
import styles from "./styles.module.scss";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import iconLink from "public/icon_link.svg";
import { NavLink } from "@components/NavLink";
import { ROUTES } from "@constants";
import { CourseCompleixity } from "@components/CourseCompleixity";
/**
 * Компонент элемент списка просмотра всех курсов
 */
export const CourseItem: React.FC<CourseItemProps> = ({ course, isExpanded, onToggle }) => {
  return (
    <div className={styles.courseContainer}>
      <div className={styles.courseHeader} onClick={() => onToggle(course.id)}>
        <div>
          <h3 className={styles.courseTitle}>{course.name}</h3>
          <p className={styles.courseDescription}>{course.description}</p>
          <CourseCompleixity course={course} />

          <NavLink
            href={`${ROUTES.COURSE_PREVIEW}/${course.documentId}`}
            className={styles.courseLink}
            onClick={(e) => e.stopPropagation()}
          >
            Подробнее
            <img src={iconLink.src} alt="icon link" />
          </NavLink>
        </div>
        <span>{isExpanded ? "▼" : "▶"}</span>
      </div>
      {isExpanded && (
        <div className={styles.topicsContainer}>
          {course.topics?.map((topic) => (
            <div key={topic.id} className={styles.topicCard}>
              <h4 className={styles.topicTitle}>{topic.name}</h4>
              <BlocksRenderer content={topic.description} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
