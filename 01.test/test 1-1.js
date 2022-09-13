const data = {
    a: function () {
        console.log('this.a',this);
        setTimeout(() => {
            console.log('setTime',this);
        }, 0);
        setTimeout(function () {
            console.log('function',this);
        }, 0);
    },
    b: () => {
        console.log('b',this);
    }
}
// data.a()
data.b()

Promise.prototype.all = function (arr) {
    if(!(arr instanceof Array))  return Promise.reject(new Error('shuzu '))
    const resultArray = []
    let resultCount = 0
    return new Promise((resolve, reject) => {
        arr.forEach((element,index) => {
            Promise.resolve(element).then(value => {
                resultCount++
                resultArray[index] = value
                if (resultCount === arr.length) {
                    resolve(resultArray)
                }
            }).catch(err => reject(err))
        });
        
    })
}

class PriorityQueue {
    constructor(){
        this.data = []
        this.str = ''
    }
    add(label,value){
        this.data.push({'label':label,'value':value})
    }
    print(){
        this.data.sort((a,b) => a.value - b.value)
        this.data.forEach(ele => {
            this.str += ele.label
        })
        console.log('111',this.str);
    }
    clear(){
        this.data = []
        this.str = ''
    }

}
// const priorityQueue = new PriorityQueue()
// priorityQueue.add('item1', 1)
// priorityQueue.add('item3', 3)
// priorityQueue.add('item2', 2)
// priorityQueue.print();
// priorityQueue.clear();
// 输出
// item1 item2 item3
