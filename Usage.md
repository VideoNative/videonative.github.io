### PageUrl 的使用
VideoNative 提供有 VNActivity 供外部接口使用。VNActivity 可以接收 pageUrl 并将其最终渲染成 VideoNative 界面

1. 拉起一个 `vn://vn_demo/index/index` 界面示例

    ```java
    /** MainActivity.java **/
    button.setOnClickListener(new View.OnClickListener() {
        @Override
        public void onClick(View v) {
            VideoNative.getInstance().startPage(MainActivity.this, VNPageActivity.class, "vn://vn_demo/index/index");
        }
    });
    ```

    ```java
    /** VNPageActivity.java **/
    public class VNPageActivity extends VNActivity {

        private ProgressDialog mProgressDialog;

        @Override
        public void onCreatePageStart() {
            super.onCreatePageStart();
            mProgressDialog = new ProgressDialog(this);
            mProgressDialog.setTitle("加载VN页面中...");
            mProgressDialog.show();
        }

        @Override
        public void onCreatePageSucc() {
            super.onCreatePageSucc();
            mProgressDialog.dismiss();
        }

    }
    ```

2. VideoNative 内部页面跳转时，pageUrl 支持相对路径的写法
    
   > 比如当前页面是 `vn://vn_demo/index/index`，希望跳转的目标页面是 `vn://vn_demo/channel/channel`，可以直接用绝对路径，也可以写成相对路径: `../channel/channel`

### VideoNative 脚本的编译输出
1. VideoNative 的脚本在服务端编译解析，最终以离线包的ZIP格式给到客户端，其中包括：
    + `Node` 树，由 `vnml` 生成
    + `json` 格式数据，由 `json` 文件生成
    + 样式树，由 `vnss` 文件生成
    + `JS` 脚本代码，定义有函数
    + 以上四个结构最终合成到一个`jce`文件里
    + 离线包图片

2. `Node` 树的详细定义如下：
    + `Node` 结点和组件标签一一对应
    + `Node` 结点属性定义如下：
    
        ```cpp
        /** video_native_interface.jce **/
        struct JceVNNode 
        {
            0 optional vector<JceVNNode> childNodeList;   //子 Node 结点
            1 optional map<string, string> property;      //布局属性 map
            2 optional map<string, string> controller;    //控制语句 map
            3 optional string type;                       //取值:list，cell，view，text 等
        };  
        ```
    + 其中 list 的 Node，`vn:for` 指向数据树中的一个数组，且子 Node 的 type 只能是 cell

3. 数据树的详细定义如下：

    ```cpp
    /** video_native_interface.jce **/
    struct JceVNData 
    {
        0 optional string json; //数据就是一个 Json 字符串 
    };
    ```

4. 样式树详细定义如下：

    ```cpp
    /** video_native_interface.jce **/
    struct JceVNCss 
    {
        0 optional map<string， map<string, string>> cssMap; //css Map 
    };
    ```

5. 编译脚本最终输出的整体 jce 结构定义如下：

    ```cpp
    /** video_native_interface.jce **/
    struct JceVNPage 
    {
        0 optional JceVNNode node;  //Node 树
        1 optional JceVNData data;  //Data 树
        2 optional JceVNCss css;    //Css 表    
        3 optional string script;   //Js 脚本
    };
    ```

### Native ViewTree 的事件处理
1. 组件通过指定事件 `Key` 属性，可以接收事件，并执行任意 `JScript` 定义好的函数
2. 事件参数为 V8Object，通用参数的结构为：

    ```json
    /**V8Object 事件参数**/
    {
        "type": "bindTap", //回调函数名称 
        "target": {},   // 回调事件触发的视图，可能是text，button等
        "event":{},  // 回调参数，不同的事件，参数不一样，详情参见控件页
        "timeStamp": 1511787001494, //回调时间戳 
        "dataset": {} //回调的视图附带的数据列表
    }
    ```
3. 在控件中可以定义数据，这些数据将会放在 `dataset` 里面，通过事件参数传递到 JS 层

    ```html
    <!--dataset.vnml-->
    <list vn:for="{{listData}}">
        <cell cellType="content">
            <button data-position="{{index}}" bindtap="onButtonClick">点击</button>
        </cell>
    </list>
    ```
    
    ```js
    /**dataset.js**/
    dataset({
        onButtonClick: function (params) {
            var eventType = "事件类型为：" + params.type;
            console.log(eventType);
            var clickStr = "第" + params.dataset.position + "项按钮点击";
            console.log(clickStr);
        }
    })
    ```

### 离线包解决方案
1. 采用离线包方案主要解决的问题

    + 页面可以内置在 app 里面，提升页面的打开速度
    + 页面数据缓存在本地，避免每次打开页面都需要联网，减少网络不佳对页面打开的影响
    + 离线包支持内置图片，避免图片第一次加载带来的闪烁问题

2. 离线包内容组成
    
    + 一个离线包对应一个功能模块。里面可以包含多个页面。一个离线包是一个 zip 格式的压缩包。
    + 离线包 appId：每个离线包对应一个 appId。目前的离线包升级是和腾讯视频 WebApp 共用的后台，受 WebApp 后台的限制，appId 需要到 WebApp 后台申请分配，且 appId 只能为数字（即压缩包文件名）。
    + 离线包版本号：随着需求变更或 BUG 修复，一个 appId 可能对应多个版本。版本号为8位数字（同样是 WebApp 后台的规范）。离线包升级时，高版本号会覆盖低版本号。
    + info.json：每个离线包的根目录下面都有一个 info.json 用于描述当前离线包的 appId 和版本号，示例如下：

    ```json
    /** info.json **/
    {
        "packageId" : "38",
        "version" : "17120519"
    }
    ```
    
3. 本地图片

    + 图片可以放在离线包下的任意目录下。使用本地图片的 url 是以`local://`起头的。url 写法包括绝对路径和相对路径两种写法，示例如下：
    
        ```html
        <!--locaImageDemo.vnml-->
        <image width="50rpx" aspect-ratio="1" src="local://../image/check.png"/>
        <image width="34rpx" aspect-ratio="1" src="local://./image/check.png"/>
        <image width="34rpx" aspect-ratio="1" src="local://setting/image/check.png"/>
        ```
    
    + 本地图片支持多种分辨率的模糊匹配。具体来说，假如离线包下面存在两个图片，分别是`check@2x.png`和`check@3x.png`，则当使用 url 为`local://image/check.png`访问图片时，在屏幕密度是`3.0`的手机上，会使用`check@3x.png`的图片；而在屏幕密度是`2.0`的手机上，会使用`check@2x.png`

        + 如果没有对应密度的图片，会优先匹配密度最接近的。
        + 最差的情况，就是使用不带分辨率的默认图片。
        + 如果连默认图片都找不到。才会图片加载失败。

4. 离线包内置方式

    + 对于 Android 工程来说，离线包要放置在工程`/assets/vnapp`目录下，才能被正常识别并加载

5. 离线包的签名机制

    + 为了防止离线包被劫持篡改，离线包里的每个文件都会受到签名校验的保护
    + 签名校验采用的非对称加密，公钥文件`public.pem`要和离线包放在同级目录下，也是`/assets/vnapp`
    + 生成签名文件需要用到私钥，而私钥保存在内部服务器，因此要发布的离线包需要在服务器上签名。

6. 离线包的发布
    + 在WebApp的发布后台发布上线。