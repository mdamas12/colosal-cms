(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"08ed":function(t,e,o){},"2d0f":function(t,e,o){"use strict";var a=o("e9b9"),r=o("a748");const i='"http://minimarketcolosal.com/api/"panel/';class n{getPromotions(t,e){return a["a"].create(o=>{r["a"].get(i+`promotions/list?limit=${t}&offset=${e}`).then(t=>{o.next(t.data),o.complete()}).catch(t=>{o.error(t)})})}createPromotion(t,e){return a["a"].create(o=>{Object(r["a"])({method:"post",url:i+"promotions/",data:t,headers:{"Content-Type":"multipart/form-data"}}).then(t=>{let a=t.data.id;0===Object.keys(e).length?(o.next(t.data),o.complete()):Object(r["a"])({method:"post",url:i+"promotions/products/",data:{products_detail:e,promotion:a}}).then(t=>{console.log(t),o.next(t.data),o.complete()}).catch(t=>{o.error(t)})}).catch(t=>{o.error(t)})})}getPromotion(t){return a["a"].create(e=>{r["a"].get(i+`promotions/search/${t}/`).then(t=>{console.log(t.data),e.next(t.data),e.complete()}).catch(t=>{e.error(t)})})}updatePromotion(t,e,o,n){return a["a"].create(a=>{Object(r["a"])({method:"put",url:i+`promotions/modification/${n}/`,data:t,headers:{"Content-Type":"multipart/form-data"}}).then(t=>{0===Object.keys(e).length&&0===Object.keys(o).length?(a.next(t.data),a.complete()):Object(r["a"])({method:"put",url:i+`promotions/products-modification/${n}/`,data:{products_detail:e,products_news:o}}).then(t=>{console.log(t),a.next(t.data)}).catch(t=>{a.error(t)})}).catch(t=>{a.error(t)})})}deletePromotion(t){return a["a"].create(e=>{r["a"].delete(i+`promotions/modification/${t}/`).then(t=>{console.log(),e.next(t)}).catch(t=>{e.error(t)})})}deleteProductPromotion(t){return a["a"].create(e=>{r["a"].delete(i+`promotions/delete-detail/${t}/`).then(t=>{console.log(t.data),e.next(t.data)}).catch(t=>{e.error(t)})})}}e["a"]=new n},4107:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-page",[o("div",{staticClass:"col-md-12 col-xs-12 q-pa-sm"},[o("div",{staticClass:"q-pa-sm"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col",staticStyle:{"max-width":"40px"}},[o("q-btn",{staticStyle:{color:"#9E9E9E"},attrs:{flat:"",round:"",icon:"keyboard_backspace"},on:{click:function(e){return t.$router.back()}}})],1),o("div",{staticClass:"col2"},[o("h5",{staticClass:"vertical-top col2 text-indigo-10 text-weight-bolder q-pa-sm",staticStyle:{"margin-top":"-3px"}},[t._v("\n                      Crear Promoción\n                  ")])]),o("div",{staticClass:"col"},[o("q-btn",{staticClass:"q-pa-xs float-right",attrs:{color:"red-10",label:"Crear Promoción",loading:t.loading},on:{click:function(e){return t.createPromotion()}}})],1)]),o("div",{staticClass:"q-mx-xs"},[o("q-form",{ref:"myForm"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col"},[o("div",{staticClass:"row q-mb-md"},[o("div",{staticClass:"col"},[o("q-input",{attrs:{outlined:"",label:"Nombre","lazy-rules":"",color:"dark",rules:[function(t){return!!t||"Debe ingresar el nombre"}]},model:{value:t.promotion.name,callback:function(e){t.$set(t.promotion,"name",e)},expression:"promotion.name"}})],1)]),o("div",{staticClass:"row q-mb-lg"},[o("div",{staticClass:"col"},[o("q-input",{attrs:{outlined:"",label:"Descripción",color:"dark"},model:{value:t.promotion.description,callback:function(e){t.$set(t.promotion,"description",e)},expression:"promotion.description"}})],1)])])]),o("div",{staticClass:"row"},[o("div",{staticClass:"col-8"},[o("div",{staticClass:"row q-mb-md "},[o("div",{staticClass:"col"},[o("q-file",{attrs:{outlined:"",clearable:"",counter:"",label:"Imagen Principal"},on:{rejected:t.onRejected,input:t.getImage},scopedSlots:t._u([{key:"prepend",fn:function(){return[o("q-icon",{attrs:{name:"attach_file"}})]},proxy:!0}]),model:{value:t.promotion.image,callback:function(e){t.$set(t.promotion,"image",e)},expression:"promotion.image"}})],1)])]),o("div",{staticClass:"col-4"},[o("div",{staticClass:"row q-mb-md "},[o("div",{staticClass:"col"},[null!==t.promotion.image?o("div",[o("q-img",{staticClass:"img-prev",attrs:{src:t.preview,alt:"imagen previa"}})],1):t._e()])])])]),o("div",{staticClass:"row q-mb-md"},[o("div",{staticClass:"col"},[o("q-select",{attrs:{outlined:"",color:"dark",options:t.currencyOptions,label:"Moneda"},model:{value:t.promotion.coin,callback:function(e){t.$set(t.promotion,"coin",e)},expression:"promotion.coin"}})],1),o("div",{staticClass:"col q-ml-sm"},[o("q-input",{ref:"price",attrs:{outlined:"",label:"Precio",mask:"#.##","fill-mask":"0",color:"dark",prefix:t.promotion.coin,"reverse-fill-mask":"","input-class":"text-right",rules:[function(t){return!!t||"Ingrese el precio"},t.isGreaterThanZero]},model:{value:t.promotion.price,callback:function(e){t.$set(t.promotion,"price",t._n(e))},expression:"promotion.price"}})],1)]),o("div",{staticClass:"row q-mb-xl"},[o("div",{staticClass:"col"},[o("q-select",{attrs:{outlined:"","use-input":"","hide-selected":"",color:"dark","fill-input":"","input-debounce":"0",label:"Categoría",options:t.options},on:{filter:t.filterFn},scopedSlots:t._u([{key:"no-option",fn:function(){return[o("q-item",[o("q-item-section",{staticClass:"text-grey"},[t._v("\n                            No results\n                          ")])],1)]},proxy:!0}]),model:{value:t.categoryNameModel,callback:function(e){t.categoryNameModel=e},expression:"categoryNameModel"}})],1),o("div",{staticClass:"col-2 q-ml-sm"},[o("q-input",{attrs:{type:"number",label:"Existencias",outlined:"",color:"dark"},model:{value:t.promotion.quantity,callback:function(e){t.$set(t.promotion,"quantity",t._n(e))},expression:"promotion.quantity"}})],1)])]),o("q-separator",{attrs:{inset:""}}),o("h5",{staticClass:"vertical-top col2 text-indigo-10 text-weight-bolder q-px-md"},[t._v("\n                  Detalle de Productos\n              ")]),o("div",{staticClass:"q-gutter-md"},t._l(this.detail,(function(e,a){return o("div",[o("div",{staticClass:"row q-mb-md"},[o("div",{staticClass:"col-8"},[o("q-select",{attrs:{outlined:"","use-input":"","hide-selected":"","fill-input":"",color:"dark","input-debounce":"0",label:"Producto",options:t.options2},on:{filter:t.filterFn2,input:function(e){return t.getProductInfo(t.productNameModel[a],a)}},scopedSlots:t._u([{key:"no-option",fn:function(){return[o("q-item",[o("q-item-section",{staticClass:"text-grey"},[t._v("\n                              No results\n                            ")])],1)]},proxy:!0}],null,!0),model:{value:t.productNameModel[a],callback:function(e){t.$set(t.productNameModel,a,e)},expression:"productNameModel[index]"}})],1),o("div",{staticClass:"col-2 q-mx-auto"},[o("q-input",{attrs:{type:"number",label:"Cantidad",outlined:"",color:"dark","lazy-rules":"",rules:[function(t){return!!t||"Ingresar cantidad comprada"},t.isGreaterThanZero]},model:{value:t.detail[a].quantity,callback:function(e){t.$set(t.detail[a],"quantity",t._n(e))},expression:"detail[index].quantity"}})],1),o("div",{staticClass:"col-1 self-center"},[o("div",{staticClass:"row"},[o("q-btn",{attrs:{flat:"",round:"",color:"indigo-10",icon:"delete"},on:{click:function(e){return t.removeProduct(a)}}})],1)])])])})),0),o("q-btn",{attrs:{flat:"",label:"Agregar Producto",color:"indigo-10",icon:"add"},on:{click:function(e){return t.addProduct()}}})],1)])])])},r=[],i=(o("e01a"),o("c975"),o("a434"),o("2ef0")),n=o.n(i),s=o("2b0e"),c=o("2d0f"),l=o("fab5"),d=o("560a"),p=o("f508"),u=s["default"].extend({data(){return{image:null,promotion:{name:"",description:"",image:null,price:0,coin:"",quantity:0,category:0},detail:[{quantity:0,product:0}],preview:null,uploading:null,loading:!1,categoryOptions:[],categoryIndex:[],options:[],productOptions:[{id:0,name:"",price:0}],productIndex:[],options2:[],currencyOptions:["USD","BS"],statusOptions:["COMPLETE"],categoryNameModel:"",productNameModel:[""]}},mounted(){let t=this;t.onRequest()},watch:{image(t){this.getImage(t)}},methods:{onRequest(){this.productOptions.pop(),p["a"].show(),l["a"].getAllCategories().subscribe({next:t=>{for(let e=0;e<t.length;e++)this.categoryOptions.push(t[e].name),this.categoryIndex.push(t[e].id)},complete:()=>{p["a"].hide()}})},addProduct(){this.detail.push({quantity:0,product:0}),this.productNameModel.push("")},getProductInfo(t,e){console.log("user input: "+t+"\nposition: "+this.productOptions.indexOf(t)),this.productOptions.indexOf(t)>=0&&(this.detail[e].product=this.productIndex[this.productOptions.indexOf(t)])},removeProduct(t){this.detail.length>1&&(this.detail.splice(t,1),this.productNameModel.splice(t,1))},createPromotion(){if(console.log(this.promotion.name),console.log(this.detail),""===this.promotion.name)return void this.showNotif("Proveer nombre de promoción","red-10");if(""===this.promotion.coin)return void this.showNotif("Especificar el tipo de moneda","red-10");if(!this.promotion.price>0)return void this.showNotif("Añadir el precio de la promo","red-10");if(!(this.categoryOptions.indexOf(this.categoryNameModel)>=0))return void this.showNotif("Agregar categoría de la promo","red-10");for(var t=0;t<this.detail.length;t++){if(""===this.productNameModel[t])return void this.showNotif("Seleccionar nombre del producto "+t,"red-10");if(!this.detail[t].quantity>0)return void this.showNotif(`Especificar cantidad de ${this.productNameModel[t]}s`,"red-10")}this.promotion.category=this.categoryIndex[this.categoryOptions.indexOf(this.categoryNameModel)];const e=new FormData;e.append("name",this.promotion.name),e.append("description",this.promotion.description),e.append("image",this.promotion.image),e.append("coin",this.promotion.coin),e.append("price",this.promotion.price),e.append("category",this.promotion.category),e.append("quantity",this.promotion.quantity),this.loading=!0,c["a"].createPromotion(e,this.detail).subscribe({next:t=>{this.loading=!1,this.showNotif(t,"indigo-10")},complete:()=>{setTimeout(this.$router.back(),1e3)}})},showNotif(t,e){this.$q.notify({message:t,color:e,actions:[{label:"Ok",color:"white",handler:()=>{}}]})},filterFn(t,e){e(()=>{if(""===t)this.options=this.categoryOptions;else{const e=t.toLowerCase();this.options=this.categoryOptions.filter(t=>t.toLowerCase().indexOf(e)>-1)}})},filterFn2(t,e){e(()=>{""!==t&&(this.productQuery=t,this.debouncedGetProducts())})},getProducts(){d["a"].searchProducts(this.productQuery).subscribe({next:t=>{if(this.productOptions.splice(0,this.productOptions.length),this.productIndex.splice(0,this.productIndex.length),t.results.length>0){for(let e=0;e<t.results.length;e++)this.productOptions.push(t.results[e].name),this.productIndex.push(t.results[e].id);this.options2=this.productOptions}},complete:()=>{console.log("[complete]")}})},getImage(t){console.log(t);let e=new FileReader;e.readAsDataURL(t),e.onload=t=>{this.preview=t.target.result}},onRejected(t){this.$q.notify({type:"negative",message:"El archivo seleccionado no es de tipo .png"})},isGreaterThanZero(t){return t>0?!!t:"Ingresar cantidad comprada"},backToPromotions(){this.$router.push({path:"/promotions"})}},created:function(){this.debouncedGetProducts=n.a.debounce(this.getProducts,500)}}),m=u,h=(o("7d87"),o("2877")),g=o("9989"),f=o("9c40"),b=o("0378"),x=o("27f9"),v=o("7d53"),y=o("0016"),C=o("068f"),q=o("ddd8"),w=o("66e5"),k=o("4074"),P=o("eb85"),O=o("eebe"),$=o.n(O),N=Object(h["a"])(m,a,r,!1,null,null,null);e["default"]=N.exports;$()(N,"components",{QPage:g["a"],QBtn:f["a"],QForm:b["a"],QInput:x["a"],QFile:v["a"],QIcon:y["a"],QImg:C["a"],QSelect:q["a"],QItem:w["a"],QItemSection:k["a"],QSeparator:P["a"]})},"560a":function(t,e,o){"use strict";var a=o("e9b9"),r=o("a748");const i="panel/";class n{getProducts(t,e){return a["a"].create(o=>{r["a"].get(i+`products/?limit=${t}&offset=${e}`).then(t=>{o.next(t.data),o.complete()}).catch(t=>{o.error(t)})})}getAllProducts(){return a["a"].create(t=>{r["a"].get(i+"products/").then(e=>{console.log(e.data),t.next(e.data),t.complete()}).catch(e=>{t.error(e)})})}searchProducts(t){return a["a"].create(e=>{r["a"].get(i+`products/coincidence/${t}/`).then(t=>{e.next(t.data),e.complete()}).catch(t=>{e.error(t)})})}createProduct(t,e,o){return a["a"].create(a=>{Object(r["a"])({method:"post",url:i+"products/",data:t,headers:{"Content-Type":"multipart/form-data"}}).then(t=>{let n=t.data.id;0===Object.keys(e).length&&(a.next(t.data),a.complete()),Object(r["a"])({method:"post",url:i+"products/features/",data:{features:e,product:t.data.id}}).then(t=>{0===Object.keys(o).length&&(a.next(t.data),a.complete()),o.append("product",n),Object(r["a"])({method:"post",url:i+"products/gallery/",data:o,headers:{"Content-Type":"multipart/form-data"}}).then(t=>{a.next(t.data),a.complete()}).catch(t=>{console.log(t),a.error(t)})}).catch(t=>{console.log(t)})}).catch(t=>{console.log(t)})})}getProduct(t){return a["a"].create(e=>{console.log("id: "+t),r["a"].get(i+`products/search/${t}/`).then(t=>{e.next(t.data),e.complete()}).catch(t=>{e.error(t)})})}updateProduct(t,e){return a["a"].create(o=>{r["a"].put(i+`products/search/${e}/`,t).then(t=>{console.log(),o.next(t.data),o.complete()}).catch(t=>{o.error(t)})})}deleteProduct(t){return a["a"].create(e=>{r["a"].delete(i+`products/search/${t}/`).then(t=>{console.log("Siiiiii"),e.next(t.data),e.complete()}).catch(t=>{console.log(t.response.data),e.error(t)})})}getDetailProduct(t){return a["a"].create(e=>{r["a"].get(i+`products/product-detail/${t}/`).then(t=>{console.log(),e.next(t.data),e.complete()}).catch(t=>{e.error(t)})})}deleteDetailProduct(t){return a["a"].create(e=>{r["a"].delete(i+`products/product-detail/${t}/`).then(t=>{console.log(),e.next(t.data),e.complete()}).catch(t=>{e.error(t)})})}}e["a"]=new n},"7d87":function(t,e,o){"use strict";var a=o("08ed"),r=o.n(a);r.a},fab5:function(t,e,o){"use strict";var a=o("e9b9"),r=o("a748");const i="panel/";class n{getCategories(t,e){return a["a"].create(o=>{r["a"].get(i+`categories/?limit=${t}&offset=${e}`).then(t=>{o.next(t.data),o.complete()}).catch(t=>{o.error(t)})})}getAllCategories(){return a["a"].create(t=>{r["a"].get(i+"categories/list-all").then(e=>{t.next(e.data),t.complete()}).catch(e=>{t.error(e)})})}createCategory(t){return a["a"].create(e=>{console.log(t),r["a"].post(i+"categories/save/",t,{headers:{"Content-Type":"multipart/form-data"}}).then(t=>{console.log(t),e.next(t.data),e.complete()}).catch(t=>{e.error(t)})})}getCategory(t){return a["a"].create(e=>{console.log("id: "+t),r["a"].get(i+`categories/${t}/`).then(t=>{e.next(t.data),e.complete()}).catch(t=>{e.error(t)})})}updateCategory(t,e){return a["a"].create(o=>{r["a"].put(i+`categories/${t}/`,e,{headers:{"Content-Type":"multipart/form-data"}}).then(t=>{console.log(),o.next(t.data),o.complete()}).catch(t=>{o.error(t)})})}deleteCategory(t){return a["a"].create(e=>{r["a"].delete(i+`categories/${t}/`).then(t=>{console.log("Entreee"),e.next(t.data),e.complete()}).catch(t=>{console.log("nooo Entreee",t),e.error(t)})})}}e["a"]=new n}}]);