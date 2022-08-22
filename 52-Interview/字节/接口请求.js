let list
async function fetchStudents() {

    // 实现相应逻辑

    let data = await axios.post(url,data)
    list = list.cancat(...res.data.filters(item => {
        return item.score > 90 &&timeFilter(item.time)
    }))
    
    if (list.length >= 100) {
        return list
    } else {
        return fetchStudents()
    }
}

function timeFilter(time,nodeTime = '2021-12-3') {
//    时间处理
    if (!time) return
    let timestamp = new Date(time).getTime()
    let tiems = new Date(nodeTime).getTime()
    if (timestamp > times) {
        return true
    } else {
        return false
    }
}
