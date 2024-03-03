import React from "react";

import Styles from './CustomCursor.module.css';

import cx from 'classnames';

type Props = {
  backdrop: boolean;
  customCursorSecondColor: boolean;
};

const CustomCursor = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { backdrop, customCursorSecondColor } = props;

  return (
    <div
      ref={ref}
      className={cx(
        Styles.cursor,
        { [Styles.cursorBackdrop]: backdrop },
        { [Styles.cursorHoverWhiteBackground]: customCursorSecondColor }
      )}
    />
  );
});

export default CustomCursor;
