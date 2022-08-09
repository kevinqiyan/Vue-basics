let one = [
    '测试数据1',
    '测试数据2',
    '测试数据3',
    '测试数据2',
    '测试数据5',
    '测试数据1',
    '测试数据1',
    '测试数据2',
    '测试数据2'
];

countTimes(one)
console.log(countTimes(one) );
function countTimes(data) {
    var obj = {};
    return data.reduce(function (time, name) {
        if (name in time) {
            time[name]++;
        } else {
            time[name] = 1;
        }
        return time;
    }, {});
}

function test2(array) {
    return array.reduce((item, index) => {
        if (index in item) {
            item[index]++
        } else {
            item[index] = 1
        }
    })
}