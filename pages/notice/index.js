import NoticeList from "../../components/Notice/NoticeList";
import baseApiUrl from "../utils/baseApiUrl";

export default function Notice({ postData }) {
  // console.log(postData.data);
  // const posts = postData.data.attributes;

  return (
    <>
      <NoticeList postData={postData} />
    </>
  );
}

export async function getServerSideProps(context) {
  let { id } = context.query;
  const postRes = await fetch(`${baseApiUrl}/api/notices`);
  const postData = await postRes.json();

  return {
    props: {
      postData,
    }, // will be passed to the page component as props
  };
}
