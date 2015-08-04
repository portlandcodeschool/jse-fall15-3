// Part a)
function copy(obj) {
    var clone = {};
    for (var key in obj) {
        //copy each property of obj into clone
        clone[key]=obj[key];
    }
    return clone;
}

function equal(objA,objB) {
    var key; // will be set to each prop name of each object
    var match; // will be true or false for each prop comparison

    // check that B has everything A does:
    for (key in objA) {
        match = ((key in objB) &&
                 (objA[key] === objB[key])); //Note: NaN will never match!
        if (!match)
            return false;
    }
    // check that A has everything B does:
    for (key in objB) {
        match = ((key in objA) &&
                 (objA[key] === objB[key]));
        if (!match)
            return false;
    }
    return true;
}

// Equivalent shorter version, using a nested function to avoid duplication:
function equal(objA,objB) {
    function isSubset(one,other) {
        var match;
        for (var key in one) {
            match = ((key in other) && (one[key] === other[key]));
            if (!match) return false;
        }
        return true;
    }
    return isSubset(objA,objB) && isSubset(objB,objA);
}

// Alternative: use length (# of properties) to reject unequally-sized objs,
// then check only one direction:
function equal(objA,objB) {
    var match,
        keysA = Object.keys(objA),
        keysB = Object.keys(objB);
    if (keysA.length !== keysB.length)
        return false;

    //else compare each property in one to the other:
    for (var key in objA) { //could also use for loop on keysA
        match = ((key in objB) && (objA[key] === objB[key]));
        if (!match)
            return false;
    }
    //else...
    return true;
}


function similar(objA,objB) {
    // just like equal() but with no checking of prop values
    var key;
    for (key in objA) {
        if (!(key in objB))
            return false;
    }
    for (key in objB) {
        if (!(key in objA))
            return false;
    }
    return true;
}
// similar could also be written like the other variants of equal()


// ===== Part b) =====
function union(objA,objB) {
    var union = copy(objA);  // include all of objA, merged with...
    for (var key in objB) {  // ...all of objB
        union[key] = (union[key] || objB[key]);
    }
    return union;
}

function intersection(objA,objB) {
    var isect = {};
    for (var key in objA) {
        if (key in objB)
            isect[key] = (objA[key] && objB[key]);
    }
    return isect;
}
// isect could be made a bit faster (though more complex) by
//  checking only the keys of the shorter object

function difference(objA,objB) {
    var diff = copy(objA);
    for (var key in objB) {
        delete diff[key];
    }
    return diff;
}


// Optional: make functions available as module
if (typeof module === 'object') {
    module.exports = {
        union:union,
        intersection:intersection,
        difference:difference,
        copy:copy,
        equal:equal,
        similar:similar
    }
}
