(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{1:function(e,t){},2:function(e,t){},"2f43":function(e,t,a){"use strict"},"441c":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",[a("div",{staticClass:"col-md-12 col-xs-12 q-pa-sm"},[a("div",{staticClass:"q-pa-sm"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col2"},[a("q-btn",{staticClass:"text-indigo-10",attrs:{flat:"",round:"",icon:"keyboard_backspace"},on:{click:function(t){return e.$router.back()}}})],1),a("h5",{staticClass:"vertical-top col2 text-indigo-10 text-weight-bolder q-pa-sm",staticStyle:{"margin-top":"-3px"}},[e._v("\n                  Crear Producto\n              ")])]),a("form",{staticClass:"q-gutter-md  q-mx-lg",on:{submit:function(t){return t.preventDefault(),t.stopPropagation(),e.onSubmit(t)},reset:function(t){return t.preventDefault(),t.stopPropagation(),e.onReset(t)}}},[a("div",{staticClass:"form-section"},[a("q-form",{ref:"myForm"},[a("q-input",{ref:"productName",attrs:{label:"Nombre",color:"red-10",outlined:"","lazy-rules":"",rules:[function(e){return e&&e.length>0||"No debe dejar el campo vacio"}]},model:{value:e.productName,callback:function(t){e.productName=t},expression:"productName"}}),a("br"),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("q-select",{ref:"productCategory",attrs:{options:e.optionsCategories,outlined:"",color:"red-10",label:"Categoría","option-value":"id","option-label":"name","map-options":"","lazy-rules":"",rules:[function(e){return null!==e&&""!==e||"Debe seleccionar una categoria"}]},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-btn",{attrs:{round:"",dense:"",flat:"",icon:"add"},on:{click:function(t){t.stopPropagation(),e.showAddCategory=!0}}})]},proxy:!0}]),model:{value:e.productCategory,callback:function(t){e.productCategory=t},expression:"productCategory"}})],1),a("div",{staticClass:"col q-ml-md"},[a("q-select",{ref:"productBrand",attrs:{options:e.optionsBrands,label:"Marca",outlined:"",color:"red-10","option-value":"id","option-label":"name","map-options":"","lazy-rules":"",rules:[function(e){return null!==e&&""!==e||"Debe seleccionar una marca"}]},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-btn",{attrs:{round:"",dense:"",flat:"",icon:"add"},on:{click:function(t){t.stopPropagation(),e.showAddBrand=!0}}})]},proxy:!0}]),model:{value:e.productBrand,callback:function(t){e.productBrand=t},expression:"productBrand"}})],1)])])]),a("br"),a("q-input",{ref:"productDescription",attrs:{label:"Descripción",outlined:"",color:"red-10","lazy-rules":"",rules:[function(e){return e&&e.length>0||"No debe dejar el campo vacio"}]},model:{value:e.productDescription,callback:function(t){e.productDescription=t},expression:"productDescription"}}),a("br"),a("q-file",{ref:"productImage",attrs:{label:"Imagen de Portada",color:"indigo-10",outlined:"","lazy-rules":"",rules:[function(e){return null!==e&&""!==e||"Debe seleccionar una imagen"}]},scopedSlots:e._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"attach_file"}})]},proxy:!0}]),model:{value:e.productImage,callback:function(t){e.productImage=t},expression:"productImage"}}),a("br"),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("div",{staticClass:"row"},[a("q-input",{ref:"productPrice",staticClass:"col",attrs:{label:"Precio",mask:"#.##","fill-mask":"0","reverse-fill-mask":"","input-class":"text-right",outlined:"",color:"red-10","lazy-rules":"",rules:[function(e){return e&&e.length>0||"No debe dejar el campo vacio"}]},model:{value:e.productPrice,callback:function(t){e.productPrice=t},expression:"productPrice"}}),a("q-select",{ref:"productCoin",staticClass:"col q-mx-md",attrs:{options:e.optionsMoneda,label:"Moneda",outlined:"",color:"red-10","lazy-rules":"",rules:[function(e){return e&&e.length>0||"No debe dejar el campo vacio"}]},model:{value:e.productCoin,callback:function(t){e.productCoin=t},expression:"productCoin"}}),a("q-input",{ref:"productQuantity",staticClass:"col",attrs:{type:"number",label:"Cantidad",outlined:"",color:"red-10","lazy-rules":"",rules:[function(e){return e&&e.length>0||"No debe dejar el campo vacio"}]},model:{value:e.productQuantity,callback:function(t){e.productQuantity=t},expression:"productQuantity"}})],1)])])],1),a("q-dialog",{attrs:{persistent:""},model:{value:e.showAddCategory,callback:function(t){e.showAddCategory=t},expression:"showAddCategory"}},[a("q-card",{staticStyle:{"max-width":"100%",width:"350px"}},[a("q-toolbar",{staticClass:"bg-indigo-10 text-white"},[a("q-toolbar-title",[e._v("\n                      Categoría\n                    ")]),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",icon:"close",round:""}})],1),a("q-card-section",[a("q-input",{attrs:{label:"Ingrese nueva categoría",color:"grey-10"},model:{value:e.newCategoryName.name,callback:function(t){e.$set(e.newCategoryName,"name",t)},expression:"newCategoryName.name"}})],1),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{attrs:{flat:"",color:"red-10"},on:{click:function(t){return e.addCategorie()}}},[e._v("Agregar")])],1)],1)],1),a("q-dialog",{attrs:{persistent:""},model:{value:e.showAddBrand,callback:function(t){e.showAddBrand=t},expression:"showAddBrand"}},[a("q-card",{staticStyle:{"max-width":"100%",width:"350px"}},[a("q-toolbar",{staticClass:"bg-indigo-10 text-white"},[a("q-toolbar-title",[e._v("\n                    Marca\n                  ")]),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",icon:"close",round:""}})],1),a("q-card-section",[a("q-input",{attrs:{label:"Ingrese nueva marca",color:"grey-10"},model:{value:e.newBrandName.name,callback:function(t){e.$set(e.newBrandName,"name",t)},expression:"newBrandName.name"}})],1),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{attrs:{flat:"",color:"red-10"},on:{click:function(t){return e.addBrand()}}},[e._v("Agregar")])],1)],1)],1),a("q-dialog",{attrs:{persistent:""},model:{value:e.showAddFeature,callback:function(t){e.showAddFeature=t},expression:"showAddFeature"}},[a("q-card",{staticStyle:{"max-width":"100%",width:"350px"}},[a("q-toolbar",{staticClass:"bg-indigo-10 text-white"},[a("q-toolbar-title",[e._v("\n                    Característica\n                  ")]),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",icon:"close",round:""}})],1),a("q-card-section",[a("q-input",{attrs:{label:"Ingrese nueva característica",color:"grey-10"},model:{value:e.newFeatureName.name,callback:function(t){e.$set(e.newFeatureName,"name",t)},expression:"newFeatureName.name"}})],1),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{attrs:{flat:"",color:"red-10"},on:{click:function(t){return e.addFeature()}}},[e._v("Agregar")])],1)],1)],1),a("br"),e._l(e.items,(function(t,r){return a("div",{key:t.id,staticClass:"row q-mt-md"},[a("div",{staticClass:"col"},[a("q-select",{attrs:{options:e.optionsFeatures,outlined:"",color:"red-10",label:"Caracteristica","option-value":"id","option-label":"name","map-options":""},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-btn",{attrs:{round:"",dense:"",flat:"",icon:"add"},on:{click:function(t){t.stopPropagation(),e.showAddFeature=!0}}})]},proxy:!0}],null,!0),model:{value:t.characteristic,callback:function(a){e.$set(t,"characteristic",a)},expression:"item.characteristic"}})],1),a("div",{staticClass:"col q-ml-md"},[a("q-input",{attrs:{label:"Valor",color:"red-10",outlined:""},model:{value:t.description,callback:function(a){e.$set(t,"description",a)},expression:"item.description"}})],1),a("div",{staticClass:"col"},[a("q-btn",{staticClass:"q-ml-md q-mt-sm",attrs:{round:"",color:"primary",icon:"close"},on:{click:function(t){return e.removeCharacteristic(r)}}})],1)])})),a("br"),e._l(e.images,(function(t,r){return a("div",{key:t.id,staticClass:"row"},[a("div",{staticClass:"col-md-6 col-xs-12"},[a("q-file",{attrs:{label:"Imagen Galeria",color:"indigo-10",outlined:""},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{attrs:{name:"attach_file"}})]},proxy:!0}],null,!0),model:{value:t.image,callback:function(a){e.$set(t,"image",a)},expression:"itemI.image"}})],1),a("div",{staticClass:"col"},[a("q-btn",{staticClass:"q-ml-md q-mt-sm",attrs:{round:"",color:"primary",icon:"close"},on:{click:function(t){return e.removeImege(r)}}})],1)])})),a("br")],2),a("div",{staticClass:"row"},[a("q-btn",{staticClass:"q-pa-xs q-mt-md q-mr-md ",attrs:{color:"indigo-10",type:"submit",label:"Crear Producto"}}),a("q-btn",{staticClass:"q-pa-xs q-mt-md q-mr-md ",attrs:{color:"secondary",label:"Agregar Características"},on:{click:function(t){return e.pushDetail()}}}),a("q-btn",{staticClass:"q-pa-xs q-mt-md q-mr-md ",attrs:{color:"red-10",label:"Agregar Imágenes"},on:{click:function(t){return e.pushImagenes()}}})],1)])])])])},o=[],n=(a("a434"),a("ddb0"),a("2b0e")),c=a("560a"),s=a("c0f4"),i=a("97da"),l=a("fab5"),d=a("bc3a"),u=a.n(d),p=(a("983a"),a("f508")),m=(a("9490"),n["default"].extend({data(){var e=null,t=null,a=null;return{product:{name:"",description:"",image:"",price:null,coin:"",category:null,brand:null,count:null},productName:"",productBrand:t,productCategory:e,productFeature:a,productDescription:"",productImage:null,productImages:null,productPrice:null,productCoin:null,productQuantity:null,newCategoryName:{name:""},newBrandName:{name:""},newFeatureName:{name:""},selected:"",optionsBrands:[],optionsCategories:[],optionsFeatures:[],valueBrands:"",valueCategories:"",valueFeatures:"",limit:25,offset:0,name:"",model:null,optionsMoneda:["USD","BS"],text:"",dense:!1,denseOpts:!1,precio:0,description:"",showAddCategory:!1,showAddBrand:!1,showAddFeature:!1,modelCantidad:"",nameProducto:"",moneda:"",image:"",selectedFile:null,showInput:!1,items:new Array,item:{},images:new Array,itemI:{}}},mounted(){const e=this;e.onRequest()},methods:{onRequest(){i["a"].getBrands(this.limit,this.offset).subscribe({next:e=>{this.optionsBrands=e.results}}),l["a"].getCategories(this.limit,this.offset).subscribe({next:e=>{this.optionsCategories=e.results}}),s["a"].getFeatures(this.limit,this.offset).subscribe({next:e=>{this.optionsFeatures=e.results}})},addBrand(){i["a"].createBrand(this.newBrandName).subscribe({next:()=>{setTimeout(()=>this.backToProducts(),500)},complete:()=>console.log("completado")})},addCategorie(){l["a"].createCategory(this.newCategoryName).subscribe({next:()=>{setTimeout(()=>this.backToProducts(),500)},complete:()=>console.log("completado")})},addFeature(){s["a"].createFeature(this.newFeatureName).subscribe({next:()=>{setTimeout(()=>this.backToProducts(),500)},complete:()=>console.log("[complete]")})},onSubmit(){this.$refs.productName.validate(),this.$refs.productCategory.validate(),this.$refs.productBrand.validate(),this.$refs.productDescription.validate(),this.$refs.productImage.validate(),this.$refs.productPrice.validate(),this.$refs.productCoin.validate(),this.$refs.productQuantity.validate(),this.$refs.productName.hasError||this.$refs.productCategory.hasError||this.$refs.productBrand.hasError||this.$refs.productDescription.hasError||this.$refs.productImage.hasError||this.$refs.productPrice.hasError||this.$refs.productCoin.hasError||this.$refs.productQuantity.hasError?this.formHasError=!0:this.createProduct()},createProduct(){let e=this;const t=new FormData,a=new FormData;new FormData;a.append("name",e.productName),a.append("description",e.productDescription),a.append("image",e.productImage),a.append("price",e.productPrice),a.append("coin",e.productCoin),a.append("brand",e.productBrand.id),a.append("category",e.productCategory.id),a.append("quantity",e.productQuantity);let r=0;for(let o of e.images)t.append("image["+r+"]",o.image),r++;console.log(a);c["a"].createProduct(a,e.items,t).subscribe({complete:()=>{p["a"].hide(),this.$router.back()}})},productos(){u.a.get("http://localhost:8000/panel/features/").then(e=>{console.log(e.data)}).catch(e=>{console.log(e)})},showHide(){this.showInput=!this.showInput},pushDetail(){this.item={characteristic:null,description:""},this.items.push(this.item)},pushImagenes(){this.itemI={image:null},this.images.push(this.itemI)},backToProducts(){this.$router.back()},removeCharacteristic(e){this.items.splice(e,1)},removeImege(e){this.images.splice(e,1)}}})),g=m,h=a("2877"),f=a("9989"),b=a("9c40"),C=a("0378"),v=a("27f9"),x=a("ddd8"),y=a("7d53"),q=a("0016"),w=a("24e8"),k=a("f09f"),$=a("65c6"),P=a("6ac5"),B=a("a370"),N=a("4b7e"),F=a("7f67"),I=a("eebe"),A=a.n(I),D=Object(h["a"])(g,r,o,!1,null,null,null);t["default"]=D.exports;A()(D,"components",{QPage:f["a"],QBtn:b["a"],QForm:C["a"],QInput:v["a"],QSelect:x["a"],QFile:y["a"],QIcon:q["a"],QDialog:w["a"],QCard:k["a"],QToolbar:$["a"],QToolbarTitle:P["a"],QCardSection:B["a"],QCardActions:N["a"]}),A()(D,"directives",{ClosePopup:F["a"]})},"560a":function(e,t,a){"use strict";var r=a("e9b9"),o=a("bc3a"),n=a.n(o);const c='"http://minimarketcolosal.com/api/"panel/';class s{getProducts(e,t){return r["a"].create(a=>{n.a.get(c+`products/?limit=${e}&offset=${t}`).then(e=>{a.next(e.data),a.complete()}).catch(e=>{a.error(e)})})}getAllProducts(){return r["a"].create(e=>{n.a.get(c+"products/").then(t=>{console.log(t.data),e.next(t.data),e.complete()}).catch(t=>{e.error(t)})})}searchProducts(e){return r["a"].create(t=>{n.a.get(c+`products/coincidence/${e}/`).then(e=>{t.next(e.data),t.complete()}).catch(e=>{t.error(e)})})}createProduct(e,t,a){return r["a"].create(r=>{n()({method:"post",url:c+"products/",data:e,headers:{"Content-Type":"multipart/form-data"}}).then(e=>{let o=e.data.id;0===Object.keys(t).length&&(r.next(e.data),r.complete()),n()({method:"post",url:c+"products/features/",data:{features:t,product:e.data.id}}).then(e=>{0===Object.keys(a).length&&(r.next(e.data),r.complete()),a.append("product",o),n()({method:"post",url:c+"products/gallery/",data:a,headers:{"Content-Type":"multipart/form-data"}}).then(e=>{r.next(e.data),r.complete()}).catch(e=>{console.log(e),r.error(e)})}).catch(e=>{console.log(e)})}).catch(e=>{console.log(e)})})}getProduct(e){return r["a"].create(t=>{console.log("id: "+e),n.a.get(c+`products/search/${e}/`).then(e=>{t.next(e.data),t.complete()}).catch(e=>{t.error(e)})})}updateProduct(e,t){return r["a"].create(a=>{n.a.put(c+`products/search/${t}/`,e).then(e=>{console.log(),a.next(e.data),a.complete()}).catch(e=>{a.error(e)})})}deleteProduct(e){return r["a"].create(t=>{n.a.delete(c+`products/search/${e}/`).then(e=>{console.log("Siiiiii"),t.next(e.data),t.complete()}).catch(e=>{console.log(e.response.data),t.error(e)})})}getDetailProduct(e){return r["a"].create(t=>{n.a.get(c+`products/product-detail/${e}/`).then(e=>{console.log(),t.next(e.data),t.complete()}).catch(e=>{t.error(e)})})}deleteDetailProduct(e){return r["a"].create(t=>{n.a.delete(c+`products/product-detail/${e}/`).then(e=>{console.log(),t.next(e.data),t.complete()}).catch(e=>{t.error(e)})})}}t["a"]=new s},"97da":function(e,t,a){"use strict";var r=a("e9b9"),o=a("bc3a"),n=a.n(o);a("2f43");const c='"http://minimarketcolosal.com/api/"panel/';class s{getBrands(e,t){return r["a"].create(a=>{n.a.get(c+`brands/?limit=${e}&offset=${t}`).then(e=>{a.next(e.data),a.complete()}).catch(e=>{a.error(e)})})}createBrand(e){return r["a"].create(t=>{n.a.post(c+"brands/",{name:e.name}).then(e=>{console.log(e),t.next(e.data),t.complete()}).catch(e=>{t.error(e)})})}getBrand(e){return r["a"].create(t=>{console.log("id: "+e),n.a.get(c+`brands/${e}/`).then(e=>{t.next(e.data),t.complete()}).catch(e=>{t.error(e)})})}updateBrand(e){return r["a"].create(t=>{n.a.put(c+`brands/${e.id}/`,{name:e.name}).then(e=>{t.next(e.data),t.complete()}).catch(e=>{t.error(e)})})}deleteBrand(e){return r["a"].create(t=>{n.a.delete(c+`brands/${e}/`).then(e=>{console.log(),t.complete()}).catch(e=>{t.error(e)})})}}t["a"]=new s},"983a":function(e,t,a){"use strict"},c0f4:function(e,t,a){"use strict";var r=a("e9b9"),o=a("bc3a"),n=a.n(o);const c='"http://minimarketcolosal.com/api/"panel/';class s{getFeatures(e,t){return r["a"].create(a=>{n.a.get(c+`features/?limit=${e}&offset=${t}`).then(e=>{a.next(e.data),a.complete()}).catch(e=>{a.error(e)})})}createFeature(e){return r["a"].create(t=>{n.a.post(c+"features/",{name:e.name}).then(e=>{console.log(e),t.next(e.data),t.complete()}).catch(e=>{t.error(e)})})}getFeature(e){return r["a"].create(t=>{console.log("id: "+e),n.a.get(c+`features/${e}/`).then(e=>{t.next(e.data),t.complete()}).catch(e=>{t.error(e)})})}updateFeature(e){return r["a"].create(t=>{n.a.put(c+`features/${e.id}/`,{name:e.name}).then(e=>{console.log(e),t.next(e.data),t.complete()}).catch(e=>{t.error(e)})})}deleteFeature(e){return r["a"].create(t=>{n.a.delete(c+`features/${e}/`).then(e=>{console.log(e),t.next(e.data),t.complete()}).catch(e=>{t.error(e)})})}}t["a"]=new s},fab5:function(e,t,a){"use strict";var r=a("e9b9"),o=a("bc3a"),n=a.n(o);const c='"http://minimarketcolosal.com/api/"panel/';class s{getCategories(e,t){return r["a"].create(a=>{n.a.get(c+`categories/?limit=${e}&offset=${t}`).then(e=>{a.next(e.data),a.complete()}).catch(e=>{a.error(e)})})}getAllCategories(){return r["a"].create(e=>{n.a.get(c+"categories/list-all").then(t=>{e.next(t.data),e.complete()}).catch(t=>{e.error(t)})})}createCategory(e){return r["a"].create(t=>{console.log(e),n.a.post(c+"categories/save/",e,{headers:{"Content-Type":"multipart/form-data"}}).then(e=>{console.log(e),t.next(e.data),t.complete()}).catch(e=>{t.error(e)})})}getCategory(e){return r["a"].create(t=>{console.log("id: "+e),n.a.get(c+`categories/${e}/`).then(e=>{t.next(e.data),t.complete()}).catch(e=>{t.error(e)})})}updateCategory(e,t){return r["a"].create(a=>{n.a.put(c+`categories/${e}/`,t,{headers:{"Content-Type":"multipart/form-data"}}).then(e=>{console.log(),a.next(e.data),a.complete()}).catch(e=>{a.error(e)})})}deleteCategory(e){return r["a"].create(t=>{n.a.delete(c+`categories/${e}/`).then(e=>{console.log("Entreee"),t.next(e.data),t.complete()}).catch(e=>{console.log("nooo Entreee",e),t.error(e)})})}}t["a"]=new s}}]);