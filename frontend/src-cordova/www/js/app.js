(function(e){function n(n){for(var r,a,u=n[0],i=n[1],l=n[2],d=0,f=[];d<u.length;d++)a=u[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);s&&s(n);while(f.length)f.shift()();return c.push.apply(c,l||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],r=!0,a=1;a<t.length;a++){var u=t[a];0!==o[u]&&(r=!1)}r&&(c.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},a={app:0},o={app:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"7e98e090":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"2da35789":"31d6cfe0","0905a53c":"31d6cfe0","2c4c7fea":"31d6cfe0","2d0bdb86":"31d6cfe0","2d0e145d":"31d6cfe0","2d0e9b36":"31d6cfe0","2d2178b7":"31d6cfe0","2d21b281":"31d6cfe0","2d221baa":"31d6cfe0","2d222506":"31d6cfe0","7e98e090":"e90cfb6a"}[e]+".css",o=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var l=c[u],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===r||d===o))return n()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){l=f[u],d=l.getAttribute("data-href");if(d===r||d===o)return n()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=n,s.onerror=function(n){var r=n&&n.target&&n.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],s.parentNode.removeChild(s),t(c)},s.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(s)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)n.push(r[2]);else{var c=new Promise((function(n,t){r=o[e]=[n,t]}));n.push(r[2]=c);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=u(e);var f=new Error;l=function(n){d.onerror=d.onload=null,clearTimeout(s);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,t[1](f)}o[e]=void 0}};var s=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=n,l=l.slice();for(var f=0;f<l.length;f++)n(l[f]);var s=d;c.push([0,"vendor"]),t()})({0:function(e,n,t){e.exports=t("7d3e")},"78ab":function(e,n,t){},"7d3e":function(e,n,t){"use strict";t.r(n);var r=t("52b5"),a=t.n(r),o=(t("c1c3"),t("2233"),t("2f72"),t("838b"),t("78ab"),t("e832")),c=t("f846");o["a"].use(c["a"],{config:{}});var u=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"q-app"}},[t("router-view")],1)},i=[],l={name:"App"},d=l,f=t("a6c2"),s=Object(f["a"])(d,u,i,!1,null,null,null),p=s.exports,m=t("4af9"),h=[{path:"/",component:function(){return Promise.all([t.e("2da35789"),t.e("2d0e9b36")]).then(t.bind(null,"8f3e"))},children:[{path:"",component:function(){return Promise.all([t.e("2da35789"),t.e("2d0bdb86")]).then(t.bind(null,"2ccb"))}},{path:"/contacts",name:"PageContacts",component:function(){return Promise.all([t.e("2da35789"),t.e("7e98e090")]).then(t.bind(null,"4315"))}},{path:"/navigation",name:"PageNavigation",component:function(){return Promise.all([t.e("2da35789"),t.e("0905a53c")]).then(t.bind(null,"b595"))}},{path:"/reminders",name:"PageReminders",component:function(){return Promise.all([t.e("2da35789"),t.e("2d21b281")]).then(t.bind(null,"bf29"))}},{path:"/finditems",name:"PageFindItems",component:function(){return Promise.all([t.e("2da35789"),t.e("2d221baa")]).then(t.bind(null,"cc1e"))}},{path:"/exercises",name:"PageExercises",component:function(){return Promise.all([t.e("2da35789"),t.e("2d0e145d")]).then(t.bind(null,"7a74"))}},{path:"/camera",name:"PageCamera",component:function(){return Promise.all([t.e("2da35789"),t.e("2d2178b7")]).then(t.bind(null,"c6d2"))}},{path:"/emergency",name:"PageEmergency",component:function(){return Promise.all([t.e("2da35789"),t.e("2d222506")]).then(t.bind(null,"cda0"))}}]}];h.push({path:"*",component:function(){return Promise.all([t.e("2da35789"),t.e("2c4c7fea")]).then(t.bind(null,"f364"))}});var b=h;o["a"].use(m["a"]);var v=function(){var e=new m["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:b,mode:"hash",base:""});return e},g=function(){var e="function"===typeof v?v({Vue:o["a"]}):v,n={el:"#q-app",router:e,render:function(e){return e(p)}};return{app:n,router:e}},y=g(),P=y.app;y.router;function w(){return a.a.async((function(e){while(1)switch(e.prev=e.next){case 0:document.addEventListener("deviceready",(function(){o["a"].prototype.$q.cordova=window.cordova,new o["a"](P)}),!1);case 1:case"end":return e.stop()}}))}w()}});