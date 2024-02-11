import { useState } from "react";

import cx from "classnames";

import Styles from './styles.module.scss';

const TopButton = () => {
  const [displayTopButton, setDisplayTopButton] = useState<boolean>(false);

  const handleHeaderBackground = () => {
    if (window.scrollY >= 50) {
      setDisplayTopButton(true);
    } else {
      setDisplayTopButton(false);
    }
  };

  window.addEventListener("scroll", handleHeaderBackground);
  window.addEventListener("touchmove", handleHeaderBackground);

  return (
    <button
      aria-label="Retourner en haut de la page"
      onClick={() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }}
      type="button"
      className={displayTopButton ? Styles.topButton : cx(Styles.topButton, Styles['topButton-hidden'])}
    />
  );
};

export default TopButton;
