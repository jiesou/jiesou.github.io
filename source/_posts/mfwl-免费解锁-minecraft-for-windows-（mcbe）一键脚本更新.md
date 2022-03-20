---
index_img: https://images.weserv.nl/?url=gitlab.com/jiesou/Images/-/raw/main/Markor/2022/03/253-cover-MFWL免费解锁-Minecraft-for-Windows-（MCBE）一键脚本更新.png
banner_img: https://images.weserv.nl/?url=gitlab.com/jiesou/Images/-/raw/main/Markor/2022/03/253-cover-MFWL免费解锁-Minecraft-for-Windows-（MCBE）一键脚本更新.png
title: '[MFWL]免费解锁 Minecraft for Windows （MCBE）一键脚本更新'
tags:
  - 程序
  - Minecraft
  - Windows
categories:
  - 简单技术
comments: true
abbrlink: 764
date: 2022-01-26 11:54:54
updated: 2022-01-26 11:54:54
---

在[很久之前](https://www.jiecs.top/archives/42)我其实已经做了一个免费解锁 Minecraft for Windows 的一键脚本，其实比你现在 Github 等地方搜到的脚本都要早，之前是 2021-07-11

时隔半年现在来更新一下这个脚本  
也是看到了[这个评论](https://www.jiecs.top/archives/42#comment-68)才想起我还有这个东西


## 下载


[城通网盘](http://ctpan.jiecs.top/f/32856022-540848979-692448) [文叔叔](https://wss1.cn/f/7hl47fat6vi) [Github](https://github.com/jiesou/MFWL-Minecraft-For-Windows-Unlock-Launcher)（1.85 MB 三个脚本 附带图标和全部需要的资源）

就是个简单的 BAT 脚本，运行很快，文件也很小，比那些 EXE 高的不知道哪里去了

千万不要在压缩包中打开脚本并解锁，需要完整解压后再打开。否则会损坏系统文件！！！  
千万不要在临时目录下打开脚本并解锁。会损坏系统文件！！！  
千万不要删掉、移走目录下的资源文件（bRes）后解锁，会损坏系统文件！！！

## 如何使用

极其详细的视频教程：[哔哩哔哩](https://b23.tv/av678704109)

文件结构和[之前](https://www.jiecs.top/archives/42?_pro=v2:26:0.545:0.457)其实差不多  
要先安装 Minecraft for Windows 的试玩版  
操作也很简单，打开 Unlock.bat 照着说明就行。但千万要把每段说明都看清楚并理解，否则可能会破环系统文件等

## 更新内容

### 启动时的环境检测

其实就是检测管理员权限有没有开，还有 Minecraft 是不是正在运行（在运行的时候不能操作解锁）

![检测管理员权限](https://s4.ax1x.com/2022/01/26/7OFTXT.png)

### 双解锁方案

现在常规的解锁 Minecraft for Windows 主要有这么两种方法

（其实这两种方法都是这个 [M Centres](https://www.youtube.com/channel/UCgaludRTCVuByNy6Gx7AknQ) 大佬发布的）

**替换系统 DLL 文件 - [Youtube](https://youtu.be/im70pl_1Rpg)**

*   可能对系统版本有要求，最好大于等于 Windows10 1909（19H2/KB5004926/18362.446）
*   权限要求比较高

**添加注册表并停止服务 - [Youtube](https://youtu.be/sPGVLC5GWGI)**

*   系统最好不要是精简优化版，停止服务可能影响较大
*   无法在游戏中打开充值 Minecoins 跳转窗口
*   解锁后 Microsoft Store 下载不了程序，除非取消解锁（PlanB UnlockLauncher.bat 就是仅在运行 MC 时解锁，退出 MC 就恢复）
*   每次启动游戏需要手动结束 Runtime Broker.exe 进程，或者用专门的启动器（就是 PlanB Launcher.bat）

在 Unlock.bat 里，这两个方案都集成了，对应的是方案 A 和 B。还会根据系统环境自动建议适合的方案

![自动建议适合的取消解锁方案](https://s4.ax1x.com/2022/01/26/7OkauT.png)

**方案 A（替换 DLL）脚本的具体操作是这样**

1.  备份 DLL 现在的权限信息放到临时文件（.temp）
2.  获取文件权限（先得到所有者再授予完全控制）
3.  操作 DLL 文件（比如重命名备份，然后复制进去替换
4.  从临时文件里恢复之前的权限信息（但所有者没法恢复回去，你可以自己恢复回去给”NT SERVICE\\TrustedInstaller“，当然不恢复也没事）