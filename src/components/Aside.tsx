import { useSelector, useDispatch } from 'react-redux';

import { setTheme } from '../redux/themeSlice';
import { RootState } from '../redux/store';
import { BasicColor, Theme } from '../redux/utils';

import { Header } from './Header';
import { HouseSVG } from './HouseSVG';

type Aside = {
  onChangeNav: (id: number) => void;
};

export const Aside = ({ onChangeNav }: Aside) => {
  const dispatch = useDispatch();
  const { theme, basicColor } = useSelector((state: RootState) => state.theme);

  //Изменить тему сайта и запомнить выбор
  const changeTheme = (key: string): void => {
    document.body.setAttribute('fondata', key);
    dispatch(setTheme({ theme: 'fon', key }));
  };
  //Изменить основной цвет сайта и запомнить выбор
  const changeColor = (key: string): void => {
    document.body.setAttribute('colordata', key);
    dispatch(setTheme({ theme: 'color', key }));
  };

  return (
    <div className="aside">
      <Header onChangeNav={(id: number) => onChangeNav(id)} />
      <aside className="aside__switch">
        {/* Доступные темы */}
        <div className="aside__switch__block">
          <h4 className="aside__switch__block__theme">Тема</h4>
          {theme.map((obj: Theme) => (
            <button
              key={obj.fon}
              onClick={() => changeTheme(obj.fon)}
              className={'aside__switch__block__button__' + obj.fon}
            >
              <HouseSVG
                className={'aside__switch__block__button__icon'}
                color={obj.color}
              />
            </button>
          ))}
        </div>
        {/* Доступные цвета */}
        <div className="aside__switch__block">
          <h4 className="aside__switch__block__color">Цвет</h4>
          {basicColor.map((obj: BasicColor) => (
            <button
              key={obj.basic}
              onClick={() => changeColor(obj.basic)}
              className={'aside__switch__block__button'}
            >
              <HouseSVG
                className={'aside__switch__block__button__icon'}
                color={obj.color}
              />
            </button>
          ))}
        </div>
      </aside>
    </div>
  );
};
