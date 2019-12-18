---
id: api-control-scroll-view
title: VN scroll-view
---

## scroll-view
这是一个可滚动的容器类。支持横向或纵向滚动。

+ 代码示例如下：

```html
<!--scroll.vnml-->
<scroll-view class="container">
	<scroll-view class="scroll" flex-direction="column">
		<text background-color="{{item.background}}" class="column-item" color="{{item.color}}" vn:for="{{views}}">
			{{item.text}}
		</text>
	</scroll-view>
</scroll-view>
```

```css
/** scroll.vnss **/
text {
	font-size: 30rpx;
	color: grey;
}

.container {
	width: 100%;
	flex-grow: 1;
	flex-direction: column;
	align-items: center;
	background-color: #f8f8f8;
	padding: 18rpx;
}

.column-item {
	width: 500rpx;
    height: 280rpx;
	text-align: center;
}

.scroll {
	width: 500rpx;
	height: 300rpx;
	margin: 50rpx;
}
```

```json
{
	"views": [
		{
			"text": "A",
			"color": "white",
			"background": "#1AAD19"
		},

		{
			"text": "B",
			"color": "white",
			"background": "#2782D8"
		},

		{
			"text": "C",
			"color": "black",
			"background": "#F1F1F1"
		}
	]
}
```

类型 | 属性/事件/方法名 | 参数类型 | 参数默认值 | 说明
--- | --- | --- | --- | ---
Property | direction | Enum | column | column/row
Method | scrollTo(Float delta, Boolean animation) | | | 滚动到指定位置，单位为rpx；参数 animation 指定是否带动画效果
Method | Float getScrollOffset() | | | 获取当前的偏移，单位为rpx
EventHandler | bindScroll | function(Object params) | | 滚动时触发，params.event = {deltaX: 0, deltaY: 20}. deltaX 和 deltaY 为滚动的偏移量，单位为px
EventHandler | bindScrollStateChange | function(Object params) | | 回调 scroll-view 的滚动状态改变。params.event.newState 为当前状态。取值说明： 0:空闲;1:拖拽;2:滑动;
