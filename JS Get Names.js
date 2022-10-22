// `persons` is an array of object `person` 
// (definition of `person` given in instructions)
// you have to return an array containing names of 
// persons with salary less than 30000
// use Array.map() and Array.filter() for this task


function getNames(persons) {
	// code here
	  let ans = persons.filter(person => person.salary<30000);
  return ans.map(x=> x.name);
}

try { module.exports = { getNames } } catch(e) {}
