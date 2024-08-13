import{a as R,c as A,d as T,e as G}from"./chunk-SVWBUKHA.js";import"./chunk-J3CG2RE6.js";import"./chunk-4E2PF6OB.js";import{$a as Z,Aa as Y,Ba as r,Ca as a,Da as s,Ea as H,Fa as m,Ga as w,Ha as O,Ia as g,Ja as V,Ka as P,R as d,Y as k,Z as M,_ as j,_a as v,ab as N,bb as f,da as z,fb as h,gb as X,hb as C,ma as l,na as _,wa as F,xa as I,ya as c,za as x}from"./chunk-WUQCGSM3.js";var B=[{path:"",loadComponent:()=>import("./chunk-VMNAGEEL.js").then(o=>o.HomeComponent)},{path:"Home",loadComponent:()=>import("./chunk-VMNAGEEL.js").then(o=>o.HomeComponent)},{path:"projects",loadComponent:()=>import("./chunk-OTYKAUJR.js").then(o=>o.ProjectsComponent)},{path:"profile",loadComponent:()=>import("./chunk-RFA5SR3L.js").then(o=>o.ProfileComponent)}];var W={providers:[G(B)]};var Q=(()=>{let n=class n{};n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=d({type:n,selectors:[["app-cube-logo"]],standalone:!0,features:[g],decls:9,vars:0,consts:[[1,"cube-wrapper"],[1,"cube"],[1,"face","front"],[1,"face","back"],[1,"face","right"],[1,"face","left"],[1,"face","top"],[1,"face","bottom"],[1,"shadow"]],template:function(t,e){t&1&&(r(0,"div",0)(1,"div",1),s(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7),a(),s(8,"div",8),a())},dependencies:[f],styles:[".cube-wrapper[_ngcontent-%COMP%]{perspective:1000px}.cube[_ngcontent-%COMP%]{position:relative;width:50px;height:50px;transform-style:preserve-3d;animation:_ngcontent-%COMP%_rotate 20s infinite}.face[_ngcontent-%COMP%]{position:absolute;width:50px;height:50px;border:1px solid #333;display:flex;justify-content:center;align-items:center;font-size:20px;color:#fff}.front[_ngcontent-%COMP%]{transform:rotateY(0) translateZ(25px);background-image:url(https://blog.flamingtext.com/blog/2024/08/11/flamingtext_com_1723343860_539275057.png),url(https://i.gifer.com/b6u.gif);background-size:contain;background-position:center;background-repeat:no-repeat}.back[_ngcontent-%COMP%]{transform:rotateX(180deg) translateZ(25px);background:url(https://i.gifer.com/ZNec.gif),#00008b;background-size:contain;background-position:center;background-repeat:no-repeat}.right[_ngcontent-%COMP%]{transform:rotateY(90deg) translateZ(25px);background:url(https://i.gifer.com/DDt.gif) #000;background-size:contain;background-position:center;background-repeat:no-repeat}.left[_ngcontent-%COMP%]{transform:rotateY(-90deg) translateZ(25px);background:url(https://i.gifer.com/Z23N.gif),#000;background-size:cover;background-position:center;background-repeat:no-repeat}.top[_ngcontent-%COMP%]{transform:rotateX(90deg) translateZ(25px);background:url(https://i.gifer.com/31Ck.gif);background-size:contain;background-position:center;background-repeat:no-repeat}.bottom[_ngcontent-%COMP%]{transform:rotateX(-90deg) translateZ(25px);background:url(https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnd3bzd0ZmE3bWZya205dHdmYnR3ODBtdzFjdGkzd2J3NDEzNjl1YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/YbgixxpzGS9Oe8ghP1/giphy.gif),#000;background-size:cover;background-position:center;background-repeat:no-repeat}@keyframes _ngcontent-%COMP%_rotate{0%,20%{transform:rotateX(0) rotateY(0)}40%,60%{transform:rotateX(360deg) rotateY(360deg)}80%,to{transform:rotateX(0) rotateY(0)}}@keyframes _ngcontent-%COMP%_bounce{0%,to{transform:translateY(0)}50%{transform:translateY(-20px)}}"]});let o=n;return o})();var te=o=>({transform:o}),S=(()=>{let n=class n{constructor(i,t){this.themeService=i,this.storageService=t,this.isAnimated=!1,this.tooltipText=""}ngOnInit(){this.themeService.currentTheme.subscribe(i=>{this.isDarkMode=i===h.Dark}),this.tooltipText=this.isDarkMode?"Toggle Light Mode":"Toggle Dark Mode"}toggleTheme(){this.storageService.setItem("theme",this.isDarkMode?h.Light:h.Dark),this.themeService.toggleTheme(),this.isAnimated=!0,setTimeout(()=>{this.isAnimated=!1},500),this.tooltipText=this.isDarkMode?"Toggle Light Mode":"Toggle Dark Mode"}};n.\u0275fac=function(t){return new(t||n)(_(C),_(X))},n.\u0275cmp=d({type:n,selectors:[["app-theme-toggle"]],standalone:!0,features:[g],decls:6,vars:17,consts:[[1,"parent"],[1,"child"],[1,"btn",3,"click"],[1,"btn__indicator",3,"ngStyle"],[1,"btn__icon-container",3,"title"]],template:function(t,e){t&1&&(r(0,"main",0)(1,"article",1)(2,"div",2),m("click",function(){return e.toggleTheme()}),r(3,"div",3)(4,"button",4),s(5,"i"),a()()()()()),t&2&&(l(2),x("darkmode",e.isDarkMode)("dark",e.isDarkMode)("light",!e.isDarkMode),l(),c("ngStyle",V(15,te,e.isDarkMode?"translateX(1.24em)":"none")),l(),x("darkmode-bg",e.isDarkMode),c("title",e.tooltipText),I("aria-label",e.isDarkMode?"Switch to light mode":"Switch to dark mode"),l(),Y(e.isDarkMode?"fas fa-moon btn__icon":"fas fa-sun btn__icon"),x("spin",e.isAnimated))},dependencies:[f,N],styles:["@keyframes _ngcontent-%COMP%_rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.parent[_ngcontent-%COMP%], .child[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;font-family:Arial,sans-serif;color:tomato}.btn[_ngcontent-%COMP%]{display:flex;align-items:center;padding:0;width:2.75em;height:1.5em;position:relative;cursor:pointer;border:1px solid #2a2a2a;border-radius:10em;background-color:#65758529;box-shadow:0 8px 40px #0003;transition:border-color .3s ease}.btn[_ngcontent-%COMP%]   .btn__indicator[_ngcontent-%COMP%]{width:1.4em;height:1.4em;position:absolute;border-radius:50%;box-shadow:0 8px 40px #0003;transition:transform .3s ease}.btn[_ngcontent-%COMP%]   .btn__icon-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:100%;height:100%;border:1px solid #2a2a2a;border-radius:50%;background-color:#b0e2ff}.btn[_ngcontent-%COMP%]   .btn__icon[_ngcontent-%COMP%]{font-size:12px;color:#f6b162;transition:color .3s ease}.btn[_ngcontent-%COMP%]   .btn__icon.spin[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_spin .5s ease-in-out 5}@keyframes _ngcontent-%COMP%_spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.btn[_ngcontent-%COMP%]   .darkmode-bg[_ngcontent-%COMP%]{background-color:#1a1a1a;color:silver}.btn[_ngcontent-%COMP%]:active{transform:scale(.95)}.btn.dark[_ngcontent-%COMP%]:hover{border-color:gold}.btn.light[_ngcontent-%COMP%]:hover{border-color:#7fff00}.btn[_ngcontent-%COMP%]   .btn.darkmode[_ngcontent-%COMP%]{background-color:#1a1a1a}.logo-toggle-button.hidden[_ngcontent-%COMP%]{background-color:#fc0;color:#333}"]});let o=n;return o})();function ne(o,n){if(o&1){let u=H();r(0,"ul",6),m("click",function(t){return k(u),M(t.stopPropagation())}),r(1,"li",7)(2,"a",8),O(3,"Projects"),a()(),r(4,"li",7)(5,"a",9),O(6,"Profile"),a()(),r(7,"li",7),s(8,"app-theme-toggle"),a(),r(9,"li",10)(10,"a",11),m("click",function(t){k(u);let e=w();return M(e.openLink(t,"https://www.linkedin.com/in/stanislaw-wasilewski-1bba55273/"))}),s(11,"i",12),a(),r(12,"a",13),m("click",function(t){k(u);let e=w();return M(e.openLink(t,"https://github.com/gitlaws"))}),s(13,"i",14),a(),r(14,"a",15),m("click",function(t){k(u);let e=w();return M(e.openLink(t,"https://www.youtube.com/@sm.w/streams"))}),s(15,"i",16),a(),r(16,"a",17),m("click",function(t){k(u);let e=w();return M(e.openLink(t,"https://discord.com"))}),s(17,"i",18),a()()()}if(o&2){let u=w();c("ngClass",u.theme),l(11),c("ngClass",u.theme),l(2),c("ngClass",u.theme),l(2),c("ngClass",u.theme),l(2),c("ngClass",u.theme)}}var q=(()=>{let n=class n{openLink(i,t){i.preventDefault(),window.open(t,"_blank","noopener")}constructor(i,t){this.elementRef=i,this.themeService=t,this.isMenuOpen=!1,this.menuItems=[{name:"Projects",url:"/home"},{name:"Profile",url:"/about"}]}ngOnInit(){document.addEventListener("click",this.documentClickHandler.bind(this)),this.themeService.currentTheme.subscribe(i=>{this.theme=i===h.Light?"light":"dark"})}ngOnDestroy(){document.removeEventListener("click",this.documentClickHandler.bind(this))}documentClickHandler(i){this.elementRef.nativeElement.contains(i.target)||(this.isMenuOpen=!1)}toggleMenu(i){i.stopPropagation(),this.isMenuOpen=!this.isMenuOpen}};n.\u0275fac=function(t){return new(t||n)(_(z),_(C))},n.\u0275cmp=d({type:n,selectors:[["app-cyber-menu"]],standalone:!0,features:[g],decls:6,vars:1,consts:[["aria-label","Menu",1,"dropdown-toggle",3,"click"],["width","40","height","30","viewBox","0 0 40 30"],["x1","0","y1","5","x2","40","y2","5"],["x1","0","y1","15","x2","40","y2","15"],["x1","0","y1","25","x2","40","y2","25"],["class","dropdown-menu",3,"ngClass","click",4,"ngIf"],[1,"dropdown-menu",3,"click","ngClass"],[1,"dropdown-item"],["routerLink","/projects"],["routerLink","/profile"],[1,"dropdown-item-social-links"],["href","https://www.linkedin.com","target","_blank","rel","noopener","aria-label","LinkedIn",1,"footer-icon",3,"click"],[1,"fab","fa-linkedin",3,"ngClass"],["href","https://github.com","target","_blank","rel","noopener","aria-label","GitHub",1,"footer-icon",3,"click"],[1,"fab","fa-github",3,"ngClass"],["href","https://www.youtube.com","target","_blank","rel","noopener","aria-label","YouTube",1,"footer-icon",3,"click"],[1,"fab","fa-youtube",3,"ngClass"],["href","https://discord.com","target","_blank","rel","noopener","aria-label","Discord",1,"footer-icon",3,"click"],[1,"fab","fa-discord",3,"ngClass"]],template:function(t,e){t&1&&(r(0,"button",0),m("click",function(p){return e.toggleMenu(p)}),j(),r(1,"svg",1),s(2,"line",2)(3,"line",3)(4,"line",4),a()(),F(5,ne,18,5,"ul",5)),t&2&&(l(5),c("ngIf",e.isMenuOpen))},dependencies:[f,v,Z,T,S],styles:["@keyframes _ngcontent-%COMP%_rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.dropdown-toggle[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   line[_ngcontent-%COMP%]{stroke-width:4;animation:_ngcontent-%COMP%_glow 2s infinite}@keyframes _ngcontent-%COMP%_glow{0%{stroke:#b3b3b3}50%{stroke:gray}to{stroke:#b3b3b3}}.dropdown-toggle[_ngcontent-%COMP%]{position:relative;background-color:#333;color:#fff;font-size:1.2em;padding:10px;transition:all .3s ease;border:1px solid #2a2a2a}.dropdown-toggle[_ngcontent-%COMP%]:hover{background:linear-gradient(135deg,#b3b3b3,gray);transition:background .5s ease;animation:none}.dropdown-menu[_ngcontent-%COMP%]{position:absolute;top:100px;right:0%;list-style-type:none;transform:translate(-50%);width:200px;box-shadow:0 10px 20px #0000001a;border-radius:10px;transition:transform .3s ease,opacity .3s ease;opacity:1;z-index:1000;font-size:1em;transition:background-color .3s ease}.dropdown-menu.light[_ngcontent-%COMP%]{background-color:#757575}.dropdown-menu.dark[_ngcontent-%COMP%]{background-color:#f5f5f5}.dropdown-menu.open[_ngcontent-%COMP%]{transform:translate(-50%);opacity:1}.dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;list-style:none;padding:10px 0;transition:background-color .3s ease;animation:_ngcontent-%COMP%_fadeInDown .5s ease-out forwards}.dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000;text-decoration:none;font-family:Orbitron,sans-serif;font-weight:600;font-style:normal;font-size:1em}.dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-shadow:0px 0px 3px #000000;cursor:pointer}.dropdown-menu[_ngcontent-%COMP%]   .dropdown-item-social-links[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;padding:10px 0;gap:5px;animation:_ngcontent-%COMP%_fadeInDown .5s ease-out forwards}@keyframes _ngcontent-%COMP%_fadeInDown{0%{opacity:0;transform:translateY(-20px)}to{opacity:1;transform:translateY(0)}}.dropdown-menu[_ngcontent-%COMP%]   .dropdown-item-social-links[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin:0 5px}.dropdown-menu[_ngcontent-%COMP%]   .dropdown-item-social-links[_ngcontent-%COMP%]   i.light[_ngcontent-%COMP%]{color:#f0f0f0}.dropdown-menu[_ngcontent-%COMP%]   .dropdown-item-social-links[_ngcontent-%COMP%]   i.light[_ngcontent-%COMP%]:hover{color:#0056b3;text-shadow:0px 0px 5px rgba(0,0,0,.5)}.dropdown-menu[_ngcontent-%COMP%]   .dropdown-item-social-links[_ngcontent-%COMP%]   i.dark[_ngcontent-%COMP%]{color:#333}.dropdown-menu[_ngcontent-%COMP%]   .dropdown-item-social-links[_ngcontent-%COMP%]   i.dark[_ngcontent-%COMP%]:hover{color:#0056b3;text-shadow:0px 0px 5px rgba(0,0,0,.5)}.dropdown-menu[_ngcontent-%COMP%]   .dropdown-item-social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:1.75em;transition:color .3s ease}@media (max-width: 320px){.dropdown-menu[_ngcontent-%COMP%]{transform:translate(-5%)}}"]});let o=n;return o})();var E=(o,n)=>({light:o,dark:n}),J=(()=>{let n=class n{openLink(i,t){i.preventDefault(),window.open(t,"_blank","noopener")}constructor(i){this.themeService=i}ngOnInit(){this.themeService.currentTheme.subscribe(i=>{this.theme=i===h.Light?"light":"dark"})}};n.\u0275fac=function(t){return new(t||n)(_(C))},n.\u0275cmp=d({type:n,selectors:[["app-toolbar"]],standalone:!0,features:[g],decls:24,vars:16,consts:[[1,"header",3,"ngClass"],["routerLink","/Home","title","Home",1,"header__logo"],["aria-label","Main Navigation",1,"header__nav"],["routerLink","/projects",1,"nav__item-link",3,"ngClass"],["routerLink","/profile",1,"nav__item-link",3,"ngClass"],[1,"nav__theme-toggle"],[1,"nav__social-links"],["href","https://www.linkedin.com","target","_blank","rel","noopener","aria-label","LinkedIn",1,"footer-icon",3,"click"],[1,"fab","fa-linkedin",3,"ngClass"],["href","https://github.com","target","_blank","rel","noopener","aria-label","GitHub",1,"footer-icon",3,"click"],[1,"fab","fa-github",3,"ngClass"],["href","https://www.youtube.com","target","_blank","rel","noopener","aria-label","YouTube",1,"footer-icon",3,"click"],[1,"fab","fa-youtube",3,"ngClass"],["href","https://discord.com","target","_blank","rel","noopener","aria-label","Discord",1,"footer-icon",3,"click"],[1,"fab","fa-discord",3,"ngClass"],[1,"header__menu"]],template:function(t,e){t&1&&(r(0,"header",0)(1,"a",1),s(2,"app-cube-logo"),a(),r(3,"nav",2)(4,"a",3),O(5,"Projects"),a(),r(6,"a",4),O(7,"Profile"),a(),s(8,"app-theme-toggle",5),r(9,"div",6)(10,"ul")(11,"li")(12,"a",7),m("click",function(p){return e.openLink(p,"https://www.linkedin.com/in/stanislaw-wasilewski-1bba55273/")}),s(13,"i",8),a()(),r(14,"li")(15,"a",9),m("click",function(p){return e.openLink(p,"https://github.com/gitlaws")}),s(16,"i",10),a()(),r(17,"li")(18,"a",11),m("click",function(p){return e.openLink(p,"https://www.youtube.com/@sm.w/streams")}),s(19,"i",12),a()(),r(20,"li")(21,"a",13),m("click",function(p){return e.openLink(p,"https://discord.com")}),s(22,"i",14),a()()()()(),s(23,"app-cyber-menu",15),a()),t&2&&(c("ngClass",P(7,E,e.theme==="light",e.theme==="dark")),l(4),c("ngClass",P(10,E,e.theme==="light",e.theme==="dark")),l(2),c("ngClass",P(13,E,e.theme==="light",e.theme==="dark")),l(7),c("ngClass",e.theme),l(3),c("ngClass",e.theme),l(3),c("ngClass",e.theme),l(3),c("ngClass",e.theme))},dependencies:[f,v,T,Q,q,S],styles:["@keyframes _ngcontent-%COMP%_rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.header[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:space-around;position:fixed;top:0;left:0;z-index:100;width:100%;height:100px;padding:20px;transition:background-color .3s ease;box-shadow:0 4px 6px #0003}.header.light[_ngcontent-%COMP%]{background-color:#d3d3d3}.header.dark[_ngcontent-%COMP%]{background-color:#121212}.header__menu[_ngcontent-%COMP%]{display:none}.header__nav[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;gap:1rem}.nav__item-link[_ngcontent-%COMP%]{padding:10px 15px;text-decoration:none;font-family:Orbitron,sans-serif;font-weight:600;font-style:normal;font-size:1.5em;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;transition:all .3s ease}.nav__item-link.light[_ngcontent-%COMP%]{background-color:#000}.nav__item-link.dark[_ngcontent-%COMP%]{background-color:#fff}.nav__item-link[_ngcontent-%COMP%]:hover{cursor:pointer}.nav__social-links[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.nav__social-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;list-style:none;padding:0;margin:0;gap:1em}.nav__social-links[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:1em}.nav__social-links[_ngcontent-%COMP%]   i.light[_ngcontent-%COMP%]{color:#333}.nav__social-links[_ngcontent-%COMP%]   i.light[_ngcontent-%COMP%]:hover{color:#0056b3;text-shadow:0px 0px 5px rgba(0,0,0,.5)}.nav__social-links[_ngcontent-%COMP%]   i.dark[_ngcontent-%COMP%]{color:#f0f0f0}.nav__social-links[_ngcontent-%COMP%]   i.dark[_ngcontent-%COMP%]:hover{color:#0056b3;text-shadow:0px 0px 5px rgba(0,0,0,.5)}.nav__social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:1.75em;transition:color .3s ease}@media (max-width: 1023px){.header[_ngcontent-%COMP%]{justify-content:space-around;align-items:center}.nav__theme-toggle[_ngcontent-%COMP%], .nav__social-links[_ngcontent-%COMP%], .header__nav[_ngcontent-%COMP%]{display:none}.header__menu[_ngcontent-%COMP%]{display:block}}@media (max-width: 768px){.header[_ngcontent-%COMP%]{justify-content:space-around;align-items:center}.nav__theme-toggle[_ngcontent-%COMP%], .nav__social-links[_ngcontent-%COMP%], .header__nav[_ngcontent-%COMP%]{display:none}.header__menu[_ngcontent-%COMP%]{display:block}}@media (max-width: 120px){.header[_ngcontent-%COMP%]{height:auto;flex-direction:column;overflow:hidden;gap:1rem}}"]});let o=n;return o})();var oe=(o,n)=>({light:o,dark:n}),K=(()=>{let n=class n{constructor(i){this.themeService=i,this.isDarkMode=!1}ngOnInit(){this.themeService.currentTheme.subscribe(i=>{this.theme=i===h.Light?"light":"dark"})}openLink(i,t){i.preventDefault(),window.open(t,"_blank")}};n.\u0275fac=function(t){return new(t||n)(_(C))},n.\u0275cmp=d({type:n,selectors:[["app-footer"]],standalone:!0,features:[g],decls:10,vars:8,consts:[[1,"footer",3,"ngClass"],[1,"footer-content"],["href","https://www.linkedin.com","target","_blank","rel","noopener","aria-label","LinkedIn",1,"footer-icon",3,"click"],[1,"fab","fa-linkedin",3,"ngClass"],["href","https://github.com","target","_blank","rel","noopener","aria-label","GitHub",1,"footer-icon",3,"click"],[1,"fab","fa-github",3,"ngClass"],["href","https://www.youtube.com","target","_blank","rel","noopener","aria-label","YouTube",1,"footer-icon",3,"click"],[1,"fab","fa-youtube",3,"ngClass"],["href","https://discord.com","target","_blank","rel","noopener","aria-label","Discord",1,"footer-icon",3,"click"],[1,"fab","fa-discord",3,"ngClass"]],template:function(t,e){t&1&&(r(0,"footer",0)(1,"div",1)(2,"a",2),m("click",function(p){return e.openLink(p,"https://www.linkedin.com/in/stanislaw-wasilewski-1bba55273/")}),s(3,"i",3),a(),r(4,"a",4),m("click",function(p){return e.openLink(p,"https://github.com/gitlaws")}),s(5,"i",5),a(),r(6,"a",6),m("click",function(p){return e.openLink(p,"https://www.youtube.com/@sm.w/streams")}),s(7,"i",7),a(),r(8,"a",8),m("click",function(p){return e.openLink(p,"https://discord.com")}),s(9,"i",9),a()()()),t&2&&(c("ngClass",P(5,oe,e.theme==="light",e.theme==="dark")),l(3),c("ngClass",e.theme),l(2),c("ngClass",e.theme),l(2),c("ngClass",e.theme),l(2),c("ngClass",e.theme))},dependencies:[f,v],styles:["@keyframes _ngcontent-%COMP%_rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.footer[_ngcontent-%COMP%]{padding:20px;text-align:center;position:relative;bottom:0;width:100%;transition:background-color .3s ease;box-shadow:0 4px 8px #0000001a}.footer.light[_ngcontent-%COMP%]{background-color:#d3d3d3}.footer.dark[_ngcontent-%COMP%]{background-color:#121212}.footer-content[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:1rem}.footer-icon[_ngcontent-%COMP%]{font-size:1.75em;transition:color .3s}.footer-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{transition:background-color .3s ease}.footer-icon[_ngcontent-%COMP%]   i.light[_ngcontent-%COMP%]{color:#333}.footer-icon[_ngcontent-%COMP%]   i.light[_ngcontent-%COMP%]:hover{color:#0056b3;text-shadow:0px 0px 5px rgba(0,0,0,.5)}.footer-icon[_ngcontent-%COMP%]   i.dark[_ngcontent-%COMP%]{color:#f0f0f0}.footer-icon[_ngcontent-%COMP%]   i.dark[_ngcontent-%COMP%]:hover{color:#0056b3;text-shadow:0px 0px 5px rgba(0,0,0,.5)}@media (max-width: 768px){.footer-content[_ngcontent-%COMP%]{gap:20px}.footer-icon[_ngcontent-%COMP%]{font-size:28px}}@media (max-width: 480px){.footer-content[_ngcontent-%COMP%]{gap:15px}.footer-icon[_ngcontent-%COMP%]{font-size:28px}}"]});let o=n;return o})();var U=(()=>{let n=class n{constructor(){this.title="PortfoliYOLO"}};n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=d({type:n,selectors:[["app-root"]],standalone:!0,features:[g],decls:3,vars:0,template:function(t,e){t&1&&s(0,"app-toolbar")(1,"router-outlet")(2,"app-footer")},dependencies:[f,A,J,K]});let o=n;return o})();var $={production:!0,baseHref:"https://gitlaws.github.io/PortfoliYOLO/"};var ee=document.querySelector("base");ee?ee.setAttribute("href",$.baseHref):console.error("Base element not found!");R(U,W).catch(o=>console.error(o));
