import React from 'react';
import './Aside.css'
import {Route} from 'react-router-dom'
import RangeList from '../RangeList/RangeList'
import PresetsList from '../PresetsList/PresetsList'
import Menu from '../Menu/Menu'

export default function Aside(props){
	return(
		<aside className="aside">
			<Menu />
			<Route 
				exact 
				path='/'
				render={() => 
					<RangeList 
						settings={props.settings}
						changeHandler={props.changeHandler}
						setDefault={props.setDefault}
						filtersSettings={props.filtersSettings}
					/>} 
			/>
			<Route 
				path='/presets' 
				render={() => 
					<PresetsList 
						 presets={props.presets}
						 setPreset={props.setPreset}		
						 setDefault={props.setDefault}
					/>} 
			/>
		</aside>
	)
}