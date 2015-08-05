var fruits = ["Banana", "Orange", "Apple", "Mango"];

var testPush=function(array){
	console.log(array.length);//output using cosolelog array 
	array.push("kiwi");//push a new element into the array
	console.log(array.length);//output to prove that it works
	return array.length;//returns the array length
	

};

testPush(fruits);

var testPop= function(array){
//output the number of elements in the array
	console.log(array.length);
//call the Pop function
	array.pop();
//output the number of elements in the array
	console.log(array.length);
//return the last element of the array
	return array[array.length-1];
};
var x=testPop(fruits);
console.log(x);

var testJoin = function(array){
	
//call the join function with a delimiter
	return array.join(" and ");

};

var y = testJoin(fruits);
console.log(y);