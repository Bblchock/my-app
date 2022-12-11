import React, { useState } from 'react';
import { useEffect } from 'react';
import { fetchChampions } from '../redux/championsSlice';
import { useSelector, useDispatch } from 'react-redux';

const Champions = () => {
	const dispatch = useDispatch();
	const [counter, setCounter] = useState(true);
	const { items, currentСhampions } = useSelector((state) => state.champions);
	useEffect(() => {
		//Если список чемпионов, если его нет в LS
		if (counter && items == 0) {
			dispatch(fetchChampions());
			setCounter(false);
		};
	}, [dispatch]);

	return (
		<main className='champions--wrapper__main'>
			{/* Отрисовать чемпионов */}
			{currentСhampions.map((obj, id) => (
				<div key={id} className='champions--wrapper__main__champion' style={{
					backgroundImage: `url(${obj.img})`
				}}>
					<p className='champions--wrapper__main__champion__name'>{obj.name}</p>
				</div>
			))
			}
		</main >
	);
};

export default Champions;