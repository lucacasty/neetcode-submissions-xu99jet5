class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        let obj = !this.keyStore.has(key) ? {} : this.keyStore.get(key);
        obj[timestamp] = value;
        this.keyStore.set(key,obj);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {;
        let obj = this.keyStore.get(key);
        if(timestamp) {
            if(obj[timestamp] !== undefined) return obj[timestamp];
        } 

        const arr = Object.values(obj);
        return arr[arr.length-1];
    }
}
