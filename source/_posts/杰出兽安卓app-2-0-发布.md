---
title: 杰出兽安卓APP 2.0 发布
tags:
  - Lua
  - 安卓
  - 杰出兽安卓APP
  - 程序
abbrlink: 710
categories:
  - - 这个网站
date: 2021-12-15 17:21:47
---

杰出兽安卓APP 2.0 终于正式发布了，历经约 6,48~,~~~ 秒的开发，杰出兽安卓APP现以全新的面貌重新展现在大家面前

> 约 75 天

本次更新使用基于 AndroLua\_pro 的 FusionApp 2.0完全重构所有代码。并结合我自己反编译操作 FusionApp 本体所带来的一些特性，带来了以下特别的内容更新

## 完全支持 arm64-v8a（64 位）

随着 arm-v9 将至，最新的骁龙 8 Gen1 中 X2 超大核已停止对 armeabi-v7a（32位）的支持，并将在 2023 年完全停止支持运行 armeabi-v7 应用，我们也终于支持了 arm64-v8a。由于 FusionApp 至今仍不支持 arm64-v8a ，我将自行重新编译的支持 arm64-v8a 的 AndroLua lib 支持库自行反编译至于 FusionApp 内

## 弃用腾讯 TBS（X5）浏览服务内核

由于此前 FusionApp 1.0 时的自身缺陷，我不得不使用修改后的 X5 内核，而现在的 FusionApp 2.0 已没有必要使用 X5 内核了。我们现在使用 Android 自带的 WebView 内核，不仅有着强大的性能与安全性，还能极大的节约用户的存储空间，不必为复杂的兼容性等问题困扰

## 网页中的“使用杰出兽安卓APP阅读”

现在在每篇文章最后的分享按钮处，你可以看到增加了一项“使用杰出兽安卓APP阅读”的选项。由于 FusionApp 2.0 并不支持更改 Manifest，我同样自行反编译应用文件。为了将 WelcomeActivity 的 Scheme 参数传递至 FusionActivity，我利用 Smali 反编译修改了 FusionApp 的 DEX 内容

## 系统深色模式跟随支持

现在，当你打开系统的深色模式后打开应用，你会看到应用及内容网页完美的适配了深色模式。这受益于 FusionApp 2.0 强大的主题编辑功能，结合配置恰当的 MaterialColor 与规范的博客 MDx 主题等，实现了跟随系统设置的深色模式

## 更多新 UI 与新功能

完全重写重构了旧有的全部代码，带来了全新布局样式 UI以及更多新功能。详情可以查看[之前的预览](https://www.jiecs.top/archives/695)（预览图片与当前实际内容略有差别）

## 如何下载更新

直接使用 1.0 的应用内更新即可直接下载，或点击[此处](https://www.jiecs.top/app)
