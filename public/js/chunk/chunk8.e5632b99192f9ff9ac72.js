webpackJsonp([8],{176:function(e,t){e.exports=function(e,t,n,r,i,o){var a,l=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(a=e,l=e.default);var c,d="function"==typeof l?l.options:l;if(t&&(d.render=t.render,d.staticRenderFns=t.staticRenderFns,d._compiled=!0),n&&(d.functional=!0),i&&(d._scopeId=i),o?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},d._ssrRegister=c):r&&(c=r),c){var u=d.functional,f=u?d.render:d.beforeCreate;u?(d._injectStyles=c,d.render=function(e,t){return c.call(t),f(e,t)}):d.beforeCreate=f?[].concat(f,c):[c]}return{esModule:a,exports:l,options:d}}},177:function(e,t,n){var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i=n(178),o={},a=r&&(document.head||document.getElementsByTagName("head")[0]),l=null,s=0,c=!1,d=function(){},u=null,f="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(e){for(var t=0;t<e.length;t++){var n=e[t],r=o[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(v(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var a=[];for(i=0;i<n.parts.length;i++)a.push(v(n.parts[i]));o[n.id]={id:n.id,refs:1,parts:a}}}}function m(){var e=document.createElement("style");return e.type="text/css",a.appendChild(e),e}function v(e){var t,n,r=document.querySelector("style["+f+'~="'+e.id+'"]');if(r){if(c)return d;r.parentNode.removeChild(r)}if(p){var i=s++;r=l||(l=m()),t=_.bind(null,r,i,!1),n=_.bind(null,r,i,!0)}else r=m(),t=function(e,t){var n=t.css,r=t.media,i=t.sourceMap;r&&e.setAttribute("media",r);u.ssrId&&e.setAttribute(f,t.id);i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}e.exports=function(e,t,n,r){c=n,u=r||{};var a=i(e,t);return h(a),function(t){for(var n=[],r=0;r<a.length;r++){var l=a[r];(s=o[l.id]).refs--,n.push(s)}t?h(a=i(e,t)):a=[];for(r=0;r<n.length;r++){var s;if(0===(s=n[r]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete o[s.id]}}}};var g,b=(g=[],function(e,t){return g[e]=t,g.filter(Boolean).join("\n")});function _(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=b(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}},178:function(e,t){e.exports=function(e,t){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],a=o[0],l={id:e+":"+i,css:o[1],media:o[2],sourceMap:o[3]};r[a]?r[a].parts.push(l):n.push(r[a]={id:a,parts:[l]})}return n}},179:function(e,t,n){"use strict";var r={data:function(){return{loading:!1,loading_msg:"数据获取中..."}},created:function(){console.log("mixin-form_page")},methods:{handleGetData:function(e){var t=this;return this.loading=!0,new Promise(function(n,r){e.then(function(e){t.loading=!1,n(e.data)}).catch(function(e){console.log(e),r(e),t.loading=!1})})},handleValid:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"form",t=null;return this.$refs[e].validate(function(e){e?t=!0:(console.log("error submit!!"),t=!1)}),t},handleSubmit:function(e){var t=this;this.loading=!0,e.then(function(e){t.loading=!1,t.$message.success(e.data.msg),t.$emit("render"),t.close()}).catch(function(e){console.log(e),t.loading=!1,t.$message.error("操作失败"),t.close()})},close:function(){this.$emit("close")}}};t.a=r},180:function(e,t,n){var r=n(176)(n(184),n(195),!1,function(e){n(182)},"data-v-6f730715",null);e.exports=r.exports},181:function(e,t,n){"use strict";var r={data:function(){return{search:{},edit_id:null,tools_id:null,select_ids:null}},created:function(){},methods:{handleSearch:function(){this.handleSetFilter("search",this.search),this.handleRenderTable()},handleGetSelection:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=this.$refs.table.selection;if(null===t&&(t=[]),null==e)return t;if("string"==typeof e){var n=[];return t.forEach(function(t){e in t&&n.push(t[e])}),n}return console.error("handleGetSelection 参数错误"),this.$refs.table.selection},handleSetFilter:function(e,t){this.$refs.table.filterValue[e]=t},handleGetFilter:function(e){return this.$refs.table.filterValue[e]},handleRenderTable:function(){this.$refs.table.renderTable()},handleDeleteRow:function(e){this.$refs.table.deleteRow(e)},handleDel:function(e,t){var n=this,r=this.$loading({lock:!0,text:"删除数据中...",spinner:"el-icon-loading"});e.then(function(e){n.loading=!1,0==e.msg?(n.$message.success("删除成功"),n.handleDeleteRow(t)):n.$message.success("删除成功"),r.close()}).catch(function(e){n.loading=!1,n.$message.error("删除失败"),r.close(),console.log(e)})},handleSetChild:function(e,t){this.$refs.table.SetChildren(e,t)},handleOpenTableLoding:function(){this.$refs.table.loading=!0},handleCloseTableLoding:function(){this.$refs.table.loading=!1}}};t.a=r},182:function(e,t,n){var r=n(183);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(177)("67647e84",r,!0,{})},183:function(e,t,n){(e.exports=n(75)(!1)).push([e.i,".el-pagination[data-v-6f730715]{float:right;margin-top:8px}",""])},184:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(185),i=n.n(r),o=n(190),a=n.n(o),l=n(24);t.default={props:{url:String,columns:Array,page:{type:Boolean,default:!0},checkbox:{type:Boolean,default:!0}},data:function(){return{loading:!1,data:null,selection:null,filterValue:{where:{},page:1,limit:10,search:"",orderBy:"id,asc"},total:0}},components:{Tools:i.a,Fold:a.a},created:function(){for(var e in this.columns)"render"in this.columns[e]&&Vue.component("my-column-"+this.columns[e].prop,this.columns[e].render);Vue.component("fold-prefix",{render:function(e){return e("span",{style:{paddingLeft:2*this.level+"em"}})},props:{level:{type:Number,required:!0}}}),this.renderTable()},methods:{expanding:function(e){e.tree_fold="loading",this.$emit("children",e)},collapsing:function(e){e.tree_fold="close",this.SetChildren(e,null)},Listeners:function(e,t,n){this.$emit("tools",e,t,n)},filterHandler:function(e){for(var t in e)null==e[t]||0==e[t].length?delete this.filterValue.where[t]:1==e[t].length?this.filterValue.where[t]=e[t][0]:this.filterValue.where[t]=e[t];this.renderTable()},sortHandler:function(e){null==e.order?this.filterValue.orderBy=null:this.filterValue.orderBy=e.prop+","+e.order.slice(0,-6),this.renderTable()},handleSizeChange:function(e){this.filterValue.limit=e,this.renderTable()},handleCurrentChange:function(e){this.filterValue.page=e,this.renderTable()},handleSelectionChange:function(e){this.selection=e,this.$emit("SelectionChange",e)},renderTable:function(){var e=this;this.loading=!0,this.page||(delete this.filterValue.page,delete this.filterValue.limit),l.a.get(this.url,{params:this.filterValue}).then(function(t){e.total=t.data.count,e.data=t.data.data,e.loading=!1}).catch(function(t){e.loading=!1,console.log(t)})},deleteRow:function(e){this.data.splice(e,1)},SetChildren:function(e,t){for(var n=e.tree_path,r=this.data,i=0;i<n.length;i++)r=0==i?r[n[i]]:r.tree_children[n[i]];"loading"==e.tree_fold&&(e.tree_fold="open"),this.$set(r,"tree_fold",e.tree_fold),this.$set(r,"tree_children",t)}},computed:{reversedData:function(){var e=this.data;return e=function e(t,n,r){var i="tree_children";var o=[];for(var a in t){t[a].tree_level=r,n[r]=a,n.length=r+1,t[a].tree_path=n;var l=JSON.parse(JSON.stringify(t[a]));if(delete l[i],o.push(l),i in t[a]){var s=e(t[a][i],n,r+1);o=o.concat(s)}}return o}(e,[],0)}}}},185:function(e,t,n){var r=n(176)(n(188),n(189),!1,function(e){n(186)},"data-v-d5eb55a0",null);e.exports=r.exports},186:function(e,t,n){var r=n(187);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(177)("54f2e4d2",r,!0,{})},187:function(e,t,n){(e.exports=n(75)(!1)).push([e.i,"",""])},188:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"tools",props:["row","index","buttons"],data:function(){return{tooltip:{add:"添加",show:"查看详情",edit:"编辑",delete:"删除"}}},methods:{handleTools:function(e){this.$emit("listen-tools",e,this.index,this.row)}}}},189:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-button-group",[e._l(e.buttons,function(t,r){return[(t.text?t.text:e.tooltip[r]&&e.tooltip[r])?[n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.text?t.text:e.tooltip[r],placement:"bottom"}},[n("el-button",{attrs:{type:t.type,size:"mini",icon:t.icon},on:{click:function(t){e.handleTools(r)}}})],1)]:[n("el-button",{attrs:{type:t.type,size:"mini",icon:t.icon},on:{click:function(t){e.handleTools(r)}}})]]})],2)},staticRenderFns:[]}},190:function(e,t,n){var r=n(176)(n(193),n(194),!1,function(e){n(191)},"data-v-1ceaf87c",null);e.exports=r.exports},191:function(e,t,n){var r=n(192);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(177)("7f0398dd",r,!0,{})},192:function(e,t,n){(e.exports=n(75)(!1)).push([e.i,"",""])},193:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"fold",props:{row:{type:Object},status:{default:"close"}},data:function(){return{state:this.status,className:{open:"el-icon-caret-bottom",close:"el-icon-caret-right",loading:"el-icon-loading"}}},methods:{handleFold:function(){"open"==this.status?this.$emit("collapsing",this.row):(this.state="loading",this.$emit("expanding",this.row))}},watch:{status:function(e){this.state=e}}}},194:function(e,t){e.exports={render:function(){var e=this.$createElement;return(this._self._c||e)("i",{class:this.className[this.state],staticStyle:{cursor:"pointer"},on:{click:this.handleFold}})},staticRenderFns:[]}},195:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{border:"",data:e.reversedData,size:"mini"},on:{"filter-change":e.filterHandler,"sort-change":e.sortHandler,"selection-change":e.handleSelectionChange}},[e.checkbox?n("el-table-column",{attrs:{type:"selection",width:"55"}}):e._e(),e._v(" "),e._l(e.columns,function(t){return[n("el-table-column",{ref:"col-"+t.prop,refInFor:!0,attrs:{width:t.width?t.width:null,prop:t.prop,"column-key":t.prop,label:t.label,sortable:!!t.sort&&"custom",filters:t.filter?t.filter.data:null,"filter-multiple":!t.filter||!1!==t.filter.multiple||t.filter.multiple},scopedSlots:e._u([{key:"default",fn:function(r){return["tools"in t?[n("Tools",{attrs:{buttons:t.tools,row:r.row,index:r.$index},on:{"listen-tools":e.Listeners}})]:"render"in t?[n("my-column-"+t.prop,{tag:"component",attrs:{row:r.row}})]:["lazy"in t?n("fold-prefix",{attrs:{level:r.row.tree_level?r.row.tree_level:0}}):e._e(),e._v(" "),"lazy"in t&&r.row.children_count>0?n("Fold",{attrs:{status:r.row.tree_fold,row:r.row},on:{expanding:e.expanding,collapsing:e.collapsing}}):e._e(),e._v("\n                            "+e._s(t.convert?r.row[t.prop+"_name"]:r.row[t.prop])+"\n                        ")]]}}])})]})],2),e._v(" "),e.page?n("el-pagination",{attrs:{"page-sizes":[10,20,30,50],"page-size":e.filterValue.limit,"current-page":e.filterValue.page,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}):e._e()],1)},staticRenderFns:[]}},204:function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"a",function(){return o}),n.d(t,"d",function(){return a}),n.d(t,"c",function(){return l});var r=n(24),i=function(e){return r.a.request({url:"/template/del/"+e,method:"get"})},o=function(e){return r.a.request({url:"/template/add",data:e,method:"post"})},a=function(e){return r.a.request({url:"/template/"+e,method:"get"})},l=function(e,t){return r.a.request({url:"/template/edit/"+e,data:t,method:"post"})}},346:function(e,t,n){var r=n(347);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(177)("31e59d6e",r,!0,{})},347:function(e,t,n){(e.exports=n(75)(!1)).push([e.i,".el-input__inner{height:35px}",""])},348:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(180),i=n.n(r),o=n(181),a=n(204),l=n(349),s=n.n(l),c=n(354),d=n.n(c);t.default={components:{Table:i.a,Add:s.a,Edit:d.a},mixins:[o.a],data:function(){return{page_name:"模板",url:"template/list",addFormVisible:!1,editFormVisible:!1,columns:[{prop:"id",label:"ID",sort:!0,width:"80"},{prop:"name",label:"模板名称",search:!0},{prop:"path",label:"模板路径"},{label:"操作",width:"200",tools:this.handleGetBtn()}],templateAuth:[{add:!1}],options:[],selectedOptions:[]}},created:function(){var e=this;this.$store.state.user.auth.template.forEach(function(t){"add"===t&&(e.templateAuth.add=!0)})},methods:{handleTools:function(e,t,n){var r=this;if("edit"==e)this.edit_id=n.id,this.editFormVisible=!0;else if("delete"==e){if(1==n.id)return this.$message.error("默认模板不能删除");Object(a.b)(n.id).then(function(e){if(-1==e.data.code)return r.$message.error(e.data.msg);r.handleDeleteRow(t),r.$message.success(e.data.msg)})}else console.error("Tools Event:"+e+" Not found")},handleAdd:function(){this.addFormVisible=!0},handleGetBtn:function(){var e={edit:{type:"primary",icon:"el-icon-edit"},delete:{type:"danger",icon:"el-icon-delete"}},t={};return this.$store.state.user.auth.template.forEach(function(n){n in e&&(t[n]=e[n])}),t}}}},349:function(e,t,n){var r=n(176)(n(352),n(353),!1,function(e){n(350)},"data-v-49e513ab",null);e.exports=r.exports},350:function(e,t,n){var r=n(351);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(177)("23711b5c",r,!0,{})},351:function(e,t,n){(e.exports=n(75)(!1)).push([e.i,"",""])},352:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(179),i=n(204);t.default={name:"add",mixins:[r.a],data:function(){return{form:{name:"",path:""},rules:{name:[{required:!0,message:"模板名称必须填写",trigger:"blur"}],path:[{required:!0,message:"模板路径必须填写",trigger:"blur"}]}}},methods:{onSubmit:function(){this.handleValid()&&this.handleSubmit(Object(i.a)(this.form))}}}},353:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"form",attrs:{rules:e.rules,model:e.form,"label-width":"80px"}},[n("el-form-item",{attrs:{label:"模板名称",prop:"name"}},[n("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"模板路径",prop:"path"}},[n("el-input",{model:{value:e.form.path,callback:function(t){e.$set(e.form,"path",t)},expression:"form.path"}}),e._v(" "),n("span",[e._v("默认在views/ 下请不要带上views")])],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("立即创建")]),e._v(" "),n("el-button",{on:{click:e.close}},[e._v("取消")])],1)],1)},staticRenderFns:[]}},354:function(e,t,n){var r=n(176)(n(357),n(358),!1,function(e){n(355)},"data-v-12a94c1e",null);e.exports=r.exports},355:function(e,t,n){var r=n(356);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(177)("a5479b70",r,!0,{})},356:function(e,t,n){(e.exports=n(75)(!1)).push([e.i,"",""])},357:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(179),i=n(204);t.default={name:"add",mixins:[r.a],props:["id"],data:function(){return{form:{name:"",path:""},rules:{name:[{required:!0,message:"模板名称必须填写",trigger:"blur"}],path:[{required:!0,message:"模板路径必须填写",trigger:"blur"}]}}},created:function(){var e=this;Object(i.d)(this.id).then(function(t){e.form=t.data.data})},methods:{onSubmit:function(){this.handleValid()&&this.handleSubmit(Object(i.c)(this.id,this.form))}}}},358:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"form",attrs:{rules:e.rules,model:e.form,"label-width":"80px"}},[n("el-form-item",{attrs:{label:"模板名称",prop:"name"}},[n("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"模板路径",prop:"path"}},[n("el-input",{model:{value:e.form.path,callback:function(t){e.$set(e.form,"path",t)},expression:"form.path"}}),e._v(" "),n("span",[e._v("默认在views/ 下请不要带上views")])],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("立即创建")]),e._v(" "),n("el-button",{on:{click:e.close}},[e._v("取消")])],1)],1)},staticRenderFns:[]}},359:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticStyle:{margin:"8px 0"}},[n("el-row",[n("el-col",{attrs:{span:14}},[this.templateAuth.add?[n("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-plus"},on:{click:e.handleAdd}},[e._v("添加"+e._s(e.page_name))])]:e._e()],2),e._v(" "),n("el-col",{attrs:{span:10}},[n("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入要搜索的内容...",size:"small"},model:{value:e.search.value,callback:function(t){e.$set(e.search,"value",t)},expression:"search.value"}},[n("el-select",{staticStyle:{width:"110px"},attrs:{slot:"prepend",size:"small",placeholder:"请选择"},slot:"prepend",model:{value:e.search.field,callback:function(t){e.$set(e.search,"field",t)},expression:"search.field"}},e._l(e.columns,function(t){return t.search?n("el-option",{key:t.prop,attrs:{label:t.label,value:t.prop}}):e._e()})),e._v(" "),n("el-button",{attrs:{slot:"append",size:"small",icon:"el-icon-search"},on:{click:e.handleSearch},slot:"append"})],1)],1)],1)],1),e._v(" "),n("Table",{ref:"table",attrs:{url:e.url,columns:e.columns,checkbox:!1},on:{tools:e.handleTools}}),e._v(" "),n("el-dialog",{attrs:{title:"添加"+e.page_name,visible:e.addFormVisible},on:{"update:visible":function(t){e.addFormVisible=t}}},[e.addFormVisible?n("Add",{ref:"addForm",on:{close:function(t){e.addFormVisible=!1},render:this.handleRenderTable}}):e._e()],1),e._v(" "),n("el-dialog",{attrs:{title:"编辑"+e.page_name,visible:e.editFormVisible},on:{"update:visible":function(t){e.editFormVisible=t}}},[e.editFormVisible?n("Edit",{ref:"editForm",attrs:{id:e.edit_id},on:{render:this.handleRenderTable,close:function(t){e.editFormVisible=!1}}}):e._e()],1)],1)},staticRenderFns:[]}},501:function(e,t,n){var r=n(176)(n(348),n(359),!1,function(e){n(346)},null,null);e.exports=r.exports}});