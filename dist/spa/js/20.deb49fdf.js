(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[20],{"1fd8":function(e,s,t){"use strict";t.r(s);var a=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("q-page",[t("div",{staticClass:"col-md-12 col-xs-12 q-pa-sm"},[t("div",{staticClass:"q-pa-sm"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col",staticStyle:{"max-width":"40px"}},[t("q-btn",{staticStyle:{color:"#9E9E9E"},attrs:{flat:"",round:"",icon:"keyboard_backspace"},on:{click:function(s){return e.$router.back()}}})],1),t("div",{staticClass:"col2"},[t("h5",{staticClass:"vertical-top col2 text-indigo-10 text-weight-bolder q-pa-sm",staticStyle:{"margin-top":"-3px"}},[e._v("\n                  Editar Usuario\n              ")])]),t("div",{staticClass:"col"},[t("q-btn",{staticClass:"q-pa-xs q-mr-md float-right",attrs:{color:"red-10",label:"Guardar",loading:e.loading1},on:{click:function(s){return e.checkUser()}}}),t("q-btn",{staticClass:"q-pa-xs q-mr-xs float-right",attrs:{flat:"",color:"red-10",label:"Eliminar",loading:e.loading2},on:{click:function(s){return e.confirmDelete()}}})],1)]),t("div",{staticClass:"row q-ma-md"},[t("div",{staticClass:"col"},[t("q-input",{attrs:{outlined:"",label:"Nombre","lazy-rules":"",rules:[function(e){return!!e||"Debe ingresar el nombre"}]},model:{value:e.user.first_name,callback:function(s){e.$set(e.user,"first_name",s)},expression:"user.first_name"}})],1)]),t("div",{staticClass:"row q-ma-md"},[t("div",{staticClass:"col-6"},[t("q-input",{ref:"password",attrs:{outlined:"",type:e.isPwd?"password":"text",label:"Contraseña","lazy-rules":"",rules:[function(e){return!!e||"Debe ingresar una contraseña"},e.isValidPassword]},scopedSlots:e._u([{key:"append",fn:function(){return[t("q-icon",{staticClass:"cursor-pointer",attrs:{name:e.isPwd?"visibility_off":"visibility"},on:{click:function(s){e.isPwd=!e.isPwd}}})]},proxy:!0}]),model:{value:e.password,callback:function(s){e.password=s},expression:"password"}})],1),t("div",{staticClass:"col q-ml-md"},[t("q-input",{ref:"email",attrs:{outlined:"",type:"email",label:"Correo","lazy-rules":"",rules:[function(e){return!!e||"Debe ingresar el correo"},e.isValidEmail]},model:{value:e.user.email,callback:function(s){e.$set(e.user,"email",s)},expression:"user.email"}})],1)]),t("div",{staticClass:"row q-ma-md"},[t("div",{staticClass:"col-4"},[t("q-toggle",{attrs:{"checked-icon":"check",color:"red-10",label:"Super Usuario","left-label":""},model:{value:e.user.is_superuser,callback:function(s){e.$set(e.user,"is_superuser",s)},expression:"user.is_superuser"}})],1)])])])])},r=[],i=t("f508"),o=t("2b0e"),l=t("afbf"),n=o["default"].extend({data(){return{password:"",user:{id:this.$router.currentRoute.params.id,is_superuser:!1,username:"",first_name:"",last_name:"",email:"",password:""},isPwd:!0,loading1:!1,loading2:!1}},beforeMount(){this.onInit(this.$router.currentRoute.params.id),i["a"].show()},methods:{onInit(e){l["a"].getUser(e).subscribe({next:e=>{this.user=e},complete:()=>{console.log("[complete]"),i["a"].hide()}})},showNotif(e,s){this.$q.notify({message:e,color:s,actions:[{label:"Dismiss",color:"white",handler:()=>{}}]})},checkUser(){this.loading1||this.loading2||(""!==this.user.first_name&&""!==this.user.email?this.password.length<8?this.showNotif("Contraseña debe ser mayor a 8 caracteres","red-10"):(console.log("everything in order. Creating user..."),this.updateUser()):this.showNotif("Faltan campos por completar","red-10"))},updateUser(){this.loading1=!0,this.user.password=this.password;l["a"].updateUser(this.user).subscribe({complete:()=>{console.log("[user updated]"),this.loading1=!1,this.showNotif("Cambios guardados exitosamente","indigo-10"),setTimeout(()=>this.backToUsers(),1e3)}})},isValidEmail(e){const s=/^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;return s.test(e)||"Correo inválido"},isValidPassword(e){return e.length>8?!!e:"Contraseña debe ser mayor a 8 caracteres"},backToUsers(){this.$router.back()},confirmDelete(){this.loading1||this.loading2||this.$q.dialog({title:"Confirmar",message:"¿Está seguro de querer eliminar este usuario?",cancel:!0,persistent:!0,color:"red-10"}).onOk(()=>{this.deleteUser()}).onCancel(()=>{})},deleteUser(){this.loading2=!0;l["a"].deleteUser(this.user.id).subscribe({complete:()=>{this.loading2=!1,console.log("[user Deleted]"),this.showNotif("Usuario Eliminado","indigo-10"),setTimeout(()=>this.backToUsers(),1e3)}})}}}),c=n,u=t("2877"),d=t("9989"),m=t("9c40"),p=t("27f9"),h=t("0016"),f=t("9564"),g=t("eebe"),b=t.n(g),w=Object(u["a"])(c,a,r,!1,null,null,null);s["default"]=w.exports;b()(w,"components",{QPage:d["a"],QBtn:m["a"],QInput:p["a"],QIcon:h["a"],QToggle:f["a"]})},afbf:function(e,s,t){"use strict";var a=t("e9b9"),r=t("a748");t("f2ea");function i(){let e=localStorage.getItem("token");return e?{Authorization:"token "+e}:{}}const o="";class l{getUserMe(){return a["a"].create(e=>{r["a"].get(o+"users/me/",{headers:i()}).then(s=>{e.next(s.data),e.complete()}).catch(s=>{e.error(s)})})}getUsers(e,s){return a["a"].create(t=>{r["a"].get(o+`users/?limit=${e}&offset=${s}`).then(e=>{t.next(e.data),t.complete()}).catch(e=>{t.error(e)})})}findUsers(e){return a["a"].create(s=>{r["a"].get(o+"users/find/?query="+e).then(e=>{s.next(e.data),s.complete()}).catch(e=>{s.error(e)})})}createUser(e){return a["a"].create(s=>{r["a"].post(o+"users/",{is_superuser:e.is_superuser,username:e.email,first_name:e.first_name,last_name:"",email:e.email,password:e.password,is_staff:!0,is_active:!0}).then(e=>{console.log(e),s.complete()}).catch(e=>{s.error(e)})})}getUser(e){return a["a"].create(s=>{console.log("id: "+e),r["a"].get(o+`users/${e}/`).then(e=>{s.next(e.data),s.complete()}).catch(e=>{s.error(e)})})}updateUser(e){return a["a"].create(s=>{r["a"].put(o+`users/${e.id}/`,{is_superuser:e.is_superuser,username:e.email,first_name:e.first_name,last_name:"",email:e.email,password:e.password,is_staff:!0,is_active:!0}).then(e=>{console.log(),s.complete()}).catch(e=>{s.error(e)})})}deleteUser(e){return a["a"].create(s=>{r["a"].delete(o+`users/${e}/`).then(e=>{console.log(e),s.complete()}).catch(e=>{s.error(e)})})}}s["a"]=new l},f2ea:function(e,s,t){"use strict"}}]);