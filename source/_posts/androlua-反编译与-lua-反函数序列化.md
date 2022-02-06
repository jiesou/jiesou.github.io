---
title: AndroLua 反编译与 Lua 反函数序列化
tags:
  - AndroLua
  - Lua
  - 安卓
  - 程序
id: '748'
categories:
  - - 简单技术
date: 2022-01-04 17:15:38
---

使用 Lua 的 string.dump(function \[,strip\]) 可以将一个函数序列化为二进制方式表示的字符串，如果　 strip 为真值， 二进制代码块不携带该函数的调试信息 （局部变量名、行号等等）。你可以使用 loadstring 函数重新调用该序列化后的代码块，但通常无法再获得完整的源代码。AndroLua 默认也是使用此种方式“加密”代码的

本文可以在纯安卓环境下反序列化 Lua 代码（也是对 AndroLua 应用的反编译）

需要先下载 [Lua 反序列化工具包](http://ctpan.jiecs.top/f/32856022-532962471-147103)（包含 wine 运行环境，文件较大）

先安装工具包内的 ExaGear ED302\_3.0.2.apk（ExaGear 能在安卓环境下运行 exe，需要存储权限）点击侧滑栏“环境管理”点击右上角的 + 新建一个环境（wine 环境）

[![](https://s4.ax1x.com/2022/01/04/TLrZQg.jpg)](https://s4.ax1x.com/2022/01/04/TLrZQg.jpg)

使用文件管理器打开 /sdcard（内部存储根目录）/ExaGear/ 文件夹，将工具包内 ExaGear 文件夹中的全部内容复制过去

[![](https://s4.ax1x.com/2022/01/04/TLyVbj.jpg)](https://s4.ax1x.com/2022/01/04/TLyVbj.jpg)

然后将你需要反序列化的 lua 文件放到 src 文件夹下

[![](https://s4.ax1x.com/2022/01/04/TLcEAs.jpg)](https://s4.ax1x.com/2022/01/04/TLcEAs.jpg)

本工具包已经内置了一个测试文件

返回 ExaGear 应用，启动刚才创建的环境

[![](https://s4.ax1x.com/2022/01/04/TLcVNn.jpg)](https://s4.ax1x.com/2022/01/04/TLcVNn.jpg)

等待环境启动，双击打开 LuaTool.exe

[![](https://s4.ax1x.com/2022/01/04/TLcn3V.jpg)](https://s4.ax1x.com/2022/01/04/TLcn3V.jpg)

可以双指手势缩放

弹出一个批处理窗口后会闪退，是正常现象

查看 /sdcard/ExaGear/dst/ 文件夹，已经创建了与 src 文件夹同名的一个操作码文件，此时已经可以看见部分代码内容

[![](https://s4.ax1x.com/2022/01/04/TLcucT.jpg)](https://s4.ax1x.com/2022/01/04/TLcucT.jpg)

现在安装工具包中的 TDecompile\_1.3.apk（可以将操作码处理为可读的代码）点击右下角 + 选择文件

[![](https://s4.ax1x.com/2022/01/04/TLcQuF.jpg)](https://s4.ax1x.com/2022/01/04/TLcQuF.jpg)

选择刚才的操作码文件

[![](https://s4.ax1x.com/2022/01/04/TLcKjU.jpg)](https://s4.ax1x.com/2022/01/04/TLcKjU.jpg)

会提示“该脚本可能不是合法的的lua52脚本，是否继续？”点击“继续”即可

[![](https://s4.ax1x.com/2022/01/04/TLc1HJ.jpg)](https://s4.ax1x.com/2022/01/04/TLc1HJ.jpg)

默认会选中全部指令，点击右下角“反编译”即可

[![](https://s4.ax1x.com/2022/01/04/TLc8E9.jpg)](https://s4.ax1x.com/2022/01/04/TLc8E9.jpg)

此时 /sdcard/ExaGear/dst/ 文件夹下，可以看到 \[反\]test.lua 代码文件，已经基本可读

[![](https://s4.ax1x.com/2022/01/04/TLcGNR.jpg)](https://s4.ax1x.com/2022/01/04/TLcGNR.jpg)

通常除了局部变量名、Context以及注释，大部分代码都有着极高的可读性，基本可以直接运行。可读性与源代码相关，如果源代码使用了大量非 ASCII 变量、函数名、布局编写不规范等则可能需要一定程度的修复