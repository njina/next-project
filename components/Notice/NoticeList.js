import Link from "next/link";
import styles from "../../styles/board.module.css";

const NoticeList = ({ postData }) => {
  console.log(postData.data);

  function changeBg(e) {
    e.target.style.background = "#ededed";
  }
  function defaultBg(e) {
    e.target.style.background = "#fff";
  }

  return (
    <div className={styles.boardpage_wrap}>
      <div className="wrapper">
        <p className={styles.subpage_tit}>공지사항</p>
        <ul className={styles.bd_list}>
          {postData &&
            postData.data.map((post) => (
              <li key={post.id} className="clearfix" onMouseEnter={changeBg} onMouseLeave={defaultBg}>
                <p className={styles.category}>{post.attributes.category}</p>
                <Link href={`/src/notice/${post.id}`}>
                  <a title="게시글 상세보기">
                    <p className={styles.title}>{post.attributes.title}</p>
                  </a>
                </Link>
                <p className={styles.date}>{post.attributes.date}</p>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default NoticeList;
