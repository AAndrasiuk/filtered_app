import React from 'react';
import './ImageContainer.css'

export default function ImageContainer(props){
	return(
		<section className='imageContainer'>
			{props.children}
		</section>
	)
}