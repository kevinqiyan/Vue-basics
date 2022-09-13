// “回文串”是一个正读和反读都一样的字符串，初始化标志flag=true，比如“level”或者“noon”等等就是回文串。

function run(input) {
    if (typeof input !== 'string') return false
    return input.split('').reverse().join('') === input
}

console.log('回文',run('noon'));