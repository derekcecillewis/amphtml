(self.AMP=self.AMP||[]).push({n:"amp-reach-player",v:"123456789",f:(function(AMP){function c(a,b){function e(){}e.prototype=b.prototype;a.prototype=new e;a.prototype.constructor=a;for(var d in b)if(Object.defineProperties){var f=Object.getOwnPropertyDescriptor(b,d);f&&Object.defineProperty(a,d,f)}else a[d]=b[d]};Date.now();self.log=self.log||{user:null,dev:null};function g(a){AMP.BaseElement.call(this,a);this.a=null}c(g,AMP.BaseElement);g.prototype.preconnectCallback=function(a){this.preconnect.url("https://player-cdn.beachfrontmedia.com",a)};g.prototype.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a};
g.prototype.layoutCallback=function(){var a=this.element.getAttribute("data-embed-id")||"default",b=this.element.ownerDocument.createElement("iframe");b.setAttribute("frameborder","no");b.setAttribute("scrolling","no");b.src="https://player-cdn.beachfrontmedia.com/playerapi/v1/frame/player/?embed_id="+encodeURIComponent(a);this.applyFillContent(b);this.element.appendChild(b);this.a=b;return this.loadPromise(b)};
g.prototype.pauseCallback=function(){this.a&&this.a.contentWindow&&this.a.contentWindow.postMessage("pause","https://player-cdn.beachfrontmedia.com")};AMP.registerElement("amp-reach-player",g);
})});
//# sourceMappingURL=amp-reach-player-0.1.js.map

