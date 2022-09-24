const { customError }  = require('./custom-error')
/*
we have provided you a function called customError,
It is a function that will throw an error.
Catch it using try-catch block and store the error in the provided error variable
ie: `var error`
*/

// use this to catch it
var error 
/* code from here */
try{
  customError()
}catch(err){
  error = err
}
/* to here */
module.exports = { error }
