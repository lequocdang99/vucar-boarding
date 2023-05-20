import Link from 'next/link';

export default function All({ title, url }: { title: string; url: string }) {
  return (
    <Link
      href='/[category]'
      as={`${url}`}
      className='font-bold text-sky-600 hover:underline'
    >
      {title}
    </Link>
  );
}
