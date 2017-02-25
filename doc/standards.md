# 基础

## 规范

### 基础：
* 采用 SASS
* 父子之间需要嵌套
* 尽量少修改 TAG 的样式
* 层级结构不能太深

### 格式：
* 全部小写
* 单词之间用 `-` 隔开
* 模块：命名空间-模块名-其它描述
* 子模块：模块名-子模块名-其它描述

### 语义化：
* 模块使用名词
* 状态使用形容词
* 单词必须是有意义的，且符合当前使用的场景

### 缩写:
* 超过 4 个字母的单词需要简写
* 缩写在 3 个字母内
* 缩写表

| 缩写 | 全称 | 描述 |
| :--- | :--- | :--- |
| app | application |  |
| btn | button | 按钮 |
| clr | color | 颜色 |
| col | column | 列 |
| dlg | dialog | 会话 |
| err | error | 错误 |
| sel | select | 选择 |
| tbl | table | 表格 |
| wnd | window | 窗口 |
|  | container | 容器 |
| frm | frame | 框架 |
| swp | swiper |  |
|  | badge | 勋章 |
|  | tooltip |  |
|  | textarea | 文本框 |
|  | checkbox | 多选 |
|  | radio | 单选 |
|  | switcher | 开关 |
|  | range |  |
|  | loader | 加载 |
| cal | calendar | 日历 |


举例：

```
ui-btn 
ui-list list-item list-arrow
```