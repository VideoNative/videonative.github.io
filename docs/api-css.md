---
id: api-css
title: CSS
---

## VNSS

VNSS(Video Native Style Sheets)是一套样式语言，用于描述 VNML 的组件样式。

VNSS 用来决定 VNML 的组件应该怎么显示。

为了适应广大的前端开发者，VNSS 具有 CSS 大部分特性。同时为了更适合开发微信小程序，VNSS 对 CSS 进行了扩充以及修改。

与 CSS 相比，WXSS 扩展的特性有：

## 尺寸单位

-**rpx**（Responsive Pixel）: 根据页面宽度自适应的长度单位。规定页面宽度为750rpx。如一个全屏页面在 iPhone6 上，其宽度为375 point(iOS布局单位)，共有750个物理像素，则750rpx = 375point = 750物理像素，1rpx = 0.5point = 1物理像素。*从0.7版本开始，rpx的参照宽度从 屏幕短边 调整为 页面宽度*

设备 | rpx换算px (屏幕宽度/750) |px换算rpx (750/屏幕宽度)
--- | --- | ---
iPhone5 | 1rpx = 0.85px | 1px = 1.17rpx
iPhone6 | 1rpx = 1px | 1px = 1rpx
iPhone6 Plus | 1rpx = 1.44px | 1px = 0.69rpx
iPhone x | 1rpx = 1.5px | 1px = 0.67rpx
Google Pixel 2 XL | 1rpx = 1.92px | 1px = 0.52rpx
Google Pixel 2 | 1rpx = 1.44px | 1px = 0.69rpx

-**px**（Pixel）: 屏幕物理像素单位

-**pt**（Point）: 印刷所使用的长度单位，用于表示字型的大小，也用于余白（字距、行距）等其他版面构成要素的长度。1 点的长度曾经有过各种定义，当代最通行的是广泛应用于桌面排版软件的 DTP 点，72 点等于 1英寸（1 point = 127⁄360 mm = 0.352777... mm）。中国传统字体排印上的字号单位是“号”，而后采用“点”“号”兼容的体制。计算设备pt与px的关系通常可以通过先计算[PPI](https://en.wikipedia.org/wiki/Pixel_density)来实现。换算公式如下：

1pt = (PPI / 72 )px

-**dp**（Density Independence Pixel）*(since 0.7)* : 屏幕密度无关像素单位。以160dpi为基准，在160dpi设备上1dp=1px，在240dpi设备上1dp=1.5px，以此类推。等同于Android上的dp、dip；也等同于iOS上的point。

**建议：** 设计师可以用 iPhone6 作为视觉稿的标准，这样屏幕宽度是375点，点和dp的换算关系为 1dp = 1点；点和rpx之间的换算关系为 1rpx = 0.5点；点和pt的换算关系为 1pt = 0.4425点

## 内联样式

框架组件上支持使用 style、class 属性来控制组件的样式。

-style：静态的样式统一写到 class 中。style 接收动态的样式，在运行时会进行解析，请尽量避免将静态的样式写进 style 中，以免影响渲染速度。

```html
<!--test.vnml-->
<view style="color:{{color}};" />
```

-class：用于指定样式规则，其属性值是样式规则中类选择器名(样式类名)的集合，样式类名不需要带上.，样式类名之间用空格分隔。

```html
<!--test.vnml-->
<view class="normal_view" />
```

## 选择器

目前支持的选择器有：

选择器 | 样例 | 样例描述
--- | --- | ---
\* | \* | 选择所有组件
element | view | 选择所有 view 组件
.class | .intro | 选择所有拥有 class="intro" 的组件
:pseudoclass | :active | 伪类选择器，目前普通组件只支持:active伪类，input组件还支持:focus,:disable
\#id | #firstname | 选择拥有 id="firstname" 的组件
element, element | view, checkbox | 选择所有文档的 view 组件和所有的 checkbox 组件

**注意：**选择器还可以使用集联操作如:"#id1 text"可以匹配id1下面左右的text组件(包含嵌套多层的子组件)

**注意：**选择器的优先集为 #id > .class > element > *

更多CSS的规范请参看[W3C标准](https://developer.mozilla.org/en-US/docs/Web/CSS)

更多Flex属性介绍清参看[Flex 布局教程：语法篇](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

## 媒体查询 *(since 0.8)*

从 0.8 版本开始支持 @media 媒体查询，特性如下：

* 支持的媒体类型：all、screen
* 支持的媒体功能：
  * min-width (dp, pt, px)
  * max-width (dp, pt, px)
  * min-height (dp, pt, px)
  * max-height (dp, pt, px)
  * orientation: portrait, landscape; 注：这里采用的是真正的页面方向，而不像Web网页是用viewport的宽高比来模拟的
  * prefers-color-scheme: light, dark；如果宿主App适配，也支持自定义值，如：gray
  * 还支持自定义媒体功能，但需要宿主App适配。如：@media (custom-feature: ok)
* 逻辑操作符：支持 and； 不支持 not 、only
* 支持逗号分隔列表

一个完整的例子：

```CSS
@media (min-width: 600px) and (prefers-color-scheme: dark), all and (max-height: 1080px), screen and (custom-state: state1)
{
    .title {
        font-size: 100dp;
    }
}
```

## 常量和 var() *(since 0.9)*

从 0.9 版本开始支持常量和var()函数，使用方式如下：

1. 在 :root 伪类中定义常量
2. 在规则值和标签属性值中使用var()来引用常量
3. var()支持默认值和递归调用

注意：var()支持替换一个完整的属性值，不支持只替换属性值的一部分

完整的例子：

```CSS
:root {
	--H1: 30dp;
	--CL: #332211;
}

.title {
	font-size: var(--H1);
	color: var(--CL);
	padding: var(--PD, 5dp);   /* 默认值 */
	margin: var(--MG, var(--PD, 10dp));   /* 递归调用 */
}

.txt {
	/*注：下面的用法是错误的！*/
	padding: 10dp var(--H1) 10dp 10dp;
}
```

也可以用于vnml标签属性中

```html
<!--test.vnml-->
<view width="var(--H1)" />
```

## calc() *(since 0.9)*

从 0.9 版本开始支持calc()函数，要点如下：

1. 支持的属性：width, height, margin, padding
2. 支持长度单位和百分比
3. 支持 +, -, *, / 四种运算，以及括号
4. 支持 var() 函数
5. 可以在CSS规则和标签属性中使用

注：使用百分比会依赖父容器的测量，会导致多次测量，会降低性能。尽可能rpx单位来替代百分比，可以提高布局的性能。

完整的例子：

```CSS

.holder {
	width: calc((100% - var(--SP, 3dp) * 3) / 4);  /* 如果这里父容器的宽度是屏幕宽度，则用 750rpx 可以获得更高的性能 */
}

```