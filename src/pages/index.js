import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Banner from "../../components/banner/banner";
import NavBar from "../../components/nav/navbar";
import SectionCards from "../../components/card/section-cards.js";
import { getPopularVideos, getVideos } from "../../lib/videos";

export async function getServerSideProps(context) {
  const categories = ["disney trailer", "productivity", "travel"];
  const videos = {};

  for (const category of categories) {
    videos[category] = await getVideos(category);
  }

  const popularVideos = await getPopularVideos();

  return {
    props: {
      videos: JSON.parse(JSON.stringify(videos)),
      popularVideos: JSON.parse(JSON.stringify(popularVideos)),
    },
  };
}

export default function Home({ videos, popularVideos }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <NavBar username="auserisunknown@gmail.com" />
        <Banner
          title="The Dark Knight"
          subTitle="Don't Mess with Batman"
          imgUrl="/static/dark_knight.jpg"
        />
        <div className={styles.sectionWrapper}>
          <SectionCards
            title="Disney"
            videos={videos["disney trailer"]}
            size="large"
          />
          <SectionCards title="Travel" videos={videos.travel} size="small" />
          <SectionCards
            title="Productivity"
            videos={videos.productivity}
            size="small"
          />
          <SectionCards title="Popular" videos={popularVideos} size="small" />
        </div>
      </div>
    </div>
  );
}
