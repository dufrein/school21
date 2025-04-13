const API_BASE_URL = '/api';

export const getLessons = async (courseId: string) => {
  const response = await fetch(`${API_BASE_URL}/lessons?courseId=${courseId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch course lessons');
  }
  return response.json();
}; 