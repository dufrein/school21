import { z } from "zod";

export enum Complexity {
  BASIC = "basic",
  MEDIUM = "medium",
  ADVANCED = "advanced",
  PROFESSIONAL = "professional",
}

export const loginObjectSchema = {
  email: z
    .string()
    .min(7, "Минимальная длина 7")
    .max(50, "Максимальная длина 50")
    .email("Некорректный адрес email"),
  password: z
    .string()
    .min(9, "Минимальная длина 9")
    .max(25, "Максимальная длина 25")
    .regex(
      /^[a-zA-Z][a-zA-Z0-9!-@\.]*([0-9]+[!-@\.]|[!-@\.]+[0-9])+/,
      "Пароль должен содержать только латинские буквы и начинаться с буквы," +
        " также он должен иметь хотя бы одну цифру и может иметь спецсимволы -@#$%^&*!"
    ),
};

export const nameSurnameSchema = {
  name: z
    .string()
    .min(5, "Минимальная длина 5")
    .max(25, "Максимальная длина 25")
    .regex(/^[а-яёй]+$/i, "Имя может содержать только русские буквы"),
  surname: z
    .string()
    .min(5, "Минимальная длина 5")
    .max(40, "Максимальная длина 40")
    .regex(/^[а-яёй]+$/i, "Фамилия может содержать только русские буквы"),
};

export const ROUTES = {
  LOGIN: "/login",
  SIGNUP: "/signup",
  LEARNING: "/learning",
  VERIFY: "/verify",
  PRICING: "/pricing",
  DASHBOARD: "/dashboard",
  RESET_PASSWORD: "/resetPass",
  LOGOUT: "/logout",
  LESSON: "/lesson",
  COURSE: "/course",
  TOPIC: "/topic",
  ALL_COURSES: "/allCourses",
  COURSE_PREVIEW: "/coursePreview",
  VIDEO: "/video",
};


export enum SexEnum {
  MAN = "man",
  WOMAN = "woman",
}

