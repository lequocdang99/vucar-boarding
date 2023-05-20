import { Metadata } from 'next';

import Footer from '@/components/organisms/Footer';
import NavBar from '@/components/organisms/NavBar';
import Article from '@/components/molecules/Article';
import LoadingArticle from '@/components/molecules/LoadingArticle';

import { News } from '@/types/types';
import { Props } from '@/types/types';
import { PageProps } from '@/types/types';

import { getNews } from '@/utils/getNews';
import { slugify } from '@/utils/slugify';
import { unslugified } from '@/utils/slugify';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: unslugified(params.news),
    description: unslugified(params.news),
    keywords: `Vucar, Bài Viết, Blog, ${unslugified(params.news)}`,
    openGraph: {
      url: `https://vucar.vn/${params.category}/${params.news}`,
      title: `Vucar | ${unslugified(params.news)}`,
      description: `Vucar Vietnam - ${unslugified(params.news)}`,
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
