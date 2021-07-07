/* 
 Set Es6新的数据结构,类似于数组,但是成员值是唯一的,没有重复的值;
*/
// 数组去重
// let arr = [1,1,2,3,4,3,5,6,7]
// let s =  new Set()
// arr.forEach(v=>s.add(v))
// for (let item of s) {
//     console.log(item);
// }
// console.log(...new Set(arr));

// 去重字符串
// let str = 'abcdeefcd'
// console.log('字符串去重',[...new Set(str)].join(''));

// set属性
let test = new Set()
test.add(1).add(2).add(3)
console.log('set属性',test.size,test.has(1),test.delete(3),test.has(3));
