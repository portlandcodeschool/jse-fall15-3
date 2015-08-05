//Object Comparison [Moderate, 30%]

// a) Write a function copy(obj), which duplicates an object (not just copying a 
// reference to it). You only need a shallow copy, duplicating only the top level 
// of properties. That is, if obj contains another object inner, the duplicate may 
// share a reference to inner rather than copying all of inner too.

function copy(obj){
 var actualCopy = {};
 for(var key in obj){
 	actualCopy[key] = obj[key]
 }
 return actualCopy;
} 

// Write another function to compare two objects: equal(objA,objB) should return 
// true only when objA and objB have exactly the same properties with the same values. 
// You only need shallow equality: if objA and objB each have a property inner 
// referring to an object, check only that both inner objects are identical 
// (references to the same object); don't try to compare their properties. Note 
// that two empty objects should be considered equal (by this function, not by 
// the == operator).

function equal(objA,objB){
  var key;
    if (key in objA[key] && objB[key]){
     return true;
  }
}



// Write a third function: similar(objA,objB) should return true only when objA and 
// objB have exactly the same properties, regardless of their values.


function similar(objA,objB){
   var key;
    for (key in objA) {
        if (!(key in objB))
            return false;}
    for (key in objB) {
        if (!(key in objA))
            return false;}
    return true;
}


// b) We can interpret objects as sets of properties, and merge those sets in various 
// ways. Let's define three such merges:

// Union: The union of objects A,B is a new object which contains all the properties found in 
// either A or B. If a property is found in both, the merged property gets the shared key and 
// the value (A[key] || B[key]). For example: the union of {a:1,b:0} and {a:0,c:0} is {a:1,b:0,c:0}.

// Intersection: The intersection of objects A,B is a new object which contains only those 
// properties found in BOTH A and B. The value of each intersecting property is (A[key] && B[key]). 
// For example, the intersection of {a:1,b:0} and {a:0,c:0} is {a:0}.

// Subtraction: The subtraction of B from A, aka "A minus B", is an object which contains all the 
// properties of A which are NOT in B. Note that this merge is usually not symmetric: A minus B 
// doesn't equal B minus A (except in one case, which you should identify!) For example, {a:1,b:0} 
// minus {a:0,c:0} is {b:0}, and the reverse subtraction is {c:0}.

// Using those definitions, implement a function for each:

function union(objA,objB){
  var newObj = {};
  for (key in objA){
    newObj[key] = objA[key];
  }
  for (key in objB){
    if (!(key in objA)){
      newObj[key]= objA[key] || objB[key];
    }
  }
  return newObj;
}

///////////////////////////////////////

function intersect(objA, objB){
  var newObj = {};
  for (var key in objA){
    if (key in objB){
      newObj[key] = objA[key] && objB[key];
    }
  }
  return newObj;
}

//////////////////////////////////////

function subtract(objA,objB){
  var newObj = {};
  for (var key in objA){
    if (!(key in objB)){
      newObj[key] = objA[key];
    }
  }
  return newObj;
}



// Each function should return a new object, or undefined if either of their arguments is not an object.