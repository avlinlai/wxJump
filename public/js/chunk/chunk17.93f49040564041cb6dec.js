webpackJsonp([17],{176:function(e,t){e.exports=function(e,t,n,r,o,i){var s,a=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(s=e,a=e.default);var d,c="function"==typeof a?a.options:a;if(t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),o&&(c._scopeId=o),i?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},c._ssrRegister=d):r&&(d=r),d){var l=c.functional,f=l?c.render:c.beforeCreate;l?(c._injectStyles=d,c.render=function(e,t){return d.call(t),f(e,t)}):c.beforeCreate=f?[].concat(f,d):[d]}return{esModule:s,exports:a,options:c}}},177:function(e,t,n){var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o=n(178),i={},s=r&&(document.head||document.getElementsByTagName("head")[0]),a=null,u=0,d=!1,c=function(){},l=null,f="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(e){for(var t=0;t<e.length;t++){var n=e[t],r=i[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(g(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var s=[];for(o=0;o<n.parts.length;o++)s.push(g(n.parts[o]));i[n.id]={id:n.id,refs:1,parts:s}}}}function m(){var e=document.createElement("style");return e.type="text/css",s.appendChild(e),e}function g(e){var t,n,r=document.querySelector("style["+f+'~="'+e.id+'"]');if(r){if(d)return c;r.parentNode.removeChild(r)}if(p){var o=u++;r=a||(a=m()),t=b.bind(null,r,o,!1),n=b.bind(null,r,o,!0)}else r=m(),t=function(e,t){var n=t.css,r=t.media,o=t.sourceMap;r&&e.setAttribute("media",r);l.ssrId&&e.setAttribute(f,t.id);o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}e.exports=function(e,t,n,r){d=n,l=r||{};var s=o(e,t);return h(s),function(t){for(var n=[],r=0;r<s.length;r++){var a=s[r];(u=i[a.id]).refs--,n.push(u)}t?h(s=o(e,t)):s=[];for(r=0;r<n.length;r++){var u;if(0===(u=n[r]).refs){for(var d=0;d<u.parts.length;d++)u.parts[d]();delete i[u.id]}}}};var v,_=(v=[],function(e,t){return v[e]=t,v.filter(Boolean).join("\n")});function b(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=_(t,o);else{var i=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}},178:function(e,t){e.exports=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],s=i[0],a={id:e+":"+o,css:i[1],media:i[2],sourceMap:i[3]};r[s]?r[s].parts.push(a):n.push(r[s]={id:s,parts:[a]})}return n}},182:function(e,t,n){"use strict";n.d(t,"D",function(){return o}),n.d(t,"A",function(){return i}),n.d(t,"E",function(){return s}),n.d(t,"F",function(){return a}),n.d(t,"B",function(){return u}),n.d(t,"r",function(){return d}),n.d(t,"s",function(){return c}),n.d(t,"q",function(){return l}),n.d(t,"t",function(){return f}),n.d(t,"u",function(){return p}),n.d(t,"m",function(){return h}),n.d(t,"v",function(){return m}),n.d(t,"y",function(){return g}),n.d(t,"z",function(){return v}),n.d(t,"x",function(){return _}),n.d(t,"w",function(){return b}),n.d(t,"c",function(){return w}),n.d(t,"g",function(){return C}),n.d(t,"f",function(){return x}),n.d(t,"e",function(){return E}),n.d(t,"d",function(){return y}),n.d(t,"n",function(){return U}),n.d(t,"i",function(){return O}),n.d(t,"h",function(){return q}),n.d(t,"j",function(){return k}),n.d(t,"k",function(){return R}),n.d(t,"l",function(){return D}),n.d(t,"C",function(){return I}),n.d(t,"G",function(){return T}),n.d(t,"o",function(){return j}),n.d(t,"b",function(){return N}),n.d(t,"p",function(){return $}),n.d(t,"a",function(){return S});var r=n(24),o=function(e){return r.a.request({url:"/source/"+e,method:"delete"})},i=function(e){return r.a.request({url:"/source",data:e,method:"post"})},s=function(e){return r.a.request({url:"/source/"+e,method:"get"})},a=function(e,t){return r.a.request({url:"/source/"+e,data:t,method:"put"})},u=function(e){return r.a.request({url:"/source/batchIdDelete",data:e,method:"post"})},d=function(e){return r.a.request({url:"/meal/batchIdDelete",data:e,method:"post"})},c=function(e){return r.a.request({url:"/meal/"+e,method:"delete"})},l=function(e){return r.a.request({url:"/meal",data:e,method:"post"})},f=function(e){return r.a.request({url:"/meal/"+e,method:"get"})},p=function(e,t){return r.a.request({url:"/meal/"+e,data:t,method:"put"})},h=function(){return r.a.request({url:"template/list",method:"get"})},m=function(e){return r.a.request({url:"size",data:e,method:"post"})},g=function(e){return r.a.request({url:"size/"+e,method:"get"})},v=function(e,t){return r.a.request({url:"size/"+e,data:t,method:"put"})},_=function(e){return r.a.request({url:"size/"+e,method:"delete"})},b=function(e){return r.a.request({url:"size/batchIdDelete",data:e,method:"post"})},w=function(e){return r.a.request({url:"goods",data:e,method:"post"})},C=function(e,t){return r.a.request({url:"goods/"+e,data:t,method:"put"})},x=function(e){return r.a.request({url:"goods/"+e,method:"get"})},E=function(e){return r.a.request({url:"goods/"+e,method:"delete"})},y=function(e){return r.a.request({url:"goods/batchDelete",data:e,method:"post"})},U=function(e){return r.a.request({url:"goodsOrder/ip_source/"+e,method:"get"})},O=function(e){return r.a.request({url:"goodsOrder/"+e,method:"delete"})},q=function(e){return r.a.request({url:"goodsOrder/batchDelete",data:e,method:"post"})},k=function(e){return r.a.request({url:"goodsOrder/"+e,method:"get"})},R=function(e,t){return r.a.request({url:"goodsOrder/"+e,data:t,method:"put"})},D=function(e,t){return r.a.request({url:"goodsOrder/status/"+e,data:t,method:"put"})},I=function(){return r.a.request({url:"source/count",method:"get"})},T=function(){return r.a.request({url:"source/zhcount",method:"get"})},j=function(){return r.a.request({url:"source/peoplecount",method:"get"})},N=function(e){return r.a.request({url:"goodsOrder/batchEdit",data:e,method:"post"})},$=function(){return r.a.request({url:"goodsOrder/repeatCheck",method:"get"})},S=function(e){return r.a.request({url:"source/Regenerate/"+e,method:"get"})}},199:function(e,t,n){var r=n(176)(n(202),n(203),!1,function(e){n(200)},null,null);e.exports=r.exports},200:function(e,t,n){var r=n(201);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(177)("098fe01e",r,!0,{})},201:function(e,t,n){(e.exports=n(75)(!1)).push([e.i,".avatar-uploader .el-upload{border:1px dashed #d9d9d9;border-radius:6px;cursor:pointer;position:relative;overflow:hidden}.avatar-uploader .el-upload:hover{border-color:#409eff}.avatar-uploader-icon{font-size:28px;color:#8c939d;width:100px;height:100px;line-height:100px;text-align:center}.avatar{width:100px;height:100px;display:block}",""])},202:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{imageUrl:"",upload_url:"/api/upload",headers:{Authorization:"Bearer "+this.$store.state.user.token}}},props:["img"],created:function(){this.imageUrl=this.img},watch:{img:function(e){this.imageUrl=e}},methods:{handleAvatarSuccess:function(e,t,n){console.log(e,t,n),this.imageUrl=URL.createObjectURL(t.raw),this.$emit("img-success",e.url)},beforeAvatarUpload:function(e){var t=e.size/1024/1024<2;return t||this.$message.error("上传头像图片大小不能超过 2MB!"),t}}}},203:function(e,t){e.exports={render:function(){var e=this.$createElement,t=this._self._c||e;return t("el-upload",{staticClass:"avatar-uploader",attrs:{action:this.upload_url,headers:this.headers,"show-file-list":!1,"on-success":this.handleAvatarSuccess,"before-upload":this.beforeAvatarUpload}},[this.imageUrl?t("img",{staticClass:"avatar",attrs:{src:this.imageUrl}}):t("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])},staticRenderFns:[]}},205:function(e,t,n){e.exports=n(206)},206:function(e,t,n){var r=n(176)(n(207),n(208),!1,null,null,null);e.exports=r.exports},207:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.listeners={}}return r(e,[{key:"on",value:function(e,t){void 0===this.listeners[e]&&(this.listeners[e]=[]),this.listeners[e].push(t)}},{key:"emit",value:function(e){this.listeners[e]&&this.listeners[e].forEach(function(e){return e()})}}]),e}();t.default={name:"VueUeditorWrap",data:function(){return{id:"editor"+Math.random().toString().slice(-10),editor:null,status:0,initValue:"",defaultConfig:{UEDITOR_HOME_URL:"./static/UEditor/",enableAutoSave:!1}}},props:{value:{type:String,default:""},config:{type:Object,default:function(){return{}}},init:{type:Function,default:function(){return function(){}}},destroy:{type:Boolean,default:!1},name:{type:String,default:""}},computed:{mixedConfig:function(){return Object.assign({},this.defaultConfig,this.config)}},methods:{registerButton:function(e){var t=e.name,n=e.icon,r=e.tip,o=e.handler,i=e.UE,s=void 0===i?window.UE:i;s.registerUI(t,function(e,t){e.registerCommand(t,{execCommand:function(){o(e,t)}});var i=new s.ui.Button({name:t,title:r,cssRules:"background-image: url("+n+") !important;background-size: cover;",onclick:function(){e.execCommand(t)}});return e.addListener("selectionchange",function(){var n=e.queryCommandState(t);-1===n?(i.setDisabled(!0),i.setChecked(!1)):(i.setDisabled(!1),i.setChecked(n))}),i})},_initEditor:function(){var e=this;this.$nextTick(function(){e.init(),e.editor=window.UE.getEditor(e.id,e.mixedConfig),e.editor.addListener("ready",function(){e.status=2,e.editor.setContent(e.initValue),e.$emit("ready",e.editor),e.editor.addListener("contentChange",function(){e.$emit("input",e.editor.getContent())})})})},_checkDependencies:function(){var e=this;return new Promise(function(t,n){!!window.UE&&!!window.UEDITOR_CONFIG&&0!==Object.keys(window.UEDITOR_CONFIG).length&&!!window.UE.getEditor?t():window.loadEnv?window.loadEnv.on("scriptsLoaded",function(){t()}):(window.loadEnv=new o,e._loadConfig().then(function(){return e._loadCore()}).then(function(){t(),window.loadEnv.emit("scriptsLoaded")}))})},_loadConfig:function(){var e=this;return new Promise(function(t,n){if(window.UE&&window.UEDITOR_CONFIG&&0!==Object.keys(window.UEDITOR_CONFIG).length)t();else{var r=document.createElement("script");r.type="text/javascript",r.src=e.mixedConfig.UEDITOR_HOME_URL+"ueditor.config.js",document.getElementsByTagName("head")[0].appendChild(r),r.onload=function(){window.UE&&window.UEDITOR_CONFIG&&0!==Object.keys(window.UEDITOR_CONFIG).length?t():console.error("加载ueditor.config.js失败,请检查您的配置地址UEDITOR_HOME_URL填写是否正确!\n",r.src)}}})},_loadCore:function(){var e=this;return new Promise(function(t,n){if(window.UE&&window.UE.getEditor)t();else{var r=document.createElement("script");r.type="text/javascript",r.src=e.mixedConfig.UEDITOR_HOME_URL+"ueditor.all.min.js",document.getElementsByTagName("head")[0].appendChild(r),r.onload=function(){window.UE&&window.UE.getEditor?t():console.error("加载ueditor.all.min.js失败,请检查您的配置地址UEDITOR_HOME_URL填写是否正确!\n",r.src)}}})},_setContent:function(e){e===this.editor.getContent()||this.editor.setContent(e)}},beforeDestroy:function(){this.destroy&&this.editor&&this.editor.destroy&&this.editor.destroy()},watch:{value:{handler:function(e){var t=this;switch(this.status){case 0:this.status=1,this.initValue=e,this._checkDependencies().then(function(){return t._initEditor()});break;case 1:this.initValue=e;break;case 2:this._setContent(e)}},immediate:!0}}}},208:function(e,t){e.exports={render:function(){var e=this.$createElement;return(this._self._c||e)("script",{attrs:{id:this.id,name:this.name,type:"text/plain"}})},staticRenderFns:[]}},406:function(e,t,n){var r=n(407);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(177)("08019644",r,!0,{})},407:function(e,t,n){(e.exports=n(75)(!1)).push([e.i,".left{float:left;width:55%}.right{width:30%;float:right}.edui-editor,.edui-editor-iframeholder{width:100%!important}.wheel_photo{width:200px;height:200px}",""])},408:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(205),o=n.n(r),i=n(199),s=n.n(i),a=n(182);t.default={components:{upload:s.a,VueUeditorWrap:o.a},data:function(){return{activeName:"first",goods:{goods_title:"",goods_desc:"",goods_content:"",wheel_photo:[],photo:"",price:"",is_up:"1",template_id:""},Ueconfig:{serverUrl:"/static/UEditor/php/controller.php"},template:[]}},methods:{success:function(e){this.goods.photo=e},wheel_success:function(e){this.goods.wheel_photo.push(e)},goodsAdd:function(){var e=this;Object(a.c)(this.goods).then(function(t){e.$message.success(t.data.msg),e.$router.push("/goods_list")})},deleteWheel:function(e){this.goods.wheel_photo.splice(e,1)}},created:function(){var e=this;Object(a.m)().then(function(t){e.template=t.data.data})}}},409:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-tabs",{model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[n("el-tab-pane",{attrs:{label:"商品基本信息",name:"first"}},[n("div",{staticClass:"left"},[n("el-form",{attrs:{"label-width":"80px",model:e.goods}},[n("el-form-item",{attrs:{label:"商品标题:"}},[n("el-input",{attrs:{placeholder:"商品标题"},model:{value:e.goods.goods_title,callback:function(t){e.$set(e.goods,"goods_title",t)},expression:"goods.goods_title"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"商品简述:"}},[n("el-input",{attrs:{placeholder:"商品简述"},model:{value:e.goods.goods_desc,callback:function(t){e.$set(e.goods,"goods_desc",t)},expression:"goods.goods_desc"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"详细描述:"}},[n("vue-ueditor-wrap",{attrs:{config:e.Ueconfig},model:{value:e.goods.goods_content,callback:function(t){e.$set(e.goods,"goods_content",t)},expression:"goods.goods_content"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"封面图片",prop:"photo"}},[n("upload",{attrs:{img:e.goods.photo},on:{"img-success":e.success}})],1),e._v(" "),n("el-form-item",{attrs:{label:"轮播图片"}},[n("upload",{on:{"img-success":e.wheel_success}}),e._v(" "),e._l(e.goods.wheel_photo,function(t,r){return[n("img",{key:r,staticClass:"wheel_photo",staticStyle:{"margin-left":"4px"},attrs:{src:t},on:{click:function(t){e.deleteWheel(r)}}})]})],2)],1)],1),e._v(" "),n("div",{staticClass:"right"},[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[e._v("其他选项")])]),e._v(" "),n("p",[n("el-input",{attrs:{placeholder:"商品单价"},model:{value:e.goods.price,callback:function(t){e.$set(e.goods,"price",t)},expression:"goods.price"}})],1),e._v(" "),n("p",[n("el-select",{attrs:{clearable:"",placeholder:"请选择一个商品展示模板"},model:{value:e.goods.template_id,callback:function(t){e.$set(e.goods,"template_id",t)},expression:"goods.template_id"}},e._l(e.template,function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),n("p",[n("el-checkbox",{attrs:{"true-label":"1","false-label":"0"},model:{value:e.goods.is_up,callback:function(t){e.$set(e.goods,"is_up",t)},expression:"goods.is_up"}},[e._v("是否上架")])],1),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:e.goodsAdd}},[e._v("发布商品")])],1)],1)])],1)},staticRenderFns:[]}},514:function(e,t,n){var r=n(176)(n(408),n(409),!1,function(e){n(406)},null,null);e.exports=r.exports}});