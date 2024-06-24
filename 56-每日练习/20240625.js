class Promise {
    constructor(cb) {
        this._value = null
        this._err = null
        this.onResolved = []
        this.onRejected = []
        this.status = 'pending'


        try {
            cb(this.resolve, this.reject)
        } catch (error) {
            this.reject(error)
        }
    }
    resolve = (value) => {
        if (this.status === 'pending') {
            this.status = 'resolved'
            this._value = value
            this.onResolved.forEach(cb => cb)
        }
    }
    reject = (err) => {
        if (this.status === 'pending') {
            this.status = 'rejected'
            this._err = err
            this.onRejected.forEach(cb => cb)
        }
    }
}



// kimi 输出手写promise
class MyPromise {
    constructor(executor) {
        if (typeof executor !== 'function') {
            throw new TypeError('Executor must be a function.');
        }

        this.state = 'pending'; // 初始状态为 pending
        this.value = undefined; // 用于存储解析值
        this.handlers = []; // 存储 then 和 catch 的回调函数

        try {
            executor(this._resolve, this._reject);
        } catch (err) {
            this._reject(err);
        }
    }

    _resolve = (value) => {
        if (this.state === 'pending') {
            if (value instanceof MyPromise) {
                return value.then(this._resolve, this._reject);
            }
            this.state = 'fulfilled'; // 状态变为 resolved
            this.value = value;
            this.handlers.forEach((h) => this._handle(h));
        }
    }

    _reject = (error) => {
        if (this.state === 'pending') {
            this.state = 'rejected'; // 状态变为 rejected
            this.value = error;
            this.handlers.forEach((h) => this._handle(h));
        }
    }

    _handle(handler) {
        if (this.state === 'fulfilled') {
            if (typeof handler.onFulfilled === 'function') {
                handler.onFulfilled(this.value);
            }
        } else if (this.state === 'rejected') {
            if (typeof handler.onRejected === 'function') {
                handler.onRejected(this.value);
            }
        }
    }

    then(onFulfilled, onRejected) {
        return new MyPromise((resolve, reject) => {
            const handler = {
                onFulfilled: value => {
                    if (typeof onFulfilled === 'function') {
                        try {
                            resolve(onFulfilled(value));
                        } catch (err) {
                            reject(err);
                        }
                    } else {
                        resolve(value);
                    }
                },
                onRejected: error => {
                    if (typeof onRejected === 'function') {
                        try {
                            resolve(onRejected(error));
                        } catch (err) {
                            reject(err);
                        }
                    } else {
                        reject(error);
                    }
                }
            };

            if (this.state === 'pending') {
                this.handlers.push(handler);
            } else {
                this._handle(handler);
            }
        });
    }

    catch(onRejected) {
        return this.then(null, onRejected);
    }

    finally(onFinally) {
        return this.then(
            value => MyPromise.resolve(onFinally()).then(() => value),
            error => MyPromise.resolve(onFinally()).then(() => { throw error; })
        );
    }

    static resolve(value) {
        if (value instanceof MyPromise) {
            return value;
        }
        return new MyPromise((resolve) => {
            resolve(value);
        });
    }

    static reject(reason) {
        return new MyPromise((resolve, reject) => {
            reject(reason);
        });
    }
}


// 柯里化函数
const current = function () {
    let param = []
    const add = (...args) => {
        param = param.concat(args)
        return add
    }
    add[Symbol.toPrimitive] = () => {
        return param.reduce((a, b) => a + b)
    }
    return add
}


const test = current()
const result = test(1)(2)(3)(4)(5, 5)
console.log(+result);