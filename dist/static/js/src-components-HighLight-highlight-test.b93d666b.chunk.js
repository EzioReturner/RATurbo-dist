(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{"./src/components/HighLight/highlight.test.js":function(e,n,t){"use strict";t.r(n);var r=t("./node_modules/react/index.js"),o=t.n(r),i=t("./node_modules/enzyme/build/index.js"),s=t("./src/components/HighLight/index.tsx");function a(e,n,t,r,o,i,s){try{var a=e[i](s),c=a.value}catch(u){return void t(u)}a.done?n(c):Promise.resolve(c).then(r,o)}function c(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function s(e){a(i,r,o,s,c,"next",e)}function c(e){a(i,r,o,s,c,"throw",e)}s(void 0)}))}}describe("Highlight",(function(){beforeAll(c(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:jest.setTimeout(1e6);case 1:case"end":return e.stop()}}),e)})))),it("highlight text",c(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=Object(i.mount)(o.a.createElement(s.default,{val:"2333woasd2333",tarVal:"2333"})),expect(n.html()).toEqual('<span style="color: rgb(30, 144, 255);">2333</span><span>woasd</span><span style="color: rgb(30, 144, 255);">2333</span>');case 2:case"end":return e.stop()}}),e)}))))}))},1:function(e,n){},2:function(e,n){},3:function(e,n){},4:function(e,n){}}]);
//# sourceMappingURL=src-components-HighLight-highlight-test.b93d666b.chunk.js.map