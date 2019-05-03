import React from 'react';
import './Range.css'

export default function Range(props){
	let {min, max, value, name, step} = props;

	return(
		<div className="rangeWrapper">
			<label>
				<h3>{name}</h3>
				<input
					type='text'
					className='filterValue'
					name={name}
					value={value}
					min={min}
					max={max}
					onChange={props.changeHandler}
				/>
			</label>
			<input
				name={name}
				type='range'
				min={min}
				max={max}
				step={step}
				value={value}
				onChange={props.changeHandler}
			/>			
	</div>
	)
}