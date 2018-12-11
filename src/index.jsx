import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Card from './Card.jsx';

import Person from './Person.js';

import './index.scss';

const jack = new Person('jack', 12);

debugger;

const { dancing, ...rest } = { dancing: true, singing: true, swimming: false };

const [x, ...z] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(`array -> ${z}`);


class App extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="card">
				<div className="title" onClick={() => {
					alert(jack.say());
				}}>{jack.say()}</div>
				<div>
					<Card name="Ji" />
					<span className="skill">aha</span>
				</div>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
