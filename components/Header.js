import Link from "next/link";
import Image from "next/image";

const Header = () => {
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
            <li>
              <Link href="#">
                <a>거실</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>공지사항</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>갤러리</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>고객문의</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
