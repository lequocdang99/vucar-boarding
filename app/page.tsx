import Head from '@/components/atoms/Head';
import NavBar from '@/components/organisms/NavBar';
import Footer from '@/components/organisms/Footer';
import MainTitle from '@/components/atoms/MainTitle';
import Category from '@/components/organisms/Category';
import MainArticle from '@/components/molecules/MainArticle';
import SideArticle from '@/components/molecules/SideArticle';

import { getNews } from '@/utils/getNews';

export default async function Main() {
  const { category, data } = await getNews('automobile');
  const randomArticle = data[Math.floor(Math.random() * data.length)];

  return (
    <div className='m-0 bg-white'>
      <NavBar />
      <div className='mx-10'>
        <MainTitle title='Bài Viết Nổi Bật' />
        <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-5 p-5 bg-slate-100 rounded-lg'>
          <MainArticle
            category={category}
            data={randomArticle}
          />
          <div className='grid grid-cols-1 gap-5'>
            <Head title='Bài Viết Mới Nhất' />
            <SideArticle
              category={category}
              data={data[1]}
              key={data[1].url}
            />
            <SideArticle
              category={category}
              data={data[2]}
              key={data[2].url}
            />
            <SideArticle
              category={category}
              data={data[4]}
              key={data[4].url}
            />
          </div>
        </div>
        {/* @ts-expect-error Server Component */}
        <Category category='automobile' />
        {/* @ts-expect-error Server Component */}
        <Category category='business' />
        {/* @ts-expect-error Server Component */}
        <Category category='entertainment' />
        {/* @ts-expect-error Server Component */}
        <Category category='science' />
        {/* @ts-expect-error Server Component */}
        <Category category='startup' />
        {/* @ts-expect-error Server Component */}
        <Category category='technology' />
      </div>
      <Footer />
    </div>
  );
}
