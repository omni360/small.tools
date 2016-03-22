# angular学习笔记
## 1.环境搭建-自动化和工业化开发环境.
开发工具框架
- 项目构建工具-yeoman
- generator-modern-web-dev 基于modern-web-dev-build的一个构建框架．
- 代码编辑工具-够强大，足够灵活，支持zencoding(emmet),推荐SubLime,WebStorm,Atom
- 断点调试工具-Chrome,Angular Batarang,Angular Watcher,Webgl Inspector,THREE.js Inspector.
 
- 版本管理工具-Git,mysysgit,tortoisegit
- 代码合并和混淆工具－gulp,grunt,nodemon
- nodemon-可以用来监控node.js源代码的任何变化和自动重启服务器．
- uglify-代码混淆，
- concat-合并工具
- watch-监控文件．
- 依赖管理工具
- npm nodejs 包管理工具
- bower twitter发布的依赖管理工具 
- SystemJS: 模块儿加载器
-systemjs 是一个最小系统加载工具，用来创建插件来处理可替代的场景加载过程，包括加载 CSS 场景和图片，主要运行在浏览器和 NodeJS 中。它是 ES6 浏览器加载程序的的扩展，将应用在本地浏览器中。通常创建的插件名称是模块本身，要是没有特意指定用途，则默认插件名是模块的扩展名称。
             
             通常它支持创建的插件种类有：
             
             CSS System.import('my/file.css!')
             Image System.import('some/image.png!image')
             JSON System.import('some/data.json!').then(function(json){})
             Markdown System.import('app/some/project/README.md!').then(function(html) {})
             Text System.import('some/text.txt!text').then(function(text) {})
             WebFont System.import('google Port Lligat Slab, Droid Sans !font')

		* Broserify: 在浏览器端使用类似于node的require()方式来组织javascript代码．
		* jspm 
			*1. 是```SystemJS```通用的模块加载器的包管理器，基于动态ES6模块加载器．
			*2. 直接从任意registry(比如npm或者github)加载任意模块格式(AMD,ES6,COMMONJS and globals).
			*3. 开发环境，使用ES6(ECMAScript 6)加载模块化文件和插件．
			*4. 生产环境(当然也也可以在开发环境中)使用一条命令可以将众多bundles优化到一个bundle.
		* typings
		* tsd
	* 浏览器同步测试工具 - BrowserSync
	* 单元测试工具
		* karma-测试容器
			* karma 测试容器
			* karma-chrome-launcher chrome浏览器启动
			* karma-coverage 检查测试覆盖率插件
			* karma-jasmine 编写单元测试用例
		* jasmine-类似与junit,提供了一套语法用来编写测试用例，jasmine主要包含四种概念：分组，用例，期望，匹配，分别对应四个函数．
			* describe(string,function)	－　表示一个分组，也就是一组测试用例．
			* it(string,function) - 表示单个的测试用例．
			* expect(expression) - 表示期望,```@expression```这个表达式具有某个值或具有某种行为．
			* to***(arg) - 这个函数表示匹配．
	* 集成测试工具-模拟用户输入，鼠标点击等操作.
		* Protractor-专门为AngularJS定制的集成测试工具．基于WebDriverJS.利用WebDriverJS通过Node.js直接调用浏览器．
	* 代码质量和风格管理工具
		* jscs - javascript 代码风格管理工具.
		* jshint - javascript 代码质量管理工具.
		* tslint - typescript 代码风格质量工具.
	* 语言和规范
		* typescript
		* babel
		* dart
		* closure
		* coffee
	* 其它测试工具框架
		* Mocha
			Mocha同时支持TDD,BDD风格的测试代码
		* chain 
		* sinon.js
		* nodeunit
		* meteor
		* PhantomsJS
			PhantomJS是一个基于WebKit的服务端Javascript API．它全面支持Web而不需浏览器支持，其快速，原生支持各种Web标准：
				*1 DOM处理
				*2 CSS选择器
				*3 JSON,Canvas,SVG.
			PhantomJS可以用于　页面自动化，网络监测，网页截屏，以及无界面测试等．
#常见的前端测试类型以及框架
##TDD，BDD测试:Mocha+Chai
##单元测试:Karma+PhantomJS+Mocha+Chai+Sinonjs
##端到端测试:Selenium+NightWatchjs+Chrome

项目目录
	

基于Node.js，
*prtractor　模拟用户的输入，鼠标操作
## 2.核心概念与基本用法
### 2.1MVC
```
Model<------->Controller<------>View
```
- 起源:1979年，
- Model:数据模型层
	*1. 
- View:视图层，负责展示
- Controller:业务逻辑和控制逻辑
	*1. 不要视图去复用Controller,一个控制器一般只负责一小块视图
	*2. 不要在Controller中操作DOM,这不是控制器的职责.DOM的重绘非常的消耗资源．
	*3. 不要在Controller里面做数据格式化，ng有很好用的表单．
	*4. 不要在Controller里面做数据过滤操作,ng有$filter服务.
	*5. 一般来说，Controller是不会互相调用的，控制器之间的交互会通过事件进行．
* 好处:职责清晰，代码模块化
* 问题:为什么23种设计模式里面没有MVC？
	MVC是观察者模式(Observer),策略模式(Strategy)和组合模式(Composite)三个设计模式的演变，MVC是模式的组合．

###2.2模块化，依赖注入DI-Modules are Containers
angularjs中有好多概念，例如:Config,Routes,Filter等，但一切从模块开始的．首先创建Module然后在调用Service,Controller等等．
####神奇的$scope
	* $scope是一个POJO(Plain Old JavaScript Object)
	* $scope提供了一些工具方法$watch()/$apply()
	* $scope是表达式的执行环境(或者叫作用域).
	* $scope是一个树形结构，与DOM标签平行.
	* 子$scope对象会集成父$scope对象(一般位于ng-app上)
	* $scope可以传播事件,类似DOM事件，可以向上也可以向下．
	
```
	Module
		Config
			Routes
		Filter
		Directive
		Factory
			Service
			Provider
			Value
		Controller
```
###2.3指令系统
指令的代码实例：
```
<!doctype html>
<html ng-app="MyModule">
	<head>
		<meta charset="utf-8">
	</head>
	<body>
		<hello></hello>
	</body>
	<script src="js/angular-1.3.0.js"></script>
	<script src="HelloAngular_Directive.js"></script>
</html>
```
以下是js代码，调用指令．
```
var myModule = angular.module("MyModule", []);
myModule.directive("hello", function() {
    return {
        restrict: 'E',
        template: '<div>Hi everyone!</div>',
        replace: true
    }
});
```
###2.4双向数据绑定
* 为什么其他框架不实现双向数据绑定

###2.5service
###2.6Provider
###2.7表单
###2.8综合实例bookstore
##3.核心原理
###3.1Parser
###3.2双向数据绑定
###3.3依赖注入
##4.ng控件开发
###4.1用AngularJS改写jQuery控件
###4.2angularjs-ui
###4.3移动控件库-ionic
##5.TDD(测试驱动开发)和前端自动化测试
###5.1TDD设计思想
###5.2详解Jasmine和Protractor

$scope充当MVC中的Data-Model角色

