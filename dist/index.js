var I=Object.create;var r=Object.defineProperty;var L=Object.getOwnPropertyDescriptor;var S=Object.getOwnPropertyNames;var F=Object.getPrototypeOf,h=Object.prototype.hasOwnProperty;var U=(t,n)=>{for(var o in n)r(t,o,{get:n[o],enumerable:!0})},p=(t,n,o,l)=>{if(n&&typeof n=="object"||typeof n=="function")for(let e of S(n))!h.call(t,e)&&e!==o&&r(t,e,{get:()=>n[e],enumerable:!(l=L(n,e))||l.enumerable});return t};var d=(t,n,o)=>(o=t!=null?I(F(t)):{},p(n||!t||!t.__esModule?r(o,"default",{value:t,enumerable:!0}):o,t)),x=t=>p(r({},"__esModule",{value:!0}),t);var w={};U(w,{changeLocale:()=>u,initialization:()=>O,useIntl:()=>P});module.exports=x(w);var i=d(require("i18next"));var g=require("pullstate"),c=new g.Store({locale:null});var a={languages:[],localeFromPhone:null,defaultFallback:null,locale:null},m={translations:[]},u=t=>t&&!m.translations.includes(t)?(console.warn(`Locale "${t}" not found`),null):(a.locale=t,i.default.changeLanguage(t,()=>{c.update(n=>{n.locale=t})}),t),O=async({localeFromPhone:t,languages:n,defaultFallback:o=null,debug:l=!1},e=null)=>{a.localeFromPhone=t();let f={compatibilityJSON:"v3",lng:o,debug:l,resources:{}};for(let s of n)f.resources[s.locale]={translation:s.translations},m.translations.push(s.locale);return await i.default.init(f),u(a.localeFromPhone)},b=t=>a.languages.map(n=>({selected:t===n.locale,...n})),P=()=>{let t=c.useState(n=>n.locale||a.defaultFallback);return{getLanguages:()=>b(t),locale:t,t:i.default.t,changeLocale:u}};0&&(module.exports={changeLocale,initialization,useIntl});
