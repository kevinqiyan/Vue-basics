var fn;

function foo() {
    var a = 2
    function fun() {
        console.log(a);
    }
    fn = fun
}

function bar() {
    foo()
}

bar()
fn()