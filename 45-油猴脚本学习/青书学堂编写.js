// ==UserScript==
// @name         青书学堂_仅自动播放
// @namespace    guokwa.com
// @version      0.1
// @description  青书学堂自动后台静音播放
// @author       七言
// @match        *://*.qingshuxuetang.com/*
// @grant        none
// @license MI
// ==/UserScript==
/* jshint esversion: 6 */

(
    function () {
        var href = window.location.href
        if (href.indexOf('nodeId') > -1) {
            setTimeout(() => {
                let video = document.getElementsByTagName('video')[0]
                let params = new UrlSearch()
                /* 
                courseId: "1894"
                nodeId: "kcjs_5_3"
                periodId: "18"
                teachPlanId: "460"
                */
                let courseId = params.courseId
                let courseArr = params.nodeId.split('_')
                let nextKey = "" // 下一个视频的key
                if (!video) {
                    console.log('找不到视频');
                    if (courseArr.length == 2) {
                        nextKey = `kcjs_${Number(courseArr[1]) + 1}`
                    } else if (courseArr.length == 3) {
                        nextKey = `kcjs_${Number(courseArr[1]) + 1}_${Number(1)}`
                    }
                    const nextUrl = `https://${window.location.host}${window.location.pathname}?teachPlanId=${params.teachPlanId}&periodId=${params.periodId}&courseId=${courseId}&nodeId=${nextKey}`
                        console.log('下一个视频的链接_查找视频',nextUrl);
                    location.replace(nextUrl)
                } 
                video.muted = true // 静音播放
                video.playbackRate = 1 // 倍速播放
                video.play()
                if (courseArr.length == 2) {
                    nextKey = `kcjs_${Number(courseArr[1]) + 1}`
                } else if (courseArr.length == 3) {
                    nextKey = `kcjs_${courseArr[1]}_${Number(courseArr[2]) + 1}`
                }
                const nextUrl = `https://${window.location.host}${window.location.pathname}?teachPlanId=${params.teachPlanId}&periodId=${params.periodId}&courseId=${courseId}&nodeId=${nextKey}`
                console.log('下一个视频的链接_播放完成',nextUrl);
                video.addEventListener('ended', function () {
                    location.replace(nextUrl)
                })
            }, 5000);
            // 打印播放进度
            getVideoProgress()
        }
    }
)()

// 获取浏览器参数
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
function getVideoProgress() {
    setInterval(() => {
        let video = document.getElementsByTagName('video')[0]
        var currentTime = video.currentTime.toFixed(1)
        console.log('当前的视频进度是多少', currentTime);
    }, 10000);
}