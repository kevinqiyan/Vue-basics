function formatUTC(utc_datetime) {
    // 转为正常的时间格式 年-月-日 时:分:秒
    var T_pos = utc_datetime.indexOf("T");
    var Z_pos = utc_datetime.indexOf("Z");
    var year_month_day = utc_datetime.substr(0, T_pos);
    var hour_minute_second = utc_datetime.substr(
      T_pos + 1,
      Z_pos - T_pos - 1
    );
    // hour_minute_second.split('.')[0]
    var new_datetime = year_month_day + " " + hour_minute_second.split('.')[0]; // 2017-03-31 08:02:06
    // console.log('hour_minute_second',hour_minute_second.split('.')[0]);
    // 处理成为时间戳
    var timestamp = new Date(Date.parse(new_datetime));
    timestamp = timestamp.getTime();
    timestamp = timestamp / 1000;

    // 增加8个小时，北京时间比utc时间多八个时区
    timestamp = timestamp + 8 * 60 * 60;

    // 时间戳转为时间
    var beijing_datetime = new Date(parseInt(timestamp) * 1000)
      .toLocaleString()
      .replace(/年|月/g, "-")
      .replace(/日/g, " ");
    return beijing_datetime;
  }

function formateDate(date) {
    const arr = date.split('T');
    const d = arr[0];
    const darr = d.split('-');

    const t = arr[1];
    const tarr = t.split('.000');
    const marr = tarr[0].split(':');

    const dd =
      parseInt(darr[0]) +
      '-' +
      parseInt(darr[1]) +
      '-' +
      parseInt(darr[2]) +
      ' ' +
      parseInt(marr[0]) +
      ':' +
      parseInt(marr[1]) +
      ':' +
      parseInt(marr[2]);
    return dd;
  }
  function timeChange(UTCDateString) {
      if (!UTCDateString) {
        return '-';
      }
      function formatFunc(str) {
        return str > 9 ? str : '0' + str
      }
      var date2 = new Date(UTCDateString);
      console.log('时间', date2)
      var year = date2.getFullYear();
      var mon = formatFunc(date2.getMonth() + 1);
      var day = formatFunc(date2.getDate());
      var hour = date2.getHours();
    //   var noon = hour >= 12 ? 'PM' : 'AM'; // 判断是上午还是下午
    //   hour = hour >= 12 ? hour - 12 : hour; // 12小时制
      hour = formatFunc(hour);
      var min = formatFunc(date2.getMinutes());
      var sec = formatFunc(date2.getSeconds());
      var dateStr = year + '-' + mon + '-' + day + ' ' + hour + ':' + min + ':' + sec;
      return dateStr;
    }
//   console.log(formateDate('2021-04-07T02:00:37.760Z'));
//   console.log(formatUTC('2021-04-07T02:00:37.760Z'));
  console.log(timeChange('2021-04-07T10:00:37.760Z'));
