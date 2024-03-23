class Stack {
    constructor() {
        this.count = 0
        this.item = {}
    }
    in(...value) {
        for (let index = 0; index < value.length; index++) {
            const element = value[index];
            this.item[this.count] = element
            this.count++
        }
    }
    out() {
        if (this.isEmpty) {
            return undefined
        } else {
            this.count--
            let result = this.item[this.count]
            delete this.item[this.count]
            console.log('result',result);
            return result
        }
    }
    top() {
        if (this.isEmpty) {
            return undefined
        } else {
            return this.item[--this.count]
        }
    }
    size() { 
        return this.count
    }
    isEmpty() {
        return !this.count
    }
}

const stack =  new Stack()

stack.in('x')
stack.in('y')
stack.in('z')

// console.log('out',stack.top,'stack',stack);
console.log('Stack',stack);