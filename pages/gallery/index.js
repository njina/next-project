import GalleryList from "../../components/Gallery/GalleryList";
import baseApiUrl from "../utils/baseApiUrl";

export default function Gallery({ postData }) {
  console.log(postData);
  // const posts = postData.data.attributes;

  return (
    <>
      <GalleryList postData={postData} />
    </>
  );
}

export async function getServerSideProps(context) {
  let { id } = context.query;
  const postRes = await fetch(`${baseApiUrl}/api/galleries?populate=*`);
  const postData = await postRes.json();
  console.log(postData);
  return {
    props: {
      postData,
    }, // will be passed to the page component as props
  };
}
