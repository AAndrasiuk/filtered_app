import React from 'react';
import './Filter.css'

export default function Filter(props){
	return(
		<div 
			className='filter'
			onClick={props.setFilter}
		>
			<img src={props.img} alt="filter"/>
			<h4>{props.title}</h4>
		</div>
	)
}