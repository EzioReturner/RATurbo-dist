(window.webpackJsonp=window.webpackJsonp||[]).push([[105,26],{"./node_modules/antd/es/avatar/index.js":function(e,t,n){e.exports=n("dll-reference _dll_components")(466)},"./node_modules/antd/es/card/index.js":function(e,t,n){e.exports=n("dll-reference _dll_components")(702)},"./node_modules/antd/es/col/index.js":function(e,t,n){e.exports=n("dll-reference _dll_components")(99)},"./node_modules/antd/es/row/index.js":function(e,t,n){e.exports=n("dll-reference _dll_components")(169)},"./src/api/platform.js":function(e,t,n){"use strict";n.r(t),n.d(t,"randomNumber",(function(){return s})),n.d(t,"getProjectList",(function(){return l})),n.d(t,"getContact",(function(){return u}));var o=n("./src/utils/io.ts"),r=n("./node_modules/mockjs/dist/mock.js"),a=n.n(r);function s(e,t){return Math.floor(Math.random()*(t-e)+e)}var c=a.a.mock({"data|6-6":[{name:"@first",detail:"@paragraph(1)",domain:"@domain",time:"@boolean"}]});function l(){return o.default.get("/get/projectList")}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:15;return o.default.get("https://randomuser.me/api/?inc=picture,name&results=".concat(e))}a.a.mock("/get/projectList",c)},"./src/views/Program/Platform/QuickStart.tsx":function(e,t,n){"use strict";n.r(t);n("./node_modules/antd/es/card/style/index.js");var o=n("./node_modules/antd/es/card/index.js"),r=(n("./node_modules/antd/es/row/style/index.js"),n("./node_modules/antd/es/row/index.js")),a=(n("./node_modules/antd/es/button/style/index.js"),n("./node_modules/antd/es/button/index.js")),s=(n("./node_modules/antd/es/col/style/index.js"),n("./node_modules/antd/es/col/index.js")),c=(n("./node_modules/antd/es/avatar/style/index.js"),n("./node_modules/antd/es/avatar/index.js")),l=n("./node_modules/react/index.js"),u=n.n(l),d=n("./src/api/platform.js"),i=n("./src/components/FormatterLocale/index.tsx"),f=n("./node_modules/@ant-design/icons/es/icons/PlusOutlined.js");function m(e){return(m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function y(e,t){return!t||"object"!==m(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var j=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(n=y(this,(e=b(t)).call.apply(e,[this].concat(r)))).state={contact:[]},n}var n,l,m;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,e),n=t,(l=[{key:"componentDidMount",value:function(){var e=this;Object(d.getContact)().then((function(t){e.setState({contact:t.results})}))}},{key:"render",value:function(){var e=this.state.contact;return u.a.createElement(o.default,{title:u.a.createElement(i.default,{id:"platform.quickContact"}),bordered:!1,hoverable:!0,loading:!e.length},u.a.createElement(r.default,{className:"quick-start"},e.map((function(e,t){return u.a.createElement(s.default,{className:"ac",key:t,xl:2,lg:4,md:4,sm:4,xs:6},u.a.createElement(c.default,{src:e.picture.thumbnail}),u.a.createElement("p",null,e.name.first))})),u.a.createElement(s.default,{className:"ac",xl:2,lg:4,md:4,sm:4,xs:6},u.a.createElement(a.default,{type:"primary",size:"small",icon:u.a.createElement(f.a,null)},"add"))))}}])&&p(n.prototype,l),m&&p(n,m),t}(l.PureComponent);t.default=j}}]);
//# sourceMappingURL=src-views-Program-Platform-QuickStart.9a5fbbed.chunk.js.map