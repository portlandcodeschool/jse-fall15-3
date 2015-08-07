//part a

//copy function
objOriginal = { color: "red", size: "large", artist: "jim bob", price: "$42", quantity: 10}

function copy(obj) {
  var tempObj = {}
  for (var key in obj) {
    tempObj[key] = obj[key];
  }
  return tempObj;
}

var objNew = copy(objOriginal);
console.log(objNew);

//equal function
red= { color: "red", size: {kids: "large", adults: "small"}, artist: "jim bob", price: "$42", quantity: 10}
blue = { color: "red", size: "large", artist: "jim bob", price: "$42", quantity: 10}

function equal(objA, objB) {
  if (Object.keys(objA).length !== Object.keys(objB).length) {
    return false;
  }
  for (key in objA) {
    if(!(objA[key] === objB[key])){
      return false;
	  }
  }
  return true;
}

console.log(equal(red,blue));

//similar function

red= { color: "red", large: true, artist: "jim bob", price: "$42", quantity: 10}
blue = { color: "purple", size: "large", artist: "bob bob", price: "$42", quantity: 10}

function similar(objA, objB) {
  if (Object.keys(objA).length !== Object.keys(objB).length) {
    return false;
  }
  for (key in objA) {
    if(!(key in objB)){
      return false;
	  }
  }
  return true;
}

console.log(similar(red,blue))

//part b

//union function
red= { color: "red", size: "large", artist: "jim bob",  quantity: 10}
blue = { color: "purple", size: "large", price: "$42"}

function union(objA, objB) {
  var newObj = {};
  for (key in objA) {
    newObj[key] = objA[key];
  }
  for(key in objB){
    if (!(key in objA)) {
      newObj[key] = objA[key] || objB[key];
    }
	}
  return newObj;
}

console.log (union(red,blue));

//intersect function

red= { color: "red", size: "large", artist: "jim bob",  quantity: 10}
blue = { color: "purple", size: "large", price: "$42"}

function intersect(objA, objB) {
	var newObj = {};
	for(key in objA) {
	  if (key in objB) {
		  newObj[key] = objA[key] && objB[key];
    }
	}
  return newObj;
}

console.log(intersect(red,blue));

//subtract function


red= { color: "red", size: "large", artist: "jim bob",  quantity: 10}
blue = { color: "purple", size: "large", price: "$42"}

function subtract(objA, objB) {
	var newObj = {};
	for(var key in objA) {
	  if (!(key in objB)) {
		  newObj[key] = objA[key]
    }
	}
	return newObj;
}

console.log(subtract(red,blue))
