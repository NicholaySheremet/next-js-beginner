import { useRouter } from "next/router";

function NewsPage() {
  const router = useRouter()

  const { newsId } = router.query;

  return <h1>Test news page {newsId}</h1>;
}

export default NewsPage;
