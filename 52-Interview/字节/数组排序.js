const source = [
    { id: 4, name: 'test1' },
    { id: {}, name: 'ssdf' },
    "test",
    { id: () => { }, name: 'sf' },
    { id: '6', name: 'test3' },
    { id: 6, name: 'test4' },
    { id: 7, name: 'test7' },
    { id: 2, name: 'test2' },
    { name: 'sf' },
    {},
]

function filterSort(arr) {
    // 写下你的代码   
    let listArr = []
    let list =  arr.filter(value => {
        return (typeof value.id) === 'number'
    })
    list.sort((a,b) => {
        return a.id - b.id
    })
    list.forEach(element => {
        listArr.push(element.name)
    });
    return listArr
}

console.log('过滤数据',filterSort(source));

