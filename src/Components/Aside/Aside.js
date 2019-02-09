import React from 'react';
import './Aside.css'
import {Route} from 'react-router-dom'
import RangeList from '../RangeList/RangeList'
import FilterList from '../FilterList/FilterList'
import Menu from '../Menu/Menu'

export default function Aside(props){
	const baseUrl = process.env.PUBLIC_URL;
	return(
		<aside>
			<Menu />
			<Route 
				exact 
				path={baseUrl + '/'} 
				// path='/'
				render={() => 
					<RangeList 
						settings={props.settings}
						handlerChange={props.handlerChange}
						setDefault={props.setDefault}
						filtersSettings={props.filtersSettings}
					/>} 
			/>
			<Route 
				path={baseUrl +'/filters'} 
				// path='/filters' 
				render={() => 
					<FilterList 
						 filters={props.filters}
						 setFilter={props.setFilter}		
						 setDefault={props.setDefault}
					/>} 
			/>
		</aside>
	)
}