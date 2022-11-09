

// ==UserScript==
// @name         【专业版】青书学堂挂课、考试/作业/自动播放-成人教育-继续教育
// @namespace    http://tampermonkey.net/
// @version      0.51
// @description  👆👆👆👆👆👆👆青书学堂挂课、考试/作业/自动播放。现已支持青书学堂www.qingshuxuetang.com🚀🚀🚀完美适配 Chrome，Edge，FireFox，360，QQ 等 18 种浏览器，可在无法安装客户端的环境下使用。😎
// @author       qsxt
// @match        https://qingshuxuetang.com/*
// @match        https://*.qingshuxuetang.com/*
// @match        https://www.qingshuxuetang.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=qingshuxuetang.com
// @grant        GM_getResourceText
// @grant        unsafeWindow
// @grant        GM_addStyle
// @grant        GM_xmlhttpRequest
// @connect      degree.qingshuxuetang.com
// @connect      www.qingshuxuetang.com
// @run-at       document-end
// @connect      81.70.42.96
// @resource css https://cdn.bootcdn.net/ajax/libs/element-ui/2.15.9/theme-chalk/index.min.css
// @require  https://cdn.bootcdn.net/ajax/libs/vue/2.7.6/vue.min.js
// @require  https://cdn.bootcdn.net/ajax/libs/element-ui/2.15.9/index.min.js
// @license GPL
// ==/UserScript==
console.log('当前执行站点', unsafeWindow.location.href, unsafeWindow.parent)


(function () {
    'use strict';
    var i
    var href = location.href

    if (href.indexOf('cw_nodeId') > -1) {
        setTimeout(function () {
            var video = document.getElementsByTagName("video")[0]
            console.log('找到视频组件,开始静音并自动播放...', video)
            // 设置静音并播放
            video.muted = true
            video.playbackRate = 0.5
            video.play()


            var params = new UrlSearch()
            // 课程ID
            var courseId = params.courseId
            const courseArr = params.cw_nodeId.split('_')
            // 下一个播放的视频的key
            var nextKey = ''
            if (courseArr.length == 2) {
                nextKey = `kcjs_${Number(courseArr[1]) + 1}`
            } else if (courseArr.length == 3) {
                nextKey = `kcjs_${courseArr[1]}_${Number(courseArr[2]) + 1}`
            }
            const nextUrl = `https://${window.location.host}${window.location.pathname}?teachPlanId=${params.teachPlanId}&periodId=${params.periodId}&courseId=${courseId}&cw_nodeId=${nextKey}&category=${params.category}`
            console.log(params, 'currentId:', params.cw_nodeId, 'nextKey:', nextKey, 'nextUrl:', nextUrl)
            // 视频播放结束,自动下一条视频
            video.addEventListener("ended", function () {
                location.replace(nextUrl);
            })
        }, 5000)

        // 打印播放进度
        getvideoprogress();
    }
})();

function UrlSearch() {
    var name, value;
    var str = location.href; //取得整个地址栏
    var num = str.indexOf("?")
    str = str.substr(num + 1); //取得所有参数   stringvar.substr(start [, length ]

    var arr = str.split("&"); //各个参数放到数组里
    for (var i = 0; i < arr.length; i++) {
        num = arr[i].indexOf("=");
        if (num > 0) {
            name = arr[i].substring(0, num);
            value = arr[i].substr(num + 1);
            this[name] = value;
        }
    }
}

// 检测当前播放的进度 
function getvideoprogress() {
    setInterval(function () {
        var vid = document.getElementsByTagName("video")[0]
        var currentTime = vid.currentTime.toFixed(1);
        console.log('当前进度:', currentTime);
    }, 10000);
}