(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"2mql":function(e,t,r){"use strict";var n=r("TOwV"),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function c(e){return n.isMemo(e)?a:s[e.$$typeof]||o}s[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[n.Memo]=a;var f=Object.defineProperty,u=Object.getOwnPropertyNames,p=Object.getOwnPropertySymbols,l=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,h=Object.prototype;e.exports=function e(t,r,n){if("string"!==typeof r){if(h){var o=d(r);o&&o!==h&&e(t,o,n)}var a=u(r);p&&(a=a.concat(p(r)));for(var s=c(t),m=c(r),y=0;y<a.length;++y){var v=a[y];if(!i[v]&&(!n||!n[v])&&(!m||!m[v])&&(!s||!s[v])){var g=l(r,v);try{f(t,v,g)}catch(b){}}}}return t}},"30+C":function(e,t,r){"use strict";var n=r("wx14"),o=r("Ff2n"),i=r("q1tI"),a=(r("17x9"),r("iuhU")),s=r("kKAo"),c=r("H2TA"),f=i.forwardRef((function(e,t){var r=e.classes,c=e.className,f=e.raised,u=void 0!==f&&f,p=Object(o.a)(e,["classes","className","raised"]);return(i.createElement(s.a,Object(n.a)({className:Object(a.a)(r.root,c),elevation:u?8:1,ref:t},p)))}));t.a=Object(c.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(f)},"7W2i":function(e,t,r){var n=r("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},"A+CX":function(e,t,r){"use strict";function n(e){var t=e.theme,r=e.name,n=e.props;if(!t||!t.props||!t.props[r])return n;var o,i=t.props[r];for(o in i)void 0===n[o]&&(n[o]=i[o]);return n}r.d(t,"a",(function(){return n}))},H2TA:function(e,t,r){"use strict";var n=r("wx14"),o=r("Ff2n"),i=r("q1tI"),a=r.n(i),s=(r("17x9"),r("2mql")),c=r.n(s),f=r("RD7I"),u=r("A+CX"),p=r("aXM8"),l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(r){var i=t.defaultTheme,s=t.withTheme,l=void 0!==s&&s,d=t.name,h=Object(o.a)(t,["defaultTheme","withTheme","name"]);var m=d,y=Object(f.a)(e,Object(n.a)({defaultTheme:i,Component:r,name:d||r.displayName,classNamePrefix:m},h)),v=a.a.forwardRef((function(e,t){e.classes;var s,c=e.innerRef,f=Object(o.a)(e,["classes","innerRef"]),h=y(Object(n.a)(Object(n.a)({},r.defaultProps),e)),m=f;return("string"===typeof d||l)&&(s=Object(p.a)()||i,d&&(m=Object(u.a)({theme:s,name:d,props:f})),l&&!m.theme&&(m.theme=s)),a.a.createElement(r,Object(n.a)({ref:c||t,classes:h},m))}));return c()(v,r),v}},d=r("cNwE");t.a=function(e,t){return l(e,Object(n.a)({defaultTheme:d.a},t))}},NqtD:function(e,t,r){"use strict";function n(e){return e.charAt(0).toUpperCase()+e.slice(1)}r.d(t,"a",(function(){return n}))},Nsbk:function(e,t){function r(t){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(t)}e.exports=r},NyWP:function(e,t,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.destroyCookie=t.setCookie=t.parseCookies=void 0;var o=r("iVi/"),i=r("U0US"),a=function(){return"undefined"!==typeof window};function s(e,t){var r=e.sameSite===t.sameSite;return"string"===typeof e.sameSite&&"string"===typeof t.sameSite&&(r=e.sameSite.toLowerCase()===t.sameSite.toLowerCase()),function(e,t){var r=Object.getOwnPropertyNames(e),n=Object.getOwnPropertyNames(t);if(r.length!==n.length)return!1;for(var o=0;o<r.length;o++){var i=r[o];if(e[i]!==t[i])return!1}return!0}(n(n({},e),{sameSite:void 0}),n(n({},t),{sameSite:void 0}))&&r}function c(e,t){return e&&e.req&&e.req.headers&&e.req.headers.cookie?o.parse(e.req.headers.cookie,t):a()?o.parse(document.cookie,t):{}}function f(e,t,r,c){if(e&&e.res&&e.res.getHeader&&e.res.setHeader){var f=e.res.getHeader("Set-Cookie")||[];"string"===typeof f&&(f=[f]),"number"===typeof f&&(f=[]);var u=i.parse(f),p=[];u.forEach((function(e){s(e,function(e,t,r){var o=r.sameSite;!0===o&&(o="strict"),void 0!==o&&!1!==o||(o="lax");var i=n(n({},r),{sameSite:o});return delete i.encode,n({name:e,value:t},i)}(t,r,c))||p.push(o.serialize(e.name,e.value,n({},e)))})),p.push(o.serialize(t,r,c)),e.res.finished||e.res.setHeader("Set-Cookie",p)}if(a()){if(c&&c.httpOnly)throw new Error("Can not set a httpOnly cookie in the browser.");document.cookie=o.serialize(t,r,c)}return{}}function u(e,t,r){var i=n(n({},r||{}),{maxAge:-1});if(e&&e.res&&e.res.setHeader&&e.res.getHeader){var s=e.res.getHeader("Set-Cookie")||[];"string"===typeof s&&(s=[s]),"number"===typeof s&&(s=[]),s.push(o.serialize(t,"",i)),e.res.setHeader("Set-Cookie",s)}return a()&&(document.cookie=o.serialize(t,"",i)),{}}t.parseCookies=c,t.setCookie=f,t.destroyCookie=u,t.default={set:f,get:c,destroy:u}},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},PZYj:function(e,t,r){"use strict";r.r(t);var n=r("o0o1"),o=r.n(n),i=r("HaE+"),a=r("q1tI"),s=r.n(a),c=r("vDqi"),f=r.n(c),u=r("YFqc"),p=r.n(u),l=r("oE3V"),d=r("hlFM"),h=r("30+C"),m=r("R/WZ"),y=(r("p46w"),r("NyWP")),v=s.a.createElement,g=Object(m.a)((function(e){return{box:{display:"flex",flexDirection:"column",justifyContent:"center",marginTop:"5%",marginLeft:"20%",marginRight:"20%",textAlign:"center"},card:{display:"flex",flexDirection:"column",justifyContent:"center",marginTop:"5%",marginLeft:"20%",marginRight:"20%",textAlign:"center"}}}));t.default=function(){var e=g(),t=Object(a.useState)([]),r=t[0],n=t[1];Object(y.parseCookies)();var s=function(){var e=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("/api/words",{headers:{"Content-Type":"application/json"}}).then((function(e){return e}));case 2:t=e.sent,n(t.data.tempDoc);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){s()}),[]),v(d.a,{Container:!0,className:e.box},v("div",null,r.map((function(t,r){return v(p.a,{href:{pathname:"/definitions/[def]"},as:"definitions/".concat(t.word)},v(h.a,{key:r,className:e.card,onClick:(n="ff",void console.log(n))}," ",v(l.a,{word:t.word,definition:t.definition})));var n}))))}},TOwV:function(e,t,r){"use strict";e.exports=r("qT12")},U0US:function(e,t,r){"use strict";var n={decodeValues:!0,map:!1,silent:!1};function o(e){return"string"===typeof e&&!!e.trim()}function i(e,t){var r=e.split(";").filter(o),i=r.shift().split("="),a=i.shift(),s=i.join("="),c={name:a,value:(t=t?Object.assign({},n,t):n).decodeValues?decodeURIComponent(s):s};return r.forEach((function(e){var t=e.split("="),r=t.shift().trimLeft().toLowerCase(),n=t.join("=");"expires"===r?c.expires=new Date(n):"max-age"===r?c.maxAge=parseInt(n,10):"secure"===r?c.secure=!0:"httponly"===r?c.httpOnly=!0:"samesite"===r?c.sameSite=n:c[r]=n})),c}function a(e,t){if(t=t?Object.assign({},n,t):n,!e)return t.map?{}:[];if(e.headers&&e.headers["set-cookie"])e=e.headers["set-cookie"];else if(e.headers){var r=e.headers[Object.keys(e.headers).find((function(e){return"set-cookie"===e.toLowerCase()}))];r||!e.headers.cookie||t.silent||console.warn("Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."),e=r}if(Array.isArray(e)||(e=[e]),(t=t?Object.assign({},n,t):n).map){return e.filter(o).reduce((function(e,r){var n=i(r,t);return e[n.name]=n,e}),{})}return e.filter(o).map((function(e){return i(e,t)}))}e.exports=a,e.exports.parse=a,e.exports.parseString=i,e.exports.splitCookiesString=function(e){if(Array.isArray(e))return e;if("string"!==typeof e)return[];var t,r,n,o,i,a=[],s=0;function c(){for(;s<e.length&&/\s/.test(e.charAt(s));)s+=1;return s<e.length}for(;s<e.length;){for(t=s,i=!1;c();)if(","===(r=e.charAt(s))){for(n=s,s+=1,c(),o=s;s<e.length&&"="!==(r=e.charAt(s))&&";"!==r&&","!==r;)s+=1;s<e.length&&"="===e.charAt(s)?(i=!0,s=o,a.push(e.substring(t,n)),t=s):s=n+1}else s+=1;(!i||s>=e.length)&&a.push(e.substring(t,e.length))}return a}},Xwzd:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/listwords",function(){return r("PZYj")}])},YFqc:function(e,t,r){e.exports=r("cTJO")},a1gu:function(e,t,r){var n=r("cDf5"),o=r("PJYZ");e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!==typeof t?o(e):t}},cTJO:function(e,t,r){"use strict";var n=r("lwsE"),o=r("W8MJ"),i=r("7W2i"),a=r("a1gu"),s=r("Nsbk");function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=s(e);if(t){var o=s(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return a(this,r)}}var f=r("TqRt"),u=r("284h");t.__esModule=!0,t.default=void 0;var p,l=u(r("q1tI")),d=r("QmWs"),h=r("g/15"),m=f(r("nOHt")),y=r("elyg");function v(e){return e&&"object"===typeof e?(0,h.formatWithValidation)(e):e}var g=new Map,b=window.IntersectionObserver,w={};function S(){return p||(b?p=new b((function(e){e.forEach((function(e){if(g.has(e.target)){var t=g.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(e.target),g.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var x=function(e){i(r,e);var t=c(r);function r(e){var o;return n(this,r),(o=t.call(this,e)).p=void 0,o.cleanUpListeners=function(){},o.formatUrls=function(e){var t=null,r=null,n=null;return function(o,i){if(n&&o===t&&i===r)return n;var a=e(o,i);return t=o,r=i,n=a,a}}((function(e,t){return{href:(0,y.addBasePath)(v(e)),as:t?(0,y.addBasePath)(v(t)):t}})),o.linkClicked=function(e){var t=e.currentTarget,r=t.nodeName,n=t.target;if("A"!==r||!(n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var i=o.formatUrls(o.props.href,o.props.as),a=i.href,s=i.as;if(function(e){var t=(0,d.parse)(e,!1,!0),r=(0,d.parse)((0,h.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===r.protocol&&t.host===r.host}(a)){var c=window.location.pathname;a=(0,d.resolve)(c,a),s=s?(0,d.resolve)(c,s):a,e.preventDefault();var f=o.props.scroll;null==f&&(f=s.indexOf("#")<0),m.default[o.props.replace?"replace":"push"](a,s,{shallow:o.props.shallow}).then((function(e){e&&f&&(window.scrollTo(0,0),document.body.focus())}))}}},o.p=!1!==e.prefetch,o}return o(r,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),r=t.href,n=t.as,o=(0,d.resolve)(e,r);return[o,n?(0,d.resolve)(e,n):o]}},{key:"handleRef",value:function(e){var t=this;this.p&&b&&e&&e.tagName&&(this.cleanUpListeners(),w[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var r=S();return r?(r.observe(e),g.set(e,t),function(){try{r.unobserve(e)}catch(t){console.error(t)}g.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();m.default.prefetch(t[0],t[1],e).catch((function(e){0})),w[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,r=this.formatUrls(this.props.href,this.props.as),n=r.href,o=r.as;"string"===typeof t&&(t=l.default.createElement("a",null,t));var i=l.Children.only(t),a={ref:function(t){e.handleRef(t),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(t):"object"===typeof i.ref&&(i.ref.current=t))},onMouseEnter:function(t){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(a.href=o||n),l.default.cloneElement(i,a)}}]),r}(l.Component);t.default=x},"iVi/":function(e,t,r){"use strict";t.parse=function(e,t){if("string"!==typeof e)throw new TypeError("argument str must be a string");for(var r={},o=t||{},a=e.split(i),c=o.decode||n,f=0;f<a.length;f++){var u=a[f],p=u.indexOf("=");if(!(p<0)){var l=u.substr(0,p).trim(),d=u.substr(++p,u.length).trim();'"'==d[0]&&(d=d.slice(1,-1)),void 0==r[l]&&(r[l]=s(d,c))}}return r},t.serialize=function(e,t,r){var n=r||{},i=n.encode||o;if("function"!==typeof i)throw new TypeError("option encode is invalid");if(!a.test(e))throw new TypeError("argument name is invalid");var s=i(t);if(s&&!a.test(s))throw new TypeError("argument val is invalid");var c=e+"="+s;if(null!=n.maxAge){var f=n.maxAge-0;if(isNaN(f))throw new Error("maxAge should be a Number");c+="; Max-Age="+Math.floor(f)}if(n.domain){if(!a.test(n.domain))throw new TypeError("option domain is invalid");c+="; Domain="+n.domain}if(n.path){if(!a.test(n.path))throw new TypeError("option path is invalid");c+="; Path="+n.path}if(n.expires){if("function"!==typeof n.expires.toUTCString)throw new TypeError("option expires is invalid");c+="; Expires="+n.expires.toUTCString()}n.httpOnly&&(c+="; HttpOnly");n.secure&&(c+="; Secure");if(n.sameSite){switch("string"===typeof n.sameSite?n.sameSite.toLowerCase():n.sameSite){case!0:c+="; SameSite=Strict";break;case"lax":c+="; SameSite=Lax";break;case"strict":c+="; SameSite=Strict";break;case"none":c+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return c};var n=decodeURIComponent,o=encodeURIComponent,i=/; */,a=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function s(e,t){try{return t(e)}catch(r){return e}}},iuhU:function(e,t,r){"use strict";function n(e){var t,r,o="";if(e)if("object"===typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(r=n(t))&&(o&&(o+=" "),o+=r);else"boolean"===typeof e||e.call||(o&&(o+=" "),o+=e);return o}t.a=function(){for(var e,t=0,r="";t<arguments.length;)(e=n(arguments[t++]))&&(r&&(r+=" "),r+=e);return r}},kKAo:function(e,t,r){"use strict";var n=r("Ff2n"),o=r("wx14"),i=r("q1tI"),a=(r("17x9"),r("iuhU")),s=r("H2TA"),c=i.forwardRef((function(e,t){var r=e.classes,s=e.className,c=e.component,f=void 0===c?"div":c,u=e.square,p=void 0!==u&&u,l=e.elevation,d=void 0===l?1:l,h=e.variant,m=void 0===h?"elevation":h,y=Object(n.a)(e,["classes","className","component","square","elevation","variant"]);return(i.createElement(f,Object(o.a)({className:Object(a.a)(r.root,s,"outlined"===m?r.outlined:r["elevation".concat(d)],!p&&r.rounded),ref:t},y)))}));t.a=Object(s.a)((function(e){var t={};return e.shadows.forEach((function(e,r){t["elevation".concat(r)]={boxShadow:e}})),Object(o.a)({root:{backgroundColor:e.palette.background.paper,color:e.palette.text.primary,transition:e.transitions.create("box-shadow")},rounded:{borderRadius:e.shape.borderRadius},outlined:{border:"1px solid ".concat(e.palette.divider)}},t)}),{name:"MuiPaper"})(c)},p46w:function(e,t,r){var n,o;!function(i){if(void 0===(o="function"===typeof(n=i)?n.call(t,r,t,e):n)||(e.exports=o),!0,e.exports=i(),!!0){var a=window.Cookies,s=window.Cookies=i();s.noConflict=function(){return window.Cookies=a,s}}}((function(){function e(){for(var e=0,t={};e<arguments.length;e++){var r=arguments[e];for(var n in r)t[n]=r[n]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function r(n){function o(){}function i(t,r,i){if("undefined"!==typeof document){"number"===typeof(i=e({path:"/"},o.defaults,i)).expires&&(i.expires=new Date(1*new Date+864e5*i.expires)),i.expires=i.expires?i.expires.toUTCString():"";try{var a=JSON.stringify(r);/^[\{\[]/.test(a)&&(r=a)}catch(f){}r=n.write?n.write(r,t):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var s="";for(var c in i)i[c]&&(s+="; "+c,!0!==i[c]&&(s+="="+i[c].split(";")[0]));return document.cookie=t+"="+r+s}}function a(e,r){if("undefined"!==typeof document){for(var o={},i=document.cookie?document.cookie.split("; "):[],a=0;a<i.length;a++){var s=i[a].split("="),c=s.slice(1).join("=");r||'"'!==c.charAt(0)||(c=c.slice(1,-1));try{var f=t(s[0]);if(c=(n.read||n)(c,f)||t(c),r)try{c=JSON.parse(c)}catch(u){}if(o[f]=c,e===f)break}catch(u){}}return e?o[e]:o}}return o.set=i,o.get=function(e){return a(e,!1)},o.getJSON=function(e){return a(e,!0)},o.remove=function(t,r){i(t,"",e(r,{expires:-1}))},o.defaults={},o.withConverter=r,o}((function(){}))}))},qT12:function(e,t,r){"use strict";var n="function"===typeof Symbol&&Symbol.for,o=n?Symbol.for("react.element"):60103,i=n?Symbol.for("react.portal"):60106,a=n?Symbol.for("react.fragment"):60107,s=n?Symbol.for("react.strict_mode"):60108,c=n?Symbol.for("react.profiler"):60114,f=n?Symbol.for("react.provider"):60109,u=n?Symbol.for("react.context"):60110,p=n?Symbol.for("react.async_mode"):60111,l=n?Symbol.for("react.concurrent_mode"):60111,d=n?Symbol.for("react.forward_ref"):60112,h=n?Symbol.for("react.suspense"):60113,m=n?Symbol.for("react.suspense_list"):60120,y=n?Symbol.for("react.memo"):60115,v=n?Symbol.for("react.lazy"):60116,g=n?Symbol.for("react.block"):60121,b=n?Symbol.for("react.fundamental"):60117,w=n?Symbol.for("react.responder"):60118,S=n?Symbol.for("react.scope"):60119;function x(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case p:case l:case a:case c:case s:case h:return e;default:switch(e=e&&e.$$typeof){case u:case d:case v:case y:case f:return e;default:return t}}case i:return t}}}function O(e){return x(e)===l}t.AsyncMode=p,t.ConcurrentMode=l,t.ContextConsumer=u,t.ContextProvider=f,t.Element=o,t.ForwardRef=d,t.Fragment=a,t.Lazy=v,t.Memo=y,t.Portal=i,t.Profiler=c,t.StrictMode=s,t.Suspense=h,t.isAsyncMode=function(e){return O(e)||x(e)===p},t.isConcurrentMode=O,t.isContextConsumer=function(e){return x(e)===u},t.isContextProvider=function(e){return x(e)===f},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return x(e)===d},t.isFragment=function(e){return x(e)===a},t.isLazy=function(e){return x(e)===v},t.isMemo=function(e){return x(e)===y},t.isPortal=function(e){return x(e)===i},t.isProfiler=function(e){return x(e)===c},t.isStrictMode=function(e){return x(e)===s},t.isSuspense=function(e){return x(e)===h},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===a||e===l||e===c||e===s||e===h||e===m||"object"===typeof e&&null!==e&&(e.$$typeof===v||e.$$typeof===y||e.$$typeof===f||e.$$typeof===u||e.$$typeof===d||e.$$typeof===b||e.$$typeof===w||e.$$typeof===S||e.$$typeof===g)},t.typeOf=x}},[["Xwzd",0,2,1,3,4,7,9]]]);