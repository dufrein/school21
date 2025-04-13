import { User, UserLessonsProgress } from '../types/user';

const API_BASE_URL = '/api';

export const getUser = async (): Promise<User> => {
  const response = await fetch(`${API_BASE_URL}/user`);
  if (!response.ok) {
    throw new Error('Failed to fetch user data');
  }
  return response.json();
};

export const getUserProgress = async (): Promise<UserLessonsProgress> => {
  const response = await fetch(`${API_BASE_URL}/user/progress`);
  if (!response.ok) {
    throw new Error('Failed to fetch user progress');
  }
  return response.json();
}; 