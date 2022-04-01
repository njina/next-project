import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/board.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Notice({ data }) {
  console.log(data);
  const attr0 = data.data[0].attributes;
  const attr1 = data.data[1].attributes;
  const attr2 = data.data[2].attributes;
  //console.log(attr0);

  return (
    <>
      <Header />
      <div className={styles.boardpage_wrap}>
        <div className="wrapper">
          <p className={styles.subpage_tit}>공지사항</p>
          <ul className={styles.bd_list}>
            <li>
              <Link href="/src/notice/3">
                <a>
                  <p className={styles.title}>{attr2.title}</p>
                </a>
              </Link>
              <p className={styles.date}>{attr2.date}</p>
            </li>
            <li>
              <Link href="/src/notice/2">
                <a>
                  <p className={styles.title}>{attr1.title}</p>
                </a>
              </Link>
              <p className={styles.date}>{attr1.date}</p>
            </li>
            <li>
              <Link href="/src/notice/1">
                <a>
                  <p className={styles.title}>{attr0.title}</p>
                </a>
              </Link>
              <p className={styles.date}>{attr0.date}</p>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  let { id } = context.query;
  const baseApiUrl = "https://boiling-cliffs-98317.herokuapp.com";
  const res = await fetch(`${baseApiUrl}/api/notices`);
  const data = await res.json();

  return {
    props: {
      data,
    }, // will be passed to the page component as props
  };
}
