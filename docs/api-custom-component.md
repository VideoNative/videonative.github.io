---
id: api-custom-component
title: VN 组件
---

## 1. 如何开发一个组件？

开发组件和开发page一样，也是使用vnml、css、js、json这4个文件，区别是页面的js是调用page方法构造，而组件的js里是调用component方法构造。

`component(obj)` obj参数对象可包含如下属性：

* 对外暴露的属性集 properties，可包含若干个属性。每个属性的格式如下：

```javascript
properties : {
	demo :				//这是属性的名字
	{					//这个是demo属性的描述对象
		type: String,			  //这是demo属性的类型 （仅做参考，可省略）
		value: "This is a demo"   //这是demo属性的默认值  （可省略）
	},

	another : {},		//另一个属性

	wrong_prop : "ok"   //注意：这不是属性！因为它的值不是对象
}
```

* 对外暴露的方法集 methods，可包含若干个方法。每个方法的格式如下：

```javascript
methods : {
	callme :				//这是方法名
	function () {			//这是方法体
		return "test"
	}
}
```

* 对外暴露的事件集 events，可包含若干个事件。每个事件的格式如下：

```javascript
events : {
	click :  //这是事件名
	{},		 //事件的描述对象

	wrong : ""  //注意：这不是事件，因为它的值不是对象
}
```

* 组件生命周期回调函数：created、attached、ready、detached

组件的一个完整例子：

```javascript
component({
    //这里定义自定义组件对外暴露的属性，包括属性名和默认值（可缺省）
    //每一个自定义属性通过一个对象进行描述，目前仅支持 value 字段用于描述属性默认值
    //属性的默认值可以为基本类型、数组、对象
    properties: {
        // 这里定义了innerText属性，它的默认值是字符串 'default value'
        innerText: {
            type: String,	 //数据类型说明，仅做参考，可省略
            value: 'default value'
        },

        // 这里定义了innerProp属性，没有默认值
		innerProp: {},

		// 这里定义了 innerArray 属性，默认值是一个数组
		innerArray: {
			value: [
				{ index : 0 },
				{ index : 1 }
			]
		},

		// 这里定义了 innerObject 属性，默认值是一个对象
		innerObject: {
			value: {
				name : 'inner',
				demo : true
			}
		}
    },

    //这里定义自定义组件对外暴露的dom接口
    methods : {
        getName : function() {
        },
        openPage : function() {
        }
    },

    //对外暴露的自定义事件
    //每一个自定义事件通过一个对象进行描述。目前事件没有选项需要额外描述，用空对象即可。
    events : {
		//这里定义了一个 myevent 事件
		myevent : {},

		//这里定义了一个 myeventNext 事件
		myeventNext : {}
    },

	//组件声明周期函数，表示组件已经创建
	created : function(e) {
	},

	//组件声明周期函数，表示组件已经布局并展示
	ready : function(e) {
	}
});
```

说明：组件支持和页面一样的css选择器。但组件和外界是断层的，所以级联选择器可能出现非预期的效果。

## 2. 如何使用一个组件？

使用方需要在自己的页面js中，调用 usingcomponents 方法来注册组件：定义组件名和路径。该函数可多次调用，可一次注册多个组件。后面设置的同名组件会覆盖前面设置的。也可在app的info.json中使用 usingcomponents {} 块注册，对该app下的所有页面生效。

   例子：在页面js中调用 usingcomponents 函数

```javascript
   usingcomponents({
       'custom-text' : 'path/to/cusotm/text',
       'custom-image' : 'path/to/cusotm/image'
   });
```

或者在info.json中定义

```json
   usingcomponents : {
       "custom-text" : "path/to/cusotm/text",
       "custom-image" : "path/to/cusotm/image"
   });
```

&emsp;&emsp;使用方在vnml中使用这些自定义的组件名

例子：

```html
   <custom-text myprop="12345">demo custom component</custom-text>
```

## 3. 容器类的自定义组件

这里我们引入一个新的节点类型&lt;slot&gt;。当自定义组件需要引入外部定义的节点时，用&lt;slot&gt;来占位。当需要用到多个slot时，可以用名字来区别。例子：

组件vnml：

```html
   <view>
      <slot name="header" />
      <text>11111</text>
      <text>22222</text>
      <slot name="footer" />
   </view>
```

使用方vnml:

```html
   <custom-view>
       <image slot="footer" />
       <button slot="header" />
   </custom-view>
```

&emsp;&emsp;说明：这里外部定义的view，它绑定的数据、回调接口等，使用是外部的资源，而非组件内的

## 4. 关于组件隔离

1. 组件使用自己的JS、CSS、JSON、vn.data。组件和外部的交互通过注册组件时暴露的方法和事件来实现
2. 组件自定义的属性，绑定到内部数据源，组件的vnml可通过胡子语法访问这些值，如: {{demoprop}}
3. 组件js通过 this.triggerEvent 来向外发送事件，如触发 bindmyevent 事件，调用 this.triggerEvent("myevent", o)，不需要加"bind"
4. 组件js也可以通过 vn.data.query("demoprop") 来获取自定义属性的值。

## 5. 关于组件的数据穿透

默认情况下数据都是由父容器往子组件单向流动的，组件内部对数据的修改不会影响到外部容器<br />
注：从 ***0.8*** 版本开始，我们可以通过在外部容器vnml上使用属性修饰符 `.sync` 来实现数据的双向穿透。例子：

子组件 my-comp.js

```javascript
	component({
		properties: {
			title : {}
		}
	})
```

外部容器 index.vnml

```html
   <my-comp title.sync="{{data.text}}" />
```

当my-comp组件内部修改了 title 的值，会同步更新到外部容器的 data.text 数据。