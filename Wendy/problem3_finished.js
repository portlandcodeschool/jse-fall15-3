
var animals= {type: 'horse', food: 'grass', home: 'barn'}
var animals3={type: 'snowman', food: 'candy', home: 'barn'}

 
 function copy(obj) {
	var newObj = {};
	for (key in obj) {
		newObj[key] = obj[key];
	}
	return newObj;
}


function equal(objA, objB) {  //I know this doesn't work but 'I'm stumped.
	
	for (var i in objA) {
		var namesA = (objA.hasOwnProperty(i)) {
		if (!(namesA===(objB.hasOwnProperty(i));
			return false;
		} else {
		return true;
		}
	}	
 }


function similar(objA, objB) {
	for (key in objA) {
		if (!(key in objB)){
			return false;
		}
		else {
			return true;
		}
	}
}




}
 
function union(objA, objB) {
	var newObj = {};
	for (key in objA) {
		newObj[key] = objA[key];
	}
	for(key in objB){
		newObj[key]= objA[key] || objB[key];
	}
  }

function intersect(objA, objB) {
	var newObj = {};
	for(var key in objA) {
		if (key in objB){
			newObj[key] = objA[key] && objB[key];
		}
	}
	return newObj;
}

function subract(objA, objB) {
	var newObj ={};
	for (var key in objB) {
		if (!(key in objA)) {
			newObj[key]=objA[key];
		}
	return newObj;
	}
	
	