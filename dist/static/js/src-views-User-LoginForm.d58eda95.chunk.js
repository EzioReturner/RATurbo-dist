(window.webpackJsonp=window.webpackJsonp||[]).push([[123,176],{"./node_modules/antd/es/checkbox/index.js":function(e,n,t){e.exports=t("dll-reference _dll_components")(114)},"./node_modules/antd/es/form/index.js":function(e,n,t){e.exports=t("dll-reference _dll_components")(718)},"./node_modules/antd/es/input/index.js":function(e,n,t){e.exports=t("dll-reference _dll_components")(222)},"./src/views/User/LoginForm.tsx":function(e,n,t){"use strict";t.r(n);t("./node_modules/antd/es/button/style/index.js");var s=t("./node_modules/antd/es/button/index.js"),a=(t("./node_modules/antd/es/checkbox/style/index.js"),t("./node_modules/antd/es/checkbox/index.js")),o=(t("./node_modules/antd/es/form/style/index.js"),t("./node_modules/antd/es/form/index.js")),r=(t("./node_modules/antd/es/input/style/index.js"),t("./node_modules/antd/es/input/index.js")),l=(t("./node_modules/antd/es/message/style/index.js"),t("./node_modules/antd/es/message/index.js")),d=t("./node_modules/react/index.js"),i=t.n(d),m=t("./node_modules/@ant-design/icons/es/icons/UserOutlined.js"),u=t("./node_modules/@ant-design/icons/es/icons/LockOutlined.js"),c=t("./src/config/setting.js"),f=t("./node_modules/mobx-react/dist/mobx-react.module.js"),p=t("./node_modules/react-router-dom/esm/react-router-dom.js");t("./src/views/User/login.less"),t("./node_modules/animate.css/animate.css");function g(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var t=[],s=!0,a=!1,o=void 0;try{for(var r,l=e[Symbol.iterator]();!(s=(r=l.next()).done)&&(t.push(r.value),!n||t.length!==n);s=!0);}catch(d){a=!0,o=d}finally{try{s||null==l.return||l.return()}finally{if(a)throw o}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.default=Object(f.inject)("userStore")((function(e){var n=g(Object(d.useState)(!1),2),t=n[0],f=n[1],_=Object(p.useHistory)(),b=e,j=b.handleError,x=b.userStore;return i.a.createElement(d.Fragment,null,i.a.createElement("div",{className:"loginTitle"},"RA-Turbo"===c.siteName?i.a.createElement(i.a.Fragment,null,"R",i.a.createElement("span",null,"A"),"-TORBO"):c.siteName),i.a.createElement(o.default,{name:"normal_login",className:"login-form",initialValues:{remember:!0},onFinish:function(e){f(!0);var n=e.username,t=e.password;return new Promise((function(){x.handleUserLogin(n,t).then((function(e){e?(l.default.success("login success"),setTimeout((function(){_.push("/dashboard")}),800)):(f(!1),j())}))}))}},i.a.createElement(o.default.Item,{name:"username",rules:[{required:!0,message:"Please input your Username!"}]},i.a.createElement(r.default,{prefix:i.a.createElement(m.a,{className:"site-form-item-icon"}),placeholder:"Username: admin | guest"})),i.a.createElement(o.default.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}]},i.a.createElement(r.default,{prefix:i.a.createElement(u.a,{className:"site-form-item-icon"}),type:"password",placeholder:"Password: 123"})),i.a.createElement(o.default.Item,null,i.a.createElement(o.default.Item,{name:"remember",valuePropName:"checked",noStyle:!0},i.a.createElement(a.default,null,i.a.createElement("span",null,"Remember me"))),i.a.createElement("a",{className:"login-form-forgot",href:""},"Forgot password")),i.a.createElement(o.default.Item,null,i.a.createElement(s.default,{id:"login_button",type:"primary",htmlType:"submit",className:"login-form-button",loading:t},"Log in"),i.a.createElement("span",null," Or "),i.a.createElement("a",{href:""},"register now!"))))}))},"./src/views/User/login.less":function(e,n,t){}}]);
//# sourceMappingURL=src-views-User-LoginForm.d58eda95.chunk.js.map