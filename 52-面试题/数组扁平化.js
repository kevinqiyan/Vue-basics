let arr = [[5, 7, 4], 3, [89, [8, 9]]]
let result = []
function flat(array) {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (Array.isArray(element)) {
            arguments.callee(element)
        } else {
            result.push(element)
        }

    }
    return result
}

// console.log(flat(arr));


// 第二种方法

function flatTwo(array) {
    return array.reduce((one, two) => {
        // console.log('one',one,'two',two);
        return one.concat(Array.isArray(two) ? arguments.callee(two) : two)
    }, [])
}

// console.log('flatTwo', flatTwo(arr)); 

// 练习
function test(array) {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (Array.isArray(element)) {
            arguments.callee(element)
        } else {
            result.push(element)
        }
    }
}

function test2(array) {
    return array.reduce((a, b) => {
        return a.concat(Array.isArray(b) ? arguments.callee(b) : b)
    })
}

function flat(arr) {
    arr = arr.toString().split(',')
    let newArr = arr.map(item => {
        item += item
        return item
    })
    return newArr 
}

console.log('flat', flat(arr));