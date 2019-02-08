import React from 'react';
import './FilterList.css'
import Filter from '../Filter/Filter'

export default function FilterList(props){
	const FILTERS = props.filters.map((filter, id) => 	
		<Filter 
			img={filter.src}
			title={filter.title}
			setFilter={() => props.setFilter(id)}
			key={id}
		/>
	)

	return(
		<div className='filterList'>
			<button 
				className='default'
				onClick={props.setDefault}
			>Use Default</button>
			{FILTERS}
		</div>
	)
}