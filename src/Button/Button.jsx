import React from 'react';
import './button.css';

export default class Button extends React.Component {
  render() {
    let cssClass = 'calc-button ';
    if (this.props.content === '(' || this.props.content === ')')
      cssClass += 'calc-brackets';
    else cssClass += 'col-md-12';
    if (this.props.content === '=') cssClass += ' calc-equal';
    const icon = <img src={this.props.icon} alt={this.props.content} />;
    return (
      <button
        className={cssClass}
        onClick={() => this.props.onClick(this.props.content)}
      >
        {this.props.icon ? icon : this.props.content}
      </button>
    );
  }
}
