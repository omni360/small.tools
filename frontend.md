# 前端技术汇总
## RxJS－Javascript 的 Reactive 扩展 RxJS
静态网页已经成为历史，如今的web设计趋势是预测客户的想法并提供更好的交互功能，例如自动填写表单，搜索Wikipedia等．RxJS框架可以很方便的为鼠标和键盘提供相应．
示例代码：
```javascript
var $input = $('#input'),
	$results = $('results');
	/*only get the value from each key up */
	var keyups = Rx.Observable.fromEvent(input,'keyup')
		.map(function(e){
			return e.target.value;
		})
		.filter(function(text) {
			return text.length > 2;
		});
	/* Now throttle/debounce the input for 500ms */
	var throttled = keyups
		.throttle(500/*ms */);
	/* Now get only distinct values, so we eliminate the arrows and other control characters */
	
	var distinct =keyups
		.distinctUntilChanged();
```
## electron
## loash - 一个现代化的实用的JavaScript工具库，提供了一致性，模块化，性能和配件等功能．
-Array/Collection/Date/Function/Lang/Math/Number/Object/Seq/String/Util/Properties
## underscore
-Underscore 是一个 JavaScript 工具库，它提供了一整套函数式编程的实用功能，但是没有扩展任何 JavaScript 内置对象。 他解决了这个问题：“如果我面对一个空白的 HTML 页面，并希望立即开始工作，我需要什么？” 他弥补了 jQuery 没有实现的功能，同时又是 Backbone 必不可少的部分。
## lzma
-一个Lempel-Ziv-Markov chain(7zip)压缩算法的javascript实现．
## style-loader
-webpack 下加载样式表文件．
## css-loader
-webpack　下加载css文件．
## phonegap
-PhoneGap 是一款HTML5平台，通过它，开发商可以使用HTML、CSS及JavaScript来开发本地移动应用程序。因此，目前开发商可以只 编写一次应用程序，然后在7个主要的移动平台和应用程序商店(app store)里进行发布，这些移动平台和应用程序商店包括：iOS、Android、BlackBerry、webOS、bada、Winodws Phone以及Symbian。
-它使开发者能够利用iPhone，Android，Palm，Symbian,WP,Bada和Blackberry智能手机的核心功能——包括地理定位，加速器，联系人，声音和振动等，此外PhoneGap拥有丰富的插件，可以以此扩展无限的功能。
## cordova
-Apache Cordova是PhoneGap贡献给Apache后的开源项目，是从PhoneGap中抽出的核心代码，是驱动PhoneGap的核心引擎。你可以把他想象成类似于Webkit和Google Chrome的关系。
## Ionic
-Ionic 底层打包使用 Cordova ( 和 Phonegap 一样 ) 底层打包用 Cordova 是不错的。 Ionic 是一个全堆栈的混合应用开发框架，可以理解成 Ionic = Cordova + AngularJS + Ionic UI

