import LoadingCard from '@/components/molecules/LoadingCard';
import LoadingFooter from '@/components/organisms/LoadingFooter';
import LoadingMainTitle from '@/components/atoms/LoadingMainTitle';
import LoadingNavBar from '@/components/organisms/LoadingNavBar';

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
