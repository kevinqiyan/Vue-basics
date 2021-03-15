/**
 * 自定义Promise函数模块
 */
(function () {

    const PENDING = 'pending'
    const RESOLVED = 'resolved'
    const REJECTED = 'rejected'


    /**
     * Promise构造函数
     * @param {*} executor 执行器函数
     */
    function Promise(executor) {
        const self = this
        // 给promise对象指定status属性，初始值为pending
        self.status = PENDING
        // 给promise对象指定一个用于存储结果数据的属性
        self.data = undefined
        // 每个元素的结构 { onResolved(){}, onRejected() }
        self.callbacks = []


        function resolve(value) {
            // 此处做判断，使得promise的状态只能修改一次
            if (self.status === PENDING) {
                // 将状态改为 resolved
                self.status = RESOLVED
                // 保存value数据
                self.data = value

                // 如果有待执行的callback函数，立即异步执行回调
                if (self.callbacks.length > 0) {
                    setTimeout(() => { // 表示在异步队列中执行
                        self.callbacks.forEach(callbacksObj => {
                            callbacksObj.onResolved(value)
                        })
                    }, 0);
                }
            }
        }
        function reject(reason) {
            // 此处做判断，使得promise的状态只能修改一次
            if (self.status === PENDING) {
                // 将状态改为 resolved
                self.status = REJECTED
                // 保存value数据
                self.data = reason

                // 如果有待执行的callback函数，立即异步执行回调
                if (self.callbacks.length > 0) {
                    setTimeout(() => { // 表示在异步队列中执行
                        self.callbacks.forEach(callbacksObj => {
                            callbacksObj.onRejected(reason)
                        })
                    }, 0);
                }
            }
        }

        // 立即执行器
        try {
            executor(resolve, reject);
        } catch (error) { // 如果执行器抛出异常，promise状态变为rejected状态
            reject(error)
        }
    }

    /**
     * Promise原型对象的then方法
     */
    Promise.prototype.then = function (onResolved, onRejected) {
        const self = this
        onResolved = typeof onResolved === 'function' ? onResolved : value => value
        // 指定默认的失败的回调（实现错误/异常穿透的关键点）
        onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason }


        return new Promise((resolve, reject) => {

            /**
             * 处理onResolve和onRejected函数
             * @param {*} callback 
             */
            function resolvePromise(callback) {
                try {
                    const result = callback(self.data)
                    if (result instanceof Promise) {
                        result.then(resolve, reject)
                    } else if (result !== null && (typeof result === 'object' || typeof result === 'function')) {
                        // 拿到result.then
                        const then = result.then;
                        if (typeof then === 'function') {
                            then(resolve, reject)
                        } else {
                            resolve(then)
                        }
                    } else {
                        resolve(result)
                    }
                } catch (error) {
                    reject(error)
                }
            }


            if (self.status === RESOLVED) {
                setTimeout(() => {
                    /**
                     * 1. 如果抛出异常，return 的 promise就会失败，reason就是error
                     * 2. 如果回调函数返回不是promise，return的promise就会成功，value就是返回值
                     * 3. 如果回调函数返回的是一个promise，return的promise的结果就是这个promise的结果，value就是返回值
                     */
                    resolvePromise(onResolved)
                }, 0);
            } else if (self.status === REJECTED) {
                setTimeout(() => {
                    resolvePromise(onRejected)
                }, 0);
            } else {
                self.callbacks.push({
                    onResolved(value) {
                        resolvePromise(onResolved)
                    },
                    onRejected(reason) {
                        resolvePromise(onRejected)
                    }
                })
            }
        })
    }

    /**
     * Promise原型对象的catch方法
     */
    Promise.prototype.catch = function (onRejected) {
        return this.then(undefined, onRejected)
    }

    /**
     * Promise函数对象的resolve方法
     * 
     * 返回一个指定结果的成功的promise
     */
    Promise.resolve = function (value) {
        return new Promise((resolve, reject) => {
            if (value instanceof Promise) {
                value.then(resolve, reject)
            } else {
                resolve(value)
            }
        })
    }

    /**
     * Promise函数对象的reject方法
     */
    Promise.reject = function (reason) {
        return new Promise((resolve, reject) => {
            reject(reason)
        })
    }

    /**
     * Promise函数对象的all方法
     */
    Promise.all = function (promises) {
        // 判断数组
        if (!(promises instanceof Array)) {
            return Promise.reject(new Error('params must be a Array!'))
        }
        // 用来保存所有数据成功value的数组
        const resultArray = new Array(promises.length)
        // 用来保存成功数量的计数
        let resultCount = 0
        return new Promise((resolve, reject) => {
            // 遍历获取每个promise的结果
            promises.forEach((p, index) => {
                Promise.resolve(p).then(value => {
                    resultCount++
                    resultArray[index] = value
                    // 如果全部都成功了，将return的promise变为成功
                    if (resultCount === promises.length) {
                        // 表示成功
                        resolve(resultArray)
                    }
                }, reason => {
                    reject(reason)
                })
            })
        })
    }

    /**
     * Promise函数对象的race方法
     */
    Promise.race = function (promises) {
        // 判断数组
        if (!(promises instanceof Array)) {
            return Promise.reject(new Error('params must be a Array!'))
        }

        return new Promise((resolve, reject) => {
            // 遍历数组
            promises.forEach((p, index) => {
                Promise.resolve(p).then(value => {
                    resolve(value)
                }, reason => {
                    reject(reason)
                })
            })
        })
    }

    // ---------------------------------------实现自己的方法---------------------------------------
    /**
     * 返回一个promise对象，它在指定的时间后才确定成功结果
     * @param {*} value 
     * @param {*} time 
     */
    Promise.resolveDelay = function (value, time) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (value instanceof Promise) {
                    value.then(resolve, reject)
                } else {
                    resolve(value)
                }
            }, time);
        })
    }


    /**
     * 返回一个promise对象，它在指定的时间后才确定失败结果
     * @param {*} reason 
     * @param {*} time 
     */
    Promise.rejectDelay = function (reason, time) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(reason)
            }, time);
        })
    }



    // 向外暴露函数
    window.Promise = Promise
})(window)