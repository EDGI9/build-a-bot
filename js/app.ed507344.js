(function(e){function t(t){for(var a,o,n=t[0],c=t[1],l=t[2],d=0,p=[];d<n.length;d++)o=n[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&p.push(s[o][0]),s[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);b&&b(t);while(p.length)p.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],a=!0,o=1;o<r.length;o++){var n=r[o];0!==s[n]&&(a=!1)}a&&(i.splice(t--,1),e=c(c.s=r[0]))}return e}var a={},o={app:0},s={app:0},i=[];function n(e){return c.p+"js/"+({buildBot:"buildBot"}[e]||e)+"."+{buildBot:"73a3d4dc"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={buildBot:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var a="css/"+({buildBot:"buildBot"}[e]||e)+"."+{buildBot:"a9ac04db"}[e]+".css",s=c.p+a,i=document.getElementsByTagName("link"),n=0;n<i.length;n++){var l=i[n],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===a||d===s))return t()}var p=document.getElementsByTagName("style");for(n=0;n<p.length;n++){l=p[n],d=l.getAttribute("data-href");if(d===a||d===s)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var a=t&&t.target&&t.target.src||s,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete o[e],b.parentNode.removeChild(b),r(i)},b.href=s;var u=document.getElementsByTagName("head")[0];u.appendChild(b)})).then((function(){o[e]=0})));var a=s[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,r){a=s[e]=[t,r]}));t.push(a[2]=i);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=n(e);var p=new Error;l=function(t){d.onerror=d.onload=null,clearTimeout(b);var r=s[e];if(0!==r){if(r){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",p.name="ChunkLoadError",p.type=a,p.request=o,r[1](p)}s[e]=void 0}};var b=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(r,a,function(t){return e[t]}.bind(null,a));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/build-a-bot/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var p=0;p<l.length;p++)t(l[p]);var b=d;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0523":function(e,t,r){e.exports=r.p+"img/base-rocket.12e50227.webp"},"0c68":function(e,t,r){e.exports=r.p+"img/base-single-wheel.39bbc478.webp"},3400:function(e,t,r){e.exports=r.p+"img/base-triple-wheel.f9524f34.webp"},"3e11":function(e,t,r){e.exports=r.p+"img/robot-home.e78d46a2.webp"},"3fd5":function(e,t,r){e.exports=r.p+"img/arm-propeller.747cab79.webp"},"45d0":function(e,t,r){e.exports=r.p+"img/base-double-wheel.1af8c436.webp"},"49aa":function(e,t,r){"use strict";var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"c-robot-preview",class:{"c-robot-preview--small":e.isSmall}},[t("div",{staticClass:"c-robot-preview__top-row"},[t("img",{staticClass:"c-robot-preview__image",attrs:{src:e.robotData.head.src}})]),t("div",{staticClass:"c-robot-preview__middle-row"},[t("img",{staticClass:"c-robot-preview__image c-robot-preview__image--left",attrs:{src:e.robotData.leftArm.src}}),t("img",{staticClass:"c-robot-preview__image",attrs:{src:e.robotData.torso.src}}),t("img",{staticClass:"c-robot-preview__image c-robot-preview__image--right",attrs:{src:e.robotData.rightArm.src}})]),t("div",{staticClass:"c-robot-preview__bottom-row"},[t("img",{staticClass:"c-robot-preview__image",attrs:{src:e.robotData.base.src}})])])},o=[],s={name:"RobotPreview",props:{"robot-data":{type:Object,required:!0,default:()=>{}},"is-small":{type:Boolean,default:!1}}},i=s,n=(r("ad88"),r("2877")),c=Object(n["a"])(i,a,o,!1,null,"62e5ab28",null);t["a"]=c.exports},"4bbb":function(e,t,r){e.exports=r.p+"img/arm-grabber.c71295bf.webp"},"54c5":function(e,t,r){e.exports=r.p+"img/head-surveillance.d9cbace0.webp"},"56d7":function(e,t,r){"use strict";r.r(t);var a=r("2b0e"),o=r("7496"),s=r("40dc"),i=r("8336"),n=r("a523"),c=r("0e8f"),l=r("553a"),d=r("adda"),p=r("a722"),b=r("f6c4"),u=r("2fa4"),h=function(){var e=this,t=e._self._c;return t(o["a"],[t(s["a"],{attrs:{app:"",color:"primary",dark:""}},[t("div",{staticClass:"d-flex align-center"},[t(d["a"],{staticClass:"shrink mr-2",attrs:{alt:"Buildbot Logo",contain:"",src:r("b4c4"),"lazy-src":r("b4c4"),transition:"scale-transition",width:"40"}})],1),t(u["a"]),t(i["a"],{attrs:{to:"Home",text:""}},[t("span",{staticClass:"mr-2"},[e._v("Home")])]),t(i["a"],{attrs:{to:"BuildBot",text:""}},[t("span",{staticClass:"mr-2"},[e._v("Build a Bot")])])],1),t(b["a"],[t("router-view")],1),t(l["a"],[t(n["a"],[t(p["a"],{attrs:{column:"","align-center":"","justify-center":""}},[t(c["a"],[e._v("© Edgar Dias - 2019")])],1)],1)],1)],1)},w=[],f={name:"App"},m=f,g=r("2877"),y=Object(g["a"])(m,h,w,!1,null,null,null),v=y.exports,A=r("8c4f"),_=function(){var e=this,t=e._self._c;return t("div",[t(n["a"],{attrs:{"text-xs-center":"","pt-5":"","mt-5":""}},[t(p["a"],{attrs:{column:"","align-center":"","justify-center":"","fill-height":""}},[t(c["a"],{attrs:{"display-1":"","mt-4":""}},[e.ROBOT_UPDATED?t("RobotPreview",{attrs:{"robot-data":e.SELECTED_PARTS}}):t(d["a"],{attrs:{alt:"Buildbot Logo",contain:"",src:r("b4c4"),"lazy-src":r("b4c4"),"max-width":"300",transition:"scale-transition"}})],1),t(u["a"],{staticClass:"my-4"}),t(c["a"],{attrs:{"mt-4":""}},[e.ROBOT_UPDATED?t("h1",[e._v("Congratulations, here is your bot!")]):t("h1",[e._v("Hi, let's build your bot")])]),t(u["a"],{staticClass:"my-4"}),t(c["a"],{attrs:{"display-1":"","mt-4":""}},[t(i["a"],{attrs:{to:"BuildBot",elevation:"1",color:"primary"}},[e.ROBOT_UPDATED?t("span",{staticClass:"mr-2"},[e._v("Rebuild your bot")]):t("span",{staticClass:"mr-2"},[e._v("Get Started")])])],1)],1)],1)],1)},x=[],T=r("49aa"),E=r("2f62"),P={name:"Home",components:{RobotPreview:T["a"]},computed:{...Object(E["c"])("robotParts/",["ROBOT_UPDATED","SELECTED_PARTS"])}},D=P,O=Object(g["a"])(D,_,x,!1,null,null,null),C=O.exports;a["a"].use(A["a"]);const S=[{path:"*",name:"Home",component:C},{path:"/buildBot",name:"BuildBot",component:()=>r.e("buildBot").then(r.bind(null,"7a32"))}],B=new A["a"]({mode:"history",base:"/build-a-bot/",routes:S});var U=B;const R=r("b33e");var k={namespaced:!0,state:()=>({parts:{heads:[{id:1,description:"A robot head with an unusually large eye and teloscpic neck -- excellent for exploring high spaces.",title:"Large Cyclops",src:R("./head-big-eye.webp"),type:"heads",cost:1225.5},{id:2,description:"A friendly robot head with two eyes and a smile -- great for domestic use.",title:"Friendly Bot",src:R("./head-friendly.webp"),cost:945,type:"heads",onSale:!0},{id:3,description:"A large three-eyed head with a shredder for a mouth -- great for crushing light medals or shredding documents.",title:"Shredder",src:R("./head-shredder.webp"),type:"heads",cost:1275.5},{id:4,description:"A simple single-eyed head -- simple and inexpensive.",title:"Small Cyclops",src:R("./head-single-eye.webp"),type:"heads",cost:750},{id:5,description:"A robot head with three oscillating eyes -- excellent for surveillance.",title:"Surveillance Bot",src:R("./head-surveillance.webp"),type:"heads",cost:1255.5}],arms:[{id:1,description:"An articulated arm with a claw -- great for reaching around corners or working in tight spaces.",title:"Articulated",src:R("./arm-articulated-claw.webp"),type:"arms",cost:275},{id:2,description:"An arm with two independent claws -- great when you need an extra hand. Need four hands? Equip your bot with two of these arms.",title:"Two Clawed",src:R("./arm-dual-claw.webp"),type:"arms",cost:285},{id:3,description:"A telescoping arm with a grabber.",title:"Grabber",src:R("./arm-grabber.webp"),type:"arms",cost:205.5},{id:4,description:"An arm with a propeller -- good for propulsion or as a cooling fan.",title:"Propeller",src:R("./arm-propeller.webp"),type:"arms",cost:230,onSale:!0},{id:5,description:"A short and stubby arm with a claw -- simple, but cheap.",title:"Stubby Claw",src:R("./arm-stubby-claw.webp"),type:"arms",cost:125}],torsos:[{id:1,description:"A torso that can bend slightly at the waist and equiped with a heat guage.",title:"Flexible Gauged",src:R("./torso-flexible-gauged.webp"),type:"torsos",cost:1575},{id:2,description:"A less flexible torso with a battery gauge.",title:"Gauged",src:R("./torso-gauged.webp"),type:"torsos",cost:1385},{id:2,description:"A simple torso with a pouch for carrying items.",title:"Gauged",src:R("./torso-pouch.webp"),type:"torsos",cost:785,onSale:!0}],bases:[{id:1,description:"A two wheeled base with an accelerometer for stability.",title:"Double Wheeled",src:R("./base-double-wheel.webp"),type:"bases",cost:895},{id:2,description:"A rocket base capable of high speed, controlled flight.",title:"Rocket",src:R("./base-rocket.webp"),type:"bases",cost:1520.5},{id:3,description:"A single-wheeled base with an accelerometer capable of higher speeds and navigating rougher terrain than the two-wheeled variety.",title:"Single Wheeled",src:R("./base-single-wheel.webp"),type:"bases",cost:1190.5},{id:4,description:"A spring base - great for reaching high places.",title:"Spring",src:R("./base-spring.webp"),type:"bases",cost:1190.5},{id:5,description:"An inexpensive three-wheeled base. only capable of slow speeds and can only function on smooth surfaces.",title:"Triple Wheeled",src:R("./base-triple-wheel.webp"),type:"bases",cost:700.5}]},selectedParts:{head:{id:1,description:"A robot head with an unusually large eye and teloscpic neck -- excellent for exploring high spaces.",title:"Large Cyclops",src:R("./head-big-eye.webp"),type:"heads",cost:1225.5},leftArm:{id:1,description:"An articulated arm with a claw -- great for reaching around corners or working in tight spaces.",title:"Articulated",src:R("./arm-articulated-claw.webp"),type:"arms",cost:275},torso:{id:1,description:"A torso that can bend slightly at the waist and equiped with a heat guage.",title:"Flexible Gauged",src:R("./torso-flexible-gauged.webp"),type:"torsos",cost:1575},rightArm:{id:1,description:"An articulated arm with a claw -- great for reaching around corners or working in tight spaces.",title:"Articulated",src:R("./arm-articulated-claw.webp"),type:"arms",cost:275},base:{id:1,description:"A two wheeled base with an accelerometer for stability.",title:"Double Wheeled",src:R("./base-double-wheel.webp"),type:"bases",cost:895}},robotUpdated:!1}),mutations:{UPDATE_HEAD(e,t){e.selectedParts.head=t,e.robotUpdated=!0},UPDATE_TORSO(e,t){e.selectedParts.torso=t,e.robotUpdated=!0},UPDATE_LEFT_ARM(e,t){e.selectedParts.leftArm=t,e.robotUpdated=!0},UPDATE_RIGHT_ARM(e,t){e.selectedParts.rightArm=t,e.robotUpdated=!0},UPDATE_BASE(e,t){e.selectedParts.base=t,e.robotUpdated=!0}},actions:{UPDATE_HEAD({commit:e},t){e("UPDATE_HEAD",t)},UPDATE_TORSO({commit:e},t){e("UPDATE_TORSO",t)},UPDATE_LEFT_ARM({commit:e},t){e("UPDATE_LEFT_ARM",t)},UPDATE_RIGHT_ARM({commit:e},t){e("UPDATE_RIGHT_ARM",t)},UPDATE_BASE({commit:e},t){e("UPDATE_BASE",t)}},getters:{PARTS(e){return e.parts},SELECTED_PARTS(e){return e.selectedParts},ROBOT_UPDATED(e){return e.robotUpdated}}};a["a"].use(E["a"]);var j=new E["a"].Store({modules:{robotParts:k}}),L=r("f309");a["a"].use(L["a"]);var H=new L["a"]({iconfont:"mdi"});r("a41b");a["a"].config.productionTip=!1,new a["a"]({router:U,store:j,vuetify:H,render:e=>e(v)}).$mount("#app")},"5ea6":function(e,t,r){e.exports=r.p+"img/arm-stubby-claw.016c5b44.webp"},"5ef1":function(e,t,r){e.exports=r.p+"img/head-shredder.48e735b9.webp"},"87a3":function(e,t,r){e.exports=r.p+"img/build-a-bot-logo.58dc468e.webp"},9146:function(e,t,r){e.exports=r.p+"img/torso-flexible-gauged.67ce1a2e.webp"},a41b:function(e,t,r){},ad88:function(e,t,r){"use strict";r("ebdf")},aed4:function(e,t,r){e.exports=r.p+"img/arm-dual-claw.56119694.webp"},b33e:function(e,t,r){var a={"./arm-articulated-claw.webp":"f9f5","./arm-dual-claw.webp":"aed4","./arm-grabber.webp":"4bbb","./arm-propeller.webp":"3fd5","./arm-stubby-claw.webp":"5ea6","./base-double-wheel.webp":"45d0","./base-rocket.webp":"0523","./base-single-wheel.webp":"0c68","./base-spring.webp":"cddb","./base-triple-wheel.webp":"3400","./build-a-bot-logo.webp":"87a3","./head-big-eye.webp":"e5ec","./head-friendly.webp":"b4c4","./head-shredder.webp":"5ef1","./head-single-eye.webp":"be1f","./head-surveillance.webp":"54c5","./robot-home.webp":"3e11","./torso-flexible-gauged.webp":"9146","./torso-gauged.webp":"fa2e","./torso-pouch.webp":"e6f7"};function o(e){var t=s(e);return r(t)}function s(e){if(!r.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=s,e.exports=o,o.id="b33e"},b4c4:function(e,t,r){e.exports=r.p+"img/head-friendly.58dc468e.webp"},be1f:function(e,t,r){e.exports=r.p+"img/head-single-eye.4950d083.webp"},cddb:function(e,t,r){e.exports=r.p+"img/base-spring.96288fd9.webp"},e5ec:function(e,t,r){e.exports=r.p+"img/head-big-eye.88d81be2.webp"},e6f7:function(e,t,r){e.exports=r.p+"img/torso-pouch.2f6c3f91.webp"},ebdf:function(e,t,r){},f9f5:function(e,t,r){e.exports=r.p+"img/arm-articulated-claw.d1211b5b.webp"},fa2e:function(e,t,r){e.exports=r.p+"img/torso-gauged.4bf23425.webp"}});
//# sourceMappingURL=app.ed507344.js.map