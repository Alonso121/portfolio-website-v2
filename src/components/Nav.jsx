import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { AiOutlineDownload } from "react-icons/ai";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const openClass = showMenu ? "open" : "";
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
        <span className={`menu__btn__burger ${openClass}`}></span>
      </div>

      <nav className={`nav ${openClass}`}>
        <ul
          className={`menu__nav ${openClass}`}
          onClick={() => setShowMenu(!showMenu)}
        >
          {links.map(({ id, title, path }) => {
            return (
              <li
                key={id}
                className={`menu__nav__item ${openClass}
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
            className={`menu__nav__item ${openClass}
                `}
          >
            <a
              href="/AlisonTahiriCV.pdf"
              className="menu__nav__item__link"
              target="_blank"
              rel="noopener"
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
