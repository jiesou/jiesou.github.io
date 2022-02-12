---
title: Lua 不使用 lfs 库获取文件夹大小
tags:
  - Lua
  - 安卓
abbrlink: 522
categories:
  - - 简单技术
date: 2021-09-06 07:24:36
---

Lua 只能获取单个文件大小，且常规获取文件夹属性、大小的方式通常需要 require lfs

许多时候要检测文件夹大小但不能使用 lfs 比如 AndroLua 和基于它的 FusionApp 等

以下代码

```lua
import"java.io.File"--Java 文件接口库
import "android.text.format.Formatter"-- 格式化大小库
function FormatFileSize(size)--格式化文件大小
  return Formatter.formatFileSize(activity, size)
end
function GetFolderSize(path)--计算文件夹大小
  local ls = File(path).listFiles()
  if ls then
    local fileList = luajava.astable( ls )--格式
    Size=0
    for i,v in ipairs(fileList) do--循环遍历文件夹
      if v.isDirectory() then --是目录
        local v\_=tostring(v)..'/'--套娃
        Size=Size+GetFolderSize(v\_)
      else
        Size=Size+File(tostring(v)).length()--获取
      end
    end
  else
    Size=0--空目录大小为0
  end
  return Size
end

--使用示例
print(FormatFileSize(GetFolderSize('/sdcard/Download/')))
```
