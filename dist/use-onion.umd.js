!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).useOnion=r()}(this,(function(){"use strict";function t(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
t=function(){return r};var r={},e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{c({},"")}catch(t){c=function(t,r,e){return t[r]=e}}function f(t,r,e,n){var o=r&&r.prototype instanceof h?r:h,i=Object.create(o.prototype),a=new L(n||[]);return i._invoke=function(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return A()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var u=x(a,e);if(u){if(u===s)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var c=l(t,r,e);if("normal"===c.type){if(n=e.done?"completed":"suspendedYield",c.arg===s)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(n="completed",e.method="throw",e.arg=c.arg)}}}(t,e,a),i}function l(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=f;var s={};function h(){}function y(){}function p(){}var v={};c(v,i,(function(){return this}));var d=Object.getPrototypeOf,m=d&&d(d(O([])));m&&m!==e&&n.call(m,i)&&(v=m);var g=p.prototype=h.prototype=Object.create(v);function b(t){["next","throw","return"].forEach((function(r){c(t,r,(function(t){return this._invoke(r,t)}))}))}function w(t,r){function e(o,i,a,u){var c=l(t[o],t,i);if("throw"!==c.type){var f=c.arg,s=f.value;return s&&"object"==typeof s&&n.call(s,"__await")?r.resolve(s.__await).then((function(t){e("next",t,a,u)}),(function(t){e("throw",t,a,u)})):r.resolve(s).then((function(t){f.value=t,a(f)}),(function(t){return e("throw",t,a,u)}))}u(c.arg)}var o;this._invoke=function(t,n){function i(){return new r((function(r,o){e(t,n,r,o)}))}return o=o?o.then(i,i):i()}}function x(t,r){var e=t.iterator[r.method];if(void 0===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=void 0,x(t,r),"throw"===r.method))return s;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=l(e,t.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,s;var o=n.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,s):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,s)}function j(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function E(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function O(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,o=function r(){for(;++e<t.length;)if(n.call(t,e))return r.value=t[e],r.done=!1,r;return r.value=void 0,r.done=!0,r};return o.next=o}}return{next:A}}function A(){return{value:void 0,done:!0}}return y.prototype=p,c(g,"constructor",p),c(p,"constructor",y),y.displayName=c(p,u,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===y||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,u,"GeneratorFunction")),t.prototype=Object.create(g),t},r.awrap=function(t){return{__await:t}},b(w.prototype),c(w.prototype,a,(function(){return this})),r.AsyncIterator=w,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new w(f(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(g),c(g,u,"Generator"),c(g,i,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},r.values=O,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function e(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return e("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return e(i.catchLoc,!0);if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return e(i.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),s},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),E(e),s}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;E(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:O(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),s}},r}function r(t,r,e,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void e(t)}u.done?r(c):Promise.resolve(c).then(n,o)}function e(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var n,o,i=[],a=!0,u=!1;try{for(e=e.call(t);!(a=(n=e.next()).done)&&(i.push(n.value),!r||i.length!==r);a=!0);}catch(t){u=!0,o=t}finally{try{a||null==e.return||e.return()}finally{if(u)throw o}}return i}(t,r)||o(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||o(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,r){if(t){if("string"==typeof t)return i(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?i(t,r):void 0}}function i(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function a(t){if(!Array.isArray(t))throw new TypeError("Middleware stack must be an array!");var r,e=function(t,r){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=o(t))||r&&t&&"number"==typeof t.length){e&&(t=e);var n=0,i=function(){};return{s:i,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,c=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return u=t.done,t},e:function(t){c=!0,a=t},f:function(){try{u||null==e.return||e.return()}finally{if(c)throw a}}}}(t);try{for(e.s();!(r=e.n()).done;){if("function"!=typeof r.value)throw new TypeError("Middleware must be composed of functions!")}}catch(t){e.e(t)}finally{e.f()}return function(r,e){var n=-1;return function o(i){if(i<=n)return Promise.reject(new Error("next() called multiple times"));n=i;var a=t[i];i===t.length&&(a=e);if(!a)return Promise.resolve();try{return Promise.resolve(a(r,o.bind(null,i+1)))}catch(t){return Promise.reject(t)}}(0)}}var u="args",c=Object.prototype.toString;var f="arg_",l="onerror";return function(o,i){var s=i.customHook,h=i.baseHook,y=i.hasArgFnNames,p=void 0===y?[]:y;Object.is(s,h)||(s=Object.assign({},h,s));var v=Boolean(p.length);!function(t){var r=[];Object.defineProperty(t,u,{get:function(){return r},set:function(t){t=Array.isArray(t)||"[object Arguments]"===c.call(t)?t:[t],r.length=0,r.push.apply(r,n(t))},enumerable:!1})}(o),function(t){for(var r=arguments.length,e=new Array(r>1?r-1:0),n=1;n<r;n++)e[n-1]=arguments[n];t[Symbol.iterator]=function(){for(var r=[t],n=function(n){Object.defineProperty(r,String(n+1),{get:function(){return t[e[n]]}})},o=0;o<e.length;o++)n(o);var i=0;return{next:function(){return{value:r[i++],done:i>r.length}}}}}(o,u);var d={},m={};function g(e,n,i){e!==n&&(d[e]=function(t){return function(){return o.args=arguments,d[t]()}}(n)),Object.defineProperty(d,n,{get:function(){var e=m[n];return e||(m[n]=e=function(){var e=function(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function u(t){r(a,o,i,u,c,"next",t)}function c(t){r(a,o,i,u,c,"throw",t)}u(void 0)}))}}(t().mark((function r(){return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a(i)(o);case 3:return t.abrupt("return",t.sent);case 6:return t.prev=6,t.t0=t.catch(0),"function"==typeof d.onerror?d.onerror(t.t0):console.error(t.t0),t.abrupt("return",Promise.reject(t.t0));case 10:case"end":return t.stop()}}),r,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}()),e},enumerable:!1})}for(var b=0,w=Object.entries(s);b<w.length;b++){var x=e(w[b],2),j=x[0],E=x[1];if(j!==l){Array.isArray(E)||(E=[E]);for(var L=[],O=0;O<E.length;O++){var A=E[O];"curr_base_hook"===A&&(A=h[j]),L.push(A)}var _=j;j.startsWith(f)?_=j.slice(f.length):v&&p.includes(j)&&(_="__arg__"+j),g(j,_,L)}else d.onerror=E}return Object.defineProperty(o,"hooks",{value:d,enumerable:!1}),d}}));
