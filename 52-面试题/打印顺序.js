setTimeout(() => {
    console.log('1');
}, 0);

new Promise((resolve,reject) => {
    console.log('2');
    for (let index = 0; index < 100; index++) {
        if (index === 99 ) {
            resolve()
        }
        
    }
    console.log('3');
}).then(() => {
    console.log('4');
})
console.log('5');