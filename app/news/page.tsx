import { getNewsList } from "../_libs/microcms";
import NewsLayout from "@/app/_components/NewsList";
import { NEWS_LIST_LIMIT } from "../_constants";

export default async function Page() {
    const { contents: news } = await getNewsList({
        limit: NEWS_LIST_LIMIT,
    });

    return <NewsLayout news={news} />;
    
}