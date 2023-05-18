import Footer from '@/components/organisms/Footer';
import NavBar from '@/components/organisms/NavBar';
import Article from '@/components/molecules/Article';

import { getNews } from '@/app/page';
import { slugify } from '@/components/molecules/Card';

interface News {
  author: string;
  content: string;
  date: string;
  imageUrl: string;
  readMoreUrl: string;
  time: string;
  title: string;
  url: string;
}

interface PageProps {
  category: string;
  news: string;
}

interface Props {
  params: { category: string; news: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata({ params }: Props) {
  const unslugified = params.news
    .replace(/\-/g, ' ')
    .replace(
      /\w\S*/g,
      (text) => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
    );
  return {
    title: `${unslugified}`,
    description: `${unslugified}`,
    keywords: `Vucar, Bài Viết, Blog, ${unslugified}`,
  };
}

export default async function News({ params }: { params: PageProps }) {
  const data = await getNews(params.category);
  const article = await data.data.filter(
    (e: News) => slugify(e.title) === params.news
  );
  return (
    <div>
      <NavBar />
      <Article data={article[0]} />
      <Footer />
    </div>
  );
}
