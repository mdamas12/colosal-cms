(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{"0a70":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",[a("div",{staticClass:"row q-pa-sm q-pl-lg q-pr-lg"},[a("div",{staticClass:"col-md-12 col-xs-12 q-pt-lg"},[a("div",{staticClass:"row col-xs-12 q-pb-xl"},[a("div",{staticClass:"col"},[a("h5",{staticClass:"text-indigo-10 text-weight-bolder q-ma-none"},[e._v("\n            Compras a Proveedores\n          ")]),a("small",{staticClass:"text-subtitle2 text-grey-6 q-mb-none"},[e._v("Existen "+e._s(this.count)+" compras a proveedores almacenadas")])]),a("div",{staticClass:"col"},[a("q-btn",{staticClass:"q-pa-xs float-right",attrs:{color:"red-10",label:"Crear compra"},on:{click:function(t){return e.$router.push({name:"SupplyOrderCreate"})}}})],1)]),a("div",{staticClass:"q-pa-md"},[a("q-table",{attrs:{loading:e.loading,data:this.rows,columns:e.columns,"row-key":"provider",pagination:e.pagination,"hide-pagination":""},on:{"update:pagination":function(t){e.pagination=t},"row-click":e.onRowClick}}),a("div",{staticClass:"row justify-center q-mt-md"},[a("q-pagination",{attrs:{color:"grey-8",max:this.numberOfPages,size:"sm"},on:{click:function(t){return e.onRequest()}},model:{value:e.pagination.page,callback:function(t){e.$set(e.pagination,"page",t)},expression:"pagination.page"}})],1)],1)])])])},s=[],i=(a("a434"),a("ddb0"),a("f508"),a("2b0e"));a("39b2");var n=a("6c5b"),r=i["default"].extend({meta:{title:"Categories - List"},data(){return{loading:!1,pagination:{page:1,rowsPerPage:25,rowsNumber:0},table:[0],limit:25,offset:0,count:0,currentPage:1,numberOfPages:0,columns:[{name:"desc",required:!0,label:"No.",align:"left",field:e=>e.id,format:e=>""+e,sortable:!1},{name:"proveedor",align:"center",label:"Proveedor",field:"provider",sortable:!1,format:e=>""+e.name},{name:"fecha",align:"center",label:"Fecha",field:"date",sortable:!1},{name:"referencia",align:"center",label:"Referencia",field:"invoice",sortable:!1},{name:"moneda",align:"center",label:"Moneda",field:"coin",sortable:!1},{name:"total",align:"center",label:"Total",field:"amount",sortable:!1,format:e=>e.length<=8?"$"+e:"Bs."+e}],rows:[]}},mounted(){const e=this;e.onRequest(),e.pagination.rowsNumber=e.count},methods:{onRequest(){this.loading=!0,console.log("pagination.page == "+this.pagination.page),this.pagination.currentPage=this.pagination.page,this.offset=this.limit*(this.pagination.page-1),this.table.splice(0,1),console.log(this.table),this.table.splice(0,0,1),console.log(`SupplyOrdersService.getSupplyOrders(limit: ${this.limit}, this.pagination.offset: ${this.offset})`);n["a"].getSupplyOrders(this.limit,this.offset).subscribe({next:e=>{console.log(e),this.rows.splice(0,this.rows.length,...e.results),console.log(this.rows),this.count=e.count,this.numberOfPages=Math.ceil(this.count/this.limit),this.loading=!1},complete:()=>console.log("[complete]")})},onRowClick(e,t){this.$router.push({path:"/supplyOrders/detail/"+t.id})}}}),l=r,c=a("2877"),p=a("9989"),u=a("293e"),d=a("9c40"),g=a("eaac"),h=a("3b16"),m=a("eebe"),b=a.n(m),f=Object(c["a"])(l,o,s,!1,null,null,null);t["default"]=f.exports;b()(f,"components",{QPage:p["a"],QSkeleton:u["a"],QBtn:d["a"],QTable:g["a"],QPagination:h["a"]})},"39b2":function(e,t,a){"use strict"},"6c5b":function(e,t,a){"use strict";var o=a("e9b9"),s=a("a748");a("39b2");const i='"http://minimarketcolosal.com/api/"panel/';class n{getSupplyOrders(e,t){return o["a"].create(a=>{s["a"].get(i+`purchases/list?limit=${e}&offset=${t}`).then(e=>{a.next(e.data),a.complete()}).catch(e=>{a.error(e)})})}createSupplyOrder(e){return o["a"].create(t=>{s["a"].post(i+"purchases/",{purchase:e.purchase,products:e.detail}).then(e=>{console.log(e),t.complete()}).catch(e=>{t.error(e)})})}getSupplyOrder(e){return o["a"].create(t=>{console.log("id: "+e),s["a"].get(i+`purchases/detail/${e}/`).then(e=>{t.next(e.data),t.complete()}).catch(e=>{t.error(e)})})}updateSupplyOrder(e,t){return o["a"].create(a=>{s["a"].put(i+`purchases/detail/${t}/`,{purchase:e.purchase,products:e.products}).then(e=>{console.log(),a.complete()}).catch(e=>{a.error(e)})})}deleteSupplyOrder(e){return o["a"].create(t=>{s["a"].delete(i+`purchases/${e}/`).then(e=>{console.log(),t.complete()}).catch(e=>{t.error(e)})})}}t["a"]=new n}}]);