/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-ambientlight-beacon-blobworkers-canvasblending-canvastext-cssfilters-dataworkers-devicemotion_deviceorientation-forcetouch-framed-fullscreen-gamepads-geolocation-history-indexeddb-indexeddbblob-localstorage-lowbandwidth-notification-passiveeventlisteners-performance-pointerevents-pointerlock-proximity-sessionstorage-sharedworkers-speechrecognition-speechsynthesis-touchevents-transferables-vibrate-webgl-websockets-webworkers-setclasses !*/
!function(e,t,n){function r(e,t){return typeof e===t}function o(){var e,t,n,o,i,a,s;for(var c in w)if(w.hasOwnProperty(c)){if(e=[],t=w[c],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=r(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)a=e[i],s=a.split("."),1===s.length?Modernizr[s[0]]=o:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=o),x.push((o?"":"no-")+s.join("-"))}}function i(e){var t=O.className,n=Modernizr._config.classPrefix||"";if(k&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),k?O.className.baseVal=t:O.className=t)}function a(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):k?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function s(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function c(e,t){if("object"==typeof e)for(var n in e)j(e,n)&&c(n,e[n]);else{e=e.toLowerCase();var r=e.split("."),o=Modernizr[r[0]];if(2==r.length&&(o=o[r[1]]),"undefined"!=typeof o)return Modernizr;t="function"==typeof t?t():t,1==r.length?Modernizr[r[0]]=t:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=t),i([(t&&0!=t?"":"no-")+r.join("-")]),Modernizr._trigger(e,t)}return Modernizr}function d(){var e=t.body;return e||(e=a(k?"svg":"body"),e.fake=!0),e}function u(e,n,r,o){var i,s,c,u,l="modernizr",f=a("div"),p=d();if(parseInt(r,10))for(;r--;)c=a("div"),c.id=o?o[r]:l+(r+1),f.appendChild(c);return i=a("style"),i.type="text/css",i.id="s"+l,(p.fake?p:f).appendChild(i),p.appendChild(f),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),f.id=l,p.fake&&(p.style.background="",p.style.overflow="hidden",u=O.style.overflow,O.style.overflow="hidden",O.appendChild(p)),s=n(f,e),p.fake?(p.parentNode.removeChild(p),O.style.overflow=u,O.offsetHeight):f.parentNode.removeChild(f),!!s}function l(e,t){return!!~(""+e).indexOf(t)}function f(e,t){return function(){return e.apply(t,arguments)}}function p(e,t,n){var o;for(var i in e)if(e[i]in t)return n===!1?e[i]:(o=t[e[i]],r(o,"function")?f(o,n||t):o);return!1}function v(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function b(t,n,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,t,n);var i=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(i){var a=i.error?"error":"log";i[a].call(i,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!n&&t.currentStyle&&t.currentStyle[r];return o}function m(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(v(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+v(t[o])+":"+r+")");return i=i.join(" or "),u("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==b(e,null,"position")})}return n}function y(e,t,o,i){function c(){u&&(delete W.style,delete W.modElem)}if(i=r(i,"undefined")?!1:i,!r(o,"undefined")){var d=m(e,o);if(!r(d,"undefined"))return d}for(var u,f,p,v,b,y=["modernizr","tspan","samp"];!W.style&&y.length;)u=!0,W.modElem=a(y.shift()),W.style=W.modElem.style;for(p=e.length,f=0;p>f;f++)if(v=e[f],b=W.style[v],l(v,"-")&&(v=s(v)),W.style[v]!==n){if(i||r(o,"undefined"))return c(),"pfx"==t?v:!0;try{W.style[v]=o}catch(h){}if(W.style[v]!=b)return c(),"pfx"==t?v:!0}return c(),!1}function h(e,t,n,o,i){var a=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+z.join(a+" ")+a).split(" ");return r(t,"string")||r(t,"undefined")?y(s,t,o,i):(s=(e+" "+A.join(a+" ")+a).split(" "),p(s,t,n))}function g(e,t){var n=e.deleteDatabase(t);n.onsuccess=function(){c("indexeddb.deletedatabase",!0)},n.onerror=function(){c("indexeddb.deletedatabase",!1)}}function T(e,t,r){return h(e,n,n,t,r)}var x=[],w=[],S={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){w.push({name:e,fn:t,options:n})},addAsyncTest:function(e){w.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=S,Modernizr=new Modernizr,Modernizr.addTest("geolocation","geolocation"in navigator),Modernizr.addTest("history",function(){var t=navigator.userAgent;return-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone")||"file:"===location.protocol?e.history&&"pushState"in e.history:!1}),Modernizr.addTest("notification",function(){if(!e.Notification||!e.Notification.requestPermission)return!1;if("granted"===e.Notification.permission)return!0;try{new e.Notification("")}catch(t){if("TypeError"===t.name)return!1}return!0});var C=!1;try{C="WebSocket"in e&&2===e.WebSocket.CLOSING}catch(_){}Modernizr.addTest("websockets",C),Modernizr.addTest("passiveeventlisteners",function(){var t=!1;try{var n=Object.defineProperty({},"passive",{get:function(){t=!0}});e.addEventListener("test",null,n)}catch(r){}return t}),Modernizr.addTest("devicemotion","DeviceMotionEvent"in e),Modernizr.addTest("deviceorientation","DeviceOrientationEvent"in e),Modernizr.addTest("beacon","sendBeacon"in navigator),Modernizr.addTest("lowbandwidth",function(){var e=navigator.connection||{type:0};return 3==e.type||4==e.type||/^[23]g$/.test(e.type)}),Modernizr.addTest("localstorage",function(){var e="modernizr";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(t){return!1}}),Modernizr.addTest("sessionstorage",function(){var e="modernizr";try{return sessionStorage.setItem(e,e),sessionStorage.removeItem(e),!0}catch(t){return!1}}),Modernizr.addTest("framed",e.location!=top.location),Modernizr.addTest("speechsynthesis","SpeechSynthesisUtterance"in e),Modernizr.addTest("sharedworkers","SharedWorker"in e),Modernizr.addTest("webworkers","Worker"in e);var O=t.documentElement,k="svg"===O.nodeName.toLowerCase();Modernizr.addTest("webgl",function(){var t=a("canvas"),n="probablySupportsContext"in t?"probablySupportsContext":"supportsContext";return n in t?t[n]("webgl")||t[n]("experimental-webgl"):"WebGLRenderingContext"in e});var E=function(){function e(e,t){var o;return e?(t&&"string"!=typeof t||(t=a(t||"div")),e="on"+e,o=e in t,!o&&r&&(t.setAttribute||(t=a("div")),t.setAttribute(e,""),o="function"==typeof t[e],t[e]!==n&&(t[e]=n),t.removeAttribute(e)),o):!1}var r=!("onblur"in t.documentElement);return e}();S.hasEvent=E,Modernizr.addTest("ambientlight",E("devicelight",e)),Modernizr.addTest("canvas",function(){var e=a("canvas");return!(!e.getContext||!e.getContext("2d"))}),Modernizr.addTest("canvastext",function(){return Modernizr.canvas===!1?!1:"function"==typeof a("canvas").getContext("2d").fillText}),Modernizr.addTest("canvasblending",function(){if(Modernizr.canvas===!1)return!1;var e=a("canvas").getContext("2d");try{e.globalCompositeOperation="screen"}catch(t){}return"screen"===e.globalCompositeOperation});var L=S._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];S._prefixes=L;var R="CSS"in e&&"supports"in e.CSS,B="supportsCSS"in e;Modernizr.addTest("supports",R||B),Modernizr.addTest("blobconstructor",function(){try{return!!new Blob}catch(e){return!1}},{aliases:["blob-constructor"]}),Modernizr.addTest("typedarrays","ArrayBuffer"in e);var j;!function(){var e={}.hasOwnProperty;j=r(e,"undefined")||r(e.call,"undefined")?function(e,t){return t in e&&r(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),S._l={},S.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},S._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e,r;for(e=0;e<n.length;e++)(r=n[e])(t)},0),delete this._l[e]}},Modernizr._q.push(function(){S.addTest=c}),Modernizr.addAsyncTest(function(){function t(){clearTimeout(n),e.removeEventListener("deviceproximity",t),c("proximity",!0)}var n,r=300;"ondeviceproximity"in e&&"onuserproximity"in e?(e.addEventListener("deviceproximity",t),n=setTimeout(function(){e.removeEventListener("deviceproximity",t),c("proximity",!1)},r)):c("proximity",!1)}),Modernizr.addAsyncTest(function(){function t(){c("blobworkers",!1),n()}function n(){d&&o.revokeObjectURL(d),s&&s.terminate(),u&&clearTimeout(u)}try{var r=e.BlobBuilder,o=e.URL;Modernizr._config.usePrefix&&(r=r||e.MozBlobBuilder||e.WebKitBlobBuilder||e.MSBlobBuilder||e.OBlobBuilder,o=o||e.MozURL||e.webkitURL||e.MSURL||e.OURL);var i,a,s,d,u,l="Modernizr",f="this.onmessage=function(e){postMessage(e.data)}";try{i=new Blob([f],{type:"text/javascript"})}catch(p){}i||(a=new r,a.append(f),i=a.getBlob()),d=o.createObjectURL(i),s=new Worker(d),s.onmessage=function(e){c("blobworkers",l===e.data),n()},s.onerror=t,u=setTimeout(t,200),s.postMessage(l)}catch(p){t()}}),Modernizr.addAsyncTest(function(){try{var e="Modernizr",t=new Worker("data:text/javascript;base64,dGhpcy5vbm1lc3NhZ2U9ZnVuY3Rpb24oZSl7cG9zdE1lc3NhZ2UoZS5kYXRhKX0=");t.onmessage=function(n){t.terminate(),c("dataworkers",e===n.data),t=null},t.onerror=function(){c("dataworkers",!1),t=null},setTimeout(function(){c("dataworkers",!1)},200),t.postMessage(e)}catch(n){setTimeout(function(){c("dataworkers",!1)},0)}});var U="Moz O ms Webkit",A=S._config.usePrefixes?U.toLowerCase().split(" "):[];S._domPrefixes=A,Modernizr.addTest("pointerevents",function(){var e=!1,t=A.length;for(e=Modernizr.hasEvent("pointerdown");t--&&!e;)E(A[t]+"pointerdown")&&(e=!0);return e});var z=S._config.usePrefixes?U.split(" "):[];S._cssomPrefixes=z;var M=function(t){var r,o=L.length,i=e.CSSRule;if("undefined"==typeof i)return n;if(!t)return!1;if(t=t.replace(/^@/,""),r=t.replace(/-/g,"_").toUpperCase()+"_RULE",r in i)return"@"+t;for(var a=0;o>a;a++){var s=L[a],c=s.toUpperCase()+"_"+r;if(c in i)return"@-"+s.toLowerCase()+"-"+t}return!1};S.atRule=M;var P=S.testStyles=u;Modernizr.addTest("touchevents",function(){var n;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)n=!0;else{var r=["@media (",L.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");P(r,function(e){n=9===e.offsetTop})}return n});var N={elem:a("modernizr")};Modernizr._q.push(function(){delete N.elem});var W={style:N.elem.style};Modernizr._q.unshift(function(){delete W.style}),S.testAllProps=h;var D=S.prefixed=function(e,t,n){return 0===e.indexOf("@")?M(e):(-1!=e.indexOf("-")&&(e=s(e)),t?h(e,t,n):h(e,"pfx"))};Modernizr.addTest("forcetouch",function(){return E(D("mouseforcewillbegin",e,!1),e)?MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN&&MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN:!1}),Modernizr.addTest("fullscreen",!(!D("exitFullscreen",t,!1)&&!D("cancelFullScreen",t,!1))),Modernizr.addTest("gamepads",!!D("getGamepads",navigator)),Modernizr.addAsyncTest(function(){var t;try{t=D("indexedDB",e)}catch(n){}if(t){var r="modernizr-"+Math.random(),o=t.open(r);o.onerror=function(){o.error&&"InvalidStateError"===o.error.name?c("indexeddb",!1):(c("indexeddb",!0),g(t,r))},o.onsuccess=function(){c("indexeddb",!0),g(t,r)}}else c("indexeddb",!1)}),Modernizr.addAsyncTest(function(){var t,n,r,o,i="detect-blob-support",a=!1;try{t=D("indexedDB",e)}catch(s){}if(!Modernizr.indexeddb||!Modernizr.indexeddb.deletedatabase)return!1;try{t.deleteDatabase(i).onsuccess=function(){n=t.open(i,1),n.onupgradeneeded=function(){n.result.createObjectStore("store")},n.onsuccess=function(){r=n.result;try{o=r.transaction("store","readwrite").objectStore("store").put(new Blob,"key"),o.onsuccess=function(){a=!0},o.onerror=function(){a=!1}}catch(e){a=!1}finally{c("indexeddbblob",a),r.close(),t.deleteDatabase(i)}}}}catch(s){c("indexeddbblob",!1)}}),Modernizr.addTest("performance",!!D("performance",e)),Modernizr.addTest("pointerlock",!!D("exitPointerLock",t)),Modernizr.addTest("vibrate",!!D("vibrate",navigator)),Modernizr.addTest("speechrecognition",!!D("SpeechRecognition",e));var I=D("URL",e,!1);I=I&&e[I],Modernizr.addTest("bloburls",I&&"revokeObjectURL"in I&&"createObjectURL"in I),Modernizr.addAsyncTest(function(){function e(){c("transferables",!1),t()}function t(){s&&URL.revokeObjectURL(s),d&&d.terminate(),o&&clearTimeout(o)}var n=!!(Modernizr.blobconstructor&&Modernizr.bloburls&&Modernizr.webworkers&&Modernizr.typedarrays);if(!n)return c("transferables",!1);try{var r,o,i='var hello = "world"',a=new Blob([i],{type:"text/javascript"}),s=URL.createObjectURL(a),d=new Worker(s);d.onerror=e,o=setTimeout(e,200),r=new ArrayBuffer(1),d.postMessage(r,[r]),c("transferables",0===r.byteLength),t()}catch(u){e()}}),S.testAllProps=T,Modernizr.addTest("cssfilters",function(){if(Modernizr.supports)return T("filter","blur(2px)");var e=a("a");return e.style.cssText=L.join("filter:blur(2px); "),!!e.style.length&&(t.documentMode===n||t.documentMode>9)}),o(),i(x),delete S.addTest,delete S.addAsyncTest;for(var q=0;q<Modernizr._q.length;q++)Modernizr._q[q]();e.Modernizr=Modernizr}(window,document);