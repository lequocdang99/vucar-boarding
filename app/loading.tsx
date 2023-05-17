import LoadingMainArticle from '@/components/Loading/LoadingMainArticle';
import LoadingMainTitle from '@/components/Loading/LoadingMainTitle';
import LoadingNavBar from '@/components/Loading/LoadingNavBar';
import LoadingSideArticle from '@/components/Loading/LoadingSideArticle';
import LoadingTitle from '@/components/Loading/LoadingTitle';

export default function Loading() {
  return (
    <div className='m-0 bg-white'>
      <LoadingNavBar />
      <div className='mx-10'>
        <LoadingMainTitle />
        <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-5 p-5 bg-slate-100 rounded-lg'>
          <LoadingMainArticle />
          <div className='grid grid-cols-1 gap-5'>
            <LoadingTitle />
            <LoadingSideArticle />
            <LoadingSideArticle />
            <LoadingSideArticle />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
