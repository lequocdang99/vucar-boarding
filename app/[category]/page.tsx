import { Metadata } from 'next';

import Card from '@/components/molecules/Card';
import NavBar from '@/components/organisms/NavBar';
import Footer from '@/components/organisms/Footer';
import MainTitle from '@/components/atoms/MainTitle';

import { News } from '@/types/types';
import { Props } from '@/types/types';
import { PageProps } from '@/types/types';

import { getNews } from '@/utils/getNews';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const capitalized =
    params.category.charAt(0).toUpperCase() + params.category.slice(1, 10);
  return {
    title: `Vucar - ${capitalized}`,
    description: `All news related to ${params.category}`,
    keywords: `Vucar, Bài Viết, Blog, ${capitalized}`,
    openGraph: {
      url: `https://vucar.vn/${params.category}`,
      title: `Vucar | ${capitalized}`,
      description: `Vucar Vietnam - ${capitalized}`,
      images: {
        url: 'https://storage.googleapis.com/vucar-user-assets/public-assets/vucar-logo.webp',
      },
    },
  };
}

export default async function AllCategory({ params }: { params: PageProps }) {
  const { category, data, success } = await getNews(params.category);
  console.log(params);

  return (
    <div className='bg-white'>
      <NavBar />
      <div className='mx-10 mb-10'>
        <MainTitle title={params.category} />
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
          {data?.map((item: News) => (
            <Card
              item={item}
              category={params.category}
              key={item.title}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
