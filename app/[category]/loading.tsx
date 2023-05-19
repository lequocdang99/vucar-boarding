import LoadingCard from '@/components/Loading/LoadingCard';
import LoadingFooter from '@/components/Loading/LoadingFooter';
import LoadingMainTitle from '@/components/Loading/LoadingMainTitle';
import LoadingNavBar from '@/components/Loading/LoadingNavBar';

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
