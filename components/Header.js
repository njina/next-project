import Link from "next/link";
import Image from "next/image";

const Header = ({}) => {
  return (
    <header>
      <div className="header_wrap clearfix">
        <h1>
          <Link href="/">
            <a>
              <Image src="/images/logo.png" alt="일룸" width="85" height="23" />
            </a>
          </Link>
        </h1>
        <nav className="gnb">
          <ul className="depth_1">
            {/* {gnbData &&
              gnbData.data.map((menu) => {
                <li key={menu.id}>
                  <p>{menu.attributes.name}</p>
                  <p>{menu.attributes.url}</p>
                </li>;
              })} */}
            <li>
              <Link href="/src/livingroom">
                <a title="해당 페이지로 이동">거실</a>
              </Link>
            </li>
            <li>
              <Link href="/src/notice">
                <a title="해당 페이지로 이동">공지사항</a>
              </Link>
            </li>
            <li>
              <Link href="/src/gallery">
                <a title="해당 페이지로 이동">갤러리</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a title="해당 페이지로 이동">고객문의</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
