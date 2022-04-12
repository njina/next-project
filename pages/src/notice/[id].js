import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import styles from "../../../styles/board.module.css";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function Notice({ data }) {
  // console.log(data);
  const keyId = data.data.id;
  const thisAttr = data.data.attributes;
  // console.log(thisAttr);

  return (
    <>
      <Header />
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
              <a className={styles.btn} title="게시글 목록보기" onClick={() => Router.back()}>
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
  let { id } = context.query;
  const baseApiUrl = "https://boiling-cliffs-98317.herokuapp.com";
  const res = await fetch(`${baseApiUrl}/api/notices/${id}`);
  const data = await res.json();

  return {
    props: {
      data,
    }, // will be passed to the page component as props
  };
}
