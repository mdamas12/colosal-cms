(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[29],{"289f":function(e,t,a){"use strict";var n=a("e9b9"),o=a("bc3a"),i=a.n(o);const l='"http://minimarketcolosal.com/api/"panel/';class s{getPayments(){return n["a"].create(e=>{i.a.get(l+"payments/").then(t=>{e.next(t.data),e.complete()}).catch(t=>{e.error(t)})})}createPayment(e){return n["a"].create(t=>{i.a.post(l+"payments/",{bank:e.bank,method:e.method}).then(e=>{console.log(e),t.next(e.data),t.complete()}).catch(e=>{t.error(e)})})}}t["a"]=new s},3368:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",[a("div",{staticClass:"row q-pa-sm q-pl-lg q-pr-lg"},[a("div",{staticClass:"col-md-12 col-xs-12 q-pt-lg"},[a("div",{staticClass:"row col-xs-12 q-pb-xl"},[a("div",{staticClass:"col"},[a("h5",{staticClass:"text-indigo-10 text-weight-bolder q-ma-none"},[e._v("\n            Métodos de pago\n          ")])]),a("div",{staticClass:"col"},[a("q-btn",{staticClass:"float-right q-pa-xs",attrs:{color:"red-10",label:"Crear pago"},on:{click:function(t){return e.$router.push({name:"PaymentCreate"})}}})],1)]),a("div",{staticClass:"col-md-12 col-xs-12 q-pt-lg"},[a("q-table",{attrs:{loading:e.loading,data:this.rows,columns:e.columns,"row-key":"name",pagination:e.pagination,"hide-pagination":""},on:{"update:pagination":function(t){e.pagination=t}}}),e.numberOfPages>1?a("div",{staticClass:"row justify-center q-mt-md"},[a("q-pagination",{attrs:{color:"indigo-10",max:this.numberOfPages,size:"sm"},on:{click:function(t){return e.onRequest()}},model:{value:e.pagination.page,callback:function(t){e.$set(e.pagination,"page",t)},expression:"pagination.page"}})],1):e._e()],1)])])])},o=[],i=(a("a434"),a("ddb0"),a("f508"),a("2b0e")),l=a("289f"),s=i["default"].extend({meta:{title:"Categories - List"},data(){return{loading:!1,pagination:{page:1,rowsPerPage:25,rowsNumber:0},table:[0],limit:25,offset:0,count:0,currentPage:1,numberOfPages:0,columns:[{name:"name",align:"left",label:"Banco",field:"name",sortable:!1},{name:"currency",align:"left",label:"Tipo de pago",field:"currency",sortable:!1},{name:"account_owner",align:"left",label:"Titular",field:"account_owner",sortable:!1},{name:"email",align:"left",label:"Correo",field:"email",sortable:!1},{name:"phone",align:"left",label:"Teléfono",field:"phone",sortable:!1},{name:"owner_id",align:"left",label:"No. identif",field:"owner_id",sortable:!1},{name:"account_number",align:"left",label:"No. cuenta",field:"account_number",sortable:!1}],rows:[]}},mounted(){const e=this;e.onRequest(),e.pagination.rowsNumber=e.count},methods:{onRequest(){this.loading=!0,console.log("pagination.page == "+this.pagination.page),this.pagination.currentPage=this.pagination.page,this.offset=this.limit*(this.pagination.page-1),this.table.splice(0,1),console.log(`PaymentsService.getPayments(limit: ${this.limit}, this.pagination.offset: ${this.offset})`);l["a"].getPayments(this.limit,this.offset).subscribe({next:e=>{console.log(e),this.rows.splice(0,this.rows.length,...e),console.log(this.rows),this.count=e.count,this.numberOfPages=Math.ceil(this.count/this.limit),this.loading=!1},complete:()=>console.log("[complete]")})},onRowClick(e,t){this.$router.push({path:"/payments/detail/"+t.id})}}}),c=s,r=a("2877"),g=a("9989"),p=a("293e"),m=a("9c40"),u=a("eaac"),d=a("3b16"),h=a("eebe"),f=a.n(h),b=Object(r["a"])(c,n,o,!1,null,null,null);t["default"]=b.exports;f()(b,"components",{QPage:g["a"],QSkeleton:p["a"],QBtn:m["a"],QTable:u["a"],QPagination:d["a"]})}}]);