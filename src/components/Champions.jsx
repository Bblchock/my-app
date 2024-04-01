import React, { useState } from 'react';
import { useEffect } from 'react';
import { fetchChampions } from '../redux/championsSlice';
import { useSelector, useDispatch } from 'react-redux';

const Champions = () => {
	const dispatch = useDispatch();
	const [counter, setCounter] = useState(true);
	const { items, currentChampions } = useSelector((state) => state.champions);
	useEffect(() => {
		//Запросить список чемпионов, если его нет в LS
		if (counter && items == 0) {
			dispatch(fetchChampions());
			setCounter(false);
		};
	}, [dispatch]);

	const assignClass = (value) => {
		const sketch = 'champions--wrapper__main__champion';
		let rung;
		switch (value) {
			case '5':
				rung = '__rung-five';
				break;
			case '6':
				rung = '__rung-six';
				break;
			case '7':
				rung = '__rung-seven';
				break;

			default:
				rung = '';
				break;
		}
		return sketch + rung;
	}

	return (
		<main className='champions--wrapper__main'>
			{/* Отрисовать чемпионов */}
			{currentChampions.map((obj, id) => (
				<div key={id} className={assignClass(obj.rung)} style={{
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
