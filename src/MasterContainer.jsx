import React from 'react';
import Input from './Input';
import Button from './Button';

export default class MasterContainer extends React.Component {

	render(){
		return (
			<div className="container">
				<Input />
				<div className="calc-row col-md-12">
					<Button content="7" />
					<Button content="8" />
					<Button content="9" />
					<Button content="&#x00F7;" />
				</div>
				<div className="calc-row col-md-12">
					<Button content="4" />
					<Button content="5" />
					<Button content="6" />
					<Button content="-" />
				</div>
				<div className="calc-row col-md-12">
					<Button content="1" />
					<Button content="2" />
					<Button content="3" />
					<Button content="+" />
				</div>
				<div className="calc-row col-md-12">
					<Button content="AC" />
					<Button content="0" />
					<Button content="." />
					<Button content="=" />
				</div>
			</div>
		);
	}

}