import Image from 'next/image';
import Title from '../atoms/Title';
import Author from '../atoms/Author';
import Content from '../atoms/Content';
import Link from 'next/link';

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

export const slugify = (str: string) => {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

export default function Card({
  item,
  category,
}: {
  item: News;
  category: string;
}) {
  return (
    <div
      key={item.title}
      className='grid grid-rows-2 border-x border-b rounded-lg hover:scale-105 transition ease-in-out duration-300 cursor-pointer'
    >
      <Link
        href='/[category]/[news]'
        as={`/${category}/${slugify(item.title)}`}
      >
        <Image
          src={item.imageUrl}
          alt={item.title}
          width={400}
          height={400}
          priority={true}
          className='w-full h-72 rounded-t-lg drop-shadow object-cover'
        />
      </Link>
      <div className='p-3'>
        <Title
          category={category}
          title={item.title}
        />
        <Author author={item.author} />
        <Content content={item.content} />
      </div>
    </div>
  );
}
