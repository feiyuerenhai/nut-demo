import React, {Component} from 'react';
import './Card.scss';

export default class Card extends Component{
	render(){
		return (
			<div>{this.props.name}</div>
		)
	}
}