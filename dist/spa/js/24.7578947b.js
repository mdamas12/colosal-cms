(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[24],{fab5:function(e,t,a){"use strict";var o=a("e9b9"),i=a("bc3a"),s=a.n(i);const n='"http://minimarketcolosal.com/api/"panel/';class r{getCategories(e,t){return o["a"].create(a=>{s.a.get(n+`categories/?limit=${e}&offset=${t}`).then(e=>{a.next(e.data),a.complete()}).catch(e=>{a.error(e)})})}getAllCategories(){return o["a"].create(e=>{s.a.get(n+"categories/list-all").then(t=>{e.next(t.data),e.complete()}).catch(t=>{e.error(t)})})}createCategory(e){return o["a"].create(t=>{console.log(e),s.a.post(n+"categories/save/",e,{headers:{"Content-Type":"multipart/form-data"}}).then(e=>{console.log(e),t.next(e.data),t.complete()}).catch(e=>{t.error(e)})})}getCategory(e){return o["a"].create(t=>{console.log("id: "+e),s.a.get(n+`categories/${e}/`).then(e=>{t.next(e.data),t.complete()}).catch(e=>{t.error(e)})})}updateCategory(e,t){return o["a"].create(a=>{s.a.put(n+`categories/${e}/`,t,{headers:{"Content-Type":"multipart/form-data"}}).then(e=>{console.log(),a.next(e.data),a.complete()}).catch(e=>{a.error(e)})})}deleteCategory(e){return o["a"].create(t=>{s.a.delete(n+`categories/${e}/`).then(e=>{console.log("Entreee"),t.next(e.data),t.complete()}).catch(e=>{console.log("nooo Entreee",e),t.error(e)})})}}t["a"]=new r},fda3:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",[a("div",{staticClass:"col-md-12 col-xs-12 q-pa-sm"},[a("div",{staticClass:"q-pa-sm"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col",staticStyle:{"max-width":"40px"}},[a("q-btn",{staticStyle:{color:"#9E9E9E"},attrs:{flat:"",round:"",icon:"keyboard_backspace"},on:{click:function(t){return e.$router.back()}}})],1),a("div",{staticClass:"col2"},[a("h5",{staticClass:"vertical-top col2 text-indigo-10 text-weight-bolder q-pa-sm",staticStyle:{"margin-top":"-3px"}},[e._v("\n                    Editar categoría\n                ")])]),a("div",{staticClass:"col"},[a("q-btn",{staticClass:"q-pa-xs q-mr-xs float-right",attrs:{flat:"",color:"red-10",label:"Eliminar",loading:e.loading2},on:{click:function(t){return e.confirmDelete()}}})],1),a("div",{staticClass:"col",staticStyle:{"max-width":"110px"}},[a("q-btn",{staticClass:"q-pa-xs q-mr-md float-right",attrs:{color:"red-10",label:"Guardar",loading:e.loading1},on:{click:function(t){return e.updateCategory()}}})],1)]),a("div",{staticClass:"q-ma-md"},[a("div",{staticClass:"row justify-between items-center"},[a("div",{staticClass:"col-9 justify-evenly"},[a("div",{staticClass:"row q-my-sm"},[a("q-input",{attrs:{outlined:"",label:"Nombre",color:"dark","lazy-rules":"",rules:[function(e){return!!e||"Debe ingresar el nombre"}]},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),a("div",{staticClass:"row items-center q-my-sm"},[a("q-file",{ref:"image",attrs:{outlined:"",clearable:"",counter:""},on:{rejected:e.onRejected,input:e.getImage},scopedSlots:e._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"attach_file"}})]},proxy:!0},{key:"hint",fn:function(){return[e._v("\n                    Field hint\n                  ")]},proxy:!0}]),model:{value:e.image,callback:function(t){e.image=t},expression:"image"}})],1)]),a("div",{staticClass:"col-2"},[null!==e.image?a("div",[a("q-img",{staticStyle:{"max-width":"150px"},attrs:{src:e.preview}})],1):e._e()])])])])])])},i=[],s=(a("c975"),a("e6cf"),a("2b0e")),n=a("fab5"),r=a("f508"),l=s["default"].extend({data(){return{id:this.$router.currentRoute.params.id,name:"",image:null,preview:null,uploading:null,loading1:!1,loading2:!1}},beforeMount(){this.onInit()},methods:{onInit(){r["a"].show();n["a"].getCategory(this.id).subscribe({next:e=>{this.name=e.name;var t=encodeURI(e.image);fetch(t).then(e=>e.blob()).then(t=>{const a=e.image.indexOf("categories/")+11,o=e.image.substring(a),i=o.substring(o.indexOf(".")+1),s=new File([t],o,{type:"image/"+i});this.image=s,this.getImage(s)}),r["a"].hide()},complete:()=>console.log("[complete]")})},showNotif(e,t){this.$q.notify({message:e,color:t,actions:[{label:"Dismiss",color:"white",handler:()=>{}}]})},checkCategory(){this.loading1||this.loading2||(""!==this.name&&null!=this.image?(console.log("everything in order. Creating user..."),this.createCategory()):this.showNotif("Faltan campos por completar","red-10"))},updateCategory(){if(this.loading1=!0,null!==this.image){const e=new FormData;e.append("name",this.name),e.append("image",this.image,this.image.name);n["a"].updateCategory(this.id,e).subscribe({complete:()=>{console.log("[category updated]"),this.loading1=!1,this.showNotif("Cambios guardados exitosamente","indigo-10"),setTimeout(()=>this.$router.back(),1e3)}})}},getImage(e){let t=new FileReader;t.readAsDataURL(e),t.onload=e=>{this.preview=e.target.result}},onRejected(e){this.$q.notify({type:"negative",message:"El archivo seleccionado no es de tipo .png"})},confirmDelete(){let e=this;this.loading1||this.loading2||this.$q.dialog({title:"Confirmar",message:"¿Está seguro de querer eliminar esta categoría?",cancel:!0,persistent:!0,color:"red-10"}).onOk(()=>{e.deleteCategory()}).onCancel(()=>{})},deleteCategory(){this.loading2=!0;n["a"].deleteCategory(this.id).subscribe({next:()=>{this.loading2=!1,console.log("[brand Deleted]"),this.showNotif("Categoría Eliminada","indigo-10"),setTimeout(()=>this.$router.back(),1e3)},complete:()=>console.log("[complete]")})},backToCategories(){this.$router.back()}}}),c=l,d=a("2877"),g=a("9989"),m=a("9c40"),u=a("27f9"),h=a("7d53"),p=a("0016"),f=a("068f"),b=a("eebe"),C=a.n(b),y=Object(d["a"])(c,o,i,!1,null,null,null);t["default"]=y.exports;C()(y,"components",{QPage:g["a"],QBtn:m["a"],QInput:u["a"],QFile:h["a"],QIcon:p["a"],QImg:f["a"]})}}]);