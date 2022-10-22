// you're given two javascript objects obj1 and obj2
// complete function combine such that it returns the 
// combination of two objects
// Note: 
// Order of key value pairs in objects should not be altered
// and key value pairs of obj1 should come before obj2's


function combine(obj1, obj2) {
	// code here
return {
    ...obj1,
    ...obj2
};
}

try { module.exports = { combine } } catch(e) {}
