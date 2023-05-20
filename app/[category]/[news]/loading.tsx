import LoadingArticle from '@/components/molecules/LoadingArticle';
import LoadingFooter from '@/components/organisms/LoadingFooter';
import LoadingNavBar from '@/components/organisms/LoadingNavBar';

export default function Loading() {
  return (
    <div>
      <LoadingNavBar />
      <LoadingArticle />
      <LoadingFooter />
    </div>
  );
}
