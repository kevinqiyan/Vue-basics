function selectSort(arr){
    let length = arr.length
    let indexMin
    for (let index = 0; index < length - 1; index++) {
        indexMin = index
        for (let j = index; j < length; j++) {
            if (arr[indexMin] > arr[j]) {
                indexMin = j
            }
        }
        if (index !== indexMin) {
            let temp = arr[index]
            arr[index] = arr[indexMin]
            arr[indexMin] = temp
        }
        
    }
}