import React from 'react';
import './Image.css'

export default function Image(props){
	const { blur, saturation, brightness, contrast, invert, grayscale, sepia, hueRotate} = props.settings
	const filters = `blur(${blur}px) saturate(${saturation}%) brightness(${brightness}) contrast(${contrast}) invert(${invert}) grayscale(${grayscale}) sepia(${sepia}) hue-rotate(${hueRotate}deg)`
	
	const styles = {
		filter: filters
	}
	

	return(
		<div className="Img">
			<img
				src={props.src}
				alt=''
				style={styles}
				className='imgMain'
				/>
		</div>
	)
}