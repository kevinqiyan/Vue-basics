var a = '123456qwerASDFqtwer'
var n = /[0-9]/g
var s = /([a-z]|[A-Z])/g
var s2 = /[qt]wer/g
// console.log(n.test(a));
console.log('number',a.match(n));
console.log('string', a.match(s));
console.log('string22', a.match(s2));
