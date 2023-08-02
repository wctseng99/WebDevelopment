// var generateName = require('sillyname');

import generateName from "sillyName";
import superheroes from "superheroes";

var sillyName = generateName();
const name = superheroes.random();

console.log(`My name is ${sillyName}.`);

console.log(`I'm ${name}.`);