var array = {
	length:0,
	  // element properties will be added as needed

	pop: function() { //changes array, returns ??
		var i=(this.array.length -1);
		this.array.length = i;
		return this.array[i];
	},

	push: function(thingA) { //changes array, returns a number
		var i =(this.array.length);
		this.array.length++;
		this.array[i]=thingA;
		return this.array.length;
	},

	join: function(array) { //returns a string
		var newString = this.array.toString();
		return newString;
	}
}
