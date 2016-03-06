#SKongDesigner 项目搭建
## 1.环境搭建-自动化和工业化开发环境.
开发工具框架
	* 项目构建工具-yeoman
		* generator-modern-web-dev 基于modern-web-dev-build的一个构建框架．
	* 代码编辑工具-够强大，足够灵活，支持zencoding(emmet),推荐SubLime,WebStorm,Atom
	* 断点调试工具-Chrome,Angular Batarang,Angular Watcher,Webgl Inspector,THREE.js Inspector.
	* 版本管理工具-Git,mysysgit,tortoisegit
	* 代码合并和混淆工具－gulp,grunt,nodemon
		* nodemon-可以用来监控node.js源代码的任何变化和自动重启服务器．
		* uglify-代码混淆，
		* concat-合并工具
		* watch-监控文件．
	* 依赖管理工具
		* npm nodejs 包管理工具
		* bower twitter发布的依赖管理工具 
		* SystemJS: 模块儿加载器
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
			
项目目录
	
