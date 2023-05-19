import LoadingArticle from '@/components/Loading/LoadingArticle';
import LoadingFooter from '@/components/Loading/LoadingFooter';
import LoadingNavBar from '@/components/Loading/LoadingNavBar';

export default function Loading() {
  return (
    <div>
      <LoadingNavBar />
      <LoadingArticle />
      <LoadingFooter />
    </div>
  );
}
