let xhr = new XMLHttpRequest()
xhr.open('get','www.baidu.com',true)
xhr.onreadystatechange = function(){
  if (xhr.readyState === 4 && xhr.status === 200) {
    xhr.response('ok')
  }
}