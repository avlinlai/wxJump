webpackJsonp([12],{100:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{border:"",data:e.reversedData,size:"mini"},on:{"filter-change":e.filterHandler,"sort-change":e.sortHandler,"selection-change":e.handleSelectionChange}},[e.checkbox?n("el-table-column",{attrs:{type:"selection",width:"55"}}):e._e(),e._v(" "),e._l(e.columns,function(t){return[n("el-table-column",{ref:"col-"+t.prop,refInFor:!0,attrs:{width:t.width?t.width:null,prop:t.prop,"column-key":t.prop,label:t.label,sortable:!!t.sort&&"custom",filters:t.filter?t.filter.data:null,"filter-multiple":!t.filter||!1!==t.filter.multiple||t.filter.multiple},scopedSlots:e._u([{key:"default",fn:function(r){return["tools"in t?[n("Tools",{attrs:{buttons:t.tools,row:r.row,index:r.$index},on:{"listen-tools":e.Listeners}})]:"render"in t?[n("my-column-"+t.prop,{tag:"component",attrs:{row:r.row}})]:["lazy"in t?n("fold-prefix",{attrs:{level:r.row.tree_level?r.row.tree_level:0}}):e._e(),e._v(" "),"lazy"in t&&r.row.children_count>0?n("Fold",{attrs:{status:r.row.tree_fold,row:r.row},on:{expanding:e.expanding,collapsing:e.collapsing}}):e._e(),e._v("\n                            "+e._s(t.convert?r.row[t.prop+"_name"]:r.row[t.prop])+"\n                        ")]]}}])})]})],2),e._v(" "),e.page?n("el-pagination",{attrs:{"page-sizes":[10,20,30,50],"page-size":e.filterValue.limit,"current-page":e.filterValue.page,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}):e._e()],1)},staticRenderFns:[]}},476:function(e,t,n){var r=n(477);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(81)("74482830",r,!0,{})},477:function(e,t,n){(e.exports=n(75)(!1)).push([e.i,".sing[data-v-0e5893d4]{font-size:16px;font-weight:600}.count-table[data-v-0e5893d4]{margin-top:10px}td[data-v-0e5893d4]{border:1px solid #000;line-height:40px;background-color:#f9f9f9;text-align:center}th[data-v-0e5893d4]{text-align:center}.table[data-v-0e5893d4]{width:300px;max-width:100%;margin-bottom:20px;border-spacing:0;border-collapse:collapse;background-color:transparent;margin-left:10px}.container[data-v-0e5893d4]{float:left;margin-right:15px}td[data-v-0e5893d4]:last-child{color:green}",""])},478:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(84),o=n.n(r),i=n(85),a=n(86);t.default={name:"sourceCount",components:{Table:o.a},mixins:[i.a],data:function(){return{OrderCount:{today:[],Yesterday:[],all:[]}}},created:function(){var e=this;Object(a.D)().then(function(t){e.OrderCount=t.data.data,console.log(e.OrderCount.Yesterday)})}}},479:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"container"},[n("span",{staticClass:"sing"},[e._v("昨日统计:")]),e._v(" "),n("table",{staticClass:"count-table table"},[e._m(0),e._v(" "),n("tbody",e._l(e.OrderCount.Yesterday,function(t,r){return n("tr",{key:r},[n("td",{attrs:{align:"center"}},[e._v(e._s(t.source))]),e._v(" "),n("td",{attrs:{align:"center"}},[e._v(e._s(t.source_count))]),e._v(" "),n("td",{attrs:{align:"center"}},[e._v("¥ "+e._s(t.order_total_price_count))])])}))])]),e._v(" "),n("div",{staticClass:"container"},[n("span",{staticClass:"sing"},[e._v("今日统计:")]),e._v(" "),n("table",{staticClass:"count-table table"},[e._m(1),e._v(" "),n("tbody",e._l(e.OrderCount.today,function(t,r){return n("tr",{key:r},[n("td",[e._v(e._s(t.source))]),e._v(" "),n("td",[e._v(e._s(t.source_count))]),e._v(" "),n("td",[e._v("¥ "+e._s(t.order_total_price_count))])])}))])]),e._v(" "),n("div",[n("span",{staticClass:"sing"},[e._v("所有:")]),e._v(" "),n("table",{staticClass:"count-table table"},[e._m(2),e._v(" "),n("tbody",e._l(e.OrderCount.all,function(t,r){return n("tr",{key:r},[n("td",[e._v(e._s(t.source))]),e._v(" "),n("td",[e._v(e._s(t.source_count))]),e._v(" "),n("td",[e._v("¥ "+e._s(t.order_total_price_count))])])}))])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("thead",[t("tr",[t("th",{attrs:{align:"center"}},[this._v("购买来源")]),this._v(" "),t("th",{attrs:{align:"center"}},[this._v("订单数量")]),this._v(" "),t("th",{attrs:{align:"center"}},[this._v("购买总额(元)")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("thead",[t("tr",[t("th",[this._v("购买来源")]),this._v(" "),t("th",[this._v("订单数量")]),this._v(" "),t("th",[this._v("购买总额(元)")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("thead",[t("tr",[t("th",[this._v("购买来源")]),this._v(" "),t("th",[this._v("订单数量")]),this._v(" "),t("th",[this._v("购买总额(元)")])])])}]}},525:function(e,t,n){var r=n(80)(n(478),n(479),!1,function(e){n(476)},"data-v-0e5893d4",null);e.exports=r.exports},80:function(e,t){e.exports=function(e,t,n,r,o,i){var a,s=e=e||{},l=typeof e.default;"object"!==l&&"function"!==l||(a=e,s=e.default);var u,d="function"==typeof s?s.options:s;if(t&&(d.render=t.render,d.staticRenderFns=t.staticRenderFns,d._compiled=!0),n&&(d.functional=!0),o&&(d._scopeId=o),i?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},d._ssrRegister=u):r&&(u=r),u){var c=d.functional,f=c?d.render:d.beforeCreate;c?(d._injectStyles=u,d.render=function(e,t){return u.call(t),f(e,t)}):d.beforeCreate=f?[].concat(f,u):[u]}return{esModule:a,exports:s,options:d}}},81:function(e,t,n){var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o=n(82),i={},a=r&&(document.head||document.getElementsByTagName("head")[0]),s=null,l=0,u=!1,d=function(){},c=null,f="data-vue-ssr-id",h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(e){for(var t=0;t<e.length;t++){var n=e[t],r=i[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(v(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var a=[];for(o=0;o<n.parts.length;o++)a.push(v(n.parts[o]));i[n.id]={id:n.id,refs:1,parts:a}}}}function g(){var e=document.createElement("style");return e.type="text/css",a.appendChild(e),e}function v(e){var t,n,r=document.querySelector("style["+f+'~="'+e.id+'"]');if(r){if(u)return d;r.parentNode.removeChild(r)}if(h){var o=l++;r=s||(s=g()),t=b.bind(null,r,o,!1),n=b.bind(null,r,o,!0)}else r=g(),t=function(e,t){var n=t.css,r=t.media,o=t.sourceMap;r&&e.setAttribute("media",r);c.ssrId&&e.setAttribute(f,t.id);o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}e.exports=function(e,t,n,r){u=n,c=r||{};var a=o(e,t);return p(a),function(t){for(var n=[],r=0;r<a.length;r++){var s=a[r];(l=i[s.id]).refs--,n.push(l)}t?p(a=o(e,t)):a=[];for(r=0;r<n.length;r++){var l;if(0===(l=n[r]).refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete i[l.id]}}}};var m,_=(m=[],function(e,t){return m[e]=t,m.filter(Boolean).join("\n")});function b(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=_(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}},82:function(e,t){e.exports=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=i[0],s={id:e+":"+o,css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}},84:function(e,t,n){var r=n(80)(n(89),n(100),!1,function(e){n(87)},"data-v-2cbd4810",null);e.exports=r.exports},85:function(e,t,n){"use strict";var r={data:function(){return{search:{},edit_id:null,tools_id:null,select_ids:null}},created:function(){},methods:{handleSearch:function(){this.handleSetFilter("search",this.search),this.handleRenderTable()},handleGetSelection:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=this.$refs.table.selection;if(null===t&&(t=[]),null==e)return t;if("string"==typeof e){var n=[];return t.forEach(function(t){e in t&&n.push(t[e])}),n}return console.error("handleGetSelection 参数错误"),this.$refs.table.selection},handleSetFilter:function(e,t){this.$refs.table.filterValue[e]=t},handleGetFilter:function(e){return this.$refs.table.filterValue[e]},handelDeleteFilter:function(e){for(var t in e)this.$refs.table.deleteFilter.push(t)},handleRenderTable:function(){this.$refs.table.renderTable()},handleDeleteRow:function(e){this.$refs.table.deleteRow(e)},handleDel:function(e,t){var n=this,r=this.$loading({lock:!0,text:"删除数据中...",spinner:"el-icon-loading"});e.then(function(e){n.loading=!1,0==e.msg?(n.$message.success("删除成功"),n.handleDeleteRow(t)):n.$message.success("删除成功"),r.close()}).catch(function(e){n.loading=!1,n.$message.error("删除失败"),r.close(),console.log(e)})},handleSetChild:function(e,t){this.$refs.table.SetChildren(e,t)},handleOpenTableLoding:function(){this.$refs.table.loading=!0},handleCloseTableLoding:function(){this.$refs.table.loading=!1}}};t.a=r},86:function(e,t,n){"use strict";n.d(t,"E",function(){return o}),n.d(t,"B",function(){return i}),n.d(t,"F",function(){return a}),n.d(t,"G",function(){return s}),n.d(t,"C",function(){return l}),n.d(t,"s",function(){return u}),n.d(t,"t",function(){return d}),n.d(t,"r",function(){return c}),n.d(t,"u",function(){return f}),n.d(t,"v",function(){return h}),n.d(t,"m",function(){return p}),n.d(t,"w",function(){return g}),n.d(t,"z",function(){return v}),n.d(t,"A",function(){return m}),n.d(t,"y",function(){return _}),n.d(t,"x",function(){return b}),n.d(t,"c",function(){return x}),n.d(t,"g",function(){return y}),n.d(t,"f",function(){return C}),n.d(t,"e",function(){return w}),n.d(t,"d",function(){return q}),n.d(t,"n",function(){return $}),n.d(t,"i",function(){return S}),n.d(t,"h",function(){return O}),n.d(t,"j",function(){return T}),n.d(t,"k",function(){return F}),n.d(t,"l",function(){return E}),n.d(t,"D",function(){return V}),n.d(t,"H",function(){return z}),n.d(t,"p",function(){return R}),n.d(t,"b",function(){return k}),n.d(t,"q",function(){return D}),n.d(t,"a",function(){return N}),n.d(t,"o",function(){return j});var r=n(24),o=function(e){return r.a.request({url:"/source/"+e,method:"delete"})},i=function(e){return r.a.request({url:"/source",data:e,method:"post"})},a=function(e){return r.a.request({url:"/source/"+e,method:"get"})},s=function(e,t){return r.a.request({url:"/source/"+e,data:t,method:"put"})},l=function(e){return r.a.request({url:"/source/batchIdDelete",data:e,method:"post"})},u=function(e){return r.a.request({url:"/meal/batchIdDelete",data:e,method:"post"})},d=function(e){return r.a.request({url:"/meal/"+e,method:"delete"})},c=function(e){return r.a.request({url:"/meal",data:e,method:"post"})},f=function(e){return r.a.request({url:"/meal/"+e,method:"get"})},h=function(e,t){return r.a.request({url:"/meal/"+e,data:t,method:"put"})},p=function(){return r.a.request({url:"template/list",method:"get"})},g=function(e){return r.a.request({url:"size",data:e,method:"post"})},v=function(e){return r.a.request({url:"size/"+e,method:"get"})},m=function(e,t){return r.a.request({url:"size/"+e,data:t,method:"put"})},_=function(e){return r.a.request({url:"size/"+e,method:"delete"})},b=function(e){return r.a.request({url:"size/batchIdDelete",data:e,method:"post"})},x=function(e){return r.a.request({url:"goods",data:e,method:"post"})},y=function(e,t){return r.a.request({url:"goods/"+e,data:t,method:"put"})},C=function(e){return r.a.request({url:"goods/"+e,method:"get"})},w=function(e){return r.a.request({url:"goods/"+e,method:"delete"})},q=function(e){return r.a.request({url:"goods/batchDelete",data:e,method:"post"})},$=function(e){return r.a.request({url:"goodsOrder/ip_source/"+e,method:"get"})},S=function(e){return r.a.request({url:"goodsOrder/"+e,method:"delete"})},O=function(e){return r.a.request({url:"goodsOrder/batchDelete",data:e,method:"post"})},T=function(e){return r.a.request({url:"goodsOrder/"+e,method:"get"})},F=function(e,t){return r.a.request({url:"goodsOrder/"+e,data:t,method:"put"})},E=function(e,t){return r.a.request({url:"goodsOrder/status/"+e,data:t,method:"put"})},V=function(){return r.a.request({url:"source/count",method:"get"})},z=function(){return r.a.request({url:"source/zhcount",method:"get"})},R=function(){return r.a.request({url:"source/peoplecount",method:"get"})},k=function(e){return r.a.request({url:"goodsOrder/batchEdit",data:e,method:"post"})},D=function(){return r.a.request({url:"goodsOrder/repeatCheck",method:"get"})},N=function(e){return r.a.request({url:"source/Regenerate/"+e,method:"get"})},j=function(){return r.a.request({url:"goodsOrder/orderCount",method:"get"})}},87:function(e,t,n){var r=n(88);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(81)("28e99982",r,!0,{})},88:function(e,t,n){(e.exports=n(75)(!1)).push([e.i,".el-pagination[data-v-2cbd4810]{float:right;margin-top:8px}",""])},89:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(90),o=n.n(r),i=n(95),a=n.n(i),s=n(24);t.default={props:{url:String,columns:Array,page:{type:Boolean,default:!0},checkbox:{type:Boolean,default:!0}},data:function(){return{loading:!1,data:null,selection:null,filterValue:{where:{},page:1,limit:10,search:"",orderBy:"id,asc"},deleteFilter:[],total:0}},components:{Tools:o.a,Fold:a.a},created:function(){for(var e in this.columns)"render"in this.columns[e]&&Vue.component("my-column-"+this.columns[e].prop,this.columns[e].render);Vue.component("fold-prefix",{render:function(e){return e("span",{style:{paddingLeft:2*this.level+"em"}})},props:{level:{type:Number,required:!0}}}),this.renderTable()},methods:{expanding:function(e){e.tree_fold="loading",this.$emit("children",e)},collapsing:function(e){e.tree_fold="close",this.SetChildren(e,null)},Listeners:function(e,t,n){this.$emit("tools",e,t,n)},filterHandler:function(e){for(var t in e)null==e[t]||0==e[t].length?delete this.filterValue.where[t]:1==e[t].length?this.filterValue.where[t]=e[t][0]:this.filterValue.where[t]=e[t];this.handelDeleteFilter(),this.renderTable()},sortHandler:function(e){null==e.order?this.filterValue.orderBy=null:this.filterValue.orderBy=e.prop+","+e.order.slice(0,-6),this.renderTable()},handleSizeChange:function(e){this.filterValue.limit=e,this.renderTable()},handleCurrentChange:function(e){this.filterValue.page=e,this.renderTable()},handleSelectionChange:function(e){this.selection=e,this.$emit("SelectionChange",e)},renderTable:function(){var e=this;this.loading=!0,this.page||(delete this.filterValue.page,delete this.filterValue.limit),s.a.get(this.url,{params:this.filterValue}).then(function(t){e.total=t.data.count,e.data=t.data.data,e.loading=!1}).catch(function(t){e.loading=!1,console.log(t)})},deleteRow:function(e){this.data.splice(e,1)},SetChildren:function(e,t){for(var n=e.tree_path,r=this.data,o=0;o<n.length;o++)r=0==o?r[n[o]]:r.tree_children[n[o]];"loading"==e.tree_fold&&(e.tree_fold="open"),this.$set(r,"tree_fold",e.tree_fold),this.$set(r,"tree_children",t)},handelDeleteFilter:function(){var e=this;this.deleteFilter.forEach(function(t){delete e.filterValue.where[t]})}},computed:{reversedData:function(){var e=this.data;return e=function e(t,n,r){var o="tree_children";var i=[];for(var a in t){t[a].tree_level=r,n[r]=a,n.length=r+1,t[a].tree_path=n;var s=JSON.parse(JSON.stringify(t[a]));if(delete s[o],i.push(s),o in t[a]){var l=e(t[a][o],n,r+1);i=i.concat(l)}}return i}(e,[],0)}}}},90:function(e,t,n){var r=n(80)(n(93),n(94),!1,function(e){n(91)},"data-v-d5eb55a0",null);e.exports=r.exports},91:function(e,t,n){var r=n(92);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(81)("54f2e4d2",r,!0,{})},92:function(e,t,n){(e.exports=n(75)(!1)).push([e.i,"",""])},93:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"tools",props:["row","index","buttons"],data:function(){return{tooltip:{add:"添加",show:"查看详情",edit:"编辑",delete:"删除"}}},methods:{handleTools:function(e){this.$emit("listen-tools",e,this.index,this.row)}}}},94:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-button-group",[e._l(e.buttons,function(t,r){return[(t.text?t.text:e.tooltip[r]&&e.tooltip[r])?[n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.text?t.text:e.tooltip[r],placement:"bottom"}},[n("el-button",{attrs:{type:t.type,size:"mini",icon:t.icon},on:{click:function(t){e.handleTools(r)}}})],1)]:[n("el-button",{attrs:{type:t.type,size:"mini",icon:t.icon},on:{click:function(t){e.handleTools(r)}}})]]})],2)},staticRenderFns:[]}},95:function(e,t,n){var r=n(80)(n(98),n(99),!1,function(e){n(96)},"data-v-1ceaf87c",null);e.exports=r.exports},96:function(e,t,n){var r=n(97);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(81)("7f0398dd",r,!0,{})},97:function(e,t,n){(e.exports=n(75)(!1)).push([e.i,"",""])},98:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"fold",props:{row:{type:Object},status:{default:"close"}},data:function(){return{state:this.status,className:{open:"el-icon-caret-bottom",close:"el-icon-caret-right",loading:"el-icon-loading"}}},methods:{handleFold:function(){"open"==this.status?this.$emit("collapsing",this.row):(this.state="loading",this.$emit("expanding",this.row))}},watch:{status:function(e){this.state=e}}}},99:function(e,t){e.exports={render:function(){var e=this.$createElement;return(this._self._c||e)("i",{class:this.className[this.state],staticStyle:{cursor:"pointer"},on:{click:this.handleFold}})},staticRenderFns:[]}}});