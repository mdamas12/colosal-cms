(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[30],{"560a":function(t,e,a){"use strict";var r=a("e9b9"),c=a("a748");const o="panel/";class n{getProducts(t,e){return r["a"].create(a=>{c["a"].get(o+`products/?limit=${t}&offset=${e}`).then(t=>{a.next(t.data),a.complete()}).catch(t=>{a.error(t)})})}getAllProducts(){return r["a"].create(t=>{c["a"].get(o+"products/").then(e=>{console.log(e.data),t.next(e.data),t.complete()}).catch(e=>{t.error(e)})})}searchProducts(t){return r["a"].create(e=>{c["a"].get(o+`products/coincidence/${t}/`).then(t=>{e.next(t.data),e.complete()}).catch(t=>{e.error(t)})})}createProduct(t,e,a){return r["a"].create(r=>{Object(c["a"])({method:"post",url:o+"products/",data:t,headers:{"Content-Type":"multipart/form-data"}}).then(t=>{let n=t.data.id;0===Object.keys(e).length&&(r.next(t.data),r.complete()),Object(c["a"])({method:"post",url:o+"products/features/",data:{features:e,product:t.data.id}}).then(t=>{0===Object.keys(a).length&&(r.next(t.data),r.complete()),a.append("product",n),Object(c["a"])({method:"post",url:o+"products/gallery/",data:a,headers:{"Content-Type":"multipart/form-data"}}).then(t=>{r.next(t.data),r.complete()}).catch(t=>{console.log(t),r.error(t)})}).catch(t=>{console.log(t)})}).catch(t=>{console.log(t)})})}getProduct(t){return r["a"].create(e=>{console.log("id: "+t),c["a"].get(o+`products/search/${t}/`).then(t=>{e.next(t.data),e.complete()}).catch(t=>{e.error(t)})})}updateProduct(t,e){return r["a"].create(a=>{c["a"].put(o+`products/search/${e}/`,t).then(t=>{console.log(),a.next(t.data),a.complete()}).catch(t=>{a.error(t)})})}deleteProduct(t){return r["a"].create(e=>{c["a"].delete(o+`products/search/${t}/`).then(t=>{console.log("Siiiiii"),e.next(t.data),e.complete()}).catch(t=>{console.log(t.response.data),e.error(t)})})}getDetailProduct(t){return r["a"].create(e=>{c["a"].get(o+`products/product-detail/${t}/`).then(t=>{console.log(),e.next(t.data),e.complete()}).catch(t=>{e.error(t)})})}deleteDetailProduct(t){return r["a"].create(e=>{c["a"].delete(o+`products/product-detail/${t}/`).then(t=>{console.log(),e.next(t.data),e.complete()}).catch(t=>{e.error(t)})})}}e["a"]=new n},"73af":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",[a("div",{staticClass:"col-md-12 col-xs-12 q-pa-sm"},[a("div",{staticClass:"q-pa-sm"},[a("div",{staticClass:"row"},[a("div",[a("q-btn",{staticStyle:{color:"#9E9E9E"},attrs:{flat:"",round:"",icon:"keyboard_backspace"},on:{click:function(e){return t.$router.back()}}})],1),null!=t.product.name?a("div",[a("h5",{staticClass:"vertical-top col2 text-indigo-10 text-weight-bolder q-pa-sm",staticStyle:{"margin-top":"-3px"}},[t._v("\n                  #"+t._s(this.$router.currentRoute.params.id)+": "+t._s(t.product.name)+", hola\n              ")])]):t._e()]),a("div",{staticClass:"q-pa-md"},t._l(t.product.detail_product,(function(e){return a("q-list",{key:e.id,staticClass:"rounded-borders",attrs:{dense:"",bordered:"",separator:"",padding:""}},[a("q-item",[a("q-item-section",[a("q-item-label",{staticClass:"text-red-10 text-weight-bold",attrs:{caption:""}},[t._v(t._s(e.characteristic["name"]))]),a("q-item-label",{attrs:{overline:""}},[t._v(t._s(e.description))])],1),a("q-item-section",[a("q-btn",{attrs:{label:"Eliminar",flat:"",color:"red-10"},on:{click:function(a){return t.deleteDetail(e.id)}}})],1)],1)],1)})),1)])])])},c=[],o=a("2b0e"),n=a("560a"),l=a("f508"),s=o["default"].extend({data(){return{product:{id:this.$router.currentRoute.params.id,name:null,description:null,image:null,price:null,coin:null,quantity:null,category:null,brand:null},detailProduct:new Array,productDetail:"",detailPrueba:{producto:null,characteristic:null,description:""}}},beforeMount(){this.onInit(this.$router.currentRoute.params.id)},methods:{onInit(t){n["a"].getProduct(t).subscribe({next:t=>{console.log(t),this.product=t},complete:()=>console.log("[complete]")})},deleteDetail(t){n["a"].deleteDetailProduct(t).subscribe({next:()=>{l["a"].hide(),setTimeout(()=>this.backToProducts(),500)},complete:()=>{}})},backToProducts(){this.$router.back()}}}),d=s,i=a("2877"),u=a("9989"),p=a("9c40"),h=a("1c1c"),m=a("66e5"),b=a("4074"),g=a("0170"),x=a("eebe"),f=a.n(x),P=Object(i["a"])(d,r,c,!1,null,null,null);e["default"]=P.exports;f()(P,"components",{QPage:u["a"],QBtn:p["a"],QList:h["a"],QItem:m["a"],QItemSection:b["a"],QItemLabel:g["a"]})}}]);