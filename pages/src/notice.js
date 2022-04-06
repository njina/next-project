import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import NoticeList from "../../components/Notice/NoticeList";

export default function Notice({ postData }) {
  // console.log(postData.data);
  // const posts = postData.data.attributes;

  return (
    <>
      <Header />
      <NoticeList postData={postData} />
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  let { id } = context.query;
  const baseApiUrl = "https://boiling-cliffs-98317.herokuapp.com";
  const postRes = await fetch(`${baseApiUrl}/api/notices`);
  const postData = await postRes.json();

  return {
    props: {
      postData,
    }, // will be passed to the page component as props
  };
}
