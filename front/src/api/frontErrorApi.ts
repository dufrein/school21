import { ENDPOINTS } from "./constants";

export const frontErrorApi = async (error: { error: Error }) => {
  const endPoint = `${ENDPOINTS.FrontError}`;

  const res = await fetch(endPoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ frontError: error.error.stack }),
  });
  const data: unknown = await res.json();

  return data as { ok?: string; err?: string };
};
