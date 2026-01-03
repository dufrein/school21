/**
 * course controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController("api::course.course", ({ strapi }) => ({
  async getCourseWithLessons(ctx) {
    const { id } = ctx.params;

    const saturatedCourse = await strapi.service("api::course.course").getSaturatedCourse(id);

    return saturatedCourse;
  },

  async getAllCoursesWithLessons(ctx) {
    // Для получения документов с учетом парамертов запроса (фильтрации и прочее) надо использовать super.find, а не strapi.documents
    const { data: courses } = await super.find(ctx);

    const allSaturatedCourses = await Promise.all(
      courses.map(
        async (courseItem) =>
          await strapi.service("api::course.course").getSaturatedCourse(courseItem.documentId)
      )
    );

    return { data: allSaturatedCourses };
  },
}));
