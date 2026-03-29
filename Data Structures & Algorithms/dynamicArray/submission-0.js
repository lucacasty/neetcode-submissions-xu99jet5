class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        this.size = capacity;
        this.arr = [];
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        return this.arr[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        this.arr[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        if(this.getSize() < this.getCapacity()) {
            this.arr.push(n);
        } else {
            this.resize();
            this.arr.push(n);
        }
    }

    /**
     * @returns {number}
     */
    popback() {
        return this.arr.pop();
    }

    /**
     * @returns {void}
     */
    resize() {
        this.size = this.size * 2;
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.arr.length;
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.size;
    }
}
