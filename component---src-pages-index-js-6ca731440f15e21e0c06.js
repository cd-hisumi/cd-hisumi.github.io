/*! For license information please see component---src-pages-index-js-6ca731440f15e21e0c06.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_stellar=self.webpackChunkgatsby_starter_stellar||[]).push([[678],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n},e.exports.default=e.exports,e.exports.__esModule=!0},3646:function(e,t,o){var n=o(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},4575:function(e){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.default=e.exports,e.exports.__esModule=!0},3913:function(e){function t(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,o,n){return o&&t(e.prototype,o),n&&t(e,n),e},e.exports.default=e.exports,e.exports.__esModule=!0},9713:function(e){e.exports=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},e.exports.default=e.exports,e.exports.__esModule=!0},9754:function(e){function t(o){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.default=e.exports,e.exports.__esModule=!0,t(o)}e.exports=t,e.exports.default=e.exports,e.exports.__esModule=!0},2205:function(e,t,o){var n=o(9489);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)},e.exports.default=e.exports,e.exports.__esModule=!0},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},8585:function(e,t,o){var n=o(8).default,r=o(1506);e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?r(e):t},e.exports.default=e.exports,e.exports.__esModule=!0},319:function(e,t,o){var n=o(3646),r=o(6860),i=o(379),l=o(8206);e.exports=function(e){return n(e)||r(e)||i(e)||l()},e.exports.default=e.exports,e.exports.__esModule=!0},379:function(e,t,o){var n=o(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},5900:function(e,t){var o;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var i=typeof o;if("string"===i||"number"===i)e.push(o);else if(Array.isArray(o)){if(o.length){var l=r.apply(null,o);l&&e.push(l)}}else if("object"===i)if(o.toString===Object.prototype.toString)for(var a in o)n.call(o,a)&&o[a]&&e.push(a);else e.push(o.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(o=function(){return r}.apply(t,[]))||(e.exports=o)}()},165:function(e,t){"use strict";var o="function"==typeof Symbol&&Symbol.for,n=o?Symbol.for("react.element"):60103,r=o?Symbol.for("react.portal"):60106,i=o?Symbol.for("react.fragment"):60107,l=o?Symbol.for("react.strict_mode"):60108,a=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,c=o?Symbol.for("react.context"):60110,u=o?Symbol.for("react.async_mode"):60111,p=o?Symbol.for("react.concurrent_mode"):60111,f=o?Symbol.for("react.forward_ref"):60112,M=o?Symbol.for("react.suspense"):60113,g=o?Symbol.for("react.suspense_list"):60120,d=o?Symbol.for("react.memo"):60115,y=o?Symbol.for("react.lazy"):60116,m=o?Symbol.for("react.block"):60121,h=o?Symbol.for("react.fundamental"):60117,I=o?Symbol.for("react.responder"):60118,N=o?Symbol.for("react.scope"):60119;function T(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case u:case p:case i:case a:case l:case M:return e;default:switch(e=e&&e.$$typeof){case c:case f:case y:case d:case s:return e;default:return t}}case r:return t}}}function v(e){return T(e)===p}t.isForwardRef=function(e){return T(e)===f}},8812:function(e,t,o){"use strict";e.exports=o(165)},4266:function(e,t,o){"use strict";var n=o(5318);t.Z=void 0;var r=n(o(7154)),i=n(o(9713)),l=n(o(319)),a=n(o(4575)),s=n(o(8585)),c=n(o(9754)),u=n(o(1506)),p=n(o(3913)),f=n(o(2205)),M=n(o(5697)),g=n(o(7294)),d=n(o(5900)),y=n(o(2470));var m=function(e){function t(e){var o;return(0,a.default)(this,t),(o=(0,s.default)(this,(0,c.default)(t).call(this,e))).state={targetItems:[],inViewState:[],isScrolledPast:[]},o._handleSpy=o._handleSpy.bind((0,u.default)(o)),o}return(0,f.default)(t,e),(0,p.default)(t,null,[{key:"propTypes",get:function(){return{items:M.default.arrayOf(M.default.string).isRequired,currentClassName:M.default.string.isRequired,scrolledPastClassName:M.default.string,style:M.default.object,componentTag:M.default.oneOfType([M.default.string,M.default.elementType]),offset:M.default.number,rootEl:M.default.string,onUpdate:M.default.func}}},{key:"defaultProps",get:function(){return{items:[],currentClassName:"",style:{},componentTag:"ul",offset:0,onUpdate:function(){}}}}]),(0,p.default)(t,[{key:"_initSpyTarget",value:function(e){return e.map((function(e){return document.getElementById(e)}))}},{key:"_fillArray",value:function(e,t){for(var o=[],n=0,r=e.length;n<r;n++)o[n]=t;return o}},{key:"_isScrolled",value:function(){return this._getScrollDimension().scrollTop>0}},{key:"_getScrollDimension",value:function(){var e=document,t=this.props.rootEl;return{scrollTop:t?e.querySelector(t).scrollTop:e.documentElement.scrollTop||e.body.parentNode.scrollTop||e.body.scrollTop,scrollHeight:t?e.querySelector(t).scrollHeight:e.documentElement.scrollHeight||e.body.parentNode.scrollHeight||e.body.scrollHeight}}},{key:"_getElemsViewState",value:function(e){for(var t=[],o=[],n=[],r=e||this.state.targetItems,i=!1,a=0,s=r.length;a<s;a++){var c=r[a],u=!i&&this._isInView(c);u?(i=!0,t.push(c)):o.push(c);var p=a===s-1,f=this._isScrolled();this._isAtBottom()&&this._isInView(c)&&!u&&p&&f&&(o.pop(),o.push.apply(o,(0,l.default)(t)),t=[c],n=this._fillArray(n,!1),u=!0),n.push(u)}return{inView:t,outView:o,viewStatusList:n,scrolledPast:this.props.scrolledPastClassName&&this._getScrolledPast(n)}}},{key:"_isInView",value:function(e){if(!e)return!1;var t,o=this.props,n=o.rootEl,r=o.offset;n&&(t=document.querySelector(n).getBoundingClientRect());var i=e.getBoundingClientRect(),l=n?t.height:window.innerHeight,a=this._getScrollDimension().scrollTop,s=a+l,c=n?i.top+a-t.top+r:i.top+a+r,u=c+e.offsetHeight;return c<s&&u>a}},{key:"_isAtBottom",value:function(){var e=this.props.rootEl,t=this._getScrollDimension(),o=t.scrollTop,n=t.scrollHeight;return o+(e?document.querySelector(e).getBoundingClientRect().height:window.innerHeight)>=n}},{key:"_getScrolledPast",value:function(e){if(!e.some((function(e){return e})))return e;var t=!1;return e.map((function(e){return e&&!t?(t=!0,!1):!t}))}},{key:"_spy",value:function(e){var t=this,o=this._getElemsViewState(e),n=this.state.inViewState;this.setState({inViewState:o.viewStatusList,isScrolledPast:o.scrolledPast},(function(){t._update(n)}))}},{key:"_update",value:function(e){var t,o;(t=this.state.inViewState,o=e,t.length===o.length&&t.every((function(e,t){return e===o[t]})))||this.props.onUpdate(this.state.targetItems[this.state.inViewState.indexOf(!0)])}},{key:"_handleSpy",value:function(){(0,y.default)(this._spy(),100)}},{key:"_initFromProps",value:function(){var e=this._initSpyTarget(this.props.items);this.setState({targetItems:e}),this._spy(e)}},{key:"offEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).removeEventListener("scroll",this._handleSpy)}},{key:"onEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).addEventListener("scroll",this._handleSpy)}},{key:"componentDidMount",value:function(){this._initFromProps(),this.onEvent()}},{key:"componentWillUnmount",value:function(){this.offEvent()}},{key:"UNSAFE_componentWillReceiveProps",value:function(){this._initFromProps()}},{key:"render",value:function(){var e=this,t=this.props.componentTag,o=this.props,n=o.children,l=o.className,a=o.scrolledPastClassName,s=o.style,c=0,u=g.default.Children.map(n,(function(t,o){var n;if(!t)return null;var l=t.type,s=a&&e.state.isScrolledPast[o],u=(0,d.default)((n={},(0,i.default)(n,"".concat(t.props.className),t.props.className),(0,i.default)(n,"".concat(e.props.currentClassName),e.state.inViewState[o]),(0,i.default)(n,"".concat(e.props.scrolledPastClassName),s),n));return g.default.createElement(l,(0,r.default)({},t.props,{className:u,key:c++}),t.props.children)})),p=(0,d.default)((0,i.default)({},"".concat(l),l));return g.default.createElement(t,{className:p,style:s},u)}}]),t}(g.default.Component);t.Z=m},2470:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){var t,o,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return function(){var r=+new Date;!!t&&r<t+n?(clearTimeout(o),o=setTimeout((function(){t=r,e()}),n)):(t=r,e())}};t.default=o},9634:function(e){!function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style)||!0===e.__forceSmoothScrollPolyfill__){var o,n=e.HTMLElement||e.Element,r={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:n.prototype.scroll||a,scrollIntoView:n.prototype.scrollIntoView},i=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,l=(o=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(o)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==s(arguments[0])?g.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):r.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(s(arguments[0])?r.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):g.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},n.prototype.scroll=n.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==s(arguments[0])){var e=arguments[0].left,t=arguments[0].top;g.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},n.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==s(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},n.prototype.scrollIntoView=function(){if(!0!==s(arguments[0])){var o=f(this),n=o.getBoundingClientRect(),i=this.getBoundingClientRect();o!==t.body?(g.call(this,o,o.scrollLeft+i.left-n.left,o.scrollTop+i.top-n.top),"fixed"!==e.getComputedStyle(o).position&&e.scrollBy({left:n.left,top:n.top,behavior:"smooth"})):e.scrollBy({left:i.left,top:i.top,behavior:"smooth"})}else r.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function a(e,t){this.scrollLeft=e,this.scrollTop=t}function s(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function c(e,t){return"Y"===t?e.clientHeight+l<e.scrollHeight:"X"===t?e.clientWidth+l<e.scrollWidth:void 0}function u(t,o){var n=e.getComputedStyle(t,null)["overflow"+o];return"auto"===n||"scroll"===n}function p(e){var t=c(e,"Y")&&u(e,"Y"),o=c(e,"X")&&u(e,"X");return t||o}function f(e){for(;e!==t.body&&!1===p(e);)e=e.parentNode||e.host;return e}function M(t){var o,n,r,l,a=(i()-t.startTime)/468;l=a=a>1?1:a,o=.5*(1-Math.cos(Math.PI*l)),n=t.startX+(t.x-t.startX)*o,r=t.startY+(t.y-t.startY)*o,t.method.call(t.scrollable,n,r),n===t.x&&r===t.y||e.requestAnimationFrame(M.bind(e,t))}function g(o,n,l){var s,c,u,p,f=i();o===t.body?(s=e,c=e.scrollX||e.pageXOffset,u=e.scrollY||e.pageYOffset,p=r.scroll):(s=o,c=o.scrollLeft,u=o.scrollTop,p=a),M({scrollable:s,method:p,startTime:f,startX:c,startY:u,x:n,y:l})}}}}()},6319:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return Y}});var n=o(3552),r=o(5444),i=o(7294),l=o(5414),a=!("undefined"==typeof window||!window.document||!window.document.createElement);var s=void 0;function c(){return void 0===s&&(s=function(){if(!a)return!1;if(!window.addEventListener||!window.removeEventListener||!Object.defineProperty)return!1;var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),o=function(){};window.addEventListener("testPassiveEventSupport",o,t),window.removeEventListener("testPassiveEventSupport",o,t)}catch(n){}return e}()),s}function u(e){e.handlers===e.nextHandlers&&(e.nextHandlers=e.handlers.slice())}function p(e){this.target=e,this.events={}}p.prototype.getEventHandlers=function(e,t){var o,n=String(e)+" "+String((o=t)?!0===o?100:(o.capture<<0)+(o.passive<<1)+(o.once<<2):0);return this.events[n]||(this.events[n]={handlers:[],handleEvent:void 0},this.events[n].nextHandlers=this.events[n].handlers),this.events[n]},p.prototype.handleEvent=function(e,t,o){var n=this.getEventHandlers(e,t);n.handlers=n.nextHandlers,n.handlers.forEach((function(e){e&&e(o)}))},p.prototype.add=function(e,t,o){var n=this,r=this.getEventHandlers(e,o);u(r),0===r.nextHandlers.length&&(r.handleEvent=this.handleEvent.bind(this,e,o),this.target.addEventListener(e,r.handleEvent,o)),r.nextHandlers.push(t);var i=!0;return function(){if(i){i=!1,u(r);var l=r.nextHandlers.indexOf(t);r.nextHandlers.splice(l,1),0===r.nextHandlers.length&&(n.target&&n.target.removeEventListener(e,r.handleEvent,o),r.handleEvent=void 0)}}};var f="__consolidated_events_handlers__";function M(e,t,o,n){e[f]||(e[f]=new p(e));var r=function(e){if(e)return c()?e:!!e.capture}(n);return e[f].add(t,o,r)}var g=o(8812);function d(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function I(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,n=y(e);if(t){var r=y(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return h(this,o)}}function N(e,t){var o,n=(o=e,!isNaN(parseFloat(o))&&isFinite(o)?parseFloat(o):"px"===o.slice(-2)?parseFloat(o.slice(0,-2)):void 0);if("number"==typeof n)return n;var r=function(e){if("%"===e.slice(-1))return parseFloat(e.slice(0,-1))/100}(e);return"number"==typeof r?r*t:void 0}var T="above",v="inside",w="below",E="invisible";function D(e){return"string"==typeof e.type}var j;var A=[];function b(e){A.push(e),j||(j=setTimeout((function(){var e;for(j=null;e=A.shift();)e()}),0));var t=!0;return function(){if(t){t=!1;var o=A.indexOf(e);-1!==o&&(A.splice(o,1),!A.length&&j&&(clearTimeout(j),j=null))}}}var C={debug:!1,scrollableAncestor:void 0,children:void 0,topOffset:"0px",bottomOffset:"0px",horizontal:!1,onEnter:function(){},onLeave:function(){},onPositionChange:function(){},fireOnRapidScroll:!0},x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(a,e);var t,n,r,l=I(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=l.call(this,e)).refElement=function(e){t._ref=e},t}return t=a,(n=[{key:"componentDidMount",value:function(){var e=this;a.getWindow()&&(this.cancelOnNextTick=b((function(){e.cancelOnNextTick=null;var t=e.props,o=t.children;t.debug,function(e,t){if(e&&!D(e)&&!t)throw new Error("<Waypoint> needs a DOM element to compute boundaries. The child you passed is neither a DOM element (e.g. <div>) nor does it use the innerRef prop.\n\nSee https://goo.gl/LrBNgw for more info.")}(o,e._ref),e._handleScroll=e._handleScroll.bind(e),e.scrollableAncestor=e._findScrollableAncestor(),e.scrollEventListenerUnsubscribe=M(e.scrollableAncestor,"scroll",e._handleScroll,{passive:!0}),e.resizeEventListenerUnsubscribe=M(window,"resize",e._handleScroll,{passive:!0}),e._handleScroll(null)})))}},{key:"componentDidUpdate",value:function(){var e=this;a.getWindow()&&this.scrollableAncestor&&(this.cancelOnNextTick||(this.cancelOnNextTick=b((function(){e.cancelOnNextTick=null,e._handleScroll(null)}))))}},{key:"componentWillUnmount",value:function(){a.getWindow()&&(this.scrollEventListenerUnsubscribe&&this.scrollEventListenerUnsubscribe(),this.resizeEventListenerUnsubscribe&&this.resizeEventListenerUnsubscribe(),this.cancelOnNextTick&&this.cancelOnNextTick())}},{key:"_findScrollableAncestor",value:function(){var e=this.props,t=e.horizontal,n=e.scrollableAncestor;if(n)return function(e){return"window"===e?o.g.window:e}(n);for(var r=this._ref;r.parentNode;){if((r=r.parentNode)===document.body)return window;var i=window.getComputedStyle(r),l=(t?i.getPropertyValue("overflow-x"):i.getPropertyValue("overflow-y"))||i.getPropertyValue("overflow");if("auto"===l||"scroll"===l||"overlay"===l)return r}return window}},{key:"_handleScroll",value:function(e){if(this._ref){var t=this._getBounds(),o=function(e){return e.viewportBottom-e.viewportTop==0?E:e.viewportTop<=e.waypointTop&&e.waypointTop<=e.viewportBottom||e.viewportTop<=e.waypointBottom&&e.waypointBottom<=e.viewportBottom||e.waypointTop<=e.viewportTop&&e.viewportBottom<=e.waypointBottom?v:e.viewportBottom<e.waypointTop?w:e.waypointTop<e.viewportTop?T:E}(t),n=this._previousPosition,r=this.props,i=(r.debug,r.onPositionChange),l=r.onEnter,a=r.onLeave,s=r.fireOnRapidScroll;if(this._previousPosition=o,n!==o){var c={currentPosition:o,previousPosition:n,event:e,waypointTop:t.waypointTop,waypointBottom:t.waypointBottom,viewportTop:t.viewportTop,viewportBottom:t.viewportBottom};i.call(this,c),o===v?l.call(this,c):n===v&&a.call(this,c),s&&(n===w&&o===T||n===T&&o===w)&&(l.call(this,{currentPosition:v,previousPosition:n,event:e,waypointTop:t.waypointTop,waypointBottom:t.waypointBottom,viewportTop:t.viewportTop,viewportBottom:t.viewportBottom}),a.call(this,{currentPosition:o,previousPosition:v,event:e,waypointTop:t.waypointTop,waypointBottom:t.waypointBottom,viewportTop:t.viewportTop,viewportBottom:t.viewportBottom}))}}}},{key:"_getBounds",value:function(){var e,t,o=this.props,n=o.horizontal,r=(o.debug,this._ref.getBoundingClientRect()),i=r.left,l=r.top,a=r.right,s=r.bottom,c=n?i:l,u=n?a:s;this.scrollableAncestor===window?(e=n?window.innerWidth:window.innerHeight,t=0):(e=n?this.scrollableAncestor.offsetWidth:this.scrollableAncestor.offsetHeight,t=n?this.scrollableAncestor.getBoundingClientRect().left:this.scrollableAncestor.getBoundingClientRect().top);var p=this.props,f=p.bottomOffset;return{waypointTop:c,waypointBottom:u,viewportTop:t+N(p.topOffset,e),viewportBottom:t+e-N(f,e)}}},{key:"render",value:function(){var e=this,t=this.props.children;return t?D(t)||(0,g.isForwardRef)(t)?i.cloneElement(t,{ref:function(o){e.refElement(o),t.ref&&("function"==typeof t.ref?t.ref(o):t.ref.current=o)}}):i.cloneElement(t,{innerRef:this.refElement}):i.createElement("span",{ref:this.refElement,style:{fontSize:0}})}}])&&d(t.prototype,n),r&&d(t,r),a}(i.PureComponent);x.above=T,x.below=w,x.inside=v,x.invisible=E,x.getWindow=function(){if("undefined"!=typeof window)return window},x.defaultProps=C,x.displayName="Waypoint";var z=function(e){return i.createElement("header",{id:"header",className:"alt"},i.createElement("span",{className:"logo"},i.createElement("img",{src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiIHZpZXdCb3g9IjAgMCA2NTUzNiA2NTUzNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpieD0iaHR0cHM6Ly9ib3h5LXN2Zy5jb20iPgogIDxkZWZzPgogICAgPGJ4OmdyaWQgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMjQiIGhlaWdodD0iMTAyNCIvPgogICAgPHBhdGggaWQ9InBhdGgtMCIgZD0iTSAzNjk4Ny44MzggLTE2NjM4LjY0IEwgMzcyNTYuOTc5IC0xMzAwNS4yMjcgQyA0MzA0My41MjUgLTgxNjAuNjc3IDQ3MTM4LjEwMiA1MTUuNzA3IDU0NjE2LjYxNyAxNTI4LjQyMyBDIDU4NjA2LjY1NiAyMDY4Ljc0MSA1MzU0Ny44NjIgLTEyOTY1LjgyNiA1NjYzNS4xNzkgLTEwMzgxLjA5NiIgc3R5bGU9ImZpbGw6IG5vbmU7Ii8+CiAgICA8cGF0aCBpZD0icGF0aC0xIiBkPSJNIDQ1ODAyLjIyNzEwOTI5NTYgLTE0MDE0LjUwODM2MjAzNTIwOSBMIDQ4Njk3LjUxNTIzNTQ1NDkwNiA1Ny45Mzg1NzY3MzkxNDEzNTQiIHN0eWxlPSJmaWxsOiBub25lOyIvPgogICAgPHBhdGggaWQ9InBhdGgtMiIgZD0iTSAtMTA4NTIuMDkzNzc1ODExODY3IC0xNjE2Ny42NDE2OTczMzYyMDcgTCA1MzczLjY3NDgyNTI3MDk1ODUgLTE3MTEwLjIxNzQ2NjY5MzcxNCIgc3R5bGU9ImZpbGw6IG5vbmU7Ii8+CiAgICA8cGF0aCBpZD0icGF0aC0zIiBkPSJNIDM5MDA2LjQgLTE1NDI3LjUwMiBMIDQwMzUyLjEwOCAtMTU2MjkuMzU4IEMgNDMwODkuNjcgLTE1ODU3LjQ4OSA0NTMwMS4zOTUgLTE1NDU5Ljg3NSA0NzgyMC43OSAtMTQ2MjAuMDc3IiBzdHlsZT0iZmlsbDogbm9uZTsiLz4KICA8L2RlZnM+CiAgPGcgc3R5bGU9IiIgdHJhbnNmb3JtPSJtYXRyaXgoMSwgMCwgMCwgMSwgMzI1MTgsIDMyNTE4KSI+CiAgICA8cGF0aCBzdHlsZT0iZmlsbDogcmdiKDI1NSwgMjU1LCAyNTUpOyIgdHJhbnNmb3JtPSJtYXRyaXgoNjkuMDU3OTUzLCAwLCAwLCA2OS4wNTc5NTMsIC03MDA2Mi4zMjgxMjUsIC0yNjE3OC42ODU1NDcpIiBkPSJNIDEwMTguMTY0IDg0Ny41MyBBIDQ2NC44MjcgNDY0LjgyNyAwIDEgMSAxMDE4LjE2NCAtODIuMTI0IEwgMTAxOC4xNjQgMzgyLjcwMyBaIiBieDpzaGFwZT0icGllIDEwMTguMTY0IDM4Mi43MDMgMCA0NjQuODI3IDE4MCAzNjAgMUA0OThlOTY2ZiIvPgogICAgPHBhdGggc3R5bGU9ImZpbGw6IHJnYigyMzgsIDE4NywgMjAzKTsiIHRyYW5zZm9ybT0ibWF0cml4KDY5LjA1Nzk1MywgMCwgMCwgNjkuMDU3OTUzLCAtNzAwNjIuMzIwMzEyLCAtMjYxNzguNjg1NTQ3KSIgZD0iTSAxMDE4LjE2NCAtODIuMTI0IEEgNDY0LjgyNyA0NjQuODI3IDAgMSAxIDEwMTguMTY0IDg0Ny41MyBMIDEwMTguMTY0IDM4Mi43MDMgWiIgYng6c2hhcGU9InBpZSAxMDE4LjE2NCAzODIuNzAzIDAgNDY0LjgyNyAwIDE4MCAxQGNiNDJjMzdlIi8+CiAgICA8Y2lyY2xlIHN0eWxlPSJmaWxsOiByZ2IoMjU1LCAyNTUsIDI1NSk7IiBjeD0iMjUwIiBjeT0iLTE1NDY2IiByPSIxNTcxNiIvPgogICAgPGNpcmNsZSBzdHlsZT0iZmlsbDogcmdiKDIzOCwgMTg3LCAyMDMpOyIgY3g9IjI1MCIgY3k9IjE1OTY2IiByPSIxNTcxNiIgYng6b3JpZ2luPSIwLjUgMC41Ii8+CiAgICA8cGF0aCBkPSJNIDI1MCAyNTAgbSAtMzI3NjggMCBhIDMyNzY4IDMyNzY4IDAgMSAwIDY1NTM2IDAgYSAzMjc2OCAzMjc2OCAwIDEgMCAtNjU1MzYgMCBaIE0gMjUwIDI1MCBtIC0zMTQzMiAwIGEgMzE0MzIgMzE0MzIgMCAwIDEgNjI4NjQgMCBhIDMxNDMyIDMxNDMyIDAgMCAxIC02Mjg2NCAwIFoiIHN0eWxlPSJmaWxsOiByZ2IoMjM4LCAxODcsIDIwMyk7IiBieDpzaGFwZT0icmluZyAyNTAgMjUwIDMxNDMyIDMxNDMyIDMyNzY4IDMyNzY4IDFAY2Q5MzFkMTgiLz4KICA8L2c+CiAgPHBhdGggZD0iTSAxMzEwMy44MzMgMzI3NjggTCAzMjc2OC4wMDIgMzI3NjggTCAzMjc2OC4wMDIgNjU1MzUuOTk4IEwgMTMxMDMuODMzIDY1NTM1Ljk5OCBMIDE3MTgzLjMyNiA2MTQzOS45OTkgTCAxMzEwMy44MzMgNTczNDMuOTk5IEwgMTcxODMuMzI2IDUzMjQ3Ljk5OSBMIDEzMTAzLjgzMyA0OTE1MS45OTkgTCAxNzE4My4zMjYgNDUwNTYgTCAxMzEwMy44MzMgNDA5NjAgTCAxNzE4My4zMjYgMzY4NjQgTCAxMzEwMy44MzMgMzI3NjggWiIgc3R5bGU9ImZpbGw6IHJnYigyMzgsIDE4NywgMjAzKTsiLz4KICA8ZyBzdHlsZT0iIiB0cmFuc2Zvcm09Im1hdHJpeCgxLCAwLCAwLCAxLCAzMjUxOCwgMzI1MTgpIj4KICAgIDxwYXRoIGQ9Ik0gLTI4MTQuOTE5IDc3NzQgTCAtNzY2LjkxOSA3Nzc0IEwgMTI4MS4wODEgNzc3NCBMIDMzMTQuOTE5IDk4MjIuMDAxIEwgMTI4MS4wODEgMTE4NzAuMDAxIEwgMzMxNC45MTkgMTM5MTguMDAxIEwgMTI4MS4wODEgMTU5NjYuMDAxIEwgMzMxNC45MTkgMTgwMTQuMDAyIEwgMTI4MS4wODEgMjAwNjIuMDAyIEwgMzMxNC45MTkgMjIxMTAuMDAyIEwgMTI4MS4wODEgMjQxNTguMDAyIEwgLTc2Ni45MTkgMjQxNTguMDAyIEwgLTI4MTQuOTE5IDI0MTU4LjAwMiBMIC03ODEuMDgxIDIyMTEwLjAwMiBMIC0yODE0LjkxOSAyMDA2Mi4wMDIgTCAtNzgxLjA4MSAxODAxNC4wMDIgTCAtMjgxNC45MTkgMTU5NjYuMDAxIEwgLTc4MS4wODEgMTM5MTguMDAxIEwgLTI4MTQuOTE5IDExODcwLjAwMSBMIC03ODEuMDgxIDk4MjIuMDAxIEwgLTI4MTQuOTE5IDc3NzQgWiIgc3R5bGU9ImZpbGw6IHJnYigyNTUsIDI1NSwgMjU1KTsiLz4KICAgIDxwYXRoIGQ9Ik0gMjY2LjQwMiAtNzI3My45OTkgQyAtMTM1OS41OTYgLTcyNzMuOTk5IC0yNjQ0LjcyIC03ODE5LjAzNSAtMzU4OC45NyAtODkwOS4wOTkgQyAtNDUzMy4yMjEgLTk5OTkuMTg2IC01MDA1LjM0NiAtMTE1NzkuNjE5IC01MDA1LjM0NiAtMTM2NTAuMzk4IEwgLTUwMDUuMzQ2IC0xNzI3MC42MjkgQyAtNTAwNS4zNDYgLTE5MzQxLjQzIC00NTM1LjA0NCAtMjA5MjMuNjg2IC0zNTk0LjQ0MiAtMjIwMTcuNCBDIC0yNjUzLjgzOCAtMjMxMTEuMTM0IC0xMzc0LjE3OCAtMjM2NTggMjQ0LjU0MSAtMjM2NTggQyAxODU1Ljk2NSAtMjM2NTggMzEzNS42MjkgLTIzMTExLjEzNCA0MDgzLjUyNSAtMjIwMTcuNCBDIDUwMzEuNDA1IC0yMDkyMy42ODYgNTUwNS4zNDUgLTE5MzQxLjQzIDU1MDUuMzQ1IC0xNzI3MC42MjkgTCA1NTA1LjM0NSAtMTM2NTAuMzk4IEMgNTUwNS4zNDUgLTExNTcyLjMyMSA1MDM1LjA0NiAtOTk5MC4wNjUgNDA5NC40NDIgLTg5MDMuNjI3IEMgMzE1My44NCAtNzgxNy4yMDkgMTg3Ny44MjYgLTcyNzMuOTk5IDI2Ni40MDIgLTcyNzMuOTk5IFogTSAyNjYuNDAyIC05Mzk1LjgyNyBDIDEwNzUuNzY0IC05Mzk1LjgyNyAxNjkxLjkgLTk3MTMuMDA4IDIxMTQuODExIC0xMDM0Ny4zNjQgQyAyNTM3LjcyNCAtMTA5ODEuNzIzIDI3NDkuMTc4IC0xMTk2Mi40MjkgMjc0OS4xNzggLTEzMjg5LjQ3NyBMIDI3NDkuMTc4IC0xNzY1My40MzkgQyAyNzQ5LjE3OCAtMTg5NjUuOTE2IDI1MzQuMDc1IC0xOTkzOS4zMzUgMjEwMy44NjYgLTIwNTczLjY5MSBDIDE2NzMuNjc2IC0yMTIwOC4wNSAxMDUzLjkwMyAtMjE1MjUuMjI4IDI0NC41NDEgLTIxNTI1LjIyOCBDIC01NzIuMTE1IC0yMTUyNS4yMjggLTExOTMuNzEyIC0yMTIwOS44NzMgLTE2MjAuMjU1IC0yMDU3OS4xNjMgQyAtMjA0Ni44MTUgLTE5OTQ4LjQ1MyAtMjI2MC4wOTUgLTE4OTczLjIxMiAtMjI2MC4wOTUgLTE3NjUzLjQzOSBMIC0yMjYwLjA5NSAtMTMyODkuNDc3IEMgLTIyNjAuMDk1IC0xMTk2Mi40MjkgLTIwNDUuMDAxIC0xMDk4MS43MjMgLTE2MTQuODExIC0xMDM0Ny4zNjQgQyAtMTE4NC42MDIgLTk3MTMuMDA4IC01NTcuNTMgLTkzOTUuODI3IDI2Ni40MDIgLTkzOTUuODI3IFoiIHN0eWxlPSJ3aGl0ZS1zcGFjZTogcHJlOyBmaWxsOiByZ2IoMjM4LCAxODcsIDIwMyk7Ii8+CiAgPC9nPgo8L3N2Zz4=",alt:"",width:"20%"})),i.createElement("h1",null,"CoderDojo東住吉"),i.createElement("h2",null,"子どものプログラミング道場"))},S=o(2413),O=o(4266);var L=o(9634),k=o.n(L),_=function(e){return e.children},B=function(e){function t(){var t;return(t=e.call(this)||this).handleClick=t.handleClick.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)),t}(0,n.Z)(t,e);var o=t.prototype;return o.componentDidMount=function(){k().polyfill()},o.handleClick=function(e){e.preventDefault();var t=0,o=!0,n=this.props,r=n.type,i=n.element,l=n.offset,a=n.timeout;if(r&&i)switch(r){case"class":o=!!(t=document.getElementsByClassName(i)[0]);break;case"id":o=!!(t=document.getElementById(i))}o?this.scrollTo(t,l,a):console.log("Element not found: "+i)},o.scrollTo=function(e,t,o){void 0===t&&(t=0),void 0===o&&(o=null);var n=e?e.getBoundingClientRect().top+window.pageYOffset:0;o?setTimeout((function(){window.scroll({top:n+t,left:0,behavior:"smooth"})}),o):window.scroll({top:n+t,left:0,behavior:"smooth"})},o.render=function(){return i.createElement(_,null,"object"==typeof this.props.children?i.cloneElement(this.props.children,{onClick:this.handleClick}):i.createElement("span",{onClick:this.handleClick},this.props.children))},t}(i.Component),U=function(e){return i.createElement("nav",{id:"nav",className:e.sticky?"alt":""},i.createElement(O.Z,{items:["intro","first","second","cta"],currentClassName:"is-active",offset:-300},i.createElement("li",null,i.createElement(B,{type:"id",element:"intro"},i.createElement("a",{href:"#"},"はじめに"))),i.createElement("li",null,i.createElement(B,{type:"id",element:"first"},i.createElement("a",{href:"#"},"サポート"))),i.createElement("li",null,i.createElement(B,{type:"id",element:"second"},i.createElement("a",{href:"#"},"さんか"))),i.createElement("li",null,i.createElement(B,{type:"id",element:"cta"},i.createElement("a",{href:"#"},"にっき")))))},Y=function(e){function t(t){var o;return(o=e.call(this,t)||this)._handleWaypointEnter=function(){o.setState((function(){return{stickyNav:!1}}))},o._handleWaypointLeave=function(){o.setState((function(){return{stickyNav:!0}}))},o.state={stickyNav:!1},o}return(0,n.Z)(t,e),t.prototype.render=function(){return i.createElement(S.Z,null,i.createElement(l.Z,{title:"CoderDojo Higashi-Sumiyoshi"}),i.createElement(z,null),i.createElement(x,{onEnter:this._handleWaypointEnter,onLeave:this._handleWaypointLeave}),i.createElement(U,{sticky:this.state.stickyNav}),i.createElement("div",{id:"main"},i.createElement("section",{id:"intro",className:"main special"},i.createElement("div",{className:"spotlight"},i.createElement("div",{className:"content"},i.createElement("header",{className:"major"},i.createElement("h2",null,"コーダー道場って？"),i.createElement("p",null,"CoderDojoは 7 ~ 17 才の子どもたちが楽しくプログラミングできる道場です。",i.createElement("br",null),"世界に2,200の道場、日本には228以上の道場があります。",i.createElement("br",null)),i.createElement("p",null,"プログラミングが好きな子どもは無料で参加できます。")),i.createElement("ul",{className:"actions"},i.createElement("li",null,i.createElement("a",{href:"https://coderdojo.jp/",target:"_blank",rel:"noopener noreferrer",className:"button special"},"もっとくわしく")))))),i.createElement("section",{id:"first",className:"main special"},i.createElement("header",{className:"major"},i.createElement("h2",null,"サポートしてもらえる内容"),i.createElement("p",null,"メンターと呼ばれる大人がみんなの「やりたい」をサポートします。")),i.createElement("ul",{className:"features"},i.createElement("li",null,i.createElement("span",{className:"icon major style1 fa-gamepad"}),i.createElement("h3",null,i.createElement("a",{href:"https://scratch.mit.edu/",target:"_blank",rel:"noopener noreferrer"},"スクラッチ")),i.createElement("p",null,"ゲームやアニメーションを作ろう")),i.createElement("li",null,i.createElement("span",{className:"icon major style3 fa-keyboard-o"}),i.createElement("h3",null,"プログラミング言語"),i.createElement("p",null,"Webやスマホでのアプリ制作")),i.createElement("li",null,i.createElement("span",{className:"icon major style5 fa-microchip"}),i.createElement("h3",null,i.createElement("a",{href:"https://microbit.org/",target:"_blank",rel:"noopener noreferrer"},"micro:bit")),i.createElement("p",null,"コンピュータボードで電子工作")))),i.createElement("section",{id:"second",className:"main special"},i.createElement("header",{className:"major"},i.createElement("h2",null,"コーダー道場に参加するには"),i.createElement("p",null,"プログラミングを好きな 7 歳〜 17 歳までの子どもが参加できます。",i.createElement("br",null),"子ども達といっしょに楽しみたい大人はメンターとして参加できます。")),i.createElement("p",null,"不定期開催 (2ヶ月に1回くらい)",i.createElement("br",null),"開催場所は東田辺周辺を予定してます",i.createElement("br",null),"ただし当面はオンライン開催(Discord)の予定"),i.createElement("footer",{className:"major"},i.createElement("ul",{className:"actions"},i.createElement("li",null,i.createElement("a",{href:"https://discord.gg/Txh3GjCJYk",target:"_blank",rel:"noopener noreferrer",className:"button special"},"さんかページへ(準備中)")),i.createElement("li",null,i.createElement("a",{href:"https://discord.gg/Txh3GjCJYk",target:"_blank",rel:"noopener noreferrer",className:"button"},"Discord"))))),i.createElement("section",{id:"cta",className:"main special"},i.createElement("header",{className:"major"},i.createElement("h2",null,"にっき"),i.createElement("p",null,"これから書くのでちょっとまってね")),i.createElement("footer",{className:"major"},i.createElement("ul",{className:"actions"},i.createElement("li",null,i.createElement(r.Link,{to:"/generic",className:"button"},"ブログ")))))))},t}(i.Component)}}]);
//# sourceMappingURL=component---src-pages-index-js-6ca731440f15e21e0c06.js.map