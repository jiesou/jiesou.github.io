/* 首页等字完全居中 */
let header_inner=document.querySelector(".header-inner");
if (header_inner) {
    if (header_inner.style.height=='30vh') {
        document.querySelector(".banner-text > div.h2").setAttribute("style", "margin-bottom: -1em !important;");
    }
}