
var people = {};

people.index = {}; 	//each property here will be named after a person
					//and hold a reference to an object representing that person.

people.meet = function(nameA,nameB) {
    // check if names are the same, if not, check the names
	if (nameA === nameB) return;
    for (var i = 0; i < arguments.length; i++) {
        peopleCheck(arguments[i]);
    }
    // ugh
    if (!(this.index[nameA].friends[nameB])) {
        this.index[nameA].friends[nameB] = 0;
        this.index[nameB].friends[nameA] = 0;
    }
    this.index[nameA].friends[nameB] += 1;
    return this.index[nameB].friends[nameA] += 1;
}

people.haveMet = function(nameA,nameB) {
    // return number of times args have met
	if (nameB in this.index[nameA].friends) {
        return this.index[nameA].friends[nameB];
    } else {
        return false;
    }
}

people.friendsOf = function(name) {
	// return a string of names `name` has met
    if (name in this.index) {
        var list = Object.keys(this.index[name].friends).sort();
        return list.join();
    } else {
        return undefined;
    }
}

// 4d
people.friendsOfFriendsOf = function(name) {
    // return string containing all friends within two degrees of seperation
    var friends = [];
    for (var n in this.index[name].friends) {
        if (friends.indexOf(n) === -1) friends.push(n);
        for (var p in people.index) {
            if (n in people.index[p].friends && p !== name && friends.indexOf(p) === -1) {
                friends.push(p);
            }
        }
    }
    return friends.sort().join(' ');
}

// callback
var peopleCheck = function(name) {
    // if name isnt in the index, add it
    if (!(name in people.index)) {
        people.index[name] = {name: name, friends: {}};
    }
}
