
var people = {};

people.index = {}; 	//each property here will be named after a person
					//and hold a reference to an object representing that person.

people.meet = function(nameA,nameB) { // returns a number
	if (nameA===nameB) return;
	if (!(nameA in people.index)) {
		people.index[nameA] = {name:nameA, friends: {}}
	}
	if (!(nameB in people.index)) {
		people.index[nameB] = {name:nameB, friends: {}}
	}
	var objectA= people.index[nameA];
	var objectB= people.index[nameB];

	var meeting=objectA.friends[nameB]
	if (meeting === undefined){
		meeting = 0;
	}
	meeting++;
	objectA.friends[nameB]=meeting;
	objectB.friends[nameA]=meeting;

	return meeting;
}

people.meet("harry","sally");
people.meet("sandra","adam");
people.meet("leroy","jessica");
people.meet("hannah","john");
people.meet("leroy","sam");

people.haveMet = function(nameA,nameB) { //returns a number or falsish
	var met = this.index[nameA].friends[nameB];
	return met;
}
// console.log(people.haveMet("harry","sally"));
// console.log(people.haveMet("harry","jessica"));

people.friendsOf = function(name) { //returns a string
	var friend = Object.keys(this.index[name].friends);
	friend = friend.sort().join(', ');
	return friend;
}

// console.log(people.friendsOf("jessica"));

people.friendsOfFriendsOf = function(name){
  var friends1 = Object.keys(people.index[name].friends);
  var soFar = people.index[name].friends;
  for (var i = 0; i<friends1.length; i++){
    var friends2 = people.index[friends1[i]].friends;
    soFar = union(soFar,friends2);
  }
  return Object.keys(soFar).sort().join(', ');
}

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

console.log(people.friendsOfFriendsOf("leroy"));
