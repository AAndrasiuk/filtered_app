import React from 'react';
import './Menu.css'
import {NavLink} from 'react-router-dom'

export default function Menu(){
	const baseUrl = process.env.PUBLIC_URL;
	return(
		<div>
			<nav className='menu'>
				<NavLink to={`${baseUrl}/`} className="menu__link" activeClassName={'menu__link-active'} exact>Manual</NavLink>
				<NavLink to={`${baseUrl}/filters`} className="menu__link" activeClassName={'menu__link-active'}>Filters</NavLink>
			</nav>
		</div>
	)
}