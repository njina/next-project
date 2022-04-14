import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import styles from "../../../styles/board.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import baseApiUrl from "../../utils/baseApiUrl";

export default function Notice({ menuData, postData }) {
  // console.log(postData);
  const keyId = postData.data.id;
  const thisAttr = postData.data.attributes;
  // console.log(thisAttr);

  return (
    <>
      <Header menuData={menuData} />
      <div className={styles.boardpage_wrap}>
        <div className="wrapper">
          <div className={styles.bd_view}>
            <p className={styles.title}>{thisAttr.title}</p>
            <p className={styles.date}>{thisAttr.date}</p>
            {/* <div className={styles.content}>{thisAttr.content}</div> */}
            <div className={styles.content} dangerouslySetInnerHTML={{ __html: thisAttr.content }} />
          </div>

          <div className={styles.btn_wrap}>
            <Link href="#">
              <a className={styles.btn} title="목록보기" onClick={() => Router.back()}>
                목록
              </a>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const menuRes = await fetch(`${baseApiUrl}/api/menus?nested`);
  const menuData = await menuRes.json();

  let { id } = context.query;
  const postRes = await fetch(`${baseApiUrl}/api/notices/${id}`);
  const postData = await postRes.json();

  return {
    props: {
      menuData,
      postData,
    }, // will be passed to the page component as props
  };
}
