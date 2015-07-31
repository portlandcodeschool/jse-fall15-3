
// **2)  Testing and Simulating Arrays** _[Moderate, 20%]_

// **a)**
// Write some code to verify that Arrays behave as advertised.  Specifically, write three different functions, each testing one method of Arrays:

// [R]* `testPush(array)` should verify that `array.push(val)` adds _val_ to the end of _array_ and returns its new length;

// * `testPop(array)` should verify that `array.pop()` removes and returns the last element of _array_;

// * `testJoin(array)` should verify that `array.join(delim)` concatenates all elements of _array_ into a single string, with string _delim_ inserted between each element.


// Each function should do several tests:  adding, removing, or joining values under various conditions to ensure that _array_ produces the correct outcome.  Each outcome may require multiple assertions to verify.  For each function, make sure one test is for how an empty array behaves.
// Any assertion which fails should log a message to the console, but your test functions don't need return values.

// More detailed instructions are in the [template file](array-test-template.js).


fuction testPush (val) {
	if (!array) array = [];
	return array.push(val)
}

// fuction testPop () {
	
// }

// fuction testJoin (delim) {
	
// }




// **b)** Now that you have a testing suite, implement your own version of Arrays!

// Create a pseudo-array, an ordinary object which is not an actual Array but behaves
// (somewhat) like one.  You may use a global variable _array_ to store
// your pseudo-array.
// It will have a property _length_, which is initially zero but needs to be adjusted as elements are added or removed.
// The elements of _array_ will be stored as properties named by their index numbers.
// So for example, an _array_ representing `[5,9]` would have three properties named "length", "0", and "1" whose values are 2, 5, and 9.

// For this exercise, you don't need to delete any _array_ elements beyond its length if the length shrinks; just ignore them.  Setting _array.length_ to 0 is enough to reset it to "empty".

// In addition to property _length_ and the element properties, give _array_ three more properties _pop_, _push_, and
// _join_ which are functions (i.e. methods) behaving exactly like (and returning the same values as) the
// corresponding methods of real Arrays.  When your _pop_ and _push_ methods modify the array, _length_ should change accordingly.

// You may use the enclosed [template file](pseudo-array-template.js) to get started.

// _Hint:_ Within each method, use the keyword `this` to refer to your array object.












**c)**  Test your pseudo-array implementation using your tests from part **a)**.  Your pseudo-array should be able to pass the same tests of push, pop, and join as a real Array.
