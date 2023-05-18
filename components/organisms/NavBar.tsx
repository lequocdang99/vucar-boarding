import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../atoms/Button';

export default function NavBar() {
  return (
    <div className='grid sm:grid-cols-1 sm:grid-rows-2 md:grid-cols-7 md:grid-rows-1 items-center justify-center text-center bg-sky-600 text-white p-2 drop-shadow'>
      <div className='md:col-span-2 hover:scale-110 transition ease-in-out delay-150 duration-300'>
        <Link href='/'>
          <Image
            src='https://www.vucar.vn/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Flogo_footer.9cb72769.png&w=256&q=75'
            width={200}
            height={100}
            alt='Vucar logo'
            priority={true}
            className='mx-auto w-auto h-auto'
          />
        </Link>
      </div>
      <div className='sm:py-2 md:px-2'>
        <Link
          className='hover:border-b-2 p-2'
          href='/'
        >
          MUA XE
        </Link>
      </div>
      <div className='sm:py-2 md:px-2'>
        <Link
          className='hover:border-b-2 p-2'
          href='/'
        >
          BÁN XE
        </Link>
      </div>
      <div className='sm:py-2 md:px-2'>
        <Link
          className='hover:border-b-2 p-2'
          href='/'
        >
          VỀ VUCAR
        </Link>
      </div>
      <div className='sm:py-2 md:px-2'>
        <Link
          className='hover:border-b-2 p-2'
          href='/'
        >
          BLOG
        </Link>
      </div>
      <div className='sm:py-2 md:px-2'>
        <Button button='Đăng Nhập' />
      </div>
    </div>
  );
}
