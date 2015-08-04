var cats = {
  simon: 'black',
  eliot: 'white',
  trixie: 'multi'
}


//-----------------------
function copy(obj){
  var newObj = {};
  for(var key in obj){
    newObj[key]=obj[key];
  }
  return newObj;
}

console.log(copy(cats));
//-------------------

var objA = {
    spoon:'spoon',
    fork:'fork',
    knife:'knife'
};

var objB = {
    spoon:'fork',
    fork:'fork',
    knife:'fork'
};
//----------------------
function equal(objA,objB){
  var key;
  if (key in objA[key] && objB[key]){
    return true;
  }
}

console.log(equal(objA,objB));
//---------------------
function similar(objA,objB){
    for (var key in objA){
        if (key in objB){
          return true;
        } else {
          return false;
        }
    }
}

console.log(equal(objA,objB));

//-----------------Section B

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

function intersect(objA, objB){
  var newObj = {};
  for (var key in objA){
    if (key in objB){
      newObj[key] = objA[key] && objB[key];
    }
  }
  return newObj;
}

function subtract(objA,objB){
  var newObj = {};
  for (var key in objA){
    if (!(key in objB)){
      newObj[key] = objA[key];
    }
  }
  return newObj;
}

