let _input = 
`
刘晨  15959262317  379563000@qq.com
===

学历背景
---

|时间|学校|专业|学历|
|:---:|:---:|:---:|:---:|
|2014.9-2017.7|[厦门大学](http://www.xmu.edu.cn/)|机械工程|硕士|
|2010.9-2014.7|[北京理工大学](http://www.bit.edu.cn/)|机械工程及其自动化|本科|

项目经历
---

* 使用node、express搭建[中国计算机学会数据库专业委员会](http://tcdb.ccf.org.cn/),制作了后台更新文章、添加文章和删除文章的功能。

* 为实验室制作漂亮的网站——[厦门大学燃烧基础与应用实验室](http://cfm.xmu.edu.cn/),在wordpress模板基础上尝试添加个性化功能时，遇到了一个bug，并成功修复。

* 将一个用node、socket.io的聊天室改造成一个供5人玩的扑克牌联网游戏，其中主要工作做了分牌、出牌提示、比大小以及输赢判断的逻辑处理。

* 学习ruby on rails，参与图书馆签到项目中，为负责前端的同学提供学生信息数据接口，对登录者进行权限判断，在这个过程中学习MVC框架。

* 自学vue.js，对[coligo](https://github.com/coligo-io/markdown-editor-vuejs)进行模仿和优化，制作Markdown编辑器，为以后写Markdown文档服务。

* 本科阶段参与数学建模比赛，基于Dijkstra算法建立一个求解环游世界最短路径的数学模型。

基本技能
---

* 熟悉 CSS/HTML/JavaScript

* 会Vue.js/Highcharts/Node.js/Bootstrap/jQuery等

自我评价
---

虽是机械专业出身的研究生，但是自己对编程的热爱指引着自己做一名程序员。研究生阶段认真完成应该完成的研究之外，投入大量精力研究网站知识，希望成为一个优秀的程序员。在学校软件学院网站上看到贵公司的招聘简章，<span style="color: red">希望可以加入巨才（厦门）信息科技有限公司进行实习</span>。

如果觉得本简历符合要求，请点击简历右上角的<button class="btn btn-default" disabled="disabled">
<span class="glyphicon glyphicon-resize-small"></span>
</button>进入编辑模式，修改本简历内容，帮助刘晨增加实习经历，谢谢。
`

var demo = new Vue({
  el: '#editor',
  data: {
    input: _input,
    isfull: true
  },
  filters: {
    marked: marked
  },
  methods: {
    full: function (){
      this.isfull = true;
    },
    small: function (){
      this.isfull = false;
    }
  }
})