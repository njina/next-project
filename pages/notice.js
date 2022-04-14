import Header from "../components/Header";
import Footer from "../components/Footer";
import NoticeList from "../components/Notice/NoticeList";
import baseApiUrl from "../utils/baseApiUrl";

export default function Notice({ menuData, postData }) {
  // console.log(postData.data);
  // const posts = postData.data.attributes;

  return (
    <>
      <Header menuData={menuData} />
      <NoticeList postData={postData} />
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const menuRes = await fetch(`${baseApiUrl}/api/menus?nested`);
  const menuData = await menuRes.json();

  let { id } = context.query;
  const postRes = await fetch(`${baseApiUrl}/api/notices`);
  const postData = await postRes.json();

  return {
    props: {
      menuData,
      postData,
    }, // will be passed to the page component as props
  };
}
