(self.AMP=self.AMP||[]).push({n:"amp-dynamic-css-classes",v:"123456789",f:(function(AMP){Date.now();self.log=self.log||{user:null,dev:null};var e,f;function g(a,b){a=a.__AMP_TOP||a;return h(a,b)}function k(a){a=l(a);a=l(a);a=a.isSingleDoc()?a.win:a;return h(a,"viewer")}function l(a){return a.nodeType?g((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function h(a,b){var c=a.services;c||(c=a.services={});var d=c;a=d[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj};function m(a){var b=a.split("."),c="";return b.reduceRight(function(a,b){c&&(b+="."+c);c=b;a.push(b);return a},[])}
function n(a){var b=k(a).getUnconfirmedReferrerUrl();if(b){e||(e=self.document.createElement("a"),f=self.UrlCache||(self.UrlCache=Object.create(null)));var c=f[b];if(c)b=c;else{c=e;c.href=b;c.protocol||(c.href=c.href);var d={href:c.href,protocol:c.protocol,host:c.host,hostname:c.hostname,port:"0"==c.port?"":c.port,pathname:c.pathname,search:c.search,hash:c.hash,origin:null};"/"!==d.pathname[0]&&(d.pathname="/"+d.pathname);if("http:"==d.protocol&&80==d.port||"https:"==d.protocol&&443==d.port)d.port=
"",d.host=d.hostname;d.origin=c.origin&&"null"!=c.origin?c.origin:"data:"!=d.protocol&&d.host?d.protocol+"//"+d.host:d.href;b=f[b]=d}b=b.hostname}else b="";return"t.co"===b?m("twitter.com"):!b&&/Pinterest/.test(a.win.navigator.userAgent)?m("www.pinterest.com"):m(b)}function p(a,b){a.isBodyAvailable()?q(a.getBody(),b):a.whenBodyAvailable().then(function(a){return q(a,b)})}function q(a,b){var c=a.classList;for(a=0;a<b.length;a++)c.add(b[a])}
function r(a){var b=n(a).map(function(a){return"amp-referrer-"+a.replace(/\./g,"-")});g(a.win,"vsync").mutate(function(){p(a,b)})}function t(a){var b=k(a);b.isEmbedded()&&g(a.win,"vsync").mutate(function(){p(a,["amp-viewer"])})}AMP.registerServiceForDoc("amp-dynamic-css-classes",function(a){r(a);t(a);return{}});
})});
//# sourceMappingURL=amp-dynamic-css-classes-0.1.js.map

