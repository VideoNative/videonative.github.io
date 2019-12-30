---
id: api-control-text
title: VN text
---

## text
text是基本的文本展示控件

+ 代码示例如下：

```html
<!--text.vnml-->
<view width="100%" height="auto" flex-direction="row">
    <text font-size="30rpx" color="#000000FF" font-style="bold">精彩瞬间</text>
    <text html-text="true">{{title}}</text>
</view>
```

```json
  {
	  "title":"<font color='#FF00FFFF'>我是</font>带颜色<font color='#00FFFFFF'>的文本</font>"
  }
```

> 注意 html 文本如果直接写在 \<text\> 标签里，会解析不出来，这里推荐使用胡子语法
    

推荐

```html
<text html-text="true">{{title}}</text>
```   
    
不推荐    

```html
 <text html-text="true"><font color='#FF00FFFF'>我是</font></text>
```

类型 | 属性/事件/方法名 | 参数类型 | 参数默认值 | 说明
--- | --- | --- | --- | ---
Property | font-size | [rpx pt dp px] | 12dp | 字体尺寸
Property | font-style | Enum | normal | normal/bold/italic/bold_italic
Property | font-family | String | 系统默认 | 字体集
Property | color | color | #000000FF |
Property | text-align | Enum | left | left/right/center
Property | ellipsize | Enum | none | none;start;middle;end。注：max-lines属性的值会影响到本属性。**只支持end**
Property | max-lines | Integer | 0 | 0代表不限行数。注：1、当不限行数时，ellipsize无法生效；2、当max-lines大于1时，ellipsize在Android平台上只有end生效
~~Property~~ | ~~line-height~~ | ~~Float~~ | ~~1.0~~ | ~~1.0代表一倍行间距，最小有效值为 1.0~~
~~Property~~ | ~~html-text~~ | ~~Boolean~~ | ~~false~~ | ~~是否解析html标签。目前只支持如下标签和属性：&lt;font color="#A0A0A0"&gt;、&lt;b&gt;、&lt;i&gt;~~
