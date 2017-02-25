# 基础

## 规范
没有规矩不能成方圆，好的框架都有一套统一的规范和规则，这样更容易学习和使用。

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
| arr | arrow | 箭头 |
| btn | button | 按钮 |
| clr | color | 颜色 |
| col | column | 列 |
| dlg | dialog | 会话 |
| err | error | 错误 |
| sel | select | 选择 |
| tbl | table | 表格 |
| wnd | window | 窗口 |
| cnt | container | 容器 |
| bg | background | 背景 |
| frm | frame | 框架 |
| swp | swiper |  |
|  | badge | 勋章 |
| tip | tooltip |  |
|  | textarea | 文本框 |
| chk | checkbox | 多选 |
| rdo | radio | 单选 |
| swt | switch | 开关 |
| rng | range | 范围 |
| tst | toast | 消息提示框 |
| cal | calendar | 日历 |
| grp | group | 组 |
| pnl | panel | 块 |
| nav | navigation | 导航 |


举例：

```
ui-btn 
ui-list list-item list-arr
```