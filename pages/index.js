import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainBanner from "../components/MainBanner";
import MainContents from "../components/MainContents";

export default function Home({}) {
  //console.log(menuData);

  return (
    <>
      <Header />
      <MainBanner />
      <MainContents />
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  let { id } = context.query;

  // const menuRes = await fetch(`${baseApiUrl}/api/menus?nested`);
  // const menuData = await menuRes.json();

  return {
    props: {
      // menuData,
    }, // will be passed to the page component as props
  };
}
