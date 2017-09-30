import React from 'react';
import math from 'mathjs';
import Input from './Input';
import Button from './Button';

export default class MasterContainer extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			equation: "0"
		};
		this.answerFlag = false;

		this.editEquation = this.editEquation.bind(this);
		this.parseEquation = this.parseEquation.bind(this);
		this.clearEquation = this.clearEquation.bind(this);
	}

	componentDidMount() {
		document.addEventListener('keydown', (event) => {
			if(event.keyCode >= 48 && event.keyCode <= 57) {
				this.editEquation(event.key);
			}
		});
	}

	editEquation(text){
		const nextEquation = this.state.equation === '0' || this.answerFlag ? text : this.state.equation + text;
		this.setState({
			equation: nextEquation
		});
		this.answerFlag = false;
	}

	parseEquation(){
		this.answerFlag = true;
		let answer = 'Invalid';
		try{
			answer = math.eval(this.state.equation.replace('÷','/'));
		}catch(err){}
		this.setState({
			equation: answer
		});
	}

	clearEquation(){
		this.setState({
			equation: "0"
		});
	}

	render(){
		return (
			<div className="container">
				<Input text={this.state.equation}/>
				<div className="calc-row col-md-12">
					<Button content="7" onClick={this.editEquation}/>
					<Button content="8" onClick={this.editEquation}/>
					<Button content="9" onClick={this.editEquation}/>
					<Button content="÷" onClick={this.editEquation}/>
				</div>
				<div className="calc-row col-md-12">
					<Button content="4" onClick={this.editEquation}/>
					<Button content="5" onClick={this.editEquation}/>
					<Button content="6" onClick={this.editEquation}/>
					<Button content="-" onClick={this.editEquation}/>
				</div>
				<div className="calc-row col-md-12">
					<Button content="1" onClick={this.editEquation}/>
					<Button content="2" onClick={this.editEquation}/>
					<Button content="3" onClick={this.editEquation}/>
					<Button content="+" onClick={this.editEquation}/>
				</div>
				<div className="calc-row col-md-12">
					<Button content="AC" onClick={this.clearEquation}/>
					<Button content="0" onClick={this.editEquation}/>
					<Button content="." onClick={this.editEquation}/>
					<Button content="=" onClick={this.parseEquation}/>
				</div>
			</div>
		);
	}

}