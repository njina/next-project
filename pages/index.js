import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainBanner from "../components/MainBanner";
import MainContents from "../components/MainContents";

export default function Home({ menuData }) {
  return (
    <>
      <Header menuData={menuData} />
      <MainBanner />
      <MainContents />
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  let { id } = context.query;
  const baseApiUrl = "https://boiling-cliffs-98317.herokuapp.com";
  const menuRes = await fetch(`${baseApiUrl}/api/navigation/render/1?type=FLAT`);
  const menuData = await menuRes.json();

  return {
    props: {
      menuData,
    }, // will be passed to the page component as props
  };
}
