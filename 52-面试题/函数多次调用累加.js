function add(...args) {
   return args.reduce((a,b) => a+b)
}
function addTwo(fn) {
    let args = []
    return function temp(...data) {
        if (data.length) {
            args = [...args, data]
            return temp
        } else {
            let val = fn.apply(this,args)
            args = []
            return val
        }
    }
}

let result = addTwo(add)



// console.log(result(1)(2)(3)(4,5)());
const curry = (fn) => {
    
}