webpackJsonp([17],{176:function(e,t){e.exports=function(e,t,n,o,r,i){var s,a=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(s=e,a=e.default);var d,c="function"==typeof a?a.options:a;if(t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),r&&(c._scopeId=r),i?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},c._ssrRegister=d):o&&(d=o),d){var l=c.functional,f=l?c.render:c.beforeCreate;l?(c._injectStyles=d,c.render=function(e,t){return d.call(t),f(e,t)}):c.beforeCreate=f?[].concat(f,d):[d]}return{esModule:s,exports:a,options:c}}},177:function(e,t,n){var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var r=n(178),i={},s=o&&(document.head||document.getElementsByTagName("head")[0]),a=null,u=0,d=!1,c=function(){},l=null,f="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(e){for(var t=0;t<e.length;t++){var n=e[t],o=i[n.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](n.parts[r]);for(;r<n.parts.length;r++)o.parts.push(g(n.parts[r]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{var s=[];for(r=0;r<n.parts.length;r++)s.push(g(n.parts[r]));i[n.id]={id:n.id,refs:1,parts:s}}}}function m(){var e=document.createElement("style");return e.type="text/css",s.appendChild(e),e}function g(e){var t,n,o=document.querySelector("style["+f+'~="'+e.id+'"]');if(o){if(d)return c;o.parentNode.removeChild(o)}if(p){var r=u++;o=a||(a=m()),t=b.bind(null,o,r,!1),n=b.bind(null,o,r,!0)}else o=m(),t=function(e,t){var n=t.css,o=t.media,r=t.sourceMap;o&&e.setAttribute("media",o);l.ssrId&&e.setAttribute(f,t.id);r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,o),n=function(){o.parentNode.removeChild(o)};return t(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;t(e=o)}else n()}}e.exports=function(e,t,n,o){d=n,l=o||{};var s=r(e,t);return h(s),function(t){for(var n=[],o=0;o<s.length;o++){var a=s[o];(u=i[a.id]).refs--,n.push(u)}t?h(s=r(e,t)):s=[];for(o=0;o<n.length;o++){var u;if(0===(u=n[o]).refs){for(var d=0;d<u.parts.length;d++)u.parts[d]();delete i[u.id]}}}};var v,_=(v=[],function(e,t){return v[e]=t,v.filter(Boolean).join("\n")});function b(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=_(t,r);else{var i=document.createTextNode(r),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}},178:function(e,t){e.exports=function(e,t){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],s=i[0],a={id:e+":"+r,css:i[1],media:i[2],sourceMap:i[3]};o[s]?o[s].parts.push(a):n.push(o[s]={id:s,parts:[a]})}return n}},196:function(e,t,n){"use strict";n.d(t,"A",function(){return r}),n.d(t,"x",function(){return i}),n.d(t,"B",function(){return s}),n.d(t,"C",function(){return a}),n.d(t,"y",function(){return u}),n.d(t,"o",function(){return d}),n.d(t,"p",function(){return c}),n.d(t,"n",function(){return l}),n.d(t,"q",function(){return f}),n.d(t,"r",function(){return p}),n.d(t,"k",function(){return h}),n.d(t,"s",function(){return m}),n.d(t,"v",function(){return g}),n.d(t,"w",function(){return v}),n.d(t,"u",function(){return _}),n.d(t,"t",function(){return b}),n.d(t,"a",function(){return w}),n.d(t,"e",function(){return C}),n.d(t,"d",function(){return x}),n.d(t,"c",function(){return y}),n.d(t,"b",function(){return E}),n.d(t,"l",function(){return U}),n.d(t,"g",function(){return O}),n.d(t,"f",function(){return k}),n.d(t,"h",function(){return q}),n.d(t,"i",function(){return R}),n.d(t,"j",function(){return D}),n.d(t,"z",function(){return I}),n.d(t,"D",function(){return T}),n.d(t,"m",function(){return j});var o=n(24),r=function(e){return o.a.request({url:"/source/"+e,method:"delete"})},i=function(e){return o.a.request({url:"/source",data:e,method:"post"})},s=function(e){return o.a.request({url:"/source/"+e,method:"get"})},a=function(e,t){return o.a.request({url:"/source/"+e,data:t,method:"put"})},u=function(e){return o.a.request({url:"/source/batchIdDelete",data:e,method:"post"})},d=function(e){return o.a.request({url:"/meal/batchIdDelete",data:e,method:"post"})},c=function(e){return o.a.request({url:"/meal/"+e,method:"delete"})},l=function(e){return o.a.request({url:"/meal",data:e,method:"post"})},f=function(e){return o.a.request({url:"/meal/"+e,method:"get"})},p=function(e,t){return o.a.request({url:"/meal/"+e,data:t,method:"put"})},h=function(){return o.a.request({url:"template/list",method:"get"})},m=function(e){return o.a.request({url:"size",data:e,method:"post"})},g=function(e){return o.a.request({url:"size/"+e,method:"get"})},v=function(e,t){return o.a.request({url:"size/"+e,data:t,method:"put"})},_=function(e){return o.a.request({url:"size/"+e,method:"delete"})},b=function(e){return o.a.request({url:"size/batchIdDelete",data:e,method:"post"})},w=function(e){return o.a.request({url:"goods",data:e,method:"post"})},C=function(e,t){return o.a.request({url:"goods/"+e,data:t,method:"put"})},x=function(e){return o.a.request({url:"goods/"+e,method:"get"})},y=function(e){return o.a.request({url:"goods/"+e,method:"delete"})},E=function(e){return o.a.request({url:"goods/batchDelete",data:e,method:"post"})},U=function(e){return o.a.request({url:"goodsOrder/ip_source/"+e,method:"get"})},O=function(e){return o.a.request({url:"goodsOrder/"+e,method:"delete"})},k=function(e){return o.a.request({url:"goodsOrder/batchDelete",data:e,method:"post"})},q=function(e){return o.a.request({url:"goodsOrder/"+e,method:"get"})},R=function(e,t){return o.a.request({url:"goodsOrder/"+e,data:t,method:"put"})},D=function(e,t){return o.a.request({url:"goodsOrder/status/"+e,data:t,method:"put"})},I=function(){return o.a.request({url:"source/count",method:"get"})},T=function(){return o.a.request({url:"source/zhcount",method:"get"})},j=function(){return o.a.request({url:"source/peoplecount",method:"get"})}},199:function(e,t,n){var o=n(176)(n(202),n(203),!1,function(e){n(200)},null,null);e.exports=o.exports},200:function(e,t,n){var o=n(201);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(177)("098fe01e",o,!0,{})},201:function(e,t,n){(e.exports=n(75)(!1)).push([e.i,".avatar-uploader .el-upload{border:1px dashed #d9d9d9;border-radius:6px;cursor:pointer;position:relative;overflow:hidden}.avatar-uploader .el-upload:hover{border-color:#409eff}.avatar-uploader-icon{font-size:28px;color:#8c939d;width:100px;height:100px;line-height:100px;text-align:center}.avatar{width:100px;height:100px;display:block}",""])},202:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{imageUrl:"",upload_url:"/api/upload",headers:{Authorization:"Bearer "+this.$store.state.user.token}}},props:["img"],created:function(){this.imageUrl=this.img},watch:{img:function(e){this.imageUrl=e}},methods:{handleAvatarSuccess:function(e,t,n){console.log(e,t,n),this.imageUrl=URL.createObjectURL(t.raw),this.$emit("img-success",e.url)},beforeAvatarUpload:function(e){var t=e.size/1024/1024<2;return t||this.$message.error("上传头像图片大小不能超过 2MB!"),t}}}},203:function(e,t){e.exports={render:function(){var e=this.$createElement,t=this._self._c||e;return t("el-upload",{staticClass:"avatar-uploader",attrs:{action:this.upload_url,headers:this.headers,"show-file-list":!1,"on-success":this.handleAvatarSuccess,"before-upload":this.beforeAvatarUpload}},[this.imageUrl?t("img",{staticClass:"avatar",attrs:{src:this.imageUrl}}):t("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])},staticRenderFns:[]}},205:function(e,t,n){e.exports=n(206)},206:function(e,t,n){var o=n(176)(n(207),n(208),!1,null,null,null);e.exports=o.exports},207:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.listeners={}}return o(e,[{key:"on",value:function(e,t){void 0===this.listeners[e]&&(this.listeners[e]=[]),this.listeners[e].push(t)}},{key:"emit",value:function(e){this.listeners[e]&&this.listeners[e].forEach(function(e){return e()})}}]),e}();t.default={name:"VueUeditorWrap",data:function(){return{id:"editor"+Math.random().toString().slice(-10),editor:null,status:0,initValue:"",defaultConfig:{UEDITOR_HOME_URL:"./static/UEditor/",enableAutoSave:!1}}},props:{value:{type:String,default:""},config:{type:Object,default:function(){return{}}},init:{type:Function,default:function(){return function(){}}},destroy:{type:Boolean,default:!1},name:{type:String,default:""}},computed:{mixedConfig:function(){return Object.assign({},this.defaultConfig,this.config)}},methods:{registerButton:function(e){var t=e.name,n=e.icon,o=e.tip,r=e.handler,i=e.UE,s=void 0===i?window.UE:i;s.registerUI(t,function(e,t){e.registerCommand(t,{execCommand:function(){r(e,t)}});var i=new s.ui.Button({name:t,title:o,cssRules:"background-image: url("+n+") !important;background-size: cover;",onclick:function(){e.execCommand(t)}});return e.addListener("selectionchange",function(){var n=e.queryCommandState(t);-1===n?(i.setDisabled(!0),i.setChecked(!1)):(i.setDisabled(!1),i.setChecked(n))}),i})},_initEditor:function(){var e=this;this.$nextTick(function(){e.init(),e.editor=window.UE.getEditor(e.id,e.mixedConfig),e.editor.addListener("ready",function(){e.status=2,e.editor.setContent(e.initValue),e.$emit("ready",e.editor),e.editor.addListener("contentChange",function(){e.$emit("input",e.editor.getContent())})})})},_checkDependencies:function(){var e=this;return new Promise(function(t,n){!!window.UE&&!!window.UEDITOR_CONFIG&&0!==Object.keys(window.UEDITOR_CONFIG).length&&!!window.UE.getEditor?t():window.loadEnv?window.loadEnv.on("scriptsLoaded",function(){t()}):(window.loadEnv=new r,e._loadConfig().then(function(){return e._loadCore()}).then(function(){t(),window.loadEnv.emit("scriptsLoaded")}))})},_loadConfig:function(){var e=this;return new Promise(function(t,n){if(window.UE&&window.UEDITOR_CONFIG&&0!==Object.keys(window.UEDITOR_CONFIG).length)t();else{var o=document.createElement("script");o.type="text/javascript",o.src=e.mixedConfig.UEDITOR_HOME_URL+"ueditor.config.js",document.getElementsByTagName("head")[0].appendChild(o),o.onload=function(){window.UE&&window.UEDITOR_CONFIG&&0!==Object.keys(window.UEDITOR_CONFIG).length?t():console.error("加载ueditor.config.js失败,请检查您的配置地址UEDITOR_HOME_URL填写是否正确!\n",o.src)}}})},_loadCore:function(){var e=this;return new Promise(function(t,n){if(window.UE&&window.UE.getEditor)t();else{var o=document.createElement("script");o.type="text/javascript",o.src=e.mixedConfig.UEDITOR_HOME_URL+"ueditor.all.min.js",document.getElementsByTagName("head")[0].appendChild(o),o.onload=function(){window.UE&&window.UE.getEditor?t():console.error("加载ueditor.all.min.js失败,请检查您的配置地址UEDITOR_HOME_URL填写是否正确!\n",o.src)}}})},_setContent:function(e){e===this.editor.getContent()||this.editor.setContent(e)}},beforeDestroy:function(){this.destroy&&this.editor&&this.editor.destroy&&this.editor.destroy()},watch:{value:{handler:function(e){var t=this;switch(this.status){case 0:this.status=1,this.initValue=e,this._checkDependencies().then(function(){return t._initEditor()});break;case 1:this.initValue=e;break;case 2:this._setContent(e)}},immediate:!0}}}},208:function(e,t){e.exports={render:function(){var e=this.$createElement;return(this._self._c||e)("script",{attrs:{id:this.id,name:this.name,type:"text/plain"}})},staticRenderFns:[]}},406:function(e,t,n){var o=n(407);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(177)("08019644",o,!0,{})},407:function(e,t,n){(e.exports=n(75)(!1)).push([e.i,".left{float:left;width:55%}.right{width:30%;float:right}.edui-editor,.edui-editor-iframeholder{width:100%!important}.wheel_photo{width:200px;height:200px}",""])},408:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(205),r=n.n(o),i=n(199),s=n.n(i),a=n(196);t.default={components:{upload:s.a,VueUeditorWrap:r.a},data:function(){return{activeName:"first",goods:{goods_title:"",goods_desc:"",goods_content:"",wheel_photo:[],photo:"",price:"",is_up:"1",template_id:""},Ueconfig:{serverUrl:"/static/UEditor/php/controller.php"},template:[]}},methods:{success:function(e){this.goods.photo=e},wheel_success:function(e){this.goods.wheel_photo.push(e)},goodsAdd:function(){var e=this;Object(a.a)(this.goods).then(function(t){e.$message.success(t.data.msg),e.$router.push("/goods_list")})},deleteWheel:function(e){this.goods.wheel_photo.splice(e,1)}},created:function(){var e=this;Object(a.k)().then(function(t){e.template=t.data.data})}}},409:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-tabs",{model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[n("el-tab-pane",{attrs:{label:"商品基本信息",name:"first"}},[n("div",{staticClass:"left"},[n("el-form",{attrs:{"label-width":"80px",model:e.goods}},[n("el-form-item",{attrs:{label:"商品标题:"}},[n("el-input",{attrs:{placeholder:"商品标题"},model:{value:e.goods.goods_title,callback:function(t){e.$set(e.goods,"goods_title",t)},expression:"goods.goods_title"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"商品简述:"}},[n("el-input",{attrs:{placeholder:"商品简述"},model:{value:e.goods.goods_desc,callback:function(t){e.$set(e.goods,"goods_desc",t)},expression:"goods.goods_desc"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"详细描述:"}},[n("vue-ueditor-wrap",{attrs:{config:e.Ueconfig},model:{value:e.goods.goods_content,callback:function(t){e.$set(e.goods,"goods_content",t)},expression:"goods.goods_content"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"封面图片",prop:"photo"}},[n("upload",{attrs:{img:e.goods.photo},on:{"img-success":e.success}})],1),e._v(" "),n("el-form-item",{attrs:{label:"轮播图片"}},[n("upload",{on:{"img-success":e.wheel_success}}),e._v(" "),e._l(e.goods.wheel_photo,function(t,o){return[n("img",{key:o,staticClass:"wheel_photo",staticStyle:{"margin-left":"4px"},attrs:{src:t},on:{click:function(t){e.deleteWheel(o)}}})]})],2)],1)],1),e._v(" "),n("div",{staticClass:"right"},[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[e._v("其他选项")])]),e._v(" "),n("p",[n("el-input",{attrs:{placeholder:"商品单价"},model:{value:e.goods.price,callback:function(t){e.$set(e.goods,"price",t)},expression:"goods.price"}})],1),e._v(" "),n("p",[n("el-select",{attrs:{clearable:"",placeholder:"请选择一个商品展示模板"},model:{value:e.goods.template_id,callback:function(t){e.$set(e.goods,"template_id",t)},expression:"goods.template_id"}},e._l(e.template,function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),n("p",[n("el-checkbox",{attrs:{"true-label":"1","false-label":"0"},model:{value:e.goods.is_up,callback:function(t){e.$set(e.goods,"is_up",t)},expression:"goods.is_up"}},[e._v("是否上架")])],1),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:e.goodsAdd}},[e._v("发布商品")])],1)],1)])],1)},staticRenderFns:[]}},504:function(e,t,n){var o=n(176)(n(408),n(409),!1,function(e){n(406)},null,null);e.exports=o.exports}});