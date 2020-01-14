---
id: version-0.1-api-control-button
title: VN button
original_id: api-control-button
---

## button
button是点击交互控件。button有默认的系统UI，以及点击时有系统默认的视觉效果。button的默认文本对齐方式为center。

+ 代码示例如下：

```html
<!--button.vnml-->
<view width="100%" height="auto" flex-direction="row">
    <button height="auto" width="auto" font-size="30rpx" color="#000000FF" font-style="bold">点击我</button>
</view>
```

类型 | 属性/事件/方法名 | 参数类型 | 参数默认值 | 说明
--- | --- | --- | --- | ---
Property | font-size | [rpx pt dp px] | 12dp | 文本 size，只能是整型
Property | font-style | Enum | normal | normal/bold/italic/bold_italic
Property | font-family | String | 系统默认 | 字体集
Property | color | color | #000000FF |
Property | text-align | Enum | center | left/right/center
Property | ellipsize | Enum | none | none;start;middle;end。注：max-lines属性的值会影响到本属性。**只支持end**
~~Property~~ | ~~max-lines~~ | ~~Integer~~ | 0 | ~~0代表不限行数。注：1、当不限行数时，ellipsize无法生效；2、当max-lines大于1时，ellipsize在Android平台上只有end生效~~

