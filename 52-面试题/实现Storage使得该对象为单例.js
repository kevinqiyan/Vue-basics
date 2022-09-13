var instance = null
class Storage {
    static getInstance() {
        if (!instance) {
            instance = new Storage()
        }
        return instance
    }
    setItem = (key,value) => localStorage.setItem(key,value)
    getItem = key => localStorage.getItem(key)
}
let newClass = Storage.getInstance()
console.log('123',newClass);
// console.log('Storage',newClass.setItem('test','123'));
// console.log('Storage',newClass.getItem('test'));