async function async1() {
    console.log('async1 start') //2
    await async2() //3
    console.log('async1 end') //5
 }
 async function async2() {
    console.log('async2') //3
 }


 console.log('script start')// 1


 setTimeout(function () {
    console.log('settimeout')
 })


 async1() // 2


 new Promise(function (resolve) {
    console.log('promise1')
    resolve()
 }).then(function () {
    console.log('promise2') //
 })


 console.log('script end')