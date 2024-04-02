class MySet {
    constructor() {
        this.set = [];
        this.setObj = {};
    }

    add(value) {
        // store value of key
        if ( !this.has(value) ) {
            // add(0);
            // "0": 0
            // [0]
            // add(3)
            // "3": 1
            // set = [0, 3]
            // setObj = {"0": 0, "3": 1}
            this.setObj[value] = this.set.length;
            this.set.push(value);
            // how can i store the index of the value im setting
            // return be set.push(0); = > length of 1
        }
    }

    del(value) {
        if ( !this.has(value) ) {
            return false;
        }
        // set=[0,1,2,3,4]
        // setObj = {"0": 0, "1": 1, "2": 2, "3": 3, "4": 4 }
        const index = this.setObj[value];
        // del(1);
        // index = 1;
        if (index !== -1 ) {
            // this.set = splice(1,1)
            // this.set = [0,2,3,4]
            this.set = this.set.splice(index, 1);
            // need to delete key/value pair from setObj
            delete this.setObj[value];
            console.log(this.setObj);
            console.log(this.set);
            // setObj = {"0": 0, "2": 2, "3": 3, "4": 4 }

            // need to decrement index after deletion
            // update the indices from the object
            for (let i = 0; i<this.set.length; i++) {
                // key = 0;
                // key = 1;
                // key = 2;
                // key = 3;
                const key = this.set[i];
                // "0": 0
                // "2": 1
                // "3": 2
                // "4": 3
                this.setObj[key] = i;
            }
        }

        return this.set;
    }

// do you want a boolean?
    has(value) {
        return this.setObj.hasOwnProperty(value);
    }

}

// export default MySet;

const createMap = new MySet();
createMap.add(9);
createMap.add(2);

console.log(createMap.has(2));
createMap.del(2);
console.log(createMap);

//
