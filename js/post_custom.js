/* 评论 */
Waline.init({
  el: "#comments",
  serverURL: "https://waline.jiecs.top",
  locale: {
    placeholder: "说点什么吧...",
  },
  noCopyright: true,
  noRss: true,
  requiredMeta: [],
  dark: 'html[data-user-color-scheme="dark"]',
  emoji: [
    "https://unpkg.jiecs.top/@waline/emojis@1.1.0/tieba",
    "https://unpkg.jiecs.top/@waline/emojis@1.1.0/alus",
    "https://unpkg.jiecs.top/@waline/emojis@1.1.0/bilibili",
    "https://unpkg.jiecs.top/@waline/emojis@1.1.0/qq",
    "https://unpkg.jiecs.top/@waline/emojis@1.1.0/weibo",
  ],
  login: "enable",
  imageUploader: function (file) {
    var confirmed = confirm("图片将上传到 img.ink，可供任何人浏览、编辑、删除，请勿上传重要信息。也可填写自己的图片链接");
    if (!confirmed) return "Enter your image link here"
    const formData = new FormData();
    formData.append("image", file);
    return fetch("https://img.ink/api/upload", {
      method: "POST",
      headers: {
          "Token": "a55530f768745933f5cc962a19200cb6"
      },
      body: formData
    })
      .then((resp) => resp.json())
      .then((resp) => resp.data.url);
  },
});

/* ”昵称“输入框的 placeholder */
document.addEventListener("DOMContentLoaded", function() {
  const nickInput = document.querySelector('#wl-nick');
  if (nickInput) {
    nickInput.setAttribute('placeholder', '匿名');
  }
});


/* 评论链接锚点跳转 https://github.com/walinejs/waline/issues/80#issuecomment-748940710 */
if (window.location.hash) {
  const checkExist = setInterval(function () {
    if ($(window.location.hash).length) {
      $("html, body").animate(
        { scrollTop: $(window.location.hash).offset().top - 10 },
        700
      );
      clearInterval(checkExist);
    // } else {
    //   window.scrollTo(0, document.documentElement.scrollHeight);
    }
  }, 100);
}

/* 识别评论中的 @ 在当前页打开 */
const removeTarget = setInterval(function () {
  const links = document.querySelectorAll('div.vcontent > p > a[href^="#"]');
  if (links.length) {
    Array.from(links).forEach((link) => link.removeAttribute("target"));
    clearInterval(removeTarget);
  }
}, 100);

/* 评论样式
let walineStyle = setInterval(function () {
  let waline_edit = document.querySelector("#waline-edit");
  if (waline_edit) {
    //表情
    let emoji = document.querySelector(".vactions > button[title=表情] > svg");
    emoji.setAttribute("viewBox", "0 0 24 24");
    emoji.setAttribute("width", "23");
    emoji
      .querySelector("path")
      .setAttribute(
        "d",
        "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"
      );
    //图片
    let img = document.querySelector("label[for=waline-image-upload] > svg");
    img.setAttribute("viewBox", "0 0 24 24");
    img.setAttribute("width", "23");
    img
      .querySelector("path")
      .setAttribute(
        "d",
        "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"
      );
    img.querySelector("path:nth-child(2)").remove();
    let preview = document.querySelector(
      ".vactions > button[title=预览] > svg"
    );
    preview.setAttribute("viewBox", "0 0 24 24");
    preview.setAttribute("width", "23");
    preview
      .querySelector("path")
      .setAttribute(
        "d",
        "M19,3H5C3.89,3,3,3.9,3,5v14c0,1.1,0.89,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.11,3,19,3z M19,19H5V7h14V19z M12,10.5 c1.84,0,3.48,0.96,4.34,2.5c-0.86,1.54-2.5,2.5-4.34,2.5S8.52,14.54,7.66,13C8.52,11.46,10.16,10.5,12,10.5 M12,9 c-2.73,0-5.06,1.66-6,4c0.94,2.34,3.27,4,6,4s5.06-1.66,6-4C17.06,10.66,14.73,9,12,9L12,9z M12,14.5c-0.83,0-1.5-0.67-1.5-1.5 s0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5S12.83,14.5,12,14.5z"
      );
    preview.querySelector("path:nth-child(2)").remove();
    //Markdown
    let markdown = document.querySelector("div.vactions > a");
    let vinfo = document.querySelector(".vinfo");
    document.querySelector(".vfooter").insertBefore(markdown, vinfo);
    //编辑
    waline_edit.setAttribute(
      "placeholder",
      "说点什么...\n可匿名评论\n回复会电邮通知你\n使用 Akismet 自动过滤垃圾消息"
    );
    document.querySelector("label[for='mail']").innerHTML = "电邮";
    clearInterval(walineStyle);
  }
}, 100);
*/
