// ==UserScript==
// @name         青书学堂刷课脚本
// @namespace    青书
// @version      1.1
// @description  青书学堂自动学习自动看视频工具，有问题可联系作者，微信： jiaowubang，QQ:1224873630
// @author       教务帮
// @match        *://*.qingshuxuetang.com/*
// @grant        none
// ==/UserScript==

(function () {
  'use strict';
  console.log('青书助手');
  let setting = {
    timeout: 2 * 1000, // 2代表2秒
    playbackRate: 3  //默认2倍播放速度
  };
  let lhref = window.location.href;
  let flag = true;
  //刷课对象
  var type = 0;
  var dotime = 0;
  var Cla = {
    doClaDetail: function () {
      if ($('video').length > 0) {
        var Media = $('video')[0];
        Media.playbackRate = setting.playbackRate;
        if (Media.paused) {
          $('video').prop('muted', true);
          Media.play();
        }
        Media.onended = function () {
          window.setTimeout(function () {
            Cla.playNext();
          }, 1000);
        };
      } else {
        window.setTimeout(function () {
          Cla.playNext();
        }, 1000);
      }
    },
    playNext: function () {

      var curindex = -1;
      var flag = false;
      var curtitle = $('.learn-title').text();
      $('#lessonList a[href^="javascript: CoursewareNodesManager"] span.title').closest('li').addClass('fenlei');
      $('.fenlei').each(function (index, element) {
        if ($(this).find('.title').text() == curtitle) {
          curindex = index + 1;
        }
        if (curindex == index) {
          console.log($(this).text());
          flag = true;
          $(this).find('a')[0].click();
          console.log('当前处理' + $(this).find('.title').text());
        }
      });
      if (flag) {

      } else {
        alert('刷课完成');

      }
    }

  };
  function videoPage() {//视频界面
    if (!IsCanVideo())
      return;
    Cla.doClaDetail();
    window.setInterval(function () {
      Cla.doClaDetail();
    }, 10 * 1000);


  }
  function IsCanVideo() {
    var flag = false;
    if (lhref.includes('/Student/Course/CourseShow') && lhref.includes('cw_nodeId')) {
      flag = true;
    }
    return flag;
  }
  $(document).ready(function () {
    window.setTimeout(function () {
      videoPage();
    }, 2000);

  });
})();