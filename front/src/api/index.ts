import { getAllLessons, getLessonById, getLessonByIdWithAnswers } from "./lessons";
import { getCourseById, getCourses, getCoursesFull, getFullCourse } from "./courses";
import { getStudent, updateStudent } from "./student";
import { getTopicById } from "./topics";
import { getVideos, getVideoById } from "./videos";
import { getAvatars } from "./avatars";
import { frontErrorApi } from "./frontErrorApi";

export {
  getAllLessons,
  getCourseById,
  getCourses,
  getCoursesFull,
  getStudent,
  getFullCourse,
  getLessonById,
  updateStudent,
  getTopicById,
  getVideos,
  getVideoById,
  getAvatars,
  frontErrorApi,
  getLessonByIdWithAnswers,
};
