import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ menuData, children }) => {
  return (
    <>
      <Header menuData={menuData} />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
