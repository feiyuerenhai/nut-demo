function country(c) {
	return function(target, name, descriptor){
		target.country = c;
	}
}

const s1 = Symbol.for('name');
const s2 = Symbol.for('name');

const o = {
	[s1]: 'hello',
};

debugger;

console.log( s1 == s2, o[s1] == o[s2] );

const m = new Map();

@country('U.S.')
export default class Person{
	constructor(name, age){
		this.name = name;
		this.age = age;
	}
	say(){
		return `hello every one, my name is ${this.name}, and I'm ${this.age} years old. Oh, I am from ${Person.country}`;
	}
}
