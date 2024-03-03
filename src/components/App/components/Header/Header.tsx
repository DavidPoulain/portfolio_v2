import { FunctionComponent, useEffect, useState } from "react";

import logoBlack from "@images/LogoV3_Black.png";
import logoWhite from "@images/LogoV3_White.png";
import cx from "classnames";

import Styles from "./Header.module.css";

export const Header: FunctionComponent = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [hasHeaderBackground, sethasHeaderBackground] =
    useState<boolean>(false);
  const [visibleMenu, setVisibleMenu] = useState<boolean>(false);

  console.log(hasHeaderBackground, visibleMenu);

  console.log(hasHeaderBackground);

  const toggleMenu = () => {
    setVisibleMenu(!visibleMenu);
  };

  const handleHeaderBackground = () => {
    if (window.scrollY >= 50) {
      sethasHeaderBackground(true);
    } else {
      sethasHeaderBackground(false);
    }
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

  window.addEventListener("scroll", handleHeaderBackground);
  window.addEventListener("touchmove", handleHeaderBackground);

  return (
    // <header className={hasHeaderBackground ? "header header_black" : Styles.Header}>
    <>
      <div
        className={
          hasHeaderBackground
            ? cx(
                Styles.header_background,
                Styles["header_background_on"],
                Styles["blackCursor"]
              )
            : Styles.header_background
        }
      />
      <header
        className={
          hasHeaderBackground
            ? cx(Styles.header, Styles["header_black"])
            : Styles.header
        }
      >
        <div className="header_container">
          <a href="https://davidpoulain.com/">
            <img
              className={Styles.logo}
              src={hasHeaderBackground || visibleMenu ? logoBlack : logoWhite}
              alt="logo"
            />
          </a>
        </div>
        {width > 840 ? (
          <nav
            className={
              visibleMenu
                ? cx(
                    Styles.header_container,
                    Styles["header_container--nav"],
                    Styles["header_container--nav--display"]
                  )
                : cx(Styles.header_container, Styles["header_container--nav"])
            }
          >
            <ul className={Styles.navList}>
              <li className={Styles.navList__item}>
                <a href="/#portfolio">&#91; Portfolio &#93;</a>
              </li>
              <li className={Styles.navList__item}>
                <a href="/#services">&#91; Services &amp; Skill &#93;</a>
              </li>
              <li className={Styles.navList__item}>
                <a href="/#about">&#91; A propos &#93;</a>
              </li>
              <li className={Styles.navList__item}>
                <a href="/#contact">&#91; Contact &#93;</a>
              </li>
            </ul>
          </nav>
        ) : null}
        {width < 840 ? (
          <button
            aria-label="Ouvrir le menu"
            type="button"
            className={Styles.button}
            onClick={() => {
              toggleMenu();
            }}
          >
            <span
              className={cx(
                Styles.burger,
                hasHeaderBackground || visibleMenu
                  ? Styles["burger_black"]
                  : "",
                Styles["burger_top"],
                visibleMenu ? Styles["burger_top--open"] : ""
              )}
            />
            <span
              className={cx(
                Styles.burger,
                hasHeaderBackground || visibleMenu
                  ? Styles["burger_black"]
                  : "",
                Styles["burger_middle"],
                visibleMenu ? Styles["burger_middle--open"] : ""
              )}
            />
            <span
              className={cx(
                Styles.burger,
                hasHeaderBackground || visibleMenu
                  ? Styles["burger_black"]
                  : "",
                Styles["burger_bottom"],
                visibleMenu ? Styles["burger_bottom--open"] : ""
              )}
            />
          </button>
        ) : null}
      </header>
      {width < 840 ? (
        <div
          className={
            visibleMenu
              ? cx(
                  Styles.header_container,
                  Styles["header_container--nav"],
                  Styles["header_container--nav--display"]
                )
              : cx(Styles.header_container, Styles["header_container--nav"])
          }
        >
          <nav>
            <ul className={Styles.mobileNav}>
              <li>
                <a
                  href="/#portfolio"
                  onClick={() => {
                    toggleMenu();
                  }}
                  className={Styles.mobileNav__item}
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
                  className={cx(
                    Styles.mobileNav__item,
                    Styles["mobileNav__item--first"]
                  )}
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
                  className={Styles.mobileNav__item}
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
                  className={Styles.mobileNav__item}
                >
                  &#91; Contact &#93;
                </a>
              </li>
            </ul>
          </nav>
        </div>
      ) : null}
    </>
  );
};
