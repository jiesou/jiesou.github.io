---
title: Lua 格式化 URL 链接
tags:
  - Lua
  - 安卓
abbrlink: 595
categories:
  - - 简单技术
date: 2021-09-12 18:47:20
---

代码：

```lua
function urlFormat(url)
 url=tostring(url)
 if string.sub(url,0,7)=='http://' or tostring(string.sub(url,0,8))=='https://' then
  if string.sub(url,#url,#url+1)=='/' then
   urln=string.sub(url,0,#url-1)
   else
   urln=url
  end
  else
  urln='http://'..url
 end
 return urln
end

--使用示例
print(urlFormat('jiecs.top/'))

--输出 http://jiecs.top
```
