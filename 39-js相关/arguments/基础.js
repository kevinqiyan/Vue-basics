// 求和
function sum() {
    if (!arguments) return
    let result = 0

    for (let index = 0; index < arguments.length; index++) {
        const element = arguments[index];
        result += element
    }
    return result
}
// console.log('求和', sum(1,2,3,4,5,6));

// arguments.callee

function addNumb(n) {
    if (n <= 1) {
        return 1
    } else {
        return n+=arguments.callee(n - 1)
    }
}
let result = addNumb(100)
console.log('arguments_add', result);



// 求最大值
function max() {
    if (!arguments) return
    let result = arguments[0]
    for (let index = 0; index < arguments.length; index++) {
        const element = arguments[index];
        if (result < element) {
            result = element
        }

    }
    // console.log('123', result);
    return result
}
// console.log('最大值', max(1,2,3,4,5,6,7));

// test
let nodeData = { value: 1, childern: [{ value: 1, childern: [{ value: 2, childern: undefined }] }, { value: 3, childern: undefined }] }
var resultTwo = []
function getData(node) {
    if (node.childern && node.childern instanceof Array) {
        for (let index = 0; index < node.childern.length; index++) {
            let element = node.childern[index];

            resultTwo.push(element.value)
            getData(element)
        }
    }
}
getData(nodeData)
function maxArr(array) {
    if (!array) {
        return 0
    } else {
        let result = 0
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            if (result < element) {
                result = element
            }

        }
        return result
    }

}
// console.log('测试看俺',resultTwo,'maxArr',maxArr(resultTwo));


function getStr(data, para) {
    let result;
    let arr = para.split('.')
    if (arr && arr instanceof Array) {

        for (let index = 0; index < arr.length; index++) {
            let element = arr[index];
            if (data.element instanceof Object) {

                getStr(data.element)
            } else {
                result = data.element
            }
        }
    } else {
        result = 0
    }
}
const obj = { a: { b: { c: 100 } }, d: [{ f: 'abc' }] };
// console.log('2222222222', getStr(obj, 'a.b.c'));


function add(...args) { return args.reduce((a, b) => a + b)}
function currying(fn) {
    let args = []
    return function temp(...newArgs) {
        if (newArgs.length) {
            args = [...args, newArgs]
            return temp
        }
        else {
            let val = fn.apply(this, args)
            args = []
            return val
        }
    }
}

    let addCurry = currying(add)