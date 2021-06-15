Function.prototype.bind = function(){
    var _this = this;
    var context = arguments[0];
    var arg = [].slice.call(arguments,1);
    return function(){
        arg = [].concat.apply(arg,arguments);
        _this.apply(context,arg)
    }
}