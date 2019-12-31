---
id: getting-started-vscode
title: 使用Visual Studio Code
---

## js代码自动补全
* 配置你的VN工程
    
    使用VSCode时在工程目录下添加一个jsconfig.json文件，具体可以参考如下
    ```Javascript
    {
    // See https://go.microsoft.com/fwlink/?LinkId=759670
    // for the documentation about the jsconfig.json format
    "compilerOptions": {
     "target": "es5",
     "module": "commonjs",
     "allowSyntheticDefaultImports": true
    },
    "exclude": [
     "node_modules",
     "bower_components",
     "jspm_packages",
     "tmp",
     "temp"
    ]
   }
    ```

* 添加d.ts文件

    在工程目录下添加VN的d.ts文件即可

* 下载地址

    [立即下载](../file/vnappTypings.zip)
