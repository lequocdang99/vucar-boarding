import LoadingTitle from '../atoms/LoadingTitle';
import LoadingAuthor from '../atoms/LoadingAuthor';
import LoadingContent from '../atoms/LoadingContent';
import LoadingMainTitle from '../atoms/LoadingMainTitle';

export default function LoadingArticle() {
  return (
    <div className='bg-white py-5'>
      <div className='mx-auto md:mx-48'>
        <LoadingMainTitle />
      </div>
      <div className='mx-10 md:mx-52 mb-10 bg-gray-200 rounded-lg p-10'>
        <div className='flex flex-row w-700px'>
          <LoadingAuthor />
          <div className='ml-auto'>
            <LoadingTitle />
          </div>
        </div>
        <div className='w-full h-72 rounded bg-gray-300'></div>
        <div className='p-5'>
          <LoadingContent />
        </div>
      </div>
    </div>
  );
}
