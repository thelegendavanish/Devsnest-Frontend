const { fruit } = require('./secret')
/* use Function.prototype.bind() on the function `getFruitName` 
Such that it gives the function that returns fruitName of the provided fruit object 
Store the new function in the given variable `resultingFunction` */

function getFruitName() {
  return this.fruitName
}

// store the result in this variable
var resultingFunction

/* code from here */
resultingFunction = getFruitName.bind(fruit)
/* to here */
try { module.exports = { resultingFunction, getFruitName } } catch (e) { }
