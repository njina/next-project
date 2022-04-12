import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import SubLayout1 from "../../../components/Contents/SubLayout1";
import baseApiUrl from "../../../utils/baseApiUrl";

export default function Contents({ menuData, contData }) {
  return (
    <>
      <Header menuData={menuData} />
      <SubLayout1 contData={contData}></SubLayout1>
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  let { id } = context.query;

  const menuRes = await fetch(`${baseApiUrl}/api/navigation/render/1?type=FLAT`);
  const menuData = await menuRes.json();

  const contRes = await fetch(`${baseApiUrl}/api/content`);
  const contData = await contRes.json();

  return {
    props: {
      menuData,
      contData,
    }, // will be passed to the page component as props
  };
}
