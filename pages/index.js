import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainBanner from "../components/MainBanner";
import MainContents from "../components/MainContents";

export default function Home({ gnbData }) {
  console.log(gnbData);

  return (
    <>
      <div>
        <p>id : {gnbData[0].id}</p>
        <p>title : {gnbData[0].title}</p>
        <a href={gnbData[0].path}>경로로 이동 - {gnbData[0].path}</a>
      </div>
      <div>
        <p>id : {gnbData[1].id}</p>
        <p>title : {gnbData[1].title}</p>
        <a href={gnbData[1].path}>경로로 이동 - {gnbData[1].path}</a>
      </div>
      <div>
        <p>id : {gnbData[2].id}</p>
        <p>title : {gnbData[2].title}</p>
        <a href={gnbData[2].path}>경로로 이동 - {gnbData[2].path}</a>
      </div>

      <Header />
      <MainBanner />
      <MainContents />
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  let { id } = context.query;
  const baseApiUrl = "https://boiling-cliffs-98317.herokuapp.com";
  const gnbRes = await fetch(`${baseApiUrl}/api/navigation/render/1?type=FLAT`);
  const gnbData = await gnbRes.json();

  return {
    props: {
      gnbData,
    }, // will be passed to the page component as props
  };
}
