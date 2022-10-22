// you're given an arr as parameter to the function `includesEven`
// use Array.some() to check if there exists any even number in
// the array `arr`
// and return the result from the function `includesEven`


function includesEven(arr) {
	// code here
	let even = arr.some(e=> e%2 == 0);
  return even;
}


try { module.exports = { includesEven } } catch(e) {}
