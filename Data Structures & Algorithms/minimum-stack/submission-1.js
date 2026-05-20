class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        if(this.minStack.length === 0){
            this.minStack.push(val);
        }else{
            if(val <= this.minStack[this.minStack.length - 1])
                this.minStack.push(val);
        } 
    }

    /**
     * @return {void}
     */
    pop() {
        if(this.stack[this.stack.length -1] === this.minStack[this.minStack.length - 1])
            this.minStack.pop(this.minStack.length - 1);
        this.stack.pop(this.stack.length - 1);
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}
