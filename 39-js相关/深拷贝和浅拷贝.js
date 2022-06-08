// 浅拷贝
let obj = {
    name: 'kevin',
    person: {
        age: 18
    }
}
let one = {}
Object.assign(one, obj)
console.log('one',one,'obj',obj);
one.name = 'kevintest'
console.log('one22', one, 'obj222', obj);

function deepCopy(newObj,obj){
    for (const key in obj) {
        if (obj[key] instanceof Array) {
            newObj[key] = []
            deepCopy(newObj[key], obj[key])
        } else if(obj[key] instanceof Object){
            newObj[key] = {}
            deepCopy(newObj[key],obj[key])
        } else {
            newObj[key] = obj[key]
        }
    }
}