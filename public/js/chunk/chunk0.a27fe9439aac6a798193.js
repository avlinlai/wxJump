webpackJsonp([0],{176:function(e,t){e.exports=function(e,t,n,r,o,i){var a,s=e=e||{},l=typeof e.default;"object"!==l&&"function"!==l||(a=e,s=e.default);var u,d="function"==typeof s?s.options:s;if(t&&(d.render=t.render,d.staticRenderFns=t.staticRenderFns,d._compiled=!0),n&&(d.functional=!0),o&&(d._scopeId=o),i?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},d._ssrRegister=u):r&&(u=r),u){var c=d.functional,f=c?d.render:d.beforeCreate;c?(d._injectStyles=u,d.render=function(e,t){return u.call(t),f(e,t)}):d.beforeCreate=f?[].concat(f,u):[u]}return{esModule:a,exports:s,options:d}}},177:function(e,t,n){var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o=n(178),i={},a=r&&(document.head||document.getElementsByTagName("head")[0]),s=null,l=0,u=!1,d=function(){},c=null,f="data-vue-ssr-id",h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(e){for(var t=0;t<e.length;t++){var n=e[t],r=i[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(g(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var a=[];for(o=0;o<n.parts.length;o++)a.push(g(n.parts[o]));i[n.id]={id:n.id,refs:1,parts:a}}}}function m(){var e=document.createElement("style");return e.type="text/css",a.appendChild(e),e}function g(e){var t,n,r=document.querySelector("style["+f+'~="'+e.id+'"]');if(r){if(u)return d;r.parentNode.removeChild(r)}if(h){var o=l++;r=s||(s=m()),t=b.bind(null,r,o,!1),n=b.bind(null,r,o,!0)}else r=m(),t=function(e,t){var n=t.css,r=t.media,o=t.sourceMap;r&&e.setAttribute("media",r);c.ssrId&&e.setAttribute(f,t.id);o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}e.exports=function(e,t,n,r){u=n,c=r||{};var a=o(e,t);return p(a),function(t){for(var n=[],r=0;r<a.length;r++){var s=a[r];(l=i[s.id]).refs--,n.push(l)}t?p(a=o(e,t)):a=[];for(r=0;r<n.length;r++){var l;if(0===(l=n[r]).refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete i[l.id]}}}};var v,_=(v=[],function(e,t){return v[e]=t,v.filter(Boolean).join("\n")});function b(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=_(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}},178:function(e,t){e.exports=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=i[0],s={id:e+":"+o,css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}},179:function(e,t,n){"use strict";var r={data:function(){return{loading:!1,loading_msg:"数据获取中..."}},created:function(){console.log("mixin-form_page")},methods:{handleGetData:function(e){var t=this;return this.loading=!0,new Promise(function(n,r){e.then(function(e){t.loading=!1,n(e.data)}).catch(function(e){console.log(e),r(e),t.loading=!1})})},handleValid:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"form",t=null;return this.$refs[e].validate(function(e){e?t=!0:(console.log("error submit!!"),t=!1)}),t},handleSubmit:function(e){var t=this;this.loading=!0,e.then(function(e){t.loading=!1,t.$message.success(e.data.msg),t.$emit("render"),t.close()}).catch(function(e){console.log(e),t.loading=!1,t.$message.error("操作失败"),t.close()})},close:function(){this.$emit("close")}}};t.a=r},180:function(e,t,n){var r=n(176)(n(184),n(195),!1,function(e){n(182)},"data-v-6f730715",null);e.exports=r.exports},181:function(e,t,n){"use strict";var r={data:function(){return{search:{},edit_id:null,tools_id:null,select_ids:null}},created:function(){},methods:{handleSearch:function(){this.handleSetFilter("search",this.search),this.handleRenderTable()},handleGetSelection:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=this.$refs.table.selection;if(null===t&&(t=[]),null==e)return t;if("string"==typeof e){var n=[];return t.forEach(function(t){e in t&&n.push(t[e])}),n}return console.error("handleGetSelection 参数错误"),this.$refs.table.selection},handleSetFilter:function(e,t){this.$refs.table.filterValue[e]=t},handleGetFilter:function(e){return this.$refs.table.filterValue[e]},handleRenderTable:function(){this.$refs.table.renderTable()},handleDeleteRow:function(e){this.$refs.table.deleteRow(e)},handleDel:function(e,t){var n=this,r=this.$loading({lock:!0,text:"删除数据中...",spinner:"el-icon-loading"});e.then(function(e){n.loading=!1,0==e.msg?(n.$message.success("删除成功"),n.handleDeleteRow(t)):n.$message.success("删除成功"),r.close()}).catch(function(e){n.loading=!1,n.$message.error("删除失败"),r.close(),console.log(e)})},handleSetChild:function(e,t){this.$refs.table.SetChildren(e,t)},handleOpenTableLoding:function(){this.$refs.table.loading=!0},handleCloseTableLoding:function(){this.$refs.table.loading=!1}}};t.a=r},182:function(e,t,n){var r=n(183);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(177)("67647e84",r,!0,{})},183:function(e,t,n){(e.exports=n(75)(!1)).push([e.i,".el-pagination[data-v-6f730715]{float:right;margin-top:8px}",""])},184:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(185),o=n.n(r),i=n(190),a=n.n(i),s=n(24);t.default={props:{url:String,columns:Array,page:{type:Boolean,default:!0},checkbox:{type:Boolean,default:!0}},data:function(){return{loading:!1,data:null,selection:null,filterValue:{where:{},page:1,limit:10,search:"",orderBy:"id,asc"},total:0}},components:{Tools:o.a,Fold:a.a},created:function(){for(var e in this.columns)"render"in this.columns[e]&&Vue.component("my-column-"+this.columns[e].prop,this.columns[e].render);Vue.component("fold-prefix",{render:function(e){return e("span",{style:{paddingLeft:2*this.level+"em"}})},props:{level:{type:Number,required:!0}}}),this.renderTable()},methods:{expanding:function(e){e.tree_fold="loading",this.$emit("children",e)},collapsing:function(e){e.tree_fold="close",this.SetChildren(e,null)},Listeners:function(e,t,n){this.$emit("tools",e,t,n)},filterHandler:function(e){for(var t in e)null==e[t]||0==e[t].length?delete this.filterValue.where[t]:1==e[t].length?this.filterValue.where[t]=e[t][0]:this.filterValue.where[t]=e[t];this.renderTable()},sortHandler:function(e){null==e.order?this.filterValue.orderBy=null:this.filterValue.orderBy=e.prop+","+e.order.slice(0,-6),this.renderTable()},handleSizeChange:function(e){this.filterValue.limit=e,this.renderTable()},handleCurrentChange:function(e){this.filterValue.page=e,this.renderTable()},handleSelectionChange:function(e){this.selection=e,this.$emit("SelectionChange",e)},renderTable:function(){var e=this;this.loading=!0,this.page||(delete this.filterValue.page,delete this.filterValue.limit),s.a.get(this.url,{params:this.filterValue}).then(function(t){e.total=t.data.count,e.data=t.data.data,e.loading=!1}).catch(function(t){e.loading=!1,console.log(t)})},deleteRow:function(e){this.data.splice(e,1)},SetChildren:function(e,t){for(var n=e.tree_path,r=this.data,o=0;o<n.length;o++)r=0==o?r[n[o]]:r.tree_children[n[o]];"loading"==e.tree_fold&&(e.tree_fold="open"),this.$set(r,"tree_fold",e.tree_fold),this.$set(r,"tree_children",t)}},computed:{reversedData:function(){var e=this.data;return e=function e(t,n,r){var o="tree_children";var i=[];for(var a in t){t[a].tree_level=r,n[r]=a,n.length=r+1,t[a].tree_path=n;var s=JSON.parse(JSON.stringify(t[a]));if(delete s[o],i.push(s),o in t[a]){var l=e(t[a][o],n,r+1);i=i.concat(l)}}return i}(e,[],0)}}}},185:function(e,t,n){var r=n(176)(n(188),n(189),!1,function(e){n(186)},"data-v-d5eb55a0",null);e.exports=r.exports},186:function(e,t,n){var r=n(187);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(177)("54f2e4d2",r,!0,{})},187:function(e,t,n){(e.exports=n(75)(!1)).push([e.i,"",""])},188:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"tools",props:["row","index","buttons"],data:function(){return{tooltip:{add:"添加",show:"查看详情",edit:"编辑",delete:"删除"}}},methods:{handleTools:function(e){this.$emit("listen-tools",e,this.index,this.row)}}}},189:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-button-group",[e._l(e.buttons,function(t,r){return[(t.text?t.text:e.tooltip[r]&&e.tooltip[r])?[n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.text?t.text:e.tooltip[r],placement:"bottom"}},[n("el-button",{attrs:{type:t.type,size:"mini",icon:t.icon},on:{click:function(t){e.handleTools(r)}}})],1)]:[n("el-button",{attrs:{type:t.type,size:"mini",icon:t.icon},on:{click:function(t){e.handleTools(r)}}})]]})],2)},staticRenderFns:[]}},190:function(e,t,n){var r=n(176)(n(193),n(194),!1,function(e){n(191)},"data-v-1ceaf87c",null);e.exports=r.exports},191:function(e,t,n){var r=n(192);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(177)("7f0398dd",r,!0,{})},192:function(e,t,n){(e.exports=n(75)(!1)).push([e.i,"",""])},193:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"fold",props:{row:{type:Object},status:{default:"close"}},data:function(){return{state:this.status,className:{open:"el-icon-caret-bottom",close:"el-icon-caret-right",loading:"el-icon-loading"}}},methods:{handleFold:function(){"open"==this.status?this.$emit("collapsing",this.row):(this.state="loading",this.$emit("expanding",this.row))}},watch:{status:function(e){this.state=e}}}},194:function(e,t){e.exports={render:function(){var e=this.$createElement;return(this._self._c||e)("i",{class:this.className[this.state],staticStyle:{cursor:"pointer"},on:{click:this.handleFold}})},staticRenderFns:[]}},195:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{border:"",data:e.reversedData,size:"mini"},on:{"filter-change":e.filterHandler,"sort-change":e.sortHandler,"selection-change":e.handleSelectionChange}},[e.checkbox?n("el-table-column",{attrs:{type:"selection",width:"55"}}):e._e(),e._v(" "),e._l(e.columns,function(t){return[n("el-table-column",{ref:"col-"+t.prop,refInFor:!0,attrs:{width:t.width?t.width:null,prop:t.prop,"column-key":t.prop,label:t.label,sortable:!!t.sort&&"custom",filters:t.filter?t.filter.data:null,"filter-multiple":!t.filter||!1!==t.filter.multiple||t.filter.multiple},scopedSlots:e._u([{key:"default",fn:function(r){return["tools"in t?[n("Tools",{attrs:{buttons:t.tools,row:r.row,index:r.$index},on:{"listen-tools":e.Listeners}})]:"render"in t?[n("my-column-"+t.prop,{tag:"component",attrs:{row:r.row}})]:["lazy"in t?n("fold-prefix",{attrs:{level:r.row.tree_level?r.row.tree_level:0}}):e._e(),e._v(" "),"lazy"in t&&r.row.children_count>0?n("Fold",{attrs:{status:r.row.tree_fold,row:r.row},on:{expanding:e.expanding,collapsing:e.collapsing}}):e._e(),e._v("\n                            "+e._s(t.convert?r.row[t.prop+"_name"]:r.row[t.prop])+"\n                        ")]]}}])})]})],2),e._v(" "),e.page?n("el-pagination",{attrs:{"page-sizes":[10,20,30,50],"page-size":e.filterValue.limit,"current-page":e.filterValue.page,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}):e._e()],1)},staticRenderFns:[]}},196:function(e,t,n){"use strict";n.d(t,"A",function(){return o}),n.d(t,"x",function(){return i}),n.d(t,"B",function(){return a}),n.d(t,"C",function(){return s}),n.d(t,"y",function(){return l}),n.d(t,"o",function(){return u}),n.d(t,"p",function(){return d}),n.d(t,"n",function(){return c}),n.d(t,"q",function(){return f}),n.d(t,"r",function(){return h}),n.d(t,"k",function(){return p}),n.d(t,"s",function(){return m}),n.d(t,"v",function(){return g}),n.d(t,"w",function(){return v}),n.d(t,"u",function(){return _}),n.d(t,"t",function(){return b}),n.d(t,"a",function(){return x}),n.d(t,"e",function(){return y}),n.d(t,"d",function(){return w}),n.d(t,"c",function(){return $}),n.d(t,"b",function(){return E}),n.d(t,"l",function(){return C}),n.d(t,"g",function(){return k}),n.d(t,"f",function(){return O}),n.d(t,"h",function(){return S}),n.d(t,"i",function(){return F}),n.d(t,"j",function(){return T}),n.d(t,"z",function(){return R}),n.d(t,"D",function(){return U}),n.d(t,"m",function(){return V});var r=n(24),o=function(e){return r.a.request({url:"/source/"+e,method:"delete"})},i=function(e){return r.a.request({url:"/source",data:e,method:"post"})},a=function(e){return r.a.request({url:"/source/"+e,method:"get"})},s=function(e,t){return r.a.request({url:"/source/"+e,data:t,method:"put"})},l=function(e){return r.a.request({url:"/source/batchIdDelete",data:e,method:"post"})},u=function(e){return r.a.request({url:"/meal/batchIdDelete",data:e,method:"post"})},d=function(e){return r.a.request({url:"/meal/"+e,method:"delete"})},c=function(e){return r.a.request({url:"/meal",data:e,method:"post"})},f=function(e){return r.a.request({url:"/meal/"+e,method:"get"})},h=function(e,t){return r.a.request({url:"/meal/"+e,data:t,method:"put"})},p=function(){return r.a.request({url:"template/list",method:"get"})},m=function(e){return r.a.request({url:"size",data:e,method:"post"})},g=function(e){return r.a.request({url:"size/"+e,method:"get"})},v=function(e,t){return r.a.request({url:"size/"+e,data:t,method:"put"})},_=function(e){return r.a.request({url:"size/"+e,method:"delete"})},b=function(e){return r.a.request({url:"size/batchIdDelete",data:e,method:"post"})},x=function(e){return r.a.request({url:"goods",data:e,method:"post"})},y=function(e,t){return r.a.request({url:"goods/"+e,data:t,method:"put"})},w=function(e){return r.a.request({url:"goods/"+e,method:"get"})},$=function(e){return r.a.request({url:"goods/"+e,method:"delete"})},E=function(e){return r.a.request({url:"goods/batchDelete",data:e,method:"post"})},C=function(e){return r.a.request({url:"goodsOrder/ip_source/"+e,method:"get"})},k=function(e){return r.a.request({url:"goodsOrder/"+e,method:"delete"})},O=function(e){return r.a.request({url:"goodsOrder/batchDelete",data:e,method:"post"})},S=function(e){return r.a.request({url:"goodsOrder/"+e,method:"get"})},F=function(e,t){return r.a.request({url:"goodsOrder/"+e,data:t,method:"put"})},T=function(e,t){return r.a.request({url:"goodsOrder/status/"+e,data:t,method:"put"})},R=function(){return r.a.request({url:"source/count",method:"get"})},U=function(){return r.a.request({url:"source/zhcount",method:"get"})},V=function(){return r.a.request({url:"source/peoplecount",method:"get"})}},199:function(e,t,n){var r=n(176)(n(202),n(203),!1,function(e){n(200)},null,null);e.exports=r.exports},200:function(e,t,n){var r=n(201);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(177)("098fe01e",r,!0,{})},201:function(e,t,n){(e.exports=n(75)(!1)).push([e.i,".avatar-uploader .el-upload{border:1px dashed #d9d9d9;border-radius:6px;cursor:pointer;position:relative;overflow:hidden}.avatar-uploader .el-upload:hover{border-color:#409eff}.avatar-uploader-icon{font-size:28px;color:#8c939d;width:100px;height:100px;line-height:100px;text-align:center}.avatar{width:100px;height:100px;display:block}",""])},202:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{imageUrl:"",upload_url:"/api/upload",headers:{Authorization:"Bearer "+this.$store.state.user.token}}},props:["img"],created:function(){this.imageUrl=this.img},watch:{img:function(e){this.imageUrl=e}},methods:{handleAvatarSuccess:function(e,t,n){console.log(e,t,n),this.imageUrl=URL.createObjectURL(t.raw),this.$emit("img-success",e.url)},beforeAvatarUpload:function(e){var t=e.size/1024/1024<2;return t||this.$message.error("上传头像图片大小不能超过 2MB!"),t}}}},203:function(e,t){e.exports={render:function(){var e=this.$createElement,t=this._self._c||e;return t("el-upload",{staticClass:"avatar-uploader",attrs:{action:this.upload_url,headers:this.headers,"show-file-list":!1,"on-success":this.handleAvatarSuccess,"before-upload":this.beforeAvatarUpload}},[this.imageUrl?t("img",{staticClass:"avatar",attrs:{src:this.imageUrl}}):t("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])},staticRenderFns:[]}},205:function(e,t,n){e.exports=n(206)},206:function(e,t,n){var r=n(176)(n(207),n(208),!1,null,null,null);e.exports=r.exports},207:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.listeners={}}return r(e,[{key:"on",value:function(e,t){void 0===this.listeners[e]&&(this.listeners[e]=[]),this.listeners[e].push(t)}},{key:"emit",value:function(e){this.listeners[e]&&this.listeners[e].forEach(function(e){return e()})}}]),e}();t.default={name:"VueUeditorWrap",data:function(){return{id:"editor"+Math.random().toString().slice(-10),editor:null,status:0,initValue:"",defaultConfig:{UEDITOR_HOME_URL:"./static/UEditor/",enableAutoSave:!1}}},props:{value:{type:String,default:""},config:{type:Object,default:function(){return{}}},init:{type:Function,default:function(){return function(){}}},destroy:{type:Boolean,default:!1},name:{type:String,default:""}},computed:{mixedConfig:function(){return Object.assign({},this.defaultConfig,this.config)}},methods:{registerButton:function(e){var t=e.name,n=e.icon,r=e.tip,o=e.handler,i=e.UE,a=void 0===i?window.UE:i;a.registerUI(t,function(e,t){e.registerCommand(t,{execCommand:function(){o(e,t)}});var i=new a.ui.Button({name:t,title:r,cssRules:"background-image: url("+n+") !important;background-size: cover;",onclick:function(){e.execCommand(t)}});return e.addListener("selectionchange",function(){var n=e.queryCommandState(t);-1===n?(i.setDisabled(!0),i.setChecked(!1)):(i.setDisabled(!1),i.setChecked(n))}),i})},_initEditor:function(){var e=this;this.$nextTick(function(){e.init(),e.editor=window.UE.getEditor(e.id,e.mixedConfig),e.editor.addListener("ready",function(){e.status=2,e.editor.setContent(e.initValue),e.$emit("ready",e.editor),e.editor.addListener("contentChange",function(){e.$emit("input",e.editor.getContent())})})})},_checkDependencies:function(){var e=this;return new Promise(function(t,n){!!window.UE&&!!window.UEDITOR_CONFIG&&0!==Object.keys(window.UEDITOR_CONFIG).length&&!!window.UE.getEditor?t():window.loadEnv?window.loadEnv.on("scriptsLoaded",function(){t()}):(window.loadEnv=new o,e._loadConfig().then(function(){return e._loadCore()}).then(function(){t(),window.loadEnv.emit("scriptsLoaded")}))})},_loadConfig:function(){var e=this;return new Promise(function(t,n){if(window.UE&&window.UEDITOR_CONFIG&&0!==Object.keys(window.UEDITOR_CONFIG).length)t();else{var r=document.createElement("script");r.type="text/javascript",r.src=e.mixedConfig.UEDITOR_HOME_URL+"ueditor.config.js",document.getElementsByTagName("head")[0].appendChild(r),r.onload=function(){window.UE&&window.UEDITOR_CONFIG&&0!==Object.keys(window.UEDITOR_CONFIG).length?t():console.error("加载ueditor.config.js失败,请检查您的配置地址UEDITOR_HOME_URL填写是否正确!\n",r.src)}}})},_loadCore:function(){var e=this;return new Promise(function(t,n){if(window.UE&&window.UE.getEditor)t();else{var r=document.createElement("script");r.type="text/javascript",r.src=e.mixedConfig.UEDITOR_HOME_URL+"ueditor.all.min.js",document.getElementsByTagName("head")[0].appendChild(r),r.onload=function(){window.UE&&window.UE.getEditor?t():console.error("加载ueditor.all.min.js失败,请检查您的配置地址UEDITOR_HOME_URL填写是否正确!\n",r.src)}}})},_setContent:function(e){e===this.editor.getContent()||this.editor.setContent(e)}},beforeDestroy:function(){this.destroy&&this.editor&&this.editor.destroy&&this.editor.destroy()},watch:{value:{handler:function(e){var t=this;switch(this.status){case 0:this.status=1,this.initValue=e,this._checkDependencies().then(function(){return t._initEditor()});break;case 1:this.initValue=e;break;case 2:this._setContent(e)}},immediate:!0}}}},208:function(e,t){e.exports={render:function(){var e=this.$createElement;return(this._self._c||e)("script",{attrs:{id:this.id,name:this.name,type:"text/plain"}})},staticRenderFns:[]}},412:function(e,t,n){var r=n(413);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(177)("44b24b19",r,!0,{})},413:function(e,t,n){(e.exports=n(75)(!1)).push([e.i,".left{float:left;width:55%}.right{width:30%;float:right}.edui-editor,.edui-editor-iframeholder{width:100%!important}.wheel_photo{width:200px;height:200px}",""])},414:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(180),o=n.n(r),i=n(205),a=n.n(i),s=n(199),l=n.n(s),u=n(415),d=n.n(u),c=n(426),f=n.n(c),h=n(439),p=n.n(h),m=n(196);t.default={components:{upload:l.a,VueUeditorWrap:a.a,Table:o.a,setMeal:d.a,goodsSize:f.a,Extension:p.a},data:function(){return{lazy:!0,activeName:"first",goods:{goods_title:"",goods_desc:"",goods_content:"",wheel_photo:[],photo:"",price:"",is_up:"1",template_id:""},Ueconfig:{serverUrl:"/static/UEditor/php/controller.php"},template:[]}},methods:{success:function(e){this.goods.photo=e},wheel_success:function(e){this.goods.wheel_photo.push(e)},goodsAdd:function(){var e=this;Object(m.e)(this.$route.params.id,this.goods).then(function(t){e.$message.success(t.data.msg),e.$router.push("/goods_list")})},deleteWheel:function(e){this.goods.wheel_photo.splice(e,1)}},created:function(){var e=this;void 0!=this.$route.params.sub&&(this.activeName=this.$route.params.sub),Object(m.d)(this.$route.params.id).then(function(t){e.goods=t.data.data}),Object(m.k)().then(function(t){e.template=t.data.data})},props:["id"]}},415:function(e,t,n){var r=n(176)(n(416),n(425),!1,null,null,null);e.exports=r.exports},416:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(180),o=n.n(r),i=n(417),a=n.n(i),s=n(420),l=n.n(s),u=n(181),d=n(196);t.default={components:{Table:o.a,Add:a.a,Edit:l.a},mixins:[u.a],data:function(){return{url:"/meal?goods_id="+this.$route.params.id,addFormVisible:!1,editFormVisible:!1,columns:[{prop:"id",label:"ID",width:"80"},{prop:"meal_name",label:"套餐名称"},{prop:"meal_price",label:"套餐价格"},{prop:"meal_stock",label:"库存",sort:!0},{label:"操作",width:"200",tools:this.handleGetBtn()}]}},methods:{handleTools:function(e,t,n){var r=this;this.tools_id=n.id,"edit"==e?this.editFormVisible=!0:"delete"==e&&Object(d.p)(n.id).then(function(e){r.handleDeleteRow(t),r.$message.success(e.data.msg)})},handleAdd:function(){this.addFormVisible=!0},handleSelect:function(){var e=this,t=this.handleGetSelection("id");if(0===t.length)return this.$message.error("请选择一个选项后再进行进行操作"),!1;Object(d.o)({id:t}).then(function(t){e.handleRenderTable(),e.$message.success(t.data.msg)})},returnList:function(){this.$router.push("/goods_list")},handleGetBtn:function(){var e={edit:{type:"primary",icon:"el-icon-edit"},delete:{type:"danger",icon:"el-icon-delete"}},t={};return this.$store.state.user.auth.role.forEach(function(n){n in e&&(t[n]=e[n])}),e}}}},417:function(e,t,n){var r=n(176)(n(418),n(419),!1,null,null,null);e.exports=r.exports},418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(179),o=n(196);t.default={mixins:[r.a],data:function(){return{form:{meal_name:"",meal_price:"",meal_stock:99999,goods_id:this.$route.params.id},rules:{meal_name:[{required:!0,message:"套餐名称必须填写",trigger:"blur"}],meal_price:[{type:"number",required:!0,message:"套餐价格必须填写",trigger:"blur"}],meal_stock:[{type:"number",required:!0,message:"套餐库存必须填写",trigger:"blur"}]}}},methods:{onSubmit:function(){this.handleValid("meal_form")&&this.handleSubmit(Object(o.n)(this.form))}}}},419:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-form",{ref:"meal_form",attrs:{rules:e.rules,model:e.form,"label-width":"80px"}},[n("el-form-item",{attrs:{label:"套餐名称",prop:"meal_name"}},[n("el-input",{attrs:{placeholder:"请输入套餐名称"},model:{value:e.form.meal_name,callback:function(t){e.$set(e.form,"meal_name",t)},expression:"form.meal_name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"套餐价格",prop:"meal_price"}},[n("el-input",{attrs:{placeholder:"请输入套餐价格"},model:{value:e.form.meal_price,callback:function(t){e.$set(e.form,"meal_price",t)},expression:"form.meal_price"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"库存",prop:"meal_stock"}},[n("el-input",{attrs:{placeholder:"请输入套餐库存"},model:{value:e.form.meal_stock,callback:function(t){e.$set(e.form,"meal_stock",t)},expression:"form.meal_stock"}})],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("立即创建")])],1)],1)},staticRenderFns:[]}},420:function(e,t,n){var r=n(176)(n(423),n(424),!1,function(e){n(421)},"data-v-579e6802",null);e.exports=r.exports},421:function(e,t,n){var r=n(422);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(177)("0cc432ea",r,!0,{})},422:function(e,t,n){(e.exports=n(75)(!1)).push([e.i,"",""])},423:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(179),o=n(196);t.default={mixins:[r.a],data:function(){return{form:{meal_name:"",meal_price:"",meal_stock:99999},rules:{meal_name:[{required:!0,message:"套餐名称必须填写",trigger:"blur"}],meal_price:[{type:"number",required:!0,message:"套餐价格必须填写",trigger:"blur"}],meal_stock:[{type:"number",required:!0,message:"套餐库存必须填写",trigger:"blur"}]}}},methods:{onSubmit:function(){this.handleValid("meal_form")&&this.handleSubmit(Object(o.r)(this.id,this.form))}},created:function(){var e=this;Object(o.q)(this.id).then(function(t){e.form=t.data.data})},props:["id"]}},424:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-form",{ref:"meal_form",attrs:{rules:e.rules,model:e.form,"label-width":"80px"}},[n("el-form-item",{attrs:{label:"套餐名称",prop:"meal_name"}},[n("el-input",{attrs:{placeholder:"请输入套餐名称"},model:{value:e.form.meal_name,callback:function(t){e.$set(e.form,"meal_name",t)},expression:"form.meal_name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"套餐价格",prop:"meal_price"}},[n("el-input",{attrs:{placeholder:"请输入套餐价格"},model:{value:e.form.meal_price,callback:function(t){e.$set(e.form,"meal_price",t)},expression:"form.meal_price"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"库存",prop:"meal_stock"}},[n("el-input",{attrs:{placeholder:"请输入套餐库存"},model:{value:e.form.meal_stock,callback:function(t){e.$set(e.form,"meal_stock",t)},expression:"form.meal_stock"}})],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("立即创建")])],1)],1)},staticRenderFns:[]}},425:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticStyle:{margin:"8px 0"}},[n("el-row",[n("el-col",{attrs:{span:14}},[n("el-button",{attrs:{type:"primary"},on:{click:e.handleAdd}},[e._v("添加套餐")]),e._v(" "),n("el-button",{attrs:{type:"danger"},on:{click:e.handleSelect}},[e._v("删除套餐")]),e._v(" "),n("el-button",{attrs:{type:"success"},on:{click:e.returnList}},[e._v("返回产品列表")])],1)],1)],1),e._v(" "),n("Table",{ref:"table",attrs:{url:e.url,columns:e.columns},on:{tools:e.handleTools}}),e._v(" "),n("el-dialog",{attrs:{title:"添加套餐",visible:e.addFormVisible},on:{"update:visible":function(t){e.addFormVisible=t}}},[e.addFormVisible?n("Add",{ref:"addForm",on:{close:function(t){e.addFormVisible=!1},render:this.handleRenderTable}}):e._e()],1),e._v(" "),n("el-dialog",{attrs:{title:"编辑套餐",visible:e.editFormVisible},on:{"update:visible":function(t){e.editFormVisible=t}}},[e.editFormVisible?n("Edit",{ref:"editForm",attrs:{id:e.tools_id},on:{close:function(t){e.editFormVisible=!1},render:this.handleRenderTable}}):e._e()],1)],1)},staticRenderFns:[]}},426:function(e,t,n){var r=n(176)(n(429),n(438),!1,function(e){n(427)},"data-v-a7b3d3ec",null);e.exports=r.exports},427:function(e,t,n){var r=n(428);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(177)("3f7c1f02",r,!0,{})},428:function(e,t,n){(e.exports=n(75)(!1)).push([e.i,".chart-left[data-v-a7b3d3ec]{width:720px}.chart-left[data-v-a7b3d3ec] .el-pagination{float:left!important}",""])},429:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(180),o=n.n(r),i=n(430),a=n.n(i),s=n(433),l=n.n(s),u=n(181),d=n(196);t.default={components:{Table:o.a,Add:a.a,Edit:l.a},mixins:[u.a],data:function(){return{url:"/size?goods_id="+this.$route.params.id,addFormVisible:!1,editFormVisible:!1,columns:[{prop:"id",label:"ID",width:"80"},{prop:"size_name",label:"尺码名称",width:"380"},{label:"操作",width:"200",tools:this.handleGetBtn()}]}},methods:{handleTools:function(e,t,n){var r=this;this.tools_id=n.id,"edit"==e?this.editFormVisible=!0:"delete"==e&&Object(d.u)(n.id).then(function(e){r.handleDeleteRow(t),r.$message.success(e.data.msg)})},handleAdd:function(){this.addFormVisible=!0},handleSelect:function(){var e=this,t=this.handleGetSelection("id");if(0===t.length)return this.$message.error("请选择一个选项后再进行进行操作"),!1;Object(d.t)({id:t}).then(function(t){e.handleRenderTable(),e.$message.success(t.data.msg)})},returnList:function(){this.$router.push("/goods_list")},handleGetBtn:function(){var e={edit:{type:"primary",icon:"el-icon-edit"},delete:{type:"danger",icon:"el-icon-delete"}},t={};return this.$store.state.user.auth.role.forEach(function(n){n in e&&(t[n]=e[n])}),e}}}},430:function(e,t,n){var r=n(176)(n(431),n(432),!1,null,null,null);e.exports=r.exports},431:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(179),o=n(196);t.default={mixins:[r.a],data:function(){return{form:{size_name:"",goods_id:this.$route.params.id},rules:{size_name:[{required:!0,message:"尺码名称必须填写",trigger:"blur"}]}}},methods:{onSubmit:function(){this.handleValid("size_form")&&this.handleSubmit(Object(o.s)(this.form))}}}},432:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-form",{ref:"size_form",attrs:{rules:e.rules,model:e.form,"label-width":"80px"}},[n("el-form-item",{attrs:{label:"尺码名称",prop:"size_name"}},[n("el-input",{attrs:{placeholder:"请输入尺码名称"},model:{value:e.form.size_name,callback:function(t){e.$set(e.form,"size_name",t)},expression:"form.size_name"}})],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("立即创建")])],1)],1)},staticRenderFns:[]}},433:function(e,t,n){var r=n(176)(n(436),n(437),!1,function(e){n(434)},"data-v-2849b340",null);e.exports=r.exports},434:function(e,t,n){var r=n(435);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(177)("78b46aca",r,!0,{})},435:function(e,t,n){(e.exports=n(75)(!1)).push([e.i,"",""])},436:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(179),o=n(196);t.default={mixins:[r.a],data:function(){return{form:{size_name:""},rules:{size_name:[{required:!0,message:"尺码名称必须填写",trigger:"blur"}]}}},methods:{onSubmit:function(){this.handleValid("size_form")&&this.handleSubmit(Object(o.w)(this.id,this.form))}},created:function(){var e=this;Object(o.v)(this.id).then(function(t){e.form=t.data.data})},props:["id"]}},437:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-form",{ref:"size_form",attrs:{rules:e.rules,model:e.form,"label-width":"80px"}},[n("el-form-item",{attrs:{label:"尺码名称",prop:"size_name"}},[n("el-input",{attrs:{placeholder:"请输入尺码名称"},model:{value:e.form.size_name,callback:function(t){e.$set(e.form,"size_name",t)},expression:"form.size_name"}})],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("立即创建")])],1)],1)},staticRenderFns:[]}},438:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticStyle:{margin:"8px 0"}},[n("el-row",[n("el-col",{attrs:{span:14}},[n("el-button",{attrs:{type:"primary"},on:{click:e.handleAdd}},[e._v("添加产品尺码")]),e._v(" "),n("el-button",{attrs:{type:"danger"},on:{click:e.handleSelect}},[e._v("删除产品尺码")]),e._v(" "),n("el-button",{attrs:{type:"success"},on:{click:e.returnList}},[e._v("返回产品列表")])],1)],1)],1),e._v(" "),n("div",{staticClass:"chart-left"},[n("Table",{ref:"table",attrs:{url:e.url,columns:e.columns},on:{tools:e.handleTools}})],1),e._v(" "),n("el-dialog",{attrs:{title:"添加产品尺码",visible:e.addFormVisible},on:{"update:visible":function(t){e.addFormVisible=t}}},[e.addFormVisible?n("Add",{ref:"addForm",on:{close:function(t){e.addFormVisible=!1},render:this.handleRenderTable}}):e._e()],1),e._v(" "),n("el-dialog",{attrs:{title:"编辑产品尺码",visible:e.editFormVisible},on:{"update:visible":function(t){e.editFormVisible=t}}},[e.editFormVisible?n("Edit",{ref:"editForm",attrs:{id:e.tools_id},on:{close:function(t){e.editFormVisible=!1},render:this.handleRenderTable}}):e._e()],1)],1)},staticRenderFns:[]}},439:function(e,t,n){var r=n(176)(n(442),n(443),!1,function(e){n(440)},"data-v-7e043e48",null);e.exports=r.exports},440:function(e,t,n){var r=n(441);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(177)("7d3b56ba",r,!0,{})},441:function(e,t,n){(e.exports=n(75)(!1)).push([e.i,"",""])},442:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(180),o=n.n(r);t.default={components:{Table:o.a},name:"Extension",data:function(){return{url:"source/extensionURL?goods_id="+this.$route.params.id,columns:[{prop:"id",label:"ID",width:"80"},{prop:"source_name",label:"渠道名称",width:"220"},{prop:"source_url",label:"推广链接"}]}},methods:{returnList:function(){this.$router.push("/goods_list")}}}},443:function(e,t){e.exports={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("div",{staticStyle:{margin:"8px 0"}},[t("el-row",[t("el-col",{attrs:{span:14}},[t("el-button",{attrs:{type:"success"},on:{click:this.returnList}},[this._v("返回产品列表")])],1)],1)],1),this._v(" "),t("Table",{ref:"table",attrs:{url:this.url,columns:this.columns}})],1)},staticRenderFns:[]}},444:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-tabs",{model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[n("el-tab-pane",{attrs:{label:"商品基本信息",name:"first"}},[n("div",{staticClass:"left"},[n("el-form",{attrs:{"label-width":"80px",model:e.goods}},[n("el-form-item",{attrs:{label:"商品标题:"}},[n("el-input",{attrs:{placeholder:"商品标题"},model:{value:e.goods.goods_title,callback:function(t){e.$set(e.goods,"goods_title",t)},expression:"goods.goods_title"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"商品简述:"}},[n("el-input",{attrs:{placeholder:"商品简述"},model:{value:e.goods.goods_desc,callback:function(t){e.$set(e.goods,"goods_desc",t)},expression:"goods.goods_desc"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"详细描述:"}},[n("vue-ueditor-wrap",{attrs:{config:e.Ueconfig},model:{value:e.goods.goods_content,callback:function(t){e.$set(e.goods,"goods_content",t)},expression:"goods.goods_content"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"封面图片",prop:"photo"}},[n("upload",{attrs:{img:e.goods.photo},on:{"img-success":e.success}})],1),e._v(" "),n("el-form-item",{attrs:{label:"轮播图片"}},[n("upload",{on:{"img-success":e.wheel_success}}),e._v(" "),e._l(e.goods.wheel_photo,function(t,r){return[n("img",{key:r,staticClass:"wheel_photo",staticStyle:{"margin-left":"4px"},attrs:{src:t},on:{click:function(t){e.deleteWheel(r)}}})]})],2)],1)],1),e._v(" "),n("div",{staticClass:"right"},[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[e._v("其他选项")])]),e._v(" "),n("p",[n("el-input",{attrs:{placeholder:"商品单价"},model:{value:e.goods.price,callback:function(t){e.$set(e.goods,"price",t)},expression:"goods.price"}})],1),e._v(" "),n("p",[n("el-select",{attrs:{clearable:"",placeholder:"请选择一个商品展示模板"},model:{value:e.goods.template_id,callback:function(t){e.$set(e.goods,"template_id",t)},expression:"goods.template_id"}},e._l(e.template,function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),n("p",[n("el-checkbox",{attrs:{"true-label":"1","false-label":"0"},model:{value:e.goods.is_up,callback:function(t){e.$set(e.goods,"is_up",t)},expression:"goods.is_up"}},[e._v("是否上架")])],1),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:e.goodsAdd}},[e._v("发布商品")])],1)],1)]),e._v(" "),n("el-tab-pane",{attrs:{label:"套餐设置",name:"second",lazy:e.lazy}},[n("setMeal")],1),e._v(" "),n("el-tab-pane",{attrs:{label:"产品尺码",name:"third",lazy:e.lazy}},[n("goodsSize")],1),e._v(" "),n("el-tab-pane",{attrs:{label:"推广链接",name:"fourth",lazy:e.lazy}},[n("Extension")],1)],1)},staticRenderFns:[]}},506:function(e,t,n){var r=n(176)(n(414),n(444),!1,function(e){n(412)},null,null);e.exports=r.exports}});