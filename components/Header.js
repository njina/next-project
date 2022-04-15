import Link from "next/link";
import Image from "next/image";

const Header = ({ menuData }) => {
  // console.log(menuData);
  console.log(menuData.menus[0].items[0].children);

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
          <dl>
            {menuData &&
              menuData.menus[0].items.map((menu) => {
                return (
                  <>
                    <dt key={menu.id} className="depth_1">
                      <Link href={menu.url}>
                        <a title="해당 페이지로 이동">{menu.title}</a>
                      </Link>
                    </dt>
                    {/* <dd>
                      <ul className="depth_2">
                        <li>
                          <Link href={menu.url}>
                            <a title="해당 페이지로 이동">메뉴</a>
                          </Link>
                        </li>
                      </ul>
                    </dd> */}
                  </>
                );
              })}
          </dl>
        </nav>
      </div>
    </header>
  );
};

export default Header;
