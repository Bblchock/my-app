import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentChampions, setClassButton } from '../redux/championsSlice';

const Filter = () => {
	const dispatch = useDispatch();
	const { items, currentFilterButton, currentChampions } = useSelector((state) => state.champions);

	//Определить чемпионов, подходящих под роль/позицию/ранг
	const findChampions = (id, obj) => {
		let champions;
		let highlight = true;
		switch (id) {
			case 0:
				champions = items.slice();
				highlight = false;
				break;
			case 1:
				champions = currentChampions.filter((arr) => (
					arr.rung === "7"
				));
				break;
			case 2:
				champions = currentChampions.filter((arr) => (
					arr.rung === "5" || arr.rung === "6"
				));
				break;
			case 3:
				champions = currentChampions.filter((arr) => (
					arr.rung >= "1" && arr.rung < "5"
				));
				break;
			default:
				champions = currentChampions.filter((arr) => {
					return arr.position.includes(obj.key) || arr.role.includes(obj.key);
				});
				break;
		}
		dispatch(setCurrentChampions(champions));
		dispatch(setClassButton({ id, highlight, currentFilterButton }));
	};

	//Список блоков с кнопками
	const buttonList = [
		'__all',
		'__rung',
		'__position',
		'__role',
	]

	//Нарисовать кнопку в нужном блоке
	const renderButton = (classBlock) => {
		return currentFilterButton.map((obj, id) => (
			classBlock === obj.block &&
			<button key={obj.key} onClick={() => findChampions(id, obj)} className={'champions--wrapper__filter' + obj.class}> {obj.name}</button >
		))
	};

	return (
		<div className='champions--wrapper__filter'>
			{buttonList.map((str, id) => (
				<div className={'champions--wrapper__filter' + str} key={id}>
					{renderButton(str)}
				</div>
			))
			}
		</div >
	);
};

export default Filter;
