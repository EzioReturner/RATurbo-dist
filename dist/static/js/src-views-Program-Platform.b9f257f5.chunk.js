(window.webpackJsonp=window.webpackJsonp||[]).push([[20,4,26,55,102,104,105,106,146,172],{"./node_modules/antd/es/avatar/index.js":function(e,t,n){e.exports=n("dll-reference _dll_components")(466)},"./node_modules/antd/es/card/index.js":function(e,t,n){e.exports=n("dll-reference _dll_components")(702)},"./node_modules/antd/es/col/index.js":function(e,t,n){e.exports=n("dll-reference _dll_components")(99)},"./node_modules/antd/es/row/index.js":function(e,t,n){e.exports=n("dll-reference _dll_components")(169)},"./node_modules/echarts/lib/chart/bar.js":function(e,t,n){e.exports=n("dll-reference _dll_components")(1439)},"./node_modules/echarts/lib/chart/effectScatter.js":function(e,t,n){e.exports=n("dll-reference _dll_components")(1543)},"./node_modules/echarts/lib/chart/gauge.js":function(e,t,n){e.exports=n("dll-reference _dll_components")(1506)},"./node_modules/echarts/lib/chart/line.js":function(e,t,n){e.exports=n("dll-reference _dll_components")(1428)},"./node_modules/echarts/lib/chart/map.js":function(e,t,n){e.exports=n("dll-reference _dll_components")(1463)},"./node_modules/echarts/lib/chart/pie.js":function(e,t,n){e.exports=n("dll-reference _dll_components")(1444)},"./node_modules/echarts/lib/chart/radar.js":function(e,t,n){e.exports=n("dll-reference _dll_components")(1453)},"./node_modules/echarts/lib/chart/scatter.js":function(e,t,n){e.exports=n("dll-reference _dll_components")(1449)},"./node_modules/echarts/lib/component/dataset.js":function(e,t,n){e.exports=n("dll-reference _dll_components")(771)},"./node_modules/echarts/lib/component/legend.js":function(e,t,n){e.exports=n("dll-reference _dll_components")(813)},"./node_modules/echarts/lib/component/title.js":function(e,t,n){e.exports=n("dll-reference _dll_components")(1632)},"./node_modules/echarts/lib/component/tooltip.js":function(e,t,n){e.exports=n("dll-reference _dll_components")(1619)},"./src/api/platform.js":function(e,t,n){"use strict";n.r(t),n.d(t,"randomNumber",(function(){return l})),n.d(t,"getProjectList",(function(){return c})),n.d(t,"getContact",(function(){return i}));var r=n("./src/utils/io.ts"),o=n("./node_modules/mockjs/dist/mock.js"),a=n.n(o);function l(e,t){return Math.floor(Math.random()*(t-e)+e)}var s=a.a.mock({"data|6-6":[{name:"@first",detail:"@paragraph(1)",domain:"@domain",time:"@boolean"}]});function c(){return r.default.get("/get/projectList")}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:15;return r.default.get("https://randomuser.me/api/?inc=picture,name&results=".concat(e))}a.a.mock("/get/projectList",s)},"./src/assets/image/userPhoto.jpg":function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/img/userPhoto.d5c9292d.jpg"},"./src/views/Program/Platform/MultiAnalysis.tsx":function(e,t,n){"use strict";n.r(t);n("./node_modules/antd/es/card/style/index.js");var r=n("./node_modules/antd/es/card/index.js"),o=n("./node_modules/react/index.js"),a=n.n(o),l=n("./src/assets/chartOption.js"),s=n("./src/components/Echarts/index.tsx"),c=n("./src/components/FormatterLocale/index.tsx");t.default=function(){return a.a.createElement(r.default,{className:"fat-card",hoverable:!0,bordered:!1,title:a.a.createElement(c.default,{id:"platform.MutliAnalysis"})},a.a.createElement(s.default,{option:l.multiAnalysisOption}))}},"./src/views/Program/Platform/PlatformProject.tsx":function(e,t,n){"use strict";n.r(t);n("./node_modules/antd/es/card/style/index.js");var r=n("./node_modules/antd/es/card/index.js"),o=n("./node_modules/react/index.js"),a=n.n(o),l=n("./src/api/platform.js"),s=n("./src/components/FormatterLocale/index.tsx");function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=u(this,(e=d(t)).call.apply(e,[this].concat(o)))).state={projectList:[]},n}var n,o,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),n=t,(o=[{key:"randomNumber",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return Math.floor(Math.random()*(t-e)+e)}},{key:"componentDidMount",value:function(){var e=this;Object(l.getProjectList)().then((function(t){e.setState({projectList:t.data})}))}},{key:"render",value:function(){var e=this,t=this.state.projectList;return a.a.createElement(r.default,{title:a.a.createElement(s.default,{id:"platform.projectList"}),className:"fat-card",bordered:!1,hoverable:!0,bodyStyle:{padding:"14px"}},a.a.createElement("div",{className:"project-list"},t.map((function(t,n){var r=t.name,o=t.detail,l=t.domain,s=t.time;return a.a.createElement("div",{key:n,className:"projectInfo"},a.a.createElement("div",{className:"top"},a.a.createElement("p",{className:s?"triangle":"rect"},r),a.a.createElement("span",null,o)),a.a.createElement("div",{className:"bottom"},a.a.createElement("span",{className:"domain"},l),a.a.createElement("span",{className:"time"},"".concat(e.randomNumber()," ").concat(s?"years":"day"," ago"))))}))))}}])&&i(n.prototype,o),c&&i(n,c),t}(o.PureComponent);t.default=f},"./src/views/Program/Platform/QuickStart.tsx":function(e,t,n){"use strict";n.r(t);n("./node_modules/antd/es/card/style/index.js");var r=n("./node_modules/antd/es/card/index.js"),o=(n("./node_modules/antd/es/row/style/index.js"),n("./node_modules/antd/es/row/index.js")),a=(n("./node_modules/antd/es/button/style/index.js"),n("./node_modules/antd/es/button/index.js")),l=(n("./node_modules/antd/es/col/style/index.js"),n("./node_modules/antd/es/col/index.js")),s=(n("./node_modules/antd/es/avatar/style/index.js"),n("./node_modules/antd/es/avatar/index.js")),c=n("./node_modules/react/index.js"),i=n.n(c),u=n("./src/api/platform.js"),d=n("./src/components/FormatterLocale/index.tsx"),m=n("./node_modules/@ant-design/icons/es/icons/PlusOutlined.js");function f(e){return(f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return!t||"object"!==f(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var x=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=y(this,(e=b(t)).call.apply(e,[this].concat(o)))).state={contact:[]},n}var n,c,f;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,e),n=t,(c=[{key:"componentDidMount",value:function(){var e=this;Object(u.getContact)().then((function(t){e.setState({contact:t.results})}))}},{key:"render",value:function(){var e=this.state.contact;return i.a.createElement(r.default,{title:i.a.createElement(d.default,{id:"platform.quickContact"}),bordered:!1,hoverable:!0,loading:!e.length},i.a.createElement(o.default,{className:"quick-start"},e.map((function(e,t){return i.a.createElement(l.default,{className:"ac",key:t,xl:2,lg:4,md:4,sm:4,xs:6},i.a.createElement(s.default,{src:e.picture.thumbnail}),i.a.createElement("p",null,e.name.first))})),i.a.createElement(l.default,{className:"ac",xl:2,lg:4,md:4,sm:4,xs:6},i.a.createElement(a.default,{type:"primary",size:"small",icon:i.a.createElement(m.a,null)},"add"))))}}])&&p(n.prototype,c),f&&p(n,f),t}(c.PureComponent);t.default=x},"./src/views/Program/Platform/TeamCard.tsx":function(e,t,n){"use strict";n.r(t);n("./node_modules/antd/es/card/style/index.js");var r=n("./node_modules/antd/es/card/index.js"),o=n("./node_modules/react/index.js"),a=n.n(o),l=n("./src/components/FormatterLocale/index.tsx");function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t){return!t||"object"!==s(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),i(this,u(t).apply(this,arguments))}var n,o,s;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),n=t,(o=[{key:"render",value:function(){return a.a.createElement(r.default,{title:a.a.createElement(l.default,{id:"platform.teamCard"}),style:{width:"100%"},hoverable:!0,bordered:!1},a.a.createElement("div",{className:"team-card"},["amoy avenger","soul tango","we are Groot"].map((function(e,t){return a.a.createElement("div",{className:"team-card-detail",key:t},a.a.createElement("p",null,e),a.a.createElement("span",null,"project:",Math.floor(-9*Math.random()+10)))}))))}}])&&c(n.prototype,o),s&&c(n,s),t}(o.PureComponent);t.default=m},"./src/views/Program/Platform/index.tsx":function(e,t,n){"use strict";n.r(t);n("./node_modules/antd/es/row/style/index.js");var r=n("./node_modules/antd/es/row/index.js"),o=(n("./node_modules/antd/es/col/style/index.js"),n("./node_modules/antd/es/col/index.js")),a=n("./node_modules/react/index.js"),l=n.n(a),s=n("./node_modules/mobx-react/dist/mobx-react.module.js"),c=n("./src/components/PageWrapper/index.tsx"),i=n("./src/components/FormatterLocale/index.tsx"),u=n("./src/views/Program/Platform/PlatformProject.tsx"),d=n("./src/views/Program/Platform/QuickStart.tsx"),m=n("./src/views/Program/Platform/MultiAnalysis.tsx"),f=n("./src/views/Program/Platform/TeamCard.tsx");n("./src/views/Program/Platform/platform.less");t.default=Object(s.inject)("userStore")(Object(s.observer)((function(e){var t=e.userStore.userInfo,a=l.a.createElement(o.default,{xl:16,lg:16,md:16,sm:24,xs:24},l.a.createElement("div",{className:"p-left-part"},l.a.createElement("img",{alt:"",src:n("./src/assets/image/userPhoto.jpg").default,className:"user-photo"}),l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement(i.default,{id:"platform.morning"}),", ",t.name,","," ",l.a.createElement(i.default,{id:"platform.greating"})),l.a.createElement("span",{className:"subText"},l.a.createElement(i.default,{id:"platform.job"})," | ",l.a.createElement(i.default,{id:"platform.department"}))))),s=l.a.createElement("div",{className:"p-right-part"},l.a.createElement(r.default,{gutter:24},l.a.createElement(o.default,{xl:8,lg:8,md:8,sm:4,xs:8},l.a.createElement(i.default,{id:"platform.projects",className:"numTitle"}),l.a.createElement("p",null,"23")),l.a.createElement(o.default,{xl:8,lg:8,md:8,sm:4,xs:8},l.a.createElement(i.default,{id:"platform.rank",className:"numTitle"}),l.a.createElement("p",null,"1/9")),l.a.createElement(o.default,{xl:8,lg:8,md:8,sm:4,xs:8},l.a.createElement(i.default,{id:"platform.visitors",className:"numTitle"}),l.a.createElement("p",null,"2333"))));return l.a.createElement(c.default,{content:a,extraContent:s},l.a.createElement("div",{className:"platform"},l.a.createElement(r.default,{gutter:24},l.a.createElement(o.default,{xl:16,lg:24,md:24,sm:24,xs:24},l.a.createElement(d.default,null),l.a.createElement(r.default,{style:{marginTop:"24px"}},l.a.createElement(u.default,null))),l.a.createElement(o.default,{xl:8,lg:24,md:24,sm:24,xs:24},l.a.createElement(m.default,null),l.a.createElement(r.default,{style:{marginTop:"24px"}},l.a.createElement(f.default,null))))))})))},"./src/views/Program/Platform/platform.less":function(e,t,n){}}]);
//# sourceMappingURL=src-views-Program-Platform.b9f257f5.chunk.js.map