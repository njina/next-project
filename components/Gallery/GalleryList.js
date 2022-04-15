import Link from "next/link";
import styles from "../../styles/board.module.css";

const GalleryList = ({ postData }) => {
  //console.log(postData.data);

  return (
    <div className={styles.boardpage_wrap}>
      <div className="wrapper">
        <p className={styles.subpage_tit}>갤러리</p>
        <ul className={styles.bd_gallerylist}>
          {postData &&
            postData.data.map((post) => {
              return (
                <li key={post.id}>
                  <Link href={`/gallery/${post.id}`}>
                    <a title="상세페이지로 이동">
                      <div className={styles.thumb}>
                        <img src={post.attributes.media.data[0].attributes.url} alt={post.attributes.media.data[0].attributes.alternativeText} />
                      </div>
                      <p className={styles.bd_tit}>{post.attributes.title}</p>
                    </a>
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default GalleryList;
