import React from 'react';
import math from 'mathjs';
import './master.css';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Division from '../icons/division.svg';
import Multiplication from '../icons/multiplication.svg';
import Delete from '../icons/delete.svg';
import Plus from '../icons/plus.svg';
import Minus from '../icons/minus.svg';
import Equal from '../icons/equal.svg';

export default class Master extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      equation: '0'
    };
    this.answerFlag = false;
    this.validKeys = [
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '+',
      '-',
      '/',
      '*',
      '.'
    ];

    this.editEquation = this.editEquation.bind(this);
    this.parseEquation = this.parseEquation.bind(this);
    this.clearEquation = this.clearEquation.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', event => {
      if (this.validKeys.indexOf(event.key) > -1)
        this.editEquation(event.key.replace('/', '÷').replace('*', '×'));
      else if (event.key === 'Backspace') this.clearEquation('D');
      else if (event.key === '=' || event.key === 'Enter') this.parseEquation();
    });

    /*eslint no-extend-native: ["error", { "exceptions": ["String"] }]*/
    String.prototype.replaceAll = function(search, replacement) {
      var target = this;
      return target.replace(new RegExp(search, 'g'), replacement);
    };

    //just for development purpose right now, will remove it later.
    window.math = math;
  }

  editEquation(text) {
    const nextEquation =
      this.state.equation === '0' || this.answerFlag
        ? text
        : this.state.equation + text;
    this.setState({
      equation: nextEquation
    });
    this.answerFlag = false;
  }

  parseEquation() {
    this.answerFlag = true;
    let answer = 'Invalid';
    try {
      answer = String(
        math.eval(this.state.equation.replaceAll('÷', '/').replaceAll('×', '*'))
      );
    } catch (err) {}
    this.setState({
      equation: answer
    });
  }

  clearEquation(action) {
    if (action === 'C' || this.state.equation.length === 1 || this.answerFlag) {
      this.setState({
        equation: '0'
      });
    } else {
      this.setState({
        equation: this.state.equation.slice(0, -1)
      });
    }
  }

  render() {
    return (
      <div className="container calc-container">
        <Input text={this.state.equation} />
        <div className="calc-controls">
          <div className="calc-col col-md-3">
            <Button content="C" onClick={this.clearEquation} />
            <Button content="7" onClick={this.editEquation} />
            <Button content="4" onClick={this.editEquation} />
            <Button content="1" onClick={this.editEquation} />
            <div class="col-md-12 calc-brackets-div">
              <Button content="(" onClick={this.editEquation} />
              <Button content=")" onClick={this.editEquation} />
            </div>
          </div>
          <div className="calc-col col-md-3">
            <Button icon={Division} onClick={this.editEquation} content="÷" />
            <Button content="8" onClick={this.editEquation} />
            <Button content="5" onClick={this.editEquation} />
            <Button content="2" onClick={this.editEquation} />
            <Button content="0" onClick={this.editEquation} />
          </div>
          <div className="calc-col col-md-3">
            <Button
              icon={Multiplication}
              onClick={this.editEquation}
              content="×"
            />
            <Button content="9" onClick={this.editEquation} />
            <Button content="6" onClick={this.editEquation} />
            <Button content="3" onClick={this.editEquation} />
            <Button content="." onClick={this.editEquation} />
          </div>
          <div className="calc-col col-md-3">
            <Button icon={Delete} onClick={this.clearEquation} content="D" />
            <Button icon={Plus} onClick={this.editEquation} content="+" />
            <Button icon={Minus} onClick={this.editEquation} content="-" />
            <Button icon={Equal} onClick={this.parseEquation} content="=" />
          </div>
        </div>
      </div>
    );
  }
}
