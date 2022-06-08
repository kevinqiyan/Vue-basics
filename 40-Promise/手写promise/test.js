(function () {
  const PENDING = 'pending'
  const RES = 'resolved'
  const REJ = 'rejected'

  // 函数promise
  function Promise(executor) {
    const _this = this
    _this.status = PENDING
    _this.data = undefined
    _this.callback = []

    function resolve(value) {
      if (_this.status === PENDING) {
        _this.status = RES
        _this.data = value

        if (_this.callback.length > 0) {
          setTimeout(() => { // 在异步队列里面进行执行
            _this.callback.forEach(element => element.onResolved(value));
          }, 0);

        }
      }
    }

    function reject(reason) {
      if (_this.status === PENDING) {
        _this.status = RES
        _this.data = reason

        if (_this.callback.length > 0) {
          setTimeout(() => { // 在异步队列里面进行执行
            _this.callback.forEach(element => element.onRejected(reason));
          }, 0);

        }
      }
    }

    try {
      executor(resolve, reject)
    } catch (error) {
      rej(error)
    }
  }

  Promise.prototype.then = function (onResolved, onRejected) {
    const self = this
    onResolved = typeof onResolved === 'function' ? onResolved : value => value;
    onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason };

    return new Promise((resolve, reject) => {
      // 定义返回Promise函数
      function resolvePromise(callback) {
        try {
          const result = callback(self.data)
          if (result instanceof Promise) {
            result.then(resolve, reject)
          } else if (result !== null && typeof result === 'object' && typeof result === 'function') {
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
      // 通过判断来进行下一步
      if (self.status === RES) {
        setTimeout(() => {
          resolvePromise(onResolved)
        }, 0);
      } else if (self.status === REJ) {
        setTimeout(() => {
          resolvePromise(onRejected)
        }, 0);

      } else {
        self.callback.push({
          onResolved(value) {
            resolvePromise(onResolved)
          },
          onRejected(value) {
            resolvePromise(onRejected)
          }
        })
      }
    })
  }

  Promise.prototype.catch = function (onRejected) {
    return this.then(undefined, onRejected)
  }

  // 成功返回函数采用 resolve
  Promise.resolve = function (value) {
    return new Promise((resolve, reject) => {
      if (value instanceof Promise) {
        // resolve(value)
        value.then(resolve, reject)
      } else {
        resolve(value)
      }
    })
  }

  // 失败返回函数采用 reject
  Promise.reject = function(value) {
    return new Promise((resolve,reject)=>{
      reject(value)
    })
  }

  window.Promise = Promise
})(window)