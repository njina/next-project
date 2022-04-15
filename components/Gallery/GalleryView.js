import Link from "next/link";
import Router from "next/router";
import styles from "../../styles/board.module.css";

const GalleryView = ({ postData }) => {
  //console.log(postData.data);
  const thisAttr = postData.data.attributes;
  //console.log(thisAttr);

  return (
    <>
      <div className={styles.bd_galleryview}>
        <div className={styles.boardpage_wrap}>
          <div className="wrapper">
            <div className={styles.img_wrap}>
              <img width="400" height="400" src={thisAttr.media.data[0].attributes.url} alt={thisAttr.media.data[0].attributes.alternativeText} />
            </div>
            <p className={styles.bd_tit}>{thisAttr.title}</p>
            <div className={styles.bd_content} dangerouslySetInnerHTML={{ __html: thisAttr.content }} />
            <div className={styles.btn_wrap}>
              <Link href="#">
                <a className={styles.btn} title="목록보기" onClick={() => Router.back()}>
                  목록
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryView;
