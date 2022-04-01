import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/board.module.css";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function Notice({ data }) {
  //console.log(data);
  const attr0 = data.data[0].attributes;
  const attr1 = data.data[1].attributes;
  //console.log(attr0);

  return (
    <>
      <Header />
      아직 아무것도 없는 게 정상입니다.
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  let { id } = context.query;
  const baseApiUrl = "https://boiling-cliffs-98317.herokuapp.com";
  const res = await fetch(`${baseApiUrl}/api/notices`);
  const data = await res.json();

  return {
    props: {
      data,
    }, // will be passed to the page component as props
  };
}
