import l from"i18next";import{Store as f}from"pullstate";var a=new f({locale:null});var o={languages:[],localeFromPhone:null,defaultFallback:null,locale:null},s={translations:[]},i=t=>t&&!s.translations.includes(t)?(console.warn(`Locale "${t}" not found`),null):(o.locale=t,l.changeLanguage(t,()=>{a.update(n=>{n.locale=t})}),t),F=async({localeFromPhone:t,languages:n,defaultFallback:c=null,debug:u=!1})=>{o.localeFromPhone=t();let r={lng:c,debug:u,resources:{}};for(let e of n)r.resources[e.locale]={translation:e.translations},s.translations.push(e.locale);return await l.init(r),i(o.localeFromPhone)},p=t=>o.languages.map(n=>({selected:t===n.locale,...n})),S=()=>{let t=a.useState(n=>n.locale||o.defaultFallback);return{getLanguages:()=>p(t),locale:t,t:l.t,changeLocale:i}};export{i as changeLocale,F as initialization,S as useIntl};
