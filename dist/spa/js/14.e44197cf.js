(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{"983a":function(t,e,a){"use strict"},ad5f:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",[a("div",{staticClass:"row q-pa-sm q-pl-lg q-pr-lg"},[a("div",{staticClass:"col-md-12 col-xs-12 q-pt-lg"},[a("div",{staticClass:"row col-xs-12 q-pb-xl"},[a("div",{staticClass:"col"},[a("h5",{staticClass:"text-indigo-10 text-weight-bolder q-ma-none"},[t._v("\n            Características\n          ")]),a("small",{staticClass:"text-subtitle2 text-grey-7 q-mb-none"},[t._v("Existen "+t._s(this.count)+" características almacenadas")])]),a("div",{staticClass:"col"},[a("q-btn",{staticClass:"q-pa-xs float-right",attrs:{color:"red-10",label:"Crear característica"},on:{click:function(e){return t.$router.push({name:"FeatureCreate"})}}})],1)]),a("div",{staticClass:"col-md-12 col-xs-12 q-pt-lg"},[a("q-table",{attrs:{loading:t.loading,data:this.rows,columns:t.columns,"row-key":"name",pagination:t.pagination,"hide-pagination":""},on:{"update:pagination":function(e){t.pagination=e},"row-click":t.onRowClick}}),t.numberOfPages>1?a("div",{staticClass:"row justify-center q-mt-md"},[a("q-pagination",{attrs:{color:"indigo-10",max:this.numberOfPages,size:"sm"},on:{click:function(e){return t.onRequest()}},model:{value:t.pagination.page,callback:function(e){t.$set(t.pagination,"page",e)},expression:"pagination.page"}})],1):t._e()],1)])])])},n=[],i=(a("a434"),a("ddb0"),a("f508")),o=a("2b0e");a("983a");var r=a("c0f4"),l=o["default"].extend({meta:{title:"Categories - List"},data(){return{loading:!1,pagination:{page:1,rowsPerPage:25,rowsNumber:0},table:[0],limit:25,offset:0,count:0,currentPage:1,numberOfPages:0,columns:[{name:"desc",required:!0,label:"ID",align:"left",field:t=>t.id,format:t=>""+t,sortable:!1},{name:"nombre",align:"left",label:"Nombre",field:"name",sortable:!1}],rows:[]}},mounted(){const t=this;t.onRequest(),t.pagination.rowsNumber=t.count},methods:{onRequest(){this.loading=!0,i["a"].show(),this.pagination.currentPage=this.pagination.page,this.offset=this.limit*(this.pagination.page-1),this.table.splice(0,1),console.log(`FeaturesService.getFeatures(limit: ${this.limit}, this.pagination.offset: ${this.offset})`);r["a"].getFeatures(this.limit,this.offset).subscribe({next:t=>{this.rows.splice(0,this.rows.length,...t.results),this.count=t.count,this.numberOfPages=Math.ceil(this.count/this.limit),this.loading=!1,i["a"].hide()},complete:()=>console.log("[complete]")})},onRowClick(t,e){this.$router.push({path:"/features/detail/"+e.id})}}}),c=l,u=a("2877"),g=a("9989"),p=a("293e"),m=a("9c40"),d=a("eaac"),h=a("3b16"),f=a("eebe"),b=a.n(f),w=Object(u["a"])(c,s,n,!1,null,null,null);e["default"]=w.exports;b()(w,"components",{QPage:g["a"],QSkeleton:p["a"],QBtn:m["a"],QTable:d["a"],QPagination:h["a"]})},c0f4:function(t,e,a){"use strict";var s=a("e9b9"),n=a("bc3a"),i=a.n(n);const o='"http://minimarketcolosal.com/api/"panel/';class r{getFeatures(t,e){return s["a"].create(a=>{i.a.get(o+`features/?limit=${t}&offset=${e}`).then(t=>{a.next(t.data),a.complete()}).catch(t=>{a.error(t)})})}createFeature(t){return s["a"].create(e=>{i.a.post(o+"features/",{name:t.name}).then(t=>{console.log(t),e.next(t.data),e.complete()}).catch(t=>{e.error(t)})})}getFeature(t){return s["a"].create(e=>{console.log("id: "+t),i.a.get(o+`features/${t}/`).then(t=>{e.next(t.data),e.complete()}).catch(t=>{e.error(t)})})}updateFeature(t){return s["a"].create(e=>{i.a.put(o+`features/${t.id}/`,{name:t.name}).then(t=>{console.log(t),e.next(t.data),e.complete()}).catch(t=>{e.error(t)})})}deleteFeature(t){return s["a"].create(e=>{i.a.delete(o+`features/${t}/`).then(t=>{console.log(t),e.next(t.data),e.complete()}).catch(t=>{e.error(t)})})}}e["a"]=new r}}]);