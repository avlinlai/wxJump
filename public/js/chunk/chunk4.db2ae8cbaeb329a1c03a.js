webpackJsonp([4,15,16],{176:function(e,t){e.exports=function(e,t,i,r,n,o){var a,l=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(a=e,l=e.default);var c,u="function"==typeof l?l.options:l;if(t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0),i&&(u.functional=!0),n&&(u._scopeId=n),o?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},u._ssrRegister=c):r&&(c=r),c){var d=u.functional,p=d?u.render:u.beforeCreate;d?(u._injectStyles=c,u.render=function(e,t){return c.call(t),p(e,t)}):u.beforeCreate=p?[].concat(p,c):[c]}return{esModule:a,exports:l,options:u}}},177:function(e,t,i){var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var n=i(178),o={},a=r&&(document.head||document.getElementsByTagName("head")[0]),l=null,s=0,c=!1,u=function(){},d=null,p="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(e){for(var t=0;t<e.length;t++){var i=e[t],r=o[i.id];if(r){r.refs++;for(var n=0;n<r.parts.length;n++)r.parts[n](i.parts[n]);for(;n<i.parts.length;n++)r.parts.push(v(i.parts[n]));r.parts.length>i.parts.length&&(r.parts.length=i.parts.length)}else{var a=[];for(n=0;n<i.parts.length;n++)a.push(v(i.parts[n]));o[i.id]={id:i.id,refs:1,parts:a}}}}function m(){var e=document.createElement("style");return e.type="text/css",a.appendChild(e),e}function v(e){var t,i,r=document.querySelector("style["+p+'~="'+e.id+'"]');if(r){if(c)return u;r.parentNode.removeChild(r)}if(f){var n=s++;r=l||(l=m()),t=b.bind(null,r,n,!1),i=b.bind(null,r,n,!0)}else r=m(),t=function(e,t){var i=t.css,r=t.media,n=t.sourceMap;r&&e.setAttribute("media",r);d.ssrId&&e.setAttribute(p,t.id);n&&(i+="\n/*# sourceURL="+n.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");if(e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}.bind(null,r),i=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else i()}}e.exports=function(e,t,i,r){c=i,d=r||{};var a=n(e,t);return h(a),function(t){for(var i=[],r=0;r<a.length;r++){var l=a[r];(s=o[l.id]).refs--,i.push(s)}t?h(a=n(e,t)):a=[];for(r=0;r<i.length;r++){var s;if(0===(s=i[r]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete o[s.id]}}}};var _,g=(_=[],function(e,t){return _[e]=t,_.filter(Boolean).join("\n")});function b(e,t,i,r){var n=i?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,n);else{var o=document.createTextNode(n),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}},178:function(e,t){e.exports=function(e,t){for(var i=[],r={},n=0;n<t.length;n++){var o=t[n],a=o[0],l={id:e+":"+n,css:o[1],media:o[2],sourceMap:o[3]};r[a]?r[a].parts.push(l):i.push(r[a]={id:a,parts:[l]})}return i}},179:function(e,t,i){"use strict";var r={data:function(){return{loading:!1,loading_msg:"数据获取中..."}},created:function(){console.log("mixin-form_page")},methods:{handleGetData:function(e){var t=this;return this.loading=!0,new Promise(function(i,r){e.then(function(e){t.loading=!1,i(e.data)}).catch(function(e){console.log(e),r(e),t.loading=!1})})},handleValid:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"form",t=null;return this.$refs[e].validate(function(e){e?t=!0:(console.log("error submit!!"),t=!1)}),t},handleSubmit:function(e){var t=this;this.loading=!0,e.then(function(e){t.loading=!1,t.$message.success(e.data.msg),t.$emit("render"),t.close()}).catch(function(e){console.log(e),t.loading=!1,t.$message.error("操作失败"),t.close()})},close:function(){this.$emit("close")}}};t.a=r},180:function(e,t,i){var r=i(176)(i(184),i(195),!1,function(e){i(182)},"data-v-6f730715",null);e.exports=r.exports},181:function(e,t,i){"use strict";var r={data:function(){return{search:{},edit_id:null,tools_id:null,select_ids:null}},created:function(){},methods:{handleSearch:function(){this.handleSetFilter("search",this.search),this.handleRenderTable()},handleGetSelection:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=this.$refs.table.selection;if(null===t&&(t=[]),null==e)return t;if("string"==typeof e){var i=[];return t.forEach(function(t){e in t&&i.push(t[e])}),i}return console.error("handleGetSelection 参数错误"),this.$refs.table.selection},handleSetFilter:function(e,t){this.$refs.table.filterValue[e]=t},handleGetFilter:function(e){return this.$refs.table.filterValue[e]},handleRenderTable:function(){this.$refs.table.renderTable()},handleDeleteRow:function(e){this.$refs.table.deleteRow(e)},handleDel:function(e,t){var i=this,r=this.$loading({lock:!0,text:"删除数据中...",spinner:"el-icon-loading"});e.then(function(e){i.loading=!1,0==e.msg?(i.$message.success("删除成功"),i.handleDeleteRow(t)):i.$message.success("删除成功"),r.close()}).catch(function(e){i.loading=!1,i.$message.error("删除失败"),r.close(),console.log(e)})},handleSetChild:function(e,t){this.$refs.table.SetChildren(e,t)},handleOpenTableLoding:function(){this.$refs.table.loading=!0},handleCloseTableLoding:function(){this.$refs.table.loading=!1}}};t.a=r},182:function(e,t,i){var r=i(183);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);i(177)("67647e84",r,!0,{})},183:function(e,t,i){(e.exports=i(75)(!1)).push([e.i,".el-pagination[data-v-6f730715]{float:right;margin-top:8px}",""])},184:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(185),n=i.n(r),o=i(190),a=i.n(o),l=i(24);t.default={props:{url:String,columns:Array,page:{type:Boolean,default:!0},checkbox:{type:Boolean,default:!0}},data:function(){return{loading:!1,data:null,selection:null,filterValue:{where:{},page:1,limit:10,search:"",orderBy:"id,asc"},total:0}},components:{Tools:n.a,Fold:a.a},created:function(){for(var e in this.columns)"render"in this.columns[e]&&Vue.component("my-column-"+this.columns[e].prop,this.columns[e].render);Vue.component("fold-prefix",{render:function(e){return e("span",{style:{paddingLeft:2*this.level+"em"}})},props:{level:{type:Number,required:!0}}}),this.renderTable()},methods:{expanding:function(e){e.tree_fold="loading",this.$emit("children",e)},collapsing:function(e){e.tree_fold="close",this.SetChildren(e,null)},Listeners:function(e,t,i){this.$emit("tools",e,t,i)},filterHandler:function(e){for(var t in e)null==e[t]||0==e[t].length?delete this.filterValue.where[t]:1==e[t].length?this.filterValue.where[t]=e[t][0]:this.filterValue.where[t]=e[t];this.renderTable()},sortHandler:function(e){null==e.order?this.filterValue.orderBy=null:this.filterValue.orderBy=e.prop+","+e.order.slice(0,-6),this.renderTable()},handleSizeChange:function(e){this.filterValue.limit=e,this.renderTable()},handleCurrentChange:function(e){this.filterValue.page=e,this.renderTable()},handleSelectionChange:function(e){this.selection=e,this.$emit("SelectionChange",e)},renderTable:function(){var e=this;this.loading=!0,this.page||(delete this.filterValue.page,delete this.filterValue.limit),l.a.get(this.url,{params:this.filterValue}).then(function(t){e.total=t.data.count,e.data=t.data.data,e.loading=!1}).catch(function(t){e.loading=!1,console.log(t)})},deleteRow:function(e){this.data.splice(e,1)},SetChildren:function(e,t){for(var i=e.tree_path,r=this.data,n=0;n<i.length;n++)r=0==n?r[i[n]]:r.tree_children[i[n]];"loading"==e.tree_fold&&(e.tree_fold="open"),this.$set(r,"tree_fold",e.tree_fold),this.$set(r,"tree_children",t)}},computed:{reversedData:function(){var e=this.data;return e=function e(t,i,r){var n="tree_children";var o=[];for(var a in t){t[a].tree_level=r,i[r]=a,i.length=r+1,t[a].tree_path=i;var l=JSON.parse(JSON.stringify(t[a]));if(delete l[n],o.push(l),n in t[a]){var s=e(t[a][n],i,r+1);o=o.concat(s)}}return o}(e,[],0)}}}},185:function(e,t,i){var r=i(176)(i(188),i(189),!1,function(e){i(186)},"data-v-d5eb55a0",null);e.exports=r.exports},186:function(e,t,i){var r=i(187);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);i(177)("54f2e4d2",r,!0,{})},187:function(e,t,i){(e.exports=i(75)(!1)).push([e.i,"",""])},188:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"tools",props:["row","index","buttons"],data:function(){return{tooltip:{add:"添加",show:"查看详情",edit:"编辑",delete:"删除"}}},methods:{handleTools:function(e){this.$emit("listen-tools",e,this.index,this.row)}}}},189:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-button-group",[e._l(e.buttons,function(t,r){return[(t.text?t.text:e.tooltip[r]&&e.tooltip[r])?[i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.text?t.text:e.tooltip[r],placement:"bottom"}},[i("el-button",{attrs:{type:t.type,size:"mini",icon:t.icon},on:{click:function(t){e.handleTools(r)}}})],1)]:[i("el-button",{attrs:{type:t.type,size:"mini",icon:t.icon},on:{click:function(t){e.handleTools(r)}}})]]})],2)},staticRenderFns:[]}},190:function(e,t,i){var r=i(176)(i(193),i(194),!1,function(e){i(191)},"data-v-1ceaf87c",null);e.exports=r.exports},191:function(e,t,i){var r=i(192);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);i(177)("7f0398dd",r,!0,{})},192:function(e,t,i){(e.exports=i(75)(!1)).push([e.i,"",""])},193:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"fold",props:{row:{type:Object},status:{default:"close"}},data:function(){return{state:this.status,className:{open:"el-icon-caret-bottom",close:"el-icon-caret-right",loading:"el-icon-loading"}}},methods:{handleFold:function(){"open"==this.status?this.$emit("collapsing",this.row):(this.state="loading",this.$emit("expanding",this.row))}},watch:{status:function(e){this.state=e}}}},194:function(e,t){e.exports={render:function(){var e=this.$createElement;return(this._self._c||e)("i",{class:this.className[this.state],staticStyle:{cursor:"pointer"},on:{click:this.handleFold}})},staticRenderFns:[]}},195:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{border:"",data:e.reversedData,size:"mini"},on:{"filter-change":e.filterHandler,"sort-change":e.sortHandler,"selection-change":e.handleSelectionChange}},[e.checkbox?i("el-table-column",{attrs:{type:"selection",width:"55"}}):e._e(),e._v(" "),e._l(e.columns,function(t){return[i("el-table-column",{ref:"col-"+t.prop,refInFor:!0,attrs:{width:t.width?t.width:null,prop:t.prop,"column-key":t.prop,label:t.label,sortable:!!t.sort&&"custom",filters:t.filter?t.filter.data:null,"filter-multiple":!t.filter||!1!==t.filter.multiple||t.filter.multiple},scopedSlots:e._u([{key:"default",fn:function(r){return["tools"in t?[i("Tools",{attrs:{buttons:t.tools,row:r.row,index:r.$index},on:{"listen-tools":e.Listeners}})]:"render"in t?[i("my-column-"+t.prop,{tag:"component",attrs:{row:r.row}})]:["lazy"in t?i("fold-prefix",{attrs:{level:r.row.tree_level?r.row.tree_level:0}}):e._e(),e._v(" "),"lazy"in t&&r.row.children_count>0?i("Fold",{attrs:{status:r.row.tree_fold,row:r.row},on:{expanding:e.expanding,collapsing:e.collapsing}}):e._e(),e._v("\n                            "+e._s(t.convert?r.row[t.prop+"_name"]:r.row[t.prop])+"\n                        ")]]}}])})]})],2),e._v(" "),e.page?i("el-pagination",{attrs:{"page-sizes":[10,20,30,50],"page-size":e.filterValue.limit,"current-page":e.filterValue.page,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}):e._e()],1)},staticRenderFns:[]}},197:function(e,t,i){"use strict";i.d(t,"a",function(){return n}),i.d(t,"e",function(){return o}),i.d(t,"d",function(){return a}),i.d(t,"c",function(){return l}),i.d(t,"b",function(){return s}),i.d(t,"h",function(){return c}),i.d(t,"f",function(){return u}),i.d(t,"i",function(){return d}),i.d(t,"g",function(){return p});var r=i(24),n=function(e){return r.a.request({url:"/article/add",data:e,method:"post"})},o=function(){return r.a.request({url:"/article/clean",method:"get"})},a=function(e){return r.a.request({url:"/article/"+e,method:"get"})},l=function(e,t){return r.a.request({url:"/article/edit/"+e,data:t,method:"post"})},s=function(e){return r.a.request({url:"/article/del/"+e,method:"get"})},c=function(e){return r.a.request({url:"/url/"+e,method:"delete"})},u=function(e){return r.a.request({url:"/url",data:e,method:"post"})},d=function(e,t){return r.a.request({url:"/url/"+e,data:t,method:"put"})},p=function(e){return r.a.request({url:"/url/batchDel",data:e,method:"post"})}},199:function(e,t,i){var r=i(176)(i(202),i(203),!1,function(e){i(200)},null,null);e.exports=r.exports},200:function(e,t,i){var r=i(201);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);i(177)("098fe01e",r,!0,{})},201:function(e,t,i){(e.exports=i(75)(!1)).push([e.i,".avatar-uploader .el-upload{border:1px dashed #d9d9d9;border-radius:6px;cursor:pointer;position:relative;overflow:hidden}.avatar-uploader .el-upload:hover{border-color:#409eff}.avatar-uploader-icon{font-size:28px;color:#8c939d;width:100px;height:100px;line-height:100px;text-align:center}.avatar{width:100px;height:100px;display:block}",""])},202:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{imageUrl:"",upload_url:"/api/upload",headers:{Authorization:"Bearer "+this.$store.state.user.token}}},props:["img"],created:function(){this.imageUrl=this.img},watch:{img:function(e){this.imageUrl=e}},methods:{handleAvatarSuccess:function(e,t,i){console.log(e,t,i),this.imageUrl=URL.createObjectURL(t.raw),this.$emit("img-success",e.url)},beforeAvatarUpload:function(e){var t=e.size/1024/1024<2;return t||this.$message.error("上传头像图片大小不能超过 2MB!"),t}}}},203:function(e,t){e.exports={render:function(){var e=this.$createElement,t=this._self._c||e;return t("el-upload",{staticClass:"avatar-uploader",attrs:{action:this.upload_url,headers:this.headers,"show-file-list":!1,"on-success":this.handleAvatarSuccess,"before-upload":this.beforeAvatarUpload}},[this.imageUrl?t("img",{staticClass:"avatar",attrs:{src:this.imageUrl}}):t("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])},staticRenderFns:[]}},204:function(e,t,i){"use strict";i.d(t,"b",function(){return n}),i.d(t,"a",function(){return o}),i.d(t,"d",function(){return a}),i.d(t,"c",function(){return l});var r=i(24),n=function(e){return r.a.request({url:"/template/del/"+e,method:"get"})},o=function(e){return r.a.request({url:"/template/add",data:e,method:"post"})},a=function(e){return r.a.request({url:"/template/"+e,method:"get"})},l=function(e,t){return r.a.request({url:"/template/edit/"+e,data:t,method:"post"})}},205:function(e,t,i){e.exports=i(206)},206:function(e,t,i){var r=i(176)(i(207),i(208),!1,null,null,null);e.exports=r.exports},207:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,i,r){return i&&e(t.prototype,i),r&&e(t,r),t}}();var n=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.listeners={}}return r(e,[{key:"on",value:function(e,t){void 0===this.listeners[e]&&(this.listeners[e]=[]),this.listeners[e].push(t)}},{key:"emit",value:function(e){this.listeners[e]&&this.listeners[e].forEach(function(e){return e()})}}]),e}();t.default={name:"VueUeditorWrap",data:function(){return{id:"editor"+Math.random().toString().slice(-10),editor:null,status:0,initValue:"",defaultConfig:{UEDITOR_HOME_URL:"./static/UEditor/",enableAutoSave:!1}}},props:{value:{type:String,default:""},config:{type:Object,default:function(){return{}}},init:{type:Function,default:function(){return function(){}}},destroy:{type:Boolean,default:!1},name:{type:String,default:""}},computed:{mixedConfig:function(){return Object.assign({},this.defaultConfig,this.config)}},methods:{registerButton:function(e){var t=e.name,i=e.icon,r=e.tip,n=e.handler,o=e.UE,a=void 0===o?window.UE:o;a.registerUI(t,function(e,t){e.registerCommand(t,{execCommand:function(){n(e,t)}});var o=new a.ui.Button({name:t,title:r,cssRules:"background-image: url("+i+") !important;background-size: cover;",onclick:function(){e.execCommand(t)}});return e.addListener("selectionchange",function(){var i=e.queryCommandState(t);-1===i?(o.setDisabled(!0),o.setChecked(!1)):(o.setDisabled(!1),o.setChecked(i))}),o})},_initEditor:function(){var e=this;this.$nextTick(function(){e.init(),e.editor=window.UE.getEditor(e.id,e.mixedConfig),e.editor.addListener("ready",function(){e.status=2,e.editor.setContent(e.initValue),e.$emit("ready",e.editor),e.editor.addListener("contentChange",function(){e.$emit("input",e.editor.getContent())})})})},_checkDependencies:function(){var e=this;return new Promise(function(t,i){!!window.UE&&!!window.UEDITOR_CONFIG&&0!==Object.keys(window.UEDITOR_CONFIG).length&&!!window.UE.getEditor?t():window.loadEnv?window.loadEnv.on("scriptsLoaded",function(){t()}):(window.loadEnv=new n,e._loadConfig().then(function(){return e._loadCore()}).then(function(){t(),window.loadEnv.emit("scriptsLoaded")}))})},_loadConfig:function(){var e=this;return new Promise(function(t,i){if(window.UE&&window.UEDITOR_CONFIG&&0!==Object.keys(window.UEDITOR_CONFIG).length)t();else{var r=document.createElement("script");r.type="text/javascript",r.src=e.mixedConfig.UEDITOR_HOME_URL+"ueditor.config.js",document.getElementsByTagName("head")[0].appendChild(r),r.onload=function(){window.UE&&window.UEDITOR_CONFIG&&0!==Object.keys(window.UEDITOR_CONFIG).length?t():console.error("加载ueditor.config.js失败,请检查您的配置地址UEDITOR_HOME_URL填写是否正确!\n",r.src)}}})},_loadCore:function(){var e=this;return new Promise(function(t,i){if(window.UE&&window.UE.getEditor)t();else{var r=document.createElement("script");r.type="text/javascript",r.src=e.mixedConfig.UEDITOR_HOME_URL+"ueditor.all.min.js",document.getElementsByTagName("head")[0].appendChild(r),r.onload=function(){window.UE&&window.UE.getEditor?t():console.error("加载ueditor.all.min.js失败,请检查您的配置地址UEDITOR_HOME_URL填写是否正确!\n",r.src)}}})},_setContent:function(e){e===this.editor.getContent()||this.editor.setContent(e)}},beforeDestroy:function(){this.destroy&&this.editor&&this.editor.destroy&&this.editor.destroy()},watch:{value:{handler:function(e){var t=this;switch(this.status){case 0:this.status=1,this.initValue=e,this._checkDependencies().then(function(){return t._initEditor()});break;case 1:this.initValue=e;break;case 2:this._setContent(e)}},immediate:!0}}}},208:function(e,t){e.exports={render:function(){var e=this.$createElement;return(this._self._c||e)("script",{attrs:{id:this.id,name:this.name,type:"text/plain"}})},staticRenderFns:[]}},210:function(e,t,i){"use strict";i(24)},219:function(e,t,i){var r=i(220);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);i(177)("5a9ebced",r,!0,{})},220:function(e,t,i){(e.exports=i(75)(!1)).push([e.i,'.left{float:left;width:65%}.right{width:30%;float:right}.edui-editor,.edui-editor-iframeholder{width:100%!important}.text{font-size:14px}.item{margin-bottom:18px}.clearfix:after,.clearfix:before{display:table;content:""}.clearfix:after{clear:both}.box-card{width:480px}',""])},221:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(179),n=i(199),o=i.n(n),a=i(197),l=(i(210),i(204),i(205)),s=i.n(l);t.default={mixins:[r.a],name:"publish",data:function(){return{articleForm:{is_jump:1,is_wechat:1,title:"",description:"",content:"",arrow:"",physics:"",photo:"",music:"",appid:"",key:"",right_now:"",cnzz:"",is_encryption:"",iframe:"0",source_check:"1",ajax:""},rules:{title:[{required:!0,message:"文章标题为必填项目",trigger:"blur"}],content:[{required:!0,message:"文章内容为必填项目",trigger:"blur"}]},options:[],Ueconfig:{serverUrl:"/static/UEditor/php/controller.php"}}},methods:{onSubmit:function(e){var t=this;console.log(this.articleForm),this.handleValid(e)&&Object(a.a)(this.articleForm).then(function(e){t.$message.success(e.data.msg),t.$router.push("/article_list")})},success:function(e){this.articleForm.photo=e},clickitem:function(e){e===this.articleForm.is_jump?this.articleForm.is_jump=null:this.articleForm.is_jump=e},isWechat:function(e){e===this.articleForm.is_wechat?this.articleForm.is_wechat=null:this.articleForm.is_wechat=e},is_encryption:function(e){e===this.articleForm.is_encryption?this.articleForm.is_encryption=null:this.articleForm.is_encryption=e}},components:{upload:o.a,VueUeditorWrap:s.a}}},222:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"left",staticStyle:{width:"65%"}},[i("el-form",{ref:"articleForm",staticClass:"demo-ruleForm",attrs:{model:e.articleForm,rules:e.rules,"label-width":"100px"}},[i("el-form-item",{attrs:{label:"文章标题",prop:"title"}},[i("el-input",{model:{value:e.articleForm.title,callback:function(t){e.$set(e.articleForm,"title",t)},expression:"articleForm.title"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"文章内容",prop:"content"}},[i("vue-ueditor-wrap",{attrs:{config:e.Ueconfig},model:{value:e.articleForm.content,callback:function(t){e.$set(e.articleForm,"content",t)},expression:"articleForm.content"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"文章描述",prop:"description"}},[i("el-input",{attrs:{placeholder:"文章描述"},model:{value:e.articleForm.description,callback:function(t){e.$set(e.articleForm,"description",t)},expression:"articleForm.description"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"封面图片",prop:"photo"}},[i("upload",{attrs:{img:e.articleForm.photo},on:{"img-success":e.success}})],1),e._v(" "),i("el-form-item",[i("el-button",{attrs:{type:"primary"},on:{click:function(t){e.onSubmit("articleForm")}}},[e._v("立即发表")])],1)],1)],1),e._v(" "),i("div",{staticClass:"right"},[i("el-card",{staticClass:"box-card"},[i("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[i("span",[e._v("其他选项")])]),e._v(" "),i("p",[i("el-input",{attrs:{placeholder:"微信appId"},model:{value:e.articleForm.appid,callback:function(t){e.$set(e.articleForm,"appid",t)},expression:"articleForm.appid"}})],1),e._v(" "),i("p",[i("el-input",{attrs:{placeholder:"微信密匙"},model:{value:e.articleForm.key,callback:function(t){e.$set(e.articleForm,"key",t)},expression:"articleForm.key"}})],1),e._v(" "),i("p",[i("el-input",{attrs:{placeholder:"第三方流量统计"},model:{value:e.articleForm.cnzz,callback:function(t){e.$set(e.articleForm,"cnzz",t)},expression:"articleForm.cnzz"}})],1),e._v(" "),i("p",[i("el-input",{attrs:{placeholder:"背景音乐"},model:{value:e.articleForm.music,callback:function(t){e.$set(e.articleForm,"music",t)},expression:"articleForm.music"}})],1),e._v(" "),i("p",[i("el-input",{attrs:{placeholder:"文章立即跳转到指定地址"},model:{value:e.articleForm.right_now,callback:function(t){e.$set(e.articleForm,"right_now",t)},expression:"articleForm.right_now"}})],1),e._v(" "),i("p",[i("el-input",{attrs:{placeholder:"点击文章箭头返回"},model:{value:e.articleForm.arrow,callback:function(t){e.$set(e.articleForm,"arrow",t)},expression:"articleForm.arrow"}})],1),e._v(" "),i("p",[i("el-input",{attrs:{placeholder:"物理按键点击返回"},model:{value:e.articleForm.physics,callback:function(t){e.$set(e.articleForm,"physics",t)},expression:"articleForm.physics"}})],1),e._v(" "),i("p",[i("el-radio",{attrs:{label:1},nativeOn:{click:function(t){t.preventDefault(),e.isWechat(1)}},model:{value:e.articleForm.is_wechat,callback:function(t){e.$set(e.articleForm,"is_wechat",t)},expression:"articleForm.is_wechat"}},[e._v("开启微信检测")]),e._v(" "),i("el-radio",{staticStyle:{"margin-right":"25px"},attrs:{label:0},nativeOn:{click:function(t){t.preventDefault(),e.isWechat(0)}},model:{value:e.articleForm.is_wechat,callback:function(t){e.$set(e.articleForm,"is_wechat",t)},expression:"articleForm.is_wechat"}},[e._v("浏览器打开")])],1),e._v(" "),i("p",[i("el-radio",{attrs:{label:1},nativeOn:{click:function(t){t.preventDefault(),e.is_encryption(1)}},model:{value:e.articleForm.is_encryption,callback:function(t){e.$set(e.articleForm,"is_encryption",t)},expression:"articleForm.is_encryption"}},[e._v("页面加密")]),e._v(" "),i("el-radio",{attrs:{label:0},nativeOn:{click:function(t){t.preventDefault(),e.is_encryption(0)}},model:{value:e.articleForm.is_encryption,callback:function(t){e.$set(e.articleForm,"is_encryption",t)},expression:"articleForm.is_encryption"}},[e._v("使用前端框架")]),e._v(" "),i("el-radio",{attrs:{label:2},nativeOn:{click:function(t){t.preventDefault(),e.is_encryption(2)}},model:{value:e.articleForm.is_encryption,callback:function(t){e.$set(e.articleForm,"is_encryption",t)},expression:"articleForm.is_encryption"}},[e._v("异步加载")])],1),e._v(" "),i("p",[i("el-radio",{attrs:{label:1},nativeOn:{click:function(t){t.preventDefault(),e.clickitem(1)}},model:{value:e.articleForm.is_jump,callback:function(t){e.$set(e.articleForm,"is_jump",t)},expression:"articleForm.is_jump"}},[e._v("开启主域名随机跳转")]),e._v(" "),i("el-radio",{attrs:{label:0},nativeOn:{click:function(t){t.preventDefault(),e.clickitem(0)}},model:{value:e.articleForm.is_jump,callback:function(t){e.$set(e.articleForm,"is_jump",t)},expression:"articleForm.is_jump"}},[e._v("开启二级域名随机跳转")])],1),e._v(" "),i("p",[i("el-checkbox",{attrs:{"true-label":"1","false-label":"0"},model:{value:e.articleForm.iframe,callback:function(t){e.$set(e.articleForm,"iframe",t)},expression:"articleForm.iframe"}},[e._v("嵌套网页")]),e._v(" "),i("el-checkbox",{attrs:{"true-label":"1","false-label":"0"},model:{value:e.articleForm.source_check,callback:function(t){e.$set(e.articleForm,"source_check",t)},expression:"articleForm.source_check"}},[e._v("来源检测")])],1)])],1)])},staticRenderFns:[]}},223:function(e,t,i){var r=i(224);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);i(177)("66845abe",r,!0,{})},224:function(e,t,i){(e.exports=i(75)(!1)).push([e.i,'.left{float:left;width:65%}.right{width:30%;float:right}.edui-editor{width:100%!important}.text{font-size:14px}.item{margin-bottom:18px}.clearfix:after,.clearfix:before{display:table;content:""}.clearfix:after{clear:both}.box-card{width:480px}.edui-editor-iframeholder{width:100%!important}',""])},225:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(179),n=i(199),o=i.n(n),a=i(197),l=(i(204),i(210),i(205)),s=i.n(l);t.default={mixins:[r.a],name:"publish",data:function(){return{articleForm:{is_jump:1,is_wechat:1,title:"",description:"",content:"",arrow:"",physics:"",photo:"",music:"",appid:"",key:"",right_now:"",cnzz:"",is_encryption:"",iframe:"0",source_check:"1",ajax:""},rules:{title:[{required:!0,message:"文章标题为必填项目",trigger:"blur"}],content:[{required:!0,message:"文章内容为必填项目",trigger:"blur"}]},options:[],Ueconfig:{serverUrl:"/static/UEditor/php/controller.php"}}},methods:{onSubmit:function(e){var t=this;this.handleValid(e)&&Object(a.c)(this.$route.params.id,this.articleForm).then(function(e){t.$message.success(e.data.msg),t.$router.push("/article_list")})},success:function(e){this.articleForm.photo=e},clickitem:function(e){e===this.articleForm.is_jump?this.articleForm.is_jump=null:this.articleForm.is_jump=e},isWechat:function(e){e===this.articleForm.is_wechat?this.articleForm.is_wechat=null:this.articleForm.is_wechat=e},is_encryption:function(e){e===this.articleForm.is_encryption?this.articleForm.is_encryption=null:this.articleForm.is_encryption=e}},components:{upload:o.a,VueUeditorWrap:s.a},created:function(){var e=this;Object(a.d)(this.$route.params.id).then(function(t){e.articleForm=t.data.data})}}},226:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"left",staticStyle:{width:"65%"}},[i("el-form",{ref:"articleForm",staticClass:"demo-ruleForm",attrs:{model:e.articleForm,rules:e.rules,"label-width":"100px"}},[i("el-form-item",{attrs:{label:"文章标题",prop:"title"}},[i("el-input",{model:{value:e.articleForm.title,callback:function(t){e.$set(e.articleForm,"title",t)},expression:"articleForm.title"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"文章内容",prop:"content"}},[i("vue-ueditor-wrap",{attrs:{config:e.Ueconfig},model:{value:e.articleForm.content,callback:function(t){e.$set(e.articleForm,"content",t)},expression:"articleForm.content"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"文章描述",prop:"description"}},[i("el-input",{attrs:{placeholder:"文章描述"},model:{value:e.articleForm.description,callback:function(t){e.$set(e.articleForm,"description",t)},expression:"articleForm.description"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"封面图片",prop:"photo"}},[i("upload",{attrs:{img:e.articleForm.photo},on:{"img-success":e.success}})],1),e._v(" "),i("el-form-item",[i("el-button",{attrs:{type:"primary"},on:{click:function(t){e.onSubmit("articleForm")}}},[e._v("立即发表")])],1)],1)],1),e._v(" "),i("div",{staticClass:"right"},[i("el-card",{staticClass:"box-card"},[i("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[i("span",[e._v("其他选项")])]),e._v(" "),i("p",[i("el-input",{attrs:{placeholder:"微信appId"},model:{value:e.articleForm.appid,callback:function(t){e.$set(e.articleForm,"appid",t)},expression:"articleForm.appid"}})],1),e._v(" "),i("p",[i("el-input",{attrs:{placeholder:"微信密匙"},model:{value:e.articleForm.key,callback:function(t){e.$set(e.articleForm,"key",t)},expression:"articleForm.key"}})],1),e._v(" "),i("p",[i("el-input",{attrs:{placeholder:"第三方流量统计"},model:{value:e.articleForm.cnzz,callback:function(t){e.$set(e.articleForm,"cnzz",t)},expression:"articleForm.cnzz"}})],1),e._v(" "),i("p",[i("el-input",{attrs:{placeholder:"背景音乐"},model:{value:e.articleForm.music,callback:function(t){e.$set(e.articleForm,"music",t)},expression:"articleForm.music"}})],1),e._v(" "),i("p",[i("el-input",{attrs:{placeholder:"文章立即跳转到指定地址"},model:{value:e.articleForm.right_now,callback:function(t){e.$set(e.articleForm,"right_now",t)},expression:"articleForm.right_now"}})],1),e._v(" "),i("p",[i("el-input",{attrs:{placeholder:"点击文章箭头返回"},model:{value:e.articleForm.arrow,callback:function(t){e.$set(e.articleForm,"arrow",t)},expression:"articleForm.arrow"}})],1),e._v(" "),i("p",[i("el-input",{attrs:{placeholder:"物理按键点击返回"},model:{value:e.articleForm.physics,callback:function(t){e.$set(e.articleForm,"physics",t)},expression:"articleForm.physics"}})],1),e._v(" "),i("p",[i("el-radio",{attrs:{label:1},nativeOn:{click:function(t){t.preventDefault(),e.isWechat(1)}},model:{value:e.articleForm.is_wechat,callback:function(t){e.$set(e.articleForm,"is_wechat",t)},expression:"articleForm.is_wechat"}},[e._v("开启微信检测")]),e._v(" "),i("el-radio",{staticStyle:{"margin-right":"25px"},attrs:{label:0},nativeOn:{click:function(t){t.preventDefault(),e.isWechat(0)}},model:{value:e.articleForm.is_wechat,callback:function(t){e.$set(e.articleForm,"is_wechat",t)},expression:"articleForm.is_wechat"}},[e._v("浏览器打开")])],1),e._v(" "),i("p",[i("el-radio",{attrs:{label:1},nativeOn:{click:function(t){t.preventDefault(),e.is_encryption(1)}},model:{value:e.articleForm.is_encryption,callback:function(t){e.$set(e.articleForm,"is_encryption",t)},expression:"articleForm.is_encryption"}},[e._v("页面加密")]),e._v(" "),i("el-radio",{attrs:{label:0},nativeOn:{click:function(t){t.preventDefault(),e.is_encryption(0)}},model:{value:e.articleForm.is_encryption,callback:function(t){e.$set(e.articleForm,"is_encryption",t)},expression:"articleForm.is_encryption"}},[e._v("使用前端框架")]),e._v(" "),i("el-radio",{attrs:{label:2},nativeOn:{click:function(t){t.preventDefault(),e.is_encryption(2)}},model:{value:e.articleForm.is_encryption,callback:function(t){e.$set(e.articleForm,"is_encryption",t)},expression:"articleForm.is_encryption"}},[e._v("异步加载")])],1),e._v(" "),i("p",[i("el-radio",{attrs:{label:1},nativeOn:{click:function(t){t.preventDefault(),e.clickitem(1)}},model:{value:e.articleForm.is_jump,callback:function(t){e.$set(e.articleForm,"is_jump",t)},expression:"articleForm.is_jump"}},[e._v("开启主域名随机跳转")]),e._v(" "),i("el-radio",{attrs:{label:0},nativeOn:{click:function(t){t.preventDefault(),e.clickitem(0)}},model:{value:e.articleForm.is_jump,callback:function(t){e.$set(e.articleForm,"is_jump",t)},expression:"articleForm.is_jump"}},[e._v("开启二级域名随机跳转")])],1),e._v(" "),i("p",[i("el-checkbox",{attrs:{"true-label":"1","false-label":"0"},model:{value:e.articleForm.iframe,callback:function(t){e.$set(e.articleForm,"iframe",t)},expression:"articleForm.iframe"}},[e._v("嵌套网页")]),e._v(" "),i("el-checkbox",{attrs:{"true-label":"1","false-label":"0"},model:{value:e.articleForm.source_check,callback:function(t){e.$set(e.articleForm,"source_check",t)},expression:"articleForm.source_check"}},[e._v("来源检测")])],1)])],1)])},staticRenderFns:[]}},338:function(e,t,i){var r=i(339);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);i(177)("5d366207",r,!0,{})},339:function(e,t,i){(e.exports=i(75)(!1)).push([e.i,".el-input__inner{height:35px}",""])},340:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(180),n=i.n(r),o=i(80),a=i.n(o),l=i(81),s=i.n(l),c=i(181),u=i(197);t.default={components:{Table:n.a,Add:a.a,Edit:s.a},mixins:[c.a],data:function(){return{page_name:"文章",url:"article/list",addFormVisible:!1,editFormVisible:!1,columns:[{prop:"id",label:"ID",sort:!0,width:"80"},{prop:"title",label:"文章标题",search:!0,render:{props:{row:Object},render:function(e){return e("a",{attrs:{href:this.row.url_home,target:"_blank"},style:{textDecoration:"none"}},this.row.title)}}},{prop:"author",label:"文章作者",width:"180"},{prop:"status",label:"appId/音乐/封面",width:"120",render:{props:{row:Object},render:function(e){return e("div",[e("span",{style:{color:this.row.status.appid.color,fontSize:"30px",padding:"5px"}},this.row.status.appid.status),e("span",{style:{color:this.row.status.music.color,fontSize:"30px",padding:"5px"}},this.row.status.music.status),e("span",{style:{color:this.row.status.photo.color,fontSize:"30px",padding:"5px"}},this.row.status.photo.status)])}}},{prop:"other",label:"箭头返回/按键返回/立即跳转",width:"180",render:{props:{row:Object},render:function(e){return e("div",[e("span",{style:{color:this.row.other.arrow.color,fontSize:"30px",paddingLeft:"20px"}},this.row.other.arrow.status),e("span",{style:{color:this.row.other.physics.color,fontSize:"30px",paddingLeft:"20px"}},this.row.other.physics.status),e("span",{style:{color:this.row.other.right_now.color,fontSize:"30px",paddingLeft:"20px"}},this.row.other.right_now.status)])}}},{prop:"click",label:"点击量",sort:!0,width:"100"},{prop:"publish_time",label:"发布日期",sort:!0,width:"120"},{label:"操作",width:"200",tools:this.handleGetBtn()}],articleAuth:[{add:!1,edit:!1,delete:!1}],options:[],selectedOptions:[]}},created:function(){var e=this;this.$store.state.user.auth.article_list.forEach(function(t){return"add"===t?(e.articleAuth.add=!0,!0):"edit"===t?(e.articleAuth.edit=!0,!0):"delete"===t?(e.articleAuth.delete=!0,!0):void 0})},methods:{handleTools:function(e,t,i){var r=this;"edit"==e?this.handleEdit(i.id):"delete"==e?Object(u.b)(i.id).then(function(e){r.handleDeleteRow(t),r.$message.success(e.data.msg)}):console.error("Tools Event:"+e+" Not found")},handleAdd:function(){this.$router.push("/publish_article")},handleEdit:function(e){this.$router.push({name:"article_edit",params:{id:e}})},handleChange:function(e){this.handleSetFilter("where",{category:e[e.length-1]}),this.handleRenderTable()},handleGetBtn:function(){var e={edit:{type:"primary",icon:"el-icon-edit"},delete:{type:"danger",icon:"el-icon-delete"}},t={};return this.$store.state.user.auth.article_list.forEach(function(i){i in e&&(t[i]=e[i])}),t}}}},341:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticStyle:{margin:"8px 0"}},[i("el-row",[i("el-col",{attrs:{span:14}},[this.articleAuth.add?[i("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-plus"},on:{click:e.handleAdd}},[e._v("添加"+e._s(e.page_name))])]:e._e()],2),e._v(" "),i("el-col",{attrs:{span:10}},[i("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入要搜索的内容...",size:"small"},model:{value:e.search.value,callback:function(t){e.$set(e.search,"value",t)},expression:"search.value"}},[i("el-select",{staticStyle:{width:"110px"},attrs:{slot:"prepend",size:"small",placeholder:"请选择"},slot:"prepend",model:{value:e.search.field,callback:function(t){e.$set(e.search,"field",t)},expression:"search.field"}},e._l(e.columns,function(t){return t.search?i("el-option",{key:t.prop,attrs:{label:t.label,value:t.prop}}):e._e()})),e._v(" "),i("el-button",{attrs:{slot:"append",size:"small",icon:"el-icon-search"},on:{click:e.handleSearch},slot:"append"})],1)],1)],1)],1),e._v(" "),i("Table",{ref:"table",attrs:{url:e.url,columns:e.columns,checkbox:!1},on:{tools:e.handleTools}}),e._v(" "),i("el-dialog",{attrs:{title:"编辑"+e.page_name,visible:e.editFormVisible},on:{"update:visible":function(t){e.editFormVisible=t}}},[e.editFormVisible?i("Edit",{ref:"editForm",attrs:{id:e.edit_id},on:{render:this.handleRenderTable,close:function(t){e.editFormVisible=!1}}}):e._e()],1)],1)},staticRenderFns:[]}},499:function(e,t,i){var r=i(176)(i(340),i(341),!1,function(e){i(338)},null,null);e.exports=r.exports},80:function(e,t,i){var r=i(176)(i(221),i(222),!1,function(e){i(219)},null,null);e.exports=r.exports},81:function(e,t,i){var r=i(176)(i(225),i(226),!1,function(e){i(223)},null,null);e.exports=r.exports}});