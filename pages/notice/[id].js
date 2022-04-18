import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import styles from "../../styles/board.module.css";
import baseApiUrl from "../../utils/baseApiUrl";
import NoticeView from "../../components/Notice/NoticeView";

export default function Notice({ postData }) {
  return (
    <>
      <NoticeView postData={postData} />
    </>
  );
}

export async function getServerSideProps(context) {
  let { id } = context.query;
  const postRes = await fetch(`${baseApiUrl}/api/notices/${id}`);
  const postData = await postRes.json();

  return {
    props: {
      postData,
    }, // will be passed to the page component as props
  };
}
