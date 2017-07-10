(self.AMP=self.AMP||[]).push({n:"amp-reddit",v:"123456789",f:(function(AMP){function p(a,b){function d(){}d.prototype=b.prototype;a.prototype=new d;a.prototype.constructor=a;for(var c in b)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,c);e&&Object.defineProperty(a,c,e)}else a[c]=b[c]}function q(a,b){return b.toUpperCase()};var u=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function w(a){var b=Object.create(null);if(!a)return b;for(var d;d=u.exec(a);){var c=decodeURIComponent(d[1]).trim(),e=d[2]?decodeURIComponent(d[2]).trim():"";b[c]=e}return b};var x="";
function y(){var a=void 0,b=a||self,d;if(b.AMP_MODE)d=b.AMP_MODE;else{d=b;if(d.context&&d.context.mode)d=d.context.mode;else{var c=w(d.location.originalHash||d.location.hash),e=w(d.location.search);x||(x=d.AMP_CONFIG&&d.AMP_CONFIG.v?d.AMP_CONFIG.v:"01123456789");d={localDev:!1,development:!("1"!=c.development&&!d.AMP_DEV_MODE),examiner:"2"==c.development,filter:c.filter,minified:!0,lite:void 0!=e.amp_lite,test:!1,log:c.log,version:"123456789",rtvVersion:x}}d=b.AMP_MODE=
d}return d};Date.now();self.log=self.log||{user:null,dev:null};var B=self.log;function C(){if(B.user)return B.user;throw Error("failed to call initLogConstructor");};function E(a){var b=Object.create(null);a&&Object.assign(b,a);return b};var F=self.AMP_CONFIG||{},G=F.thirdPartyUrl||"https://3p.ampproject.net",H=F.thirdPartyFrameHost||"ampproject.net",I=F.cdnUrl||"https://cdn.ampproject.org";var J,K;
function L(a){var b;J||(J=self.document.createElement("a"),K=self.UrlCache||(self.UrlCache=Object.create(null)));var d=K[a];if(d)return d;var c=J;c.href=a;c.protocol||(c.href=c.href);var e={href:c.href,protocol:c.protocol,host:c.host,hostname:c.hostname,port:"0"==c.port?"":c.port,pathname:c.pathname,search:c.search,hash:c.hash,origin:null};"/"!==e.pathname[0]&&(e.pathname="/"+e.pathname);if("http:"==e.protocol&&80==e.port||"https:"==e.protocol&&443==e.port)e.port="",e.host=e.hostname;e.origin=c.origin&&
"null"!=c.origin?c.origin:"data:"!=e.protocol&&e.host?e.protocol+"//"+e.host:e.href;var f=e,g=f;return b?g:K[a]=g}function M(a){"string"==typeof a&&(a=L(a));var b;(b="https:"==a.protocol||"localhost"==a.hostname)||(a=a.hostname,b=a.length-10,b=0<=b&&a.indexOf(".localhost",b)==b);return b};function N(a,b){a=O(a);a=O(a);a=a.isSingleDoc()?a.win:a;return P(a,b)}function O(a){if(a.nodeType){var b=(a.ownerDocument||a).defaultView,b=b.__AMP_TOP||b;a=P(b,"ampdoc").getAmpDoc(a)}return a}function P(a,b){var d=a.services;d||(d=a.services={});var c=d;a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj};var Q=null;Promise.resolve();function R(a){a:{var b;b:{try{b=a.document.cookie;break b}catch(g){}b=void 0}if(a=b)for(a=a.split(";"),b=0;b<a.length;b++){var d=a[b].trim(),c=d.indexOf("=");if(-1!=c&&"AMP_EXP"==decodeURIComponent(d.substring(0,c).trim())){a=decodeURIComponent(d.substring(c+1).trim());break a}}a=null}var e=a,f=e?e.split(/\s*,\s*/g):[];a=Object.create(null);for(b=0;b<f.length;b++)0!=f[b].length&&("-"==f[b][0]?a[f[b].substr(1)]=!1:a[f[b]]=!0);return a};function S(a){for(var b=a.nodeName,d=0,c=0,e=a.previousElementSibling;e&&25>c&&100>d;)e.nodeName==b&&c++,d++,e=e.previousElementSibling;return 25>c&&100>d?"."+c:""};var T,U="Webkit webkit Moz moz ms O o".split(" ");function aa(a){var b,d;d=a.style;T||(T=E());var c=T.border;if(!c){c="border";if(void 0===d.border){var e="B"+"border".slice(1);b:{for(var f=0;f<U.length;f++){var g=U[f]+e;if(void 0!==d[g]){e=g;break b}}e=""}void 0!==d[e]&&(c=e)}T.border=c}d=c;d&&(a.style[d]=b?"none"+b:"none")};function V(a){a=parseFloat(a);return"number"===typeof a&&isFinite(a)?a:void 0};var W={};
function ba(a,b){C().assert("reddit","Attribute type required for <amp-ad>: %s",b);for(var d=0,c=a;c&&c!=c.parent;c=c.parent)d++;for(var d=String(d)+"-"+X(a),e=c=E(void 0),f=0;f<b.attributes.length;f++){var g=b.attributes[f];0==g.name.indexOf("data-")&&(e[g.name.substr(5).replace(/-([a-z])/g,q)]=g.value)}if(f=b.getAttribute("json")){var r;a:{try{r=JSON.parse(f);break a}catch(ia){}r=void 0}if(void 0===r)throw C().createError("Error parsing JSON in json attribute in element %s",b);for(var m in r)e[m]=r[m]}m=
c;r=Date.now();c=b.getAttribute("width");e=b.getAttribute("height");m=m?m:E(void 0);m.width=V(c);m.height=V(e);var z=a.location.href;"about:srcdoc"==z&&(z=a.parent.location.href);for(var A=N(b,"documentInfo").get(),D=N(b,"viewer"),c=D.getUnconfirmedReferrerUrl(),t=b.getPageLayoutBox(),e=m,f=A.sourceUrl,g=A.canonicalUrl,A=A.pageViewId,z={href:z},ca=b.tagName,da={localDev:!1,development:y().development,filter:y().filter,minified:!0,lite:y().lite,test:!1,log:y().log,version:y().version,rtvVersion:y().rtvVersion},
ea=!(!a.AMP_CONFIG||!a.AMP_CONFIG.canary),D=!D.isVisible(),t=t?{left:t.left,top:t.top,width:t.width,height:t.height}:null,fa=b.getIntersectionChangeEntry(),l=b,h=[],k=0;l&&1==l.nodeType&&25>k;){var v="";l.id&&(v="/"+l.id);var ga=l.nodeName.toLowerCase();h.push(""+ga+v+S(l));k++;l=l.parentElement}l=h.join();h=l.length;k=5381;for(v=0;v<h;v++)k=33*k^l.charCodeAt(v);l=String(k>>>0);if(!Q){Q=Object.create(null);if(a.AMP_CONFIG)for(var n in a.AMP_CONFIG)h=a.AMP_CONFIG[n],"number"===typeof h&&0<=h&&1>=h&&
(Q[n]=Math.random()<h);if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"])&&0<a.AMP_CONFIG["allow-doc-opt-in"].length&&(n=a.AMP_CONFIG["allow-doc-opt-in"],h=a.document.head.querySelector('meta[name="amp-experiments-opt-in"]')))for(h=h.getAttribute("content").split(","),k=0;k<h.length;k++)-1!=n.indexOf(h[k])&&(Q[h[k]]=!0);Object.assign(Q,R(a));if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-url-opt-in"])&&0<a.AMP_CONFIG["allow-url-opt-in"].length)for(n=a.AMP_CONFIG["allow-url-opt-in"],
a=w(a.location.originalHash||a.location.hash),h=0;h<n.length;h++)k=a["e-"+n[h]],"1"==k&&(Q[n[h]]=!0),"0"==k&&(Q[n[h]]=!1)}a=Q;e._context=E({ampcontextVersion:"123456789",ampcontextFilepath:I+"/123456789/ampcontext-v0.js",sourceUrl:f,referrer:c,canonicalUrl:g,pageViewId:A,location:z,startTime:r,tagName:ca,mode:da,canary:ea,hidden:D,initialLayoutRect:t,initialIntersection:fa,domFingerprint:l,experimentToggles:a,sentinel:d});(b=b.getAttribute("src"))&&(m.src=b);c=m;c.type=
"reddit";Object.assign(c._context,void 0);return c}
function ha(a,b){var d=ba(a,b),c=a.document.createElement("iframe");W[d.type]||(W[d.type]=0);W[d.type]+=1;a=Y(a);var e=L(a).hostname,f=JSON.stringify(E({host:e,type:d.type,count:W[d.type],attributes:d}));c.src=a;c.ampLocation=L(a);c.name=f;d.width&&(c.width=d.width);d.height&&(c.height=d.height);c.setAttribute("scrolling","no");aa(c);c.onload=function(){this.readyState="complete"};c.setAttribute("data-amp-3p-sentinel",d._context.sentinel);return c}
function Y(a){var b,d=a.bootstrapBaseUrl;if(d)a=d;else{var c;c=b;var e=a.document.querySelector('meta[name="amp-3p-iframe-src"]');if(e){var f=e.getAttribute("content"),g;g=void 0===g?"source":g;C().assert(null!=f,"%s %s must be available",e,g);C().assert(M(f)||/^(\/\/)/.test(f),'%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s',e,g,f);C().assert(-1==f.indexOf("?"),"3p iframe url must not include query string %s in element %s.",
f,e);g=L(f);C().assert("localhost"==g.hostname&&!c||g.origin!=L(a.location.href).origin,"3p iframe url must not be on the same origin as the current document %s (%s) in element %s. See https://github.com/ampproject/amphtml/blob/master/spec/amp-iframe-origin-policy.md for details.",f,g.origin,e);c=f+"?123456789"}else c=null;c||(c="https://d-"+X(a)+("."+H+"/123456789/")+"frame.html");a=a.bootstrapBaseUrl=c}return a}
function X(a){var b;if(a.crypto&&a.crypto.getRandomValues){var d=new Uint32Array(2);a.crypto.getRandomValues(d);b=String(d[0])+d[1]}else b=String(a.Math.random()).substr(2)+"0";return b};function Z(a){AMP.BaseElement.apply(this,arguments)}p(Z,AMP.BaseElement);
Z.prototype.preconnectCallback=function(a){"comment"===this.element.getAttribute("data-embedtype")?(this.preconnect.url("https://www.redditmedia.com",a),this.preconnect.url("https://www.redditstatic.com",a),this.preconnect.preload("https://www.redditstatic.com/comment-embed.js","script")):(this.preconnect.url("https://www.reddit.com",a),this.preconnect.url("https://cdn.embedly.com",a),this.preconnect.preload("https://embed.redditmedia.com/widgets/platform.js","script"));var b=this.preconnect,d=Y(this.win);
b.preload(d,"document");b.preload(G+"/123456789/f.js","script")};Z.prototype.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a};
Z.prototype.layoutCallback=function(){C().assert(this.element.getAttribute("data-src"),"The data-src attribute is required for <amp-reddit> %s",this.element);C().assert(this.element.getAttribute("data-embedtype"),"The data-embedtype attribute is required for <amp-reddit> %s",this.element);var a=ha(this.win,this.element);this.applyFillContent(a);this.element.appendChild(a);return this.loadPromise(a)};AMP.registerElement("amp-reddit",Z);
})});
//# sourceMappingURL=amp-reddit-0.1.js.map

