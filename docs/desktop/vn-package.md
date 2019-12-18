---
id: vn-package
title: VN 打包
---

#### VN打包流程：

1.webpack对多js包含进行打包合并  
2.把vnml、css、js、json通过jce二进制编码成page文件（可提高运行时解析速度）  
3.压缩app包  

---

#### VNPackage目录结构示例：
.  
└─ app  
&emsp;├─ info.json  
&emsp;├─ index  
&emsp;&emsp;├─ index.js  
&emsp;&emsp;├─ index.json  
&emsp;&emsp;├─ index.vnml  
&emsp;&emsp;├─ index.vnss  

---

#### VN打包依赖

* Java:https://www.oracle.com/technetwork/java/javase/downloads/index.html  

* Nodejs:https://nodejs.org/en/  

* webpack和webpack-cli（可以自己安装，也可以直接使用我们打包好的node_modules.zip）  
自己安装命令：  
npm install webpack  
npm install webpack-cli  

* VideoNativeDesktop\Output\Resources\vnapp：VN原始代码  

* VideoNativeDesktop\Output\Resources\vnapp_output：VN打包后的包  

* VideoNativeDesktop\Output\Resources\vnapp_zips：VN打包后的压缩包  