(self.AMP=self.AMP||[]).push({n:"amp-sticky-ad",v:"123456789",f:(function(AMP){var h;function k(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var f in b)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,f);e&&Object.defineProperty(a,f,e)}else a[f]=b[f]}function m(a,b){return b.length>a.length?!1:0==a.lastIndexOf(b,0)};var p=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;Date.now();self.log=self.log||{user:null,dev:null};var q=self.log;function r(){if(q.user)return q.user;throw Error("failed to call initLogConstructor");};function t(){var a,b=Object.create(null);a&&Object.assign(b,a);return b};var u=null;Promise.resolve();function v(a){a:{var b;b:{try{b=a.document.cookie;break b}catch(n){}b=void 0}if(a=b)for(a=a.split(";"),b=0;b<a.length;b++){var c=a[b].trim(),f=c.indexOf("=");if(-1!=f&&"AMP_EXP"==decodeURIComponent(c.substring(0,f).trim())){a=decodeURIComponent(c.substring(f+1).trim());break a}}a=null}var e=a,d=e?e.split(/\s*,\s*/g):[];a=Object.create(null);for(b=0;b<d.length;b++)0!=d[b].length&&("-"==d[b][0]?a[d[b].substr(1)]=!1:a[d[b]]=!0);return a};function w(a){m(a.tagName,"AMP-");if(a.createdCallback)return Promise.resolve(a);a.__AMP_UPG_PRM||(a.__AMP_UPG_PRM=new Promise(function(b){a.__AMP_UPG_RES=b}));return a.__AMP_UPG_PRM};var x,y="Webkit webkit Moz moz ms O o".split(" ");function z(a,b){var c=void 0;if(m(b,"--"))return b;x||(x=t());var f=x[b];if(!f||c){f=b;if(void 0===a[b]){var e=b.charAt(0).toUpperCase()+b.slice(1);a:{for(var d=0;d<y.length;d++){var n=y[d]+e;if(void 0!==a[n]){e=n;break a}}e=""}var g=e;void 0!==a[g]&&(f=g)}c||(x[b]=f)}return f}function A(a,b,c){var f;(b=z(a.style,b))&&(a.style[b]=f?c+f:c)}
function B(a,b){if(void 0===b){var c;c=(c=z(a.style,"display"))?a.style[c]:void 0;b="none"==c}A(a,"display",b?"":"none")};function C(a){AMP.BaseElement.call(this,a);this.g=this.getVsync();this.a=this.b=null;this.f=!1;this.c=null}k(C,AMP.BaseElement);h=C.prototype;h.isLayoutSupported=function(a){return"nodisplay"==a};
h.buildCallback=function(){var a=this;this.a=this.getViewport();this.element.classList.add("i-amphtml-sticky-ad-layout");var b=this.getRealChildren();r().assert(1==b.length&&"AMP-AD"==b[0].tagName,"amp-sticky-ad must have a single amp-ad child");this.b=b[0];this.setAsOwner(this.b);w(this.b).then(function(a){return a.whenBuilt()}).then(function(){a.mutateElement(function(){B(a.element,!0)})});var c=this.win.document.createElement("amp-sticky-ad-top-padding");this.element.insertBefore(c,this.b);this.c=
this.a.onScroll(function(){var b=a.a.getScrollTop(),e;var d=a.win;if(!u){u=Object.create(null);if(d.AMP_CONFIG)for(e in d.AMP_CONFIG){var c=d.AMP_CONFIG[e];"number"===typeof c&&0<=c&&1>=c&&(u[e]=Math.random()<c)}if(d.AMP_CONFIG&&Array.isArray(d.AMP_CONFIG["allow-doc-opt-in"])&&0<d.AMP_CONFIG["allow-doc-opt-in"].length&&(e=d.AMP_CONFIG["allow-doc-opt-in"],c=d.document.head.querySelector('meta[name="amp-experiments-opt-in"]')))for(var c=c.getAttribute("content").split(","),g=0;g<c.length;g++)-1!=e.indexOf(c[g])&&
(u[c[g]]=!0);Object.assign(u,v(d));if(d.AMP_CONFIG&&Array.isArray(d.AMP_CONFIG["allow-url-opt-in"])&&0<d.AMP_CONFIG["allow-url-opt-in"].length){e=d.AMP_CONFIG["allow-url-opt-in"];c=d.location.originalHash||d.location.hash;d=Object.create(null);if(c)for(var l;l=p.exec(c);)g=decodeURIComponent(l[1]).trim(),l=l[2]?decodeURIComponent(l[2]).trim():"",d[g]=l;for(c=0;c<e.length;c++)g=d["e-"+e[c]],"1"==g&&(u[e[c]]=!0),"0"==g&&(u[e[c]]=!1)}}e=u;e["sticky-ad-early-load"]&&1<b?D(a):(e=a.a.getSize().height,b>
e&&D(a))})};h.layoutCallback=function(){if(this.f){B(this.element,!0);var a=this.element.offsetHeight;this.a.updatePaddingBottom(a);this.updateInViewport(this.b,!0);this.scheduleLayout(this.b)}return Promise.resolve()};h.isAlwaysFixed=function(){return!0};h.unlayoutCallback=function(){this.a.updatePaddingBottom(0);return!0};h.detachedCallback=function(){E(this)};h.collapsedCallback=function(){var a=this;B(this.element,!1);this.g.mutate(function(){a.a.updatePaddingBottom(0)})};
function E(a){a.c&&(a.c(),a.c=null)}function D(a){E(a);a.deferMutate(function(){a.f=!0;F(a);a.a.addToFixedLayer(a.element,!0).then(function(){return G(a)})})}function G(a){w(a.b).then(function(b){b.whenBuilt().then(a.h.bind(a))})}
h.h=function(){var a=this,b=this.b;this.updateInViewport(b,!0);this.scheduleLayout(b);var c=b.signals();return Promise.race([c.whenSignal("render-start"),c.whenSignal("load-end")]).then(function(){return a.g.mutatePromise(function(){a.element.setAttribute("visible","");a.a.updatePaddingBottom(a.element.offsetHeight);var b=(a.win.getComputedStyle(a.element)||t()).backgroundColor,c=b.replace(/\(([^,]+),([^,]+),([^,)]+),[^)]+\)/g,"($1,$2,$3, 1)");b!=c&&(r().warn("AMP-STICKY-AD","Do not allow container to be semitransparent"),
A(a.element,"background-color",c))})})};function F(a){var b=a.win.document.createElement("button");b.classList.add("amp-sticky-ad-close-button");b.setAttribute("aria-label",a.element.getAttribute("data-close-button-aria-label")||"Close this ad");var c=a.i.bind(a);b.addEventListener("click",c);a.element.appendChild(b)}
h.i=function(){var a=this;this.g.mutate(function(){a.f=!1;a.scheduleUnlayout(a.b);a.a.removeFromFixedLayer(a.element);var b=a.element;b.parentElement&&b.parentElement.removeChild(b);a.a.updatePaddingBottom(0)})};(function(a){a.registerElement("amp-sticky-ad",C,"amp-sticky-ad{position:fixed!important;text-align:center;bottom:0!important;left:0;width:100%!important;z-index:11;max-height:100px!important;box-sizing:border-box;opacity:1!important;background-image:none!important;background-color:#fff;box-shadow:0 0 5px 0 rgba(0,0,0,.2)!important;margin-bottom:0!important}amp-sticky-ad-top-padding{display:block;width:100%!important;background:#fff;height:4px;max-height:5px!important;z-index:12}.i-amphtml-sticky-ad-layout{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;visibility:hidden!important;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;overflow:visible!important;-webkit-transform:translateZ(0)!important;transform:translateZ(0)!important}amp-sticky-ad[visible]{visibility:visible!important}.i-amphtml-sticky-ad-layout>amp-ad{display:block}.amp-sticky-ad-close-button{position:absolute;visibility:hidden;width:28px;height:28px;top:-28px;right:0;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='13' height='13' viewBox='341 8 13 13' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%234F4F4F' d='M354 9.31L352.69 8l-5.19 5.19L342.31 8 341 9.31l5.19 5.19-5.19 5.19 1.31 1.31 5.19-5.19 5.19 5.19 1.31-1.31-5.19-5.19z' fill-rule='evenodd'/%3E%3C/svg%3E\");background-size:13px 13px;background-position:9px center;background-color:#fff;background-repeat:no-repeat;box-shadow:0 0 5px 0 rgba(0,0,0,.2);border:none;border-top-left-radius:12px}amp-sticky-ad[visible]>.amp-sticky-ad-close-button{visibility:visible}.amp-sticky-ad-close-button:before{position:absolute;content:'';top:-20px;right:0;left:-20px;bottom:0}[dir=rtl] .amp-sticky-ad-close-button{right:auto;left:0;border-top-left-radius:0;border-top-right-radius:12px;background-position:6px center}[dir=rtl] .amp-sticky-ad-close-button:before{right:-20px;left:0}\n/*# sourceURL=/extensions/amp-sticky-ad/1.0/amp-sticky-ad.css*/")})(self.AMP);
})});
//# sourceMappingURL=amp-sticky-ad-1.0.js.map

