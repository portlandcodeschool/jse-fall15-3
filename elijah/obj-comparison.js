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
        for (var prop in objA) {
            newObj[prop] = objA[prop];
        }
        for (var prop in objB) {
            if (!(prop in objA)) {
                newObj[prop] = objA[prop] || objB[prop];
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
