var a = 1

var obj = {
    a:3,
    one: () => {
        console.log('one',this);
        console.log('one',this.a);
    },
    two: function () {
        console.log('two',this);
        console.log('two',this.a);
    }
}
obj.one() // window undefined
obj.two() // obj对象 3

// 2022年7月1日面试题

function b() {
    console.log('1');
}

// b()

function b() {
    console.log('2');
}

// b()

function b() {
    console.log('3');
}

// b()

// 上面三个log  3 3 3

function test(a,b,c) {
    function add(x) {
        return a*x + b*x + c
    }

    add.toString = function () {
        console.log('222');
    }
}

// console.log('test_add', test(1,2,3));


let arr = new Array()
arr[1] = '123'
// console.log('arr-0',arr[0],'aaaa',arr);

// 万博思图笔试题

function Person(firstName,lastName) {
    this.firstName = firstName
    this.lastName = lastName
}

let newPerson = new Person('kevin', 'test')
let personTwo = Person('123','456')
// console.log('person_new',newPerson); // Person { firstName: 'kevin', lastName: 'test' }
// console.log('person_two',personTwo); // undefined

// 两个函数对比是否等价 - false
function foo1() {
    return {
        bar:'hello'
    }
}

function foo2()
{
    return
    {
        bar:'hello'
    }
}
// console.log('代码比较', foo1(), 'foo2', foo2(), 'diff', foo1 === foo2);

// 字节-内容安全-笔试题

function A() {
    let person = {
        name: '张三',
        age: 10,
        getName: function () {
            console.log(this.name);
        },
        getAge: function () {
            console.log(this.age);
        }
    }
    return person
}
function B() {
    this.name = '李四'
    this.age = 20
}

// A().getName() // 张三
// A().getAge() // 10
// B()
// B().getName() // undefined
// B.getAge() // undefined

function get() {
    B()
    let name = '12'
    function B() {
        // console.log('111', this.name);
        // console.log('222',name);
    }
}
get()

