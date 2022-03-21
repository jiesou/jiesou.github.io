/* 首页等字完全居中 */
if (window.location.pathname.match(/^(\/|\/(archives|categories|tags|projects|links)\/)$/)) {
    document.querySelector(".banner-text > div.h2").setAttribute("style", "margin-bottom: -1em !important;");
}

/* 评论链接锚点跳转 https://github.com/walinejs/waline/issues/80#issuecomment-748940710 */
if(window.location.hash){
    var checkExist = setInterval(function() {
        if ($(window.location.hash).length) {
            $("html, body").animate({scrollTop: $(window.location.hash).offset().top-90}, 700);
            clearInterval(checkExist);
        } else {
            window.scrollTo(0,document.documentElement.scrollHeight);
        }
    }, 100);
}

/* 识别评论中的 @ 在当前页打开 */
var removeTarget = setInterval(function() {
    var links = document.querySelectorAll("div.vcontent > p > a[href^=\"#\"]");
    if (links.length) {
      Array.from(links).forEach(link => link.removeAttribute("target"));
      clearInterval(removeTarget);
    }
  }, 100);