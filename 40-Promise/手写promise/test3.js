(function () {
    const PENDING = 'pending'
    const RESOLVE = 'resolve'
    const REJECT = 'reject'
    function Promise(executor) {
        const self = this
        self.data = undefined
        self.callback = []
        self.status = PENDING
        function resolve(value) {
            if (self.status === 'pending') {
                self.status = RESOLVE
                self.data = value
                if (self.callback.length > 0) {
                    self.callback.forEach(ele => ele.onResolved(value))
                }
            }

        }
        function reject(value) {
            if (self.status === 'pending') {
                self.status = REJECT
                self.data = value
                if (self.callback.length > 0) {
                    self.callback.forEach(ele => ele.onRejected(value))
                }
            }
        }

        try {
            executor(resolve, reject)
        } catch (error) {
            reject(error)
        }


    }
    Promise.prototype.then = function (onResolve, onReject) {
        const self = this
        onResolve = typeof onResolve === 'function' ? onResolve : value => value
        onReject = typeof onReject === 'function' ? onReject : reson => { throw reson }
        // 返回一个Promise 函数
        return new Promise((resolve, reject) => {
            function resolvePromise(callback) {
                try {
                    const result = callback(self.data)
                    if (result instanceof Promise) {
                        result.then(resolve, reject)
                    } else if (result !== null && typeof result === 'object' && typeof result === 'function') {
                        const then = result.then
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

            //  进行下一步判断
            if (self.status === RESOLVE) {
                resolvePromise(onResolve)
            } else if (self.status === REJECT) {
                resolvePromise(onReject)
            } else {
                self.callback({ onResolve(value) { resolvePromise(onResolve) }, onReject(value) { resolvePromise(onReject) } })
            }
        })
    }
    Promise.prototype.catch = function (onRejected) {
        return this.then(undefined, onRejected)
    }
    Promise.prototype.all = function (arr) {
        if (!(arr instanceof Array)) return Promise.reject(new Error('shuzu'))
        const resultArray = []
        let resultCount = 0
        return new Promise((resolve, reject) => {
            arr.forEach((ele, index) => {
                Promise.resolve(ele).then(value => {
                    resultCount++
                    resultArray[index] = value
                    if (resultCount === arr.length) {
                        resolve(resultArray)
                    }
                }).catch(err => reject(err))
            })
        })
    }
    Promise.prototype.race = function (arr) {
        if (!(arr instanceof Array)) {
            throw Error('shuzu')
        }
        return Promise((resolve, reject) => {
            arr.forEach((ele, index) => {
                Promise.resolve(ele).then(value => { resolve(value) }).catch(reason => reject(reason))
            })
        })
    }


    window.Promise = Promise
})(window)