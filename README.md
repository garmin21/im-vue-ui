# vue-ui

vue2.0 class 写法的 vue 组件库

### BEM css 规范

1. B(block): 独立且有意义的实体, e.g. header, container, menu, checkbox.
2. E(element) : Block 的一部分且没有独立的意义, header title, menu item, list item
3. M(modifier) : Blocks 或 Elements 的一种标志，可以用它改变其表现形式、行为、状态 disabled, checked,fixed

命名规则: 通过双下划线`__`连接后代 block 或者 element ,用双连字符`--`连接修饰语。

### 中介者设计模式

1. 外部衔接组件用于处理组件各种扩展功能
2. 内部只需要处理数据展现相关的逻辑.
