(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{ATpB:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n("q1tI")),o=i(n("17x9"));function i(e){return e&&e.__esModule?e:{default:e}}function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}function f(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?d(e):t}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(a,e);var t,n,o,i=p(a);function a(){for(var e,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),y(d(e=i.call.apply(i,[this].concat(n))),"state",{}),y(d(e),"extractReplaceLinksKeys",(function(t){var n=d(e),r=0;return e.replacedLinks=[],t.replace(/(<a[\s]+([^>]+)>((?:.(?!\<\/a\>))*.)<\/a>)/g,(function(){var e=Array.prototype.slice.call(arguments,1,4);e.key="@".repeat(e[2].length-1)+"="+r++,n.replacedLinks.push(e),t=t.replace(e[0],e.key)})),t})),y(d(e),"restoreReplacedLinks",(function(t){return e.replacedLinks.forEach((function(e){t=t.replace(e.key,e[0])})),t=e.createMarkup(t)})),y(d(e),"innerText",(function(t){var n=document.createElement("div"),r="innerText"in window.HTMLElement.prototype?"innerText":"textContent",o=t.innerHTML.replace(/\r\n|\r|\n/g," ");n.innerHTML=e.extractReplaceLinksKeys(o);var i=n[r],a=document.createElement("div");return a.innerHTML="foo<br/>bar","foo\nbar"!==a[r].replace(/\r\n|\r/g,"\n")&&(n.innerHTML=n.innerHTML.replace(/<br.*?[\/]?>/gi,"\n"),i=n[r]),i})),y(d(e),"onResize",(function(){e.calcTargetWidth()})),y(d(e),"onTruncate",(function(t){var n=e.props.onTruncate;"function"===typeof n&&(e.timeout=window.requestAnimationFrame((function(){n(t)})))})),y(d(e),"calcTargetWidth",(function(t){var n=d(e),r=n.elements.target,o=n.calcTargetWidth,i=n.canvasContext,a=n.props.width;if(r){var l=a||Math.floor(r.parentNode.getBoundingClientRect().width);if(!l)return window.requestAnimationFrame((function(){return o(t)}));var c=window.getComputedStyle(r),u=[c["font-weight"],c["font-style"],c["font-size"],c["font-family"]].join(" ");i.font=u,e.setState({targetWidth:l},t)}})),y(d(e),"measureWidth",(function(t){return e.canvasContext.measureText(t).width})),y(d(e),"ellipsisWidth",(function(e){return e.offsetWidth})),y(d(e),"trimRight",(function(e){return e.replace(/\s+$/,"")})),y(d(e),"createMarkup",(function(e){return r.default.createElement("span",{dangerouslySetInnerHTML:{__html:e}})})),y(d(e),"getLines",(function(){for(var t=d(e),n=t.elements,o=t.props,i=o.lines,a=o.ellipsis,l=o.trimWhitespace,c=t.state.targetWidth,u=t.innerText,s=t.measureWidth,p=t.onTruncate,f=t.trimRight,h=t.renderLine,y=t.restoreReplacedLinks,m=[],b=u(n.text).split("\n").map((function(e){return e.split(" ")})),g=!0,v=e.ellipsisWidth(e.elements.ellipsis),w=1;w<=i;w++){var O=b[0];if(0!==O.length){var T=O.join(" ");if(s(T)<=c&&1===b.length){g=!1,m.push(T);break}if(w===i){for(var j=O.join(" "),x=0,k=j.length-1;x<=k;){var E=Math.floor((x+k)/2);s(j.slice(0,E+1))+v<=c?x=E+1:k=E-1}var P=j.slice(0,x);if(l)for(P=f(P);!P.length&&m.length;){P=f(m.pop())}P=y(P),T=r.default.createElement("span",null,P,a)}else{for(var _=0,M=O.length-1;_<=M;){var L=Math.floor((_+M)/2);s(O.slice(0,L+1).join(" "))<=c?_=L+1:M=L-1}if(0===_){w=i-1;continue}T=y(T=O.slice(0,_).join(" ")),b[0].splice(0,_)}m.push(T)}else m.push(),b.shift(),w--}return p(g),m.map(h)})),y(d(e),"renderLine",(function(e,t,n){if(t===n.length-1)return r.default.createElement("span",{key:t},e);var o=r.default.createElement("br",{key:t+"br"});return e?[r.default.createElement("span",{key:t},e),o]:o})),y(d(e),"styles",{ellipsis:{position:"fixed",visibility:"hidden",top:0,left:0}}),e.elements={},e.replacedLinks=[],e}return t=a,(n=[{key:"componentDidMount",value:function(){var e=this.elements.text,t=this.calcTargetWidth,n=this.onResize,r=document.createElement("canvas");this.canvasContext=r.getContext("2d"),t((function(){e&&e.parentNode.removeChild(e)})),window.addEventListener("resize",n)}},{key:"componentDidUpdate",value:function(e){this.props.children!==e.children&&this.forceUpdate(),this.props.width!==e.width&&this.calcTargetWidth()}},{key:"componentWillUnmount",value:function(){var e=this.elements.ellipsis,t=this.onResize,n=this.timeout;e.parentNode.removeChild(e),window.removeEventListener("resize",t),window.cancelAnimationFrame(n)}},{key:"render",value:function(){var e,t=this,n=this.elements.target,o=this.props,i=o.children,a=o.ellipsis,u=o.lines,s=c(o,["children","ellipsis","lines"]),p=this.state.targetWidth,f=this.getLines,d=this.onTruncate;return"undefined"!==typeof window&&!(!n||!p)&&(u>0?e=f():(e=i,d(!1))),delete s.onTruncate,delete s.trimWhitespace,r.default.createElement("span",l({},s,{ref:function(e){t.elements.target=e}}),r.default.createElement("span",null,e),r.default.createElement("span",{ref:function(e){t.elements.text=e}},i),r.default.createElement("span",{ref:function(e){t.elements.ellipsis=e},style:this.styles.ellipsis},a))}}])&&u(t.prototype,n),o&&u(t,o),a}(r.default.Component);t.default=m,y(m,"propTypes",{children:o.default.node,ellipsis:o.default.node,lines:o.default.oneOfType([o.default.oneOf([!1]),o.default.number]),trimWhitespace:o.default.bool,width:o.default.number,onTruncate:o.default.func}),y(m,"defaultProps",{children:"",ellipsis:"\u2026",lines:1,trimWhitespace:!1,width:0})},LG3E:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==c(e)&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),i=n("17x9"),a=(r=n("ATpB"))&&r.__esModule?r:{default:r};function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}function f(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?d(e):t}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(l,e);var t,n,r,i=p(l);function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),y(d(t=i.call(this,e)),"_isMounted",!1),y(d(t),"handleTruncate",(function(e){t._isMounted&&e!==t.state.truncated&&(t.setState({truncated:e}),e&&t.truncateRef.onResize())})),y(d(t),"toggleLines",(function(e){e.preventDefault();var n=d(t);t._isMounted&&t.setState({expanded:!t.state.expanded},(function(){n.props.onClick&&n.props.onClick(n.state.expanded)}))})),t.state={expanded:!1,truncated:!1},t}return t=l,(n=[{key:"componentDidMount",value:function(){this._isMounted=!0,this._isMounted&&this.setState({expanded:this.props.expanded})}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,r=t.more,i=t.less,l=t.lines,c=t.anchorClass,u=t.width,s=t.keepNewLines,p=this.state,f=p.expanded,d=p.truncated;return o.default.createElement("div",null,o.default.createElement(a.default,{width:u,lines:!f&&l,ellipsis:o.default.createElement("span",null,"..."," ",o.default.createElement("a",{href:"#",className:c,onClick:this.toggleLines},r)),onTruncate:this.handleTruncate,ref:function(t){return e.truncateRef=t}},s?n.split("\n").map((function(e,t,n){return e=o.default.createElement("span",{key:t},e),t===n.length-1?e:[e,o.default.createElement("br",{key:t+"br"})]})):n),!d&&f&&o.default.createElement("span",null," ",o.default.createElement("a",{href:"#",className:c,onClick:this.toggleLines},i)))}}])&&u(t.prototype,n),r&&u(t,r),l}(o.Component);y(m,"defaultProps",{lines:3,more:"Show more",less:"Show less",anchorClass:"",onClick:void 0,expanded:!1,width:0,keepNewLines:!1}),y(m,"propTypes",{children:i.PropTypes.node,lines:i.PropTypes.number,more:i.PropTypes.node,less:i.PropTypes.node,anchorClass:i.PropTypes.string,onClick:i.PropTypes.func,expanded:i.PropTypes.bool,width:i.PropTypes.number,keepNewLines:i.PropTypes.bool});var b=m;t.default=b},oE3V:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),i=n("ofer"),a=n("oa/T"),l=n("LG3E"),c=n.n(l),u=o.a.createElement;t.a=function(e){var t=e.word,n=e.definition,l=(e.topics,Object(r.useState)(!1)),s=l[0],p=l[1];return u(o.a.Fragment,null,u(a.a,null,u(i.a,{variant:"h5",component:"h1"},t),u("br",null),u(i.a,{align:"left",paragraph:!0,variant:"body1"},u(c.a,{lines:15,more:"Show More",less:"Show Less",onClick:function(){p(!s)},expanded:!1},n.split("\n").map((function(e,t){return u(i.a,{align:"left",key:t,paragraph:!0,variant:"body1"},e)}))))))}},"oa/T":function(e,t,n){"use strict";var r=n("wx14"),o=n("Ff2n"),i=n("q1tI"),a=(n("17x9"),n("iuhU")),l=n("H2TA"),c=i.forwardRef((function(e,t){var n=e.classes,l=e.className,c=e.component,u=void 0===c?"div":c,s=Object(o.a)(e,["classes","className","component"]);return(i.createElement(u,Object(r.a)({className:Object(a.a)(n.root,l),ref:t},s)))}));t.a=Object(l.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(c)},ofer:function(e,t,n){"use strict";var r=n("wx14"),o=n("Ff2n"),i=n("q1tI"),a=(n("17x9"),n("iuhU")),l=n("H2TA"),c=n("NqtD"),u={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},s=i.forwardRef((function(e,t){var n=e.align,l=void 0===n?"inherit":n,s=e.classes,p=e.className,f=e.color,d=void 0===f?"initial":f,h=e.component,y=e.display,m=void 0===y?"initial":y,b=e.gutterBottom,g=void 0!==b&&b,v=e.noWrap,w=void 0!==v&&v,O=e.paragraph,T=void 0!==O&&O,j=e.variant,x=void 0===j?"body1":j,k=e.variantMapping,E=void 0===k?u:k,P=Object(o.a)(e,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),_=h||(T?"p":E[x]||u[x])||"span";return i.createElement(_,Object(r.a)({className:Object(a.a)(s.root,p,"inherit"!==x&&s[x],"initial"!==d&&s["color".concat(Object(c.a)(d))],w&&s.noWrap,g&&s.gutterBottom,T&&s.paragraph,"inherit"!==l&&s["align".concat(Object(c.a)(l))],"initial"!==m&&s["display".concat(Object(c.a)(m))]),ref:t},P))}));t.a=Object(l.a)((function(e){return{root:{margin:0},body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(s)}}]);