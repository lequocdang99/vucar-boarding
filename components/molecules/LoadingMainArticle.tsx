import LoadingTitle from '../atoms/LoadingTitle';
import LoadingAuthor from '../atoms/LoadingAuthor';
import LoadingContent from '../atoms/LoadingContent';

export default function LoadingMainArticle() {
  return (
    <div className='flex flex-col w-100 h-fit'>
      <div className='w-full h-72 rounded animate-pulse bg-gray-300'></div>
      <div className='p-3'>
        <LoadingTitle />
        <LoadingContent />
        <LoadingAuthor />
      </div>
    </div>
  );
}
