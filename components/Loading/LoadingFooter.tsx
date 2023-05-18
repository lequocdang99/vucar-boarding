import LoadingTitle from './LoadingTitle';
import LoadingContent from './LoadingContent';

export default function LoadingFooter() {
  return (
    <div className='bg-gray-200 px-10 py-5 gap-5'>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
        <div className='col-span-1 md:col-span-2'>
          <div className='sm:py-4 md:pb-4 w-1/4'>
            <LoadingTitle />
          </div>
          <LoadingContent />
        </div>
        <div>
          <div className='py-4'>
            <LoadingTitle />
          </div>
          <div className='rounded-full animate-pulse bg-gray-300 pb-3 mb-5 h-8 w-1/2'></div>
          <div className='rounded-full animate-pulse bg-gray-300 pb-3 mb-5 h-8 w-1/2'></div>
        </div>
        <div className='flex flex-col'>
          <div className='py-4'>
            <LoadingTitle />
          </div>
          <div className='rounded-full animate-pulse bg-gray-300 sm:py-4 md:pb-4 mb-5'></div>
          <div className='rounded-full animate-pulse bg-gray-300 sm:py-4 md:pb-4 mb-5'></div>
          <div className='rounded-full animate-pulse bg-gray-300 sm:py-4 md:pb-4 mb-5'></div>
          <div className='rounded-full animate-pulse bg-gray-300 sm:py-4 md:pb-4'></div>
        </div>
      </div>
      <div className='flex flex-row justify-center space-x-5'>
        <div className='rounded animate-pulse bg-gray-300 w-12 h-12'></div>
        <div className='rounded animate-pulse bg-gray-300 w-12 h-12'></div>
      </div>
    </div>
  );
}
