import Footer from '@/components/organisms/Footer';
import NavBar from '@/components/organisms/NavBar';
import Card from '@/components/molecules/Card';
import MainTitle from '@/components/atoms/MainTitle';

import { getNews } from '../page';

interface PageProps {
  category: string;
}

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

interface Props {
  params: { category: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata({ params }: Props) {
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
      image:
        'https://storage.googleapis.com/vucar-user-assets/public-assets/vucar-logo.webp',
    },
  };
}

export default async function AllCategory({ params }: { params: PageProps }) {
  const { cat, data, success } = await getNews(params.category);

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
