// number 3a

var copy = function(obj) {
    // shallow copy of 'obj'
    var objCopy = {};
    for (var prop in obj) {
        objCopy[prop] = obj[prop];
    }
    return objCopy;
}

var equal = function(objA, objB) {
    // true if same props and values
    if ((Object.keys(objA).length) === (Object.keys(objB).length)) {
        for (var prop in objA) {
            if (objB[prop] !== objA[prop]) {
                return false;
            }
        }
    } else {
        return false;
    }
    return true;
}

var similer = function(objA, objB) {
    // true if same props
    // first make sure both have the same number of properties
    if ((Object.keys(objA).length) === (Object.keys(objB).length)) {
        for (var prop in objA) {
            if (!(prop in objB)) {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
}
// end 3a
// number 3b

var isObject = function(obj) {
    // check for valid input
    if (typeof obj === 'object') {
        return true;
    } else {
        return false;
    }
}

var union = function(objA, objB) {
    // return new obj with props found in either obj
    var newObj = {}
    if (isObject(objA) && isObject(objB)) {
        if ((Object.keys(objA).length > (Object.keys(objB)) {
            for (var prop in objA) {
                // XXX ugh, headache... come back to this
            }
        }
    } else {
        return undefined;
    }
    return newObj;
}

var intersect = function(objA, objB) {
    // return new obj with props found in both
    var newObj = {};
    if (isObject(objA) && isObject(objB)) {
        for (var prop in objA) {
            if (prop in objB) {
                newObj[prop] = (objA[prop] && objB[prop]);
            }
        }
    } else {
        return undefined;
    }
    return newObj;
}

var subtract = function(objA, objB) {
    // return obj containing all props in A not in B
    var newObj = {};
    if (isObject(objA) && isObject(objB)) {
        for (var prop in objA) {
           if (!(objB[prop])) {
               newObj[prop] = objA[prop];
            }
        }
    } else {
        return undefined;
    }
    return newObj;
}
// end 3b

// some objects for testing

var a = {
    a: 'a',
    b: 'b',
    c: 'c'
}

var b = {
    a: 1,
    b: 2,
    c: 3
}

var c = {
    a: 'a',
    b: 'b',
    c: 'c'
}

var d = {
    dog: true,
    cat: false,
    chicken: "evil",
    flounder: "flat"
}

var e = {
    a: a,
    b: b,
    c: c,
    d: d
}

var f = {
    a: 'a',
    b: 'b',
    c: 'c',
    d: 'd'
}

//3a test calls
//console.log(copy(a));
//// i think this is correct
//console.log(copy(e));
//console.log(e);
//console.log(copy(d));
//console.log(d);
//console.log(equal(a,f)); //false
//console.log(equal(a,c)); //true
//console.log(equal(a,b)); //false
//console.log(equal(c,d)); //false
//console.log(similer(a,b)); //true
//console.log(similer(a,d)); //false
//console.log(similer(a,c)); //true
//console.log(similer(a,e)); //false
//3b test calls
//console.log(isObject(a)); //true
//console.log(isObject(similer)); //false

//console.log(intersect(a,b)); // shares 3 keys
//console.log(intersect(a,e)); // shares 3 keys
//console.log(intersect(a,d)); //empty obj

//console.log(subtract(a,b)); //empty obj
//console.log(subtract(a,d)); // 3 prop obj
//console.log(subtract(d,a)); // 4 prop obj
//console.log(subtract(intersect,a)); // undefined
