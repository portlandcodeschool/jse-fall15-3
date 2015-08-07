function expectValue(result, expected, attemptStr) {
	if (result !== expected) {
		console.log(attemptStr+" expected result "+expected+", got "+result);
	}
}

var array = {
	length:0,  // element properties will be added as needed

  pop: function() {
   var lastKey = this[this.length-1];
   delete this[this.length-1];
   this.length -= 1;
   return lastKey;
  },

  push: function(value) { //changes array, returns a number
    this[this.length] = value;
    this.length += 1;
    return this.length;
  },

  join: function(delimiter) { //returns a string
    var str = '';
		if (this.length > 0) {
			for (i=0; i < (this.length-1); i++) {
      	str += this[i] + delimiter;
    	}
    	str += this[this.length-1];
    	return str;
		} else {
			return str;
		}
  }
}

function testPush(array) { // accept an array to test, if provided
	// otherwise make a new one:
  //clear the array to be empty initially

	for (i=0; i < array.length; i++) {
		delete array[i];
	}
	array.length = 0;

	// Try several pushes, and for each try, check the status of
	//  the resulting array and the return value:
	expectValue(array.push('a'), 1, "array.push('a')"); //check return value
	expectValue(array[0], 'a', "array[0]"); // check array element
	expectValue(array.length, 1, "array.length");	// check array length

	expectValue(array.push('b'), 2, "array.push('b')");
	expectValue(array[0], 'a', "array[0]"); //should remain 'a'
	expectValue(array[1], 'b', "array[1]");
	expectValue(array.length, 2, "array.length");

	// That might be enough, but to be sure, push 'c' and test again here:
	//...
	expectValue(array.push('c'), 3, "array.push('c')");
	expectValue(array[0], 'a', "array[0]"); //should remain 'a'
	expectValue(array[1], 'b', "array[1]");
	expectValue(array[2], 'c', "array[2]");
	expectValue(array.length, 3, "array.length");
}


function testPop(array) {
	for (i=0; i < array.length; i++) {
		delete array[i];
	}
	array.length = 0; //clear array

	// 1) populate the array by pushing elements 'a' and 'b' onto it
	//...
	expectValue(array.push('a'), 1, "array.push('a')");
	expectValue(array.push('b'), 2, "array.push('b')"); //check return value

	// 2) pop once, then check the return value, array contents, and array length
	//...
	expectValue(array.pop(), "b", "array.pop()");
	expectValue(array[0], 'a', "array[0]");
	expectValue(array.length, 1, "array.length");

	// 3) pop again, then check as before
	//...
	expectValue(array.pop(), "a", "array.pop()");
	expectValue(array[0], undefined, "array[0]");
	expectValue(array.length, 0, "array.length");
	// 4) array should now be empty!  check an attempt to pop when empty
	//...
	expectValue(array.pop(), undefined, "array.pop()");
}

function testJoin(array) {
	for (i=0; i < array.length; i++) {
		delete array[i];
	}
	array.length = 0; //clear array

	// 1) try a join on the empty array,
	//  then check the return value and its status (which should be unchanged)
	//...
	expectValue(array.join(), '', "array.join()");

	// 2) push 'a', then join and check as before
	//...
  expectValue(array.push('a'), 1, "array.push('a')");
	expectValue(array.join(', '), "a", "array.join(', ')");

	// 3) push 'b', then join and check as before
	//...
	expectValue(array.push('b'), 2, "array.push('b')");
	expectValue(array.join(', '), "a, b", "array.join(', ')");

	// 4) push 'c', then join and check as before
	//...
	expectValue(array.push('c'), 3, "array.push('c')");
	expectValue(array.join(', '), "a, b, c", "array.join(', ')");

	// 5) leave array unchanged, but join it with a different delimiter and check outcome
	//...
  expectValue(array.join('|'), 'a|b|c', "array.join('|')");
	// 6) leave array unchanged, but join() it with no delimiter argument, and check that it
	//   uses the default delimiter ',' correctly
}

console.log(testPop(array));
console.log(testPush(array));
console.log(testJoin(array));
