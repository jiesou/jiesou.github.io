---
title: 关于在 FusionApp 上使用 WebViewClient 对 WebView 的加载监听的具体操作
tags:
  - Android
  - Lua
abbrlink: 680
categories:
  - - 简单技术
date: 2021-11-03 16:00:15
---

WebView 可以使用 WebViewClient 方法对页面即将加载、加载完成、遇到各种错误等情况做监听。但在 FusionApp 或相关 AndroLua IDE 上，无法直接监听

此处 FusionApp 版本为 2.0-beta8.7.2

主要是需要使用 luajava.override 方法对 WebViewClient 做转接层，具体代码实现如下

import "android.webkit.WebViewClient"
--需要先使用 UiManager 获取 webView 的控件 ID，以下控件 ID 即为“webView”

webView.setWebViewClient(luajava.override(WebViewClient,{
  onReceivedError=function(a,view, webResourceRequest,webResourceError)
    --连接错误事件

  end,
  onReceivedHttpError=function(a,view, webResourceRequest,webResourceError)
    --HTTP错误事件

  end,
  onReceivedSslError=function(a,view,sslErrorHandler,sslError)
    --SSL错误事件

  end,
  onPageFinished=function(a,view,url)
    --页面加载结束事件

  end,
  shouldOverrideUrlLoading=function(a,view,webResourceRequest)
    --页面即将加载事件

    return false
  end,
  onPageStarted=function(a,view,url,favicon)
    --页面开始加载事件

  end,
}))

有几点需要注意：

1. 可以根据自己的使用需求添加监听事件，还能添加如资源加载、页面渲染等事件
2. onReceivedError、shouldOverrideUrlLoading 等事件返回的 webResourceRequest 可以获取该请求信息。如 onReceivedError 中可以使用 webResourceRequest.getUrl() 获取URL链接，需要注意的是，这里是不是当前 webView 的URL，而是“错误的URL”例如页面中的一张图片加载错误则返回错误的图片链接
3. onReceivedError 等事件返回的 webResourceError 可以获取该请求的错误信息。如使用 webResourceError.getErrorCode() 获取错误码，错误码与 WebViewClient 的常量值对应。onReceivedSslError 中应使用 sslError.getPrimaryError() 获取 SSL 错误原因
4. 页面上的任何错误事件都会返回 onReceivedError 和相关事件，如果你要对错误事件做处理需要先用上文方法获取错误的链接进行匹配。否则即使页面中的任意一张小图片发生错误，甚至 GoogleAnalytics 等加载失败，都会报错
5. shouldOverrideUrlLoading 即将加载事件可以通过返回 true 来阻止本次加载 retrue true
6. 使用 luajava.override 进行转接，每个返回值前方会返回一个父 class 的信息，即上代码中的“a”如不需要可以使用下划线虚变量
