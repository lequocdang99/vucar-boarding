import LoadingTitle from '../atoms/LoadingTitle';
import LoadingAuthor from '../atoms/LoadingAuthor';

export default function LoadingSideArticle() {
  return (
    <div className='grid grid-cols-2 gap-5'>
      <div className='w-full h-40 rounded bg-gray-300 animate-pulse'></div>
      <div className='py-2'>
        <LoadingTitle />
        <LoadingAuthor />
      </div>
    </div>
  );
}
