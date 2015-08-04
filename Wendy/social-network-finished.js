
a. 

var people = {};

people.index= {}; 	//each property here will be named after a person
					//and hold a reference to an object representing that person
people.meet = function(nameA,nameB) { // returns a number

	if(!(nameA in people.index)) {
		people.index[nameA]={name:nameA, friends:{}};
	}
	if(!(nameB in people.index)) {
		people.index[nameB]={name:nameB, friends:{}};
	}
	var objectA = people.index[nameA];
	var objectB = people.index[nameB];

	var meeting = objectA.friends[nameB];
	if (meeting === undefined) {
		meeting = 0;
	}
	meeting++;
	objectA.friends[nameB]=meeting;
	objectB.friends[nameA]=meeting;

	return meeting;
	} 


people.haveMet = function(nameA,nameB) { //returns a number or falsish
	var meeting = people.index[nameA].friends[nameB];
		return meeting;
}

people.friendsOf = function(name) { //returns a string
	var friends = Object.keys(people.index[name].friends);
	friends = friends.sort().join(", ");
	return friends;
}

b.   

people.friendsOfFriendsOf= function(name) {
	var friends1 = Object.keys(people.index[name].friends);
	var soFar = people.index[name].friends;
	for (var i = 0; i < friends1.length; i++) { //goes trhough the arrya
		//console.log(friends1[i]);
		var friends2 = friends1[i].friends;//assigns that
			soFar = union(soFar, friends2);
		}
		return Object.keys(soFar).sort().join(' , ');
	}
			


