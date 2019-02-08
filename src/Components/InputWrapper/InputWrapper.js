import React,{ useState } from 'react';
import './InputWrapper.css';
import '../Preloader/Preloader'

export default function InputWrapper(props){

	const [url, setUrl] = useState('')

	const fetchUrl = () => {
		if (url !== '') {	
			props.loadingHandler(false)
			setTimeout(() => {
				fetch(url)
				.then(props.setUrlPic(url))
				.then(() => props.loadingHandler(true))
				.catch(err => console.log(err))
			}, 1000)
		}
	}

		return(
			<div className="InputWrapper">
				<input 
					type="text" 
					className='Input' 
					placeholder="Enter URL..."
					value={url}
					onChange={e => setUrl(e.target.value)}
					name="url"
					/>
				<button 
					className='Button' 
					alt="Use URL pic"
					onClick={fetchUrl}
				>
				</button>
			</div>
		)
}