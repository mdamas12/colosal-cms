(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"39b2":function(e,t,r){"use strict"},"4f5a":function(e,t,r){"use strict"},"560a":function(e,t,r){"use strict";var o=r("e9b9"),s=r("bc3a"),a=r.n(s);const i='"http://minimarketcolosal.com/api/"panel/';class c{getProducts(e,t){return o["a"].create(r=>{a.a.get(`products/?limit=${e}&offset=${t}`).then(e=>{r.next(e.data),r.complete()}).catch(e=>{r.error(e)})})}getAllProducts(){return o["a"].create(e=>{a.a.get(i+"products/").then(t=>{console.log(t.data),e.next(t.data),e.complete()}).catch(t=>{e.error(t)})})}searchProducts(e){return o["a"].create(t=>{a.a.get(i+`products/coincidence/${e}/`).then(e=>{t.next(e.data),t.complete()}).catch(e=>{t.error(e)})})}createProduct(e,t,r){return o["a"].create(o=>{a()({method:"post",url:i+"products/",data:e,headers:{"Content-Type":"multipart/form-data"}}).then(e=>{let s=e.data.id;0===Object.keys(t).length&&(o.next(e.data),o.complete()),a()({method:"post",url:i+"products/features/",data:{features:t,product:e.data.id}}).then(e=>{0===Object.keys(r).length&&(o.next(e.data),o.complete()),r.append("product",s),a()({method:"post",url:i+"products/gallery/",data:r,headers:{"Content-Type":"multipart/form-data"}}).then(e=>{o.next(e.data),o.complete()}).catch(e=>{console.log(e),o.error(e)})}).catch(e=>{console.log(e)})}).catch(e=>{console.log(e)})})}getProduct(e){return o["a"].create(t=>{console.log("id: "+e),a.a.get(i+`products/search/${e}/`).then(e=>{t.next(e.data),t.complete()}).catch(e=>{t.error(e)})})}updateProduct(e,t){return o["a"].create(r=>{a.a.put(i+`products/search/${t}/`,e).then(e=>{console.log(),r.next(e.data),r.complete()}).catch(e=>{r.error(e)})})}deleteProduct(e){return o["a"].create(t=>{a.a.delete(i+`products/search/${e}/`).then(e=>{console.log("Siiiiii"),t.next(e.data),t.complete()}).catch(e=>{console.log(e.response.data),t.error(e)})})}getDetailProduct(e){return o["a"].create(t=>{a.a.get(i+`products/product-detail/${e}/`).then(e=>{console.log(),t.next(e.data),t.complete()}).catch(e=>{t.error(e)})})}deleteDetailProduct(e){return o["a"].create(t=>{a.a.delete(i+`products/product-detail/${e}/`).then(e=>{console.log(),t.next(e.data),t.complete()}).catch(e=>{t.error(e)})})}}t["a"]=new c},"6c5b":function(e,t,r){"use strict";var o=r("e9b9"),s=r("bc3a"),a=r.n(s);r("39b2");const i='"http://minimarketcolosal.com/api/"panel/';class c{getSupplyOrders(e,t){return o["a"].create(r=>{a.a.get(i+`purchases/list?limit=${e}&offset=${t}`).then(e=>{r.next(e.data),r.complete()}).catch(e=>{r.error(e)})})}createSupplyOrder(e){return o["a"].create(t=>{a.a.post(i+"purchases/",{purchase:e.purchase,products:e.detail}).then(e=>{console.log(e),t.complete()}).catch(e=>{t.error(e)})})}getSupplyOrder(e){return o["a"].create(t=>{console.log("id: "+e),a.a.get(i+`purchases/detail/${e}/`).then(e=>{t.next(e.data),t.complete()}).catch(e=>{t.error(e)})})}updateSupplyOrder(e,t){return o["a"].create(r=>{a.a.put(i+`purchases/detail/${t}/`,{purchase:e.purchase,products:e.products}).then(e=>{console.log(),r.complete()}).catch(e=>{r.error(e)})})}deleteSupplyOrder(e){return o["a"].create(t=>{a.a.delete(i+`purchases/${e}/`).then(e=>{console.log(),t.complete()}).catch(e=>{t.error(e)})})}}t["a"]=new c},"89b8":function(e,t,r){"use strict";var o=r("e9b9"),s=r("bc3a"),a=r.n(s);r("4f5a");const i='"http://minimarketcolosal.com/api/"panel/';class c{getSuppliers(e,t){return o["a"].create(r=>{a.a.get(i+`providers/?limit=${e}&offset=${t}`).then(e=>{r.next(e.data),r.complete()}).catch(e=>{r.error(e)})})}createSupplier(e){return o["a"].create(t=>{a.a.post(i+"providers/",{name:e.name,address:e.address,email:e.email,number:e.number,agent:e.agent}).then(e=>{console.log(e),t.next(e.data),t.complete()}).catch(e=>{t.error(e)})})}getSupplier(e){return o["a"].create(t=>{console.log("id: "+e),a.a.get(i+`providers/${e}/`).then(e=>{t.next(e.data),t.complete()}).catch(e=>{t.error(e)})})}searchSuppliers(e){return o["a"].create(t=>{a.a.get(i+`providers/search/${e}/`).then(e=>{t.next(e.data),t.complete()}).catch(e=>{t.error(e)})})}updateSupplier(e){return o["a"].create(t=>{a.a.put(i+`providers/${e.id}/`,{name:e.name,address:e.address,email:e.email,number:e.number,agent:e.agent}).then(e=>{console.log(),t.next(e.data),t.complete()}).catch(e=>{t.error(e)})})}deleteSupplier(e){return o["a"].create(t=>{a.a.delete(i+`providers/${e}/`).then(e=>{console.log(e),t.next(e.data),t.complete()}).catch(e=>{t.error(e)})})}}t["a"]=new c},b72a:function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("q-page",[r("div",{staticClass:"col-md-12 col-xs-12 q-pa-sm"},[r("div",{staticClass:"q-pa-sm"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col",staticStyle:{"max-width":"40px"}},[r("q-btn",{staticStyle:{color:"#9E9E9E"},attrs:{flat:"",round:"",icon:"keyboard_backspace"},on:{click:function(t){return e.$router.back()}}})],1),r("div",{staticClass:"col2"},[r("h5",{staticClass:"vertical-top col2 text-indigo-10 text-weight-bolder q-pa-sm",staticStyle:{"margin-top":"-3px"}},[e._v("\n                    Crear Compra a Proveedor\n                ")])]),r("div",{staticClass:"col"},[r("q-btn",{staticClass:"q-pa-xs float-right",attrs:{color:"red-10",label:"Crear Orden",loading:e.loading},on:{click:function(t){return e.checkSupplyOrder()}}})],1)]),r("div",{staticClass:"q-pa-lg"},[r("div",{staticClass:"row q-mb-md"},[r("div",{staticClass:"col q-mr-md"},[r("q-input",{attrs:{outlined:"",label:"Referencia",color:"dark","lazy-rules":"",rules:[function(e){return!!e||"Debe ingresar el No. de referencia"}]},model:{value:e.order.purchase.invoice,callback:function(t){e.$set(e.order.purchase,"invoice",t)},expression:"order.purchase.invoice"}})],1),r("div",{staticClass:"col"},[r("q-input",{attrs:{outlined:"",type:"date",color:"dark",hint:"Fecha de Compra","lazy-rules":"",rules:[function(e){return!!e||"Debe ingresar la fecha de compra"}]},model:{value:e.order.purchase.date,callback:function(t){e.$set(e.order.purchase,"date",t)},expression:"order.purchase.date"}},[r("q-tooltip",{attrs:{"content-class":"bg-grey-8",anchor:"top left",self:"bottom left",offset:[0,8]}},[e._v("Fecha de compra")])],1)],1)]),r("div",{staticClass:"row q-mb-lg"},[r("div",{staticClass:"col q-mr-md"},[r("q-input",{attrs:{outlined:"",autogrow:"",color:"dark",label:"Descripción"},model:{value:e.order.purchase.description,callback:function(t){e.$set(e.order.purchase,"description",t)},expression:"order.purchase.description"}})],1),r("div",{staticClass:"col"},[r("q-select",{attrs:{outlined:"","use-input":"","hide-selected":"","fill-input":"",color:"dark","input-debounce":"0",label:"Proveedor",loading:e.searchingSupplier,hint:e.supplierHint,options:e.options,rules:[function(e){return!!e||"Debe ingresar algún proveedor"}]},on:{filter:e.filterFn,input:function(t){return e.setSupplier()}},scopedSlots:e._u([{key:"no-option",fn:function(){return[r("q-item",[r("q-item-section",{staticClass:"text-grey"},[e._v("\n                        No results\n                      ")])],1)]},proxy:!0}]),model:{value:e.supplierNameModel,callback:function(t){e.supplierNameModel=t},expression:"supplierNameModel"}})],1)]),r("div",{staticClass:"row"},[r("div",{staticClass:"col q-mr-md"},[r("q-select",{attrs:{outlined:"",options:e.currencyOptions,label:"Moneda",rules:[function(e){return!!e||"Debe seleccionar alguna moneda"}]},model:{value:e.order.purchase.coin,callback:function(t){e.$set(e.order.purchase,"coin",t)},expression:"order.purchase.coin"}})],1),r("div",{staticClass:"col"},[r("q-input",{attrs:{outlined:"",color:"dark",label:"Costo total",mask:"#.##","fill-mask":"0",prefix:e.order.purchase.coin,"reverse-fill-mask":"",hint:"Mask: #.##","input-class":"text-right",rules:[function(e){return!!e||"Debe ingresar el monto total"},e.isGreaterThanZero]},model:{value:e.order.purchase.amount,callback:function(t){e.$set(e.order.purchase,"amount",t)},expression:"order.purchase.amount"}})],1)]),r("br"),r("q-separator",{attrs:{inset:""}}),r("h5",{staticClass:"vertical-top col2 text-indigo-10 text-weight-bolder q-pa-sm q-mt-md",staticStyle:{"margin-top":"-3px"}},[e._v("\n                Detalle de Productos\n            ")]),r("div",{staticClass:"q-gutter-md"},e._l(this.order.detail,(function(t,o){return r("div",[r("div",{staticClass:"row justify-evenly items-center"},[r("div",{staticClass:"col-10"},[r("div",{staticClass:"row q-mb-md"},[r("div",{staticClass:"col"},[r("q-select",{attrs:{outlined:"",color:"dark","use-input":"","hide-selected":"","fill-input":"","input-debounce":"0",label:"Producto",options:e.options2,rules:[function(e){return!!e||"Debe seleccionar algún producto"}]},on:{filter:e.filterFn2,input:function(t){return e.getProductInfo(e.productNameModel[o],o)}},scopedSlots:e._u([{key:"no-option",fn:function(){return[r("q-item",[r("q-item-section",{staticClass:"text-grey"},[e._v("\n                                No results\n                              ")])],1)]},proxy:!0}],null,!0),model:{value:e.productNameModel[o],callback:function(t){e.$set(e.productNameModel,o,t)},expression:"productNameModel[index]"}})],1),r("div",{staticClass:"col q-mx-sm"},[r("q-input",{attrs:{label:"Precio",mask:"#.##",color:"dark","fill-mask":"0","reverse-fill-mask":"","input-class":"text-right",outlined:"",rules:[function(e){return!!e||"Ingresar el costo del producto"},e.isGreaterThanZero]},model:{value:e.order.detail[o].purchase_price,callback:function(t){e.$set(e.order.detail[o],"purchase_price",e._n(t))},expression:"order.detail[index].purchase_price"}})],1),r("div",{staticClass:"col"},[r("q-input",{attrs:{color:"dark",type:"number",label:"Cantidad",outlined:"",rules:[function(e){return!!e||"Ingresar la cantidad comprada"},e.isGreaterThanZero]},model:{value:e.order.detail[o].purchase_quantity,callback:function(t){e.$set(e.order.detail[o],"purchase_quantity",e._n(t))},expression:"order.detail[index].purchase_quantity"}})],1)]),r("div",{staticClass:"row"},[r("div",{staticClass:"col q-mr-md"},[r("q-input",{attrs:{color:"dark",type:"number",label:"Unidades Recibidas",outlined:""},model:{value:e.order.detail[o].purchase_Received,callback:function(t){e.$set(e.order.detail[o],"purchase_Received",e._n(t))},expression:"order.detail[index].purchase_Received"}})],1),r("div",{staticClass:"col"},[r("q-select",{attrs:{outlined:"",color:"dark",options:e.statusOptions,label:"Estatus",rules:[function(e){return!!e||"Ingresar el costo del producto"}]},model:{value:e.order.detail[o].status,callback:function(t){e.$set(e.order.detail[o],"status",t)},expression:"order.detail[index].status"}})],1)])]),r("div",{staticClass:"col-1 self-center"},[r("div",{staticClass:"column items-center"},[r("q-btn",{attrs:{flat:"",round:"",color:"red-10",icon:"delete"},on:{click:function(t){return e.removeProduct(o)}}})],1)])]),r("div",{staticClass:"row q-my-lg"},[r("q-separator",{attrs:{inset:""}})],1)])})),0),r("br"),r("q-btn",{attrs:{flat:"",round:"",color:"indigo-10",icon:"add"},on:{click:function(t){return e.addProduct()}}})],1)])])])},s=[],a=(r("c975"),r("a434"),r("2ef0")),i=r.n(a),c=r("2b0e"),l=r("6c5b"),n=r("89b8"),d=r("560a"),u=c["default"].extend({data(){return{order:{purchase:{date:"",description:"",invoice:"",coin:"",amount:"",provider:0},detail:[{product:0,purchase_price:0,purchase_quantity:0,purchase_Received:0,status:""}]},supplierHint:"",supplierQuery:"",searchingSupplier:!1,loading:!1,supplierOptions:[],supplierIndex:[],options:[],productOptions:[],productIndex:[],productPrices:[],options2:[],currencyOptions:["USD","BS"],statusOptions:["COMPLETE"],supplierNameModel:"",productNameModel:[]}},methods:{addProduct(){this.order.detail.push({product:0,purchase_price:0,purchase_quantity:0,purchase_Received:0,status:""}),this.productNameModel.push("")},getProductInfo(e,t){console.log("user input: "+e+"\nposition: "+this.productOptions.indexOf(e)),this.productOptions.indexOf(e)>=0&&(this.order.detail[t].product=this.productIndex[this.productOptions.indexOf(e)],this.order.detail[t].purchase_price=parseFloat(this.productPrices[this.productOptions.indexOf(e)])),console.log(this.order.detail)},removeProduct(e){this.order.detail.length>0&&(this.order.detail.splice(e,1),this.productNameModel.splice(e,1))},checkSupplyOrder(){if(""!==this.supplierNameModel)if(""!==this.order.purchase.date)if(""!=this.order.purchase.invoice)if(""!==this.order.purchase.coin)if(""!==this.order.purchase.amount){for(var e=0;e<this.order.detail.length;e++){if(""===this.productNameModel[e])return void this.showNotif("Falta información del producto "+e,"red-10");if(!this.order.detail[e].purchase_price>0)return void this.showNotif(`Especificar el costo de ${this.productNameModel[e]}s`,"red-10");if(!this.order.detail[e].purchase_quantity>0)return void this.showNotif(`Especificar cantidad de ${this.productNameModel[e]}s`,"red-10")}this.createSupplyOrder()}else this.showNotif("Proveer monto total","red-10");else this.showNotif("Seleccionar tipo de moneda","red-10");else this.showNotif("Ingresar número de factura","red-10");else this.showNotif("Ingresar fecha de compra","red-10");else this.showNotif("Ingresar nombre de proveedor","red-10")},createSupplyOrder(){console.log("JSON.stringify(this.order): \n"+JSON.stringify(this.order)),this.loading=!0,l["a"].createSupplyOrder(this.order).subscribe({complete:()=>{this.loading=!1,this.showNotif("Compra creada exitosamente","indigo-10"),setTimeout(this.$router.back(),1e3)}})},backToSupplyOrders(){this.$router.back()},isGreaterThanZero(e){return NaN!=parseNumber(e)&&parseNumber(e)>0?!!e:"Número debe ser mayor que cero"},showNotif(e,t){this.$q.notify({message:e,color:t,actions:[{label:"Dismiss",color:"white",handler:()=>{}}]})},filterFn(e,t){t(()=>{""!==e?(this.supplierHint="Esperando a que termine de escribir",this.supplierQuery=e,this.debouncedGetSupplier()):this.supplierHint="Ingrese el correo del suppliere"})},getSuppliers(){this.searchingSupplier=!0,this.supplierHint="Solicitando...",n["a"].searchSuppliers(this.supplierQuery).subscribe({next:e=>{if(console.log(e),this.supplierOptions.splice(0,this.supplierOptions.length),this.supplierIndex.splice(0,this.supplierIndex.length),e.length>0){for(let t=0;t<e.length;t++)this.supplierOptions.push(e[t].name),this.supplierIndex.push(e[t].id),this.supplierHint="Recibido";this.options=this.supplierOptions}else this.supplierHint="No se encontraron resultados"},complete:()=>{this.searchingSupplier=!1}})},setSupplier(){this.order.purchase.provider=this.supplierOptions.indexOf(this.supplierNameModel)>=0?this.supplierIndex[this.supplierOptions.indexOf(this.supplierNameModel)]:null},filterFn2(e,t){t(()=>{""!==e&&(this.productQuery=e,this.debouncedGetProducts())})},getProducts(){d["a"].searchProducts(this.productQuery).subscribe({next:e=>{if(console.log(e.results),console.log(e.results.length),this.productOptions.splice(0,this.productOptions.length),this.productIndex.splice(0,this.productIndex.length),e.results.length>0){for(let t=0;t<e.results.length;t++)this.productOptions.push(e.results[t].name),this.productIndex.push(e.results[t].id),this.productPrices.push(e.results[t].price);this.options2=this.productOptions,console.log(this.productOptions)}},complete:()=>{console.log("[complete]")}})},isGreaterThanZero(e){return e>0?!!e:"Ingresar cantidad comprada"}},created:function(){this.debouncedGetSupplier=i.a.debounce(this.getSuppliers,500),this.debouncedGetProducts=i.a.debounce(this.getProducts,500)}}),p=u,h=r("2877"),m=r("9989"),f=r("9c40"),g=r("27f9"),b=r("05c0"),v=r("ddd8"),x=r("66e5"),y=r("4074"),k=r("eb85"),q=r("eebe"),O=r.n(q),C=Object(h["a"])(p,o,s,!1,null,null,null);t["default"]=C.exports;O()(C,"components",{QPage:m["a"],QBtn:f["a"],QInput:g["a"],QTooltip:b["a"],QSelect:v["a"],QItem:x["a"],QItemSection:y["a"],QSeparator:k["a"]})}}]);