const { hof } = require('./secret')
/*
Anonymous functions are used a lot as callback functions.
Below you are given a higher order function named 'hof'.

That take two arguments:
Its first parameter is a string and second parameter is a callback function.

pass a string named devsnest as first arguement
and an anonymous callback function that returns a string as second arguement.
*/

// pass arguments in this function hof

let res = hof("devsnest", function(){
  return "devsnest"
})
try { module.exports = { res } } catch (e) {}
