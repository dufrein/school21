import { User, UserLessonsProgress } from "@types";

// Helper functions for localStorage operations
export const getItem = <T>(key: string): T | null => {
  const item = localStorage.getItem(key);
  console.log("item", item);
  return item ? JSON.parse(item) : null;
};

export const setItem = <T>(key: string, value: T): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getUser = (): User | null => getItem<User>("user") || null;
export const setUser = (user: User): void => setItem("user", user);

export const getUserProgress = (): UserLessonsProgress =>
  getItem<UserLessonsProgress>("userLessonsProgress") || [];
export const setUserProgress = (progress: UserLessonsProgress): void =>
  setItem("userLessonsProgress", progress);
