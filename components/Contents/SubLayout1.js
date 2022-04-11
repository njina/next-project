import Link from "next/link";
// import styles from "../../styles/sub.module.css";

const SubLayout1 = ({ contData }) => {
  console.log(contData.data);

  return (
    <div className="sub-wrapper">
      <div className="content_wrap">
        <p class="subpage_tit">{contData.data.attributes.title}</p>
        <div>{contData.data.attributes.content}</div>
      </div>
    </div>
  );
};

export default SubLayout1;
