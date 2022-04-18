import Head from "next/head";
import baseApiUrl from "../../utils/baseApiUrl";
import GalleryView from "../../components/Gallery/GalleryView";

export default function Notice({ postData }) {
  return (
    <>
      <GalleryView postData={postData} />
    </>
  );
}

export async function getServerSideProps(context) {
  let { id } = context.query;
  const postRes = await fetch(`${baseApiUrl}/api/galleries/${id}?populate=*`);
  const postData = await postRes.json();

  return {
    props: {
      postData,
    }, // will be passed to the page component as props
  };
}
