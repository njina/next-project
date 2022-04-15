import Header from "../components/Header";
import Footer from "../components/Footer";
import GalleryList from "../components/Gallery/GalleryList";
import baseApiUrl from "../utils/baseApiUrl";

export default function Gallery({ menuData, postData }) {
  //console.log(postData);
  // const posts = postData.data.attributes;

  return (
    <>
      <Header menuData={menuData} />
      <GalleryList postData={postData} />
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
      menuData,
      postData,
    }, // will be passed to the page component as props
  };
}
