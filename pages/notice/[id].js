import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import styles from "../../styles/board.module.css";
import baseApiUrl from "../../utils/baseApiUrl";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import NoticeView from "../../components/Notice/NoticeView";

export default function Notice({ menuData, postData }) {
  return (
    <>
      <Header menuData={menuData} />
      <NoticeView postData={postData} />
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const menuRes = await fetch(`${baseApiUrl}/api/menus?nested`);
  const menuData = await menuRes.json();

  let { id } = context.query;
  const postRes = await fetch(`${baseApiUrl}/api/notices/${id}`);
  const postData = await postRes.json();

  return {
    props: {
      menuData,
      postData,
    }, // will be passed to the page component as props
  };
}
