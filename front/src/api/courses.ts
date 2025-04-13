const API_BASE_URL = '/api';

export const getCourseById = async (courseId: string) => {
  const response = await fetch(`${API_BASE_URL}/courses/${courseId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch course');
  }
  return response.json();
};

export const getCourses = async () => {
  const response = await fetch(`${API_BASE_URL}/courses`);
  if (!response.ok) {
    throw new Error('Failed to fetch courses');
  }
  return response.json();
};
