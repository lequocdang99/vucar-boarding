export default function Head({ title }: { title: string }) {
  return (
    <div className='capitalize text-black-600 font-bold py-3 text-2xl'>
      {title}
    </div>
  );
}
