<div align="center">

[![MIT](https://img.shields.io/dub/l/vibe-d.svg?style=flat-square)](http://opensource.org/licenses/MIT)

</div>

# 简介
这是一个jquery插件，基于$.ajax方法扩展，取消多次重复的请求。



# 浏览器支持
1.  支持所有现代浏览器
2.  IE5+

# 使用
点击 `Clone or download` 选择点击 `Download ZIP`，下载到桌面，解压，获取dist目录下的文件到项目中，
这是基于$.ajax中增加了一个属性 `isAutoCancel`，默认是开启，设置成false，关闭。 
所以 $.post 和 $.get 方法无效。
```
<!-- 引入插件！注意要在引入jquery之后再引入它 -->
<script src="../dist/jquery-fetch.min.js"></script>
<script>
  var requestTimer
  var requestNum = 10
  requestTimer = setInterval(function () {
    requestNum --
    if (requestNum === 0) {
      clearInterval(requestTimer)
    }
    $.ajax('https://easy-mock.com/mock/5bf75efb5cfdd6564a60da75/example/mock',{
      isAutoCancel: true, // true: 自动取消重复请求(默认), false: 正常ajax请求
      success: function (data) {
        console.log('请求成功：', data)
      }
    })
  })
</script>
```

# License
[MIT](http://opensource.org/licenses/MIT)
