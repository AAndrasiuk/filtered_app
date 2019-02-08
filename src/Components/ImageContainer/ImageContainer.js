import React, { useState } from 'react';
import './ImageContainer.css'
import InputWrapper from '../InputWrapper/InputWrapper'
import Image from '../Image/Image'
import Preloader from '../Preloader/Preloader'

export default function ImageContainer(props){

	const [isLoaded, setLoaded] = useState(true)

	const loadingHandler = isLoaded => {
		setLoaded( isLoaded )
	}

		const {setUrlPic, settings, imgUrl} = props
		return(
			<section className='imageContainer'>
				<InputWrapper
						setUrlPic={setUrlPic}
						isLoaded={isLoaded}
						loadingHandler={loadingHandler}
				/>
				{isLoaded 
				? 
					<Image 
						settings={settings}
						src={imgUrl}
					/>
				:
					<Preloader/>
				}
			</section>
	)
}
