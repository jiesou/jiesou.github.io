---
title: RVM 在中国的安装
tags:
  - 日常
  - 程序
id: '816'
categories:
  - - 动态
date: 2022-02-06 12:34:28
---

CentOS 7 服务器要用到 Rush，就装 [RVM](http://rvm.io)

按道理安装应按很简单的，就两行命令  
但输进命令行还是一堆问题，什么“curl: (35) Encountered end of file”巴拉拉的，反正是网络问题

折腾了一天，终于在 Github 找到了 [Amberwudi/my\_rvm\_installer](https://github.com/Amberwudi/my_rvm_installer)

\[root@ ~\]# curl -sSL http://qiniu.forqian.cn/rvm-installer.txt  bash -s stable
Downloading http://qiniu.forqian.cn/blue\_dream\_tools/my\_rvm\_installer/1.29.12.tar.gz
Downloading http://qiniu.forqian.cn/blue\_dream\_tools/my\_rvm\_installer/1.29.12.tar.gz.asc
gpg: Signature made Sat 16 Jan 2021 02:46:22 AM CST using RSA key ID 39499BDB
gpg: Good signature from "Piotr Kuczynski <piotr.kuczynski@gmail.com>"
gpg: WARNING: This key is not certified with a trusted signature!
gpg:          There is no indication that the signature belongs to the owner.
Primary key fingerprint: 7D2B AF1C F37B 13E2 069D  6956 105B D0E7 3949 9BDB
GPG verified '/usr/local/rvm/archives/rvm-1.29.12.tgz'
Upgrading the RVM installation in /usr/local/rvm/
Upgrade of RVM in /usr/local/rvm/ is complete.
  \* Please do NOT forget to add your users to the rvm group.
     The installer no longer auto-adds root or users to the rvm group. Admins must do this.
     Also, please note that group memberships are ONLY evaluated at login time.
     This means that users must log out then back in before group membership takes effect!

Thanks for installing RVM 🙏
Please consider donating to our open collective to help us maintain RVM.

👉  Donate: https://opencollective.com/rvm/donate

感谢这位 [Amberwudi](https://github.com/Amberwudi) ！！！