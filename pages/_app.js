import "../styles/globals.css";
import Layout from "../components/_App/Layout";
import baseApiUrl from "../utils/baseApiUrl";

function MyApp({ Component, menuData, pageProps }) {
  //console.log(menuData);

  return (
    <Layout menuData={menuData}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

MyApp.getInitialProps = async (context) => {
  const menuRes = await fetch(`${baseApiUrl}/api/menus?nested`);
  const menuData = await menuRes.json();
  return { menuData };
};
