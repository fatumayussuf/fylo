(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2937],{50726:function(e,t,n){"use strict";n.d(t,{Ry:function(){return l}});var r=new WeakMap,o=new WeakMap,a={},u=0,c=function(e){return e&&(e.host||c(e.parentNode))},i=function(e,t,n,i){var l=(Array.isArray(e)?e:[e]).map(function(e){if(t.contains(e))return e;var n=c(e);return n&&t.contains(n)?n:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)}).filter(function(e){return!!e});a[n]||(a[n]=new WeakMap);var s=a[n],d=[],f=new Set,p=new Set(l),v=function(e){!e||f.has(e)||(f.add(e),v(e.parentNode))};l.forEach(v);var m=function(e){!e||p.has(e)||Array.prototype.forEach.call(e.children,function(e){if(f.has(e))m(e);else try{var t=e.getAttribute(i),a=null!==t&&"false"!==t,u=(r.get(e)||0)+1,c=(s.get(e)||0)+1;r.set(e,u),s.set(e,c),d.push(e),1===u&&a&&o.set(e,!0),1===c&&e.setAttribute(n,"true"),a||e.setAttribute(i,"true")}catch(t){console.error("aria-hidden: cannot operate on ",e,t)}})};return m(t),f.clear(),u++,function(){d.forEach(function(e){var t=r.get(e)-1,a=s.get(e)-1;r.set(e,t),s.set(e,a),t||(o.has(e)||e.removeAttribute(i),o.delete(e)),a||e.removeAttribute(n)}),--u||(r=new WeakMap,r=new WeakMap,o=new WeakMap,a={})}},l=function(e,t,n){void 0===n&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=t||("undefined"==typeof document?null:(Array.isArray(e)?e[0]:e).ownerDocument.body);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),i(r,o,n,"aria-hidden")):function(){return null}}},93380:function(){},97421:function(e,t,n){"use strict";n.d(t,{Av:function(){return u},pF:function(){return r},xv:function(){return a},zi:function(){return o}});var r="right-scroll-bar-position",o="width-before-scroll-bar",a="with-scroll-bars-hidden",u="--removed-body-scroll-bar-size"},85516:function(e,t,n){"use strict";n.d(t,{jp:function(){return m}});var r=n(52983),o=n(15006),a=n(97421),u={left:0,top:0,right:0,gap:0},c=function(e){return parseInt(e||"",10)||0},i=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],o=t["padding"===e?"paddingRight":"marginRight"];return[c(n),c(r),c(o)]},l=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return u;var t=i(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},s=(0,o.Ws)(),d="data-scroll-locked",f=function(e,t,n,r){var o=e.left,u=e.top,c=e.right,i=e.gap;return void 0===n&&(n="margin"),"\n  .".concat(a.xv," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(i,"px ").concat(r,";\n  }\n  body[").concat(d,"] {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(u,"px;\n    padding-right: ").concat(c,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(i,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(i,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(a.pF," {\n    right: ").concat(i,"px ").concat(r,";\n  }\n  \n  .").concat(a.zi," {\n    margin-right: ").concat(i,"px ").concat(r,";\n  }\n  \n  .").concat(a.pF," .").concat(a.pF," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(a.zi," .").concat(a.zi," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body[").concat(d,"] {\n    ").concat(a.Av,": ").concat(i,"px;\n  }\n")},p=function(){var e=parseInt(document.body.getAttribute(d)||"0",10);return isFinite(e)?e:0},v=function(){r.useEffect(function(){return document.body.setAttribute(d,(p()+1).toString()),function(){var e=p()-1;e<=0?document.body.removeAttribute(d):document.body.setAttribute(d,e.toString())}},[])},m=function(e){var t=e.noRelative,n=e.noImportant,o=e.gapMode,a=void 0===o?"margin":o;v();var u=r.useMemo(function(){return l(a)},[a]);return r.createElement(s,{styles:f(u,!t,a,n?"":"!important")})}},60382:function(e,t,n){"use strict";n.d(t,{Z:function(){return T}});var r=n(43112),o=n(52983),a=n(97421),u=n(34151),c=(0,n(34295)._)(),i=function(){},l=o.forwardRef(function(e,t){var n=o.useRef(null),a=o.useState({onScrollCapture:i,onWheelCapture:i,onTouchMoveCapture:i}),l=a[0],s=a[1],d=e.forwardProps,f=e.children,p=e.className,v=e.removeScrollBar,m=e.enabled,h=e.shards,g=e.sideCar,y=e.noIsolation,E=e.inert,b=e.allowPinchZoom,w=e.as,C=(0,r._T)(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),R=(0,u.q)([n,t]),S=(0,r.pi)((0,r.pi)({},C),l);return o.createElement(o.Fragment,null,m&&o.createElement(g,{sideCar:c,removeScrollBar:v,shards:h,noIsolation:y,inert:E,setCallbacks:s,allowPinchZoom:!!b,lockRef:n}),d?o.cloneElement(o.Children.only(f),(0,r.pi)((0,r.pi)({},S),{ref:R})):o.createElement(void 0===w?"div":w,(0,r.pi)({},S,{className:p,ref:R}),f))});l.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},l.classNames={fullWidth:a.zi,zeroRight:a.pF};var s=n(33329),d=n(85516),f=n(15006),p=!1;if("undefined"!=typeof window)try{var v=Object.defineProperty({},"passive",{get:function(){return p=!0,!0}});window.addEventListener("test",v,v),window.removeEventListener("test",v,v)}catch(e){p=!1}var m=!!p&&{passive:!1},h=function(e,t){var n=window.getComputedStyle(e);return"hidden"!==n[t]&&!(n.overflowY===n.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===n[t])},g=function(e,t){var n=t;do{if("undefined"!=typeof ShadowRoot&&n instanceof ShadowRoot&&(n=n.host),y(e,n)){var r=E(e,n);if(r[1]>r[2])return!0}n=n.parentNode}while(n&&n!==document.body);return!1},y=function(e,t){return"v"===e?h(t,"overflowY"):h(t,"overflowX")},E=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},b=function(e,t,n,r,o){var a,u=(a=window.getComputedStyle(t).direction,"h"===e&&"rtl"===a?-1:1),c=u*r,i=n.target,l=t.contains(i),s=!1,d=c>0,f=0,p=0;do{var v=E(e,i),m=v[0],h=v[1]-v[2]-u*m;(m||h)&&y(e,i)&&(f+=h,p+=m),i=i.parentNode}while(!l&&i!==document.body||l&&(t.contains(i)||t===i));return d&&(o&&0===f||!o&&c>f)?s=!0:!d&&(o&&0===p||!o&&-c>p)&&(s=!0),s},w=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},C=function(e){return[e.deltaX,e.deltaY]},R=function(e){return e&&"current"in e?e.current:e},S=0,A=[],M=(0,s.L)(c,function(e){var t=o.useRef([]),n=o.useRef([0,0]),a=o.useRef(),u=o.useState(S++)[0],c=o.useState(function(){return(0,f.Ws)()})[0],i=o.useRef(e);o.useEffect(function(){i.current=e},[e]),o.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(u));var t=(0,r.ev)([e.lockRef.current],(e.shards||[]).map(R),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(u))}),function(){document.body.classList.remove("block-interactivity-".concat(u)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(u))})}}},[e.inert,e.lockRef.current,e.shards]);var l=o.useCallback(function(e,t){if("touches"in e&&2===e.touches.length)return!i.current.allowPinchZoom;var r,o=w(e),u=n.current,c="deltaX"in e?e.deltaX:u[0]-o[0],l="deltaY"in e?e.deltaY:u[1]-o[1],s=e.target,d=Math.abs(c)>Math.abs(l)?"h":"v";if("touches"in e&&"h"===d&&"range"===s.type)return!1;var f=g(d,s);if(!f)return!0;if(f?r=d:(r="v"===d?"h":"v",f=g(d,s)),!f)return!1;if(!a.current&&"changedTouches"in e&&(c||l)&&(a.current=r),!r)return!0;var p=a.current||r;return b(p,t,e,"h"===p?c:l,!0)},[]),s=o.useCallback(function(e){if(A.length&&A[A.length-1]===c){var n="deltaY"in e?C(e):w(e),r=t.current.filter(function(t){var r;return t.name===e.type&&t.target===e.target&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var o=(i.current.shards||[]).map(R).filter(Boolean).filter(function(t){return t.contains(e.target)});(o.length>0?l(e,o[0]):!i.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),p=o.useCallback(function(e,n,r,o){var a={name:e,delta:n,target:r,should:o};t.current.push(a),setTimeout(function(){t.current=t.current.filter(function(e){return e!==a})},1)},[]),v=o.useCallback(function(e){n.current=w(e),a.current=void 0},[]),h=o.useCallback(function(t){p(t.type,C(t),t.target,l(t,e.lockRef.current))},[]),y=o.useCallback(function(t){p(t.type,w(t),t.target,l(t,e.lockRef.current))},[]);o.useEffect(function(){return A.push(c),e.setCallbacks({onScrollCapture:h,onWheelCapture:h,onTouchMoveCapture:y}),document.addEventListener("wheel",s,m),document.addEventListener("touchmove",s,m),document.addEventListener("touchstart",v,m),function(){A=A.filter(function(e){return e!==c}),document.removeEventListener("wheel",s,m),document.removeEventListener("touchmove",s,m),document.removeEventListener("touchstart",v,m)}},[]);var E=e.removeScrollBar,M=e.inert;return o.createElement(o.Fragment,null,M?o.createElement(c,{styles:"\n  .block-interactivity-".concat(u," {pointer-events: none;}\n  .allow-interactivity-").concat(u," {pointer-events: all;}\n")}):null,E?o.createElement(d.jp,{gapMode:"margin"}):null)}),k=o.forwardRef(function(e,t){return o.createElement(l,(0,r.pi)({},e,{ref:t,sideCar:M}))});k.classNames=l.classNames;var T=k},15006:function(e,t,n){"use strict";n.d(t,{Ws:function(){return c}});var r,o=n(52983),a=function(){var e=0,t=null;return{add:function(o){if(0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=r||n.nc;return t&&e.setAttribute("nonce",t),e}())){var a,u;(a=t).styleSheet?a.styleSheet.cssText=o:a.appendChild(document.createTextNode(o)),u=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(u)}e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},u=function(){var e=a();return function(t,n){o.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},c=function(){var e=u();return function(t){return e(t.styles,t.dynamic),null}}},34151:function(e,t,n){"use strict";n.d(t,{q:function(){return c}});var r=n(52983);function o(e,t){return"function"==typeof e?e(t):e&&(e.current=t),e}var a="undefined"!=typeof window?r.useLayoutEffect:r.useEffect,u=new WeakMap;function c(e,t){var n,c,i,l=(n=t||null,c=function(t){return e.forEach(function(e){return o(e,t)})},(i=(0,r.useState)(function(){return{value:n,callback:c,facade:{get current(){return i.value},set current(value){var e=i.value;e!==value&&(i.value=value,i.callback(value,e))}}}})[0]).callback=c,i.facade);return a(function(){var t=u.get(l);if(t){var n=new Set(t),r=new Set(e),a=l.current;n.forEach(function(e){r.has(e)||o(e,null)}),r.forEach(function(e){n.has(e)||o(e,a)})}u.set(l,e)},[e]),l}},33329:function(e,t,n){"use strict";n.d(t,{L:function(){return u}});var r=n(43112),o=n(52983),a=function(e){var t=e.sideCar,n=(0,r._T)(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var a=t.read();if(!a)throw Error("Sidecar medium not found");return o.createElement(a,(0,r.pi)({},n))};function u(e,t){return e.useMedium(t),a}a.isSideCarExport=!0},34295:function(e,t,n){"use strict";n.d(t,{_:function(){return a}});var r=n(43112);function o(e){return e}function a(e){void 0===e&&(e={});var t,n,a,u=(void 0===t&&(t=o),n=[],a=!1,{read:function(){if(a)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:null},useMedium:function(e){var r=t(e,a);return n.push(r),function(){n=n.filter(function(e){return e!==r})}},assignSyncMedium:function(e){for(a=!0;n.length;){var t=n;n=[],t.forEach(e)}n={push:function(t){return e(t)},filter:function(){return n}}},assignMedium:function(e){a=!0;var t=[];if(n.length){var r=n;n=[],r.forEach(e),t=n}var o=function(){var n=t;t=[],n.forEach(e)},u=function(){return Promise.resolve().then(o)};u(),n={push:function(e){t.push(e),u()},filter:function(e){return t=t.filter(e),n}}}});return u.options=(0,r.pi)({async:!0,ssr:!1},e),u}},66827:function(e,t,n){"use strict";n.d(t,{VY:function(){return X},aV:function(){return K},fC:function(){return j},h_:function(){return B},x8:function(){return Y},xz:function(){return z}});var r=n(24552),o=n(52983),a=n(12527),u=n(81213),c=n(62331),i=n(74009),l=n(23196),s=n(56368),d=n(3636),f=n(74077),p=n(88702),v=n(37956),m=n(29520),h=n(60382),g=n(50726),y=n(96782);let E="Dialog",[b,w]=(0,c.b)(E),[C,R]=b(E),S=(0,o.forwardRef)((e,t)=>{let{__scopeDialog:n,...c}=e,i=R("DialogTrigger",n),l=(0,u.e)(t,i.triggerRef);return(0,o.createElement)(v.WV.button,(0,r.Z)({type:"button","aria-haspopup":"dialog","aria-expanded":i.open,"aria-controls":i.contentId,"data-state":W(i.open)},c,{ref:l,onClick:(0,a.M)(e.onClick,i.onOpenToggle)}))}),A="DialogPortal",[M,k]=b(A,{forceMount:void 0}),T="DialogOverlay",D=(0,o.forwardRef)((e,t)=>{let n=k(T,e.__scopeDialog),{forceMount:a=n.forceMount,...u}=e,c=R(T,e.__scopeDialog);return c.modal?(0,o.createElement)(p.z,{present:a||c.open},(0,o.createElement)(O,(0,r.Z)({},u,{ref:t}))):null}),O=(0,o.forwardRef)((e,t)=>{let{__scopeDialog:n,...a}=e,u=R(T,n);return(0,o.createElement)(h.Z,{as:y.g7,allowPinchZoom:!0,shards:[u.contentRef]},(0,o.createElement)(v.WV.div,(0,r.Z)({"data-state":W(u.open)},a,{ref:t,style:{pointerEvents:"auto",...a.style}})))}),_="DialogContent",F=(0,o.forwardRef)((e,t)=>{let n=k(_,e.__scopeDialog),{forceMount:a=n.forceMount,...u}=e,c=R(_,e.__scopeDialog);return(0,o.createElement)(p.z,{present:a||c.open},c.modal?(0,o.createElement)(L,(0,r.Z)({},u,{ref:t})):(0,o.createElement)(x,(0,r.Z)({},u,{ref:t})))}),L=(0,o.forwardRef)((e,t)=>{let n=R(_,e.__scopeDialog),c=(0,o.useRef)(null),i=(0,u.e)(t,n.contentRef,c);return(0,o.useEffect)(()=>{let e=c.current;if(e)return(0,g.Ry)(e)},[]),(0,o.createElement)(N,(0,r.Z)({},e,{ref:i,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,a.M)(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),null===(t=n.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:(0,a.M)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey;(2===t.button||n)&&e.preventDefault()}),onFocusOutside:(0,a.M)(e.onFocusOutside,e=>e.preventDefault())}))}),x=(0,o.forwardRef)((e,t)=>{let n=R(_,e.__scopeDialog),a=(0,o.useRef)(!1),u=(0,o.useRef)(!1);return(0,o.createElement)(N,(0,r.Z)({},e,{ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var r,o;null===(r=e.onCloseAutoFocus)||void 0===r||r.call(e,t),t.defaultPrevented||(a.current||null===(o=n.triggerRef.current)||void 0===o||o.focus(),t.preventDefault()),a.current=!1,u.current=!1},onInteractOutside:t=>{var r,o;null===(r=e.onInteractOutside)||void 0===r||r.call(e,t),t.defaultPrevented||(a.current=!0,"pointerdown"!==t.detail.originalEvent.type||(u.current=!0));let c=t.target;(null===(o=n.triggerRef.current)||void 0===o?void 0:o.contains(c))&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&u.current&&t.preventDefault()}}))}),N=(0,o.forwardRef)((e,t)=>{let{__scopeDialog:n,trapFocus:a,onOpenAutoFocus:c,onCloseAutoFocus:i,...l}=e,f=R(_,n),p=(0,o.useRef)(null),v=(0,u.e)(t,p);return(0,m.EW)(),(0,o.createElement)(o.Fragment,null,(0,o.createElement)(d.M,{asChild:!0,loop:!0,trapped:a,onMountAutoFocus:c,onUnmountAutoFocus:i},(0,o.createElement)(s.XB,(0,r.Z)({role:"dialog",id:f.contentId,"aria-describedby":f.descriptionId,"aria-labelledby":f.titleId,"data-state":W(f.open)},l,{ref:v,onDismiss:()=>f.onOpenChange(!1)}))),!1)}),P=(0,o.forwardRef)((e,t)=>{let{__scopeDialog:n,...u}=e,c=R("DialogClose",n);return(0,o.createElement)(v.WV.button,(0,r.Z)({type:"button"},u,{ref:t,onClick:(0,a.M)(e.onClick,()=>c.onOpenChange(!1))}))});function W(e){return e?"open":"closed"}let[I,Z]=(0,c.k)("DialogTitleWarning",{contentName:_,titleName:"DialogTitle",docsSlug:"dialog"}),j=e=>{let{__scopeDialog:t,children:n,open:r,defaultOpen:a,onOpenChange:u,modal:c=!0}=e,s=(0,o.useRef)(null),d=(0,o.useRef)(null),[f=!1,p]=(0,l.T)({prop:r,defaultProp:a,onChange:u});return(0,o.createElement)(C,{scope:t,triggerRef:s,contentRef:d,contentId:(0,i.M)(),titleId:(0,i.M)(),descriptionId:(0,i.M)(),open:f,onOpenChange:p,onOpenToggle:(0,o.useCallback)(()=>p(e=>!e),[p]),modal:c},n)},z=S,B=e=>{let{__scopeDialog:t,forceMount:n,children:r,container:a}=e,u=R(A,t);return(0,o.createElement)(M,{scope:t,forceMount:n},o.Children.map(r,e=>(0,o.createElement)(p.z,{present:n||u.open},(0,o.createElement)(f.h,{asChild:!0,container:a},e))))},K=D,X=F,Y=P},29520:function(e,t,n){"use strict";n.d(t,{EW:function(){return a}});var r=n(52983);let o=0;function a(){(0,r.useEffect)(()=>{var e,t;let n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",null!==(e=n[0])&&void 0!==e?e:u()),document.body.insertAdjacentElement("beforeend",null!==(t=n[1])&&void 0!==t?t:u()),o++,()=>{1===o&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),o--}},[])}function u(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}},3636:function(e,t,n){"use strict";let r;n.d(t,{M:function(){return f}});var o=n(24552),a=n(52983),u=n(81213),c=n(37956),i=n(91109);let l="focusScope.autoFocusOnMount",s="focusScope.autoFocusOnUnmount",d={bubbles:!1,cancelable:!0},f=(0,a.forwardRef)((e,t)=>{let{loop:n=!1,trapped:r=!1,onMountAutoFocus:f,onUnmountAutoFocus:g,...y}=e,[E,b]=(0,a.useState)(null),w=(0,i.W)(f),C=(0,i.W)(g),R=(0,a.useRef)(null),S=(0,u.e)(t,e=>b(e)),A=(0,a.useRef)({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;(0,a.useEffect)(()=>{if(r){function e(e){if(A.paused||!E)return;let t=e.target;E.contains(t)?R.current=t:m(R.current,{select:!0})}function t(e){if(A.paused||!E)return;let t=e.relatedTarget;null===t||E.contains(t)||m(R.current,{select:!0})}document.addEventListener("focusin",e),document.addEventListener("focusout",t);let n=new MutationObserver(function(e){if(document.activeElement===document.body)for(let t of e)t.removedNodes.length>0&&m(E)});return E&&n.observe(E,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),n.disconnect()}}},[r,E,A.paused]),(0,a.useEffect)(()=>{if(E){h.add(A);let e=document.activeElement;if(!E.contains(e)){let t=new CustomEvent(l,d);E.addEventListener(l,w),E.dispatchEvent(t),t.defaultPrevented||(function(e,{select:t=!1}={}){let n=document.activeElement;for(let r of e)if(m(r,{select:t}),document.activeElement!==n)return}(p(E).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&m(E))}return()=>{E.removeEventListener(l,w),setTimeout(()=>{let t=new CustomEvent(s,d);E.addEventListener(s,C),E.dispatchEvent(t),t.defaultPrevented||m(null!=e?e:document.body,{select:!0}),E.removeEventListener(s,C),h.remove(A)},0)}}},[E,w,C,A]);let M=(0,a.useCallback)(e=>{if(!n&&!r||A.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,o=document.activeElement;if(t&&o){let t=e.currentTarget,[r,a]=function(e){let t=p(e);return[v(t,e),v(t.reverse(),e)]}(t);r&&a?e.shiftKey||o!==a?e.shiftKey&&o===r&&(e.preventDefault(),n&&m(a,{select:!0})):(e.preventDefault(),n&&m(r,{select:!0})):o===t&&e.preventDefault()}},[n,r,A.paused]);return(0,a.createElement)(c.WV.div,(0,o.Z)({tabIndex:-1},y,{ref:S,onKeyDown:M}))});function p(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function v(e,t){for(let n of e)if(!function(e,{upTo:t}){if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===t||e!==t);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function m(e,{select:t=!1}={}){if(e&&e.focus){var n;let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}let h=(r=[],{add(e){let t=r[0];e!==t&&(null==t||t.pause()),(r=g(r,e)).unshift(e)},remove(e){var t;null===(t=(r=g(r,e))[0])||void 0===t||t.resume()}});function g(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}},43112:function(e,t,n){"use strict";n.d(t,{_T:function(){return o},ev:function(){return u},gn:function(){return a},pi:function(){return r}});var r=function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function o(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function a(e,t,n,r){var o,a=arguments.length,u=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(u=(a<3?o(u):a>3?o(t,n,u):o(t,n))||u);return a>3&&u&&Object.defineProperty(t,n,u),u}function u(e,t,n){if(n||2==arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError}}]);