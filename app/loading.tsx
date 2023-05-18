import LoadingCategory from '@/components/loading/LoadingCategory';
import LoadingFooter from '@/components/loading/LoadingFooter';
import LoadingMainArticle from '@/components/loading/LoadingMainArticle';
import LoadingMainTitle from '@/components/loading/LoadingMainTitle';
import LoadingNavBar from '@/components/loading/LoadingNavBar';
import LoadingSideArticle from '@/components/loading/LoadingSideArticle';
import LoadingTitle from '@/components/loading/LoadingTitle';

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
        <LoadingCategory />
        <LoadingCategory />
        <LoadingCategory />
        <LoadingCategory />
        <LoadingCategory />
        <LoadingCategory />
      </div>
      <LoadingFooter />
    </div>
  );
}
