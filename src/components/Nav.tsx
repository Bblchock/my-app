import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setNav } from '../redux/navigationSlice';
import { RootState } from '../redux/store';

import { LinkPage } from './LinkPage';

export const Nav = () => {
  const dispatch = useDispatch();
  const onChangeNav = (id: number): void => {
    //Запомнить номер страницы
    dispatch(setNav(id));
  };

  //Список страниц
  const pages = ['Главная', 'Чемпионы'];

  //Задать url
  const linkPage = (value: string): string => {
    const index = pages.indexOf(value);
    return `/${index === 0 ? 'home' : 'champions'}`;
  };

  //Задать класс
  const classPage = (value: number, id: number): string => {
    return value === id ? 'nav__list__active' : 'nav__list__passive';
  };

  // Запомнить страницу
  const navigate = useNavigate();
  const { currentNav } = useSelector((state: RootState) => state.navigator);

  useEffect(() => {
    if (Number(currentNav) === 0) {
      navigate('/');
    } else {
      navigate('/champions');
    }
  }, [currentNav]);

  return (
    <nav className="nav">
      <div className="nav__wrapper">
        <ul className="nav__list">
          {pages.map((page, id) => (
            //Кнопки навигации
            <LinkPage
              linkPage={linkPage(page)}
              key={id}
              className={classPage(currentNav, id)}
              onClick={(id: number) => onChangeNav(id)}
              page={page}
              id={id}
            />
          ))}
        </ul>
      </div>
    </nav>
  );
};
