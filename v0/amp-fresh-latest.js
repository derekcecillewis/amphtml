(self.AMP=self.AMP||[]).push({n:"amp-fresh",v:"123456789",f:(function(AMP){function g(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var d in b)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,d);e&&Object.defineProperty(a,d,e)}else a[d]=b[d]};var h=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;Date.now();self.log=self.log||{user:null,dev:null};var k=self.log;function l(){if(k.user)return k.user;throw Error("failed to call initLogConstructor");};function m(a){var b=String(Date.now()),b=encodeURIComponent("amp-fresh")+"="+encodeURIComponent(b);if(b){a=a.split("#",2);var c=a[0].split("?",2),b=c[0]+(c[1]?"?"+c[1]+"&"+b:"?"+b),b=b+(a[1]?"#"+a[1]:"")}else b=a;return b};function n(a,b){a=a.__AMP_TOP||a;return p(a,b)}function q(a){return a.nodeType?n((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function r(a){a=q(a);return a.isSingleDoc()?a.win:a}function p(a,b){var c=t(a);a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function t(a){var b=a.services;b||(b=a.services={});return b};var u=null;Promise.resolve();
function v(a){var b;if(!u){u=Object.create(null);if(a.AMP_CONFIG)for(b in a.AMP_CONFIG){var c=a.AMP_CONFIG[b];"number"===typeof c&&0<=c&&1>=c&&(u[b]=Math.random()<c)}if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"])&&0<a.AMP_CONFIG["allow-doc-opt-in"].length&&(b=a.AMP_CONFIG["allow-doc-opt-in"],c=a.document.head.querySelector('meta[name="amp-experiments-opt-in"]')))for(var c=c.getAttribute("content").split(","),d=0;d<c.length;d++)-1!=b.indexOf(c[d])&&(u[c[d]]=!0);Object.assign(u,w(a));
if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-url-opt-in"])&&0<a.AMP_CONFIG["allow-url-opt-in"].length){b=a.AMP_CONFIG["allow-url-opt-in"];c=a.location.originalHash||a.location.hash;a=Object.create(null);if(c)for(var e;e=h.exec(c);)d=decodeURIComponent(e[1]).trim(),e=e[2]?decodeURIComponent(e[2]).trim():"",a[d]=e;for(c=0;c<b.length;c++)d=a["e-"+b[c]],"1"==d&&(u[b[c]]=!0),"0"==d&&(u[b[c]]=!1)}}b=u;var f=b;return!!f["amp-fresh"]}
function w(a){a:{var b;b:{try{b=a.document.cookie;break b}catch(C){}b=void 0}if(a=b)for(a=a.split(";"),b=0;b<a.length;b++){var c=a[b].trim(),d=c.indexOf("=");if(-1!=d&&"AMP_EXP"==decodeURIComponent(c.substring(0,d).trim())){a=decodeURIComponent(c.substring(d+1).trim());break a}}a=null}var e=a,f=e?e.split(/\s*,\s*/g):[];a=Object.create(null);for(b=0;b<f.length;b++)0!=f[b].length&&("-"==f[b][0]?a[f[b].substr(1)]=!1:a[f[b]]=!0);return a};function x(a){var b=this;this.ampdoc=a;v(this.ampdoc.win)&&(this.a=Object.create(null),this.g=y(this).then(function(a){z(b,a)}).catch(function(){A(b)}))}x.prototype.register=function(a,b){l().assert(!this.a[a],"duplicate amp-fresh id used: "+a);this.a[a]=b};function y(a){var b=m(a.ampdoc.win.location.href);return Promise.all([n(a.ampdoc.win,"xhr").fetchDocument(b,{requireAmpResponseSourceOrigin:!1}),a.ampdoc.whenReady()]).then(function(a){return a[0]})}
function z(a,b){Object.keys(a.a).forEach(function(c){var d=b.getElementById(c);if(d){var e=a.a[c];e.update(l().assertElement(d))}})}function A(a){l().error("AMP-FRESH","Failed fetching fresh document through amp-fresh");a.ampdoc.whenReady().then(function(){Object.keys(a.a).forEach(function(b){a.a[b].setFreshReady()})})};function B(a){AMP.BaseElement.call(this,a);this.c=!1;this.b="";this.f=null}g(B,AMP.BaseElement);B.prototype.isLayoutSupported=function(){return!0};
B.prototype.buildCallback=function(){this.c=v(this.win);l().assert(this.c,"Experiment amp-fresh disabled");this.b=l().assert(this.element.getAttribute("id"),"amp-fresh must have an id.");var a=q(this.element),b=r(a),c=t(b),d=c.ampFreshManager;d||(d=c.ampFreshManager={obj:null,promise:null,resolve:null,context:null,ctor:null});d.ctor||d.obj||(d.ctor=x,d.context=a,d.resolve&&p(b,"ampFreshManager"));a=q(this.element);a=r(a);this.f=p(a,"ampFreshManager");this.f.register(this.b,this);this.element.hasAttribute("aria-live")||
this.element.setAttribute("aria-live","polite")};B.prototype.update=function(a){var b=this,c=this.win.document.adoptNode(a);this.mutateElement(function(){b.element.textContent="";for(var a=b.element,e=a.ownerDocument.createDocumentFragment(),f=c.firstChild;f;f=f.nextSibling)e.appendChild(f.cloneNode(!0));a.appendChild(e);b.setFreshReady()})};B.prototype.setFreshReady=function(){this.element.classList.add("amp-fresh-ready")};AMP.registerElement("amp-fresh",B,"amp-fresh.amp-fresh-ready{visibility:visible}\n/*# sourceURL=/extensions/amp-fresh/0.1/amp-fresh.css*/");
})});
//# sourceMappingURL=amp-fresh-0.1.js.map

