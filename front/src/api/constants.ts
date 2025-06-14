export const ENDPOINTS = {
  FrontError: "/api/frontError",

  Students: "/students",
  StudentById: (id: string) => `/students/${id}`,

  Courses: "/courses",
  CourseById: (id: string) => `/courses/${id}`,

  Lessons: "/lessons",
  LessonById: (id: string) => `/lessons/${id}`,

  Tariffs: "/tariffs",
  TariffById: (id: string) => `/tariffs/${id}`,

  Topics: "/topics",
  TopicById: (id: string) => `/topics/${id}`,

  Videos: "/videos",
  VideoById: (id: string) => `/videos/${id}`,

  Avatars: "/avatar",
};
