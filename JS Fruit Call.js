const { fruitObject } = require('./secret')
/* use Function.prototype.call() on the function `getFruitName`
 such that it returns fruitName that is inside fruitObject  */

function getFruitName() {
  return this.fruitName
}

// store the result in this variable
var result
/* code from here */
result=getFruitName.call(fruitObject);
/* to here */
try { module.exports = { result } } catch (e) { }
