(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{907:function(e,t,n){"use strict";n.r(t);var r=n(889),o=n(0),c=n.n(o),u=n(888),i=n(894),a=function(e){return c.a.createElement(u.a,{BreadcrumbList:[{name:"home",href:"/home"},{name:"\u7559\u8a00\u677f"}]},c.a.createElement(i.a,null))},f=n(890);function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(n,!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return!t||"object"!==s(t)&&"function"!==typeof t?w(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"default",(function(){return g}));var g=function(e){function t(){var e,n;y(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return d(w(n=m(this,(e=h(t)).call.apply(e,[this].concat(o)))),"View",a),d(w(n),"preload",l({},n.preload)),d(w(n),"handleGetCommentList",(function(){return regeneratorRuntime.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(n.resHandler((function(){return n.postApi(f.a.getCommentList)}),(function(e){n.handleChangeState(l({},e))}),(function(e){})));case 2:case"end":return e.stop()}}))})),n}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(t,e),n=t,(r=[{key:"getInitialState",value:function(e){return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",l({},e,{currentPath:this.location.pathname}));case 1:case"end":return t.stop()}}),null,this)}},{key:"componentWillCreate",value:function(){return regeneratorRuntime.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(this.handleGetCommentList());case 2:case"end":return e.stop()}}),null,this)}},{key:"componentDidFirstMount",value:function(){return regeneratorRuntime.async((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}))}}])&&b(n.prototype,r),o&&b(n,o),t}(r.a)}}]);