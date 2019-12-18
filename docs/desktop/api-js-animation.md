---
id: api-js-animation
title: JS animation API
---

##动画相关

参数 | 说明
--- | --- 
alpha	            |  数字。取值范围 0.0 ~ 1.0。 0=完全透明; 1=完全不透明
background_color	|  字符串。取值和通用属性background-color相同
rotate_x	        |  数字。表示在x轴上的旋转角度
rotate_y	        |  数字。表示在y轴上的旋转角度
rotation	        |  数字。表示旋转的角度。和rotate_x、rotate_y不同的是，rotation是围绕pivot点做旋转，而rotate_x是x轴围绕pivot_x旋转，rotate_y围绕pivot_y旋转。
scale_x	            |  数字。在x轴上的缩放比例。取值范围 0.0 ~ 任意正浮点数
scale_y	            |  数字。在y轴上的缩放比例。取值范围 0.0 ~ 任意正浮点数
translate_x	        |  字符串。在x轴上的偏移。支持的单位：rpx,pt,px,%
translate_y	        |  字符串。在y轴上的偏移。支持的单位：rpx,pt,px,%
delay	            |  动画延迟开始的时间，毫秒，正整数
duration	        |  动画的时长，毫秒，正整数
pivot_x	            |  字符串。旋转和缩放的中心点x坐标。支持的单位：rpx,pt,px,%
pivot_y	            |  字符串。旋转和缩放的中心点y坐标。支持的单位：rpx,pt,px,%
repeat_count	    |  表示动画的重复执行次数，整数类型。默认值为0，表示不重复。-1表示无限循环。
complete	        |  回调函数。当动画结束时会回调该方法，没有参数
timingFunction	    |  字符串。动画的时间函数。支持下面几种取值：
	
##timingFunction的取值	
参数    |	说明
---     |   --- 
linear	            |  规定以相同速度开始至结束的过渡效果（等于 cubic-bezier(0,0,1,1)）
ease	            |  规定慢速开始，然后变快，然后慢速结束的过渡效果（cubic-bezier(0.25,0.1,0.25,1)）
ease-in	            |  规定以慢速开始的过渡效果（等于 cubic-bezier(0.42,0,1,1)）
ease-out	        |  规定以慢速结束的过渡效果（等于 cubic-bezier(0,0,0.58,1)）
ease-in-out	        |  规定以慢速开始和结束的过渡效果（等于 cubic-bezier(0.42,0,0.58,1)）
cubic-bezier(x1, y1, x2, y2) |  ---
ease-in-2	        |  ---
fast-in-out	        |  ---
ease-out-snap	    |  ---
smooth-in-out	    |  ---
fast-out-slow-in	|  ---
linear-out-slow-in  |  ---
fast-out-linear-in	|  ---