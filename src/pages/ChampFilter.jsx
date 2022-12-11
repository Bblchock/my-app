import React from 'react';
import Champions from '../components/Champions';
import Filter from '../components/Filter';

const ChampFilter = () => {
	return (
		<div className='champions--wrapper'>
			<Filter />
			<Champions />
		</div>
	);
};

export default ChampFilter;