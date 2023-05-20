import { GetNewResponse } from '@/types/types';

export async function getNews(category: string): Promise<GetNewResponse> {
  const res = await fetch(
    `https://inshorts.deta.dev/news?category=${category}`
  );
  const json: GetNewResponse = await res.json();
  return json as GetNewResponse;
}
