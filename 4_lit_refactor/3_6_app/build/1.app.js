(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{10:function(t,e,n){"use strict";n.d(e,"a",function(){return u}),n.d(e,"b",function(){return l}),n.d(e,"e",function(){return p}),n.d(e,"c",function(){return h}),n.d(e,"f",function(){return f}),n.d(e,"g",function(){return m}),n.d(e,"d",function(){return g});var r=n(26),i=n(14),o=n(25),a=n(24),s=n(17),c=n(13);const d=t=>null===t||!("object"==typeof t||"function"==typeof t);class u{constructor(t,e,n){this.dirty=!0,this.element=t,this.name=e,this.strings=n,this.parts=[];for(let t=0;t<n.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new l(this)}_getValue(){const t=this.strings,e=t.length-1;let n="";for(let r=0;r<e;r++){n+=t[r];const e=this.parts[r];if(void 0!==e){const t=e.value;if(null!=t&&(Array.isArray(t)||"string"!=typeof t&&t[Symbol.iterator]))for(const e of t)n+="string"==typeof e?e:String(e);else n+="string"==typeof t?t:String(t)}}return n+=t[e]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class l{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===o.a||d(t)&&t===this.value||(this.value=t,Object(r.b)(t)||(this.committer.dirty=!0))}commit(){for(;Object(r.b)(this.value);){const t=this.value;this.value=o.a,t(this)}this.value!==o.a&&this.committer.commit()}}class p{constructor(t){this.value=void 0,this._pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(Object(c.c)()),this.endNode=t.appendChild(Object(c.c)())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t._insert(this.startNode=Object(c.c)()),t._insert(this.endNode=Object(c.c)())}insertAfterPart(t){t._insert(this.startNode=Object(c.c)()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this._pendingValue=t}commit(){for(;Object(r.b)(this._pendingValue);){const t=this._pendingValue;this._pendingValue=o.a,t(this)}const t=this._pendingValue;t!==o.a&&(d(t)?t!==this.value&&this._commitText(t):t instanceof s.b?this._commitTemplateResult(t):t instanceof Node?this._commitNode(t):Array.isArray(t)||t[Symbol.iterator]?this._commitIterable(t):t===o.b?(this.value=o.b,this.clear()):this._commitText(t))}_insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}_commitNode(t){this.value!==t&&(this.clear(),this._insert(t),this.value=t)}_commitText(t){const e=this.startNode.nextSibling;t=null==t?"":t,e===this.endNode.previousSibling&&3===e.nodeType?e.data=t:this._commitNode(document.createTextNode("string"==typeof t?t:String(t))),this.value=t}_commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof a.a&&this.value.template===e)this.value.update(t.values);else{const n=new a.a(e,t.processor,this.options),r=n._clone();n.update(t.values),this._commitNode(r),this.value=n}}_commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let n,r=0;for(const i of t)void 0===(n=e[r])&&(n=new p(this.options),e.push(n),0===r?n.appendIntoPart(this):n.insertAfterPart(e[r-1])),n.setValue(i),n.commit(),r++;r<e.length&&(e.length=r,this.clear(n&&n.endNode))}clear(t=this.startNode){Object(i.b)(this.startNode.parentNode,t.nextSibling,this.endNode)}}class h{constructor(t,e,n){if(this.value=void 0,this._pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=n}setValue(t){this._pendingValue=t}commit(){for(;Object(r.b)(this._pendingValue);){const t=this._pendingValue;this._pendingValue=o.a,t(this)}if(this._pendingValue===o.a)return;const t=!!this._pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=t,this._pendingValue=o.a}}class f extends u{constructor(t,e,n){super(t,e,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new m(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class m extends l{}let v=!1;try{const t={get capture(){return v=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class g{constructor(t,e,n){this.value=void 0,this._pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=n,this._boundHandleEvent=(t=>this.handleEvent(t))}setValue(t){this._pendingValue=t}commit(){for(;Object(r.b)(this._pendingValue);){const t=this._pendingValue;this._pendingValue=o.a,t(this)}if(this._pendingValue===o.a)return;const t=this._pendingValue,e=this.value,n=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),i=null!=t&&(null==e||n);n&&this.element.removeEventListener(this.eventName,this._boundHandleEvent,this._options),i&&(this._options=b(t),this.element.addEventListener(this.eventName,this._boundHandleEvent,this._options)),this.value=t,this._pendingValue=o.a}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const b=t=>t&&(v?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)},1083:function(t,e,n){"use strict";function r(t){var e,n=t.Symbol;return"function"==typeof n?n.observable?e=n.observable:(e=n("observable"),n.observable=e):e="@@observable",e}n.d(e,"a",function(){return r})},1084:function(t,e){t.exports=function(t){if(!t.webpackPolyfill){var e=Object.create(t);e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),Object.defineProperty(e,"exports",{enumerable:!0}),e.webpackPolyfill=1}return e}},1085:function(t,e,n){"use strict";(function(t,r){var i,o=n(1083);i="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==t?t:r;var a=Object(o.a)(i);e.a=a}).call(this,n(27),n(1084)(t))},1086:function(t,e){t.exports=u,t.exports.parse=i,t.exports.compile=function(t,e){return o(i(t,e))},t.exports.tokensToFunction=o,t.exports.tokensToRegExp=d;var n="/",r=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function i(t,e){for(var i,o=[],c=0,d=0,u="",l=e&&e.delimiter||n,p=e&&e.whitelist||void 0,h=!1;null!==(i=r.exec(t));){var f=i[0],m=i[1],v=i.index;if(u+=t.slice(d,v),d=v+f.length,m)u+=m[1],h=!0;else{var g="",b=i[2],y=i[3],_=i[4],x=i[5];if(!h&&u.length){var w=u.length-1,S=u[w];(!p||p.indexOf(S)>-1)&&(g=S,u=u.slice(0,w))}u&&(o.push(u),u="",h=!1);var E="+"===x||"*"===x,A="?"===x||"*"===x,k=y||_,O=g||l;o.push({name:b||c++,prefix:g,delimiter:O,optional:A,repeat:E,pattern:k?s(k):"[^"+a(O===l?O:O+l)+"]+?"})}}return(u||d<t.length)&&o.push(u+t.substr(d)),o}function o(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"==typeof t[n]&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var i="",o=r&&r.encode||encodeURIComponent,a=0;a<t.length;a++){var s=t[a];if("string"!=typeof s){var c,d=n?n[s.name]:void 0;if(Array.isArray(d)){if(!s.repeat)throw new TypeError('Expected "'+s.name+'" to not repeat, but got array');if(0===d.length){if(s.optional)continue;throw new TypeError('Expected "'+s.name+'" to not be empty')}for(var u=0;u<d.length;u++){if(c=o(d[u],s),!e[a].test(c))throw new TypeError('Expected all "'+s.name+'" to match "'+s.pattern+'"');i+=(0===u?s.prefix:s.delimiter)+c}}else if("string"!=typeof d&&"number"!=typeof d&&"boolean"!=typeof d){if(!s.optional)throw new TypeError('Expected "'+s.name+'" to be '+(s.repeat?"an array":"a string"))}else{if(c=o(String(d),s),!e[a].test(c))throw new TypeError('Expected "'+s.name+'" to match "'+s.pattern+'", but got "'+c+'"');i+=s.prefix+c}}else i+=s}return i}}function a(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function s(t){return t.replace(/([=!:$/()])/g,"\\$1")}function c(t){return t&&t.sensitive?"":"i"}function d(t,e,r){for(var i=(r=r||{}).strict,o=!1!==r.start,s=!1!==r.end,d=r.delimiter||n,u=[].concat(r.endsWith||[]).map(a).concat("$").join("|"),l=o?"^":"",p=0;p<t.length;p++){var h=t[p];if("string"==typeof h)l+=a(h);else{var f=h.repeat?"(?:"+h.pattern+")(?:"+a(h.delimiter)+"(?:"+h.pattern+"))*":h.pattern;e&&e.push(h),h.optional?h.prefix?l+="(?:"+a(h.prefix)+"("+f+"))?":l+="("+f+")?":l+=a(h.prefix)+"("+f+")"}}if(s)i||(l+="(?:"+a(d)+")?"),l+="$"===u?"$":"(?="+u+")";else{var m=t[t.length-1],v="string"==typeof m?m[m.length-1]===d:void 0===m;i||(l+="(?:"+a(d)+"(?="+u+"))?"),v||(l+="(?="+a(d)+"|"+u+")")}return new RegExp(l,c(r))}function u(t,e,n){return t instanceof RegExp?function(t,e){if(!e)return t;var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return t}(t,e):Array.isArray(t)?function(t,e,n){for(var r=[],i=0;i<t.length;i++)r.push(u(t[i],e,n).source);return new RegExp("(?:"+r.join("|")+")",c(n))}(t,e,n):function(t,e,n){return d(i(t,n),e,n)}(t,e,n)}},1087:function(t,e,n){"use strict";var r=n(1086),i=n.n(r),o=Object.prototype.hasOwnProperty,a=new Map;function s(t){try{return decodeURIComponent(t)}catch(e){return t}}function c(t,e,n,r,d){var u,l,p=0;return{next:function(h){if(t===h)return{done:!0};if(!u&&(u=function(t,e,n,r){var c=!t.children,d=(t.path||"")+"|"+c,u=a.get(d);if(!u){var l=[];u={keys:l,pattern:i()(t.path||"",l,{end:c})},a.set(d,u)}var p=u.pattern.exec(e);if(!p)return null;for(var h=p[0],f=Object.assign({},r),m=1;m<p.length;m++){var v=u.keys[m-1],g=v.name,b=p[m];void 0===b&&o.call(f,g)||(v.repeat?f[g]=b?b.split(v.delimiter).map(s):[]:f[g]=b?s(b):b)}return{path:c||"/"!==h.charAt(h.length-1)?h:h.substr(1),keys:n.concat(u.keys),params:f}}(t,n,r,d)))return{done:!1,value:{route:t,baseUrl:e,path:u.path,keys:u.keys,params:u.params}};if(u&&t.children)for(;p<t.children.length;){if(!l){var f=t.children[p];f.parent=t,l=c(f,e+u.path,n.substr(u.path.length),u.keys,u.params)}var m=l.next(h);if(!m.done)return{done:!1,value:m.value};l=null,p++}return{done:!0}}}}function d(t,e){if("function"==typeof t.route.action)return t.route.action(t,e)}var u=function(){function t(t,e){if(void 0===e&&(e={}),!t||"object"!=typeof t)throw new TypeError("Invalid routes");this.baseUrl=e.baseUrl||"",this.errorHandler=e.errorHandler,this.resolveRoute=e.resolveRoute||d,this.context=Object.assign({router:this},e.context),this.root=Array.isArray(t)?{path:"",children:t,parent:null}:t,this.root.parent=null}return t.prototype.resolve=function(t){var e=this,n=Object.assign({},this.context,"string"==typeof t?{pathname:t}:t),r=c(this.root,this.baseUrl,n.pathname.substr(this.baseUrl.length),[],null),i=this.resolveRoute,o=null,a=null,s=n;function d(t,e,c){void 0===e&&(e=o.value.route);var u=null===c&&o.value.route;if(o=a||r.next(u),a=null,!t&&(o.done||!function(t,e){for(var n=e;n;)if((n=n.parent)===t)return!0;return!1}(e,o.value.route)))return a=o,Promise.resolve(null);if(o.done){var l=new Error("Route not found");return l.status=404,Promise.reject(l)}return s=Object.assign({},n,o.value),Promise.resolve(i(s,o.value.params)).then(function(n){return null!==n&&void 0!==n?n:d(t,e,n)})}return n.next=d,Promise.resolve().then(function(){return d(!0,e.root)}).catch(function(t){if(e.errorHandler)return e.errorHandler(t,s);throw t})},t}();u.pathToRegexp=i.a,e.a=u},1088:function(t,e,n){"use strict";var r=new RegExp("%[a-f0-9]{2}","gi"),i=new RegExp("(%[a-f0-9]{2})+","gi");function o(t,e){try{return decodeURIComponent(t.join(""))}catch(t){}if(1===t.length)return t;e=e||1;var n=t.slice(0,e),r=t.slice(e);return Array.prototype.concat.call([],o(n),o(r))}function a(t){try{return decodeURIComponent(t)}catch(i){for(var e=t.match(r),n=1;n<e.length;n++)e=(t=o(e,n).join("")).match(r);return t}}t.exports=function(t){if("string"!=typeof t)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch(e){return function(t){for(var e={"%FE%FF":"��","%FF%FE":"��"},n=i.exec(t);n;){try{e[n[0]]=decodeURIComponent(n[0])}catch(t){var r=a(n[0]);r!==n[0]&&(e[n[0]]=r)}n=i.exec(t)}e["%C2"]="�";for(var o=Object.keys(e),s=0;s<o.length;s++){var c=o[s];t=t.replace(new RegExp(c,"g"),e[c])}return t}(t)}}},1089:function(t,e,n){"use strict";var r=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(t){r[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var n,a,s=function(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}(t),c=1;c<arguments.length;c++){for(var d in n=Object(arguments[c]))i.call(n,d)&&(s[d]=n[d]);if(r){a=r(n);for(var u=0;u<a.length;u++)o.call(n,a[u])&&(s[a[u]]=n[a[u]])}}return s}},1090:function(t,e,n){"use strict";t.exports=function(t){return encodeURIComponent(t).replace(/[!'()*]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}},1091:function(t,e,n){"use strict";var r=n(1090),i=n(1089),o=n(1088);function a(t,e){return e.encode?e.strict?r(t):encodeURIComponent(t):t}function s(t){var e=t.indexOf("?");return-1===e?"":t.slice(e+1)}function c(t,e){var n=function(t){var e;switch(t.arrayFormat){case"index":return function(t,n,r){e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),e?(void 0===r[t]&&(r[t]={}),r[t][e[1]]=n):r[t]=n};case"bracket":return function(t,n,r){e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),e?void 0!==r[t]?r[t]=[].concat(r[t],n):r[t]=[n]:r[t]=n};default:return function(t,e,n){void 0!==n[t]?n[t]=[].concat(n[t],e):n[t]=e}}}(e=i({arrayFormat:"none"},e)),r=Object.create(null);return"string"!=typeof t?r:(t=t.trim().replace(/^[?#&]/,""))?(t.split("&").forEach(function(t){var e=t.replace(/\+/g," ").split("="),i=e.shift(),a=e.length>0?e.join("="):void 0;a=void 0===a?null:o(a),n(o(i),a,r)}),Object.keys(r).sort().reduce(function(t,e){var n=r[e];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?t[e]=function t(e){return Array.isArray(e)?e.sort():"object"==typeof e?t(Object.keys(e)).sort(function(t,e){return Number(t)-Number(e)}).map(function(t){return e[t]}):e}(n):t[e]=n,t},Object.create(null))):r}e.extract=s,e.parse=c,e.stringify=function(t,e){!1===(e=i({encode:!0,strict:!0,arrayFormat:"none"},e)).sort&&(e.sort=function(){});var n=function(t){switch(t.arrayFormat){case"index":return function(e,n,r){return null===n?[a(e,t),"[",r,"]"].join(""):[a(e,t),"[",a(r,t),"]=",a(n,t)].join("")};case"bracket":return function(e,n){return null===n?a(e,t):[a(e,t),"[]=",a(n,t)].join("")};default:return function(e,n){return null===n?a(e,t):[a(e,t),"=",a(n,t)].join("")}}}(e);return t?Object.keys(t).sort(e.sort).map(function(r){var i=t[r];if(void 0===i)return"";if(null===i)return a(r,e);if(Array.isArray(i)){var o=[];return i.slice().forEach(function(t){void 0!==t&&o.push(n(r,t,o.length))}),o.join("&")}return a(r,e)+"="+a(i,e)}).filter(function(t){return t.length>0}).join("&"):""},e.parseUrl=function(t,e){return{url:t.split("?")[0]||"",query:c(s(t),e)}}},1092:function(t,e,n){"use strict";e.__esModule=!0;e.canUseDOM=!("undefined"==typeof window||!window.document||!window.document.createElement),e.addEventListener=function(t,e,n){return t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent("on"+e,n)},e.removeEventListener=function(t,e,n){return t.removeEventListener?t.removeEventListener(e,n,!1):t.detachEvent("on"+e,n)},e.getConfirmation=function(t,e){return e(window.confirm(t))},e.supportsHistory=function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&(window.history&&"pushState"in window.history)},e.supportsPopStateOnHashChange=function(){return-1===window.navigator.userAgent.indexOf("Trident")},e.supportsGoWithoutReloadUsingHash=function(){return-1===window.navigator.userAgent.indexOf("Firefox")},e.isExtraneousPopstateEvent=function(t){return void 0===t.state&&-1===navigator.userAgent.indexOf("CriOS")}},1093:function(t,e,n){"use strict";e.__esModule=!0;var r,i=n(32),o=(r=i)&&r.__esModule?r:{default:r};e.default=function(){var t=null,e=[];return{setPrompt:function(e){return(0,o.default)(null==t,"A history supports only one prompt at a time"),t=e,function(){t===e&&(t=null)}},confirmTransitionTo:function(e,n,r,i){if(null!=t){var a="function"==typeof t?t(e,n):t;"string"==typeof a?"function"==typeof r?r(a,i):((0,o.default)(!1,"A history needs a getUserConfirmation function in order to use a prompt message"),i(!0)):i(!1!==a)}else i(!0)},appendListener:function(t){var n=!0,r=function(){n&&t.apply(void 0,arguments)};return e.push(r),function(){n=!1,e=e.filter(function(t){return t!==r})}},notifyListeners:function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];e.forEach(function(t){return t.apply(void 0,n)})}}}},1094:function(t,e,n){"use strict";n.r(e);var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.default=function t(e,n){if(e===n)return!0;if(null==e||null==n)return!1;if(Array.isArray(e))return Array.isArray(n)&&e.length===n.length&&e.every(function(e,r){return t(e,n[r])});var i=void 0===e?"undefined":r(e);if(i!==(void 0===n?"undefined":r(n)))return!1;if("object"===i){var o=e.valueOf(),a=n.valueOf();if(o!==e||a!==n)return t(o,a);var s=Object.keys(e),c=Object.keys(n);return s.length===c.length&&s.every(function(r){return t(e[r],n[r])})}return!1}},1095:function(t,e,n){"use strict";function r(t){return"/"===t.charAt(0)}function i(t,e){for(var n=e,r=n+1,i=t.length;r<i;n+=1,r+=1)t[n]=t[r];t.pop()}n.r(e),e.default=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=t&&t.split("/")||[],o=e&&e.split("/")||[],a=t&&r(t),s=e&&r(e),c=a||s;if(t&&r(t)?o=n:n.length&&(o.pop(),o=o.concat(n)),!o.length)return"/";var d=void 0;if(o.length){var u=o[o.length-1];d="."===u||".."===u||""===u}else d=!1;for(var l=0,p=o.length;p>=0;p--){var h=o[p];"."===h?i(o,p):".."===h?(i(o,p),l++):l&&(i(o,p),l--)}if(!c)for(;l--;l)o.unshift("..");!c||""===o[0]||o[0]&&r(o[0])||o.unshift("");var f=o.join("/");return d&&"/"!==f.substr(-1)&&(f+="/"),f}},1096:function(t,e,n){"use strict";e.__esModule=!0,e.locationsAreEqual=e.createLocation=void 0;var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=s(n(1095)),o=s(n(1094)),a=n(31);function s(t){return t&&t.__esModule?t:{default:t}}e.createLocation=function(t,e,n,o){var s=void 0;"string"==typeof t?(s=(0,a.parsePath)(t)).state=e:(void 0===(s=r({},t)).pathname&&(s.pathname=""),s.search?"?"!==s.search.charAt(0)&&(s.search="?"+s.search):s.search="",s.hash?"#"!==s.hash.charAt(0)&&(s.hash="#"+s.hash):s.hash="",void 0!==e&&void 0===s.state&&(s.state=e));try{s.pathname=decodeURI(s.pathname)}catch(t){throw t instanceof URIError?new URIError('Pathname "'+s.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):t}return n&&(s.key=n),o?s.pathname?"/"!==s.pathname.charAt(0)&&(s.pathname=(0,i.default)(s.pathname,o.pathname)):s.pathname=o.pathname:s.pathname||(s.pathname="/"),s},e.locationsAreEqual=function(t,e){return t.pathname===e.pathname&&t.search===e.search&&t.hash===e.hash&&t.key===e.key&&(0,o.default)(t.state,e.state)}},1097:function(t,e,n){"use strict";t.exports=function(t,e,n,r,i,o,a,s){if(!t){var c;if(void 0===e)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var d=[n,r,i,o,a,s],u=0;(c=new Error(e.replace(/%s/g,function(){return d[u++]}))).name="Invariant Violation"}throw c.framesToPop=1,c}}},1098:function(t,e,n){"use strict";const r=document.createElement("link");r.rel="stylesheet",r.href="https://fonts.googleapis.com/icon?family=Material+Icons",document.head.appendChild(r)},1105:function(t,e,n){"use strict";n.d(e,"c",function(){return s}),n.d(e,"b",function(){return d}),n.d(e,"a",function(){return l});var r=n(1085),i=function(){return Math.random().toString(36).substring(7).split("").join(".")},o={INIT:"@@redux/INIT"+i(),REPLACE:"@@redux/REPLACE"+i(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+i()}};function a(t){if("object"!=typeof t||null===t)return!1;for(var e=t;null!==Object.getPrototypeOf(e);)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function s(t,e,n){var i;if("function"==typeof e&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function");if("function"==typeof e&&void 0===n&&(n=e,e=void 0),void 0!==n){if("function"!=typeof n)throw new Error("Expected the enhancer to be a function.");return n(s)(t,e)}if("function"!=typeof t)throw new Error("Expected the reducer to be a function.");var c=t,d=e,u=[],l=u,p=!1;function h(){l===u&&(l=u.slice())}function f(){if(p)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return d}function m(t){if("function"!=typeof t)throw new Error("Expected the listener to be a function.");if(p)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");var e=!0;return h(),l.push(t),function(){if(e){if(p)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");e=!1,h();var n=l.indexOf(t);l.splice(n,1)}}}function v(t){if(!a(t))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===t.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(p)throw new Error("Reducers may not dispatch actions.");try{p=!0,d=c(d,t)}finally{p=!1}for(var e=u=l,n=0;n<e.length;n++){(0,e[n])()}return t}return v({type:o.INIT}),(i={dispatch:v,subscribe:m,getState:f,replaceReducer:function(t){if("function"!=typeof t)throw new Error("Expected the nextReducer to be a function.");c=t,v({type:o.REPLACE})}})[r.a]=function(){var t,e=m;return(t={subscribe:function(t){if("object"!=typeof t||null===t)throw new TypeError("Expected the observer to be an object.");function n(){t.next&&t.next(f())}return n(),{unsubscribe:e(n)}}})[r.a]=function(){return this},t},i}function c(t,e){var n=e&&e.type;return"Given "+(n&&'action "'+String(n)+'"'||"an action")+', reducer "'+t+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function d(t){for(var e=Object.keys(t),n={},r=0;r<e.length;r++){var i=e[r];0,"function"==typeof t[i]&&(n[i]=t[i])}var a,s=Object.keys(n);try{!function(t){Object.keys(t).forEach(function(e){var n=t[e];if(void 0===n(void 0,{type:o.INIT}))throw new Error('Reducer "'+e+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===n(void 0,{type:o.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+e+"\" returned undefined when probed with a random type. Don't try to handle "+o.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')})}(n)}catch(t){a=t}return function(t,e){if(void 0===t&&(t={}),a)throw a;for(var r=!1,i={},o=0;o<s.length;o++){var d=s[o],u=n[d],l=t[d],p=u(l,e);if(void 0===p){var h=c(d,e);throw new Error(h)}i[d]=p,r=r||p!==l}return r?i:t}}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return function(){var n=t.apply(void 0,arguments),r=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},i={getState:n.getState,dispatch:function(){return r.apply(void 0,arguments)}},o=e.map(function(t){return t(i)});return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){u(t,e,n[e])})}return t}({},n,{dispatch:r=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return 0===e.length?function(t){return t}:1===e.length?e[0]:e.reduce(function(t,e){return function(){return t(e.apply(void 0,arguments))}})}.apply(void 0,o)(n.dispatch)})}}}},13:function(t,e,n){"use strict";n.d(e,"f",function(){return r}),n.d(e,"g",function(){return i}),n.d(e,"b",function(){return a}),n.d(e,"a",function(){return s}),n.d(e,"d",function(){return c}),n.d(e,"c",function(){return d}),n.d(e,"e",function(){return u});const r=`{{lit-${String(Math.random()).slice(2)}}}`,i=`\x3c!--${r}--\x3e`,o=new RegExp(`${r}|${i}`),a="$lit$";class s{constructor(t,e){this.parts=[],this.element=e;let n=-1,i=0;const s=[],c=e=>{const l=e.content,p=document.createTreeWalker(l,133,null,!1);let h=0;for(;p.nextNode();){n++;const e=p.currentNode;if(1===e.nodeType){if(e.hasAttributes()){const s=e.attributes;let c=0;for(let t=0;t<s.length;t++)s[t].value.indexOf(r)>=0&&c++;for(;c-- >0;){const r=t.strings[i],s=u.exec(r)[2],c=s.toLowerCase()+a,d=e.getAttribute(c).split(o);this.parts.push({type:"attribute",index:n,name:s,strings:d}),e.removeAttribute(c),i+=d.length-1}}"TEMPLATE"===e.tagName&&c(e)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(r)>=0){const r=e.parentNode,a=t.split(o),c=a.length-1;for(let t=0;t<c;t++)r.insertBefore(""===a[t]?d():document.createTextNode(a[t]),e),this.parts.push({type:"node",index:++n});""===a[c]?(r.insertBefore(d(),e),s.push(e)):e.data=a[c],i+=c}}else if(8===e.nodeType)if(e.data===r){const t=e.parentNode;null!==e.previousSibling&&n!==h||(n++,t.insertBefore(d(),e)),h=n,this.parts.push({type:"node",index:n}),null===e.nextSibling?e.data="":(s.push(e),n--),i++}else{let t=-1;for(;-1!==(t=e.data.indexOf(r,t+1));)this.parts.push({type:"node",index:-1})}}};c(e);for(const t of s)t.parentNode.removeChild(t)}}const c=t=>-1!==t.index,d=()=>document.createComment(""),u=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/},14:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"c",function(){return i}),n.d(e,"b",function(){return o});const r=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=(t,e,n=null,r=null)=>{let i=e;for(;i!==n;){const e=i.nextSibling;t.insertBefore(i,r),i=e}},o=(t,e,n=null)=>{let r=e;for(;r!==n;){const e=r.nextSibling;t.removeChild(r),r=e}}},16:function(t,e,n){"use strict";n.d(e,"a",function(){return f});n(21);for(var r="",i=1;i<13;i++)r+=`\n    *[c-xs-${i}] {\n      flex: var(--c-${i}-o);\n    }\n  `;var o="";for(i=1;i<13;i++)o+=`\n    *[ink-gap-i] *[c-xs-${i}] {\n      flex: var(--c-${i}-i);\n    }\n  `;var a="";for(i=1;i<13;i++)a+=`\n    *[c-sm-${i}] {\n      flex: var(--c-${i}-o);\n    }\n  `;var s="";for(i=1;i<13;i++)s+=`\n    *[ink-gap-i] *[c-sm-${i}] {\n      flex: var(--c-${i}-i);\n    }\n  `;var c="";for(i=1;i<13;i++)c+=`\n    *[c-md-${i}] {\n      flex: var(--c-${i}-o);\n    }\n  `;var d="";for(i=1;i<13;i++)d+=`\n    *[ink-gap-i] *[c-md-${i}] {\n      flex: var(--c-${i}-i);\n    }\n  `;var u="";for(i=1;i<13;i++)u+=`\n    *[c-lg-${i}] {\n      flex: var(--c-${i}-o);\n    }\n  `;var l="";for(i=1;i<13;i++)l+=`\n    *[ink-gap-i] *[c-lg-${i}] {\n      flex: var(--c-${i}-i);\n    }\n  `;var p="";for(i=1;i<13;i++)p+=`\n    *[c-xlg-${i}] {\n      flex: var(--c-${i}-o);\n    }\n  `;var h="";for(i=1;i<13;i++)h+=`\n    *[ink-gap-i] *[c-xlg-${i}] {\n      flex: var(--c-${i}-i);\n    }\n  `;const f=`\n\t    *[ink-grid], *[ink-grid-fw] {\n\t      display: flex;\n\t      flex-wrap: wrap;\n\t    }\n\n\t\t\t*[ink-grid-fw] {\n\t\t\t\twidth:100%;\n\t\t\t}\n\n\t\t\t*[ink-box], ink-box {\n\t\t\t\tmax-width: 700px;\n\t\t\t\tmargin: 0 auto;\n\t\t\t\twidth: 100%;\n\t\t\t\tdisplay: block;\n\t\t\t\tbox-sizing: border-box;\n\t\t\t}\n\n\n\t\t\t*[ink-grid] > *, *[ink-grid-fw] > * {\n\t\t\t\tbox-sizing: border-box;\n\t\t\t\toverflow-x: hidden;\n\t\t\t}\n\n\t    *[ink-gap-i] > * {\n\t      margin:  var(--gap) var(--gap);\n\t    }\n\n\t    *[ink-gap-o] {\n\t      margin: 0 var(--gap);\n\t    }\n\n\t\t\t*[c] {\n\t\t\t\tflex: auto;\n\t\t\t}\n\n\t\t\t*[o-sm-2] {\n\t\t\t\tmargin-left: calc(var(--off-2));\n\t\t\t}\n\n\t\t\t*[o-sm-3] {\n\t\t\t\tmargin-left: calc(var(--off-3));\n\t\t\t}\n\n\t\t\t*[o-sm-4] {\n\t\t\t\tmargin-left: calc(var(--off-4));\n\t\t\t}\n\n\t\t\t*[o-sm-6] {\n\t\t\t\tmargin-left: calc(var(--off-6));\n\t\t\t}\n\n\t\t\t*[o-sm-12] {\n\t\t\t\tmargin-left: calc(var(--off-12));\n\t\t\t}\n\n\n\t    /*--xs*/\n\t    @media (min-width: 1px) {\n        ${r}\n        ${o}\n\t    }\n\n\t    /*--sm*/\n\t    @media (min-width: 601px) {\n        ${a}\n        ${s}\n\t    }\n\n\t    /*--md*/\n\t    @media (min-width: 961px) {\n        ${c}\n        ${d}\n\t    }\n\n\t    /*--lg*/\n\t    @media (min-width: 1281px) {\n        ${u}\n        ${l}\n\t    }\n\n\t    /*--xlg*/\n\t    @media (min-width: 1601px) {\n        ${p}\n        ${h}\n\t    }\n`},17:function(t,e,n){"use strict";n.d(e,"b",function(){return o}),n.d(e,"a",function(){return a});var r=n(14),i=n(13);class o{constructor(t,e,n,r){this.strings=t,this.values=e,this.type=n,this.processor=r}getHTML(){const t=this.strings.length-1;let e="";for(let n=0;n<t;n++){const t=this.strings[n],r=i.e.exec(t);e+=r?t.substr(0,r.index)+r[1]+r[2]+i.b+r[3]+i.f:t+i.g}return e+this.strings[t]}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}class a extends o{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const t=super.getTemplateElement(),e=t.content,n=e.firstChild;return e.removeChild(n),Object(r.c)(e,n.firstChild),t}}},21:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n(6);const i=(t,...e)=>new r.e(t,e,"html",o),o=(t,e,n)=>{if("attribute"===e.type){if("on-"===e.rawName.substr(0,3)){return new class{constructor(t,e,n){this.instance=t,this.element=e,this.eventName=n}setValue(t){const e=Object(r.getValue)(this,t);e!==this._listener&&(null==e?this.element.removeEventListener(this.eventName,this):null==this._listener&&this.element.addEventListener(this.eventName,this),this._listener=e)}handleEvent(t){"function"==typeof this._listener?this._listener.call(this.element,t):"function"==typeof this._listener.handleEvent&&this._listener.handleEvent(t)}}(t,n,e.rawName.slice(3))}const i=e.name.substr(e.name.length-1);if("$"===i){const i=e.name.slice(0,-1);return new r.a(t,n,i,e.strings)}if("?"===i){return new class extends r.a{setValue(t,e){const n=this.strings;if(2!==n.length||""!==n[0]||""!==n[1])throw new Error("boolean attributes can only contain a single expression");{const n=Object(r.getValue)(this,t[e]);if(n===r.j)return;n?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}}(t,n,e.name.slice(0,-1),e.strings)}return new class extends r.a{setValue(t,e){const n=this.strings;let i;this._equalToPreviousValues(t,e)||((i=2===n.length&&""===n[0]&&""===n[1]?Object(r.getValue)(this,t[e]):this._interpolate(t,e))!==r.j&&(this.element[this.name]=i),this._previousValues=t)}}(t,n,e.rawName,e.strings)}return Object(r.defaultPartCallback)(t,e,n)}},22:function(t,e,n){"use strict";n.d(e,"b",function(){return i}),n.d(e,"a",function(){return o});var r=n(13);function i(t){let e=o.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},o.set(t.type,e));let n=e.stringsArray.get(t.strings);if(void 0!==n)return n;const i=t.strings.join(r.f);return void 0===(n=e.keyString.get(i))&&(n=new r.a(t,t.getTemplateElement()),e.keyString.set(i,n)),e.stringsArray.set(t.strings,n),n}const o=new Map},23:function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return s});var r=n(14),i=n(10),o=n(22);const a=new WeakMap,s=(t,e,n)=>{let s=a.get(e);void 0===s&&(Object(r.b)(e,e.firstChild),a.set(e,s=new i.e(Object.assign({templateFactory:o.b},n))),s.appendInto(e)),s.setValue(t),s.commit()}},24:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var r=n(14),i=n(13);class o{constructor(t,e,n){this._parts=[],this.template=t,this.processor=e,this.options=n}update(t){let e=0;for(const n of this._parts)void 0!==n&&n.setValue(t[e]),e++;for(const t of this._parts)void 0!==t&&t.commit()}_clone(){const t=r.a?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=this.template.parts;let n=0,o=0;const a=t=>{const r=document.createTreeWalker(t,133,null,!1);let s=r.nextNode();for(;n<e.length&&null!==s;){const t=e[n];if(Object(i.d)(t))if(o===t.index){if("node"===t.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(s.previousSibling),this._parts.push(t)}else this._parts.push(...this.processor.handleAttributeExpressions(s,t.name,t.strings,this.options));n++}else o++,"TEMPLATE"===s.nodeName&&a(s.content),s=r.nextNode();else this._parts.push(void 0),n++}};return a(t),r.a&&(document.adoptNode(t),customElements.upgrade(t)),t}}},25:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i});const r={},i={}},26:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o});const r=new WeakMap,i=t=>(...e)=>{const n=t(...e);return r.set(n,!0),n},o=t=>"function"==typeof t&&r.has(t)},27:function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},28:function(t,e,n){"use strict";var r=n(33),i=n.n(r),o=n(1091),a="ROUTER/PUSH",s="ROUTER/REPLACE",c="ROUTER/GO",d="ROUTER/GO_BACK",u=function(t){return{type:a,payload:t}},l=function(t){return{type:s,payload:t}},p=function(t){return{type:c,payload:t}},h=function(){return{type:d}},f=function(){return{type:"ROUTER/GO_FORWARD"}},m=function(t){var e=t.pathname,n=t.search,r=t.hash;return{type:"ROUTER/LOCATION_CHANGE",payload:{pathname:e,search:n,queries:Object(o.parse)(n),hash:r}}};function v(t,e){e.dispatch(m({pathname:t.location.pathname,search:t.location.search,hash:t.location.hash})),t.listen(function(t){e.dispatch(m({pathname:t.pathname,search:t.search,hash:t.hash}))})}var g=function(t){return function(){return function(e){return function(n){switch(n.type){case a:t.push(n.payload);break;case s:t.replace(n.payload);break;case c:t.go(n.payload);break;case d:t.goBack();break;case"ROUTER/GO_FORWARD":t.goForward();break;default:return e(n)}}}}},b=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},y={pathname:"/",search:"",queries:{},hash:""},_=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,e=arguments[1];switch(e.type){case"ROUTER/LOCATION_CHANGE":return b({},t,e.payload);default:return t}};n.d(e,"a",function(){return i.a}),n.d(e,"e",function(){return v}),n.d(e,!1,function(){return a}),n.d(e,!1,function(){return s}),n.d(e,!1,function(){return c}),n.d(e,!1,function(){return d}),n.d(e,!1,function(){return"ROUTER/GO_FORWARD"}),n.d(e,!1,function(){return"ROUTER/LOCATION_CHANGE"}),n.d(e,"b",function(){return u}),n.d(e,!1,function(){return l}),n.d(e,!1,function(){return p}),n.d(e,!1,function(){return h}),n.d(e,!1,function(){return f}),n.d(e,!1,function(){return m}),n.d(e,"c",function(){return g}),n.d(e,"d",function(){return _})},3:function(t,e,n){"use strict";var r=n(6),i=n(14),o=n(13);const a=133;function s(t,e){const{element:{content:n},parts:r}=t,i=document.createTreeWalker(n,a,null,!1);let o=d(r),s=r[o],c=-1,u=0;const l=[];let p=null;for(;i.nextNode();){c++;const t=i.currentNode;for(t.previousSibling===p&&(p=null),e.has(t)&&(l.push(t),null===p&&(p=t)),null!==p&&u++;void 0!==s&&s.index===c;)s.index=null!==p?-1:s.index-u,s=r[o=d(r,o)]}l.forEach(t=>t.parentNode.removeChild(t))}const c=t=>{let e=11===t.nodeType?0:1;const n=document.createTreeWalker(t,a,null,!1);for(;n.nextNode();)e++;return e},d=(t,e=-1)=>{for(let n=e+1;n<t.length;n++){const e=t[n];if(Object(o.d)(e))return n}return-1};var u=n(23),l=n(22),p=n(24),h=n(17);const f=(t,e)=>`${t}--${e}`;let m=!0;void 0===window.ShadyCSS?m=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."),m=!1);const v=["html","svg"],g=new Set,b=(t,e,n)=>{g.add(n);const r=t.querySelectorAll("style");if(0===r.length)return void window.ShadyCSS.prepareTemplateStyles(e.element,n);const i=document.createElement("style");for(let t=0;t<r.length;t++){const e=r[t];e.parentNode.removeChild(e),i.textContent+=e.textContent}if(n=n,v.forEach(t=>{const e=l.a.get(f(t,n));void 0!==e&&e.keyString.forEach(t=>{const{element:{content:e}}=t,n=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{n.add(t)}),s(t,n)})}),function(t,e,n=null){const{element:{content:r},parts:i}=t;if(null===n||void 0===n)return void r.appendChild(e);const o=document.createTreeWalker(r,a,null,!1);let s=d(i),u=0,l=-1;for(;o.nextNode();)for(l++,o.currentNode===n&&(u=c(e),n.parentNode.insertBefore(e,n));-1!==s&&i[s].index===l;){if(u>0){for(;-1!==s;)i[s].index+=u,s=d(i,s);return}s=d(i,s)}}(e,i,e.element.content.firstChild),window.ShadyCSS.prepareTemplateStyles(e.element,n),window.ShadyCSS.nativeShadow){const n=e.element.content.querySelector("style");t.insertBefore(n.cloneNode(!0),t.firstChild)}else{e.element.content.insertBefore(i,e.element.content.firstChild);const t=new Set;t.add(i),s(e,t)}};var y;window.JSCompiler_renameProperty=((t,e)=>t);const _={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},x=(t,e)=>e!==t&&(e==e||t==t),w={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:x},S=Promise.resolve(!0),E=1,A=4,k=8,O=16,C=32;class T extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=S,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,n)=>{const r=this._attributeNameForProperty(n,e);void 0!==r&&(this._attributeToPropertyMap.set(r,n),t.push(r))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=w){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const n="symbol"==typeof t?Symbol():`__${t}`;Object.defineProperty(this.prototype,t,{get(){return this[n]},set(e){const r=this[t];this[n]=e,this.requestUpdate(t,r)},configurable:!0,enumerable:!0})}static finalize(){if(this.hasOwnProperty(JSCompiler_renameProperty("finalized",this))&&this.finalized)return;const t=Object.getPrototypeOf(this);if("function"==typeof t.finalize&&t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const n of e)this.createProperty(n,t[n])}}static _attributeNameForProperty(t,e){const n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,n=x){return n(t,e)}static _propertyValueFromAttribute(t,e){const n=e.type,r=e.converter||_,i="function"==typeof r?r:r.fromAttribute;return i?i(t,n):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const n=e.type,r=e.converter;return(r&&r.toAttribute||_.toAttribute)(t,n)}initialize(){this._saveInstanceProperties()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|C,this._hasConnectedResolver?(this._hasConnectedResolver(),this._hasConnectedResolver=void 0):this.requestUpdate()}disconnectedCallback(){}attributeChangedCallback(t,e,n){e!==n&&this._attributeToProperty(t,n)}_propertyToAttribute(t,e,n=w){const r=this.constructor,i=r._attributeNameForProperty(t,n);if(void 0!==i){const t=r._propertyValueToAttribute(e,n);if(void 0===t)return;this._updateState=this._updateState|k,null==t?this.removeAttribute(i):this.setAttribute(i,t),this._updateState=this._updateState&~k}}_attributeToProperty(t,e){if(this._updateState&k)return;const n=this.constructor,r=n._attributeToPropertyMap.get(t);if(void 0!==r){const t=n._classProperties.get(r)||w;this._updateState=this._updateState|O,this[r]=n._propertyValueFromAttribute(e,t),this._updateState=this._updateState&~O}}requestUpdate(t,e){let n=!0;if(void 0!==t&&!this._changedProperties.has(t)){const r=this.constructor,i=r._classProperties.get(t)||w;r._valueHasChanged(this[t],e,i.hasChanged)?(this._changedProperties.set(t,e),!0!==i.reflect||this._updateState&O||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,i))):n=!1}return!this._hasRequestedUpdate&&n&&this._enqueueUpdate(),this.updateComplete}async _enqueueUpdate(){let t;this._updateState=this._updateState|A;const e=this._updatePromise;this._updatePromise=new Promise(e=>t=e),await e,this._hasConnected||await new Promise(t=>this._hasConnectedResolver=t);const n=this.performUpdate();null!=n&&"function"==typeof n.then&&await n,t(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&C}get _hasRequestedUpdate(){return this._updateState&A}get hasUpdated(){return this._updateState&E}performUpdate(){if(this._instanceProperties&&this._applyInstanceProperties(),this.shouldUpdate(this._changedProperties)){const t=this._changedProperties;this.update(t),this._markUpdated(),this._updateState&E||(this._updateState=this._updateState|E,this.firstUpdated(t)),this.updated(t)}else this._markUpdated()}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~A}get updateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0)}updated(t){}firstUpdated(t){}}T.finalized=!0;const P=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:n,elements:r}=e;return{kind:n,elements:r,finisher(e){window.customElements.define(t,e)}}})(t,e),R=(t,e)=>"method"!==e.kind||!e.descriptor||"value"in e.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,t)}}:Object.assign({},e,{finisher(n){n.createProperty(e.key,t)}}),z=(t,e,n)=>{e.constructor.createProperty(n,t)};function j(t){return(e,n)=>void 0!==n?z(t,e,n):R(t,e)}const N=H((t,e)=>t.querySelector(e)),I=H((t,e)=>t.querySelectorAll(e)),U=(t,e,n)=>{Object.defineProperty(e,n,t)},V=(t,e)=>({kind:"method",placement:"prototype",key:e.key,descriptor:t});function H(t){return e=>(n,r)=>{const i={get(){return t(this.renderRoot,e)},enumerable:!0,configurable:!0};return void 0!==r?U(i,n,r):V(i,n)}}const $=t=>(e,n)=>void 0!==n?(t=t,M=e,n=n,void Object.assign(M[n],t)):((t,e)=>Object.assign({},e,{finisher(n){Object.assign(n.prototype[e.key],t)}}))(t,e);var L,M,F;const D="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,B=Symbol();class q{constructor(t,e){if(e!==B)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(D?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const G=t=>new q(String(t),B),W=(t,...e)=>{const n=e.reduce((e,n,r)=>e+(t=>{if(t instanceof q)return t.cssText;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+t[r+1],t[0]);return new q(n,B)};n.d(e,"a",function(){return J}),n.d(e,!1,function(){return _}),n.d(e,!1,function(){return x}),n.d(e,!1,function(){return T}),n.d(e,"c",function(){return P}),n.d(e,"f",function(){return j}),n.d(e,!1,function(){return N}),n.d(e,!1,function(){return I}),n.d(e,!1,function(){return $}),n.d(e,"d",function(){return r.i}),n.d(e,!1,function(){}),n.d(e,!1,function(){return r.e}),n.d(e,!1,function(){return r.d}),n.d(e,!1,function(){return D}),n.d(e,!1,function(){return q}),n.d(e,"g",function(){return G}),n.d(e,"b",function(){return W}),(window.litElementVersions||(window.litElementVersions=[])).push("2.0.1");const Y=t=>t.flat?t.flat(1/0):function t(e,n=[]){for(let r=0,i=e.length;r<i;r++){const i=e[r];Array.isArray(i)?t(i,n):n.push(i)}return n}(t);class J extends T{static finalize(){super.finalize(),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const t=this.styles,e=[];if(Array.isArray(t)){Y(t).reduceRight((t,e)=>(t.add(e),t),new Set).forEach(t=>e.unshift(t))}else t&&e.push(t);return e}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?D?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){super.update(t);const e=this.render();e instanceof r.e&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){}}J.finalized=!0,J.render=((t,e,n)=>{const r=n.scopeName,a=u.a.has(e),s=e instanceof ShadowRoot&&m&&t instanceof h.b,c=s&&!g.has(r),d=c?document.createDocumentFragment():e;if(Object(u.b)(t,d,Object.assign({templateFactory:(t=>e=>{const n=f(e.type,t);let r=l.a.get(n);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},l.a.set(n,r));let i=r.stringsArray.get(e.strings);if(void 0!==i)return i;const a=e.strings.join(o.f);if(void 0===(i=r.keyString.get(a))){const n=e.getTemplateElement();m&&window.ShadyCSS.prepareTemplateDom(n,t),i=new o.a(e,n),r.keyString.set(a,i)}return r.stringsArray.set(e.strings,i),i})(r)},n)),c){const t=u.a.get(d);u.a.delete(d),t.value instanceof p.a&&b(d,t.value.template,r),Object(i.b)(e,e.firstChild),e.appendChild(d),u.a.set(e,t)}!a&&s&&window.ShadyCSS.styleElement(e.host)})},31:function(t,e,n){"use strict";e.__esModule=!0;e.addLeadingSlash=function(t){return"/"===t.charAt(0)?t:"/"+t},e.stripLeadingSlash=function(t){return"/"===t.charAt(0)?t.substr(1):t};var r=e.hasBasename=function(t,e){return new RegExp("^"+e+"(\\/|\\?|#|$)","i").test(t)};e.stripBasename=function(t,e){return r(t,e)?t.substr(e.length):t},e.stripTrailingSlash=function(t){return"/"===t.charAt(t.length-1)?t.slice(0,-1):t},e.parsePath=function(t){var e=t||"/",n="",r="",i=e.indexOf("#");-1!==i&&(r=e.substr(i),e=e.substr(0,i));var o=e.indexOf("?");return-1!==o&&(n=e.substr(o),e=e.substr(0,o)),{pathname:e,search:"?"===n?"":n,hash:"#"===r?"":r}},e.createPath=function(t){var e=t.pathname,n=t.search,r=t.hash,i=e||"/";return n&&"?"!==n&&(i+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(i+="#"===r.charAt(0)?r:"#"+r),i}},32:function(t,e,n){"use strict";t.exports=function(){}},33:function(t,e,n){"use strict";e.__esModule=!0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o=l(n(32)),a=l(n(1097)),s=n(1096),c=n(31),d=l(n(1093)),u=n(1092);function l(t){return t&&t.__esModule?t:{default:t}}var p=function(){try{return window.history.state||{}}catch(t){return{}}};e.default=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,a.default)(u.canUseDOM,"Browser history needs a DOM");var e=window.history,n=(0,u.supportsHistory)(),l=!(0,u.supportsPopStateOnHashChange)(),h=t.forceRefresh,f=void 0!==h&&h,m=t.getUserConfirmation,v=void 0===m?u.getConfirmation:m,g=t.keyLength,b=void 0===g?6:g,y=t.basename?(0,c.stripTrailingSlash)((0,c.addLeadingSlash)(t.basename)):"",_=function(t){var e=t||{},n=e.key,r=e.state,i=window.location,a=i.pathname+i.search+i.hash;return(0,o.default)(!y||(0,c.hasBasename)(a,y),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+a+'" to begin with "'+y+'".'),y&&(a=(0,c.stripBasename)(a,y)),(0,s.createLocation)(a,r,n)},x=function(){return Math.random().toString(36).substr(2,b)},w=(0,d.default)(),S=function(t){i(U,t),U.length=e.length,w.notifyListeners(U.location,U.action)},E=function(t){(0,u.isExtraneousPopstateEvent)(t)||O(_(t.state))},A=function(){O(_(p()))},k=!1,O=function(t){k?(k=!1,S()):w.confirmTransitionTo(t,"POP",v,function(e){e?S({action:"POP",location:t}):C(t)})},C=function(t){var e=U.location,n=P.indexOf(e.key);-1===n&&(n=0);var r=P.indexOf(t.key);-1===r&&(r=0);var i=n-r;i&&(k=!0,z(i))},T=_(p()),P=[T.key],R=function(t){return y+(0,c.createPath)(t)},z=function(t){e.go(t)},j=0,N=function(t){1===(j+=t)?((0,u.addEventListener)(window,"popstate",E),l&&(0,u.addEventListener)(window,"hashchange",A)):0===j&&((0,u.removeEventListener)(window,"popstate",E),l&&(0,u.removeEventListener)(window,"hashchange",A))},I=!1,U={length:e.length,action:"POP",location:T,createHref:R,push:function(t,i){(0,o.default)(!("object"===(void 0===t?"undefined":r(t))&&void 0!==t.state&&void 0!==i),"You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored");var a=(0,s.createLocation)(t,i,x(),U.location);w.confirmTransitionTo(a,"PUSH",v,function(t){if(t){var r=R(a),i=a.key,s=a.state;if(n)if(e.pushState({key:i,state:s},null,r),f)window.location.href=r;else{var c=P.indexOf(U.location.key),d=P.slice(0,-1===c?0:c+1);d.push(a.key),P=d,S({action:"PUSH",location:a})}else(0,o.default)(void 0===s,"Browser history cannot push state in browsers that do not support HTML5 history"),window.location.href=r}})},replace:function(t,i){(0,o.default)(!("object"===(void 0===t?"undefined":r(t))&&void 0!==t.state&&void 0!==i),"You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored");var a=(0,s.createLocation)(t,i,x(),U.location);w.confirmTransitionTo(a,"REPLACE",v,function(t){if(t){var r=R(a),i=a.key,s=a.state;if(n)if(e.replaceState({key:i,state:s},null,r),f)window.location.replace(r);else{var c=P.indexOf(U.location.key);-1!==c&&(P[c]=a.key),S({action:"REPLACE",location:a})}else(0,o.default)(void 0===s,"Browser history cannot replace state in browsers that do not support HTML5 history"),window.location.replace(r)}})},go:z,goBack:function(){return z(-1)},goForward:function(){return z(1)},block:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=w.setPrompt(t);return I||(N(1),I=!0),function(){return I&&(I=!1,N(-1)),e()}},listen:function(t){var e=w.appendListener(t);return N(1),function(){N(-1),e()}}};return U}},36:function(t,e,n){"use strict";n.d(e,"a",function(){return r});const r=({title:t,description:e,url:n,image:r,imageAlt:o})=>{t&&(document.title=t,i("property","og:title",t)),e&&(i("name","description",e),i("property","og:description",e)),r&&i("property","og:image",r),o&&i("property","og:image:alt",o),i("property","og:url",n=n||window.location.href)};function i(t,e,n){let r=document.head.querySelector(`meta[${t}="${e}"]`);r||((r=document.createElement("meta")).setAttribute(t,e),document.head.appendChild(r)),r.setAttribute("content",n||"")}},4:function(t,e,n){"use strict";var r=n(21);const i=r["a"]`
  <style>
	    :host, :root {
			--rd-xxs: 1px;
					--rd-xs: 2px;
					--rd-sm: 3px;
					--rd-md: 5px;
					--rd-lg: 8px;

					--size-xxs: 3px;
					--size-xs: 5px;
					--size-sm: 10px;
					--size-md: 15px;
					--size-lg: 25px;
					--size-xlg: 35px;
					--size-xxlg: 50px;
					--size-xxxlg: 90px;
					--size-50: 50%;


					--g10: hsl(360, 0%, 10%);
				--g20: hsl(360, 0%, 20%);
				--g30: hsl(360, 0%, 30%);
				--g40: hsl(360, 0%, 40%);
				--g50: hsl(360, 0%, 50%);
				--g60: hsl(360, 0%, 60%);
				--g70: hsl(360, 0%, 70%);
				--g80: hsl(360, 0%, 80%);
				--g90: hsl(360, 0%, 90%);
				--g95: hsl(360, 0%, 95%);
				--g97: hsl(360, 0%, 97%);
				--g100: hsl(360, 0%, 100%);


				/* typography */
				--font-size-base: 16px;

				--font-size1:               2.5rem;
				--font-size2:               2rem;
				--font-size3:               1.75rem;
				--font-size4:               1.5rem;
				--font-size5:               1.25rem;
				--font-size6:               1rem;


				--font-xlg:			2.75;
				--font-lg:			1.25;
				--font-md: 			0.5;
				--font-sm:  		.3;
				--font-xs: 			.75;


				/* grid */
				--xs: 				600px;
				--sm: 				960px;
				--md: 				1280px;
				--lg: 				1600px;
				--xlg: 				5000px;

				--columns:		12;
				--gap:				10px;
				--c-gap:			calc(var(--gap) * 3);

				--c-1: 				100% / var(--columns) * 1;
	      --c-2: 				100% / var(--columns) * 2;
	      --c-3: 				100% / var(--columns) * 3;
	      --c-4: 				100% / var(--columns) * 4;
				--c-5: 				100% / var(--columns) * 5;
	      --c-6: 				100% / var(--columns) * 6;
				--c-7: 				100% / var(--columns) * 7;
				--c-8: 				100% / var(--columns) * 8;
				--c-9: 				100% / var(--columns) * 9;
				--c-10: 			100% / var(--columns) * 10;
				--c-11: 			100% / var(--columns) * 11;
	      --c-12: 			100% / var(--columns) * 12;

				--c-1-o: 			0 0 calc(var(--c-1));
				--c-2-o: 			0 0 calc(var(--c-2));
				--c-3-o: 			0 0 calc(var(--c-3));
				--c-4-o: 			0 0 calc(var(--c-4));
				--c-5-o: 			0 0 calc(var(--c-5));
				--c-6-o: 			0 0 calc(var(--c-6));
				--c-7-o: 			0 0 calc(var(--c-7));
				--c-8-o: 			0 0 calc(var(--c-8));
				--c-9-o: 			0 0 calc(var(--c-9));
				--c-10-o: 		0 0 calc(var(--c-10));
				--c-11-o: 		0 0 calc(var(--c-11));
				--c-12-o: 		0 0 calc(var(--c-12));

				--c-1-i:			0 0 calc( var(--c-1) - (var(--gap)*2) );
				--c-2-i:			0 0 calc( var(--c-2) - (var(--gap)*2) );
				--c-3-i:			0 0 calc( var(--c-3) - (var(--gap)*2) );
				--c-4-i:			0 0 calc( var(--c-4) - (var(--gap)*2) );
				--c-5-i:			0 0 calc( var(--c-5) - (var(--gap)*2) );
				--c-6-i:			0 0 calc( var(--c-6) - (var(--gap)*2) );
				--c-7-i:			0 0 calc( var(--c-7) - (var(--gap)*2) );
				--c-8-i:			0 0 calc( var(--c-8) - (var(--gap)*2) );
				--c-9-i:			0 0 calc( var(--c-9) - (var(--gap)*2) );
				--c-10-i:			0 0 calc( var(--c-10) - (var(--gap)*2) );
				--c-11-i:			0 0 calc( var(--c-11) - (var(--gap)*2) );
				--c-12-i:			0 0 calc( var(--c-12) - (var(--gap)*2) );

				--off-1:			var(--c-1);
				--off-2:			var(--c-2);
				--off-3:			var(--c-3);
				--off-4:			var(--c-4);
				--off-5:			var(--c-5);
				--off-6:			var(--c-6);
				--off-7:			var(--c-7);
				--off-8:			var(--c-8);
				--off-9:			var(--c-9);
				--off-10:			var(--c-10);
				--off-11:			var(--c-11);								
				--off-12:			var(--c-12);
			}
	</style>
`,o=r["a"]`
  <style>
		/* Change the default font family in all browsers */
		html {
		  font-family: sans-serif;
		}

		/* Remove the margin in all browsers */
		body {
		  margin: 0;
		}

		a {
			text-decoration: none;
			color: inherit;
		}

		/* Remove the outline on focused links when they are also active or hovered in all browsers */
		a:active,
		a:hover {
		  outline-width: 0;
		}

		/* Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari */
		abbr[title] {
		  text-decoration: underline;
		  text-decoration: underline dotted;
		}

		/* Add the correct font weight in Chrome, Edge, and Safari */
		b, strong {
		  font-weight: bolder;
		}

		/* Add the correct font size in all browsers */

		small {
		  font-size: 80%;
		}

		/* Prevent sub and sup elements from affecting the line height in all browsers */

		sub, sup {
		  font-size: 75%;
		  line-height: 0;
		  position: relative;
		  vertical-align: baseline;
		}

		sub {
		  bottom: -0.25em;
		}

		sup {
		  top: -0.5em;
		}

		/* 1. Correct the inheritance and scaling of font size in all browsers.*/
		/* 2. Correct the odd em font sizing in all browsers.*/
		code, kbd, pre, samp {
		  font-family: monospace, monospace; /*1*/
		  font-size: 1em; /*2*/
		}

		h1, h2, h3, h4, h5, h6, p {
			margin: 0;
		}
	</style>
`;var a=n(16);const s=r["a"]`
  	<style>
	    :root, :host {
				--g10: hsl(360, 0%, 10%);
				--g20: hsl(360, 0%, 20%);
				--g30: hsl(360, 0%, 30%);
				--g40: hsl(360, 0%, 40%);
				--g50: hsl(360, 0%, 50%);
				--g60: hsl(360, 0%, 60%);
				--g70: hsl(360, 0%, 70%);
				--g80: hsl(360, 0%, 80%);
				--g90: hsl(360, 0%, 90%);
				--g95: hsl(360, 0%, 95%);
				--g97: hsl(360, 0%, 97%);
				--g100: hsl(360, 0%, 100%);
			}
	</style>
`,c=r["a"]`
<style>
	ink-hero1, ink-hero2, ink-hero3, ink-hero4,
	ink-head1, ink-head2, ink-head3, ink-head4, ink-head5, ink-head6,
	ink-copy1, ink-copy2, ink-copy3, ink-copy4, ink-copy5, ink-copy6,
	ink-micro1, ink-micro2,
	ink-quote {
		display: block;
		overflow-wrap: break-word;
		word-wrap: break-word;
		-webkit-hyphens: auto;
		-ms-hyphens: auto;
		hyphens: auto;
	}

	ink-inline-quote {
		quotes: '«' '»';
	}


	ink-hero1 {
		font-size: 				calc(var(--font-size1) * var(--font-xlg));
		letter-spacing: 	calc(var(--font-size1) * var(--font-xlg) * -0.02);
		line-height:			calc(var(--font-size1) * var(--font-xlg) * 1.4);
		padding: 					calc(var(--font-size1) * var(--font-xlg) * 0.5) 0;
	}

	ink-hero2 {
		font-size: 				calc(var(--font-size2) * var(--font-xlg));
		letter-spacing: 	calc(var(--font-size1) * var(--font-xlg) * -0.01);
		line-height:			calc(var(--font-size2) * var(--font-xlg) * 1.4);
		padding: 					calc(var(--font-size2) * var(--font-xlg) * 0.5) 0;
	}

	ink-hero3 {
		font-size: 				calc(var(--font-size3) * var(--font-xlg));
		letter-spacing: 	calc(var(--font-size3) * var(--font-xlg) * 0.005);
		line-height:			calc(var(--font-size3) * var(--font-xlg) * 1.4);
		padding: 					calc(var(--font-size3) * var(--font-xlg) * 0.5) 0;
	}

	ink-hero4 {
		font-size: 				calc(var(--font-size4) * var(--font-xlg));
		letter-spacing: 	calc(var(--font-size4) * var(--font-xlg) * 0.005);
		line-height:			calc(var(--font-size4) * var(--font-xlg) * 1.4);
		padding: 					calc(var(--font-size4) * var(--font-xlg) * 0.5) 0;
	}

	ink-head1 { font-size: calc(var(--font-size1) * var(--font-lg)); }
	ink-head2 { font-size: calc(var(--font-size2) * var(--font-lg)); }
	ink-head3 { font-size: calc(var(--font-size3) * var(--font-lg)); }
	ink-head4 { font-size: calc(var(--font-size4) * var(--font-lg)); }
	ink-head5 { font-size: calc(var(--font-size5) * var(--font-lg)); }
	ink-head6 { font-size: calc(var(--font-size6) * var(--font-lg)); }

	ink-copy1 { font-size: calc(var(--font-size1) * var(--font-md)); }
	ink-copy2 { font-size: calc(var(--font-size2) * var(--font-md)); }
	ink-copy3 { font-size: calc(var(--font-size3) * var(--font-md)); }
	ink-copy4 { font-size: calc(var(--font-size4) * var(--font-md)); }



	ink-micro1 {
		font-size: 				calc(var(--font-size1) * var(--font-sm));
		letter-spacing: 	calc(var(--font-size1) * var(--font-sm) * 0.1);
		line-height:			calc(var(--font-size1) * var(--font-sm) * 1.4);
		padding: 					calc(var(--font-size1) * var(--font-sm) * 0.5) 0;
	}

	ink-micro2 {
		font-size: 				calc(var(--font-size2) * var(--font-sm));
		letter-spacing: 	calc(var(--font-size2) * var(--font-sm) * 0.2);
		line-height:			calc(var(--font-size2) * var(--font-sm) * 1.4);
		padding: 					calc(var(--font-size2) * var(--font-sm) * 0.6) 0;
	}



	strong {
		font-weight: bold;
	}



	/* columns */

	/*ink-cols > * {*/
	ink-cols {
		-moz-column-width: 300px;
		column-width: 300px;

		-moz-column-count: 1;
		column-count: 1;

		-moz-column-fill: balance;
		column-fill: balance;

		column-gap: var(--c-gap);
		/*column-rule: 1px dashed #CCC;*/

		display: block;
	}

	[c2] {
		column-count: 2;
	}

	[c3] {
		column-count: 3;
	}

	[c4] {
		column-count: 4;
	}

	[c5] {
		column-count: 5;
	}

	[c6] {
		column-count: 6;
	}


	ink-cols > *[ink-span] {
		column-span: all;
	}




	/*column-count: 3;*/
	/*.multi-column.width {
		column-width: 175px;
	}*/

	/*.multi-column.three-columns {
		columns: 3 350px;
	}*/




	a {
		color: inherit;
		font-weight: 600;
		text-decoration: none;
	}


	ink-hero1, ink-hero2, ink-hero3, ink-hero4 {
		font-family: 'Source Sans Pro', sans-serif;
		font-weight: 200;
	}



	*[ink-txt-l] { text-align: left; }
	*[ink-txt-r] { text-align: right; }
	*[ink-txt-c] { text-align: center; }
	*[ink-txt-j] { text-align: justify; }


	*[ink-hide] { display: none; }
	*[ink-show] { display: block; }
	*[ink-vis] { visibility: visible; }
	*[ink-invis] { visibility: hidden; }

	*[ink-accent] {
		font-family: 'Norican', cursive;
	}

	*[white] {
		color: white;
	}
</style>
`,d=document.createElement("div");d.setAttribute("style","display: none;"),d.innerHTML="<dom-module id='ink-links'>\n  <template>\n    <style>\n\t\t\t\t/*a {\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tborder-bottom: 2px solid var(--primary);\n\t\t\t\t}*/\n\n\t\t\t\t/*a:after {\n\t\t\t\tcontent: '';\n\t\t\t\tdisplay: block;\n\t\t\t\tmargin: auto;\n\t\t\t\theight: 1px;\n\t\t\t\twidth: 0;\n\t\t\t\tbackground: var(--secondary);\n\t\t\t\ttransition: width .2s ease, background-color .2s ease;\n\t\t\t}\n\n\t\t\ta:hover:after {\n\t\t\twidth: 100%;\n\t\t\tbackground: var(--primary);\n\t\t\t}*/\n\n\t\t</style>\n  </template>\n</dom-module>",document.head.appendChild(d);n(5);var u=n(3);n.d(e,"b",function(){return i}),n.d(e,"a",function(){return o}),n.d(e,!1,function(){return a.a}),n.d(e,!1,function(){return s}),n.d(e,!1,function(){return c}),n.d(e,!1,function(){}),n.d(e,"c",function(){return u.g})},5:function(t,e,n){"use strict";n.d(e,"e",function(){return c}),n.d(e,"f",function(){return p}),n.d(e,"g",function(){return o}),n.d(e,"b",function(){return i}),n.d(e,"a",function(){return g}),n.d(e,"c",function(){return b}),n.d(e,"d",function(){return y});var r=n(3),i={};["g10","g20","g30","g40","g50","g60","g70","g80","g90","g95","g97","g100"].map(t=>{i[t]=`border: 1px solid var(--${t});`});var o={};["xxs","xs","sm","md","lg"].map(t=>{o[t]=`border-radius: var(--rd-${t});`});var a=["50","xxs","xs","sm","md","lg","xlg","xxlg","xxxlg"],s={};a.map(t=>{s[t]=`margin: var(--size-${t});`});var c={};a.map(t=>{c[t]=`margin-top: var(--size-${t});`});var d={};a.map(t=>{d[t]=`margin-bottom: var(--size-${t});`});var u={};a.map(t=>{u[t]=`margin-left: var(--size-${t});`});var l={};a.map(t=>{l[t]=`margin-right: var(--size-${t});`});var p={};a.map(t=>{p[t]=`padding: var(--size-${t});`});var h={};a.map(t=>{h[t]=`padding-top: var(--size-${t});`});var f={};a.map(t=>{f[t]=`padding-bottom: var(--size-${t});`});a.map(t=>{`padding-left: var(--size-${t});`});var m={};a.map(t=>{m[t]=`padding-right: var(--size-${t});`});r["d"]`
    <style>
		    :host, :root {
					--brd-g10: { border: 1px solid var(--g10); }
					--brd-g20: { border: 1px solid var(--g20); }
					--brd-g30: { border: 1px solid var(--g30); }
					--brd-g40: { border: 1px solid var(--g40); }
					--brd-g50: { border: 1px solid var(--g50); }
					--brd-g60: { border: 1px solid var(--g60); }
					--brd-g70: { border: 1px solid var(--g70); }
					--brd-g80: { border: 1px solid var(--g80); }
					--brd-g90: { border: 1px solid var(--g90); }
					--brd-g100: { border: 1px solid var(--g100); }

					/* radius */
					--rd-xxs: 1px;
					--rd-xs: 2px;
					--rd-sm: 3px;
					--rd-md: 5px;
					--rd-lg: 8px;

					--size-xxs: 3px;
					--size-xs: 5px;
					--size-sm: 10px;
					--size-md: 15px;
					--size-lg: 25px;
					--size-xlg: 35px;
					--size-xxlg: 50px;
					--size-xxxlg: 90px;
					--size-50: 50%;
				}

				@media (min-width: 601px) {
					.hide-sm-and-above {
						display: none;
					}
				}

				@media (min-width: 961px) {
					.hide-md-and-above {
						display: none;
					}
				}

				@media (min-width: 1280px) {
					.hide-lg-and-above {
						display: none;
					}
				}




				@media (min-width: 1px) and (max-width: 600px) {
					.hide-xs-and-below {
						display: none;
					}
				}

				@media (min-width: 1px) and (max-width: 960px) {
					.hide-sm-and-below {
						display: none;
					}
				}

				@media (min-width: 1px) and (max-width: 1280px) {
					.hide-md-and-below {
						display: none;
					}
				}

				@media (min-width: 1px) and (max-width: 1600px) {
					.hide-lg-and-below {
						display: none;
					}
				}


				*[h-ctr] {
					@apply --flx-ctr;
				}

				*[hv-ctr] {
					@apply --flx-ctr-ctr;
				}



				*[fw] {
					width: 100%;
					margin: 0;
				}
		</style>
`;const v="\n\ttop: 0;\n\tbottom: 0;\n\tleft: 0;\n\tright: 0;\n",g=`\n\t${v}\n\tposition: absolute;\n\toverflow-y: scroll;\n`,b="\n\tdisplay: flex;\n",y=`\n\t${b}\n\talign-items: center;\n`},6:function(t,e,n){"use strict";var r=n(10);class i{handleAttributeExpressions(t,e,n,i){const o=e[0];if("."===o){return new r.f(t,e.slice(1),n).parts}return"@"===o?[new r.d(t,e.slice(1),i.eventContext)]:"?"===o?[new r.c(t,e.slice(1),n)]:new r.a(t,e,n).parts}handleTextExpression(t){return new r.e(t)}}const o=new i;var a=n(17),s=n(26),c=n(14),d=n(25),u=n(23),l=n(22),p=n(24),h=n(13);n.d(e,"i",function(){return f}),n.d(e,!1,function(){return i}),n.d(e,!1,function(){return o}),n.d(e,"g",function(){return s.a}),n.d(e,!1,function(){return s.b}),n.d(e,!1,function(){return c.b}),n.d(e,!1,function(){return c.c}),n.d(e,"j",function(){return d.a}),n.d(e,!1,function(){return d.b}),n.d(e,!1,function(){return r.a}),n.d(e,"a",function(){return r.b}),n.d(e,!1,function(){return r.c}),n.d(e,!1,function(){return r.d}),n.d(e,!1,function(){}),n.d(e,"b",function(){return r.e}),n.d(e,!1,function(){return r.f}),n.d(e,"c",function(){return r.g}),n.d(e,!1,function(){return u.a}),n.d(e,!1,function(){return u.b}),n.d(e,!1,function(){return l.a}),n.d(e,"k",function(){return l.b}),n.d(e,!1,function(){return p.a}),n.d(e,"d",function(){return a.a}),n.d(e,"e",function(){return a.b}),n.d(e,!1,function(){return h.c}),n.d(e,!1,function(){return h.d}),n.d(e,!1,function(){return h.a}),(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.0.0");const f=(t,...e)=>new a.b(t,e,"html",o)},7:function(t,e,n){"use strict";var r=n(3),i=n(6);window.navigator.userAgent.match("Trident")&&(DOMTokenList.prototype.toggle=function(t,e){return void 0===e||e?this.add(t):this.remove(t),void 0===e||e});const o=new WeakMap,a=new WeakMap,s=Object(i.g)(t=>e=>{if(!(e instanceof i.a)||e instanceof i.c||"class"!==e.committer.name||e.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");a.has(e)||(e.committer.element.className=e.committer.strings.join(" "),a.set(e,!0));const n=o.get(e);for(const r in n)r in t||e.committer.element.classList.remove(r);for(const r in t)n&&n[r]===t[r]||e.committer.element.classList.toggle(r,Boolean(t[r]));o.set(e,t)});const c=r["b"]`@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var: 1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug::before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-button{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:2.25rem;font-weight:500;letter-spacing:.0892857143em;text-decoration:none;text-transform:uppercase;--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;padding:0 8px 0 8px;display:inline-flex;position:relative;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;height:36px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:hidden;vertical-align:middle;border-radius:4px}.mdc-button::before,.mdc-button::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-button::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-button.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-button.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-button.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-button.mdc-ripple-upgraded--foreground-activation::after{animation:225ms mdc-ripple-fg-radius-in forwards,75ms mdc-ripple-fg-opacity-in forwards}.mdc-button.mdc-ripple-upgraded--foreground-deactivation::after{animation:150ms mdc-ripple-fg-opacity-out;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-button::before,.mdc-button::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-button.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{background-color:transparent;color:rgba(0,0,0,.37);cursor:default;pointer-events:none}.mdc-button.mdc-button--dense{border-radius:4px}.mdc-button:not(:disabled){background-color:transparent}.mdc-button:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button::before,.mdc-button::after{background-color:#6200ee}@supports not (-ms-ime-align: auto){.mdc-button::before,.mdc-button::after{background-color:var(--mdc-theme-primary, #6200ee)}}.mdc-button:hover::before{opacity:.04}.mdc-button:not(.mdc-ripple-upgraded):focus::before,.mdc-button.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.12}.mdc-button:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-button:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.16}.mdc-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.16}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;width:18px;height:18px;font-size:18px;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button svg.mdc-button__icon{fill:currentColor}.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon,.mdc-button--outlined .mdc-button__icon{margin-left:-4px;margin-right:8px}[dir=rtl] .mdc-button--raised .mdc-button__icon,.mdc-button--raised .mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--unelevated .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--outlined .mdc-button__icon,.mdc-button--outlined .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:-4px}.mdc-button--raised,.mdc-button--unelevated{padding:0 16px 0 16px}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:rgba(0,0,0,.12);color:rgba(0,0,0,.37)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:#6200ee}@supports not (-ms-ime-align: auto){.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:var(--mdc-theme-primary, #6200ee)}}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-button--raised::before,.mdc-button--raised::after,.mdc-button--unelevated::before,.mdc-button--unelevated::after{background-color:#fff}@supports not (-ms-ime-align: auto){.mdc-button--raised::before,.mdc-button--raised::after,.mdc-button--unelevated::before,.mdc-button--unelevated::after{background-color:var(--mdc-theme-on-primary, #fff)}}.mdc-button--raised:hover::before,.mdc-button--unelevated:hover::before{opacity:.08}.mdc-button--raised:not(.mdc-ripple-upgraded):focus::before,.mdc-button--raised.mdc-ripple-upgraded--background-focused::before,.mdc-button--unelevated:not(.mdc-ripple-upgraded):focus::before,.mdc-button--unelevated.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.24}.mdc-button--raised:not(.mdc-ripple-upgraded)::after,.mdc-button--unelevated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-button--raised:not(.mdc-ripple-upgraded):active::after,.mdc-button--unelevated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.32}.mdc-button--raised.mdc-ripple-upgraded,.mdc-button--unelevated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.32}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--raised:hover,.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0,0,0,.12)}.mdc-button--outlined{border-style:solid;padding:0 14px 0 14px;border-width:2px}.mdc-button--outlined:disabled{border-color:rgba(0,0,0,.37)}.mdc-button--outlined:not(:disabled){border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-button--dense{height:32px;font-size:.8125rem}.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:"liga";-webkit-font-smoothing:antialiased}:host{display:inline-flex;outline:none}.mdc-button{flex:1}`;var d=class{static get cssClasses(){return{}}static get strings(){return{}}static get numbers(){return{}}static get defaultAdapter(){return{}}constructor(t={}){this.adapter_=t}init(){}destroy(){}};const u={ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded",BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation"},l={VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end"},p={PADDING:10,INITIAL_ORIGIN_SCALE:.6,DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,TAP_DELAY_MS:300};let h,f;function m(t=window,e=!1){if(void 0===f||e){let e=!1;try{t.document.addEventListener("test",null,{get passive(){return e=!0}})}catch(t){}f=e}return!!f&&{passive:!0}}const v=["touchstart","pointerdown","mousedown","keydown"],g=["touchend","pointerup","mouseup"];let b=[];class y extends d{static get cssClasses(){return u}static get strings(){return l}static get numbers(){return p}static get defaultAdapter(){return{browserSupportsCssVars:()=>{},isUnbounded:()=>{},isSurfaceActive:()=>{},isSurfaceDisabled:()=>{},addClass:()=>{},removeClass:()=>{},containsEventTarget:()=>{},registerInteractionHandler:()=>{},deregisterInteractionHandler:()=>{},registerDocumentInteractionHandler:()=>{},deregisterDocumentInteractionHandler:()=>{},registerResizeHandler:()=>{},deregisterResizeHandler:()=>{},updateCssVariable:()=>{},computeBoundingRect:()=>{},getWindowPageOffset:()=>{}}}constructor(t){super(Object.assign(y.defaultAdapter,t)),this.layoutFrame_=0,this.frame_={width:0,height:0},this.activationState_=this.defaultActivationState_(),this.initialSize_=0,this.maxRadius_=0,this.activateHandler_=(t=>this.activate_(t)),this.deactivateHandler_=(()=>this.deactivate_()),this.focusHandler_=(()=>this.handleFocus()),this.blurHandler_=(()=>this.handleBlur()),this.resizeHandler_=(()=>this.layout()),this.unboundedCoords_={left:0,top:0},this.fgScale_=0,this.activationTimer_=0,this.fgDeactivationRemovalTimer_=0,this.activationAnimationHasEnded_=!1,this.activationTimerCallback_=(()=>{this.activationAnimationHasEnded_=!0,this.runDeactivationUXLogicIfReady_()}),this.previousActivationEvent_}supportsPressRipple_(){return this.adapter_.browserSupportsCssVars()}defaultActivationState_(){return{isActivated:!1,hasDeactivationUXRun:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1,activationEvent:void 0,isProgrammatic:!1}}init(){const t=this.supportsPressRipple_();if(this.registerRootHandlers_(t),t){const{ROOT:t,UNBOUNDED:e}=y.cssClasses;requestAnimationFrame(()=>{this.adapter_.addClass(t),this.adapter_.isUnbounded()&&(this.adapter_.addClass(e),this.layoutInternal_())})}}destroy(){if(this.supportsPressRipple_()){this.activationTimer_&&(clearTimeout(this.activationTimer_),this.activationTimer_=0,this.adapter_.removeClass(y.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer_&&(clearTimeout(this.fgDeactivationRemovalTimer_),this.fgDeactivationRemovalTimer_=0,this.adapter_.removeClass(y.cssClasses.FG_DEACTIVATION));const{ROOT:t,UNBOUNDED:e}=y.cssClasses;requestAnimationFrame(()=>{this.adapter_.removeClass(t),this.adapter_.removeClass(e),this.removeCssVars_()})}this.deregisterRootHandlers_(),this.deregisterDeactivationHandlers_()}registerRootHandlers_(t){t&&(v.forEach(t=>{this.adapter_.registerInteractionHandler(t,this.activateHandler_)}),this.adapter_.isUnbounded()&&this.adapter_.registerResizeHandler(this.resizeHandler_)),this.adapter_.registerInteractionHandler("focus",this.focusHandler_),this.adapter_.registerInteractionHandler("blur",this.blurHandler_)}registerDeactivationHandlers_(t){"keydown"===t.type?this.adapter_.registerInteractionHandler("keyup",this.deactivateHandler_):g.forEach(t=>{this.adapter_.registerDocumentInteractionHandler(t,this.deactivateHandler_)})}deregisterRootHandlers_(){v.forEach(t=>{this.adapter_.deregisterInteractionHandler(t,this.activateHandler_)}),this.adapter_.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter_.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter_.isUnbounded()&&this.adapter_.deregisterResizeHandler(this.resizeHandler_)}deregisterDeactivationHandlers_(){this.adapter_.deregisterInteractionHandler("keyup",this.deactivateHandler_),g.forEach(t=>{this.adapter_.deregisterDocumentInteractionHandler(t,this.deactivateHandler_)})}removeCssVars_(){const{strings:t}=y;Object.keys(t).forEach(e=>{0===e.indexOf("VAR_")&&this.adapter_.updateCssVariable(t[e],null)})}activate_(t){if(this.adapter_.isSurfaceDisabled())return;const e=this.activationState_;if(e.isActivated)return;const n=this.previousActivationEvent_;n&&void 0!==t&&n.type!==t.type||(e.isActivated=!0,e.isProgrammatic=void 0===t,e.activationEvent=t,e.wasActivatedByPointer=!e.isProgrammatic&&(void 0!==t&&("mousedown"===t.type||"touchstart"===t.type||"pointerdown"===t.type)),void 0!==t&&b.length>0&&b.some(t=>this.adapter_.containsEventTarget(t))?this.resetActivationState_():(void 0!==t&&(b.push(t.target),this.registerDeactivationHandlers_(t)),e.wasElementMadeActive=this.checkElementMadeActive_(t),e.wasElementMadeActive&&this.animateActivation_(),requestAnimationFrame(()=>{b=[],e.wasElementMadeActive||void 0===t||" "!==t.key&&32!==t.keyCode||(e.wasElementMadeActive=this.checkElementMadeActive_(t),e.wasElementMadeActive&&this.animateActivation_()),e.wasElementMadeActive||(this.activationState_=this.defaultActivationState_())})))}checkElementMadeActive_(t){return void 0===t||"keydown"!==t.type||this.adapter_.isSurfaceActive()}activate(t){this.activate_(t)}animateActivation_(){const{VAR_FG_TRANSLATE_START:t,VAR_FG_TRANSLATE_END:e}=y.strings,{FG_DEACTIVATION:n,FG_ACTIVATION:r}=y.cssClasses,{DEACTIVATION_TIMEOUT_MS:i}=y.numbers;this.layoutInternal_();let o="",a="";if(!this.adapter_.isUnbounded()){const{startPoint:t,endPoint:e}=this.getFgTranslationCoordinates_();o=`${t.x}px, ${t.y}px`,a=`${e.x}px, ${e.y}px`}this.adapter_.updateCssVariable(t,o),this.adapter_.updateCssVariable(e,a),clearTimeout(this.activationTimer_),clearTimeout(this.fgDeactivationRemovalTimer_),this.rmBoundedActivationClasses_(),this.adapter_.removeClass(n),this.adapter_.computeBoundingRect(),this.adapter_.addClass(r),this.activationTimer_=setTimeout(()=>this.activationTimerCallback_(),i)}getFgTranslationCoordinates_(){const{activationEvent:t,wasActivatedByPointer:e}=this.activationState_;let n;return{startPoint:n={x:(n=e?function(t,e,n){const{x:r,y:i}=e,o=r+n.left,a=i+n.top;let s,c;return"touchstart"===t.type?(s=(t=t).changedTouches[0].pageX-o,c=t.changedTouches[0].pageY-a):(s=(t=t).pageX-o,c=t.pageY-a),{x:s,y:c}}(t,this.adapter_.getWindowPageOffset(),this.adapter_.computeBoundingRect()):{x:this.frame_.width/2,y:this.frame_.height/2}).x-this.initialSize_/2,y:n.y-this.initialSize_/2},endPoint:{x:this.frame_.width/2-this.initialSize_/2,y:this.frame_.height/2-this.initialSize_/2}}}runDeactivationUXLogicIfReady_(){const{FG_DEACTIVATION:t}=y.cssClasses,{hasDeactivationUXRun:e,isActivated:n}=this.activationState_;(e||!n)&&this.activationAnimationHasEnded_&&(this.rmBoundedActivationClasses_(),this.adapter_.addClass(t),this.fgDeactivationRemovalTimer_=setTimeout(()=>{this.adapter_.removeClass(t)},p.FG_DEACTIVATION_MS))}rmBoundedActivationClasses_(){const{FG_ACTIVATION:t}=y.cssClasses;this.adapter_.removeClass(t),this.activationAnimationHasEnded_=!1,this.adapter_.computeBoundingRect()}resetActivationState_(){this.previousActivationEvent_=this.activationState_.activationEvent,this.activationState_=this.defaultActivationState_(),setTimeout(()=>this.previousActivationEvent_=void 0,y.numbers.TAP_DELAY_MS)}deactivate_(){const t=this.activationState_;if(!t.isActivated)return;const e=Object.assign({},t);t.isProgrammatic?(requestAnimationFrame(()=>this.animateDeactivation_(e)),this.resetActivationState_()):(this.deregisterDeactivationHandlers_(),requestAnimationFrame(()=>{this.activationState_.hasDeactivationUXRun=!0,this.animateDeactivation_(e),this.resetActivationState_()}))}deactivate(){this.deactivate_()}animateDeactivation_({wasActivatedByPointer:t,wasElementMadeActive:e}){(t||e)&&this.runDeactivationUXLogicIfReady_()}layout(){this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame(()=>{this.layoutInternal_(),this.layoutFrame_=0})}layoutInternal_(){this.frame_=this.adapter_.computeBoundingRect();const t=Math.max(this.frame_.height,this.frame_.width);this.maxRadius_=this.adapter_.isUnbounded()?t:(()=>{return Math.sqrt(Math.pow(this.frame_.width,2)+Math.pow(this.frame_.height,2))+y.numbers.PADDING})(),this.initialSize_=Math.floor(t*y.numbers.INITIAL_ORIGIN_SCALE),this.fgScale_=this.maxRadius_/this.initialSize_,this.updateLayoutCssVars_()}updateLayoutCssVars_(){const{VAR_FG_SIZE:t,VAR_LEFT:e,VAR_TOP:n,VAR_FG_SCALE:r}=y.strings;this.adapter_.updateCssVariable(t,`${this.initialSize_}px`),this.adapter_.updateCssVariable(r,this.fgScale_),this.adapter_.isUnbounded()&&(this.unboundedCoords_={left:Math.round(this.frame_.width/2-this.initialSize_/2),top:Math.round(this.frame_.height/2-this.initialSize_/2)},this.adapter_.updateCssVariable(e,`${this.unboundedCoords_.left}px`),this.adapter_.updateCssVariable(n,`${this.unboundedCoords_.top}px`))}setUnbounded(t){const{UNBOUNDED:e}=y.cssClasses;t?this.adapter_.addClass(e):this.adapter_.removeClass(e)}handleFocus(){requestAnimationFrame(()=>this.adapter_.addClass(y.cssClasses.BG_FOCUSED))}handleBlur(){requestAnimationFrame(()=>this.adapter_.removeClass(y.cssClasses.BG_FOCUSED))}}var _=y;const x=r["b"]`@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}`,w=function(t){const e=["matches","webkitMatchesSelector","msMatchesSelector"];let n="matches";for(let r=0;r<e.length;r++){const i=e[r];if(i in t){n=i;break}}return n}(HTMLElement.prototype),S=function(t,e=!1){let n=h;if("boolean"==typeof h&&!e)return n;if(!t.CSS||"function"!=typeof t.CSS.supports)return;const r=t.CSS.supports("--css-vars","yes"),i=t.CSS.supports("(--css-vars: yes)")&&t.CSS.supports("color","#00000000");return n=!(!r&&!i||function(t){const e=t.document,n=e.createElement("div");n.className="mdc-ripple-surface--test-edge-var-bug",e.body.appendChild(n);const r=t.getComputedStyle(n),i=null!==r&&"solid"===r.borderTopStyle;return n.remove(),i}(t)),e||(h=n),n}(window),E=navigator.userAgent.match(/Safari/);let A=!1;const k=t=>{E&&!A&&(()=>{A=!0;const t=new i.b({templateFactory:i.k});t.appendInto(document.head),t.setValue(x),t.commit()})();const e=t.surfaceNode,n=t.interactionNode||e;n.getRootNode()!==e.getRootNode()&&""===n.style.position&&(n.style.position="relative");const r=new _({browserSupportsCssVars:()=>S,isUnbounded:()=>void 0===t.unbounded||t.unbounded,isSurfaceActive:()=>n[w](":active"),isSurfaceDisabled:()=>Boolean(t.disabled),addClass:t=>e.classList.add(t),removeClass:t=>e.classList.remove(t),containsEventTarget:t=>n.contains(t),registerInteractionHandler:(t,e)=>n.addEventListener(t,e,m()),deregisterInteractionHandler:(t,e)=>n.removeEventListener(t,e,m()),registerDocumentInteractionHandler:(t,e)=>document.documentElement.addEventListener(t,e,m()),deregisterDocumentInteractionHandler:(t,e)=>document.documentElement.removeEventListener(t,e,m()),registerResizeHandler:t=>window.addEventListener("resize",t),deregisterResizeHandler:t=>window.removeEventListener("resize",t),updateCssVariable:(t,n)=>e.style.setProperty(t,n),computeBoundingRect:()=>n.getBoundingClientRect(),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset})});return r.init(),r},O=new WeakMap,C=Object(i.g)((t={})=>e=>{const n=e.committer.element,r=t.interactionNode||n;let o=e.value;const a=O.get(o);void 0!==a&&a!==r&&(o.destroy(),o=i.j),o===i.j?(o=k(Object.assign({},t,{surfaceNode:n})),O.set(o,r),e.setValue(o)):(void 0!==t.unbounded&&o.setUnbounded(t.unbounded),void 0!==t.disabled&&o.setUnbounded(t.disabled)),!0===t.active?o.activate():!1===t.active&&o.deactivate()});n(1098);var T=function(t,e,n,r){var i,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(o<3?i(a):o>3?i(e,n,a):i(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a};let P=class extends r.a{constructor(){super(...arguments),this.raised=!1,this.unelevated=!1,this.outlined=!1,this.dense=!1,this.disabled=!1,this.icon="",this.label=""}createRenderRoot(){return this.attachShadow({mode:"open",delegatesFocus:!0})}render(){const t={"mdc-button--raised":this.raised,"mdc-button--unelevated":this.unelevated,"mdc-button--outlined":this.outlined,"mdc-button--dense":this.dense};return r["d"]`
      <button
          .ripple="${C({unbounded:!1})}"
          class="mdc-button ${s(t)}"
          ?disabled="${this.disabled}"
          aria-label="${this.label||this.icon}">
        ${this.icon?r["d"]`<span class="material-icons mdc-button__icon">${this.icon}</span>`:""}
        ${this.label}
        <slot></slot>
      </button>`}};P.styles=c,T([Object(r.f)({type:Boolean})],P.prototype,"raised",void 0),T([Object(r.f)({type:Boolean})],P.prototype,"unelevated",void 0),T([Object(r.f)({type:Boolean})],P.prototype,"outlined",void 0),T([Object(r.f)({type:Boolean})],P.prototype,"dense",void 0),T([Object(r.f)({type:Boolean})],P.prototype,"disabled",void 0),T([Object(r.f)()],P.prototype,"icon",void 0),T([Object(r.f)()],P.prototype,"label",void 0),P=T([Object(r.c)("mwc-button")],P)}}]);