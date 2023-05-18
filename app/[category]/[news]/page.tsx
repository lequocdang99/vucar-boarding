import Footer from '@/components/organisms/Footer';
import NavBar from '@/components/organisms/NavBar';
import { getNews } from '@/app/page';
import { slugify } from '@/components/molecules/Card';
import Article from '@/components/molecules/Article';
import Loading from './loading';

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
