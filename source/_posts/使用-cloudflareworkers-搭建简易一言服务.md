---
title: 使用 CloudflareWorkers 搭建简易一言服务
tags:
  - Cloudflare
  - 程序
  - 网站
abbrlink: 686
categories:
  - - 简单技术
date: 2021-11-12 16:41:26
---

[CloudflareWorkers](https://workers.cloudflare.com/) 是Cloudflare 推出的一项无服务器代码运行服务，国内一般叫边缘计算、云函数之类的。

CloudflareWorkers 主要支持 JavaScript、Rust、C、C++（泛指）可以部署一些简单的服务。官方给出的应用场景有根据用户 Header 自动修改域名（**cn**.google.com）、控制对于不同请求的不同 Cloudflare 配置之类的

CloudflareWorkers 每天的前 10 万个请求是免费的，完全够一般使用了，而且部署速度什么的也很快，用在一些简单的服务非常方便

搭建一言服务的话我的思路是用 CloudflarePages 之类的静态托管服务，以 JSON 保存下所有的一言内容。然后 CloudflareWorkers 监听到 HTTP 请求后从 Pages 获取所有的一言内容，解析 JSON 为 JavaScript 对象，随机选择并输出

其实 CloudflareWorkers 还有一个叫 WorkersKV 的东西，可以在 Workers 做永久存储。但考虑到以后想添加一言内容可能不是很方便，还是把所有的一言内容托管到 CloudflarePages 吧

CloudflareWorkers 有一个在线 IDE，操作很方便。以下是代码，只用把新创建 Workers 自带的代码全换成这个就行了

> 怎么创建项目之类的问题自己百度

```js
addEventListener("fetch", (event) => {
  event.respondWith(
    handleRequest(event.request).catch(
      (err) => new Response(err.stack, { status: 500 })
    )
  );
});


/\*\*
 \* Example someHost is set up to take in a JSON request
 \* Replace url with the host you wish to send requests to
 \* @param {string} someHost the host to send the request to
 \* @param {string} url the URL to send the request to
 \*/

const url = "https://xx.pages.dev/yiyan.json"
// 这里是你的所有的一言内容 JSON 网页链接 ^

async function getHitokoto(response) {
  const { headers } = response
  const contentType = headers.get("content-type")  ""
  if (contentType.includes("application/json")) {
    var web=response.text()
    var json = JSON.parse(await web)
    return JSON.stringify(json\[Math.floor(Math.random()\*(json.length-0+1)+0)\])
    // 主要代码就只有上面这行 ^
  }
}

async function handleRequest() {
  const init = {
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
  }
  const response = await fetch(url, init)
  const results = await getHitokoto(response)
  return new Response(results, init)
}

addEventListener("fetch", event => {
  return event.respondWith(handleRequest())
})
```
