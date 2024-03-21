// sp ヘッダーボタン
$(".header--btn").on("click", function () {
  $(".header").toggleClass("open");
});

//背景
const mvVideo = document.querySelector(".common--bg__loop--mv");
mvVideo
  .play()
  .then(() => {
    mvVideo.pause();

    setTimeout(function () {
      mvVideo.play();
      if (DEVICE.isPc) {
        document.querySelector(".common--bg__loop--mv.sp-none").classList.add("js-show");
      } else if (DEVICE.isSp) {
        document.querySelector(".common--bg__loop--mv.pc-none").classList.add("js-show");
      }
      document.querySelector(".common--bg__loop--thumb").classList.remove("js-show");
    }, 50);
  })
  .catch((error) => {
    $(".common--bg__loop--thumb").addClass("js-show");
  });

// スムーススクロール
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
});

// ボタンスクロール連動
$(window).on("scroll", function () {
  var $toTopButton = $(".header--btn,.common--top");
  var scrollTop = $(this).scrollTop();
  var windowHeight = $(this).height();
  if (scrollTop >= windowHeight - 600) {
    $toTopButton.removeClass("off");
  } else {
    $toTopButton.addClass("off");
  }
});

// カレント表示
$(window).on("load", function () {
  var now_position = $(".header--nav").data("now");
  $(".header--nav__link").each(function (index, element) {
    var link_position = $(this).data("current");
    if (now_position == link_position) {
      $(this).addClass("on");
    }
  });
});

// play sp 開閉
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
      $(this).addClass("current")
    }
  });
})

// rest api
var request = new XMLHttpRequest();

request.open('GET', 'https://performai.evilleaker.com/wp-json/thistheme/v1/articlesRest', true);
request.responseType = 'json';

request.onload = function () {
  var data = this.response;
  var news_list_length = Math.min(data.length, 3)
  for (let i = 0; i < news_list_length; i++) {
    var element = data[i];
    var html = `
<a href="${element["permalink"]}" class="top--news__box">
<div class="top--news__box--inner">
<p class="top--news__date"><span>${element.date}</span>UP</p>
<p class="top--news__title"><span class="title">${element.title}</span></p>
<div class="top--news__thumb"><img src="${element.thumbnail}" alt=""></div>
</div>
</a>
`
    $("#top_news").append(html);
  }
};

request.send();