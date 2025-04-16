import { User, UserLessonsProgress } from '../types/user';

export const getUser = async (): Promise<User> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/user`);
  if (!response.ok) {
    throw new Error('Failed to fetch user data');
  }
  return response.json();
};

export const getUserProgress = async (): Promise<UserLessonsProgress> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/user/progress`);

  return [];

  if (!response.ok) {
    throw new Error('Failed to fetch user progress');
  }
  return response.json();
}; 