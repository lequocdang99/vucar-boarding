import LoadingTitle from '@/components/atoms/LoadingTitle';
import LoadingNavBar from '@/components/organisms/LoadingNavBar';
import LoadingFooter from '@/components/organisms/LoadingFooter';
import LoadingCategory from '@/components/organisms/LoadingCategory';
import LoadingMainTitle from '@/components/atoms/LoadingMainTitle';
import LoadingMainArticle from '@/components/molecules/LoadingMainArticle';
import LoadingSideArticle from '@/components/molecules/LoadingSideArticle';

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
