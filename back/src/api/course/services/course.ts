/**
 * course service
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreService("api::course.course", ({ strapi }) => ({
  async getSaturatedCourse(id: string) {
    const result = await strapi.documents("api::course.course").findOne({
      documentId: id,
      populate: "topics",
    });
    const { topics } = result;
    const courseLessonsIds = [];

    const fullTopics = await Promise.all(
      topics.map(
        async (topicItem) =>
          await strapi.documents("api::topic.topic").findOne({
            documentId: topicItem.documentId,
            populate: "lessons",
          })
      )
    );

    fullTopics.forEach((topicItem) => {
      const topicLessonsIds = topicItem.lessons.map((lessonItem) => lessonItem.documentId);
      courseLessonsIds.push(...topicLessonsIds);
    });

    return { data: { ...result, topics: fullTopics, courseLessonsIds } };
  },
}));
