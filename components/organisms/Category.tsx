import React from 'react';
import Head from '../atoms/Head';
import All from '../atoms/All';
import Card from '../molecules/Card';
import { getNews } from '@/app/page';

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

export default async function Category({ category }: { category: string }) {
  const { cat, data, success } = await getNews(category);

  return (
    <div className='grid grid-cols-1 p-5 gap-5 '>
      <div className='flex flex-row items-baseline'>
        <Head title={category} />
        <div className='ml-auto'>
          <All
            title='Xem Tất Cả Bài Viết'
            url={`/${category}`}
          />
        </div>
      </div>
      <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-10 h-fit'>
        {data.slice(0, 3).map((item: News) => (
          <Card
            category={category}
            item={item}
            key={item.url}
          />
        ))}
      </div>
    </div>
  );
}
