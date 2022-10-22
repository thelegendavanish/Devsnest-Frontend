/* Create a function named 'hello', 
Create a function inside it named 'world' that reutrns string 'Hello World!'  
and return function world from function hello */

/* Code from here */

function hello(){
  function world(){
    return "Hello World!";
  }
  return world;
}
/* to here */

try { module.exports = { hello } } catch (e) { }
