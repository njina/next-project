import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import styles from "../../styles/board.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import baseApiUrl from "../utils/baseApiUrl";

export default function Notice({ postData }) {
  console.log(postData);
  const thisAttr = postData.data.attributes;
  const mediaAttr = postData.data[0].attributes.media;
  //console.log(thisAttr);
  //console.log(mediaAttr);

  return (
    <>
      <Header />
      <div>갤러리 상세페이지 입니다.</div>
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const menuRes = await fetch(`${baseApiUrl}/api/menus?nested`);
  const menuData = await menuRes.json();

  let { id } = context.query;
  const postRes = await fetch(`${baseApiUrl}/api/galleries?populate=*`);
  const postData = await postRes.json();

  return {
    props: {
      postData,
    }, // will be passed to the page component as props
  };
}
