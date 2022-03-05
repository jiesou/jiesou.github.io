/* 优化间距 */
var shuoshuoMargin = setInterval(function() {
    var lazy = document.querySelector("#lazy");
    if (lazy && lazy.style.display === "none") {
      var artitalk_main = document.querySelector("#artitalk_main").style;
      artitalk_main.setProperty("margin-top","0px");
      artitalk_main.setProperty("margin-bottom","0px");
      clearInterval(shuoshuoMargin);
    }
  }, 100);