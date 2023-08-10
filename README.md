# tidy-portal
干净整洁的单点登录门户
# 前言
这个项目已经改了好几个版本了，最开始是想在别人的框架上写几个页面，主要做一下单点登录的逻辑和应用信息的管理。但是选来选去，各种框架都试了一下，发现他们的项目都有点重，很多功能是我用不到的，想摘出去有点麻烦，不管他又看着心烦。干脆就不用别人的框架了，自己从头开始，用vue3搭一个架子，一点点来补这个坑。可能考虑的并不是很完善，但能保证所有的代码都可以按照自己的方式来组织，就当练习技术了。我想最难的应该是css了，原来做前端最烦的就是css，这次也趁机学习一下。毕竟躲得了初一躲不了十五。

# 关于路由结构的一些思考
 这个项目我选择用**模块-页面-按钮**的三层结构，对于一个系统来说，层级越少用户的学习成本就越低。对于一个功能来说，用户看一眼就知道是干什么的这是最好的设计。很多其他的框架都提供了多层目录结构的功能，他们的出发点是提供一个多样化的开发模板，满足不同的系统设计需求。但是对于我来说，选择越多可能负担也越多，而且这个项目的定位不是一个前端开发模板，只是一个具有特定功能的小系统，所以无需考虑功能的扩展性。


# 不着急，一步步来


