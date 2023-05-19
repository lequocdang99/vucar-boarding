export interface GetNewResponse {
  category: string;
  success: string;
  data: News[];
}

export interface News {
  author: string;
  content: string;
  date: string;
  imageUrl: string;
  readMoreUrl: string;
  time: string;
  title: string;
  url: string;
}

export interface PageProps {
  category: string;
  news: string;
}

export interface Props {
  params: { category: string; news: string };
  searchParams: { [key: string]: string | string[] | undefined };
}
