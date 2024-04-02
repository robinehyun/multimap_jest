class MultimapPractice {
    constructor(iterable) {
        if ( iterable ) {
            this.map = new Map(iterable);
        } else {
            this.map = new Map();
        }
    }

    set(key, value) {
        if ( typeof value != "number" || typeof key != "string") {
            return;
        }

        const values = this.map.get(key) || [];
        values.push(value);
        this.map.set(key, values);
    }

    get(key) {
        return this.map.get(key);
    }

    delete(key, value) {
        if (!this.map.has(key)) {
            return false;
        }

        const values = this.map.get(key);
        // values = [-1]
        const index = values.indexOf(value);
        // index = 0
        if (index !== -1) {
            values.splice(index, 1);
            if (values.length === 0) {
                this.map.delete(key);
            } else {
                this.map.set(key, values);
            }
            return true;
        }

        return false;
    }

    has(key, value) {
        if (!this.map.has(key)) {
            return false;
        }

        return this.map.get(key).includes(value);
    }

    clear() {
        this.map.clear();
    }

    keys() {
        return this.map.keys();
    }

    static union(multimap1, multimap2) {
        const newMultiMap = new MultimapPractice();
        // Does order matter between the multimaps?
        // Are duplicates allowed?

        [...multimap1.keys()].forEach((key) => {
            const values = multimap1.get(key);
            values.forEach((value) => {
                newMultiMap.set(key, value);
            });
        });

        [...multimap2.keys()].forEach((key) => {
            const values = multimap2.get(key);
            values.forEach((value) => {
                newMultiMap.set(key, value);
            });
        })
        return newMultiMap;
    }

    static intersect(multimap1, multimap2) {
        const iMap = new MultimapPractice();

        [...multimap1.keys()].forEach((key) => {

            if ( multimap2.get(key) ) {
                const valuesOfMultimap1 = multimap1.get(key) || [];
                const valuesOfMultimap2 = multimap2.get(key) || [];

                const intersectedMap = valuesOfMultimap1.filter(x => valuesOfMultimap2.includes(x));
                [...intersectedMap].forEach((value) => {
                    iMap.set(key, value);
                });
            }
        });

        return iMap;
    }
}

export default MultimapPractice;

const Multimap1 = new MultimapPractice();
const Multimap2 = new MultimapPractice();
Multimap1.set('foo', 1);
Multimap1.set('foo', 2);
Multimap1.set('foo', 3);

Multimap2.set('foo', 3);
Multimap2.set('foo', 4);
// console.log(Multimap2);
// const newMultiMap = MultimapPractice.union(Multimap1, Multimap2);
// console.log(newMultiMap);


