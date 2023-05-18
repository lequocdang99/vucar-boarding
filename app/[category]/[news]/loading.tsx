import LoadingArticle from '@/components/loading/LoadingArticle';
import LoadingFooter from '@/components/loading/LoadingFooter';
import LoadingNavBar from '@/components/loading/LoadingNavBar';

export default function Loading() {
  return (
    <div>
      <LoadingNavBar />
      <LoadingArticle />
      <LoadingFooter />
    </div>
  );
}
