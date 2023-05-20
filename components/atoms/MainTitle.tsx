export default function MainTitle({ title }: { title: string }) {
  return (
    <h1 className='text-sky-600 mx-10 text-3xl font-bold py-5 capitalize'>
      {title}
    </h1>
  );
}
