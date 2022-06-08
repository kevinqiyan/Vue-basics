(function () {
    const PENDING = 'pending'
    const REJECTED = 'rejected'
    const RESOLVED = 'resolved'
    function Promise() {
        const self = this
        self.status = PENDING
        self.data = undefined
        self.callback = []

        function resolve(value) {
            if (self.status === PENDING) {
                self.status = RESOLVED
                self.data = value
                if (self.callback.length > 0) {
                    setTimeout(() => {
                        self.callback.forEach(data => data.onResolved(value))
                    }, 0);
                }
            }
        }

        function reject(value) {
            if (self.status === PENDING) {
                self.status = REJECTED
                self.data = value
                if (self.callback.length > 0) {
                    setTimeout(() => {
                        self.callback.forEach(data => data.onRejected(value))
                    }, 0);
                }
            }
        }

        try {
            executor(resolve, reject)
        } catch (error) {
            reject(error)
        }
    }
})()
