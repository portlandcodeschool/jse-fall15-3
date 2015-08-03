var myArray = {
	length:0,  // element properties will be added as needed

	pop: function(array) { //changes array, returns ??
		//...
		var output = array[array.length-1];
		delete array[array.length-1];
		return output;
	},

	push: function(array, newVal) { //changes array, returns a number
		//... 
		array[array.length] = newVal;
		return array.length;
	},

	join: function(array, separator) { //returns a string
		//...
		var string = '';
		for (i=0; i<array.length; i++) {
			string += array[i] + separator;
		}
		return string;
	}
};


var test = ['one','two','three','four','five'];
// myArray.pop(test);
// myArray.push(test, 'six');
// myArray.join(test, '***');

