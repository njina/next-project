import Link from "next/link";
import Image from "next/image";

const Header = ({ menuData }) => {
  //console.log(menuData);

  return (
    <header>
      <div className="header_wrap clearfix">
        <h1>
          <Link href="/">
            <a title="사이트 최상단으로 이동">
              <Image src="/images/logo.png" alt="일룸" width="85" height="23" />
            </a>
          </Link>
        </h1>
        <nav className="gnb">
          <ul className="depth_1">
            {menuData &&
              menuData.menus[0].items.map((menu) => {
                if (menu.target === "_self") {
                  return (
                    <li key={menu.id}>
                      <Link href={menu.url}>
                        <a title="해당 페이지로 이동">{menu.title}</a>
                      </Link>
                    </li>
                  );
                }
                if (menu.target === "_blank") {
                  return (
                    <li key={menu.id}>
                      <Link href={menu.url}>
                        <a title="해당 페이지 새창으로 열기" target="_blank">
                          {menu.title}
                        </a>
                      </Link>
                    </li>
                  );
                }
              })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
