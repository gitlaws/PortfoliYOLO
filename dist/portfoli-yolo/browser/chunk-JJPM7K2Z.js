import{J as c,N as n,h as a}from"./chunk-MOKTRCHZ.js";var i=function(e){return e.Light="light",e.Dark="dark",e}(i||{});var s=(()=>{let t=class t{getItem(r){try{return localStorage.getItem(r)}catch(o){return console.error(`Error getting item from localStorage: ${o}`),null}}setItem(r,o){try{localStorage.setItem(r,o)}catch(m){console.error(`Error setting item in localStorage: ${m}`)}}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=c({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var p=(()=>{let t=class t{constructor(r){this.storageService=r,this.themeKey="theme";let o=this.storageService.getItem(this.themeKey)||i.Light;this.themeSubject=new a(o)}get currentTheme(){return this.themeSubject.asObservable()}toggleTheme(){let r=this.themeSubject.value===i.Light?i.Dark:i.Light;this.storageService.setItem(this.themeKey,r),this.themeSubject.next(r)}};t.\u0275fac=function(o){return new(o||t)(n(s))},t.\u0275prov=c({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();export{i as a,s as b,p as c};
