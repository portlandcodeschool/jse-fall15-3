
**3)  Object Comparison** _[Moderate, 30%]_

**a)**
[]Write a function `copy(obj)`, which duplicates an object (not just copying a reference to it).  
[]You only need a _shallow_ copy, duplicating only the top level of properties.  
[]That is, if `obj` contains another object _inner_, the duplicate may share a reference to _inner_ rather than copying all of _inner_ too.

var objA
var objB

function copy(obj) {
	var objA = obj,
	var objB = obj,
}


Write another function to compare two objects:
`equal(objA,objB)` should return true only when `objA` and `objB` have exactly the same properties with the same values.  You only need _shallow_ equality: if `objA` and `objB` each have a property _inner_ referring to an object, check only that both _inner_ objects are identical (references to the same object); don't try to compare their properties.
Note that two empty objects should be considered equal (by this function, not by the `==` operator).

for (keyInObj) {
	//if keyInObj1 matches keyInObj2 then start loop over
}


Write a third function:
`similar(objA,objB)` should return true only when `objA` and `objB` have exactly the same properties, regardless of their values.




**b)**
We can interpret objects as _sets_ of properties, and merge those sets in various ways.  Let's define three such merges:

*Union*: The union of objects A,B is a new object which contains all the properties found in either A or B.  If a property is found in both, the merged property gets the shared key and the value `(A[key] || B[key])`.
For example: the union of `{a:1,b:0}` and `{a:0,c:0}` is `{a:1,b:0,c:0}`.

*Intersection*: The intersection of objects A,B is a new object which contains only those properties found in BOTH A and B.  The value of each intersecting property is `(A[key] && B[key])`.
For example, the intersection of `{a:1,b:0}` and `{a:0,c:0}` is `{a:0}`.

*Subtraction*: The subtraction of B from A, aka "A minus B", is an object which contains all the properties of A which are NOT in B.  Note that this merge is usually not symmetric: _A minus B_ doesn't equal _B minus A_ (except in one case, which you should identify!)
For example, `{a:1,b:0}` minus `{a:0,c:0}` is `{b:0}`, and the reverse subtraction is `{c:0}`.

Using those definitions, implement a function for each:

* `union(objA,objB)`

* `intersect(objA,objB)`

* `subtract(objA,objB)`

Each function should return a new object, or _undefined_ if either of their arguments is not an object.
