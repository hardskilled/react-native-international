var g=Object.create;var c=Object.defineProperty;var m=Object.getOwnPropertyDescriptor;var F=Object.getOwnPropertyNames;var d=Object.getPrototypeOf,b=Object.prototype.hasOwnProperty;var k=(a,l)=>{for(var t in l)c(a,t,{get:l[t],enumerable:!0})},f=(a,l,t,s)=>{if(l&&typeof l=="object"||typeof l=="function")for(let n of F(l))!b.call(a,n)&&n!==t&&c(a,n,{get:()=>l[n],enumerable:!(s=m(l,n))||s.enumerable});return a};var L=(a,l,t)=>(t=a!=null?g(d(a)):{},f(l||!a||!a.__esModule?c(t,"default",{value:a,enumerable:!0}):t,a)),S=a=>f(c({},"__esModule",{value:!0}),a);var U={};k(U,{changeLocale:()=>u,initialization:()=>h,useIntl:()=>w});module.exports=S(U);var r=L(require("format-message"));var p=require("pullstate"),i=new p.Store({locale:null});var o={languages:[],localeFromPhone:null,defaultFallback:null,locale:null},e={current:null,namespaces:{},translations:{}},u=a=>a&&!e.translations[a]?(console.warn(`Locale "${a}" not found`),null):(o.locale=a,r.default.setup({locale:o.locale,translations:{...e.translations[o.locale]}}),console.warn("dbg:vvv",r.default.setup({locale:o.locale,translations:e.translations[o.locale]})),i.update(l=>{l.locale=a}),a),h=({localeFromPhone:a,languages:l,defaultFallback:t=null})=>{if(o.localeFromPhone=a(),!(!l||!Array.isArray(l)||l.length===0)){for(let s of l){let n=s;if(!n.locale){console.warn("Check language pack for locales");continue}if(!n.translations){console.warn(`Not found "translations" object in ${n.locale} locale`);continue}o.languages.push({locale:n.locale,meta:n.meta}),o.defaultFallback||(o.defaultFallback=n.locale),e.translations[n.locale]=n.translations}return t&&!e.translations[t]?console.warn("Fallback language not found in language packs"):t&&(o.defaultFallback=t),console.warn("dbg:buffer.translations",{locale:o.defaultFallback,translations:e.translations[o.defaultFallback]}),r.default.setup({locale:o.defaultFallback,translations:{...e.translations[o.defaultFallback]}}),u(o.localeFromPhone)}},I=a=>o.languages.map(l=>({selected:a===l.locale,...l})),w=()=>{let a=i.useState(l=>l.locale||o.defaultFallback);return{getLanguages:()=>I(a),locale:a,t:r.default,changeLocale:u}};0&&(module.exports={changeLocale,initialization,useIntl});
