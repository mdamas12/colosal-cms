(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"2f43":function(t,e,a){"use strict"},"560a":function(t,e,a){"use strict";var r=a("e9b9"),o=a("bc3a"),c=a.n(o);const s='"http://minimarketcolosal.com/api/"panel/';class n{getProducts(t,e){return r["a"].create(a=>{c.a.get(`products/?limit=${t}&offset=${e}`).then(t=>{a.next(t.data),a.complete()}).catch(t=>{a.error(t)})})}getAllProducts(){return r["a"].create(t=>{c.a.get(s+"products/").then(e=>{console.log(e.data),t.next(e.data),t.complete()}).catch(e=>{t.error(e)})})}searchProducts(t){return r["a"].create(e=>{c.a.get(s+`products/coincidence/${t}/`).then(t=>{e.next(t.data),e.complete()}).catch(t=>{e.error(t)})})}createProduct(t,e,a){return r["a"].create(r=>{c()({method:"post",url:s+"products/",data:t,headers:{"Content-Type":"multipart/form-data"}}).then(t=>{let o=t.data.id;0===Object.keys(e).length&&(r.next(t.data),r.complete()),c()({method:"post",url:s+"products/features/",data:{features:e,product:t.data.id}}).then(t=>{0===Object.keys(a).length&&(r.next(t.data),r.complete()),a.append("product",o),c()({method:"post",url:s+"products/gallery/",data:a,headers:{"Content-Type":"multipart/form-data"}}).then(t=>{r.next(t.data),r.complete()}).catch(t=>{console.log(t),r.error(t)})}).catch(t=>{console.log(t)})}).catch(t=>{console.log(t)})})}getProduct(t){return r["a"].create(e=>{console.log("id: "+t),c.a.get(s+`products/search/${t}/`).then(t=>{e.next(t.data),e.complete()}).catch(t=>{e.error(t)})})}updateProduct(t,e){return r["a"].create(a=>{c.a.put(s+`products/search/${e}/`,t).then(t=>{console.log(),a.next(t.data),a.complete()}).catch(t=>{a.error(t)})})}deleteProduct(t){return r["a"].create(e=>{c.a.delete(s+`products/search/${t}/`).then(t=>{console.log("Siiiiii"),e.next(t.data),e.complete()}).catch(t=>{console.log(t.response.data),e.error(t)})})}getDetailProduct(t){return r["a"].create(e=>{c.a.get(s+`products/product-detail/${t}/`).then(t=>{console.log(),e.next(t.data),e.complete()}).catch(t=>{e.error(t)})})}deleteDetailProduct(t){return r["a"].create(e=>{c.a.delete(s+`products/product-detail/${t}/`).then(t=>{console.log(),e.next(t.data),e.complete()}).catch(t=>{e.error(t)})})}}e["a"]=new n},"76b3":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",[a("div",{staticClass:"col-md-12 col-xs-12 q-pa-sm"},[a("div",{staticClass:"q-pa-sm"},[a("div",{staticClass:"row"},[a("div",[a("q-btn",{staticStyle:{color:"#9E9E9E"},attrs:{flat:"",round:"",icon:"keyboard_backspace"},on:{click:function(e){return t.$router.back()}}})],1),null!=t.product.name?a("div",[a("h5",{staticClass:"vertical-top col2 text-indigo-10 text-weight-bolder q-pa-sm",staticStyle:{"margin-top":"-3px"}},[t._v("\n              #"+t._s(this.$router.currentRoute.params.id)+": "+t._s(t.product.name)+"\n          ")])]):t._e(),a("div",{staticClass:"col"},[a("q-btn",{staticClass:"float-right",attrs:{color:"red-10",label:"Eliminar producto"},on:{click:t.deleteProduct}})],1)]),a("form",{staticClass:"q-gutter-md  q-mx-lg",on:{submit:function(e){return e.preventDefault(),e.stopPropagation(),t.onSubmit(e)},reset:function(e){return e.preventDefault(),e.stopPropagation(),t.onReset(e)}}},[a("div",{staticClass:"form-section"},[a("q-form",{ref:"myForm"},[a("q-input",{ref:"product.name",attrs:{label:"Nombre",color:"red-10",outlined:"","lazy-rules":"",rules:[function(t){return t&&t.length>0||"No debe dejar el campo vacio"}]},model:{value:t.product.name,callback:function(e){t.$set(t.product,"name",e)},expression:"product.name"}}),a("br"),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("q-select",{ref:"product.category",attrs:{options:t.optionsCategories,outlined:"",color:"red-10",label:"Categoría","option-value":"id","option-label":"name","map-options":"","lazy-rules":"",rules:[function(t){return null!==t&&""!==t||"Debe seleccionar una categoria"}]},scopedSlots:t._u([{key:"append",fn:function(){return[a("q-btn",{attrs:{round:"",dense:"",flat:"",icon:"add"},on:{click:function(e){e.stopPropagation(),t.showAddCategory=!0}}})]},proxy:!0}]),model:{value:t.product.category,callback:function(e){t.$set(t.product,"category",e)},expression:"product.category"}})],1),a("div",{staticClass:"col q-ml-md"},[a("q-select",{ref:"product.brand",attrs:{options:t.optionsBrands,label:"Marca",outlined:"",color:"red-10","option-value":"id","option-label":"name","map-options":"",rules:[function(t){return null!==t&&""!==t||"Debe seleccionar una marca"}]},scopedSlots:t._u([{key:"append",fn:function(){return[a("q-btn",{attrs:{round:"",dense:"",flat:"",icon:"add"},on:{click:function(e){e.stopPropagation(),t.showAddBrand=!0}}})]},proxy:!0}]),model:{value:t.product.brand,callback:function(e){t.$set(t.product,"brand",e)},expression:"product.brand"}})],1)])])]),a("br"),a("q-input",{ref:"product.description",attrs:{label:"Descripción",outlined:"",color:"red-10","lazy-rules":"",rules:[function(t){return t&&t.length>0||"No debe dejar el campo vacio"}]},model:{value:t.product.description,callback:function(e){t.$set(t.product,"description",e)},expression:"product.description"}}),a("br"),a("div",{staticClass:"row items-center q-my-sm"},[a("q-file",{ref:"product.image",attrs:{outlined:"",clearable:"",counter:""},on:{rejected:t.onRejected,input:t.getImage},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"attach_file"}})]},proxy:!0},{key:"hint",fn:function(){return[t._v("\n                    image portada\n                  ")]},proxy:!0}]),model:{value:t.product.image,callback:function(e){t.$set(t.product,"image",e)},expression:"product.image"}})],1),a("div",{staticClass:"col-2"},[null!==t.product.image?a("div",[a("q-img",{staticStyle:{"max-width":"150px"},attrs:{src:t.preview}})],1):t._e()]),a("br"),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("div",{staticClass:"row"},[a("q-input",{ref:"produc.price",staticClass:"col",attrs:{label:"Precio",mask:"#.##","fill-mask":"0","reverse-fill-mask":"","input-class":"text-right",outlined:"",color:"red-10","lazy-rules":"",rules:[function(t){return t&&t.length>0||"No debe dejar el campo vacio"}]},model:{value:t.product.price,callback:function(e){t.$set(t.product,"price",e)},expression:"product.price"}}),a("q-select",{ref:"product.coin",staticClass:"col q-mx-md",attrs:{options:t.optionsMoneda,label:"Moneda",outlined:"",color:"red-10","lazy-rules":"",rules:[function(t){return t&&t.length>0||"No debe dejar el campo vacio"}]},model:{value:t.product.coin,callback:function(e){t.$set(t.product,"coin",e)},expression:"product.coin"}}),a("q-input",{ref:"product.quantity",staticClass:"col",attrs:{type:"number",label:"Cantidad",outlined:"",color:"red-10","lazy-rules":"",rules:[function(t){return t&&t.length>0||"No debe dejar el campo vacio"}]},model:{value:t.product.quantity,callback:function(e){t.$set(t.product,"quantity",e)},expression:"product.quantity"}})],1)])])],1),a("q-dialog",{attrs:{persistent:""},model:{value:t.showAddCategory,callback:function(e){t.showAddCategory=e},expression:"showAddCategory"}},[a("q-card",{staticStyle:{"max-width":"100%",width:"350px"}},[a("q-toolbar",{staticClass:"bg-indigo-10 text-white"},[a("q-toolbar-title",[t._v("\n                      Categoría\n                    ")]),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",icon:"close",round:""}})],1),a("q-card-section",[a("q-input",{attrs:{label:"Ingrese nueva categoría",color:"grey-10"},model:{value:t.newCategoryName,callback:function(e){t.newCategoryName=e},expression:"newCategoryName"}})],1),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{attrs:{flat:"",color:"red-10"}},[t._v("Agregar")])],1)],1)],1),a("q-dialog",{attrs:{persistent:""},model:{value:t.showAddBrand,callback:function(e){t.showAddBrand=e},expression:"showAddBrand"}},[a("q-card",{staticStyle:{"max-width":"100%",width:"350px"}},[a("q-toolbar",{staticClass:"bg-indigo-10 text-white"},[a("q-toolbar-title",[t._v("\n                    Marca\n                  ")]),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",icon:"close",round:""}})],1),a("q-card-section",[a("q-input",{attrs:{label:"Ingrese nueva marca",color:"grey-10"},model:{value:t.newBrandName,callback:function(e){t.newBrandName=e},expression:"newBrandName"}})],1),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{attrs:{flat:"",color:"red-10"}},[t._v("Agregar")])],1)],1)],1),a("q-dialog",{attrs:{persistent:""},model:{value:t.showAddFeature,callback:function(e){t.showAddFeature=e},expression:"showAddFeature"}},[a("q-card",{staticStyle:{"max-width":"100%",width:"350px"}},[a("q-toolbar",{staticClass:"bg-indigo-10 text-white"},[a("q-toolbar-title",[t._v("\n                    Característica\n                  ")]),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",icon:"close",round:""}})],1),a("q-card-section",[a("q-input",{attrs:{label:"Ingrese nueva característica",color:"grey-10"},model:{value:t.newFeatureName,callback:function(e){t.newFeatureName=e},expression:"newFeatureName"}})],1),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{attrs:{flat:"",color:"red-10"},on:{click:function(e){return t.addFeature()}}},[t._v("Agregar")])],1)],1)],1),t._l(t.product.detail_product,(function(e){return a("div",{key:e.id,staticClass:"row q-mt-md"},[a("div",{staticClass:"col"},[a("q-select",{staticClass:"col q-mx-md",attrs:{options:t.optionsFeatures,label:"Caracteristica",outlined:"",color:"red-10","option-value":"id","option-label":"name","map-options":""},scopedSlots:t._u([{key:"append",fn:function(){return[a("q-btn",{attrs:{round:"",dense:"",flat:"",icon:"add"},on:{click:function(e){e.stopPropagation(),t.showAddFeature=!0}}})]},proxy:!0}],null,!0),model:{value:e.characteristic["id"],callback:function(a){t.$set(e.characteristic,"id",a)},expression:"detailp.characteristic['id']"}})],1),a("div",{staticClass:"col q-ml-md"},[a("q-input",{attrs:{color:"red-10",outlined:"",label:"valor"},model:{value:e.description,callback:function(a){t.$set(e,"description",a)},expression:"detailp.description"}})],1)])})),a("br"),t._l(t.items,(function(e,r){return a("div",{key:e.id,staticClass:"row q-mt-md"},[a("div",{staticClass:"col"},[a("q-select",{attrs:{options:t.optionsFeatures,outlined:"",color:"red-10",label:"Caracteristica","option-value":"id","option-label":"name","map-options":""},scopedSlots:t._u([{key:"append",fn:function(){return[a("q-btn",{attrs:{round:"",dense:"",flat:"",icon:"add"},on:{click:function(e){e.stopPropagation(),t.showAddFeature=!0}}})]},proxy:!0}],null,!0),model:{value:e.characteristic,callback:function(a){t.$set(e,"characteristic",a)},expression:"item.characteristic"}})],1),a("div",{staticClass:"col q-ml-md"},[a("q-input",{attrs:{label:"Valor",color:"red-10",outlined:""},model:{value:e.description,callback:function(a){t.$set(e,"description",a)},expression:"item.description"}})],1),a("div",{staticClass:"col"},[a("q-btn",{staticClass:"q-ml-md q-mt-sm",attrs:{round:"",color:"primary",icon:"close"},on:{click:function(e){return t.removeCharacteristic(r)}}})],1)])})),t._l(t.images,(function(e){return a("div",{key:e.id,staticClass:"row"},[a("div",{staticClass:"col-md-6 col-xs-12"},[a("q-file",{attrs:{label:"Imagen Galeria",color:"indigo-10",outlined:""},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"attach_file"}})]},proxy:!0}],null,!0),model:{value:t.productImages,callback:function(e){t.productImages=e},expression:"productImages"}})],1)])}))],2),a("q-btn",{staticClass:"q-pa-xs q-mt-md q-mr-md float-right",attrs:{color:"red-10",label:"Guardar Cambios"},on:{click:function(e){return t.updateProduct()}}}),a("q-btn",{staticClass:"q-pa-xs q-mt-md q-mr-md float-right",attrs:{color:"secondary",label:"Agregar Características"},on:{click:function(e){return t.pushDetail()}}}),a("q-btn",{staticClass:"q-pa-xs q-mt-md q-mr-md float-right",attrs:{color:"red-10",label:"Agregar Imágenes"}})],1)]),a("br"),a("br")])])},o=[],c=a("2b0e"),s=a("560a"),n=a("97da"),i=a("fab5"),l=a("c0f4"),d=a("bc3a"),u=a.n(d),p=a("f508"),m=c["default"].extend({data(){var t=null,e=null,a=null,r=null,o=null;return{preview:o,url_test:"http://localhost:8000/media/products/closet_4tzq9jh.jpg",product:{id:this.$router.currentRoute.params.id,name:null,description:null,image:r,price:null,coin:null,quantity:null,category:null,brand:null,detail_product:new Array},productName:"",productBrand:e,productCategory:a,productFeature:t,productDescription:"",productImage:null,productImages:null,productPrice:null,productCoin:null,productQuantity:null,optionsBrands:[],optionsCategories:[],optionsMoneda:["USD","BS"],items:new Array,item:{},images:new Array,selectedFile:null,newCategoryName:"",newBrandName:"",detailProduct:new Array,productDetail:"",newFeatureName:"",optionsFeatures:[],valueFeatures:"",limit:25,offset:0,showAddFeature:!1,showAddCategory:!1,showAddBrand:!1,detailPrueba:{producto:null,characteristic:null,description:""}}},beforeMount(){this.onInit(this.$router.currentRoute.params.id),this.onRequest()},methods:{onInit(t){s["a"].getProduct(t).subscribe({next:t=>{console.log(t),this.product=t;var e=encodeURI(t.image);fetch(e).then(t=>t.blob()).then(e=>{const a=t.image.indexOf("products/")+9,r=t.image.substring(a),o=r.substring(r.indexOf(".")+1),c=new File([e],r,{type:"image/"+o});this.product.image=c,this.getImage(c)})},complete:()=>console.log("[complete]")})},onRequest(){l["a"].getFeatures(this.limit,this.offset).subscribe({next:t=>{this.optionsFeatures=t.results}}),i["a"].getCategories(this.limit,this.offset).subscribe({next:t=>{this.optionsCategories=t.results}}),n["a"].getBrands(this.limit,this.offset).subscribe({next:t=>{this.optionsBrands=t.results}})},addFeature(){l["a"].createFeature(this.newFeatureName).subscribe({next:()=>{setTimeout(()=>this.backToProducts(),500)},complete:()=>console.log("completado")})},prueba(){var t={product:this.$router.currentRoute.params.id,characteristic:this.productFeature.id,description:this.productDetail};this.detailProduct.push(t),console.log(this.detailProduct),this.productFeature="",this.productDetail=""},productos(){u.a.get("http://localhost:8000/panel/products/product-detail/1/").then(t=>{console.log(t.data)}).catch(t=>{console.log(t)})},onSubmit(){this.$refs.product.name.validate()(this.$refs.product).category.validate()(this.$refs.product).brand.validate()(this.$refs.product).description.validate()(this.$refs.product).image.validate()(this.$refs.product).price.validate()(this.$refs.product).coin.validate()(this.$refs.product).quantity.validate(),this.$refs.product.name.hasError||this.$refs.product.category.hasError||this.$refs.product.brand.hasError||this.$refs.product.description.hasError||this.$refs.product.image.hasError||this.$refs.product.price.hasError||this.$refs.product.coin.hasError||this.$refs.product.quantity.hasError||this.updateProduct()},updateProduct(){let t=this,e={id:t.product.id,name:t.product.name,description:t.product.description,price:t.product.price,coin:t.product.coin,brand:t.product.brand,category:t.product.category,quantity:t.product.quantity,detail:t.product.detail_product};var a=[],r=[];for(let c of t.product.detail_product)a.push({id:c.id,feature:null!=c.characteristic["id"].id?c.characteristic["id"].id:c.characteristic["id"],description:c.description});for(let c of t.items)r.push({feature:c.characteristic.id,description:c.description});let o={product:e,features:a,new_features:r};p["a"].show(),console.log(o);s["a"].updateProduct(o,this.product.id).subscribe({next:()=>{p["a"].hide(),setTimeout(()=>this.backToProducts(),500)},complete:()=>{}})},deleteProduct(){p["a"].show();s["a"].deleteProduct(this.product.id).subscribe({next:()=>{p["a"].hide(),setTimeout(()=>this.backToProducts(),500)},complete:()=>{}})},pushDetail(){this.item={characteristic:null,description:""},this.items.push(this.item)},removeCharacteristic(t){this.items.splice(t,1)},getImage(t){let e=new FileReader;e.readAsDataURL(t),e.onload=t=>{this.preview=t.target.result}},onRejected(t){this.$q.notify({type:"negative",message:"El archivo seleccionado no es de tipo .png"})},backToProducts(){this.$router.back()}}}),h=m,g=a("2877"),f=a("9989"),b=a("9c40"),v=a("0378"),q=a("27f9"),x=a("ddd8"),y=a("7d53"),C=a("0016"),w=a("068f"),$=a("24e8"),k=a("f09f"),P=a("65c6"),F=a("6ac5"),_=a("a370"),A=a("4b7e"),N=a("7f67"),B=a("eebe"),T=a.n(B),I=Object(g["a"])(h,r,o,!1,null,null,null);e["default"]=I.exports;T()(I,"components",{QPage:f["a"],QBtn:b["a"],QForm:v["a"],QInput:q["a"],QSelect:x["a"],QFile:y["a"],QIcon:C["a"],QImg:w["a"],QDialog:$["a"],QCard:k["a"],QToolbar:P["a"],QToolbarTitle:F["a"],QCardSection:_["a"],QCardActions:A["a"]}),T()(I,"directives",{ClosePopup:N["a"]})},"97da":function(t,e,a){"use strict";var r=a("e9b9"),o=a("bc3a"),c=a.n(o);a("2f43");const s='"http://minimarketcolosal.com/api/"panel/';class n{getBrands(t,e){return console.log("WHATTTTTTT",s),r["a"].create(a=>{c.a.get(s+`brands/?limit=${t}&offset=${e}`).then(t=>{a.next(t.data),a.complete()}).catch(t=>{a.error(t)})})}createBrand(t){return r["a"].create(e=>{c.a.post(s+"brands/",{name:t.name}).then(t=>{console.log(t),e.next(t.data),e.complete()}).catch(t=>{e.error(t)})})}getBrand(t){return r["a"].create(e=>{console.log("id: "+t),c.a.get(s+`brands/${t}/`).then(t=>{e.next(t.data),e.complete()}).catch(t=>{e.error(t)})})}updateBrand(t){return r["a"].create(e=>{c.a.put(s+`brands/${t.id}/`,{name:t.name}).then(t=>{e.next(t.data),e.complete()}).catch(t=>{e.error(t)})})}deleteBrand(t){return r["a"].create(e=>{c.a.delete(s+`brands/${t}/`).then(t=>{console.log(),e.complete()}).catch(t=>{e.error(t)})})}}e["a"]=new n},c0f4:function(t,e,a){"use strict";var r=a("e9b9"),o=a("bc3a"),c=a.n(o);const s='"http://minimarketcolosal.com/api/"panel/';class n{getFeatures(t,e){return r["a"].create(a=>{c.a.get(s+`features/?limit=${t}&offset=${e}`).then(t=>{a.next(t.data),a.complete()}).catch(t=>{a.error(t)})})}createFeature(t){return r["a"].create(e=>{c.a.post(s+"features/",{name:t.name}).then(t=>{console.log(t),e.next(t.data),e.complete()}).catch(t=>{e.error(t)})})}getFeature(t){return r["a"].create(e=>{console.log("id: "+t),c.a.get(s+`features/${t}/`).then(t=>{e.next(t.data),e.complete()}).catch(t=>{e.error(t)})})}updateFeature(t){return r["a"].create(e=>{c.a.put(s+`features/${t.id}/`,{name:t.name}).then(t=>{console.log(t),e.next(t.data),e.complete()}).catch(t=>{e.error(t)})})}deleteFeature(t){return r["a"].create(e=>{c.a.delete(s+`features/${t}/`).then(t=>{console.log(t),e.next(t.data),e.complete()}).catch(t=>{e.error(t)})})}}e["a"]=new n},fab5:function(t,e,a){"use strict";var r=a("e9b9"),o=a("bc3a"),c=a.n(o);const s='"http://minimarketcolosal.com/api/"panel/';class n{getCategories(t,e){return r["a"].create(a=>{c.a.get(s+`categories/?limit=${t}&offset=${e}`).then(t=>{a.next(t.data),a.complete()}).catch(t=>{a.error(t)})})}getAllCategories(){return r["a"].create(t=>{c.a.get(s+"categories/list-all").then(e=>{t.next(e.data),t.complete()}).catch(e=>{t.error(e)})})}createCategory(t){return r["a"].create(e=>{console.log(t),c.a.post(s+"categories/save/",t,{headers:{"Content-Type":"multipart/form-data"}}).then(t=>{console.log(t),e.next(t.data),e.complete()}).catch(t=>{e.error(t)})})}getCategory(t){return r["a"].create(e=>{console.log("id: "+t),c.a.get(s+`categories/${t}/`).then(t=>{e.next(t.data),e.complete()}).catch(t=>{e.error(t)})})}updateCategory(t,e){return r["a"].create(a=>{c.a.put(s+`categories/${t}/`,e,{headers:{"Content-Type":"multipart/form-data"}}).then(t=>{console.log(),a.next(t.data),a.complete()}).catch(t=>{a.error(t)})})}deleteCategory(t){return r["a"].create(e=>{c.a.delete(s+`categories/${t}/`).then(t=>{console.log("Entreee"),e.next(t.data),e.complete()}).catch(t=>{console.log("nooo Entreee",t),e.error(t)})})}}e["a"]=new n}}]);