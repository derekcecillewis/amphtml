(self.AMP=self.AMP||[]).push({n:"amp-facebook-like",v:"123456789",f:(function(AMP){function v(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var d in b)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,d);e&&Object.defineProperty(a,d,e)}else a[d]=b[d]}function x(a,b){return b.toUpperCase()};var y=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function z(a){var b=Object.create(null);if(!a)return b;for(var c;c=y.exec(a);){var d=decodeURIComponent(c[1]).trim(),e=c[2]?decodeURIComponent(c[2]).trim():"";b[d]=e}return b};var A="";
function C(){var a=void 0,b=a||self,c;if(b.AMP_MODE)c=b.AMP_MODE;else{c=b;if(c.context&&c.context.mode)c=c.context.mode;else{var d=z(c.location.originalHash||c.location.hash),e=z(c.location.search);A||(A=c.AMP_CONFIG&&c.AMP_CONFIG.v?c.AMP_CONFIG.v:"01123456789");c={localDev:!1,development:!("1"!=d.development&&!c.AMP_DEV_MODE),examiner:"2"==d.development,filter:d.filter,minified:!0,lite:void 0!=e.amp_lite,test:!1,log:d.log,version:"123456789",rtvVersion:A}}c=b.AMP_MODE=
c}return c};Date.now();self.log=self.log||{user:null,dev:null};var D=self.log;function E(){if(D.user)return D.user;throw Error("failed to call initLogConstructor");}function F(){if(D.dev)return D.dev;throw Error("failed to call initLogConstructor");};function H(a){var b=Object.create(null);a&&Object.assign(b,a);return b};var I=self.AMP_CONFIG||{},aa=I.thirdPartyUrl||"https://3p.ampproject.net",ba=I.thirdPartyFrameHost||"ampproject.net",ca=I.cdnUrl||"https://cdn.ampproject.org";var J,K;
function L(a){var b;J||(J=self.document.createElement("a"),K=self.UrlCache||(self.UrlCache=Object.create(null)));var c=K[a];if(c)return c;var d=J;d.href=a;d.protocol||(d.href=d.href);var e={href:d.href,protocol:d.protocol,host:d.host,hostname:d.hostname,port:"0"==d.port?"":d.port,pathname:d.pathname,search:d.search,hash:d.hash,origin:null};"/"!==e.pathname[0]&&(e.pathname="/"+e.pathname);if("http:"==e.protocol&&80==e.port||"https:"==e.protocol&&443==e.port)e.port="",e.host=e.hostname;e.origin=d.origin&&
"null"!=d.origin?d.origin:"data:"!=e.protocol&&e.host?e.protocol+"//"+e.host:e.href;var f=e,g=f;return b?g:K[a]=g}function da(a){"string"==typeof a&&(a=L(a));var b;(b="https:"==a.protocol||"localhost"==a.hostname)||(a=a.hostname,b=a.length-10,b=0<=b&&a.indexOf(".localhost",b)==b);return b};function M(a,b){a=N(a);a=N(a);a=a.isSingleDoc()?a.win:a;return O(a,b)}function N(a){if(a.nodeType){var b=(a.ownerDocument||a).defaultView,b=b.__AMP_TOP||b;a=O(b,"ampdoc").getAmpDoc(a)}return a}function O(a,b){var c=a.services;c||(c=a.services={});var d=c;a=d[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj};function P(a,b){try{return JSON.parse(a)}catch(c){b&&b(c)}};var Q=null;Promise.resolve();function ea(a){a:{var b;b:{try{b=a.document.cookie;break b}catch(g){}b=void 0}if(a=b)for(a=a.split(";"),b=0;b<a.length;b++){var c=a[b].trim(),d=c.indexOf("=");if(-1!=d&&"AMP_EXP"==decodeURIComponent(c.substring(0,d).trim())){a=decodeURIComponent(c.substring(d+1).trim());break a}}a=null}var e=a,f=e?e.split(/\s*,\s*/g):[];a=Object.create(null);for(b=0;b<f.length;b++)0!=f[b].length&&("-"==f[b][0]?a[f[b].substr(1)]=!1:a[f[b]]=!0);return a};function fa(a){for(var b=a.nodeName,c=0,d=0,e=a.previousElementSibling;e&&25>d&&100>c;)e.nodeName==b&&d++,c++,e=e.previousElementSibling;return 25>d&&100>c?"."+d:""};var R,S="Webkit webkit Moz moz ms O o".split(" ");function ga(a){var b,c;c=a.style;R||(R=H());var d=R.border;if(!d){d="border";if(void 0===c.border){var e="B"+"border".slice(1);b:{for(var f=0;f<S.length;f++){var g=S[f]+e;if(void 0!==c[g]){e=g;break b}}e=""}void 0!==c[e]&&(d=e)}R.border=d}c=d;c&&(a.style[c]=b?"none"+b:"none")};function T(a){a=parseFloat(a);return"number"===typeof a&&isFinite(a)?a:void 0};var U={};
function ha(a,b){E().assert("facebook","Attribute type required for <amp-ad>: %s",b);for(var c=0,d=a;d&&d!=d.parent;d=d.parent)c++;for(var c=String(c)+"-"+V(a),e=d=H(void 0),f=0;f<b.attributes.length;f++){var g=b.attributes[f];0==g.name.indexOf("data-")&&(e[g.name.substr(5).replace(/-([a-z])/g,x)]=g.value)}if(f=b.getAttribute("json")){f=P(f);if(void 0===f)throw E().createError("Error parsing JSON in json attribute in element %s",b);for(var k in f)e[k]=f[k]}k=d;d=Date.now();e=b.getAttribute("width");f=
b.getAttribute("height");k=k?k:H(void 0);k.width=T(e);k.height=T(f);var q=a.location.href;"about:srcdoc"==q&&(q=a.parent.location.href);for(var r=M(b,"documentInfo").get(),t=M(b,"viewer"),e=t.getUnconfirmedReferrerUrl(),p=b.getPageLayoutBox(),f=k,g=r.sourceUrl,m=r.canonicalUrl,r=r.pageViewId,q={href:q},G=b.tagName,w={localDev:!1,development:C().development,filter:C().filter,minified:!0,lite:C().lite,test:!1,log:C().log,version:C().version,rtvVersion:C().rtvVersion},ia=!(!a.AMP_CONFIG||!a.AMP_CONFIG.canary),
t=!t.isVisible(),p=p?{left:p.left,top:p.top,width:p.width,height:p.height}:null,ja=b.getIntersectionChangeEntry(),n=b,h=[],l=0;n&&1==n.nodeType&&25>l;){var B="";n.id&&(B="/"+n.id);var ka=n.nodeName.toLowerCase();h.push(""+ka+B+fa(n));l++;n=n.parentElement}n=h.join();h=n.length;l=5381;for(B=0;B<h;B++)l=33*l^n.charCodeAt(B);n=String(l>>>0);if(!Q){Q=Object.create(null);if(a.AMP_CONFIG)for(var u in a.AMP_CONFIG)h=a.AMP_CONFIG[u],"number"===typeof h&&0<=h&&1>=h&&(Q[u]=Math.random()<h);if(a.AMP_CONFIG&&
Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"])&&0<a.AMP_CONFIG["allow-doc-opt-in"].length&&(u=a.AMP_CONFIG["allow-doc-opt-in"],h=a.document.head.querySelector('meta[name="amp-experiments-opt-in"]')))for(h=h.getAttribute("content").split(","),l=0;l<h.length;l++)-1!=u.indexOf(h[l])&&(Q[h[l]]=!0);Object.assign(Q,ea(a));if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-url-opt-in"])&&0<a.AMP_CONFIG["allow-url-opt-in"].length)for(u=a.AMP_CONFIG["allow-url-opt-in"],a=z(a.location.originalHash||a.location.hash),
h=0;h<u.length;h++)l=a["e-"+u[h]],"1"==l&&(Q[u[h]]=!0),"0"==l&&(Q[u[h]]=!1)}a=Q;f._context=H({ampcontextVersion:"123456789",ampcontextFilepath:ca+"/123456789/ampcontext-v0.js",sourceUrl:g,referrer:e,canonicalUrl:m,pageViewId:r,location:q,startTime:d,tagName:G,mode:w,canary:ia,hidden:t,initialLayoutRect:p,initialIntersection:ja,domFingerprint:n,experimentToggles:a,sentinel:c});(b=b.getAttribute("src"))&&(k.src=b);d=k;d.type="facebook";Object.assign(d._context,void 0);
return d}function la(a,b){var c=ha(a,b),d=a.document.createElement("iframe");U[c.type]||(U[c.type]=0);U[c.type]+=1;a=W(a);var e=L(a).hostname,f=JSON.stringify(H({host:e,type:c.type,count:U[c.type],attributes:c}));d.src=a;d.ampLocation=L(a);d.name=f;c.width&&(d.width=c.width);c.height&&(d.height=c.height);d.setAttribute("scrolling","no");ga(d);d.onload=function(){this.readyState="complete"};d.setAttribute("data-amp-3p-sentinel",c._context.sentinel);return d}
function W(a){var b,c=a.bootstrapBaseUrl;if(c)a=c;else{var d;d=b;var e=a.document.querySelector('meta[name="amp-3p-iframe-src"]');if(e){var f=e.getAttribute("content"),g;g=void 0===g?"source":g;E().assert(null!=f,"%s %s must be available",e,g);E().assert(da(f)||/^(\/\/)/.test(f),'%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s',e,g,f);E().assert(-1==f.indexOf("?"),"3p iframe url must not include query string %s in element %s.",
f,e);g=L(f);E().assert("localhost"==g.hostname&&!d||g.origin!=L(a.location.href).origin,"3p iframe url must not be on the same origin as the current document %s (%s) in element %s. See https://github.com/ampproject/amphtml/blob/master/spec/amp-iframe-origin-policy.md for details.",f,g.origin,e);d=f+"?123456789"}else d=null;d||(d="https://d-"+V(a)+("."+ba+"/123456789/")+"frame.html");a=a.bootstrapBaseUrl=d}return a}
function V(a){var b;if(a.crypto&&a.crypto.getRandomValues){var c=new Uint32Array(2);a.crypto.getRandomValues(c);b=String(c[0])+c[1]}else b=String(a.Math.random()).substr(2)+"0";return b};function ma(a){if(!X(a))return null;var b=a.indexOf("{");try{return JSON.parse(a.substr(b))}catch(c){return F().error("MESSAGING","Failed to parse message: "+a,c),null}}function X(a){return"string"==typeof a&&0==a.indexOf("amp-")&&-1!=a.indexOf("{")};function Y(a,b,c){var d=a.listeningFors;!d&&c&&(d=a.listeningFors=Object.create(null));a=d||null;if(!a)return a;var e=a[b];!e&&c&&(e=a[b]=[]);return e||null}function na(a,b){var c=!0,d=L(b.src).origin,e=c?b.getAttribute("data-amp-3p-sentinel"):"amp";a=Y(a,e,!0);for(var f,e=0;e<a.length;e++){var g=a[e];if(g.frame===b){f=g;break}}f||(f={frame:b,origin:d,events:Object.create(null)},a.push(f));return f.events}
function oa(a){for(var b={sentinel:"unlisten"},c=a.length-1;0<=c;c--){var d=a[c];if(!d.frame.contentWindow){a.splice(c,1);var e=d.events,f;for(f in e)e[f].splice(0,Infinity).forEach(function(a){a(b)})}}}
function pa(a){if(!a.listeningFors){var b=function(b){if(b.data){var c=qa(b.data);if(c&&c.sentinel){var e;e=c.sentinel;var f=b.origin,g=b.source,k=Y(a,e);if(k){for(var q,r=0;r<k.length;r++){var t=k[r],p=t.frame.contentWindow;if(p)if("amp"===e){if(t.origin===f&&p==g){q=t;break}}else{var m;if(!(m=g==p))b:{for(m=g;m&&m!=m.parent;m=m.parent)if(m==p){m=!0;break b}m=!1}if(m){q=t;break}}else setTimeout(oa,0,k)}e=q?q.events:null}else e=k;var G=e;if(G){var w=G[c.type];if(w)for(w=w.slice(),e=0;e<w.length;e++)(0,w[e])(c,
b.source,b.origin)}}}};a.addEventListener("message",b)}}function ra(a,b){function c(c,e,f){if(d||e==a.contentWindow)"unlisten"==c.sentinel?k():b(c,e,f)}var d,e="embed-size",f=a.ownerDocument.defaultView;pa(f);var f=na(f,a),g=f[e]||(f[e]=[]),k;g.push(c);k=function(){if(c){var a=g.indexOf(c);-1<a&&g.splice(a,1);b=g=c=null}}}
function qa(a){"string"==typeof a&&(a="{"==a.charAt(0)?P(a,function(a){F().warn("IFRAME-HELPER","Postmessage could not be parsed. Is it in a valid JSON format?",a)})||null:X(a)?ma(a):null);return a};function Z(a){AMP.BaseElement.call(this,a);this.a=null}v(Z,AMP.BaseElement);Z.prototype.renderOutsideViewport=function(){return.75};Z.prototype.preconnectCallback=function(a){this.preconnect.url("https://facebook.com",a);this.preconnect.preload("https://connect.facebook.net/"+window.navigator.language.replace("-","_")+"/sdk.js","script");var b=this.preconnect,c=W(this.win);b.preload(c,"document");b.preload(aa+"/123456789/f.js","script")};
Z.prototype.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a};Z.prototype.layoutCallback=function(){var a=this,b=la(this.win,this.element);this.applyFillContent(b);ra(b,function(b){a.attemptChangeHeight(b.height).catch(function(){})});this.element.appendChild(b);this.a=b;return this.loadPromise(b)};Z.prototype.unlayoutCallback=function(){if(this.a){var a=this.a;a.parentElement&&a.parentElement.removeChild(a);this.a=null}return!0};
AMP.registerElement("amp-facebook-like",Z);
})});
//# sourceMappingURL=amp-facebook-like-0.1.js.map

