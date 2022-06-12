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
obj.one()
obj.two()