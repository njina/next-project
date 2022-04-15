import Head from "next/head";
import baseApiUrl from "../../utils/baseApiUrl";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import GalleryView from "../../components/Gallery/GalleryView";

export default function Notice({ menuData, postData }) {
  return (
    <>
      <Header menuData={menuData} />
      <GalleryView postData={postData} />
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const menuRes = await fetch(`${baseApiUrl}/api/menus?nested`);
  const menuData = await menuRes.json();

  let { id } = context.query;
  const postRes = await fetch(`${baseApiUrl}/api/galleries/${id}?populate=*`);
  const postData = await postRes.json();

  return {
    props: {
      menuData,
      postData,
    }, // will be passed to the page component as props
  };
}
