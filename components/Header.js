import Link from "next/link";
import Image from "next/image";

const Header = ({ menuData }) => {
  console.log(menuData);
  //console.log(menuData.filter((menu) => menu.parent !== null));

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
              menuData
                .filter((menu) => menu.menuAttached === true) //메뉴숨김여부
                .filter((menu) => menu.parent === null) //1차메뉴일때
                .sort((a, b) => {
                  //메뉴 순서 정렬
                  return a.order - b.order;
                })
                .map((menu) => {
                  if (menu.type === "INTERNAL") {
                    return (
                      <li key={menu.id}>
                        <Link href={`/${menu.path}`}>
                          <a title="해당 페이지로 이동">{menu.title}</a>
                        </Link>
                      </li>
                    );
                  } else if (menu.type === "EXTERNAL") {
                    return (
                      <li key={menu.id}>
                        <Link href={`${menu.externalPath}`}>
                          <a title="해당 사이트로 이동" target="_blank">
                            {menu.title}
                          </a>
                        </Link>
                      </li>
                    );
                  }
                })}

            {menuData &&
              menuData
                .filter((menu) => menu.menuAttached === true)
                .filter((menu) => menu.parent !== null)
                .map((menu) => <div key={menu.id}>{menu.title}</div>)}

            {/* <li>
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
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
