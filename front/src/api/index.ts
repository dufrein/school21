import { getAllLessons, getLessonById } from "./lessons";
import { getCourseById, getCourses } from "./courses";
import { getStudent, getUserProgress, updateStudent } from "./student";
import { getTopicById, getTopics } from "./topics";
import { getVideos, getVideoById } from "./videos";
import { getAvatars } from "./avatars";
import { signupUser } from "./signup";
import { frontErrorApi } from "./frontErrorApi";

export {
  getAllLessons,
  getCourseById,
  getCourses,
  getStudent,
  getUserProgress,
  getLessonById,
  updateStudent,
  getTopicById,
  getTopics,
  getVideos,
  getVideoById,
  getAvatars,
  signupUser,
  frontErrorApi,
};
