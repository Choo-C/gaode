###v0.0.17
* 适配LOCA 2.0.6的API
* 增加ZMarkerLayer图层

###v0.0.16
* 增加搜索框组件

###v0.0.15
* 修复infoWindow某些情况下改变位置无法显示问题
* 增加VectorLayer图层

###v0.0.14
* loca的所有图层增加visibleDuration属性，用于图层显隐的渐变

###v0.0.13
* prop中如果属性是Object类型的增加deep监听

###v0.0.12
* loca图层默认style处理，增加feature.properties赋默认{}，屏蔽geojson数据不存在properties时初始化报错问题
* 修改包加载方式，取消@ 导入，改用相对路径进行导入

###v0.0.11
* 紧急修复loca图层不能异步加载数据问题

###v0.0.9
* 解决控件初始化报错问题
* 修复MarkerCluster  points修改后不能动态修改数据问题
* 完善API文档

###v0.0.8
* loca里的图层对style全部增加默认处理，优先读取geojson中的properties里的参数（仅针对支持function回调的style参数），其次读取defaultStyle中配置的值，当传入layerStyle时，优先使用layerStyle里的处理

###v0.0.7
* 重命名text的style属性为textStyle

###v0.0.6
* 完善threeJS对象销毁时内存处理
* loca的Layer事件增加event开放

###v0.0.5
* 完成loca所有图层的接入

###v0.0.4
* 增加threejs相关图层以及模型加载

###v0.0.3
* 接入loca

###v0.0.2
* 完成初始版本，该版本对接完amap相关API，后续接入loca和UI
