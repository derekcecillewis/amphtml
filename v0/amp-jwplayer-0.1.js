(self.AMP=self.AMP||[]).push({n:"amp-jwplayer",v:"123456789",f:(function(AMP){var b;function e(a,c){function f(){}f.prototype=c.prototype;a.prototype=new f;a.prototype.constructor=a;for(var d in c)if(Object.defineProperties){var g=Object.getOwnPropertyDescriptor(c,d);g&&Object.defineProperty(a,d,g)}else a[d]=c[d]};Date.now();self.log=self.log||{user:null,dev:null};var h=self.log;function k(){if(h.user)return h.user;throw Error("failed to call initLogConstructor");};function l(a){AMP.BaseElement.call(this,a);this.c=this.b="";this.a=null}e(l,AMP.BaseElement);b=l.prototype;b.preconnectCallback=function(a){this.preconnect.url("https://content.jwplatform.com",a);this.preconnect.url("https://ssl.p.jwpcdn.com",a)};b.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a};
b.buildCallback=function(){this.b=k().assert(this.element.getAttribute("data-playlist-id")||this.element.getAttribute("data-media-id"),"Either the data-media-id or the data-playlist-id attributes must be specified for <amp-jwplayer> %s",this.element);this.c=k().assert(this.element.getAttribute("data-player-id"),"The data-player-id attribute is required for <amp-jwplayer> %s",this.element)};
b.layoutCallback=function(){var a=this.element.ownerDocument.createElement("iframe"),c="https://content.jwplatform.com/players/"+encodeURIComponent(this.b)+"-"+encodeURIComponent(this.c)+".html";a.setAttribute("frameborder","0");a.setAttribute("allowfullscreen","true");a.src=c;this.applyFillContent(a);this.element.appendChild(a);this.a=a;return this.loadPromise(a)};b.pauseCallback=function(){this.a&&this.a.contentWindow&&this.a.contentWindow.postMessage("pause","https://content.jwplatform.com")};
b.unlayoutCallback=function(){if(this.a){var a=this.a;a.parentElement&&a.parentElement.removeChild(a);this.a=null}return!0};b.createPlaceholderCallback=function(){if(this.element.hasAttribute("data-media-id")){var a=this.win.document.createElement("amp-img");a.setAttribute("src","https://content.jwplatform.com/thumbs/"+encodeURIComponent(this.b)+"-720.jpg");a.setAttribute("layout","fill");a.setAttribute("placeholder","");a.setAttribute("referrerpolicy","origin");return a}};
AMP.registerElement("amp-jwplayer",l);
})});
//# sourceMappingURL=amp-jwplayer-0.1.js.map

