function factorial(n) {

    if (n <=1) {
        return 1
    } else {
        return n*=arguments.callee(n-1)
    }
}
console.log('100的阶乘', factorial(100));
function fact(n) {
    if (n === 1) {
        return 1
    } else {
        return n*=fact(n - 1)
    }
}
console.log(fact(100));