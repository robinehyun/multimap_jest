class MultimapPractice {
    constructor() {
        this.map = new Map();
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
}

export default MultimapPractice;
