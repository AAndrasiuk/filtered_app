import React from 'react';
import './Aside.css'
import {Route} from 'react-router-dom'
import RangeList from '../RangeList/RangeList'
import FilterList from '../FilterList/FilterList'
import Menu from '../Menu/Menu'

export default function Aside(props){
	return(
		<aside>
			<Menu />
			<Route 
				exact 
				path='/' 
				render={() => 
					<RangeList 
						settings={props.settings}
						handlerChange={props.handlerChange}
						setDefault={props.setDefault}
						filtersSettings={props.filtersSettings}
					/>} 
			/>
			<Route 
				path='/filters' 
				render={() => 
					<FilterList 
						 filters={props.filters}
						 setFilter={props.setFilter}		
					/>} 
			/>
		</aside>
	)
}