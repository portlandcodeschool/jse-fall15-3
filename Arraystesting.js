// Here's the old, simple assertion:
function assert(claim, message) {
  if (!claim) console.error(message);
}

// Here's a fancy new assertion, with better failure reporting:
function expectValue(result, expected, attemptStr) {
    if (result !== expected) {
      console.log(attemptStr + " expected result " + expected + ", got " + result);
    } else {
      console.log('passed');
    }
  }
  // In your tests below, you may use either kind of assertion, or write your own!
var myArray = [];

function testPush(array) { // accept an array to test, if provided
  // otherwise make a new one:
  if (!array) array = [];

  array.length = 0; //clear the array to be empty initially

  // Try several pushes, and for each try, check the status of
  //  the resulting array and the return value:
  expectValue(array.push('a'), 1, "array.push('a')"); //check return value
  expectValue(array[0], 'a', "array[0]"); // check array element
  expectValue(array.length, 1, "array.length"); // check array length

  expectValue(array.push('b'), 2, "array.push('b')");
  expectValue(array[0], 'a', "array[0]"); //should remain 'a'
  expectValue(array[1], 'b', "array[1]");
  expectValue(array.length, 2, "array.length");

  // That might be enough, but to be sure, push 'c' and test again here:
  expectValue(array.push('c'), 3, "array.push('c')");
  expectValue(array[0], 'a', "array[0]");
  expectValue(array[1], 'b', "array[1]");
  expectValue(array.length, 3, "array.length");

}

function testPop(array) {
    if (!array) array = [];

    array.length = 0;

    // 1) populate the array by pushing elements 'a' and 'b' onto it

    array.push("a");
    array.push("b");

    // 2) pop once, then check the return value, array contents, and array length

    expectValue(array.pop(), "b", "array.pop()");
    expectValue(array[0], 'a', "array[0]");
    expectValue(array.length, 1, "array.length");

    // 3) pop again, then check as before
    expectValue(array.pop(), "a", "array.pop()");
    expectValue(array.length, 0, "array.length");
    expectValue(array[0], undefined, 'array[0]');

    // 4) array should now be empty!  check an attempt to pop when empty

    expectValue(array.pop(), undefined, "array.pop()");
    expectValue(array.length, 0, "array.length");

    function testJoin(array) {
      if (!array) array = [];

      array.length = 0;

      // 1) try a join on the empty array,
      //  then check the return value and its status (which should be unchanged)

      expectValue(array.join(' '), '', "array.join(' ')");
      expectValue(array.length, 0, "array.length");

      // 2) push 'a', then join and check as before
      array.push("a");

      expectValue(array.join(' '), 'a', "array.join(' ')");
      expectValue(array.length, 1, "array.length");

      // 3) push 'b', then join and check as before
      array.push("b");

      expectValue(array.join(' '), 'ab', "array.join(' ')");
      expectValue(array.length, 2, "array.length");

      // 4) push 'c', then join and check as before
      array.push("c");
      expectValue(array.join(' '), 'abc', "array.join(' ')");
      expectValue(array.length, 3, "array.length");

      // 5) leave array unchanged, but join it with a different delimiter and check outcome
      expectValue(array.join(' + '), 'a + b + c', 'array.join(' + ')');
      expectValue(array.length, 3, "array.length");

      // 6) leave array unchanged, but join() it with no delimiter argument, and check that it
      //   uses the default delimiter ',' correctly

      console.log(array);
    }

    // When those test functions are written, you can run them on built-in arrays
    //  by calling the test with no arguments:
    testPush();
    testPop();
    testJoin();

    // Create a pseudo-array, an ordinary object which is not an actual Array but 
    // behaves (somewhat) like one. You may use a global variable array to store 
    // your pseudo-array. It will have a property length, which is initially zero 
    // but needs to be adjusted as elements are added or removed. The elements of 
    // array will be stored as properties named by their index numbers. So for 
    // example, an array representing [5,9] would have three properties named 
    // "length", "0", and "1" whose values are 2, 5, and 9.

    // For this exercise, you don't need to delete any array elements beyond its 
    // length if the length shrinks; just ignore them. Setting array.length to 
    // 0 is enough to reset it to "empty".

    // In addition to property length and the element properties, give array 
    // three more properties pop, push, and join which are functions (i.e. 
    // methods) behaving exactly like (and returning the same values as) 
    // the corresponding methods of real Arrays. When your pop and push methods 
    // modify the array, length should change accordingly.

    //Hint: Within each method, use the keyword this to refer to your array object.

    var array = {
      length: 0,
      // element properties will be added as needed

      pop: function() { //changes array, returns ??
        var i = (this.array.length - 1);
        this.array.length = i;
        return this.array[i];
      },

      push: function(thingA) { //changes array, returns a number
        var i = (this.array.length);
        this.array.length++;
        this.array[i] = thingA;
        return this.array.length;
      },

      join: function(array) { //returns a string
        var newString = this.array.toString();
        return newString;
      }
    }

    //To test a custom array implementation (see problem 2), do this:
    var myArray = array; //special object with push,pop, and join methods
    testPush(myArray);
    testPop(myArray);
    testJoin(myArray);