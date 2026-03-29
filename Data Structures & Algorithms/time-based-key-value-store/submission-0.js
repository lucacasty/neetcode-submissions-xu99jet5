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
        console.log("set");
        let obj = !this.keyStore.has(key) ? {} : this.keyStore.get(key);
        obj[timestamp] = value;
        this.keyStore.set(key,obj);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        console.log("get");
        let obj = this.keyStore.get(key);
        if(timestamp) {
            console.log(obj[timestamp.toString()]);
            return obj[timestamp.toString()];
        } else {
            const arr = Object.values(obj);
            console.log(arr[arr.length-1]);
            return arr[arr.length-1];
        }
    }
}
