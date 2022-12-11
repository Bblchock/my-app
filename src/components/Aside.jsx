import React from 'react';
import Header from './Header';
import HouseSVG from './HouseSVG';
import { useSelector, useDispatch } from 'react-redux';
import { setTheme } from '../redux/themeSlice';

const Aside = ({ onChangeNav }) => {
	const dispatch = useDispatch();
	const { theme, basicColor } = useSelector((state) => state.theme);

	//Изменить тему сайта и запомнить выбор
	const changeTheme = (key) => {
		document.body.setAttribute('fondata', key);
		dispatch(setTheme({ theme: 'fon', key }));
	};
	//Изменить основной цвет сайта и запомнить выбор
	const changeColor = (key) => {
		document.body.setAttribute('colordata', key);
		dispatch(setTheme({ theme: 'color', key }));
	};

	return (
		<div className='aside'>
			<Header onChangeNav={(id) => onChangeNav(id)} />
			<aside className='aside__switch'>
				{/* Доступные темы */}
				<div className="aside__switch__block">
					<h4 className='aside__switch__block__theme'>Тема</h4>
					{theme.map((obj) => (
						<button key={obj.fon} onClick={() => changeTheme(obj.fon)} className={'aside__switch__block__button__' + obj.fon}>
							<HouseSVG className={'aside__switch__block__button__icon'} color={obj.color} />
						</button>
					))}
				</div>
				{/* Доступные цвета */}
				<div className="aside__switch__block">
					<h4 className='aside__switch__block__color'>Цвет</h4>
					{basicColor.map((obj) => (
						<button key={obj.basic} onClick={() => changeColor(obj.basic)} className={'aside__switch__block__button'}>
							<HouseSVG className={'aside__switch__block__button__icon'} color={obj.color} />
						</button>
					))}
				</div>
			</aside>
		</div>
	);
};

export default Aside;