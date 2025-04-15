export const fetcher = <T>(url: string) =>
  fetch(url).then(async (res) => {
    const data: { data: T } = await res.json();
    return data.data;
  });
