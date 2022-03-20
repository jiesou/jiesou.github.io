---
title: 使你的Web站点全局变成黑白
index_img: https://images.weserv.nl/?url=gitlab.com/jiesou/Images/-/raw/main/Markor/2022/03/056-cover_使你的Web站点全局变成黑白.jpg
banner_img: https://images.weserv.nl/?url=gitlab.com/jiesou/Images/-/raw/main/Markor/2022/03/056-cover_使你的Web站点全局变成黑白.jpg
tags:
  - JS
  - 日常
  - 网站
abbrlink: 701
categories:
  - - 这个网站
date: 2021-12-13 10:43:23
---

CSS样式代码：

html {
    filter: grayscale(100%);
}

加上 \<style\> 标签放在页头就能将整个 HTML 包括图片等变成黑白

Wordpress 等可以直接使用主题中的页头脚本等功能（就是你放统计代码的地方）快速应用到整个站点

![主题中设置页头脚本](https://s4.ax1x.com/2021/12/13/oLWfAK.jpg)

如果你需要在部分地方灵活应用黑白状态的话可以使用 Javascript 注入脚本

```js
document.getElementsByTagName("html")\[0\].setAttribute("style","filter:grayscale(100%);");
```
