import React from 'react';
import './button.css';

export default class Button extends React.Component {
	render(){
		const isNumber = (this.props.content>=0 && this.props.content<=9) ||
			this.props.content==='AC' || this.props.content==='.';
		const cssClass = isNumber ?
			'calc-button col-md-3 calc-number' : 'calc-button col-md-3';
		return(
			<button className={cssClass}>{this.props.content}</button>
		);
	}
}