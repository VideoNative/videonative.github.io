---
id: api-control-textarea
title: VN textarea
---

## textarea
这是一个多行文本输入控件。

+ 代码示例如下：

```html
<!--textarea.vnml-->
<view width="100%" height="100%" flex-direction="column">	
	<text margin="10rpx" padding="5rpx" width="100%" height="auto" font-size="30rpx">你输入的是：{{inputValue}}</text>
	<text margin="10rpx" padding="5rpx" width="100%" height="auto" font-size="30rpx">状态：{{focusState}}</text>
	<text margin="10rpx" padding="5rpx" width="100%" height="auto" font-size="30rpx">确认次数：{{confirmCount}}</text>
	<textarea id="eventText" placeholder="响应事件" confirm-type="done" margin="10rpx" width="auto" height="auto" font-size="30rpx" bindInput="onInput" bindFocus="onFocus" bindBlur="onBlur" bindConfirm="onConfirm" max-lines="3" border-width="1rpx" border-style="solid"></textarea>
</view>
```

```json
{
  "focusState": "未获取焦点",
  "textCount": 0,
  "confirmCount": 0,
  "inputValue": ""
}
```

```js
/**textarea.js**/
var eventinput;

page({
  onReady: function () {
    eventinput = vn.dom.getElementById('eventText');
  },
  onInput: function (params) {
    var text = params.event.value;
    vn.data.update('inputValue', text);
  },
  onFocus: function (params) {
    vn.data.update('focusState', '获取焦点');
  },
  onBlur: function (params) {
    vn.data.update('focusState', '未获取焦点');
  },
  onConfirm: function (params) {
    confirmCount = vn.data.query('confirmCount');
    confirmCount += 1;
    vn.data.update('confirmCount', confirmCount);
  }
});
```

类型 | 属性/事件/方法名 | 参数类型 | 参数默认值 | 说明
--- | --- | --- | --- | ---
Property | font-size | [rpx pt dp px] | 12dp | 文本 size，只能是整型
Property | font-style | Enum | normal | normal/bold/italic/bold_italic
Property | font-family | String | 系统默认 | 字体集
Property | color | color | #000000FF | 取值格式为#RGBA
Property | text-align | Enum(可组合) | left | left/right/center
~~Property~~ | ~~max-lines~~ | ~~Integer~~ | ~~0~~ | ~~0代表不限行数~~
~~Property~~ | ~~input-type~~ | ~~Enum~~ | ~~text~~ | ~~text(文字)/number(整数)/digit(小数)~~
Property | placeholder | String | | 当没有文字输入时的提示文案
Property | placeholder-color | color | #888888FF |
EventHandler | bindinput | String function(Object params) | | 当键盘输入时，触发input事件，params.event = {value: "文本", cursor: 1}，处理函数可以直接 return 一个字符串，将替换输入框的内容。value 为事件发生时文本框的内容，cursor为光标所在的位置
EventHandler | bindconfirm | Boolean function(Object params) | | 点击完成按钮时触发，params.event.value 为事件发生时文本框的内容，返回 true 表示按下完成按钮时不收起键盘，返回 false 表示收起键盘，默认为 false。注，在安卓上可能受到其他特性的影响导致键盘不收起，比如当指定 confirmType 为 Next 时，会聚焦到下一个输入框，此时键盘没有收起。
EventHandler | bindfocus | function(Object params) | | 输入框得到输入焦点时触发，params.event.value 为事件发生时文本框的内容
EventHandler | bindblur | function(Object params) | | 输入框失去焦点时触发，params.event.value 为事件发生时文本框的内容
Method | Integer getCursorStart() |  |  | 当前输入框的光标开始位置
Method | Integer getCursorEnd() |  |  | 当前输入框的光标结束位置
Method | String getValue() |  |  | 当前输入框的文本
Method | Boolean hasFocus() |  |  | 当前输入框是否获取了焦点
Method | void setCursorRange(Integer start, Integer end) |  |  | 设置当前输入框光标起始和结束位置
Method | void setCursorStart(Integer start) |  |  | 设置当前输入框光标起始位置
Method | void setFocus(Boolean focus) |  |  | 设置当前输入框的焦点属性
