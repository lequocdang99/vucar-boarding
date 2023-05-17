import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Head from '@/components/Head';
import MainArticle from '@/components/MainArticle';
import SideArticle from '@/components/SideArticle';
import Category from '@/components/Category';
import MainTitle from '@/components/MainTitle';
import LoadingMainTitle from '@/components/Loading/LoadingMainTitle';
import LoadingNavBar from '@/components/Loading/LoadingNavBar';
import LoadingMainArticle from '@/components/Loading/LoadingMainArticle';
import LoadingSideArticle from '@/components/Loading/LoadingSideArticle';

export async function getNews(category: string) {
  const res = await fetch(
    `https://inshorts.deta.dev/news?category=${category}`
  );
  return await res.json();
}

export default async function Main() {
  const { category, data, success } = await getNews('all');
  const randomArticle = data[Math.floor(Math.random() * data.length)];

  return (
    <div className='m-0 bg-white'>
      <NavBar />
      <div className='mx-10'>
        <MainTitle title='Bài Viết Nổi Bật' />
        <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-5 p-5 bg-slate-100 rounded-lg'>
          <MainArticle data={randomArticle} />
          <div className='grid grid-cols-1 gap-5'>
            <Head title='Bài Viết Mới Nhất' />
            <SideArticle
              data={data[1]}
              key={data[1].url}
            />
            <SideArticle
              data={data[2]}
              key={data[2].url}
            />
            <SideArticle
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
