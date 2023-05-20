import Head from '../atoms/Head';
import All from '../atoms/All';
import Card from '../molecules/Card';

import { News } from '@/types/types';

import { getNews } from '@/utils/getNews';

export default async function Category({ category }: { category: string }) {
  const data = await getNews(category);

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
        {data.data.slice(0, 3).map((item: News) => (
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
