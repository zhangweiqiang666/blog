(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{963:function(e,t){},972:function(e,t,n){"use strict";n.r(t);var r=n(946),o=n(1),a=n.n(o),u=n(948),c=function(e){var t=e.state.g2plot.Line;Object(o.useEffect)((function(){if(n.current)return new t(n.current,{data:r,xField:"year",yField:"value"}).render()}),[]);var n=Object(o.useRef)(null),r=[{year:"1991",value:3},{year:"1992",value:4},{year:"1993",value:3.5},{year:"1994",value:5},{year:"1995",value:4.9},{year:"1996",value:6},{year:"1997",value:7},{year:"1998",value:9},{year:"1999",value:13}];return a.a.createElement(u.a,{breadcrumbList:[{name:"\u9996\u9875"}]},"\u9996\u9875 // \u7ad9\u70b9\u76d1\u63a7 \u7ad9\u70b9\u603b\u89c8 \u7ad9\u70b9\u7edf\u8ba1",a.a.createElement("div",{ref:n}))},i=n(963),f=n(949);function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(n,!0).forEach((function(t){O(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t){return!t||"object"!==l(t)&&"function"!==typeof t?w(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"default",(function(){return d}));var d=function(e){function t(){var e,n;y(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return O(w(n=v(this,(e=h(t)).call.apply(e,[this].concat(o)))),"View",c),O(w(n),"Model",i),O(w(n),"SSR",!1),O(w(n),"getArticleList",(function(){return regeneratorRuntime.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(n.resHandler((function(){return n.postApi(f.a.getMngArticleList)}),(function(e){n.handleChangeState(e)}),(function(e){})));case 2:case"end":return e.stop()}}))})),n}var r,o,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,e),r=t,(o=[{key:"getInitialState",value:function(e){return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",p({},e,{currentPath:this.location.pathname}));case 1:case"end":return t.stop()}}),null,this)}},{key:"componentWillCreate",value:function(){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.context.isClient){t.next=5;break}return t.next=3,regeneratorRuntime.awrap(n.e(0).then(n.bind(null,956)));case 3:e=t.sent,this.handleChangeState({g2plot:e});case 5:case"end":return t.stop()}}),null,this)}},{key:"componentDidFirstMount",value:function(){return regeneratorRuntime.async((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}))}}])&&b(r.prototype,o),a&&b(r,a),t}(r.a)}}]);