var people = {};

people.index = {}; //each property here will be named after a person
//and hold a reference to an object representing that person.

people.index.molly = {
  name: 'molly',
  friends: {
    'wendy': 1,
    'ana': 1
  }
}
people.index.wendy = {
  name: 'molly',
  friends: {
    'molly': 1,
    'ana': 1
  }
}

people.meet = function(nameA, nameB) { // returns a number{

  if (!(nameA in people.index)) {
    people.index[nameA] = {
      name: nameA,
      friends: {}
    };
  }
  if (!(nameB in people.index)) {
    objectB = {
      name: nameB,
      friends: {}
    };
  }

  var objectA = people.index[nameA];
  var objectB = people.index[nameB];

  var meeting = objectA.friends[nameB];
  if (meeting === undefined) {
    meeting = 0;
  }
  meeting++;
  objectA.friends[nameB] = meeting;
  pbjectB.friends[nameA] = meeting;
  return meeting;
}

people.haveMet = function(nameA, nameB) {
  var meeting = people.index[nameA].friends[nameB];
  return meeting;
}

people.friendsOf = function(name) { //returns a string
    var friends = Object.keys(people.index[name].friends);
    friends = friends.sort().join(', ');
    return friends;
  }
  //console.log(people.friendsOf('wendy'));

// b_____________________________________________________________

people.friendsOfFriendsOf = function(name) {
  var friends1 = Object.keys(people.index[name].friends);
  var soFar = people.index[name].friends;
  for (var i = 0; i < friends1.length; i++) {
    //console.log(friends1[i]);
    var friends2 = people.index[friends1[i]].friends;
    soFar = union(soFar, friends2);
  }
  return Object.keys(soFar).sort().join(', ');
}

function union(objA, objB) {
  var newObj = {};
  for (key in objA) {
    newObj[key] = objA[key];
  }
  for (key in objB) {
    if (!(key in objA)) {
      newObj[key] = objA[key] || objB[key];
    }
  }
  return newObj;
}

people.meet('molly', 'ana');
people.meet('dan', 'ana');
people.meet('wendy', 'eliz');
people.meet('wendy', 'molly');

console.log(people.friendsOfFriendsOf('eliz'));