var fn=Object.create;var le=Object.defineProperty;var pn=Object.getOwnPropertyDescriptor;var dn=Object.getOwnPropertyNames;var vn=Object.getPrototypeOf,yn=Object.prototype.hasOwnProperty;var Fe=(r,o)=>()=>(o||r((o={exports:{}}).exports,o),o.exports),hn=(r,o)=>{for(var c in o)le(r,c,{get:o[c],enumerable:!0})},It=(r,o,c,v)=>{if(o&&typeof o=="object"||typeof o=="function")for(let l of dn(o))!yn.call(r,l)&&l!==c&&le(r,l,{get:()=>o[l],enumerable:!(v=pn(o,l))||v.enumerable});return r};var Ft=(r,o,c)=>(c=r!=null?fn(vn(r)):{},It(o||!r||!r.__esModule?le(c,"default",{value:r,enumerable:!0}):c,r)),mn=r=>It(le({},"__esModule",{value:!0}),r);var Ht=Fe(p=>{"use strict";var G=Symbol.for("react.element"),gn=Symbol.for("react.portal"),bn=Symbol.for("react.fragment"),_n=Symbol.for("react.strict_mode"),En=Symbol.for("react.profiler"),Rn=Symbol.for("react.provider"),Cn=Symbol.for("react.context"),wn=Symbol.for("react.forward_ref"),Sn=Symbol.for("react.suspense"),kn=Symbol.for("react.memo"),On=Symbol.for("react.lazy"),$t=Symbol.iterator;function Tn(r){return r===null||typeof r!="object"?null:(r=$t&&r[$t]||r["@@iterator"],typeof r=="function"?r:null)}var Mt={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Nt=Object.assign,Ut={};function z(r,o,c){this.props=r,this.context=o,this.refs=Ut,this.updater=c||Mt}z.prototype.isReactComponent={};z.prototype.setState=function(r,o){if(typeof r!="object"&&typeof r!="function"&&r!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,r,o,"setState")};z.prototype.forceUpdate=function(r){this.updater.enqueueForceUpdate(this,r,"forceUpdate")};function Vt(){}Vt.prototype=z.prototype;function De(r,o,c){this.props=r,this.context=o,this.refs=Ut,this.updater=c||Mt}var Le=De.prototype=new Vt;Le.constructor=De;Nt(Le,z.prototype);Le.isPureReactComponent=!0;var Dt=Array.isArray,Wt=Object.prototype.hasOwnProperty,Me={current:null},Yt={key:!0,ref:!0,__self:!0,__source:!0};function zt(r,o,c){var v,l={},_=null,C=null;if(o!=null)for(v in o.ref!==void 0&&(C=o.ref),o.key!==void 0&&(_=""+o.key),o)Wt.call(o,v)&&!Yt.hasOwnProperty(v)&&(l[v]=o[v]);var b=arguments.length-2;if(b===1)l.children=c;else if(1<b){for(var m=Array(b),T=0;T<b;T++)m[T]=arguments[T+2];l.children=m}if(r&&r.defaultProps)for(v in b=r.defaultProps,b)l[v]===void 0&&(l[v]=b[v]);return{$$typeof:G,type:r,key:_,ref:C,props:l,_owner:Me.current}}function Pn(r,o){return{$$typeof:G,type:r.type,key:o,ref:r.ref,props:r.props,_owner:r._owner}}function Ne(r){return typeof r=="object"&&r!==null&&r.$$typeof===G}function An(r){var o={"=":"=0",":":"=2"};return"$"+r.replace(/[=:]/g,function(c){return o[c]})}var Lt=/\/+/g;function $e(r,o){return typeof r=="object"&&r!==null&&r.key!=null?An(""+r.key):o.toString(36)}function pe(r,o,c,v,l){var _=typeof r;(_==="undefined"||_==="boolean")&&(r=null);var C=!1;if(r===null)C=!0;else switch(_){case"string":case"number":C=!0;break;case"object":switch(r.$$typeof){case G:case gn:C=!0}}if(C)return C=r,l=l(C),r=v===""?"."+$e(C,0):v,Dt(l)?(c="",r!=null&&(c=r.replace(Lt,"$&/")+"/"),pe(l,o,c,"",function(T){return T})):l!=null&&(Ne(l)&&(l=Pn(l,c+(!l.key||C&&C.key===l.key?"":(""+l.key).replace(Lt,"$&/")+"/")+r)),o.push(l)),1;if(C=0,v=v===""?".":v+":",Dt(r))for(var b=0;b<r.length;b++){_=r[b];var m=v+$e(_,b);C+=pe(_,o,c,m,l)}else if(m=Tn(r),typeof m=="function")for(r=m.call(r),b=0;!(_=r.next()).done;)_=_.value,m=v+$e(_,b++),C+=pe(_,o,c,m,l);else if(_==="object")throw o=String(r),Error("Objects are not valid as a React child (found: "+(o==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":o)+"). If you meant to render a collection of children, use an array instead.");return C}function fe(r,o,c){if(r==null)return r;var v=[],l=0;return pe(r,v,"","",function(_){return o.call(c,_,l++)}),v}function xn(r){if(r._status===-1){var o=r._result;o=o(),o.then(function(c){(r._status===0||r._status===-1)&&(r._status=1,r._result=c)},function(c){(r._status===0||r._status===-1)&&(r._status=2,r._result=c)}),r._status===-1&&(r._status=0,r._result=o)}if(r._status===1)return r._result.default;throw r._result}var x={current:null},de={transition:null},jn={ReactCurrentDispatcher:x,ReactCurrentBatchConfig:de,ReactCurrentOwner:Me};function Bt(){throw Error("act(...) is not supported in production builds of React.")}p.Children={map:fe,forEach:function(r,o,c){fe(r,function(){o.apply(this,arguments)},c)},count:function(r){var o=0;return fe(r,function(){o++}),o},toArray:function(r){return fe(r,function(o){return o})||[]},only:function(r){if(!Ne(r))throw Error("React.Children.only expected to receive a single React element child.");return r}};p.Component=z;p.Fragment=bn;p.Profiler=En;p.PureComponent=De;p.StrictMode=_n;p.Suspense=Sn;p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jn;p.act=Bt;p.cloneElement=function(r,o,c){if(r==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+r+".");var v=Nt({},r.props),l=r.key,_=r.ref,C=r._owner;if(o!=null){if(o.ref!==void 0&&(_=o.ref,C=Me.current),o.key!==void 0&&(l=""+o.key),r.type&&r.type.defaultProps)var b=r.type.defaultProps;for(m in o)Wt.call(o,m)&&!Yt.hasOwnProperty(m)&&(v[m]=o[m]===void 0&&b!==void 0?b[m]:o[m])}var m=arguments.length-2;if(m===1)v.children=c;else if(1<m){b=Array(m);for(var T=0;T<m;T++)b[T]=arguments[T+2];v.children=b}return{$$typeof:G,type:r.type,key:l,ref:_,props:v,_owner:C}};p.createContext=function(r){return r={$$typeof:Cn,_currentValue:r,_currentValue2:r,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},r.Provider={$$typeof:Rn,_context:r},r.Consumer=r};p.createElement=zt;p.createFactory=function(r){var o=zt.bind(null,r);return o.type=r,o};p.createRef=function(){return{current:null}};p.forwardRef=function(r){return{$$typeof:wn,render:r}};p.isValidElement=Ne;p.lazy=function(r){return{$$typeof:On,_payload:{_status:-1,_result:r},_init:xn}};p.memo=function(r,o){return{$$typeof:kn,type:r,compare:o===void 0?null:o}};p.startTransition=function(r){var o=de.transition;de.transition={};try{r()}finally{de.transition=o}};p.unstable_act=Bt;p.useCallback=function(r,o){return x.current.useCallback(r,o)};p.useContext=function(r){return x.current.useContext(r)};p.useDebugValue=function(){};p.useDeferredValue=function(r){return x.current.useDeferredValue(r)};p.useEffect=function(r,o){return x.current.useEffect(r,o)};p.useId=function(){return x.current.useId()};p.useImperativeHandle=function(r,o,c){return x.current.useImperativeHandle(r,o,c)};p.useInsertionEffect=function(r,o){return x.current.useInsertionEffect(r,o)};p.useLayoutEffect=function(r,o){return x.current.useLayoutEffect(r,o)};p.useMemo=function(r,o){return x.current.useMemo(r,o)};p.useReducer=function(r,o,c){return x.current.useReducer(r,o,c)};p.useRef=function(r){return x.current.useRef(r)};p.useState=function(r){return x.current.useState(r)};p.useSyncExternalStore=function(r,o,c){return x.current.useSyncExternalStore(r,o,c)};p.useTransition=function(){return x.current.useTransition()};p.version="18.3.1"});var qt=Fe((d,ve)=>{"use strict";process.env.NODE_ENV!=="production"&&function(){"use strict";typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error);var r="18.3.1",o=Symbol.for("react.element"),c=Symbol.for("react.portal"),v=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),b=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),ye=Symbol.for("react.suspense_list"),L=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),Qt=Symbol.for("react.offscreen"),We=Symbol.iterator,Xt="@@iterator";function Ye(e){if(e===null||typeof e!="object")return null;var t=We&&e[We]||e[Xt];return typeof t=="function"?t:null}var ze={current:null},M={transition:null},P={current:null,isBatchingLegacy:!1,didScheduleLegacyUpdate:!1},j={current:null},B={},J=null;function Be(e){J=e}B.setExtraStackFrame=function(e){J=e},B.getCurrentStack=null,B.getStackAddendum=function(){var e="";J&&(e+=J);var t=B.getCurrentStack;return t&&(e+=t()||""),e};var Jt=!1,Zt=!1,er=!1,tr=!1,rr=!1,N={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:M,ReactCurrentOwner:j};N.ReactDebugCurrentFrame=B,N.ReactCurrentActQueue=P;function U(e){{for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];He("warn",e,n)}}function h(e){{for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];He("error",e,n)}}function He(e,t,n){{var a=N.ReactDebugCurrentFrame,u=a.getStackAddendum();u!==""&&(t+="%s",n=n.concat([u]));var s=n.map(function(i){return String(i)});s.unshift("Warning: "+t),Function.prototype.apply.call(console[e],console,s)}}var qe={};function he(e,t){{var n=e.constructor,a=n&&(n.displayName||n.name)||"ReactClass",u=a+"."+t;if(qe[u])return;h("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",t,a),qe[u]=!0}}var Ke={isMounted:function(e){return!1},enqueueForceUpdate:function(e,t,n){he(e,"forceUpdate")},enqueueReplaceState:function(e,t,n,a){he(e,"replaceState")},enqueueSetState:function(e,t,n,a){he(e,"setState")}},I=Object.assign,me={};Object.freeze(me);function $(e,t,n){this.props=e,this.context=t,this.refs=me,this.updater=n||Ke}$.prototype.isReactComponent={},$.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},$.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};{var ge={isMounted:["isMounted","Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],replaceState:["replaceState","Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]},nr=function(e,t){Object.defineProperty($.prototype,e,{get:function(){U("%s(...) is deprecated in plain JavaScript React classes. %s",t[0],t[1])}})};for(var be in ge)ge.hasOwnProperty(be)&&nr(be,ge[be])}function Ge(){}Ge.prototype=$.prototype;function _e(e,t,n){this.props=e,this.context=t,this.refs=me,this.updater=n||Ke}var Ee=_e.prototype=new Ge;Ee.constructor=_e,I(Ee,$.prototype),Ee.isPureReactComponent=!0;function ar(){var e={current:null};return Object.seal(e),e}var or=Array.isArray;function Z(e){return or(e)}function ur(e){{var t=typeof Symbol=="function"&&Symbol.toStringTag,n=t&&e[Symbol.toStringTag]||e.constructor.name||"Object";return n}}function ir(e){try{return Qe(e),!1}catch{return!0}}function Qe(e){return""+e}function ee(e){if(ir(e))return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",ur(e)),Qe(e)}function sr(e,t,n){var a=e.displayName;if(a)return a;var u=t.displayName||t.name||"";return u!==""?n+"("+u+")":n}function Xe(e){return e.displayName||"Context"}function F(e){if(e==null)return null;if(typeof e.tag=="number"&&h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case v:return"Fragment";case c:return"Portal";case _:return"Profiler";case l:return"StrictMode";case T:return"Suspense";case ye:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case b:var t=e;return Xe(t)+".Consumer";case C:var n=e;return Xe(n._context)+".Provider";case m:return sr(e,e.render,"ForwardRef");case L:var a=e.displayName||null;return a!==null?a:F(e.type)||"Memo";case X:{var u=e,s=u._payload,i=u._init;try{return F(i(s))}catch{return null}}}return null}var H=Object.prototype.hasOwnProperty,Je={key:!0,ref:!0,__self:!0,__source:!0},Ze,et,Re;Re={};function tt(e){if(H.call(e,"ref")){var t=Object.getOwnPropertyDescriptor(e,"ref").get;if(t&&t.isReactWarning)return!1}return e.ref!==void 0}function rt(e){if(H.call(e,"key")){var t=Object.getOwnPropertyDescriptor(e,"key").get;if(t&&t.isReactWarning)return!1}return e.key!==void 0}function cr(e,t){var n=function(){Ze||(Ze=!0,h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};n.isReactWarning=!0,Object.defineProperty(e,"key",{get:n,configurable:!0})}function lr(e,t){var n=function(){et||(et=!0,h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};n.isReactWarning=!0,Object.defineProperty(e,"ref",{get:n,configurable:!0})}function fr(e){if(typeof e.ref=="string"&&j.current&&e.__self&&j.current.stateNode!==e.__self){var t=F(j.current.type);Re[t]||(h('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',t,e.ref),Re[t]=!0)}}var Ce=function(e,t,n,a,u,s,i){var f={$$typeof:o,type:e,key:t,ref:n,props:i,_owner:s};return f._store={},Object.defineProperty(f._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(f,"_self",{configurable:!1,enumerable:!1,writable:!1,value:a}),Object.defineProperty(f,"_source",{configurable:!1,enumerable:!1,writable:!1,value:u}),Object.freeze&&(Object.freeze(f.props),Object.freeze(f)),f};function pr(e,t,n){var a,u={},s=null,i=null,f=null,y=null;if(t!=null){tt(t)&&(i=t.ref,fr(t)),rt(t)&&(ee(t.key),s=""+t.key),f=t.__self===void 0?null:t.__self,y=t.__source===void 0?null:t.__source;for(a in t)H.call(t,a)&&!Je.hasOwnProperty(a)&&(u[a]=t[a])}var g=arguments.length-2;if(g===1)u.children=n;else if(g>1){for(var E=Array(g),R=0;R<g;R++)E[R]=arguments[R+2];Object.freeze&&Object.freeze(E),u.children=E}if(e&&e.defaultProps){var w=e.defaultProps;for(a in w)u[a]===void 0&&(u[a]=w[a])}if(s||i){var S=typeof e=="function"?e.displayName||e.name||"Unknown":e;s&&cr(u,S),i&&lr(u,S)}return Ce(e,s,i,f,y,j.current,u)}function dr(e,t){var n=Ce(e.type,t,e.ref,e._self,e._source,e._owner,e.props);return n}function vr(e,t,n){if(e==null)throw new Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a,u=I({},e.props),s=e.key,i=e.ref,f=e._self,y=e._source,g=e._owner;if(t!=null){tt(t)&&(i=t.ref,g=j.current),rt(t)&&(ee(t.key),s=""+t.key);var E;e.type&&e.type.defaultProps&&(E=e.type.defaultProps);for(a in t)H.call(t,a)&&!Je.hasOwnProperty(a)&&(t[a]===void 0&&E!==void 0?u[a]=E[a]:u[a]=t[a])}var R=arguments.length-2;if(R===1)u.children=n;else if(R>1){for(var w=Array(R),S=0;S<R;S++)w[S]=arguments[S+2];u.children=w}return Ce(e.type,s,i,f,y,g,u)}function V(e){return typeof e=="object"&&e!==null&&e.$$typeof===o}var nt=".",yr=":";function hr(e){var t=/[=:]/g,n={"=":"=0",":":"=2"},a=e.replace(t,function(u){return n[u]});return"$"+a}var at=!1,mr=/\/+/g;function ot(e){return e.replace(mr,"$&/")}function we(e,t){return typeof e=="object"&&e!==null&&e.key!=null?(ee(e.key),hr(""+e.key)):t.toString(36)}function te(e,t,n,a,u){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(s){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case o:case c:i=!0}}if(i){var f=e,y=u(f),g=a===""?nt+we(f,0):a;if(Z(y)){var E="";g!=null&&(E=ot(g)+"/"),te(y,t,E,"",function(ln){return ln})}else y!=null&&(V(y)&&(y.key&&(!f||f.key!==y.key)&&ee(y.key),y=dr(y,n+(y.key&&(!f||f.key!==y.key)?ot(""+y.key)+"/":"")+g)),t.push(y));return 1}var R,w,S=0,O=a===""?nt:a+yr;if(Z(e))for(var ce=0;ce<e.length;ce++)R=e[ce],w=O+we(R,ce),S+=te(R,t,n,w,u);else{var Ie=Ye(e);if(typeof Ie=="function"){var At=e;Ie===At.entries&&(at||U("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),at=!0);for(var sn=Ie.call(At),xt,cn=0;!(xt=sn.next()).done;)R=xt.value,w=O+we(R,cn++),S+=te(R,t,n,w,u)}else if(s==="object"){var jt=String(e);throw new Error("Objects are not valid as a React child (found: "+(jt==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":jt)+"). If you meant to render a collection of children, use an array instead.")}}return S}function re(e,t,n){if(e==null)return e;var a=[],u=0;return te(e,a,"","",function(s){return t.call(n,s,u++)}),a}function gr(e){var t=0;return re(e,function(){t++}),t}function br(e,t,n){re(e,function(){t.apply(this,arguments)},n)}function _r(e){return re(e,function(t){return t})||[]}function Er(e){if(!V(e))throw new Error("React.Children.only expected to receive a single React element child.");return e}function Rr(e){var t={$$typeof:b,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};t.Provider={$$typeof:C,_context:t};var n=!1,a=!1,u=!1;{var s={$$typeof:b,_context:t};Object.defineProperties(s,{Provider:{get:function(){return a||(a=!0,h("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")),t.Provider},set:function(i){t.Provider=i}},_currentValue:{get:function(){return t._currentValue},set:function(i){t._currentValue=i}},_currentValue2:{get:function(){return t._currentValue2},set:function(i){t._currentValue2=i}},_threadCount:{get:function(){return t._threadCount},set:function(i){t._threadCount=i}},Consumer:{get:function(){return n||(n=!0,h("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")),t.Consumer}},displayName:{get:function(){return t.displayName},set:function(i){u||(U("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.",i),u=!0)}}}),t.Consumer=s}return t._currentRenderer=null,t._currentRenderer2=null,t}var q=-1,Se=0,ut=1,Cr=2;function wr(e){if(e._status===q){var t=e._result,n=t();if(n.then(function(s){if(e._status===Se||e._status===q){var i=e;i._status=ut,i._result=s}},function(s){if(e._status===Se||e._status===q){var i=e;i._status=Cr,i._result=s}}),e._status===q){var a=e;a._status=Se,a._result=n}}if(e._status===ut){var u=e._result;return u===void 0&&h(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,u),"default"in u||h(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,u),u.default}else throw e._result}function Sr(e){var t={_status:q,_result:e},n={$$typeof:X,_payload:t,_init:wr};{var a,u;Object.defineProperties(n,{defaultProps:{configurable:!0,get:function(){return a},set:function(s){h("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),a=s,Object.defineProperty(n,"defaultProps",{enumerable:!0})}},propTypes:{configurable:!0,get:function(){return u},set:function(s){h("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),u=s,Object.defineProperty(n,"propTypes",{enumerable:!0})}}})}return n}function kr(e){e!=null&&e.$$typeof===L?h("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."):typeof e!="function"?h("forwardRef requires a render function but was given %s.",e===null?"null":typeof e):e.length!==0&&e.length!==2&&h("forwardRef render functions accept exactly two parameters: props and ref. %s",e.length===1?"Did you forget to use the ref parameter?":"Any additional parameter will be undefined."),e!=null&&(e.defaultProps!=null||e.propTypes!=null)&&h("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");var t={$$typeof:m,render:e};{var n;Object.defineProperty(t,"displayName",{enumerable:!1,configurable:!0,get:function(){return n},set:function(a){n=a,!e.name&&!e.displayName&&(e.displayName=a)}})}return t}var it;it=Symbol.for("react.module.reference");function st(e){return!!(typeof e=="string"||typeof e=="function"||e===v||e===_||rr||e===l||e===T||e===ye||tr||e===Qt||Jt||Zt||er||typeof e=="object"&&e!==null&&(e.$$typeof===X||e.$$typeof===L||e.$$typeof===C||e.$$typeof===b||e.$$typeof===m||e.$$typeof===it||e.getModuleId!==void 0))}function Or(e,t){st(e)||h("memo: The first argument must be a component. Instead received: %s",e===null?"null":typeof e);var n={$$typeof:L,type:e,compare:t===void 0?null:t};{var a;Object.defineProperty(n,"displayName",{enumerable:!1,configurable:!0,get:function(){return a},set:function(u){a=u,!e.name&&!e.displayName&&(e.displayName=u)}})}return n}function A(){var e=ze.current;return e===null&&h(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`),e}function Tr(e){var t=A();if(e._context!==void 0){var n=e._context;n.Consumer===e?h("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?"):n.Provider===e&&h("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?")}return t.useContext(e)}function Pr(e){var t=A();return t.useState(e)}function Ar(e,t,n){var a=A();return a.useReducer(e,t,n)}function xr(e){var t=A();return t.useRef(e)}function jr(e,t){var n=A();return n.useEffect(e,t)}function Ir(e,t){var n=A();return n.useInsertionEffect(e,t)}function Fr(e,t){var n=A();return n.useLayoutEffect(e,t)}function $r(e,t){var n=A();return n.useCallback(e,t)}function Dr(e,t){var n=A();return n.useMemo(e,t)}function Lr(e,t,n){var a=A();return a.useImperativeHandle(e,t,n)}function Mr(e,t){{var n=A();return n.useDebugValue(e,t)}}function Nr(){var e=A();return e.useTransition()}function Ur(e){var t=A();return t.useDeferredValue(e)}function Vr(){var e=A();return e.useId()}function Wr(e,t,n){var a=A();return a.useSyncExternalStore(e,t,n)}var K=0,ct,lt,ft,pt,dt,vt,yt;function ht(){}ht.__reactDisabledLog=!0;function Yr(){{if(K===0){ct=console.log,lt=console.info,ft=console.warn,pt=console.error,dt=console.group,vt=console.groupCollapsed,yt=console.groupEnd;var e={configurable:!0,enumerable:!0,value:ht,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}K++}}function zr(){{if(K--,K===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:I({},e,{value:ct}),info:I({},e,{value:lt}),warn:I({},e,{value:ft}),error:I({},e,{value:pt}),group:I({},e,{value:dt}),groupCollapsed:I({},e,{value:vt}),groupEnd:I({},e,{value:yt})})}K<0&&h("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var ke=N.ReactCurrentDispatcher,Oe;function ne(e,t,n){{if(Oe===void 0)try{throw Error()}catch(u){var a=u.stack.trim().match(/\n( *(at )?)/);Oe=a&&a[1]||""}return`
`+Oe+e}}var Te=!1,ae;{var Br=typeof WeakMap=="function"?WeakMap:Map;ae=new Br}function mt(e,t){if(!e||Te)return"";{var n=ae.get(e);if(n!==void 0)return n}var a;Te=!0;var u=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var s;s=ke.current,ke.current=null,Yr();try{if(t){var i=function(){throw Error()};if(Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(O){a=O}Reflect.construct(e,[],i)}else{try{i.call()}catch(O){a=O}e.call(i.prototype)}}else{try{throw Error()}catch(O){a=O}e()}}catch(O){if(O&&a&&typeof O.stack=="string"){for(var f=O.stack.split(`
`),y=a.stack.split(`
`),g=f.length-1,E=y.length-1;g>=1&&E>=0&&f[g]!==y[E];)E--;for(;g>=1&&E>=0;g--,E--)if(f[g]!==y[E]){if(g!==1||E!==1)do if(g--,E--,E<0||f[g]!==y[E]){var R=`
`+f[g].replace(" at new "," at ");return e.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",e.displayName)),typeof e=="function"&&ae.set(e,R),R}while(g>=1&&E>=0);break}}}finally{Te=!1,ke.current=s,zr(),Error.prepareStackTrace=u}var w=e?e.displayName||e.name:"",S=w?ne(w):"";return typeof e=="function"&&ae.set(e,S),S}function Hr(e,t,n){return mt(e,!1)}function qr(e){var t=e.prototype;return!!(t&&t.isReactComponent)}function oe(e,t,n){if(e==null)return"";if(typeof e=="function")return mt(e,qr(e));if(typeof e=="string")return ne(e);switch(e){case T:return ne("Suspense");case ye:return ne("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case m:return Hr(e.render);case L:return oe(e.type,t,n);case X:{var a=e,u=a._payload,s=a._init;try{return oe(s(u),t,n)}catch{}}}return""}var gt={},bt=N.ReactDebugCurrentFrame;function ue(e){if(e){var t=e._owner,n=oe(e.type,e._source,t?t.type:null);bt.setExtraStackFrame(n)}else bt.setExtraStackFrame(null)}function Kr(e,t,n,a,u){{var s=Function.call.bind(H);for(var i in e)if(s(e,i)){var f=void 0;try{if(typeof e[i]!="function"){var y=Error((a||"React class")+": "+n+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw y.name="Invariant Violation",y}f=e[i](t,i,a,n,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(g){f=g}f&&!(f instanceof Error)&&(ue(u),h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",a||"React class",n,i,typeof f),ue(null)),f instanceof Error&&!(f.message in gt)&&(gt[f.message]=!0,ue(u),h("Failed %s type: %s",n,f.message),ue(null))}}}function W(e){if(e){var t=e._owner,n=oe(e.type,e._source,t?t.type:null);Be(n)}else Be(null)}var Pe;Pe=!1;function _t(){if(j.current){var e=F(j.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}function Gr(e){if(e!==void 0){var t=e.fileName.replace(/^.*[\\\/]/,""),n=e.lineNumber;return`

Check your code at `+t+":"+n+"."}return""}function Qr(e){return e!=null?Gr(e.__source):""}var Et={};function Xr(e){var t=_t();if(!t){var n=typeof e=="string"?e:e.displayName||e.name;n&&(t=`

Check the top-level render call using <`+n+">.")}return t}function Rt(e,t){if(!(!e._store||e._store.validated||e.key!=null)){e._store.validated=!0;var n=Xr(t);if(!Et[n]){Et[n]=!0;var a="";e&&e._owner&&e._owner!==j.current&&(a=" It was passed a child from "+F(e._owner.type)+"."),W(e),h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',n,a),W(null)}}}function Ct(e,t){if(typeof e=="object"){if(Z(e))for(var n=0;n<e.length;n++){var a=e[n];V(a)&&Rt(a,t)}else if(V(e))e._store&&(e._store.validated=!0);else if(e){var u=Ye(e);if(typeof u=="function"&&u!==e.entries)for(var s=u.call(e),i;!(i=s.next()).done;)V(i.value)&&Rt(i.value,t)}}}function wt(e){{var t=e.type;if(t==null||typeof t=="string")return;var n;if(typeof t=="function")n=t.propTypes;else if(typeof t=="object"&&(t.$$typeof===m||t.$$typeof===L))n=t.propTypes;else return;if(n){var a=F(t);Kr(n,e.props,"prop",a,e)}else if(t.PropTypes!==void 0&&!Pe){Pe=!0;var u=F(t);h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",u||"Unknown")}typeof t.getDefaultProps=="function"&&!t.getDefaultProps.isReactClassApproved&&h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function Jr(e){{for(var t=Object.keys(e.props),n=0;n<t.length;n++){var a=t[n];if(a!=="children"&&a!=="key"){W(e),h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",a),W(null);break}}e.ref!==null&&(W(e),h("Invalid attribute `ref` supplied to `React.Fragment`."),W(null))}}function St(e,t,n){var a=st(e);if(!a){var u="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(u+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var s=Qr(t);s?u+=s:u+=_t();var i;e===null?i="null":Z(e)?i="array":e!==void 0&&e.$$typeof===o?(i="<"+(F(e.type)||"Unknown")+" />",u=" Did you accidentally export a JSX literal instead of a component?"):i=typeof e,h("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",i,u)}var f=pr.apply(this,arguments);if(f==null)return f;if(a)for(var y=2;y<arguments.length;y++)Ct(arguments[y],e);return e===v?Jr(f):wt(f),f}var kt=!1;function Zr(e){var t=St.bind(null,e);return t.type=e,kt||(kt=!0,U("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")),Object.defineProperty(t,"type",{enumerable:!1,get:function(){return U("Factory.type is deprecated. Access the class directly before passing it to createFactory."),Object.defineProperty(this,"type",{value:e}),e}}),t}function en(e,t,n){for(var a=vr.apply(this,arguments),u=2;u<arguments.length;u++)Ct(arguments[u],a.type);return wt(a),a}function tn(e,t){var n=M.transition;M.transition={};var a=M.transition;M.transition._updatedFibers=new Set;try{e()}finally{if(M.transition=n,n===null&&a._updatedFibers){var u=a._updatedFibers.size;u>10&&U("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."),a._updatedFibers.clear()}}}var Ot=!1,ie=null;function rn(e){if(ie===null)try{var t=("require"+Math.random()).slice(0,7),n=ve&&ve[t];ie=n.call(ve,"timers").setImmediate}catch{ie=function(u){Ot===!1&&(Ot=!0,typeof MessageChannel>"u"&&h("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));var s=new MessageChannel;s.port1.onmessage=u,s.port2.postMessage(void 0)}}return ie(e)}var Y=0,Tt=!1;function Pt(e){{var t=Y;Y++,P.current===null&&(P.current=[]);var n=P.isBatchingLegacy,a;try{if(P.isBatchingLegacy=!0,a=e(),!n&&P.didScheduleLegacyUpdate){var u=P.current;u!==null&&(P.didScheduleLegacyUpdate=!1,je(u))}}catch(w){throw se(t),w}finally{P.isBatchingLegacy=n}if(a!==null&&typeof a=="object"&&typeof a.then=="function"){var s=a,i=!1,f={then:function(w,S){i=!0,s.then(function(O){se(t),Y===0?Ae(O,w,S):w(O)},function(O){se(t),S(O)})}};return!Tt&&typeof Promise<"u"&&Promise.resolve().then(function(){}).then(function(){i||(Tt=!0,h("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"))}),f}else{var y=a;if(se(t),Y===0){var g=P.current;g!==null&&(je(g),P.current=null);var E={then:function(w,S){P.current===null?(P.current=[],Ae(y,w,S)):w(y)}};return E}else{var R={then:function(w,S){w(y)}};return R}}}}function se(e){e!==Y-1&&h("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "),Y=e}function Ae(e,t,n){{var a=P.current;if(a!==null)try{je(a),rn(function(){a.length===0?(P.current=null,t(e)):Ae(e,t,n)})}catch(u){n(u)}else t(e)}}var xe=!1;function je(e){if(!xe){xe=!0;var t=0;try{for(;t<e.length;t++){var n=e[t];do n=n(!0);while(n!==null)}e.length=0}catch(a){throw e=e.slice(t+1),a}finally{xe=!1}}}var nn=St,an=en,on=Zr,un={map:re,forEach:br,count:gr,toArray:_r,only:Er};d.Children=un,d.Component=$,d.Fragment=v,d.Profiler=_,d.PureComponent=_e,d.StrictMode=l,d.Suspense=T,d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N,d.act=Pt,d.cloneElement=an,d.createContext=Rr,d.createElement=nn,d.createFactory=on,d.createRef=ar,d.forwardRef=kr,d.isValidElement=V,d.lazy=Sr,d.memo=Or,d.startTransition=tn,d.unstable_act=Pt,d.useCallback=$r,d.useContext=Tr,d.useDebugValue=Mr,d.useDeferredValue=Ur,d.useEffect=jr,d.useId=Vr,d.useImperativeHandle=Lr,d.useInsertionEffect=Ir,d.useLayoutEffect=Fr,d.useMemo=Dr,d.useReducer=Ar,d.useRef=xr,d.useState=Pr,d.useSyncExternalStore=Wr,d.useTransition=Nr,d.version=r,typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error)}()});var Kt=Fe((Nn,Ue)=>{"use strict";process.env.NODE_ENV==="production"?Ue.exports=Ht():Ue.exports=qt()});var Dn={};hn(Dn,{changeLocale:()=>Ve,initialization:()=>In,useIntl:()=>$n});module.exports=mn(Dn);var Q=Ft(require("format-message")),Gt=Ft(Kt()),k={languages:[],localeFromPhone:null,defaultFallback:null,locale:null},D={current:null,namespaces:{},translations:{}},Ve=r=>r&&!D.translations[r]?(console.warn(`Locale "${r}" not found`),null):(Q.default.setup({locale:r,translations:D.translations[k.locale]}),k.locale=r,console.warn("dbg:vvv",Q.default.setup({locale:k.locale,translations:D.translations[k.locale]})),r),In=({localeFromPhone:r,languages:o,defaultFallback:c=null})=>{if(k.localeFromPhone=r(),!(!o||!Array.isArray(o)||o.length===0)){for(let v of o){let l=v;if(!l.locale){console.warn("Check language pack for locales");continue}if(!l.translations){console.warn(`Not found "translations" object in ${l.locale} locale`);continue}k.languages.push({locale:l.locale,meta:l.meta}),k.defaultFallback||(k.defaultFallback=l.locale),D.translations[l.locale]=l.translations}return c&&!D.translations[c]?console.warn("Fallback language not found in language packs"):c&&(k.defaultFallback=c),console.warn("dbg:buffer.translations",{locale:k.defaultFallback,translations:D.translations[k.defaultFallback]}),Q.default.setup({locale:k.defaultFallback,translations:D.translations[k.defaultFallback]}),Ve(k.localeFromPhone)}},Fn=r=>k.languages.map(o=>({selected:r===o.locale,...o})),$n=()=>{let r=(0,Gt.useMemo)(()=>({locale:k.locale||k.defaultFallback}),[k.locale]);return{getLanguages:()=>Fn(r.locale),locale:r.locale,t:Q.default,changeLocale:Ve}};0&&(module.exports={changeLocale,initialization,useIntl});
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react.development.js:
  (**
   * @license React
   * react.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
