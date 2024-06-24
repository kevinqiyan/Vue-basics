class TaskScheduler {
    constructor(max) {
        this._max = max
        this._req = []
        this._count = 0
    }
    load(task) {
        return new Promise((resolve, reject) => {
            this._req.push({
                task, resolve,
                reject
            })
        })
    }
    run() {
        while (this._req.length > 0 && this._count < this._max) {
            const { task, resolve, reject } = this._req.shift()
            this._count++
            const res = task()
            if (res instanceof Promise) {
                res.finally(() => {
                    this._count--
                    this.run()
                })
            } else {
                this._count--
                this.run()
            }

        }
    }
}

