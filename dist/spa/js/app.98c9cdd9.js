(function(e){function n(n){for(var a,r,i=n[0],c=n[1],d=n[2],u=0,p=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);s&&s(n);while(p.length)p.shift()();return l.push.apply(l,d||[]),t()}function t(){for(var e,n=0;n<l.length;n++){for(var t=l[n],a=!0,r=1;r<t.length;r++){var i=t[r];0!==o[i]&&(a=!1)}a&&(l.splice(n--,1),e=c(c.s=t[0]))}return e}var a={},r={1:0},o={1:0},l=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{2:"74b748d6",3:"8a70a125",4:"9af11a22",5:"ae4fec44",6:"58cdf680",7:"0939a560",8:"85d4b80c",9:"14f20dc3",10:"69d2a207",11:"d18abf1d",12:"4928397a",13:"fea056d7",14:"e44197cf",15:"1a41f166",16:"6433ad0b",17:"2442cf07",18:"b0d9f990",19:"7a6fe887",20:"c8f9e85c",21:"983b9ff7",22:"2f1e06ab",23:"c9be6db3",24:"7578947b",25:"f065f5f1",26:"dc5e957a",27:"d9e8524e",28:"a562d228",29:"c6bc2810",30:"778d6abb",31:"47a0a979",32:"0670c9a4",33:"f5a4bf59",34:"1d80dc6e",35:"08e40898",36:"dcc18549",37:"33f047ff",38:"8d5b0c14",39:"be07fa67",40:"2f125aa7",41:"a48eebe2",42:"bd9a9ddd",43:"0daa518b",44:"d5a16cb2"}[e]+".js"}function c(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var n=[],t={3:1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise((function(n,t){for(var a="css/"+({}[e]||e)+"."+{2:"31d6cfe0",3:"43da094b",4:"31d6cfe0",5:"31d6cfe0",6:"31d6cfe0",7:"31d6cfe0",8:"31d6cfe0",9:"31d6cfe0",10:"31d6cfe0",11:"31d6cfe0",12:"31d6cfe0",13:"31d6cfe0",14:"31d6cfe0",15:"31d6cfe0",16:"31d6cfe0",17:"31d6cfe0",18:"31d6cfe0",19:"31d6cfe0",20:"31d6cfe0",21:"31d6cfe0",22:"31d6cfe0",23:"31d6cfe0",24:"31d6cfe0",25:"31d6cfe0",26:"31d6cfe0",27:"31d6cfe0",28:"31d6cfe0",29:"31d6cfe0",30:"31d6cfe0",31:"31d6cfe0",32:"31d6cfe0",33:"31d6cfe0",34:"31d6cfe0",35:"31d6cfe0",36:"31d6cfe0",37:"31d6cfe0",38:"31d6cfe0",39:"31d6cfe0",40:"31d6cfe0",41:"31d6cfe0",42:"31d6cfe0",43:"31d6cfe0",44:"31d6cfe0"}[e]+".css",o=c.p+a,l=document.getElementsByTagName("link"),i=0;i<l.length;i++){var d=l[i],u=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(u===a||u===o))return n()}var p=document.getElementsByTagName("style");for(i=0;i<p.length;i++){d=p[i],u=d.getAttribute("data-href");if(u===a||u===o)return n()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=n,s.onerror=function(n){var a=n&&n.target&&n.target.src||o,l=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");l.code="CSS_CHUNK_LOAD_FAILED",l.request=a,delete r[e],s.parentNode.removeChild(s),t(l)},s.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(s)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)n.push(a[2]);else{var l=new Promise((function(n,t){a=o[e]=[n,t]}));n.push(a[2]=l);var d,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(e);var p=new Error;d=function(n){u.onerror=u.onload=null,clearTimeout(s);var t=o[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;p.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",p.name="ChunkLoadError",p.type=a,p.request=r,t[1](p)}o[e]=void 0}};var s=setTimeout((function(){d({type:"timeout",target:u})}),12e4);u.onerror=u.onload=d,document.head.appendChild(u)}return Promise.all(n)},c.m=e,c.c=a,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)c.d(t,a,function(n){return e[n]}.bind(null,a));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="",c.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],u=d.push.bind(d);d.push=n,d=d.slice();for(var p=0;p<d.length;p++)n(d[p]);var s=u;l.push([0,0]),t()})({0:function(e,n,t){e.exports=t("2f39")},"0047":function(e,n,t){},"2f39":function(e,n,t){"use strict";t.r(n);t("5319");var a=t("c973"),r=t.n(a),o=(t("7d6e"),t("e54f"),t("985d"),t("0047"),t("2b0e")),l=t("1f91"),i=t("42d2"),c=t("b05d"),d=t("2a19"),u=t("436b");o["default"].use(c["a"],{config:{},lang:l["a"],iconSet:i["a"],plugins:{Notify:d["a"],Dialog:u["a"]}});var p=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"q-app"}},[t("router-view")],1)},s=[],f=t("e4fd"),m=t.n(f),h=Object(f["defineComponent"])({name:"App"}),b=h,P=t("2877"),y=Object(P["a"])(b,p,s,!1,null,null,null),g=y.exports,v=t("4bde"),w=t("2f62"),L=Object(v["store"])((function({Vue:e}){e.use(w["a"]);const n=new w["a"].Store({modules:{},strict:!1});return n})),S=t("8c4f");const O=[{path:"/Login",component:()=>Promise.all([t.e(0),t.e(22)]).then(t.bind(null,"74db"))},{path:"/",meta:{Auth:!0},component:()=>Promise.all([t.e(0),t.e(3)]).then(t.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([t.e(0),t.e(37)]).then(t.bind(null,"8b24"))},{name:"Products",path:"products",redirect:{name:"ProductsList"},component:()=>t.e(39).then(t.bind(null,"6eb0")),children:[{name:"ProductsList",path:"",component:()=>Promise.all([t.e(0),t.e(7)]).then(t.bind(null,"2ab0"))},{name:"ProductsCreate",path:"create",component:()=>Promise.all([t.e(0),t.e(2)]).then(t.bind(null,"441c"))},{name:"ProductsSingleEdit",path:"edit/:id",component:()=>Promise.all([t.e(0),t.e(4)]).then(t.bind(null,"76b3"))},{name:"ProductsDetail",path:"detail/:id",component:()=>Promise.all([t.e(0),t.e(30)]).then(t.bind(null,"73af"))}]},{name:"Categories",path:"categories",redirect:{name:"CategoryList"},component:()=>t.e(34).then(t.bind(null,"c5d2")),children:[{name:"CategoryList",path:"",component:()=>Promise.all([t.e(0),t.e(25)]).then(t.bind(null,"6c91"))},{name:"CategoryDetail",path:"detail/:id",component:()=>Promise.all([t.e(0),t.e(24)]).then(t.bind(null,"fda3"))},{name:"CategoryCreate",path:"create",component:()=>Promise.all([t.e(0),t.e(23)]).then(t.bind(null,"1d68"))}]},{name:"Brands",path:"brands",component:()=>t.e(33).then(t.bind(null,"d0f4")),redirect:{name:"BrandList"},children:[{name:"BrandList",path:"",component:()=>Promise.all([t.e(0),t.e(13)]).then(t.bind(null,"cc0d"))},{name:"BrandDetail",path:"detail/:id",component:()=>Promise.all([t.e(0),t.e(12)]).then(t.bind(null,"33ae"))},{name:"BrandCreate",path:"create",component:()=>Promise.all([t.e(0),t.e(11)]).then(t.bind(null,"75c1"))}]},{name:"Features",path:"features",component:()=>t.e(36).then(t.bind(null,"9f3d")),redirect:{name:"FeatureList"},children:[{name:"FeatureList",path:"",component:()=>Promise.all([t.e(0),t.e(14)]).then(t.bind(null,"ad5f"))},{name:"FeatureDetail",path:"detail/:id",component:()=>Promise.all([t.e(0),t.e(27)]).then(t.bind(null,"92fd"))},{name:"FeatureCreate",path:"create",component:()=>Promise.all([t.e(0),t.e(26)]).then(t.bind(null,"7d530"))}]},{name:"Suppliers",path:"suppliers",component:()=>t.e(42).then(t.bind(null,"833c")),redirect:{name:"SupplierList"},children:[{name:"SupplierList",path:"",component:()=>Promise.all([t.e(0),t.e(17)]).then(t.bind(null,"c09e"))},{name:"SupplierDetail",path:"detail/:id",component:()=>Promise.all([t.e(0),t.e(16)]).then(t.bind(null,"3ae3"))},{name:"SupplierCreate",path:"create",component:()=>Promise.all([t.e(0),t.e(15)]).then(t.bind(null,"424b"))}]},{name:"SupplyOrders",path:"supplyOrders",component:()=>t.e(43).then(t.bind(null,"f239")),redirect:{name:"SupplyOrderList"},children:[{name:"SupplyOrderList",path:"",component:()=>Promise.all([t.e(0),t.e(18)]).then(t.bind(null,"0a70"))},{name:"SupplyOrderDetail",path:"detail/:id",component:()=>Promise.all([t.e(0),t.e(6)]).then(t.bind(null,"a42a"))},{name:"SupplyOrderCreate",path:"create",component:()=>Promise.all([t.e(0),t.e(5)]).then(t.bind(null,"b72a"))}]},{name:"Users",path:"users",component:()=>t.e(44).then(t.bind(null,"051b")),redirect:{name:"UserList"},children:[{name:"UserList",path:"",component:()=>Promise.all([t.e(0),t.e(21)]).then(t.bind(null,"7524"))},{name:"UserDetail",path:"detail/:id",component:()=>Promise.all([t.e(0),t.e(20)]).then(t.bind(null,"1fd8"))},{name:"UserCreate",path:"create",component:()=>Promise.all([t.e(0),t.e(19)]).then(t.bind(null,"3772"))}]},{name:"Promotions",path:"promotions",component:()=>t.e(40).then(t.bind(null,"92b5")),redirect:{name:"PromotionList"},children:[{name:"PromotionList",path:"",component:()=>Promise.all([t.e(0),t.e(31)]).then(t.bind(null,"9553"))},{name:"PromotionDetail",path:"detail/:id",component:()=>Promise.all([t.e(0),t.e(9)]).then(t.bind(null,"d449"))},{name:"PromotionCreate",path:"create",component:()=>Promise.all([t.e(0),t.e(8)]).then(t.bind(null,"4107"))}]},{name:"Sales",path:"sales",component:()=>t.e(41).then(t.bind(null,"28a8")),children:[{name:"SalesList",path:"",component:()=>Promise.all([t.e(0),t.e(32)]).then(t.bind(null,"5255"))},{name:"SalesCreate",path:"create",component:()=>Promise.all([t.e(0),t.e(10)]).then(t.bind(null,"5052"))}]},{name:"Payments",path:"payments",component:()=>t.e(38).then(t.bind(null,"6928")),children:[{name:"PaymentList",path:"",component:()=>Promise.all([t.e(0),t.e(29)]).then(t.bind(null,"3368"))},{name:"PaymentCreate",path:"create",component:()=>Promise.all([t.e(0),t.e(28)]).then(t.bind(null,"797b"))}]}]},{path:"*",component:()=>Promise.all([t.e(0),t.e(35)]).then(t.bind(null,"e51e"))}];var C=O,j=Object(v["route"])((function({Vue:e}){e.use(S["a"]);const n=new S["a"]({scrollBehavior:()=>({x:0,y:0}),routes:C,mode:"hash",base:""});return n.beforeEach((e,n,t)=>{const a=localStorage.getItem("token");"/Login"===e.path||a?t():t({path:"/Login"})}),n})),E=function(){return x.apply(this,arguments)};function x(){return x=r()((function*(){const e="function"===typeof L?yield L({Vue:o["default"]}):L,n="function"===typeof j?yield j({Vue:o["default"],store:e}):j;e.$router=n;const t={router:n,store:e,render:e=>e(g),el:"#q-app"};return{app:t,store:e,router:n}})),x.apply(this,arguments)}var D=Object(v["boot"])(({Vue:e})=>{e.use(m.a)}),_=t("bc3a"),B=t.n(_),k=Object(v["boot"])(({Vue:e})=>{e.prototype.$axios=B.a});const A="";function T(){return V.apply(this,arguments)}function V(){return V=r()((function*(){const{app:e,store:n,router:t}=yield E();let a=!1;const r=e=>{a=!0;const n=Object(e)===e?t.resolve(e).route.fullPath:e;window.location.href=n},l=window.location.href.replace(window.location.origin,""),i=[D,k];for(let d=0;!1===a&&d<i.length;d++)if("function"===typeof i[d])try{yield i[d]({app:e,router:t,store:n,Vue:o["default"],ssrContext:null,redirect:r,urlPath:l,publicPath:A})}catch(c){return c&&c.url?void(window.location.href=c.url):void console.error("[Quasar] boot error:",c)}!0!==a&&new o["default"](e)})),V.apply(this,arguments)}T()}});