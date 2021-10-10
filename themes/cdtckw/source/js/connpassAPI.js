function getConnpassEvents() {
  $(".list-group").append(
    '<li class="list-group-item list-group-item-danger"><h2><span class="radius-f-20 v-middle"><img class="icon-l icon-shadow" src="../svg/calendar.svg">イベント情報<img class="icon-l icon-shadow" src="../svg/flag_2.svg");"><span></h2></li>'
  );

  $.ajax({
    type: "GET",
    url: "https://connpass.com/api/v1/event/",
    dataType: "jsonp",
    data: {
      series_id: "4692",
      order: "2",
      count: "3",
    },
    cache: false,
  }).done(function (data, textStatus, jqXHR) {
    let toDate = new Date();
    data.events.forEach((event) => {
      let eventList = '<li class="list-group-item">';
      let startDate = new Date(event.started_at);
      let endDate = new Date(event.ended_at);
      let chkDate = compareDate(toDate, startDate);
      eventList += '<b>';
      // 日程
      eventList += '<h4 class="d-inline">';
      if (0 < chkDate) {
        eventList += '<span class="badge bg-primary">';
      } else {
        eventList += '<span class="badge bg-secondary">';
        eventList += '（終了）';
      }
      eventList += startDate.getFullYear() + '年' + (startDate.getMonth() + 1) + '月' + startDate.getDate() + '日';
      eventList += '</span>';
      eventList += '</h4>';
      // タイトル
      eventList += '<div class="mt-3">';
      eventList += '<h5>' + event.title + '</h5>';
      eventList += '</div>';
      eventList += '<div class="mt-2">' + event.catch + '</div>';
      // 時間
      eventList += '<div class="mt-3">';
      eventList += '<img class="icon-m icon-shadow" src="../svg/clock.svg">';
      
      eventList += startDate.getHours() + ':' + (startDate.getMinutes() < 10 ? '0' + startDate.getMinutes() : startDate.getMinutes());
      eventList += '～';
      eventList += endDate.getHours() + ':' + (endDate.getMinutes() < 10 ? '0' + endDate.getMinutes() : endDate.getMinutes());
      // 開催場所
      eventList += '<img class="icon-m icon-shadow" src="../svg/map.svg">';
      eventList += event.place;
      // アクセス
      eventList += '<img class="icon-m icon-shadow" src="../svg/locator.svg">';
      eventList += event.address;
      eventList += '</div>';
      // 申込状況
      eventList += '<div class="row">';
      eventList += '<div class="col-md-6">';
      eventList += '<img class="icon-m icon-shadow" src="../svg/contact.svg">';
      if (null === event.limit) {
        eventList += '参加方法は詳細を確認してください。';
      } else {
        eventList += '人数: ' + event.accepted + '人 / 最大 ' + event.limit + '人';
        eventList += ' ( 待ち ' + event.waiting + '人 )';
      }
      eventList += '</div>';
      // ボタン
      eventList += '<div class="col-md-6">';
      eventList += '<a class="td-none" href="' + event.event_url + '">';
      eventList += '<div class="d-grid gap-2 mb-2">';
      if (0 < chkDate) {
        eventList += '<button type="button" class="btn btn-success">';
        eventList += '参加申し込みはこちらから';
      } else {
        eventList += '<button type="button" class="btn btn-warning">';
        eventList += '詳細はこちら';
      }
      eventList += '</button>';
      eventList += '</div>';
      eventList += '</a>';
      eventList += '</div>';
      eventList += '</div>';
      eventList += '</b>';
      eventList += '</list>';

      $(".list-group").append(eventList);
    });
  });
};

function compareDate(date1, date2) {
  let result = null;
  let cDate1 = new Date(date1);
  let cDate2 = new Date(date2);

  cDate1.setHours(0);
  cDate1.setMinutes(0);
  cDate1.setSeconds(0);
  cDate2.setHours(0);
  cDate2.setMinutes(0);
  cDate2.setSeconds(0);

  if (cDate1 == cDate2) {
    result = 0;
  }
  if (cDate1 < cDate2) {
    result = 1;
  }
  if (cDate1 > cDate2) {
    result = -1;
  }

  return result;
}
