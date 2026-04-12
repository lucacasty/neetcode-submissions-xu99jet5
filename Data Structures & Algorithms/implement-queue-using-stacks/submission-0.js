class MyQueue {
    constructor() {
        this.queue = [];
        this.index = 0;
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.queue.push(x);
    }

    /**
     * @return {number}
     */
    pop() {
        let popped = this.peek();
        this.index++;
        return popped;
    }

    /**
     * @return {number}
     */
    peek() {
        return this.index < this.queue.length ? this.queue[this.index] : null;
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.index >= this.queue.length;
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
