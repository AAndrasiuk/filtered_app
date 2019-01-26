import React from 'react';
import './RangeList.css'
import Range from '../Range/Range'

export default function RangeList({settings, handlerChange, setDefault, filtersSettings}){
	const ranges = filtersSettings.map((setting, id) => 
		<Range 
			name={setting.title}
			min={setting.settings.min}
			max={setting.settings.max}
			step={setting.settings.step}
			handlerChange={handlerChange}
			value={settings[`${setting.title}`]}
			key={id}
		/>)
	return(
		<div className='rangeList'>
			<button 
				className='default'
				onClick={setDefault}
			>Use Default</button>
			{ranges}
	</div>	
	)
}