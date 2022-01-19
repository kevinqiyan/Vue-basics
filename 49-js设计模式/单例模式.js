class SingDog {
  show(){
    console.log('我是一个单例对象');
  }
  static getInstance(){
    // 判断是否已经 new 过一个实例
    if (!SingDog.instance) {
      SingDog.instance = new SingDog()
    }
    // 如果这个唯一的实例已经存在，则直接返回
    return SingDog.instance
  }
}

let s1 = SingDog.getInstance()
let s2 = SingDog.getInstance()

console.log('s1===s2?',s1 === s2);