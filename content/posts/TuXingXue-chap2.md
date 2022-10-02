---
title: "图形学实验3"
date: 2022-10-02T17:38:17+08:00
draft: false
TocOpen: true
summary: 人的大脑倾向于更容易获得的答案，而非更正确的答案。
tags: ["laravel"]
categories: ["图形学"]
---
# 实验内容：
## 根据要求使用webgl绘画,共五个任务以下为具体内容

#### 任务a. 要求在网页上添加交互式控件，输入剖分的层次(0-7)，绘制对应图案。如输入剖分层次分别为1和4，分别绘制效果如下图，其中颜色可任意选择：
> 层次为1效果 [Demo1-1](https://rtnh210523.github.io/rtnh210523/triangle/demos/chap3-demo-1.html)


> 层次为4效果 [Demo1-2](https://rtnh210523.github.io/rtnh210523/triangle/demos/chap3-demo-2.html)

#### 任务b. 绘制三维效果的Sierpinski Gasket, 要求同任务a，也可与任务a集成在同一个界面中。如输入剖分层次分别为1和4，得到效果如下：
> 层次为1效果 [Demo2-1](https://rtnh210523.github.io/rtnh210523/triangle/demos/chap3-demo-3.html)


> 层次为4效果 [Demo2-2](https://rtnh210523.github.io/rtnh210523/triangle/demos/chap3-demo-4.html)


#### 任务c. 完成不同层次剖分效果的绘制，这里的绘制采用线框模式，可以同任务a及任务b集成在同一个界面中。如输入剖分层次分别为1和4，得到效果如下：
> 层次为1效果 [Demo3-1](https://rtnh210523.github.io/rtnh210523/triangle/demos/chap3-demo-5.html)


> 层次为4效果 [Demo3-2](https://rtnh210523.github.io/rtnh210523/triangle/demos/chap3-demo-6.html)


#### 任务d. 任务c中剖分后的三角形添加旋转效果。假设没有旋转时，图中绘制的各个点的坐标分别为(x,y,z)，因只涉及二维平面，故有z=0。当图案在xoy平面上绕原点旋转时，即绕z轴逆时针旋转角度theta时，新的坐标(x’,y’,z’)为x’=x*cos(theta)-y*sin(theta), y’=x*sin(theta)+y*cos(theta)。例如，下图分别为theta为0度和60度时的绘制效果:
> 角度为0°效果 [Demo4-1](https://rtnh210523.github.io/rtnh210523/triangle/demos/chap3-demo-7.html)


> 角度为60°效果 [Demo4-2](https://rtnh210523.github.io/rtnh210523/triangle/demos/chap3-demo-8.html)


#### 任务e. 在任务d中，如果旋转角度根据点到原点的距离d设定，即有x’=x*cos(d*theta)-y*sin(d*theta), y’=x\sin(d*theta)+y*cos(d*theta)，其中，d=sqrt{(x^2+y^2)}。例如，当theta分别为60度和180度时的绘制图案分别为如下所示:
> 角度为60°效果 [Demo5-1](https://rtnh210523.github.io/rtnh210523/triangle/demos/chap3-demo-9.html)


> 角度为180°效果 [Demo5-2](https://rtnh210523.github.io/rtnh210523/triangle/demos/chap3-demo-10.html)
