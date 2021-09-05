$(function () {
  $.ajax({
    type: "GET",
    url: "https://connpass.com/api/v1/event/",
    dataType: "jsonp",
    data: {
      series_id: "4692",
      order: "2",
      // count: "2",
    },
    cache: false,
  })
    .done(function (data, textStatus, jqXHR) {
      console.log(data);
    //   var count = 0;
    //   var toDate = moment().format("YYYYMMDD");

    //   data.events.forEach((element) => {
    //     if (1 == count) {
    //       // 要素を表示
    //       $("#first-card").show();

    //       // イベント開催日時 (ISO-8601形式)
    //       var eventDate = data.events[count].started_at;
    //       var eventEnd = data.events[count].ended_at;
    //       var evDate =
    //         eventDate.substr(0, 4) +
    //         eventDate.substr(5, 2) +
    //         eventDate.substr(8, 2);

    //       // connpass.com 上のURL
    //       if (evDate <= toDate) {
    //         $("#to_enterBtn").text("終了しました");
    //         $("#to_eventLink").prop("disabled", true);
    //         //$('#to-table').remove();
    //       } else {
    //         var eventUrl = data.events[count].event_url;
    //         $("#to_eventLink").attr(
    //           "onClick",
    //           "location.href='" + eventUrl + "'"
    //         );
    //         $("#to_enterBtn").text("参加お申込みはこちら");
    //       }

    //       // タイトル
    //       var eventTitle = data.events[count].title;
    //       $("#to_eventTitle").text(
    //         eventTitle.substring(0, eventTitle.indexOf("回", 0) + 1)
    //       );

    //       // 日時設定
    //       var eventYear = Number(eventDate.substr(0, 4));
    //       var eventMonth = Number(eventDate.substr(5, 2));
    //       var eventDay = Number(eventDate.substr(8, 2));
    //       $("#to_eventYear").text(eventYear + "年");
    //       $("#to_eventDate").text(eventMonth + "月" + eventDay + "日");
    //       var eventShour = Number(eventDate.substr(11, 2));
    //       var eventSmin = Number(eventDate.substr(14, 2));
    //       $("#to_eventStime").text(eventShour + "時" + eventSmin + "分");
    //       var eventEhour = Number(eventEnd.substr(11, 2));
    //       var eventEmin = Number(eventEnd.substr(14, 2));
    //       $("#to_eventEtime").text(eventEhour + "時" + eventEmin + "分");

    //       // 会場
    //       var eventPlace = data.events[count].place;
    //       $("#to_eventPlace").text(eventPlace);
    //       //var eventAddress = data.events[count].address;
    //       //$('#eventAddress').text(eventAddress);
    //       //$('#eventMap').attr('src', "http://maps.google.co.jp/maps?&output=embed&q=" + eventPlace + "&z=18");

    //       // 募集状況
    //       var eventLimit = data.events[count].limit;
    //       var eventAccepted = data.events[count].accepted;
    //       var eventWaiting = data.events[count].waiting;
    //       $("#to_eventLimit").text(eventLimit);
    //       $("#to_eventAccepted").text(eventAccepted);
    //       $("#to_eventWaiting").text(eventWaiting);
    //     } else if (0 == count) {
    //       // 要素の表示
    //       $("#second-card").show();

    //       // イベント開催日時 (ISO-8601形式)
    //       var eventDate = data.events[count].started_at;
    //       var eventEnd = data.events[count].ended_at;
    //       var evDate =
    //         eventDate.substr(0, 4) +
    //         eventDate.substr(5, 2) +
    //         eventDate.substr(8, 2);

    //       // connpass.com 上のURL
    //       if (evDate <= toDate) {
    //         $("#nx_enterBtn").text("終了しました");
    //       } else {
    //         var eventUrl = data.events[count].event_url;
    //         $("#nx_eventLink").attr(
    //           "onClick",
    //           "location.href='" + eventUrl + "'"
    //         );
    //         $("#nx_enterBtn").text("参加お申込みはこちら");
    //       }

    //       // タイトル
    //       var eventTitle = data.events[count].title;
    //       $("#nx_eventTitle").text(
    //         eventTitle.substring(0, eventTitle.indexOf("回", 0) + 1)
    //       );

    //       // 日時設定
    //       var eventYear = Number(eventDate.substr(0, 4));
    //       var eventMonth = Number(eventDate.substr(5, 2));
    //       var eventDay = Number(eventDate.substr(8, 2));
    //       $("#nx_eventYear").text(eventYear + "年");
    //       $("#nx_eventDate").text(eventMonth + "月" + eventDay + "日");
    //       var eventShour = Number(eventDate.substr(11, 2));
    //       var eventSmin = Number(eventDate.substr(14, 2));
    //       $("#nx_eventStime").text(eventShour + "時" + eventSmin + "分");
    //       var eventEhour = Number(eventEnd.substr(11, 2));
    //       var eventEmin = Number(eventEnd.substr(14, 2));
    //       $("#nx_eventEtime").text(eventEhour + "時" + eventEmin + "分");

    //       // 会場
    //       var eventPlace = data.events[count].place;
    //       $("#nx_eventPlace").text(eventPlace);
    //       //var eventAddress = data.events[count].address;
    //       //$('#eventAddress').text(eventAddress);
    //       //$('#eventMap').attr('src', "http://maps.google.co.jp/maps?&output=embed&q=" + eventPlace + "&z=18");

    //       // 募集状況
    //       var eventLimit = data.events[count].limit;
    //       var eventAccepted = data.events[count].accepted;
    //       var eventWaiting = data.events[count].waiting;
    //       $("#nx_eventLimit").text(eventLimit);
    //       $("#nx_eventAccepted").text(eventAccepted);
    //       $("#nx_eventWaiting").text(eventWaiting);
    //     }
    //     count = 1 + count;
    //   });
    //   if (0 < count) {
    //     $("#infomation").hide();
    //   } else {
    //     $("#to-table").remove();
    //     $("#nx-table").remove();
    //   }
    // })
    // .fail(function (jqXHR, textStatus, errorThrown) {
    //   $("#eventLink").attr(
    //     "onClick",
    //     "location.href='https://coderdojo-tachikawa.connpass.com/'"
    //   );
    });
});
