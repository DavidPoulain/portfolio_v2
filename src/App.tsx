import "./styles.module.scss";
import { Header } from "./components/Header/Header";
import TopButton from "./components/TopButton/TopButton";

import Styles from './styles.module.scss';

const App = () => (
  <>
    <Header />
    <TopButton />
    <div className={Styles.toto}><p>toto</p></div>
  </>
);

export default App;
