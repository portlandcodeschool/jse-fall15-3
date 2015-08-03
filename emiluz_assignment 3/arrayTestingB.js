var array = {
	length:0,  // element properties will be added as needed

	pop: function() { //changes array, returns ??
		//decrement length
		--this.length;

		this[this.length.toString()] = undefined;
		
	},

	push: function(value) { //changes array, returns a number
		//...

		this[this.length.toString()] = value;
		//this["propName"] = "propValue";

		//increment length
		++this.length;
		//this.length = this.length + 1;

		 
	},

	join: function(delim) { //returns a string
		//...

		var arr = []; //create an empty array
		for(var x = 0; x < this.length; ++x) //loop through this.length
		{
			arr[x] = this[x.toString()]; //populsting our real array 'arr' with the properties of the fake array 'this'
		}

		return arr.join(delim);


	} 

	//"0" : "Mango"
}

array.push("Apple");
array.push("Mango");
array.push("Kiwi");
array.pop();
console.log(array.join(" and "));