import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { AiOutlineDownload } from "react-icons/ai";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const route = useRouter();
  const links = [
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "About Me", path: "/about" },
    { id: 3, title: "My Projects", path: "/projects" },
    { id: 4, title: "Contact", path: "/contact" },
  ];

  return (
    <header>
      <div className="menu__btn" onClick={() => setShowMenu(!showMenu)}>
        <span className={`menu__btn__burger ${showMenu ? "open" : ""}`}></span>
      </div>

      <nav className={`nav ${showMenu ? "open" : ""}`}>
        <ul
          className={`menu__nav ${showMenu ? "open" : ""}`}
          onClick={() => setShowMenu(!showMenu)}
        >
          {links.map(({ id, title, path }) => {
            return (
              <li
                key={id}
                className={`menu__nav__item ${showMenu && "open"}
                  ${route.pathname === path && "active"}            
                `}
              >
                <Link href={path}>
                  <a className="menu__nav__item__link">{title}</a>
                </Link>
              </li>
            );
          })}
          <li
            className={`menu__nav__item ${showMenu && "open"}
                `}
          >
            <a
              href="/AlisonTahiriCV.pdf"
              className="menu__nav__item__link"
              download
            >
              CV
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
