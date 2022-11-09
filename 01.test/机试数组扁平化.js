let arr = [1, 2, 3, [3, [1, 4]]]
let result = []
function float(array) {

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (Array.isArray(element)) {
            // float(element)
            arguments.callee(element)
        } else {
            result.push(element)
        }
        
    }
    // console.log('flaot',result);
    return result
}

console.log('222222',float(arr));
 
