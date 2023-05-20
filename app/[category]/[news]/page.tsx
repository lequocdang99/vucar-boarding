import Footer from '@/components/organisms/Footer';
import NavBar from '@/components/organisms/NavBar';
import Article from '@/components/molecules/Article';
import { Metadata } from 'next';

import { News } from '@/types/types';
import { getNews } from '@/app/page';
import { Props } from '@/types/types';
import { PageProps } from '@/types/types';
import { slugify } from '@/components/molecules/Card';
import LoadingArticle from '@/components/Loading/LoadingArticle';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const unslugified = params.news
    .replace(/\-/g, ' ')
    .replace(
      /\w\S*/g,
      (text) => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
    );
  return {
    title: unslugified,
    description: unslugified,
    keywords: `Vucar, Bài Viết, Blog, ${unslugified}`,
    openGraph: {
      url: `https://vucar.vn/${params.category}/${params.news}`,
      title: `Vucar | ${unslugified}`,
      description: `Vucar Vietnam - ${unslugified}`,
      images: {
        url: 'https://storage.googleapis.com/vucar-user-assets/public-assets/vucar-logo.webp',
      },
    },
  };
}

export default async function News({ params }: { params: PageProps }) {
  const data = await getNews(params.category);
  const article = data.data.filter((e: News) => {
    return slugify(e.title) === params.news;
  });
  return (
    <div>
      <NavBar />
      {article.length > 0 ? <Article data={article[0]} /> : <LoadingArticle />}
      <Footer />
    </div>
  );
}
