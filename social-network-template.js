var people = {};

people.index = {}; 	//each property here will be named after a person
					//and hold a reference to an object representing that person.
people.index.molly = {name:'molly', friends: {'wendy':1, 'ana':1}};
people.index.molly = {name:'wendy', friends: {'molly':1, 'ana':1}};


people.meet = function(nameA,nameB) { // returns a number
	//...
	if (!(nameA in people.index)){
		people.index[nameA]={name:nameA, fridns:{}};
	}
	if (!(nameB in people.index)) {
		people.index[nameB]={name:nameB, friends:{}};
	}
	var objectA= people.index[nameA];
	var objectB= people.index[nameB];

	var meeting=objectA.friends[nameB]
	if (meeting === undefined) {
		meeting = 0;
	}
	meeting ++;
	objectA.friends[nameB]=meeting;
	objectB.friends[nameA]=meeting;

	return meeting;
}

people.haveMet = function(nameA,nameB) { //returns a number or falsish
	//...
	var meeting = people.index[nameA].friends[nameB];
	return meeting;
}

people.friendsOf = function(name) { //returns a string
	//...
	var friends = Object.keys(people.index[name].friends);
	friends = friends.sort().join(', ');
	return friends;
}

console.log(people.friendsOf('molly'))