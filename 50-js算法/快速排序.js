// 第一个版本 - 快速排序

// 一次快排 取中间值
// Math.random() 通过随机数
let partition = (arr, left, right) => {
    let datum = arr[Math.floor(Math.random() * (right - left + 1) + left)]
    i = left
    j = right
    //  开始调整
    while (i <= j) {
        // 左指针右移
        while (arr[i] < datum) {
            i++
        }
        // 右指针左移
        while (arr[j] > datum) {
            j--
        }
        // 交换
        if (i <= j) {
            swap(arr,i,j)
            i += 1
            j -= 1
        }
    }
    return i
}
// 交换函数

let swap = (arr,i,j) => {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
// 进行递归调用
let quick = (arr, left, right) => {
    let index
    if (left < right) {
        // 划分数组
        index = partition(arr,left,right)
        if (left < index - 1) {
            quick(arr,left,index - 1)
        }
        if (index < right) {
            quick(arr,index,right)
        }
    }
}
// 最后函数
let quickSort = (arr) => {
    quick(arr,0,arr.length - 1)
}
let arr = [1, 4, 2, 3, 6, 10, 8, 5, 9,7]
// quickSort(arr)
// console.log('快速排序第一版本', arr);


// 第二个版本


function sortFun(arr) {
    if (arr.length <= 1) return arr
    let index = Math.floor(arr.length/2)
    let res = arr.splice(index,1)
    let left = [], right = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < res) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
        
    }
    return sortFun(left).concat([res],sortFun(right))

}
// sortFun(arr)
// console.log('11111', arr);



// 练习

function test(arr) {
    if(arr.length<=1) return arr
    let i = Math.floor(arr.length/2)
    let count = arr.splice(i, 1)[0] // 获取中间值
    let left = [], right=[]
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] < count) {
            left.push(arr[index])
        } else {
            right.push(arr[index])
        }
        
    }
    return arguments.callee(left).concat([count],arguments.callee(right))
}
test(arr)
console.log('test', arr);

// 快速排序
function test2(arr) {
    let res = Math.floor(arr.length / 2)
    let count = arr.splice(res,1)[0]
    let left = [], right = []
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (element < arr[count]) {
            left.push(element)
        } else {
            right.push(element)
        }
        
    }

    return test2(left).concat([count],test2(right))
}