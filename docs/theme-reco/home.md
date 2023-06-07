---
title: markdown 示例
date: 2020/05/29
---
## [markdown教程](https://commonmark.org/help/)
##  [markdown-it 详细扩展](https://markdown-it.github.io/)
# 容器
::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个 details 标签
:::

## 表格
| 表头1           | 表头2 |
| ---  | :---: |
| 表格数据1 333333333       | 222333333333 |
| 表格数据22       | 333333333333333333333333333 |

## 语句中高亮
`Inline code` with backticks

## 字体
加粗  => **加粗** <br>
倾斜 => *倾斜*  <br>
删除线 => ~~删除线~~ <br>
**加粗 _部分倾斜_ 1** <br>
**This text is _extremely_ important** <br>
***全部加粗倾斜*** <br>

## 添加 emoji 
[添加emoji表情](https://github.com/ikatyang/emoji-cheat-sheet) :see_no_evil:

## 使用模版语法和标签
1 + 1 = {{ 1+1 }}

<p v-for="i in 3">p==={{ i }}</p>

## 子项
1. item one
2. item two
   - sublist
   - sublist

## 区域隔绝

> 嵌套区域第一层级
>> 两个大于号代表 第二层级
> > > ...or with spaces between arrows. 以次类推

## 博客系统设置
**blog 下的分类和tag 是自动生成的, 在页面的frontmatter可以设置**
```
---
title: 首次新增分类
date: 2023/06/07
tags:
 - 定义tag
categories:
 - 定义分类
---
```
**页面级的frontmatter上设置tag和categories可以自动添加分类和标签, 不需要手动设置**

reco 主题实现了博客的功能，但是 vuepress 没有办法区分博客或是文档，导致文档也会出现在博客区域，所以主题对博客和文档的存放位置进行了约束，博客文章请放在 /blogs 文件夹中（强制），文档请放在 /docs 中（不强制）

***文档加密***
>需要使用密文加密
>>[生成密文链接](https://vuepress-theme-reco.recoluan.com/docs/theme/password.html#%E8%8E%B7%E5%8F%96%E5%AF%86%E6%96%87)
>>> 网站加密 在frontmatter上设置password即可