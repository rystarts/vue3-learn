# vue3-learn
vue3  learn learn

overflow 溢出 一般搭配flex使用
    visible 默认值 如果溢出 会显示在边框外
    hidden 内容被修剪 溢出不可见
    scroll 内容会被修剪 会显示滚动条
    auto 如果内容被修剪 会显示滚动条
bfc 块级格式化上下文
    bfc独立的容器 不会影响到外部标签 浮动只会应用于一个BFC内的元素
    清除浮动也只清除同一个bfc元素的浮动
display
    flex 可扩展的灵活容器
    flex 1 等同与 flex 1 1 auto; 
        flex-grow: 1 当前元素占几份
        flex-shrink: 1 收缩比例 如果空间不足 将缩小
        flex-basis:auto 计算是否有多余空间 auto 为本身大小