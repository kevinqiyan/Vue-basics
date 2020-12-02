function PcmModuleBase() {
    var a = 123
    console.log(a,'123');
    this.add = function(c,d){
        return c+d
    }
}
module.exports = PcmModuleBase