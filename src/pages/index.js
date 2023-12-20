import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Banner from "../../components/banner/banner";
import NavBar from "../../components/nav/navbar";
import SectionCards from "../../components/card/section-cards.js";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const disneyVideos = [
    {
      imgUrl: "/static/dark_knight.jpg",
    },
    {
      imgUrl: "/static/dark_knight.jpg",
    },
    {
      imgUrl: "/static/dark_knight.jpg",
    },
  ];
  return (
    <>
      <Head>
        <title>Netflix</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar username="auserisunknown@gmail.com" />
      <Banner
        title="The Dark Knight"
        subTitle="Don't Mess with Batman"
        imgUrl="/static/dark_knight.jpg"
      />
      <div className={styles.sectionWrapper}>
        <SectionCards title="Disney" videos={disneyVideos} size="large" />
        <SectionCards
          title="Productivity"
          videos={disneyVideos}
          size="medium"
        />
      </div>
    </>
  );
}
