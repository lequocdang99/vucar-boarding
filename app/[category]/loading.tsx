import LoadingCard from '@/components/loading/LoadingCard';
import LoadingFooter from '@/components/loading/LoadingFooter';
import LoadingMainTitle from '@/components/loading/LoadingMainTitle';
import LoadingNavBar from '@/components/loading/LoadingNavBar';

export default function Loading() {
  return (
    <div className='bg-white'>
      <LoadingNavBar />
      <div className='mx-10 mb-10'>
        <LoadingMainTitle />
        <div className='grid grid-cols-3 gap-5'>
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
        </div>
      </div>
      <LoadingFooter />
    </div>
  );
}
