// you're given two arrays arr1 and arr2 in the parameters
// of the function combine.
// from the function combine return new array that is
// combination of these two arrays
// All elements of arr1 should come before arr2's elements
// Suggestion: use Spread Syntax

function combine(arr1, arr2) {
	// code here	
	return [...arr1, ...arr2];
}


try { module.exports = { combine } } catch(e) {}
