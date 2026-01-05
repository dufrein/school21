export const ENDPOINTS = {
  FrontError: "/api/frontError",

  Students: "/students",
  StudentById: (id: string) => `/students/${id}`,

  Courses: "/courses",
  CoursesFull: "/courses/full",
  CourseById: (id: string) => `/courses/${id}`,
  CourseFullById: (id: string) => `/courses/full/${id}`,

  Lessons: "/lessons",
  LessonById: (id: string) => `/lessons/${id}`,

  Topics: "/topics",
  TopicById: (id: string) => `/topics/${id}`,

  Videos: "/videos",
  VideoById: (id: string) => `/videos/${id}`,

  Articles: "/articles",
  ArticleById: (id: string) => `/articles/${id}`,

  Avatars: "/avatar",

  Teachers: "/teachers",
};
