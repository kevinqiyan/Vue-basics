// 通常递归

function sum(nub) {
    if (nub <= 0) {
        return 0
    } else {
        // return nub += sum(nub - 1)
        return nub += arguments.callee(nub - 1)
    }
}
console.log('result', sum(5));

// 尾递归
/* 
 在函数返回的时候，调用自身本身，并且return语句泵包含表达式。这样，编译器或者解释器就可以报尾递归做优化，是递归本身无论调用多少次都只占用一个栈帧，不会出现栈溢出的情况

*/
function sum2(nub,sub2 = 0) {
    if (nub <= 0) {
        return sub2
    } else {
        // return sum2(nub - 1, nub + sub2)
        // 
        // return arguments.callee(nub - 1, sub2 + nub) 使用这个方法是有bug的，并且在ES5中已经废弃了
    }
}
// console.log('callee', sum2(5));