webpackJsonp([26],{176:function(e,t){e.exports=function(e,t,n,i,o,a){var s,r=e=e||{},l=typeof e.default;"object"!==l&&"function"!==l||(s=e,r=e.default);var c,d="function"==typeof r?r.options:r;if(t&&(d.render=t.render,d.staticRenderFns=t.staticRenderFns,d._compiled=!0),n&&(d.functional=!0),o&&(d._scopeId=o),a?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},d._ssrRegister=c):i&&(c=i),c){var m=d.functional,f=m?d.render:d.beforeCreate;m?(d._injectStyles=c,d.render=function(e,t){return c.call(t),f(e,t)}):d.beforeCreate=f?[].concat(f,c):[c]}return{esModule:s,exports:r,options:d}}},265:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(24);t.default={data:function(){return{index:1,formDynamic:{english:"",title:"",desc:"",keyword:"point",items:[{index:1,title:"",desc:"",status:1}]},configID:0,operation:""}},created:function(){var e=this;i.a.get("/config",{params:{keyword:"point"}}).then(function(t){t.data.status?(e.formDynamic=t.data.data,e.operation="edit",e.configID=t.data.data.id):e.operation="add"})},methods:{handleAdd:function(){this.index=this.formDynamic.items.length+1,this.formDynamic.items.push({address:"",tel:"",index:this.index,status:1})},handleRemove:function(e){this.formDynamic.items[e].status=0,this.formDynamic.items.splice(e,1)},handleSubmit:function(e){var t=this;"edit"===this.operation?i.a.patch("/config/"+this.configID,{keyword:this.formDynamic.keyword,value:this.formDynamic,type:"json"}).then(function(e){t.$message.info(e.data.message)}):i.a.post("/config",{keyword:this.formDynamic.keyword,value:this.formDynamic,type:"json"}).then(function(e){t.$message.info(e.data.message)})}}}},266:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{width:"70%"}},[n("el-form",{ref:"formDynamic",attrs:{model:e.formDynamic,"label-width":"100px"}},[n("el-form-item",{attrs:{label:"英文标头:",prop:"english"}},[n("el-input",{attrs:{placeholder:"输入英文标头"},model:{value:e.formDynamic.english,callback:function(t){e.$set(e.formDynamic,"english",t)},expression:"formDynamic.english"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"标题:",prop:"title"}},[n("el-input",{attrs:{placeholder:"标题"},model:{value:e.formDynamic.title,callback:function(t){e.$set(e.formDynamic,"title",t)},expression:"formDynamic.title"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"简介:",prop:"desc"}},[n("el-input",{attrs:{placeholder:"简介"},model:{value:e.formDynamic.desc,callback:function(t){e.$set(e.formDynamic,"desc",t)},expression:"formDynamic.desc"}})],1),e._v(" "),e._l(e.formDynamic.items,function(t,i){return t.status?[n("el-form-item",{attrs:{label:"特点 "+t.index}},[n("el-row",[n("el-col",{attrs:{span:18}},[n("el-input",{attrs:{type:"text"},model:{value:t.title,callback:function(n){e.$set(t,"title",n)},expression:"item.title"}})],1),e._v(" "),n("el-col",{attrs:{span:4,offset:1}},[n("el-button",{on:{click:function(t){e.handleRemove(i)}}},[e._v("移除")])],1)],1)],1),e._v(" "),n("el-form-item",{attrs:{label:"描述 "+t.index}},[n("el-row",[n("el-col",{attrs:{span:18}},[n("el-input",{attrs:{type:"text"},model:{value:t.desc,callback:function(n){e.$set(t,"desc",n)},expression:"item.desc"}})],1),e._v(" "),n("el-col",{attrs:{span:4,offset:1}})],1)],1)]:e._e()}),e._v(" "),n("el-form-item",[n("el-row",[n("el-col",{attrs:{span:12}},[n("el-button",{attrs:{type:"dashed",long:"",icon:"md-add"},on:{click:e.handleAdd}},[e._v("添加子项")])],1)],1)],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.handleSubmit("formValidate")}}},[e._v("保存")])],1)],2)],1)},staticRenderFns:[]}},432:function(e,t,n){var i=n(176)(n(265),n(266),!1,null,null,null);e.exports=i.exports}});