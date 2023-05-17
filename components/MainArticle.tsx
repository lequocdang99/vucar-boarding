import React from 'react';
import Author from './Author';
import Title from './Title';
import Image from 'next/image';
import Content from './Content';
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

export default function MainArticle({
  category,
  data,
}: {
  category: string;
  data: News;
}) {
  return (
    <div className='flex flex-col w-100'>
      <Link
        href='/[category]/[news]'
        as={`/${category}/${slugify(data.title)}`}
      >
        <Image
          src={data.imageUrl}
          alt={data.title}
          width={700}
          height={550}
          className='rounded drop-shadow object-contain hover:scale-105 transition ease-in-out duration-300 cursor-pointer'
        />
      </Link>
      <div className='p-3 leading-loose'>
        <Title
          title={data.title}
          category={category}
        />
        <Content content={data.content} />
        <Author author={data.author} />
      </div>
    </div>
  );
}
