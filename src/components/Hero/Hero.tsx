import { FunctionComponent } from "react";

import cx from "classnames";

import Styles from './Hero.module.css';

export const Hero: FunctionComponent = () => {
  return (
    <section className={cx(Styles.section, Styles['section__hero'])}>
      <div className={Styles.hero__container}>
        <h1 className={cx(Styles.title, Styles['title__main'],  Styles['title__main--primary'])}>
          David Poulain /
        </h1>
        <h2 className={cx(Styles.title, Styles['title__main'],  Styles['title__main--secondary'])}>
          Développeur Web
        </h2>
        <p className={cx(Styles.title, Styles['title__main--subtitle'])}>Front-End / React.JS</p>
        <div className={Styles.scrollDowns}>
          <div className={Styles.mousey}>
            <div className={Styles.scroller} />
          </div>
        </div>
      </div>
    </section>
  );
};
