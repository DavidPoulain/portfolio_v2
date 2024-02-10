import { FunctionComponent, useEffect, useState } from "react";

import logoBlack from "../../assets/LogoV3_Black.png";
import logoWhite from "../../assets/LogoV3_White.png";

export const Header: FunctionComponent = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [hasHeaderBackground, sethasHeaderBackground] =
    useState<boolean>(false);
  const [visibleMenu, setVisibleMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setVisibleMenu(!visibleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setWidth(window.innerWidth);

      if (window.innerWidth > 840) {
        setVisibleMenu(false);
      }
    };
    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, [window.innerWidth, setVisibleMenu]);

  return (
    <header className={hasHeaderBackground ? "header header_black" : "header"}>
      <div className="header_container">
        <a href="https://davidpoulain.com/">
          <img
            className={
              hasHeaderBackground || visibleMenu
                ? "logo"
                : "logo logo_notVisibile"
            }
            src={logoBlack}
            alt="logo"
          />
          <img
            className={
              hasHeaderBackground === false && visibleMenu === false
                ? "logo"
                : "logo logo_notVisibile"
            }
            src={logoWhite}
            alt="logo"
          />
        </a>
      </div>
      {width > 840 ? (
        <nav
          className={
            visibleMenu
              ? "header_container header_container--nav header_container--nav--display"
              : "header_container header_container--nav"
          }
        >
          <ul className="liste">
            <li>
              <a href="/#portfolio" className="li">
                &#91; Portfolio &#93;
              </a>
            </li>
            <li>
              <a href="/#services" className="li">
                &#91; Services &amp; Skill &#93;
              </a>
            </li>
            <li>
              <a href="/#about" className="li">
                &#91; A propos &#93;
              </a>
            </li>
            <li>
              <a href="/#contact" className="li">
                &#91; Contact &#93;
              </a>
            </li>
          </ul>
        </nav>
      ) : (
        <>
          <button
            aria-label="Ouvrir le menu"
            type="button"
            className="button"
            onClick={() => {
              toggleMenu();
            }}
          >
            <span
              className={`burger ${
                hasHeaderBackground || visibleMenu ? "burger_black" : ""
              } burger_top ${visibleMenu ? "burger_top--open" : ""}`}
            />
            <span
              className={`burger ${
                hasHeaderBackground || visibleMenu ? "burger_black" : ""
              } burger_middle ${visibleMenu ? "burger_middle--open" : ""}`}
            />
            <span
              className={`burger ${
                hasHeaderBackground || visibleMenu ? "burger_black" : ""
              } burger_bottom ${visibleMenu ? "burger_bottom--open" : ""}`}
            />
          </button>
          <div
            className={
              visibleMenu
                ? "header_container header_container--nav header_container--nav--display"
                : "header_container header_container--nav"
            }
          >
            <nav>
              <ul className="liste">
                <li>
                  <a
                    href="/#portfolio"
                    onClick={() => {
                      toggleMenu();
                    }}
                    className="li"
                  >
                    &#91; Portfolio &#93;
                  </a>
                </li>
                <li>
                  <a
                    href="/#services"
                    onClick={() => {
                      toggleMenu();
                    }}
                    className="li"
                  >
                    &#91; Services &amp; Skill &#93;
                  </a>
                </li>
                <li>
                  <a
                    href="/#about"
                    onClick={() => {
                      toggleMenu();
                    }}
                    className="li"
                  >
                    &#91; A propos &#93;
                  </a>
                </li>
                <li>
                  <a
                    href="/#contact"
                    onClick={() => {
                      toggleMenu();
                    }}
                    className="li"
                  >
                    &#91; Contact &#93;
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </>
      )}
    </header>
  );
};
