webpackJsonp([8],{AnDj:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("lRwf"),o=n.n(i),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("transition",{attrs:{name:this.transitionName}},[e("router-view",{staticClass:"Router"})],1)],1)},staticRenderFns:[]};var r=n("VU/8")({name:"App",data:function(){return{transitionName:""}},watch:{$route:function(){this.$router.isleft&&(this.transitionName="slideleft"),this.$router.isright&&(this.transitionName="slideright")}}},a,!1,function(t){n("AnDj")},null,null).exports,s=n("SJI6"),l=n.n(s),p=n("bOdI"),c={state:{number:1},mutations:n.n(p)()({},"SET_NUM",function(t,e){t.number=e}),actions:{},getters:{number:function(t){return t.number}}},u=n("sax8"),h=n.n(u);o.a.use(l.a);var m=new l.a.Store({modules:{home:c},plugins:[h()()]}),f=n("pRNm"),d=n.n(f);o.a.use(d.a),d.a.prototype.togo=function(t){this.isleft=!0,this.isright=!1,this.push(t)},d.a.prototype.goRight=function(t){this.isright=!0,this.isleft=!1,this.push(t)},d.a.prototype.goBack=function(){this.isright=!0,this.isleft=!1,this.go(-1)},d.a.prototype.togoback=function(){this.isright=!0,this.isleft=!1},d.a.prototype.togoin=function(){this.isright=!1,this.isleft=!0};var g=new d.a({routes:[{path:"/",name:"index",component:function(t){return n.e(3).then(function(){var e=[n("2NXm")];t.apply(null,e)}.bind(this)).catch(n.oe)},redirect:"/home",children:[{path:"/home",name:"home",component:function(t){return Promise.all([n.e(0),n.e(4)]).then(function(){var e=[n("gpVb")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/story",name:"story",component:function(t){return Promise.all([n.e(0),n.e(5)]).then(function(){var e=[n("DmFe")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/footprints",name:"footprints",component:function(t){return Promise.all([n.e(0),n.e(2)]).then(function(){var e=[n("4N/Z")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/day",name:"day",component:function(t){return Promise.all([n.e(0),n.e(6)]).then(function(){var e=[n("C149")];t.apply(null,e)}.bind(this)).catch(n.oe)}}]},{path:"/Home/Detail",name:"Detail",component:function(t){return Promise.all([n.e(0),n.e(1)]).then(function(){var e=[n("f2Us")];t.apply(null,e)}.bind(this)).catch(n.oe)}}]}),v=n("Tg7E"),b=n.n(v),y=(n("d8/S"),n("v5o6")),x=n.n(y);n("zzYx");var w=0;window.addEventListener("popstate",function(t){++w<2&&g.beforeEach(function(t,e,n){var i=t.path.split("/"),o=e.path.split("/");2===i.length&&0===i[1].length&&i.splice(1,1),2===o.length&&0===o[1].length&&o.splice(1,1),i.length<o.length?g.togoback():g.togoin(),n()})},!1),o.a.use(b.a),o.a.use(l.a),o.a.config.productionTip=!1,x.a.attach(document.body),new o.a({el:"#app",router:g,store:m,components:{App:r},template:"<App/>"})},SJI6:function(t,e){t.exports=Vuex},Tg7E:function(t,e){t.exports=MINT},"d8/S":function(t,e){},lRwf:function(t,e){t.exports=Vue},pRNm:function(t,e){t.exports=VueRouter},zzYx:function(t,e){!function(t,e){function n(){var e=a.getBoundingClientRect().width;e/l>540&&(e=540*l);var n=e/10;a.style.fontSize=n+"px",c.rem=t.rem=n}var i,o=t.document,a=o.documentElement,r=o.querySelector('meta[name="viewport"]'),s=o.querySelector('meta[name="flexible"]'),l=0,p=0,c=e.flexible||(e.flexible={});if(r){console.warn("将根据已有的meta标签来设置缩放比例");var u=r.getAttribute("content").match(/initial\-scale=([\d\.]+)/);u&&(p=parseFloat(u[1]),l=parseInt(1/p))}else if(s){var h=s.getAttribute("content");if(h){var m=h.match(/initial\-dpr=([\d\.]+)/),f=h.match(/maximum\-dpr=([\d\.]+)/);m&&(l=parseFloat(m[1]),p=parseFloat((1/l).toFixed(2))),f&&(l=parseFloat(f[1]),p=parseFloat((1/l).toFixed(2)))}}if(!l&&!p){var d=(t.navigator.appVersion.match(/android/gi),t.navigator.appVersion.match(/iphone/gi)),g=t.devicePixelRatio;p=1/(l=d?g>=3&&(!l||l>=3)?3:g>=2&&(!l||l>=2)?2:1:1)}if(a.setAttribute("data-dpr",l),!r)if((r=o.createElement("meta")).setAttribute("name","viewport"),r.setAttribute("content","initial-scale="+p+", maximum-scale="+p+", minimum-scale="+p+", user-scalable=no"),a.firstElementChild)a.firstElementChild.appendChild(r);else{var v=o.createElement("div");v.appendChild(r),o.write(v.innerHTML)}t.addEventListener("resize",function(){clearTimeout(i),i=setTimeout(n,300)},!1),t.addEventListener("pageshow",function(t){t.persisted&&(clearTimeout(i),i=setTimeout(n,300))},!1),"complete"===o.readyState?o.body.style.fontSize=12*l+"px":o.addEventListener("DOMContentLoaded",function(){o.body.style.fontSize=12*l+"px"},!1),n(),c.dpr=t.dpr=l,c.refreshRem=n,c.rem2px=function(t){var e=parseFloat(t)*this.rem;return"string"==typeof t&&t.match(/rem$/)&&(e+="px"),e},c.px2rem=function(t){var e=parseFloat(t)/this.rem;return"string"==typeof t&&t.match(/px$/)&&(e+="rem"),e}}(window,window.lib||(window.lib={}))}},["NHnr"]);
//# sourceMappingURL=app.ea006a7e314d9e945eac.js.map