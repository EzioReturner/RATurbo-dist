(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{"./src/views/Program/Unit/CheckboxUnit.tsx":function(e,t,n){"use strict";n.r(t);n("./node_modules/antd/es/checkbox/style/index.js");var o=n("./node_modules/antd/es/checkbox/index.js"),r=n("./node_modules/react/index.js"),c=n.n(r);function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=o.a.Group,f=["Apple","Pear","Orange"],p=["Apple","Orange"],d=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,r=new Array(o),c=0;c<o;c++)r[c]=arguments[c];return(n=l(this,(e=u(t)).call.apply(e,[this].concat(r)))).state={checkedList:p,indeterminate:!0,checkAll:!1},n.onChange=function(e){n.setState({checkedList:e,indeterminate:!!e.length&&e.length<f.length,checkAll:e.length===f.length})},n.onCheckAllChange=function(e){n.setState({checkedList:e.target.checked?f:[],indeterminate:!1,checkAll:e.target.checked})},n}var n,r,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"site-checkbox-all-wrapper"},c.a.createElement(o.a,{indeterminate:this.state.indeterminate,onChange:this.onCheckAllChange,checked:this.state.checkAll},"Check all")),c.a.createElement("br",null),c.a.createElement(h,{options:f,value:this.state.checkedList,onChange:this.onChange}))}}])&&i(n.prototype,r),a&&i(n,a),t}(c.a.Component);t.default=d}}]);
//# sourceMappingURL=src-views-Program-Unit-CheckboxUnit.f37fded2.chunk.js.map