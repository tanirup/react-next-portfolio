import { getNewsList } from "../_libs/microcms";
import NewsLayout from "@/app/_components/NewsList";
import Pagination from "../_components/Pagination";
import SearchField from "../_components/SearchField";
import { NEWS_LIST_LIMIT } from "../_constants";
import NewsList from "@/app/_components/NewsList";


export default async function Page() {
    const { contents: news, totalCount } = await getNewsList({
        limit: NEWS_LIST_LIMIT,
    });

    return (
        <>
        <SearchField />
        <NewsList news={news} />
        <Pagination totalCount={totalCount} />
    </>
   );
}