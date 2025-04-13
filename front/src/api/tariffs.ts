const API_BASE_URL = '/api';

export const getTariffs = async () => {
  const response = await fetch(`${API_BASE_URL}/tariffs`);
  if (!response.ok) {
    throw new Error('Failed to fetch tariffs');
  }
  return response.json();
};

export const getTariffById = async (tariffId: string) => {
  const response = await fetch(`${API_BASE_URL}/tariffs/${tariffId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch tariff');
  }
  return response.json();
}; 