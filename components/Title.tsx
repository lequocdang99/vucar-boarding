import React from 'react';
import Link from 'next/link';
import { slugify } from './Card';

export default function Title({
  category,
  title,
}: {
  category: string;
  title: string;
}) {
  return (
    <div className='font-bold text-lg w-fit hover:underline cursor-pointer'>
      <Link
        href='/[category]/[news]'
        as={`/${category}/${slugify(title)}`}
      >
        {title}
      </Link>
    </div>
  );
}
