function fun (){
    return this
}
const test = fun()
// console.log(test === undefined); //false