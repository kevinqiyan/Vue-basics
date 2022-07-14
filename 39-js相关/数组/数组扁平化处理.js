var arr = ['kevin','is','best',['yes','or','no',['1','2','3',['test']]]]

var newArr = []

// 递归
function falt(array) {
    // console.log('arr',array);
    for (let index = 0; index < array.length; index++) {
        if (Array.isArray(array[index])) {
            falt(array[index])
        } else {
            newArr.push(array[index])
        }
    }
    return newArr
} 

// console.log('递归数组扁平', falt(arr));

// 数组flat方法

/*
  Array - arr.flat([depth]) 扁平化多维数组
  1. 可选参数：depth  指定要提取嵌套数组的结构深度，默认值为 1。
  2. 返回值：一个包含将数组与子数组中所有元素的新数组
  3. Infinity 无限扁平
*/
let second = arr.flat(Infinity)
// console.log('数组flat方法', second);

// reduce

function reduceArr(array) {
    return array.reduce((one, two) => {
        return one.concat(Array.isArray(two)?reduceArr(two):two)
    },[])
    
}

console.log('reduce 方法',reduceArr(arr));