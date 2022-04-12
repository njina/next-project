// import styles from "../../styles/sub.module.css";

const SubLayout1 = ({ contData }) => {
  console.log(contData.data);

  return (
    <div className="sub-wrapper">
      <div className="content_wrap">
        <p className="subpage_tit">{contData.data.attributes.title}</p>
        <div dangerouslySetInnerHTML={{ __html: contData.data.attributes.content }}></div>
      </div>
    </div>
  );
};

export default SubLayout1;
