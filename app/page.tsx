import styles from "./page.module.css";
import Image from "next/image";
import  { getNewsList } from "@/app/_libs/microcms"
import { TOP_NEWS_LIMIT } from "@/app/_constants";
import NewsList from "@/app/_components/NewsList";
import ButtonLink from "@/app/_components/ButtonLink";
import { get } from "http";

export const revalidate = 60;

export default async function Home() {


  const data = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  });

  return  (
    <>
    <section className = {styles.top}>
    <div>
      <h1 className={styles.title}> HOME </h1>
      <p className={styles.description}>
        これは私ポートフォリオサイトです。
      </p>
    </div>
    <Image 
       className={styles.bgimg}
       src="/images/colorful.jpg"
       alt=""
       width={4000}
       height={1200}
       />
    

  </section>
 <section className={styles.news}>
  <h2 className={styles.newsTitle}>自己紹介</h2>
  <NewsList news={data.contents} />
    
       <div className={styles.newsLink}>
        <ButtonLink href="/news">もっとみる</ButtonLink>
       </div>
     </section>
    </>
  );
}
