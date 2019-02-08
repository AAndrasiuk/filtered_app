import React from 'react';
import './InputWrapper.css';

export default class InputWrapper extends React.Component{
	state = {
		url: ''
	}

	urlHandler = event => {
		const {name, value} = event.target
		this.setState({ [name] : value })
	}

	render(){
		return(
			<div className="InputWrapper">
				<input 
					type="text" 
					className='Input' 
					placeholder="Enter URL"
					value={this.state.url}
					onChange={this.urlHandler}
					name="url"
					/>
				<button 
					className='Button' 
					alt="Use URL pic"
					onClick={() => this.props.setUrlPic(this.state.url)}
				>
				</button>
			</div>
		)
	}
}