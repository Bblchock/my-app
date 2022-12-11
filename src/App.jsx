import "./css/app.scss";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Aside from "./components/Aside";
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { setNav } from './redux/navigationSlice';
import { useDispatch } from 'react-redux';

const ChampFilter = lazy(() => import('./pages/ChampFilter'));

function App() {
  //Запомнить номер страницы
  const dispatch = useDispatch();
  const onChangeNav = (id) => {
    dispatch(setNav(id));
  };

  return (
    <div className='wrapper'>
      <Aside onChangeNav={(id) => onChangeNav(id)} />
      <Nav />
      <div className='main--wrapper'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/champions" element={
            <Suspense fallback={<div>Идёт загрузка...</div>}>
              <ChampFilter />
            </Suspense>
          } />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;