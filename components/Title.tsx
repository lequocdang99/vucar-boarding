import React from 'react';
import Link from 'next/link';

export default function Title({ url, title }: { url: string; title: string }) {
  return (
    <div className='font-bold text-lg w-fit hover:underline cursor-pointer'>
      <Link href={`${url}`}>{title}</Link>
    </div>
  );
}
