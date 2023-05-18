import React from 'react';
import Title from '../atoms/Title';
import Author from '../atoms/Author';
import Image from 'next/image';
import Link from 'next/link';
import { slugify } from './Card';

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
