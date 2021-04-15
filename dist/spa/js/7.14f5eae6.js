(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"2ab0":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",[a("div",{staticClass:"row q-pa-sm q-pl-lg q-pr-lg"},[a("div",{staticClass:"col-md-12 col-xs-12 q-pt-lg"},[a("div",{staticClass:"row col-xs-12 q-pb-xl"},[a("div",{staticClass:"col"},[a("h4",{staticClass:"text-indigo-10 text-weight-bolder q-ma-none"},[e._v("\n            Productos\n          ")]),e.count>0?a("small",{staticClass:"text-subtitle2 text-blue-grey-7 q-mb-none"},[e._v("Existen "+e._s(this.count)+" productos almacenados")]):e._e()]),a("div",{staticClass:"col"},[a("q-btn",{staticClass:"float-right",attrs:{color:"red-10",label:"Crear producto"},on:{click:function(t){return e.$router.push({name:"ProductsCreate"})}}})],1)]),a("div",[a("q-input",{attrs:{outlined:"","bottom-slots":"",label:"Buscar"},scopedSlots:e._u([{key:"append",fn:function(){return[""!==e.text?a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"close"},on:{click:function(t){e.text=""}}}):e._e(),a("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:e.text,callback:function(t){e.text=t},expression:"text"}})],1),a("div",{staticClass:"col-md-12 col-xs-12 q-pt-lg"},[a("q-table",{attrs:{loading:e.loading,data:this.rows,columns:e.columns,"row-key":"name",pagination:e.pagination,"hide-pagination":""},on:{"update:pagination":function(t){e.pagination=t},"row-click":e.onRowClick}}),e.numberOfPages>1?a("div",{staticClass:"row justify-center q-mt-md"},[a("q-pagination",{attrs:{color:"indigo-10",max:this.numberOfPages,size:"sm"},on:{click:function(t){return e.onRequest()}},model:{value:e.pagination.page,callback:function(t){e.$set(e.pagination,"page",t)},expression:"pagination.page"}})],1):e._e()],1)])])])},r=[],n=(a("a434"),a("ddb0"),a("f508"),a("2b0e")),c=a("560a"),s=(a("97da"),a("fab5"),n["default"].extend({meta:{title:"Products - List"},data(){return{text:"",products:[],product:{},page:1,pages:1,loading:!1,pagination:{page:1,rowsPerPage:25,rowsNumber:0},table:[0],limit:25,offset:0,count:0,currentPage:1,numberOfPages:0,columns:[{name:"desc",required:!0,label:"ID",align:"left",field:e=>e.id,format:e=>""+e,sortable:!1},{name:"nombre",align:"center",label:"Nombre",field:"name",sortable:!1},{name:"descripcion",align:"center",label:"Descripción",field:"description",sortable:!1},{name:"price",align:"center",label:"Precio",field:"price",sortable:!1},{name:"coin",align:"center",label:"Moneda",field:"coin",sortable:!1},{name:"quantity",align:"center",label:"Cantidad",field:"quantity",sortable:!1},{name:"category",align:"center",label:"Categoria",field:e=>e.category.name,sortable:!1},{name:"brand",align:"center",label:"Marca",sortable:!1,field:e=>e.brand.name}],rows:[]}},mounted(){const e=this;e.onRequest(),e.pagination.rowsNumber=e.count},methods:{onRequest(){this.loading=!0,this.pagination.currentPage=this.pagination.page,this.offset=this.limit*(this.pagination.page-1),this.table.splice(0,1),this.table.splice(0,0,1);c["a"].getProducts(this.limit,this.offset).subscribe({next:e=>{this.rows.splice(0,this.rows.length,...e.results),this.count=e.count,this.numberOfPages=Math.ceil(this.count/this.limit),this.loading=!1},complete:()=>console.log("[complete]")}),c["a"].getAllProducts().subscribe({next:e=>{this.products=e.results}})},onRowClick(e,t){this.$router.push({path:"/products/edit/"+t.id})},detailProduct(e){c["a"].getProduct(e).subscribe({next:e=>{this.product=e},complete:()=>console.log("[complete]")})}}})),l=s,i=a("2877"),d=a("9989"),u=a("293e"),p=a("9c40"),g=a("27f9"),h=a("0016"),m=a("eaac"),b=a("3b16"),f=a("f09f"),x=a("1c1c"),P=a("66e5"),C=a("4074"),w=a("0170"),q=a("4b7e"),$=a("eebe"),v=a.n($),y=Object(i["a"])(l,o,r,!1,null,null,null);t["default"]=y.exports;v()(y,"components",{QPage:d["a"],QSkeleton:u["a"],QBtn:p["a"],QInput:g["a"],QIcon:h["a"],QTable:m["a"],QPagination:b["a"],QCard:f["a"],QList:x["a"],QItem:P["a"],QItemSection:C["a"],QItemLabel:w["a"],QCardActions:q["a"]})},"2f43":function(e,t,a){"use strict"},"560a":function(e,t,a){"use strict";(function(e){var o=a("e9b9"),r=a("bc3a"),n=a.n(r);const c=e.env.API_URL+"panel/";class s{getProducts(e,t){return o["a"].create(a=>{n.a.get(c+`products/?limit=${e}&offset=${t}`).then(e=>{a.next(e.data),a.complete()}).catch(e=>{a.error(e)})})}getAllProducts(){return o["a"].create(e=>{n.a.get(c+"products/").then(t=>{console.log(t.data),e.next(t.data),e.complete()}).catch(t=>{e.error(t)})})}searchProducts(e){return o["a"].create(t=>{n.a.get(c+`products/coincidence/${e}/`).then(e=>{t.next(e.data),t.complete()}).catch(e=>{t.error(e)})})}createProduct(e,t,a){return o["a"].create(o=>{n()({method:"post",url:c+"products/",data:e,headers:{"Content-Type":"multipart/form-data"}}).then(e=>{let r=e.data.id;0===Object.keys(t).length&&(o.next(e.data),o.complete()),n()({method:"post",url:c+"products/features/",data:{features:t,product:e.data.id}}).then(e=>{0===Object.keys(a).length&&(o.next(e.data),o.complete()),a.append("product",r),n()({method:"post",url:c+"products/gallery/",data:a,headers:{"Content-Type":"multipart/form-data"}}).then(e=>{o.next(e.data),o.complete()}).catch(e=>{console.log(e),o.error(e)})}).catch(e=>{console.log(e)})}).catch(e=>{console.log(e)})})}getProduct(e){return o["a"].create(t=>{console.log("id: "+e),n.a.get(c+`products/search/${e}/`).then(e=>{t.next(e.data),t.complete()}).catch(e=>{t.error(e)})})}updateProduct(e,t){return o["a"].create(a=>{n.a.put(c+`products/search/${t}/`,e).then(e=>{console.log(),a.next(e.data),a.complete()}).catch(e=>{a.error(e)})})}deleteProduct(e){return o["a"].create(t=>{n.a.delete(c+`products/search/${e}/`).then(e=>{console.log("Siiiiii"),t.next(e.data),t.complete()}).catch(e=>{console.log(e.response.data),t.error(e)})})}getDetailProduct(e){return o["a"].create(t=>{n.a.get(c+`products/product-detail/${e}/`).then(e=>{console.log(),t.next(e.data),t.complete()}).catch(e=>{t.error(e)})})}deleteDetailProduct(e){return o["a"].create(t=>{n.a.delete(c+`products/product-detail/${e}/`).then(e=>{console.log(),t.next(e.data),t.complete()}).catch(e=>{t.error(e)})})}}t["a"]=new s}).call(this,a("4362"))},"97da":function(e,t,a){"use strict";(function(e){var o=a("e9b9"),r=a("bc3a"),n=a.n(r);a("2f43");const c=e.env.API_URL+"panel/";class s{getBrands(e,t){return o["a"].create(a=>{n.a.get(c+`brands/?limit=${e}&offset=${t}`).then(e=>{a.next(e.data),a.complete()}).catch(e=>{a.error(e)})})}createBrand(e){return o["a"].create(t=>{n.a.post(c+"brands/",{name:e.name}).then(e=>{console.log(e),t.next(e.data),t.complete()}).catch(e=>{t.error(e)})})}getBrand(e){return o["a"].create(t=>{console.log("id: "+e),n.a.get(c+`brands/${e}/`).then(e=>{t.next(e.data),t.complete()}).catch(e=>{t.error(e)})})}updateBrand(e){return o["a"].create(t=>{n.a.put(c+`brands/${e.id}/`,{name:e.name}).then(e=>{t.next(e.data),t.complete()}).catch(e=>{t.error(e)})})}deleteBrand(e){return o["a"].create(t=>{n.a.delete(c+`brands/${e}/`).then(e=>{console.log(),t.complete()}).catch(e=>{t.error(e)})})}}t["a"]=new s}).call(this,a("4362"))},fab5:function(e,t,a){"use strict";(function(e){var o=a("e9b9"),r=a("bc3a"),n=a.n(r);const c=e.env.API_URL+"panel/";class s{getCategories(e,t){return o["a"].create(a=>{n.a.get(c+`categories/?limit=${e}&offset=${t}`).then(e=>{a.next(e.data),a.complete()}).catch(e=>{a.error(e)})})}getAllCategories(){return o["a"].create(e=>{n.a.get(c+"categories/list-all").then(t=>{e.next(t.data),e.complete()}).catch(t=>{e.error(t)})})}createCategory(e){return o["a"].create(t=>{console.log(e),n.a.post(c+"categories/save/",e,{headers:{"Content-Type":"multipart/form-data"}}).then(e=>{console.log(e),t.next(e.data),t.complete()}).catch(e=>{t.error(e)})})}getCategory(e){return o["a"].create(t=>{console.log("id: "+e),n.a.get(c+`categories/${e}/`).then(e=>{t.next(e.data),t.complete()}).catch(e=>{t.error(e)})})}updateCategory(e,t){return o["a"].create(a=>{n.a.put(c+`categories/${e}/`,t,{headers:{"Content-Type":"multipart/form-data"}}).then(e=>{console.log(),a.next(e.data),a.complete()}).catch(e=>{a.error(e)})})}deleteCategory(e){return o["a"].create(t=>{n.a.delete(c+`categories/${e}/`).then(e=>{console.log("Entreee"),t.next(e.data),t.complete()}).catch(e=>{console.log("nooo Entreee",e),t.error(e)})})}}t["a"]=new s}).call(this,a("4362"))}}]);