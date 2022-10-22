const { math } = require('./secret')

/* You are given an object math that contains num1 and num2
and an object operations that contains two functions sum and product
sum and product returns sum and product of this.num1 and this.num2.
but this.num1 and this.num2 is not defined for object operations.

inherit the math object in operations object such that, 
it can use num1 and num2 defined in math object */

const operations = {
	/* Code here */

 __proto__:math,
	sum() {
		return this.num1 + this.num2
	},
	product() {
		return this.num1 * this.num2
	}

}
operations.__proto__ = math;
try { module.exports = { operations } } catch(e) {}
