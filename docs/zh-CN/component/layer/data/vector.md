---
title: 矢量标记图层
---

# 矢量标记图层 (AMap.VectorLayer)
矢量标记图层。

## 基础示例

::: demo
examples/layer/data/vector
:::


## 静态属性
仅且可以初始化配置，不支持响应式。

名称 | 类型 | 说明
---|---|---|

## 动态属性
支持响应式。

名称 | 类型 | 说明
---|---|---|
visible | Boolean | 是否显示，默认 true
zIndex | Number | 图层叠加的顺序值，1 表示最底层。默认 zIndex：120

## ref 可用方法
提供无副作用的同步帮助方法

函数 | 返回 | 说明
---|---|---|
$$getInstance() | AMap.VectorLayer | 获取实例

## 事件

事件 | 参数 | 说明
---|---|---|
init | AMap.VectorLayer | 实例初始化结束