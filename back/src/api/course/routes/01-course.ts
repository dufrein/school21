import type { Core } from "@strapi/types";

const config: Core.RouterConfig = {
  type: "content-api",
  routes: [
    {
      path: "/courses/full",
      method: "GET",
      handler: "api::course.course.getAllCoursesWithLessons",
      config: {
        auth: false, // Нужна ли авторизация (по умолчанию — да)
        policies: [], // Массив политик доступа
        middlewares: [], // Массив middleware
      },
    },
    {
      path: "/courses/full/:id",
      method: "GET",
      handler: "api::course.course.getCourseWithLessons",
      config: {
        auth: false, // Нужна ли авторизация (по умолчанию — да)
        policies: [], // Массив политик доступа
        middlewares: [], // Массив middleware
      },
    },
  ],
};

export default config;
