import React from 'react';

export default function Author({ author }: { author: string }) {
  return (
    <div className='rounded bg-sky-600 text-white p-3 text-sm my-2 w-fit drop-shadow'>
      {author}
    </div>
  );
}
