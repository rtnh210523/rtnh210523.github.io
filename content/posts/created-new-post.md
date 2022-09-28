---
title: "如何创建一篇新文章"
date: 2022-09-12T13:10:51+08:00
draft: false
TocOpen: true
summary: 人的大脑倾向于更容易获得的答案，而非更正确的答案。
tags: ["laravel"]
categories: ["测试文章"]
---

#### 第一步
打开vscode，新建一个终端，切换到src下的rtnh210523.github.io

#### 第二步
运行命令新建一篇文章
```bash
hugo new posts/xxxxx.md #xxxx不能是中文
```
#### 第三步
创建好的文章在content的posts目录下，修改draft为false，修改title为文章标题
#### 第四步
编写文章内容，如有没记住的语法，搜索markdown语法

#### 第五步
预览效果，运行以下命令
```
hugo server -D
```
打开浏览器localhost:1313查看预览效果
#### 第五步
停止进程，打包
停止进程：ctrl+c在终端中
打包：hugo -D 
#### 第六步
将生成的public目录改成docs
#### 第七步
上传文件到github
运行命令：
```bash
git add . #将生成的文件放到暂存区
git commit -m "自己要写的东西"
git push #推送,注意有没有推送成功
```