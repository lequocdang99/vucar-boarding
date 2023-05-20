import Link from 'next/link';
import Image from 'next/image';

import Title from '../atoms/Title';
import Author from '../atoms/Author';

import { News } from '@/types/types';

import { slugify } from '@/utils/slugify';

export default function SideArticle({
  category,
  data,
}: {
  category: string;
  data: News;
}) {
  return (
    <div className='grid grid-cols-2 gap-5'>
      <Link
        href='/[category]/[news]'
        as={`/${category}/${slugify(data.title)}`}
      >
        <Image
          src={data.imageUrl}
          alt={data.title}
          width={550}
          height={550}
          priority={true}
          className='w-72 h-40 rounded drop-shadow object-cover hover:scale-105 transition ease-in-out duration-300 cursor-pointer'
        />
      </Link>
      <div className=''>
        <Title
          title={data.title}
          category={category}
        />
        <Author author={data.author} />
      </div>
    </div>
  );
}
