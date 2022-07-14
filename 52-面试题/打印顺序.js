// setTimeout(() => {
//     console.log('1');
// }, 0);

// new Promise((resolve,reject) => {
//     console.log('2');
//     for (let index = 0; index < 100; index++) {
//         if (index === 99 ) {
//             resolve()
//         }
        
//     }
//     console.log('3');
// }).then(() => {
//     console.log('4');
// })
// console.log('5');

// 字节互娱研发-内容安全 笔试题

(() => {
    console.log(11);
    setTimeout(() => {
        console.log(22);
    }, 0);
    new Promise((resolve, reject) => {
        resolve()
        console.log(33);
    }).then(() => {
        console.log(44);
    })
    console.log(55);
})()