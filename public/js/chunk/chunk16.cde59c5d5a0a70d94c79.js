webpackJsonp([16],{176:function(e,t){e.exports=function(e,t,r,n,i,o){var a,s=e=e||{},c=typeof e.default;"object"!==c&&"function"!==c||(a=e,s=e.default);var l,u="function"==typeof s?s.options:s;if(t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0),r&&(u.functional=!0),i&&(u._scopeId=i),o?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},u._ssrRegister=l):n&&(l=n),l){var d=u.functional,f=d?u.render:u.beforeCreate;d?(u._injectStyles=l,u.render=function(e,t){return l.call(t),f(e,t)}):u.beforeCreate=f?[].concat(f,l):[l]}return{esModule:a,exports:s,options:u}}},177:function(e,t,r){var n="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!n)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i=r(178),o={},a=n&&(document.head||document.getElementsByTagName("head")[0]),s=null,c=0,l=!1,u=function(){},d=null,f="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function m(e){for(var t=0;t<e.length;t++){var r=e[t],n=o[r.id];if(n){n.refs++;for(var i=0;i<n.parts.length;i++)n.parts[i](r.parts[i]);for(;i<r.parts.length;i++)n.parts.push(v(r.parts[i]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{var a=[];for(i=0;i<r.parts.length;i++)a.push(v(r.parts[i]));o[r.id]={id:r.id,refs:1,parts:a}}}}function h(){var e=document.createElement("style");return e.type="text/css",a.appendChild(e),e}function v(e){var t,r,n=document.querySelector("style["+f+'~="'+e.id+'"]');if(n){if(l)return u;n.parentNode.removeChild(n)}if(p){var i=c++;n=s||(s=h()),t=b.bind(null,n,i,!1),r=b.bind(null,n,i,!0)}else n=h(),t=function(e,t){var r=t.css,n=t.media,i=t.sourceMap;n&&e.setAttribute("media",n);d.ssrId&&e.setAttribute(f,t.id);i&&(r+="\n/*# sourceURL="+i.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");if(e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}.bind(null,n),r=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else r()}}e.exports=function(e,t,r,n){l=r,d=n||{};var a=i(e,t);return m(a),function(t){for(var r=[],n=0;n<a.length;n++){var s=a[n];(c=o[s.id]).refs--,r.push(c)}t?m(a=i(e,t)):a=[];for(n=0;n<r.length;n++){var c;if(0===(c=r[n]).refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete o[c.id]}}}};var _,g=(_=[],function(e,t){return _[e]=t,_.filter(Boolean).join("\n")});function b(e,t,r,n){var i=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=g(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}},178:function(e,t){e.exports=function(e,t){for(var r=[],n={},i=0;i<t.length;i++){var o=t[i],a=o[0],s={id:e+":"+i,css:o[1],media:o[2],sourceMap:o[3]};n[a]?n[a].parts.push(s):r.push(n[a]={id:a,parts:[s]})}return r}},179:function(e,t,r){"use strict";var n={data:function(){return{loading:!1,loading_msg:"数据获取中..."}},created:function(){console.log("mixin-form_page")},methods:{handleGetData:function(e){var t=this;return this.loading=!0,new Promise(function(r,n){e.then(function(e){t.loading=!1,r(e.data)}).catch(function(e){console.log(e),n(e),t.loading=!1})})},handleValid:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"form",t=null;return this.$refs[e].validate(function(e){e?t=!0:(console.log("error submit!!"),t=!1)}),t},handleSubmit:function(e){var t=this;this.loading=!0,e.then(function(e){t.loading=!1,t.$message.success(e.data.msg),t.$emit("render"),t.close()}).catch(function(e){console.log(e),t.loading=!1,t.$message.error("操作失败"),t.close()})},close:function(){this.$emit("close")}}};t.a=n},197:function(e,t,r){"use strict";r.d(t,"a",function(){return i}),r.d(t,"e",function(){return o}),r.d(t,"d",function(){return a}),r.d(t,"c",function(){return s}),r.d(t,"b",function(){return c}),r.d(t,"h",function(){return l}),r.d(t,"f",function(){return u}),r.d(t,"i",function(){return d}),r.d(t,"g",function(){return f});var n=r(24),i=function(e){return n.a.request({url:"/article/add",data:e,method:"post"})},o=function(){return n.a.request({url:"/article/clean",method:"get"})},a=function(e){return n.a.request({url:"/article/"+e,method:"get"})},s=function(e,t){return n.a.request({url:"/article/edit/"+e,data:t,method:"post"})},c=function(e){return n.a.request({url:"/article/del/"+e,method:"get"})},l=function(e){return n.a.request({url:"/url/"+e,method:"delete"})},u=function(e){return n.a.request({url:"/url",data:e,method:"post"})},d=function(e,t){return n.a.request({url:"/url/"+e,data:t,method:"put"})},f=function(e){return n.a.request({url:"/url/batchDel",data:e,method:"post"})}},199:function(e,t,r){var n=r(176)(r(202),r(203),!1,function(e){r(200)},null,null);e.exports=n.exports},200:function(e,t,r){var n=r(201);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r(177)("098fe01e",n,!0,{})},201:function(e,t,r){(e.exports=r(75)(!1)).push([e.i,".avatar-uploader .el-upload{border:1px dashed #d9d9d9;border-radius:6px;cursor:pointer;position:relative;overflow:hidden}.avatar-uploader .el-upload:hover{border-color:#409eff}.avatar-uploader-icon{font-size:28px;color:#8c939d;width:100px;height:100px;line-height:100px;text-align:center}.avatar{width:100px;height:100px;display:block}",""])},202:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{imageUrl:"",upload_url:"/api/upload",headers:{Authorization:"Bearer "+this.$store.state.user.token}}},props:["img"],created:function(){this.imageUrl=this.img},watch:{img:function(e){this.imageUrl=e}},methods:{handleAvatarSuccess:function(e,t,r){console.log(e,t,r),this.imageUrl=URL.createObjectURL(t.raw),this.$emit("img-success",e.url)},beforeAvatarUpload:function(e){var t=e.size/1024/1024<2;return t||this.$message.error("上传头像图片大小不能超过 2MB!"),t}}}},203:function(e,t){e.exports={render:function(){var e=this.$createElement,t=this._self._c||e;return t("el-upload",{staticClass:"avatar-uploader",attrs:{action:this.upload_url,headers:this.headers,"show-file-list":!1,"on-success":this.handleAvatarSuccess,"before-upload":this.beforeAvatarUpload}},[this.imageUrl?t("img",{staticClass:"avatar",attrs:{src:this.imageUrl}}):t("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])},staticRenderFns:[]}},204:function(e,t,r){"use strict";r.d(t,"b",function(){return i}),r.d(t,"a",function(){return o}),r.d(t,"d",function(){return a}),r.d(t,"c",function(){return s});var n=r(24),i=function(e){return n.a.request({url:"/template/del/"+e,method:"get"})},o=function(e){return n.a.request({url:"/template/add",data:e,method:"post"})},a=function(e){return n.a.request({url:"/template/"+e,method:"get"})},s=function(e,t){return n.a.request({url:"/template/edit/"+e,data:t,method:"post"})}},205:function(e,t,r){e.exports=r(206)},206:function(e,t,r){var n=r(176)(r(207),r(208),!1,null,null,null);e.exports=n.exports},207:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.listeners={}}return n(e,[{key:"on",value:function(e,t){void 0===this.listeners[e]&&(this.listeners[e]=[]),this.listeners[e].push(t)}},{key:"emit",value:function(e){this.listeners[e]&&this.listeners[e].forEach(function(e){return e()})}}]),e}();t.default={name:"VueUeditorWrap",data:function(){return{id:"editor"+Math.random().toString().slice(-10),editor:null,status:0,initValue:"",defaultConfig:{UEDITOR_HOME_URL:"./static/UEditor/",enableAutoSave:!1}}},props:{value:{type:String,default:""},config:{type:Object,default:function(){return{}}},init:{type:Function,default:function(){return function(){}}},destroy:{type:Boolean,default:!1},name:{type:String,default:""}},computed:{mixedConfig:function(){return Object.assign({},this.defaultConfig,this.config)}},methods:{registerButton:function(e){var t=e.name,r=e.icon,n=e.tip,i=e.handler,o=e.UE,a=void 0===o?window.UE:o;a.registerUI(t,function(e,t){e.registerCommand(t,{execCommand:function(){i(e,t)}});var o=new a.ui.Button({name:t,title:n,cssRules:"background-image: url("+r+") !important;background-size: cover;",onclick:function(){e.execCommand(t)}});return e.addListener("selectionchange",function(){var r=e.queryCommandState(t);-1===r?(o.setDisabled(!0),o.setChecked(!1)):(o.setDisabled(!1),o.setChecked(r))}),o})},_initEditor:function(){var e=this;this.$nextTick(function(){e.init(),e.editor=window.UE.getEditor(e.id,e.mixedConfig),e.editor.addListener("ready",function(){e.status=2,e.editor.setContent(e.initValue),e.$emit("ready",e.editor),e.editor.addListener("contentChange",function(){e.$emit("input",e.editor.getContent())})})})},_checkDependencies:function(){var e=this;return new Promise(function(t,r){!!window.UE&&!!window.UEDITOR_CONFIG&&0!==Object.keys(window.UEDITOR_CONFIG).length&&!!window.UE.getEditor?t():window.loadEnv?window.loadEnv.on("scriptsLoaded",function(){t()}):(window.loadEnv=new i,e._loadConfig().then(function(){return e._loadCore()}).then(function(){t(),window.loadEnv.emit("scriptsLoaded")}))})},_loadConfig:function(){var e=this;return new Promise(function(t,r){if(window.UE&&window.UEDITOR_CONFIG&&0!==Object.keys(window.UEDITOR_CONFIG).length)t();else{var n=document.createElement("script");n.type="text/javascript",n.src=e.mixedConfig.UEDITOR_HOME_URL+"ueditor.config.js",document.getElementsByTagName("head")[0].appendChild(n),n.onload=function(){window.UE&&window.UEDITOR_CONFIG&&0!==Object.keys(window.UEDITOR_CONFIG).length?t():console.error("加载ueditor.config.js失败,请检查您的配置地址UEDITOR_HOME_URL填写是否正确!\n",n.src)}}})},_loadCore:function(){var e=this;return new Promise(function(t,r){if(window.UE&&window.UE.getEditor)t();else{var n=document.createElement("script");n.type="text/javascript",n.src=e.mixedConfig.UEDITOR_HOME_URL+"ueditor.all.min.js",document.getElementsByTagName("head")[0].appendChild(n),n.onload=function(){window.UE&&window.UE.getEditor?t():console.error("加载ueditor.all.min.js失败,请检查您的配置地址UEDITOR_HOME_URL填写是否正确!\n",n.src)}}})},_setContent:function(e){e===this.editor.getContent()||this.editor.setContent(e)}},beforeDestroy:function(){this.destroy&&this.editor&&this.editor.destroy&&this.editor.destroy()},watch:{value:{handler:function(e){var t=this;switch(this.status){case 0:this.status=1,this.initValue=e,this._checkDependencies().then(function(){return t._initEditor()});break;case 1:this.initValue=e;break;case 2:this._setContent(e)}},immediate:!0}}}},208:function(e,t){e.exports={render:function(){var e=this.$createElement;return(this._self._c||e)("script",{attrs:{id:this.id,name:this.name,type:"text/plain"}})},staticRenderFns:[]}},210:function(e,t,r){"use strict";r(24)},223:function(e,t,r){var n=r(224);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r(177)("787ba883",n,!0,{})},224:function(e,t,r){(e.exports=r(75)(!1)).push([e.i,'.left{float:left;width:65%}.right{width:30%;float:right}.edui-editor{width:100%!important}.text{font-size:14px}.item{margin-bottom:18px}.clearfix:after,.clearfix:before{display:table;content:""}.clearfix:after{clear:both}.box-card{width:480px}.edui-editor-iframeholder{width:100%!important}',""])},225:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(179),i=r(199),o=r.n(i),a=r(197),s=(r(204),r(210),r(205)),c=r.n(s);t.default={mixins:[n.a],name:"publish",data:function(){return{articleForm:{is_jump:1,is_wechat:1,title:"",description:"",content:"",arrow:"",physics:"",photo:"",music:"",appid:"",key:"",right_now:"",cnzz:"",is_encryption:"",iframe:"0",source_check:"1",ajax:""},rules:{title:[{required:!0,message:"文章标题为必填项目",trigger:"blur"}],content:[{required:!0,message:"文章内容为必填项目",trigger:"blur"}]},options:[],Ueconfig:{serverUrl:"/static/UEditor/php/controller.php"}}},methods:{onSubmit:function(e){var t=this;this.handleValid(e)&&Object(a.c)(this.$route.params.id,this.articleForm).then(function(e){t.$message.success(e.data.msg),t.$router.push("/article_list")})},success:function(e){this.articleForm.photo=e},clickitem:function(e){e===this.articleForm.is_jump?this.articleForm.is_jump=null:this.articleForm.is_jump=e},isWechat:function(e){e===this.articleForm.is_wechat?this.articleForm.is_wechat=null:this.articleForm.is_wechat=e},is_encryption:function(e){e===this.articleForm.is_encryption?this.articleForm.is_encryption=null:this.articleForm.is_encryption=e}},components:{upload:o.a,VueUeditorWrap:c.a},created:function(){var e=this;Object(a.d)(this.$route.params.id).then(function(t){e.articleForm=t.data.data})}}},226:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"left",staticStyle:{width:"65%"}},[r("el-form",{ref:"articleForm",staticClass:"demo-ruleForm",attrs:{model:e.articleForm,rules:e.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"文章标题",prop:"title"}},[r("el-input",{model:{value:e.articleForm.title,callback:function(t){e.$set(e.articleForm,"title",t)},expression:"articleForm.title"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"文章内容",prop:"content"}},[r("vue-ueditor-wrap",{attrs:{config:e.Ueconfig},model:{value:e.articleForm.content,callback:function(t){e.$set(e.articleForm,"content",t)},expression:"articleForm.content"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"文章描述",prop:"description"}},[r("el-input",{attrs:{placeholder:"文章描述"},model:{value:e.articleForm.description,callback:function(t){e.$set(e.articleForm,"description",t)},expression:"articleForm.description"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"封面图片",prop:"photo"}},[r("upload",{attrs:{img:e.articleForm.photo},on:{"img-success":e.success}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.onSubmit("articleForm")}}},[e._v("立即发表")])],1)],1)],1),e._v(" "),r("div",{staticClass:"right"},[r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[e._v("其他选项")])]),e._v(" "),r("p",[r("el-input",{attrs:{placeholder:"微信appId"},model:{value:e.articleForm.appid,callback:function(t){e.$set(e.articleForm,"appid",t)},expression:"articleForm.appid"}})],1),e._v(" "),r("p",[r("el-input",{attrs:{placeholder:"微信密匙"},model:{value:e.articleForm.key,callback:function(t){e.$set(e.articleForm,"key",t)},expression:"articleForm.key"}})],1),e._v(" "),r("p",[r("el-input",{attrs:{placeholder:"第三方流量统计"},model:{value:e.articleForm.cnzz,callback:function(t){e.$set(e.articleForm,"cnzz",t)},expression:"articleForm.cnzz"}})],1),e._v(" "),r("p",[r("el-input",{attrs:{placeholder:"背景音乐"},model:{value:e.articleForm.music,callback:function(t){e.$set(e.articleForm,"music",t)},expression:"articleForm.music"}})],1),e._v(" "),r("p",[r("el-input",{attrs:{placeholder:"文章立即跳转到指定地址"},model:{value:e.articleForm.right_now,callback:function(t){e.$set(e.articleForm,"right_now",t)},expression:"articleForm.right_now"}})],1),e._v(" "),r("p",[r("el-input",{attrs:{placeholder:"点击文章箭头返回"},model:{value:e.articleForm.arrow,callback:function(t){e.$set(e.articleForm,"arrow",t)},expression:"articleForm.arrow"}})],1),e._v(" "),r("p",[r("el-input",{attrs:{placeholder:"物理按键点击返回"},model:{value:e.articleForm.physics,callback:function(t){e.$set(e.articleForm,"physics",t)},expression:"articleForm.physics"}})],1),e._v(" "),r("p",[r("el-checkbox",{attrs:{"true-label":"1","false-label":"0"},model:{value:e.articleForm.is_wechat,callback:function(t){e.$set(e.articleForm,"is_wechat",t)},expression:"articleForm.is_wechat"}},[e._v("开启微信检测")])],1),e._v(" "),r("p",[r("el-radio",{attrs:{label:1},nativeOn:{click:function(t){t.preventDefault(),e.is_encryption(1)}},model:{value:e.articleForm.is_encryption,callback:function(t){e.$set(e.articleForm,"is_encryption",t)},expression:"articleForm.is_encryption"}},[e._v("页面加密")]),e._v(" "),r("el-radio",{attrs:{label:0},nativeOn:{click:function(t){t.preventDefault(),e.is_encryption(0)}},model:{value:e.articleForm.is_encryption,callback:function(t){e.$set(e.articleForm,"is_encryption",t)},expression:"articleForm.is_encryption"}},[e._v("使用前端框架")]),e._v(" "),r("el-radio",{attrs:{label:2},nativeOn:{click:function(t){t.preventDefault(),e.is_encryption(2)}},model:{value:e.articleForm.is_encryption,callback:function(t){e.$set(e.articleForm,"is_encryption",t)},expression:"articleForm.is_encryption"}},[e._v("异步加载")])],1),e._v(" "),r("p",[r("el-radio",{attrs:{label:1},nativeOn:{click:function(t){t.preventDefault(),e.clickitem(1)}},model:{value:e.articleForm.is_jump,callback:function(t){e.$set(e.articleForm,"is_jump",t)},expression:"articleForm.is_jump"}},[e._v("开启主域名随机跳转")]),e._v(" "),r("el-radio",{attrs:{label:0},nativeOn:{click:function(t){t.preventDefault(),e.clickitem(0)}},model:{value:e.articleForm.is_jump,callback:function(t){e.$set(e.articleForm,"is_jump",t)},expression:"articleForm.is_jump"}},[e._v("开启二级域名随机跳转")])],1),e._v(" "),r("p",[r("el-checkbox",{attrs:{"true-label":"1","false-label":"0"},model:{value:e.articleForm.iframe,callback:function(t){e.$set(e.articleForm,"iframe",t)},expression:"articleForm.iframe"}},[e._v("嵌套网页")]),e._v(" "),r("el-checkbox",{attrs:{"true-label":"1","false-label":"0"},model:{value:e.articleForm.source_check,callback:function(t){e.$set(e.articleForm,"source_check",t)},expression:"articleForm.source_check"}},[e._v("来源检测")])],1)])],1)])},staticRenderFns:[]}},81:function(e,t,r){var n=r(176)(r(225),r(226),!1,function(e){r(223)},null,null);e.exports=n.exports}});