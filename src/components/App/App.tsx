import { Header } from "./components/Header/Header";
import TopButton from "./components/TopButton/TopButton";

import Styles from './App.module.css';
import { Hero } from "./components/Hero/Hero";
import { useEffect, useRef, useState } from "react";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import React from "react";

const App = () => { 
  const [customCursorVisible, setCustomCursorVisible] = useState<boolean>(false);
  const [isDeviceMobile, setIsDeviceMobile] = useState<boolean>(false);
  const [cursorBackdrop, setCursorBackdrop] = useState<boolean>(false);
  const [customCursorSecondColor, setCustomCursorSecondColor] = useState<boolean>(false);
  const [cursorOverLink, setCursorOverLink] = useState<boolean>(false);

  console.log({customCursorVisible}, {isDeviceMobile})

  const cursor = useRef<HTMLDivElement>(null);
  const mousePosition = (event: React.MouseEvent) => {
    if (cursor.current) {
      cursor.current.setAttribute('style', `top:${event.clientY}px; left:${event.clientX}px;`);
    }
  };

  useEffect(() => {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent)) {
      setIsDeviceMobile(true);
    }
  }, []);

  const handleMouseOver = (event: React.MouseEvent<HTMLElement>) => {
    console.log(event.currentTarget.className.includes);
    if (event.currentTarget.className.includes('photo')) {
      setCursorBackdrop(true);
    } 
    if (event.currentTarget.className.includes('blackCursor')) {
      console.log("coucou");
      setCustomCursorSecondColor(true);
    }
    if (event.currentTarget.className.includes('li')) {
      console.log("coucou");

      setCursorOverLink(false);
    }
  };
  
  const handleBackdropOff = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.currentTarget as HTMLElement;
    if (/(photo|li|section_about|header_background)/.test(target.className)) {
      setCursorBackdrop(false);
      setCustomCursorSecondColor(false);
      setCursorOverLink(false);
    }
  };

  const hideCursor = () => {
    setCustomCursorVisible(false);
  };

  const showCursor = () => {
    setCustomCursorVisible(true);
  };

  return (
  <div onMouseMove={mousePosition} onMouseLeave={hideCursor} onMouseOver={handleMouseOver} onMouseOut={handleBackdropOff} onMouseEnter={showCursor}>
    { (customCursorVisible && (isDeviceMobile === false)) && (<CustomCursor ref={cursor} backdrop={cursorBackdrop} customCursorSecondColor={customCursorSecondColor} />)}
    <Header />
    <TopButton />
    <Hero />
    <div className={Styles.toto}><p>toto</p></div>
  </div>
)};

export default App;
