(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

// sp ヘッダーボタン
$(".header--btn").on("click", function () {
  $(".header").toggleClass("open");
}); //背景

$(function () {
  setInterval(function () {
    $('.common--bg__layer2--item').toggleClass('active');
  }, 5000);
}); // スムーススクロール

$('a[href^="#"]').click(function () {
  var speed = 500;
  var href = $(this).attr("href");
  var target = $(href == "#" || href == "" ? "html" : href);
  var position = target.offset().top;

  if ($(this).hasClass("smooth")) {
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
  }

  return false;
}); // ボタンスクロール連動

$(window).on("scroll", function () {
  var $toTopButton = $(".header--btn,.common--top");
  var scrollTop = $(this).scrollTop();
  var windowHeight = $(this).height();

  if (scrollTop >= windowHeight - 600) {
    $toTopButton.removeClass("off");
  } else {
    $toTopButton.addClass("off");
  }
}); // カレント表示

$(window).on("load", function () {
  var now_position = $(".header--nav").data("now");
  $(".header--nav__link").each(function (index, element) {
    var link_position = $(this).data("current");

    if (now_position == link_position) {
      $(this).addClass("on");
    }
  });
}); // play sp 開閉

if (DEVICE.isSp) {
  $(".snav--nav__list").hide();
}

$(".snav--nav__current").on("click", function () {
  $(this).stop().toggleClass("open");
  $(".snav--nav__list").stop().slideToggle();
});
$(window).on("load", function () {
  var now = $('.common--h3').data("current");
  $(".snav--nav__item").each(function (index, element) {
    // element == this
    if ($(this).data("current") == now) {
      $(this).addClass("current");
    }
  });
}); // rest api

var request = new XMLHttpRequest();
request.open('GET', 'https://evilleaker.github.io/wp-json/thistheme/v1/articlesRest', true);
request.responseType = 'json';

request.onload = function () {
  var data = this.response;
  var news_list_length = Math.min(data.length, 3);

  for (var i = 0; i < news_list_length; i++) {
    var element = data[i];
    var html = "\n<a href=\"".concat(element["permalink"], "\" class=\"top--news__box\">\n<div class=\"top--news__box--inner\">\n<p class=\"top--news__date\"><span>").concat(element.date, "</span>UP</p>\n<p class=\"top--news__title\"><span class=\"title\">").concat(element.title, "</span></p>\n<div class=\"top--news__thumb\"><img src=\"").concat(element.thumbnail, "\" alt=\"\"></div>\n</div>\n</a>\n");
    $("#top_news").append(html);
  }
};

request.send();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvcHJvamVjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7QUFDQSxDQUFDLENBQUMsY0FBRCxDQUFELENBQWtCLEVBQWxCLENBQXFCLE9BQXJCLEVBQThCLFlBQVk7RUFDeEMsQ0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhLFdBQWIsQ0FBeUIsTUFBekI7QUFDRCxDQUZELEUsQ0FJQTs7QUFDQSxDQUFDLENBQUMsWUFBWTtFQUNaLFdBQVcsQ0FBQyxZQUFZO0lBQ3RCLENBQUMsQ0FBQywyQkFBRCxDQUFELENBQStCLFdBQS9CLENBQTJDLFFBQTNDO0VBQ0QsQ0FGVSxFQUVSLElBRlEsQ0FBWDtBQUdELENBSkEsQ0FBRCxDLENBTUE7O0FBQ0EsQ0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQixLQUFsQixDQUF3QixZQUFZO0VBQ2xDLElBQUksS0FBSyxHQUFHLEdBQVo7RUFDQSxJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVEsSUFBUixDQUFhLE1BQWIsQ0FBWDtFQUNBLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksR0FBUixJQUFlLElBQUksSUFBSSxFQUF2QixHQUE0QixNQUE1QixHQUFxQyxJQUF0QyxDQUFkO0VBQ0EsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQVAsR0FBZ0IsR0FBL0I7O0VBQ0EsSUFBSSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVEsUUFBUixDQUFpQixRQUFqQixDQUFKLEVBQWdDO0lBQzlCLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0IsT0FBaEIsQ0FBd0I7TUFDdEIsU0FBUyxFQUFFO0lBRFcsQ0FBeEIsRUFFRyxLQUZILEVBRVUsT0FGVjtFQUdEOztFQUNELE9BQU8sS0FBUDtBQUNELENBWEQsRSxDQWFBOztBQUNBLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVSxFQUFWLENBQWEs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SUFTQSxDQUFDLENBQUMsV0FBRCxDQUFELENBQWUsTUFBZixDQUFzQixJQUF0QjtFQUNEO0FBQ0YsQ0FoQkQ7O0FBa0JBLE9BQU8sQ0FBQyxJQUFSIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLy8gc3Ag44OY44OD44OA44O844Oc44K/44OzXG4kKFwiLmhlYWRlci0tYnRuXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAkKFwiLmhlYWRlclwiKS50b2dnbGVDbGFzcyhcIm9wZW5cIik7XG59KTtcblxuLy/og4zmma9cbiQoZnVuY3Rpb24gKCkge1xuICBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgJCgnLmNvbW1vbi0tYmdfX2xheWVyMi0taXRlbScpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgfSwgNTAwMCk7XG59KTtcblxuLy8g44K544Og44O844K544K544Kv44Ot44O844OrXG4kKCdhW2hyZWZePVwiI1wiXScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHNwZWVkID0gNTAwO1xuICB2YXIgaHJlZiA9ICQodGhpcykuYXR0cihcImhyZWZcIik7XG4gIHZhciB0YXJnZXQgPSAkKGhyZWYgPT0gXCIjXCIgfHwgaHJlZiA9PSBcIlwiID8gXCJodG1sXCIgOiBocmVmKTtcbiAgdmFyIHBvc2l0aW9uID0gdGFyZ2V0Lm9mZnNldCgpLnRvcDtcbiAgaWYgKCQodGhpcykuaGFzQ2xhc3MoXCJzbW9vdGhcIikpIHtcbiAgICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHtcbiAgICAgIHNjcm9sbFRvcDogcG9zaXRpb25cbiAgICB9LCBzcGVlZCwgXCJzd2luZ1wiKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59KTtcblxuLy8g44Oc44K/44Oz44K544Kv44Ot44O844Or6YCj5YuVXG4kKHdpbmRvdykub24oXCJzY3JvbGxcIiwgZnVuY3Rpb24gKCkge1xuICB2YXIgJHRvVG9wQnV0dG9uID0gJChcIi5oZWFkZXItLWJ0biwuY29tbW9uLS10b3BcIik7XG4gIHZhciBzY3JvbGxUb3AgPSAkKHRoaXMpLnNjcm9sbFRvcCgpO1xuICB2YXIgd2luZG93SGVpZ2h0ID0gJCh0aGlzKS5oZWlnaHQoKTtcbiAgaWYgKHNjcm9sbFRvcCA+PSB3aW5kb3dIZWlnaHQgLSA2MDApIHtcbiAgICAkdG9Ub3BCdXR0b24ucmVtb3ZlQ2xhc3MoXCJvZmZcIik7XG4gIH0gZWxzZSB7XG4gICAgJHRvVG9wQnV0dG9uLmFkZENsYXNzKFwib2ZmXCIpO1xuICB9XG59KTtcblxuLy8g44Kr44Os44Oz44OI6KGo56S6XG4kKHdpbmRvdykub24oXCJsb2FkXCIsIGZ1bmN0aW9uICgpIHtcbiAgdmFyIG5vd19wb3NpdGlvbiA9ICQoXCIuaGVhZGVyLS1uYXZcIikuZGF0YShcIm5vd1wiKTtcbiAgJChcIi5oZWFkZXItLW5hdl9fbGlua1wiKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgZWxlbWVudCkge1xuICAgIHZhciBsaW5rX3Bvc2l0aW9uID0gJCh0aGlzKS5kYXRhKFwiY3VycmVudFwiKTtcbiAgICBpZiAobm93X3Bvc2l0aW9uID09IGxpbmtfcG9zaXRpb24pIHtcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJvblwiKTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbi8vIHBsYXkgc3Ag6ZaL6ZaJXG5pZiAoREVWSUNFLmlzU3ApIHtcbiAgJChcIi5zbmF2LS1uYXZfX2xpc3RcIikuaGlkZSgpO1xufVxuJChcIi5zbmF2LS1uYXZfX2N1cnJlbnRcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICQodGhpcykuc3RvcCgpLnRvZ2dsZUNsYXNzKFwib3BlblwiKTtcbiAgJChcIi5zbmF2LS1uYXZfX2xpc3RcIikuc3RvcCgpLnNsaWRlVG9nZ2xlKCk7XG59KTtcbiQod2luZG93KS5vbihcImxvYWRcIiwgZnVuY3Rpb24gKCkge1xuICB2YXIgbm93ID0gJCgnLmNvbW1vbi0taDMnKS5kYXRhKFwiY3VycmVudFwiKTtcbiAgJChcIi5zbmF2LS1uYXZfX2l0ZW1cIikuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGVsZW1lbnQpIHtcbiAgICAvLyBlbGVtZW50ID09IHRoaXNcbiAgICBpZiAoJCh0aGlzKS5kYXRhKFwiY3VycmVudFwiKSA9PSBub3cpIHtcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJjdXJyZW50XCIpXG4gICAgfVxuICB9KTtcbn0pXG5cbi8vIHJlc3QgYXBpXG52YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG5yZXF1ZXN0Lm9wZW4oJ0dFVCcsICdodHRwczovL2luZm8tY2h1bml0aG0uc2VnYS5jb20vd3AtanNvbi90aGlzdGhlbWUvdjEvYXJ0aWNsZXNSZXN0JywgdHJ1ZSk7XG5yZXF1ZXN0LnJlc3BvbnNlVHlwZSA9ICdqc29uJztcblxucmVxdWVzdC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBkYXRhID0gdGhpcy5yZXNwb25zZTtcbiAgdmFyIG5ld3NfbGlzdF9sZW5ndGggPSBNYXRoLm1pbihkYXRhLmxlbmd0aCwgMylcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdzX2xpc3RfbGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZWxlbWVudCA9IGRhdGFbaV07XG4gICAgdmFyIGh0bWwgPSBgXG48YSBocmVmPVwiJHtlbGVtZW50W1wicGVybWFsaW5rXCJdfVwiIGNsYXNzPVwidG9wLS1uZXdzX19ib3hcIj5cbjxkaXYgY2xhc3M9XCJ0b3AtLW5ld3NfX2JveC0taW5uZXJcIj5cbjxwIGNsYXNzPVwidG9wLS1uZXdzX19kYXRlXCI+PHNwYW4+JHtlbGVtZW50LmRhdGV9PC9zcGFuPlVQPC9wPlxuPHAgY2xhc3M9XCJ0b3AtLW5ld3NfX3RpdGxlXCI+PHNwYW4gY2xhc3M9XCJ0aXRsZVwiPiR7ZWxlbWVudC50aXRsZX08L3NwYW4+PC9wPlxuPGRpdiBjbGFzcz1cInRvcC0tbmV3c19fdGh1bWJcIj48aW1nIHNyYz1cIiR7ZWxlbWVudC50aHVtYm5haWx9XCIgYWx0PVwiXCI+PC9kaXY+XG48L2Rpdj5cbjwvYT5cbmBcbiAgICAkKFwiI3RvcF9uZXdzXCIpLmFwcGVuZChodG1sKTtcbiAgfVxufTtcblxucmVxdWVzdC5zZW5kKCk7Il19
