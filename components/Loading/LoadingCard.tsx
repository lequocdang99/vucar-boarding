import LoadingTitle from './LoadingTitle';
import LoadingAuthor from './LoadingAuthor';
import LoadingContent from './LoadingContent';

export default function LoadingCard() {
  return (
    <div className='grid grid-rows-2 border-x border-b border-gray-300 rounded-lg'>
      <div className='w-full h-72 bg-gray-300 rounded-t-lg animate-pulse'></div>
      <div className='p-3'>
        <LoadingTitle />
        <LoadingAuthor />
        <LoadingContent />
      </div>
    </div>
  );
}
