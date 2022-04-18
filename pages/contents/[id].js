import SubLayout1 from "../../components/Contents/SubLayout1";
import baseApiUrl from "../../utils/baseApiUrl";

export default function Contents({ contData }) {
  return (
    <>
      <SubLayout1 contData={contData}></SubLayout1>
    </>
  );
}

export async function getServerSideProps(context) {
  let { id } = context.query;

  const contRes = await fetch(`${baseApiUrl}/api/content`);
  const contData = await contRes.json();

  return {
    props: {
      contData,
    }, // will be passed to the page component as props
  };
}
