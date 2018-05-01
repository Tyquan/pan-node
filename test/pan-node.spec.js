const assert = require("chai").assert;
const Pan = require('../index');

const pa = new Pan();

let arra = [1, 2, 3];
let arra2 = [4, 5, 6, 6, 7];
let popArray1 = [0,0,5,5];
let arra3 = [];

describe('Pan Module', () => {
	it('should be a Buildable Function', () => {
		assert.isFunction(Pan);
	});
});

describe('Pan Class', () => {
	it('should be an object', () => {
		assert.isObject(pa);
	});
	// find the average number in an array
	it('should run the Mean method succesfully', () => {
		assert.equal(pa.mean(arra), 2);
	});
	// find the middle number in an array
	it('should run the Median method succesfully', () => {
		assert.equal(pa.median(arra), 2);
	});
	// find the most listed element in an array
	it('should run the Mode method succesfully', () => {
		assert.equal(pa.mode(arra2), 6);
	});
	// find the most listed element in an array
	it('should run the Population Variance method succesfully', () => {
		assert.equal(pa.popVariance(popArray1), 6.25);
	});
});