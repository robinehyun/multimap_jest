const multiset = {};

function set(key, value) {
    // guard: dependency of function to run
    if ( typeof value != "number" || value === undefined) {
        return;
    }

    if ( typeof key != "string" ) {
        return;
    }

    // setter = getter of value;
    const values = multiset[key] || [];
    values.push(value);
    multiset[key] = values;

    // BRANCH COVERAGE: IF AND ELSE BLOCKS


    // console.log(`1 - ${values}`)
    // if ( values ) {
    //     values.push(value);
    //     // console.log(`2 - ${values}`)
    //     // console.log(`2.5 - ${JSON.stringify(multiset)}`)
    // } else {
    //     multiset[key] = [value];
    //     // console.log(`3 - ${JSON.stringify(multiset)}`)
    // }
}

function get(key) {
    return multiset[key];
}

function del(key, value) {
    // if it does not have any keys, return false
    if (!multiset[key]) {
        return false;
    }
    // assign the value to values
    const values = multiset[key];
    // get the index of value we're trying to del
    const index = values.indexOf(value);
    // if index >= 0
    if ( index >= 0 ) {
        values.splice(index,  1);
        if ( values.length === 0 ) {
            delete multiset[key];
        } else {
            multiset[key] = values;
        }
        return true;
    }
    return false;
}

function has(key, value) {
    if ( !multiset[key] ) {
        return false;
    }

    return multiset[key].includes(value);
}
//homework: Turn map.js into Object and add unit tests

set('foo', 5);
// set('foo', 10);
console.log(multiset);
// set('foo', 5);
// set('foo', 3);
del('foo', 10);

console.log(multiset);
// set('foo', 10);
// set('bar', 1);
