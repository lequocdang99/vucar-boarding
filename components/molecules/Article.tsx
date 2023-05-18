import React from 'react';
import Image from 'next/image';
import MainTitle from '../atoms/MainTitle';
import Author from '../atoms/Author';
import FullContent from '../atoms/FullContent';
import Timestamp from '../atoms/Timestamp';

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

export default function Article({ data }: { data: News }) {
  return (
    <div className='bg-white pb-5'>
      <div className='mx-auto md:mx-48'>
        <MainTitle title={data.title} />
      </div>
      <div className='mx-10 md:mx-52 mb-10 bg-slate-100 rounded-lg p-10 drop-shadow'>
        <div className='flex flex-row w-700px'>
          <Author author={data.author} />
          <Timestamp time={`${data.time} ${data.date}`} />
        </div>
        <Image
          src={data.imageUrl}
          alt={data.title}
          width={1300}
          height={550}
          className='w-full h-auto rounded drop-shadow object-cover'
        />
        <div className='p-5'>
          <FullContent content={data.content} />
        </div>
      </div>
    </div>
  );
}
