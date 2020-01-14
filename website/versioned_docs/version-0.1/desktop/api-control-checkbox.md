---
id: version-0.1-api-control-checkbox
title: VN checkbox
original_id: api-control-checkbox
---

## checkbox
这个控件可以显示两种状态，checked 和 unchecked，不同的状态显示不同的图片。本控件自身不存储状态，所以它的 checked 属性必须通过胡子语句绑定到一个boolean型的数据上才能正常工作。当通过点击改变了控件状态时，胡子语句绑定的数据也会发生改变。


+ 代码示例如下：

```html
<!--checkbox.vnml-->
<checkbox width="92rpx" aspect-ratio="1" checked="{{selected}}" checked-src="{{check}}" unchecked-src="{{uncheck}}" bindchange="onCheckChange"/>
```

```json
{
    "check": "/img/checkbox_yes.png",
    "uncheck": "/img/checkbox_no.png",
    "selected": true,
    "position": 10
}
```

```js
/**checkbox.js**/
page ({
    onCheckChange: function () {
        console.log("checkbox 发生状态切换");
    }
});
```

类型 | 属性/事件/方法名 | 参数类型 | 参数默认值 | 说明
--- | --- | --- | --- | ---
Property | checked | 胡子语句 | | 必填项，绑定 data 里的一个布尔值
Property | checked-src | String | | 选中状态图片的url
Property | unchecked-src | String | | 未选中状态图片的url
EventHandler | bindChange | Function | | checkbox 状态切换事件回调
