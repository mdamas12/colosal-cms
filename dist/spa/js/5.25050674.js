(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"0c01":function(t,e,o){"use strict";var a=o("9ee1"),i=o.n(a);i.a},"2d0f":function(t,e,o){"use strict";var a=o("e9b9"),i=o("a748");const r='"http://minimarketcolosal.com/api/"panel/';class s{getPromotions(t,e){return a["a"].create(o=>{i["a"].get(r+`promotions/list?limit=${t}&offset=${e}`).then(t=>{o.next(t.data),o.complete()}).catch(t=>{o.error(t)})})}createPromotion(t,e){return a["a"].create(o=>{Object(i["a"])({method:"post",url:r+"promotions/",data:t,headers:{"Content-Type":"multipart/form-data"}}).then(t=>{let a=t.data.id;0===Object.keys(e).length?(o.next(t.data),o.complete()):Object(i["a"])({method:"post",url:r+"promotions/products/",data:{products_detail:e,promotion:a}}).then(t=>{console.log(t),o.next(t.data),o.complete()}).catch(t=>{o.error(t)})}).catch(t=>{o.error(t)})})}getPromotion(t){return a["a"].create(e=>{i["a"].get(r+`promotions/search/${t}/`).then(t=>{console.log(t.data),e.next(t.data),e.complete()}).catch(t=>{e.error(t)})})}updatePromotion(t,e,o,s){return a["a"].create(a=>{Object(i["a"])({method:"put",url:r+`promotions/modification/${s}/`,data:t,headers:{"Content-Type":"multipart/form-data"}}).then(t=>{0===Object.keys(e).length&&0===Object.keys(o).length?(a.next(t.data),a.complete()):Object(i["a"])({method:"put",url:r+`promotions/products-modification/${s}/`,data:{products_detail:e,products_news:o}}).then(t=>{console.log(t),a.next(t.data)}).catch(t=>{a.error(t)})}).catch(t=>{a.error(t)})})}deletePromotion(t){return a["a"].create(e=>{i["a"].delete(r+`promotions/modification/${t}/`).then(t=>{console.log(),e.next(t)}).catch(t=>{e.error(t)})})}deleteProductPromotion(t){return a["a"].create(e=>{i["a"].delete(r+`promotions/delete-detail/${t}/`).then(t=>{console.log(t.data),e.next(t.data)}).catch(t=>{e.error(t)})})}}e["a"]=new s},"560a":function(t,e,o){"use strict";var a=o("e9b9"),i=o("a748");const r="panel/";class s{getProducts(t,e){return a["a"].create(o=>{i["a"].get(r+`products/?limit=${t}&offset=${e}`).then(t=>{o.next(t.data),o.complete()}).catch(t=>{o.error(t)})})}getAllProducts(){return a["a"].create(t=>{i["a"].get(r+"products/").then(e=>{console.log(e.data),t.next(e.data),t.complete()}).catch(e=>{t.error(e)})})}searchProducts(t){return a["a"].create(e=>{i["a"].get(r+`products/coincidence/${t}/`).then(t=>{e.next(t.data),e.complete()}).catch(t=>{e.error(t)})})}createProduct(t,e,o){return a["a"].create(a=>{Object(i["a"])({method:"post",url:r+"products/",data:t,headers:{"Content-Type":"multipart/form-data"}}).then(t=>{let s=t.data.id;0===Object.keys(e).length&&(a.next(t.data),a.complete()),Object(i["a"])({method:"post",url:r+"products/features/",data:{features:e,product:t.data.id}}).then(t=>{0===Object.keys(o).length&&(a.next(t.data),a.complete()),o.append("product",s),Object(i["a"])({method:"post",url:r+"products/gallery/",data:o,headers:{"Content-Type":"multipart/form-data"}}).then(t=>{a.next(t.data),a.complete()}).catch(t=>{console.log(t),a.error(t)})}).catch(t=>{console.log(t)})}).catch(t=>{console.log(t)})})}getProduct(t){return a["a"].create(e=>{console.log("id: "+t),i["a"].get(r+`products/search/${t}/`).then(t=>{e.next(t.data),e.complete()}).catch(t=>{e.error(t)})})}updateProduct(t,e){return a["a"].create(o=>{i["a"].put(r+`products/search/${e}/`,t).then(t=>{console.log(),o.next(t.data),o.complete()}).catch(t=>{o.error(t)})})}deleteProduct(t){return a["a"].create(e=>{i["a"].delete(r+`products/search/${t}/`).then(t=>{console.log("Siiiiii"),e.next(t.data),e.complete()}).catch(t=>{console.log(t.response.data),e.error(t)})})}getDetailProduct(t){return a["a"].create(e=>{i["a"].get(r+`products/product-detail/${t}/`).then(t=>{console.log(),e.next(t.data),e.complete()}).catch(t=>{e.error(t)})})}deleteDetailProduct(t){return a["a"].create(e=>{i["a"].delete(r+`products/product-detail/${t}/`).then(t=>{console.log(),e.next(t.data),e.complete()}).catch(t=>{e.error(t)})})}}e["a"]=new s},"9ee1":function(t,e,o){},d449:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-page",[o("div",{staticClass:"col-md-12 col-xs-12 q-pa-sm"},[o("div",{staticClass:"q-pa-sm"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col",staticStyle:{"max-width":"40px"}},[o("q-btn",{staticStyle:{color:"#9E9E9E"},attrs:{flat:"",round:"",icon:"keyboard_backspace"},on:{click:function(e){return t.$router.back()}}})],1),o("div",{staticClass:"col2"},[o("h5",{staticClass:"vertical-top col2 text-indigo-10 text-weight-bolder q-pa-sm",staticStyle:{"margin-top":"-3px"}},[t._v("\n                        Editar Promoción\n                    ")])])])]),t.fetched?o("div",{staticClass:"column items-end"},[o("div",{staticClass:"col"},[o("div",{staticClass:"row"},[o("q-btn",{staticClass:"q-pa-xs q-mr-xs float-right",attrs:{flat:"",color:"red-10",label:"Eliminar"},on:{click:function(e){return t.confirmDelete()}}}),o("q-btn",{staticClass:"q-pa-xs float-right",attrs:{color:"red-10",label:"Guardar"},on:{click:function(e){return t.updatePromotion()}}})],1)])]):t._e()]),o("div",{staticClass:"q-mx-xs"},[o("q-form",{ref:"myForm"},[o("div",{staticClass:"row q-mb-md"},[o("div",{staticClass:"col"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col"},[o("q-input",{attrs:{outlined:"",label:"Nombre","lazy-rules":"",color:"dark",rules:[function(t){return!!t||"Debe ingresar el nombre"}]},model:{value:t.promotion.name,callback:function(e){t.$set(t.promotion,"name",e)},expression:"promotion.name"}})],1)])])]),o("div",{staticClass:"row"},[o("div",{staticClass:"col-8"},[o("div",{staticClass:"row q-mb-md "},[o("div",{staticClass:"col"},[o("q-file",{attrs:{outlined:"",clearable:"",counter:"",label:"Imagen Principal"},on:{rejected:t.onRejected,input:t.getImage},scopedSlots:t._u([{key:"prepend",fn:function(){return[o("q-icon",{attrs:{name:"attach_file"}})]},proxy:!0}]),model:{value:t.promotion.image,callback:function(e){t.$set(t.promotion,"image",e)},expression:"promotion.image"}})],1)])]),o("div",{staticClass:"col-4"},[o("div",{staticClass:"row q-mb-md "},[o("div",{staticClass:"col"},[null!==t.promotion.image?o("div",[o("q-img",{staticClass:"img-prev",attrs:{src:t.preview,alt:"imagen previa"}})],1):t._e()])])])]),o("div",{staticClass:"row q-mb-md"},[o("div",{staticClass:"col"},[o("q-input",{attrs:{outlined:"",autogrow:"",color:"dark",label:"Descripción"},model:{value:t.promotion.description,callback:function(e){t.$set(t.promotion,"description",e)},expression:"promotion.description"}})],1)]),o("div",{staticClass:"row q-mb-md"},[o("div",{staticClass:"col"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col"},[o("q-select",{attrs:{outlined:"",color:"dark",options:t.currencyOptions,label:"Moneda"},model:{value:t.promotion.coin,callback:function(e){t.$set(t.promotion,"coin",e)},expression:"promotion.coin"}})],1),o("div",{staticClass:"col q-ml-sm"},[o("q-input",{attrs:{outlined:"",label:"Costo total",mask:"#.##","fill-mask":"0",color:"dark",prefix:t.promotion.coin,"reverse-fill-mask":"","input-class":"text-right"},model:{value:t.promotion.price,callback:function(e){t.$set(t.promotion,"price",t._n(e))},expression:"promotion.price"}})],1)])])]),o("div",{staticClass:"row q-mb-md"},[o("div",{staticClass:"col"},[o("q-select",{attrs:{outlined:"","use-input":"","hide-selected":"","fill-input":"",color:"dark","input-debounce":"0",label:"Categoría",options:t.options},on:{filter:t.filterFn},scopedSlots:t._u([{key:"no-option",fn:function(){return[o("q-item",[o("q-item-section",{staticClass:"text-grey"},[t._v("\n                            No results\n                          ")])],1)]},proxy:!0}]),model:{value:t.categoryNameModel,callback:function(e){t.categoryNameModel=e},expression:"categoryNameModel"}})],1),o("div",{staticClass:"col-2 q-ml-sm"},[o("q-input",{attrs:{type:"number",label:"Existencias",outlined:"",color:"dark"},model:{value:t.promotion.quantity,callback:function(e){t.$set(t.promotion,"quantity",t._n(e))},expression:"promotion.quantity"}})],1)])]),o("q-separator",{attrs:{inset:""}}),o("h5",{staticClass:"vertical-top col2 text-indigo-10 text-weight-bolder q-pa-md"},[t._v("\n                  Detalle de Productos\n              ")]),t.savedProductDetail.length>0?o("div",[o("h6",{staticClass:"vertical-top col2 text-indigo-10 text-weight-bolder q-pa-md"},[t._v("\n                    Productos Guardados\n                ")]),o("div",{staticClass:"q-gutter-md"},t._l(this.savedProductDetail,(function(e,a){return o("div",[o("div",{staticClass:"row q-my-md"},[o("div",{staticClass:"col"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-8"},[o("q-input",{attrs:{outlined:"",disable:"","hide-selected":"","fill-input":"",color:"dark","input-debounce":"0",label:"Producto"},model:{value:t.savedproductNameModel[a],callback:function(e){t.$set(t.savedproductNameModel,a,e)},expression:"savedproductNameModel[index]"}})],1),o("div",{staticClass:"col-2 q-mx-auto"},[o("q-input",{attrs:{type:"number",label:"Cantidad",color:"dark",outlined:""},model:{value:t.savedProductDetail[a].quantity,callback:function(e){t.$set(t.savedProductDetail[a],"quantity",t._n(e))},expression:"savedProductDetail[index].quantity"}})],1),o("div",{staticClass:"col-1 self-center"},[o("div",{staticClass:"row"},[o("q-btn",{attrs:{flat:"",round:"",color:"indigo-10",icon:"delete"},on:{click:function(e){return t.removeSavedProduct(a)}}})],1)])])])])])})),0),o("q-separator",{attrs:{inset:""}}),o("h6",{staticClass:"vertical-top col2 text-indigo-10 text-weight-bolder q-pa-md"},[t._v("\n                    Productos Nuevos\n                ")])],1):t._e(),o("div",{staticClass:"q-gutter-md"},t._l(this.detail,(function(e,a){return o("div",[o("div",{staticClass:"row q-my-md"},[o("div",{staticClass:"col"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-8"},[o("q-select",{attrs:{outlined:"","use-input":"","hide-selected":"","fill-input":"",color:"dark","input-debounce":"0",label:"Producto",options:t.options2},on:{filter:t.filterFn2,input:function(e){return t.getProductInfo(t.productNameModel[a],a)}},scopedSlots:t._u([{key:"no-option",fn:function(){return[o("q-item",[o("q-item-section",{staticClass:"text-grey"},[t._v("\n                                  No results\n                                ")])],1)]},proxy:!0}],null,!0),model:{value:t.productNameModel[a],callback:function(e){t.$set(t.productNameModel,a,e)},expression:"productNameModel[index]"}})],1),o("div",{staticClass:"col-2 q-mx-auto"},[o("q-input",{attrs:{type:"number",label:"Cantidad",color:"dark",outlined:""},model:{value:t.detail[a].quantity,callback:function(e){t.$set(t.detail[a],"quantity",t._n(e))},expression:"detail[index].quantity"}})],1),o("div",{staticClass:"col-1 self-center"},[o("div",{staticClass:"row"},[o("q-btn",{attrs:{flat:"",round:"",color:"indigo-10",icon:"delete"},on:{click:function(e){return t.removeProduct(a)}}})],1)])])])])])})),0),o("q-btn",{attrs:{flat:"",round:"",color:"indigo-10",icon:"add"},on:{click:function(e){return t.addProduct()}}})],1)])])])},i=[],r=(o("e01a"),o("c975"),o("a434"),o("e6cf"),o("2ef0")),s=o.n(r),n=o("2b0e"),c=o("2d0f"),l=o("fab5"),d=o("560a"),p=o("f508"),u=n["default"].extend({data(){return{image:"",preview:"",promotionId:this.$router.currentRoute.params.id,promotion:{name:"",description:"",image:null,price:0,coin:"",quantity:0,category:0},detail:[{quantity:0,product:0}],loading1:!1,loading2:!1,fetched:!1,categoryOptions:[],categoryIndex:[],options:[],productIndex:[],productOptions:[{id:0,name:"",price:0}],options2:[],currencyOptions:["USD","BS"],statusOptions:["COMPLETE"],categoryNameModel:"",savedproductNameModel:[],savedProductDetail:[{id:0,quantity:0,product:0}],productNameModel:[]}},mounted(){let t=this;t.onRequest()},methods:{onRequest(){this.detail.pop(),this.productOptions.pop(),this.savedProductDetail.pop(),p["a"].show(),l["a"].getAllCategories().subscribe({next:t=>{for(let e=0;e<t.length;e++)this.categoryOptions.push(t[e].name),this.categoryIndex.push(t[e].id)},complete:()=>{console.log("[complete]\ncategoryOptions: "+this.categoryOptions+"\ncategoryIndex: "+this.categoryIndex)}}),c["a"].getPromotion(this.promotionId).subscribe({next:t=>{var e=encodeURI(t.image);fetch(e).then(t=>t.blob()).then(e=>{const o=t.image.indexOf("promotions/")+11,a=t.image.substring(o),i=a.substring(a.indexOf(".")+1),r=new File([e],a,{type:"image/"+i});this.promotion.image=r,this.getImage(r)}),this.promotion.name=t.name,this.promotion.description=t.description,this.promotion.price=t.price,this.promotion.coin=t.coin,this.promotion.quantity=t.quantity,this.promotion.category=t.category.id,this.categoryNameModel=t.category.name,this.savedProductDetail.splice(0,1);for(let o=0;o<t.promotion_detail.length;o++)this.savedProductDetail.push({id:t.promotion_detail[o].id,product:t.promotion_detail[o].product.id,quantity:t.promotion_detail[o].quantity}),this.savedproductNameModel.push(t.promotion_detail[o].product.name)},complete:()=>{this.fetched=!0,p["a"].hide()}})},addProduct(){this.detail.push({quantity:0,product:0}),this.productNameModel.push("")},getProductInfo(t,e){this.productOptions.indexOf(t)>=0&&(this.detail[e].product=this.productIndex[this.productOptions.indexOf(t)]),console.log(this.detail)},removeSavedProduct(t){this.$q.dialog({title:"Confirmar",message:"¿Está seguro de querer eliminar este Producto?",cancel:!0,persistent:!0,color:"red-10"}).onOk(()=>{this.loading2=!0,c["a"].deleteProductPromotion(this.savedProductDetail[t].id).subscribe({next:e=>{this.loading2=!1,this.showNotif(e,"indigo-10"),this.savedProductDetail.splice(t,1),this.savedproductNameModel.splice(t,1)}})}).onCancel(()=>{console.log(">>>> cancelled")})},removeProduct(t){this.detail.length>1&&(this.detail.splice(t,1),this.productNameModel.splice(t,1))},updatePromotion(){if(""===this.promotion.name)return void this.showNotif("Proveer nombre de promoción","red-10");if(""===this.promotion.coin)return void this.showNotif("Especificar el tipo de moneda","red-10");if(!this.promotion.price>0)return void this.showNotif("Añadir el precio de la promo","red-10");if(!(this.categoryOptions.indexOf(this.categoryNameModel)>=0))return void this.showNotif("Agregar categoría de la promo","red-10");for(var t=0;t<this.detail.length;t++){if(""===this.productNameModel[t])return void this.showNotif("Seleccionar nombre del producto "+t,"red-10");if(!this.detail[t].quantity>0)return void this.showNotif(`Especificar cantidad de ${this.productNameModel[t]}s`,"red-10")}this.promotion.category=this.categoryIndex[this.categoryOptions.indexOf(this.categoryNameModel)];const e=new FormData;e.append("name",this.promotion.name),e.append("description",this.promotion.description),e.append("image",this.promotion.image),e.append("coin",this.promotion.coin),e.append("price",this.promotion.price),e.append("category",this.promotion.category),e.append("quantity",this.promotion.quantity),this.loading=!0,c["a"].updatePromotion(e,this.savedProductDetail,this.detail,this.promotionId).subscribe({next:t=>{this.loading=!1,this.showNotif(t,"indigo-10"),setTimeout(this.$router.back(),1e3)}})},confirmDelete(){this.loading1||this.loading2||this.$q.dialog({title:"Confirmar",message:"¿Está seguro de querer eliminar esta promoción?",cancel:!0,persistent:!0,color:"red-10"}).onOk(()=>{this.deletePromotion()}).onCancel(()=>{})},deletePromotion(){this.loading2=!0,c["a"].deletePromotion(this.promotionId).subscribe({next:t=>{this.loading2=!1,200==t.status?(this.showNotif(t.data,"indigo-10"),setTimeout(()=>this.$router.push({path:"/Promotions"}),1e3)):this.showNotif(t.data,"red-10")}})},backToPromotions(){this.$router.back()},showNotif(t,e){this.$q.notify({message:t,color:e,actions:[{label:"Ok",color:"white",handler:()=>{}}]})},filterFn(t,e){e(()=>{if(""===t)this.options=this.categoryOptions;else{const e=t.toLowerCase();this.options=this.categoryOptions.filter(t=>t.toLowerCase().indexOf(e)>-1),console.log("val: "+t)}})},filterFn2(t,e){e(()=>{""!==t&&(this.productQuery=t,this.debouncedGetProducts())})},getProducts(){d["a"].searchProducts(this.productQuery).subscribe({next:t=>{if(console.log(t.results),console.log(t.results.length),this.productOptions.splice(0,this.productOptions.length),this.productIndex.splice(0,this.productIndex.length),t.results.length>0){for(let e=0;e<t.results.length;e++)this.productOptions.push(t.results[e].name),this.productIndex.push(t.results[e].id);this.options2=this.productOptions,console.log(this.productOptions)}},complete:()=>{console.log("[complete]")}})},isGreaterThanZero(t){return t>0?!!t:"Ingresar cantidad comprada"},backToPromotions(){this.$router.push({path:"promotions/"})},getImage(t){let e=new FileReader;e.readAsDataURL(t),e.onload=t=>{this.preview=t.target.result}},onRejected(t){this.$q.notify({type:"negative",message:"El archivo seleccionado no es de tipo imagen"})},showNotif(t,e){this.$q.notify({message:t,color:e,actions:[{label:"Ok",color:"white",handler:()=>{}}]})}},created:function(){this.debouncedGetProducts=s.a.debounce(this.getProducts,500)}}),m=u,h=(o("0c01"),o("2877")),g=o("9989"),f=o("9c40"),v=o("0378"),b=o("27f9"),x=o("7d53"),y=o("0016"),C=o("068f"),q=o("ddd8"),P=o("66e5"),w=o("4074"),k=o("eb85"),O=o("eebe"),$=o.n(O),N=Object(h["a"])(m,a,i,!1,null,null,null);e["default"]=N.exports;$()(N,"components",{QPage:g["a"],QBtn:f["a"],QForm:v["a"],QInput:b["a"],QFile:x["a"],QIcon:y["a"],QImg:C["a"],QSelect:q["a"],QItem:P["a"],QItemSection:w["a"],QSeparator:k["a"]})},fab5:function(t,e,o){"use strict";var a=o("e9b9"),i=o("a748");const r="panel/";class s{getCategories(t,e){return a["a"].create(o=>{i["a"].get(r+`categories/?limit=${t}&offset=${e}`).then(t=>{o.next(t.data),o.complete()}).catch(t=>{o.error(t)})})}getAllCategories(){return a["a"].create(t=>{i["a"].get(r+"categories/list-all").then(e=>{t.next(e.data),t.complete()}).catch(e=>{t.error(e)})})}createCategory(t){return a["a"].create(e=>{console.log(t),i["a"].post(r+"categories/save/",t,{headers:{"Content-Type":"multipart/form-data"}}).then(t=>{console.log(t),e.next(t.data),e.complete()}).catch(t=>{e.error(t)})})}getCategory(t){return a["a"].create(e=>{console.log("id: "+t),i["a"].get(r+`categories/${t}/`).then(t=>{e.next(t.data),e.complete()}).catch(t=>{e.error(t)})})}updateCategory(t,e){return a["a"].create(o=>{i["a"].put(r+`categories/${t}/`,e,{headers:{"Content-Type":"multipart/form-data"}}).then(t=>{console.log(),o.next(t.data),o.complete()}).catch(t=>{o.error(t)})})}deleteCategory(t){return a["a"].create(e=>{i["a"].delete(r+`categories/${t}/`).then(t=>{console.log("Entreee"),e.next(t.data),e.complete()}).catch(t=>{console.log("nooo Entreee",t),e.error(t)})})}}e["a"]=new s}}]);