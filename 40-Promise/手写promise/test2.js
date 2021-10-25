(function(){
  const PENDING = 'pending'
  const RESOLVE = 'resolve'
  const REJECT = 'reject'

  function Promise(constitution){
    // 给promise对象指定status属性，初始值为pending
    // 给promise对象指定一个用于存储结果数据的属性
    // 每个元素的结构 { onResolved(){}, onRejected() }
    const self = this
    self.status = PENDING
    self.data = undefined
    self.callbacks = []

    function reject(value){
      if (self.status === 'pending') {
        self.status = REJECT
        self.data = value
        if (self.callbacks.length>0) {
          setTimeout(() => {
            self.callbacks.forEach(element => element.onRejected(value))
          }, 0);
          
        }
      }
    }
    function resolve(value){
      if (self.status ==='pending') {
        self.status = RESOLVE
        self.data = value
        if (self.callbacks.length>0) {
          setTimeout(() => {
            self.callbacks.forEach(element=>element.onResolved(value))
          }, 0);
        }
      }
    }
  }
})(window)