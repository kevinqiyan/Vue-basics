Object.prototype.objCustom = function () { };
Array.prototype.arrCustom = function () { };
let a = [3, 5, 7];
a.test = 'hello';
for (const key in a) {
    console.log('查看a是什么', key);
}
for (const key in a) {
    if (a.hasOwnProperty(key)) {
        console.log('打印a--是否拥有key', key);

    }
}

for (const iterator of a) {
    console.log('for of循环遍历', iterator);

}