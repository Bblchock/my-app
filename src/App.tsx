import 'css/app.scss';
import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Aside, Nav, Footer } from 'components';

import { setNav } from 'redux';

import { Home } from 'pages';

const ChampFilter = lazy(() => import('./pages/ChampFilter'));

export const App = () => {
  //Запомнить номер страницы
  const dispatch = useDispatch();
  const onChangeNav = (id: number): void => {
    dispatch(setNav(id));
  };

  return (
    <div className="wrapper">
      <Aside onChangeNav={(id: number) => onChangeNav(id)} />
      <Nav />
      <div className="main--wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/champions"
            element={
              <Suspense fallback={<div>Идёт загрузка...</div>}>
                <ChampFilter />
              </Suspense>
            }
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};
