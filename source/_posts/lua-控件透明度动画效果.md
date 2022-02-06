---
title: Lua 控件透明度动画效果
tags:
  - Lua
  - 安卓
  - 杰出兽安卓APP
  - 程序
id: '668'
categories:
  - - 简单技术
date: 2021-10-12 16:28:01
---

AndroLua 很实用的代码，打包成了函数。可以用在 FusionApp 等 AndroLuaIDE 上

输入控件ID、动画时间、开关状态即可

开关状态为 true 即隐藏，为 nil 或 false 则为显示

例如 alpha(button,250,true) 就是将控件 ID 为 button 的控件通过 250 毫秒的透明度动画隐藏

import "android.animation.ObjectAnimator"

function alpha(id,time,i)
  --透明度动画
  if i then on,off,hide=1,0,8 else on,off,hide=0,1,0 end
  if id.visibility~=hide then
    id.visibility=0
    animation = ObjectAnimator.ofFloat(id, "alpha", {on, off})
    animation.setDuration(tointeger(time))
    animation.start()
    task(tointeger(time),function()
      id.visibility=hide
    end)
  end
end