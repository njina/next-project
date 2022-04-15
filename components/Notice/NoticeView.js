import Link from "next/link";
import styles from "../../styles/board.module.css";

const NoticeView = ({ postData }) => {
  // console.log(postData);
  const keyId = postData.data.id;
  const thisAttr = postData.data.attributes;
  // console.log(thisAttr);

  function changeBg(e) {
    e.target.style.background = "#ededed";
  }
  function defaultBg(e) {
    e.target.style.background = "#fff";
  }

  return (
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
  );
};

export default NoticeView;
