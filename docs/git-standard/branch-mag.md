---
sidebarDepth: 3
sidebar: auto
---

# 分支管理

创建项目时（一般是服务型项目，工具型或辅助型项目可以简单一些），会针对不同环境创建三个常设分支：

- [1.1](#1.1) <a name='1.1'></a> develop：开发环境的稳定分支，公共开发环境基于该分支构建。
- [1.2](#1.2) <a name='1.2'></a> pre-release：测试环境的稳定分支，测试环境基于该分支构建。
- [1.3](#1.3) <a name='1.3'></a> master：生产环境的稳定分支，生产环境基于该分支构建。仅用来发布新版本，除了从 pre-release 或生产环境 Bug 修复分支进行 merge，不接受任何其它修改
  平时开发工作中，会根据需要由开发人员创建两类临时分支：

## 功能（feature）分支

为了开发某个特定功能，从 develop 分支上面分出来的。开发完成后，要 merge 到 develop 分支。功能分支的命名，可以采用 feature-*的形式命名(*为任务单号)

## Bug 修复（fixbug）分支

为了修复某个 bug，从常设分支上面分出来的。修复完成后，再 merge 到对应的分支。Bug 修复分支的命名，可以采用 fixbug-*的形式命名（*为 bug 单号）

## 流程规范

- [2.1](#2.1) <a name='2.1'></a> 从 develop 分支切出一个新分支，根据是功能还是 bug，命名为 feature-_ 或 fixbug-_。

- [2.2](#2.2) <a name='2.2'></a> 开发者完成开发，提交分支到远程仓库。

- [2.3](#2.3) <a name='2.3'></a> 开发者发起 merge 请求（可在 gitlab 页面“New merge request”），将新分支请求 merge 到 develop 分支，并提醒 code reviewer 进行 review

- [2.4](#2.4) <a name='2.4'></a> code reviewer 对代码 review 之后，若无问题，则接受 merge 请求，新分支 merge 到 develop 分支，同时可删除新建分支；若有问题，则不能进行 merge，可 close 该请求，同时通知开发者在新分支上进行相应调整。调整完后提交代码重复 review 流程。

- [2.5](#2.5) <a name='2.5'></a> 转测时，直接从当前 develop 分支 merge 到 pre-release 分支，重新构建测试环境完成转测。

- [2.6](#2.6) <a name='2.6'></a> 测试完成后，从 pre-release 分支 merge 到 master 分支，基于 master 分支构建生产环境完成上线。并对 master 分支打 tag，tag 名可为 v1.0.0*2019032115（即版本号*上线时间）

![正常开发流程](https://upload-images.jianshu.io/upload_images/10886683-fd4b1a73d4604d7a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 并行开发测试环境 Bug 修复流程

并行开发（即前一个版本已经转测但未上线，后一个版本又已在开发中并部分合并到了 develop 分支）过程中，转测后测试环境发现的 bug 需要修复，但是 develop 分支此时又有新内容且该部分内容目前不计划转测，可以 pre-release 切出一个 bug 修复分支。完成之后需要同时 merge 到 pre-release 分支与 develop 分支。merge 时参考“正常开发流程”。流程示意图如下

![并行开发测试环境Bug修复流程](https://upload-images.jianshu.io/upload_images/10886683-227af4a8a3355120.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 生产环境的 Bug 分两种情况

[3.1](#3.1) <a name='3.1'></a> 紧急 Bug：严重影响用户使用的为紧急 Bug，需立即进行修复。如关键业务流程存在问题，影响用户正常的业务行为。

[3.2](#3.2) <a name='3.2'></a> 非紧急 Bug 或优化：非关键业务流程问题，仅影响用户使用体验，或出现频率较小等，为非紧急 Bug，可规划到后续版本进行修复。
![生产环境的Bug分两种情况](https://upload-images.jianshu.io/upload_images/10886683-2ebc30086d105283.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
