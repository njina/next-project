import Link from "next/link";
import Router from "next/router";
import Image from "next/image";

const Header = ({ menuData }) => {
  console.log(menuData);
  //console.log(menuData.menus[0].items[0]);

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
          {menuData &&
            menuData.menus[0].items.map((menu) => {
              return (
                <dl key={menu.id}>
                  <dt className="depth_1">
                    <Link href={menu.url}>
                      <a title="해당 페이지로 이동">{menu.title}</a>
                    </Link>
                  </dt>
                  <dd>
                    <ul className="depth_2">
                      <li>
                        {/* <Link href={menu.children[0].url}>
                          <a title="해당 페이지로 이동">메뉴</a>
                        </Link> */}
                        {/* <p>{menu.children[0].title}</p> */}
                      </li>
                    </ul>
                  </dd>
                </dl>
              );
            })}
          <p>
            {menuData.menus[0].items[0].children[0].title},{menuData.menus[0].items[0].children[0].url}
          </p>
          <p>{menuData.menus[0].items[0].children[1].title}</p>
        </nav>
      </div>
    </header>
  );
};

export default Header;
