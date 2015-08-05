var copy = function(obj){
	//duplicate obj and return dup obj

	//create new empty object - this is what you will return
		var theCopy = new Object();

	//loop through each property of obj
	var y;
	for(y in obj){
		theCopy[y] = obj[y];
		//create new property for theCopy -- same name and value as the corresponding obj property
	}

	//return theCopy
	return theCopy;
};

var x = 1;
var y = x;

y = y + 1;
console.log(x);

var a = {prop: 'value'};
var b = copy(a);
b.prop = 'new value';
console.log(a.prop);