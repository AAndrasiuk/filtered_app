import React from 'react';
import './Menu.css'
import {NavLink} from 'react-router-dom'

export default function Menu(){
	const baseUrl = process.env.PUBLIC_URL;
	return(
		<div>
			<nav className='menu'>
				<NavLink to={`/`} className="menu__link" activeClassName={'menu__link-active'} exact>Manual</NavLink>
				<NavLink to={`/filters`} className="menu__link" activeClassName={'menu__link-active'}>Filters</NavLink>
			</nav>
		</div>
	)
}