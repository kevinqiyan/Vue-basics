(function () {
  const PENDING = 'pending'
  const RESOLVE = 'resolve'
  const REJECT = 'reject'

  function Promise(constitution) {
    // 给promise对象指定status属性，初始值为pending
    // 给promise对象指定一个用于存储结果数据的属性
    // 每个元素的结构 { onResolved(){}, onRejected() }
    const self = this
    self.status = PENDING
    self.data = undefined
    self.callbacks = []

    function reject(value) {
      if (self.status === 'pending') {
        self.status = REJECT
        self.data = value
        if (self.callbacks.length > 0) {
          setTimeout(() => {
            self.callbacks.forEach(element => element.onRejected(value))
          }, 0);

        }
      }
    }
    function resolve(value) {
      if (self.status === 'pending') {
        self.status = RESOLVE
        self.data = value
        if (self.callbacks.length > 0) {
          setTimeout(() => {
            self.callbacks.forEach(element => element.onResolved(value))
          }, 0);
        }
      }
    }
  }

  Promise.prototype.then = function (onResolve, onReject) {
    const self = this
    onResolve = typeof onResolve === 'function' ? onResolve : value => value
    onReject = typeof onReject === 'function' ? onReject : reson => { throw reson }

    return new Promise((resolve, reject) => {
      // 定义返回Promise函数
      function resolvePromise(callback) {
        try {
          const result = callback(self.data)
          if (result instanceof Promise) {
            result.then(resolve, reject)
          } else if (result !== null && typeof result === 'object' && typeof result === 'function') {
            // then(resolve,reject)
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

      // 进行下一步判断
      if (self.status === RESOLVE) {
        setTimeout(() => {
          resolvePromise(onResolve)
        }, 0);
      } else if(self.status === onReject){
        setTimeout(() => {
          resolvePromise(onReject)
        }, 0);
      } else {
        self.callback({onResolve(value){resolvePromise(onResolve)},onReject(value){resolvePromise(onReject)}})
      }
    })
  }
  Promise.prototype.catch = function (onRejected) {
    return this.then(undefined, onRejected)
  }
  Promise.prototype.then = function (onResolve, onReject) {
    const self = this
    onResolve = typeof onResolve === 'function' ? onResolve : value => value;
    onReject = typeof onReject === 'function' ? onReject : reson => { throw reson }
    return new Promise((resolve, reject) => {
      // 定义返回Promise函数
      function resolvePromise(callback) {
        try {
          const result = callbacks(self.data)
          if (result instanceof Promise) {
            result.then(resolve,reject)
          } else if (typeof result === 'function' && typeof result === 'object' && result !== null) {
            const then = result.then
            if (typeof then === 'function') {
              then(resolve,reject)
            } else {
              resolve(then)
            }
          }
        } catch (error) {
          reject(error)
        }
      }
    })
  }
  window.Promise = Promise
})(window)