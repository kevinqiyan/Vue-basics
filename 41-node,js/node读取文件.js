var fs = require('fs') //文件模块 -fs
let one = [];
let two = [];
let one2 = [];
// 异步读取文件
// fs.readFile('test.txt','utf-8',function(err,data){
//     if (err) {
//         console.log(err);
//     } else {
//         one.push(data)
//         console.log('1111',data);
//         // return data
//     }
// })

// 同步读取文件
let dirT = fs.readFileSync('test.txt', 'utf-8');
let dir = fs.readFileSync('test3.txt', 'utf-8');
// console.log();
// one.push(JSON.stringify(dirT))
one.push(dirT)
two.push(dir)
// console.log('222', dir);
// console.log('数组比较长度 true/false', one.length == two.length);
for (const iterator of one) {
    let abc = iterator.split(',')
    for (let index = 0; index < abc.length; index++) {
        const element = abc[index];
        one2.push(element);
    }
    
}
console.log('打印one2',one2);

// let dirNum = one2.reduce(function (allNames, name){
//     if (name in allNames) { 
//         allNames[name]++; 
//     } else { 
//         allNames[name] = 1; 
//     } 
//     return allNames; 
// })
// console.log('读取文件内容',dirNum);
countTimes(one2)
console.log('过滤显示',countTimes(one2));
function countTimes(data) {
    // var obj = {};
    return data.reduce(function (time, name) {
        if (name in time) {
            time[name]++;
        } else {
            time[name] = 1;
        }
        return time;
    }, []);
}
