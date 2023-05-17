import React from 'react';

export default function Button({ button }: { button: string }) {
  return (
    <button className='rounded bg-white px-4 py-2 text-sky-600 drop-shadow transition ease-in-out delay-150 duration-300 hover:scale-110'>
      {button}
    </button>
  );
}
