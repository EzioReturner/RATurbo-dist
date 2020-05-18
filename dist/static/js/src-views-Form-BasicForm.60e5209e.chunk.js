(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{"./src/views/Form/BasicForm.tsx":function(e,a,t){"use strict";t.r(a);t("./node_modules/antd/es/card/style/index.js");var l=t("./node_modules/antd/es/card/index.js"),n=(t("./node_modules/antd/es/upload/style/index.js"),t("./node_modules/antd/es/upload/index.js")),s=(t("./node_modules/antd/es/button/style/index.js"),t("./node_modules/antd/es/button/index.js")),r=(t("./node_modules/antd/es/rate/style/index.js"),t("./node_modules/antd/es/rate/index.js")),o=(t("./node_modules/antd/es/row/style/index.js"),t("./node_modules/antd/es/row/index.js")),d=(t("./node_modules/antd/es/col/style/index.js"),t("./node_modules/antd/es/col/index.js")),m=(t("./node_modules/antd/es/checkbox/style/index.js"),t("./node_modules/antd/es/checkbox/index.js")),c=(t("./node_modules/antd/es/radio/style/index.js"),t("./node_modules/antd/es/radio/index.js")),u=(t("./node_modules/antd/es/slider/style/index.js"),t("./node_modules/antd/es/slider/index.js")),i=(t("./node_modules/antd/es/switch/style/index.js"),t("./node_modules/antd/es/switch/index.js")),p=(t("./node_modules/antd/es/input-number/style/index.js"),t("./node_modules/antd/es/input-number/index.js")),g=(t("./node_modules/antd/es/form/style/index.js"),t("./node_modules/antd/es/form/index.js")),E=(t("./node_modules/antd/es/select/style/index.js"),t("./node_modules/antd/es/select/index.js")),x=t("./node_modules/react/index.js"),b=t.n(x),y=t("./node_modules/@ant-design/icons/es/icons/UploadOutlined.js"),f=t("./node_modules/@ant-design/icons/es/icons/InboxOutlined.js"),v=t("./src/components/PageWrapper/index.tsx"),h=t("./src/components/FormatterLocale/index.tsx");function j(){return(j=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}function _(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var w=E.a.Option,I={labelCol:{span:6},wrapperCol:{span:14}},k=function(e){return console.log("Upload event:",e),Array.isArray(e)?e:e&&e.fileList};a.default=function(){var e;return b.a.createElement(v.default,{title:b.a.createElement(h.default,{id:"form.basicFormTitle",defaultMessage:"\u57fa\u7840\u8868\u5355"}),subTitle:b.a.createElement(h.default,{id:"form.basicSubtitle",defaultMessage:"\u8868\u5355\u9875\u7528\u4e8e\u5411\u7528\u6237\u6536\u96c6\u6216\u9a8c\u8bc1\u4fe1\u606f\uff0c\u57fa\u7840\u8868\u5355\u5e38\u89c1\u4e8e\u6570\u636e\u9879\u8f83\u5c11\u7684\u8868\u5355\u573a\u666f\u3002"})},b.a.createElement(l.a,{bordered:!1,className:"fat-header"},b.a.createElement(g.a,j({name:"validate_other"},I,{onFinish:function(e){console.log("Received values of form: ",e)},initialValues:(e={},_(e,"input-number",3),_(e,"checkbox-group",["A","B"]),_(e,"rate",3.5),e)}),b.a.createElement(g.a.Item,{label:"Plain Text"},b.a.createElement("span",{className:"ant-form-text"},"China")),b.a.createElement(g.a.Item,{name:"select",label:"Select",hasFeedback:!0,rules:[{required:!0,message:"Please select your country!"}]},b.a.createElement(E.a,{placeholder:"Please select a country"},b.a.createElement(w,{value:"china"},"China"),b.a.createElement(w,{value:"usa"},"U.S.A"))),b.a.createElement(g.a.Item,{name:"select-multiple",label:"Select[multiple]",rules:[{required:!0,message:"Please select your favourite colors!",type:"array"}]},b.a.createElement(E.a,{mode:"multiple",placeholder:"Please select favourite colors"},b.a.createElement(w,{value:"red"},"Red"),b.a.createElement(w,{value:"green"},"Green"),b.a.createElement(w,{value:"blue"},"Blue"))),b.a.createElement(g.a.Item,{label:"InputNumber"},b.a.createElement(g.a.Item,{name:"input-number",noStyle:!0},b.a.createElement(p.a,{min:1,max:10})),b.a.createElement("span",{className:"ant-form-text"}," machines")),b.a.createElement(g.a.Item,{name:"switch",label:"Switch",valuePropName:"checked"},b.a.createElement(i.a,null)),b.a.createElement(g.a.Item,{name:"slider",label:"Slider"},b.a.createElement(u.a,{marks:{0:"A",20:"B",40:"C",60:"D",80:"E",100:"F"}})),b.a.createElement(g.a.Item,{name:"radio-group",label:"Radio.Group"},b.a.createElement(c.a.Group,null,b.a.createElement(c.a,{value:"a"},"item 1"),b.a.createElement(c.a,{value:"b"},"item 2"),b.a.createElement(c.a,{value:"c"},"item 3"))),b.a.createElement(g.a.Item,{name:"radio-button",label:"Radio.Button"},b.a.createElement(c.a.Group,null,b.a.createElement(c.a.Button,{value:"a"},"item 1"),b.a.createElement(c.a.Button,{value:"b"},"item 2"),b.a.createElement(c.a.Button,{value:"c"},"item 3"))),b.a.createElement(g.a.Item,{name:"checkbox-group",label:"Checkbox.Group"},b.a.createElement(m.a.Group,null,b.a.createElement(o.a,null,b.a.createElement(d.a,{span:8},b.a.createElement(m.a,{value:"A",style:{lineHeight:"32px"}},"A")),b.a.createElement(d.a,{span:8},b.a.createElement(m.a,{value:"B",style:{lineHeight:"32px"},disabled:!0},"B")),b.a.createElement(d.a,{span:8},b.a.createElement(m.a,{value:"C",style:{lineHeight:"32px"}},"C")),b.a.createElement(d.a,{span:8},b.a.createElement(m.a,{value:"D",style:{lineHeight:"32px"}},"D")),b.a.createElement(d.a,{span:8},b.a.createElement(m.a,{value:"E",style:{lineHeight:"32px"}},"E")),b.a.createElement(d.a,{span:8},b.a.createElement(m.a,{value:"F",style:{lineHeight:"32px"}},"F"))))),b.a.createElement(g.a.Item,{name:"rate",label:"Rate"},b.a.createElement(r.a,null)),b.a.createElement(g.a.Item,{name:"upload",label:"Upload",valuePropName:"fileList",getValueFromEvent:k,extra:"longgggggggggggggggggggggggggggggggggg"},b.a.createElement(n.a,{name:"logo",action:"/upload.do",listType:"picture"},b.a.createElement(s.a,null,b.a.createElement(y.a,null)," Click to upload"))),b.a.createElement(g.a.Item,{label:"Dragger"},b.a.createElement(g.a.Item,{name:"dragger",valuePropName:"fileList",getValueFromEvent:k,noStyle:!0},b.a.createElement(n.a.Dragger,{name:"files",action:"/upload.do"},b.a.createElement("p",{className:"ant-upload-drag-icon"},b.a.createElement(f.a,null)),b.a.createElement("p",{className:"ant-upload-text"},"Click or drag file to this area to upload"),b.a.createElement("p",{className:"ant-upload-hint"},"Support for a single or bulk upload.")))),b.a.createElement(g.a.Item,{wrapperCol:{span:12,offset:6}},b.a.createElement(s.a,{type:"primary",htmlType:"submit"},"Submit")))))}}}]);
//# sourceMappingURL=src-views-Form-BasicForm.60e5209e.chunk.js.map