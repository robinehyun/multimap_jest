const obj = {};
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 'foo', 'bar', 'foo'];
const set = new Set();

obj.name = 'foo';
obj["name"] = 'foo';

const obj2 = {
    'foo': '1',
    'bar': true,
    'foo': 0
}

// for (const key in obj2 ) {
//     console.log(obj2[key]);
//     if (!obj2[key]) {
//         obj[key] = true;
//     } else {
//         console.log('go fish');
//     }
// }

// build a function that finds bar in the arr
function finder(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'bar') {
            return i;
        }
    }
}

obj2.hasOwnProperty('foo');
// console.log(obj2.foo);
// set.add('foo');
// console.log(set);
// set.add('foo');
// console.log(set);
// set.add('bar');
// console.log(set);
// set.delete('foo');
// console.log(set);

// delete obj2.foo;
// console.log(obj2);
const setObj = {};
let setArr = [];

// add
function add(value) {
        if ( !setObj.hasOwnProperty(value) ) {
            setObj[value] = value;
            setArr.push(value);
        }
}

add(5);
add(5);
add(10);
console.log(setObj);
console.log(setArr);

function del(value) {
    if ( setObj.hasOwnProperty(value) ) {
        delete setObj[value]
        setArr = setArr.filter((val) => val !== value);
    }
}
del(5);
console.log(setArr);

function has(value) {
    return setObj.hasOwnProperty(value);
}

console.log(has(5));
