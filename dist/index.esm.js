import s from"format-message";import{Store as u}from"pullstate";var r=new u({locale:null});var o={languages:[],localeFromPhone:null,defaultFallback:null,locale:null},e={translations:{}},c=n=>n&&!e.translations[n]?(console.warn(`Locale "${n}" not found`),null):(o.locale=n,console.warn("dbg:000",[o.locale,e.translations[o.locale]]),s.setup({locale:o.locale,translations:e.translations[o.locale]}),r.update(t=>{t.locale=n}),n),F=({localeFromPhone:n,languages:t,defaultFallback:a=null})=>{if(o.localeFromPhone=n(),!(!t||!Array.isArray(t)||t.length===0)){for(let i of t){let l=i;if(!l.locale){console.warn("Check language pack for locales");continue}if(!l.translations){console.warn(`Not found "translations" object in ${l.locale} locale`);continue}o.languages.push({locale:l.locale,meta:l.meta}),o.defaultFallback||(o.defaultFallback=l.locale),e.translations[l.locale]=l.translations}return a&&!e.translations[a]?console.warn("Fallback language not found in language packs"):a&&(o.defaultFallback=a),console.warn("dbg:buffer.translations",o),s.setup({locale:o.defaultFallback,translations:e.translations[o.defaultFallback]}),c(o.localeFromPhone)}},d=()=>{let n=r.useState(a=>a.locale||o.defaultFallback);return{getLanguages:()=>o.languages.map(a=>({selected:n===a.locale,...a})),locale:n,t:s,changeLocale:c}};export{c as changeLocale,F as initialization,d as useIntl};
