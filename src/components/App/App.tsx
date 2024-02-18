import { Header } from "../Header/Header";
import TopButton from "../TopButton/TopButton";

import Styles from './App.module.css';
import { Hero } from "../Hero/Hero";

const App = () => (
  <>
    <Header />
    <TopButton />
    <Hero />
    <div className={Styles.toto}><p>toto</p></div>
  </>
);

export default App;
