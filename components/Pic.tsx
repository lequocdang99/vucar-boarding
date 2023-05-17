import React from 'react';
import Image from 'next/image';

export default function Pic({
  url,
  title,
  width,
  height,
}: {
  url: string;
  title: string;
  width: number;
  height: number;
}) {
  return (
    <Image
      src={url}
      alt={title}
      width={width}
      height={height}
      priority={true}
      className='rounded drop-shadow object-cover hover:scale-105 transition ease-in-out delay-150 duration-300 cursor-pointer'
    />
  );
}
