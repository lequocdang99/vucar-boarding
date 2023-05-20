import LoadingTitle from '../atoms/LoadingTitle';
import LoadingCard from '../molecules/LoadingCard';

export default function LoadingCategory() {
  return (
    <div className='grid grid-cols-1 p-5 gap-5 '>
      <div className='flex flex-row '>
        <div className='mr-auto w-1/6'>
          <LoadingTitle />
        </div>
        <div className='ml-auto w-1/6'>
          <LoadingTitle />
        </div>
      </div>
      <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-10 h-fit'>
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
      </div>
    </div>
  );
}
