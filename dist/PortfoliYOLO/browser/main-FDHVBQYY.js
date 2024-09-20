import{a as A,c as B,d as L,e as G}from"./chunk-YXYJIGMO.js";import"./chunk-AMEN52RE.js";import"./chunk-F55F5SRT.js";import{$ as C,Aa as Y,Ba as s,Ca as T,Da as N,Ea as r,Fa as a,Ga as c,Ha as S,Ia as m,Ja as g,Ka as O,La as f,Ma as Z,Na as P,T as p,_ as h,aa as z,bb as x,cb as D,db as R,eb as u,fa as I,ib as k,jb as X,kb as w,na as V,pa as d,qa as b,za as y}from"./chunk-IK6CA5DJ.js";var W=[{path:"",loadComponent:()=>import("./chunk-LZEGGFNT.js").then(i=>i.HomeComponent)},{path:"Home",loadComponent:()=>import("./chunk-LZEGGFNT.js").then(i=>i.HomeComponent)},{path:"projects",loadComponent:()=>import("./chunk-PG7AMMHL.js").then(i=>i.ProjectsComponent)},{path:"profile",loadComponent:()=>import("./chunk-G3YBHWSC.js").then(i=>i.ProfileComponent)}];var Q={providers:[G(W)]};var q=(()=>{let o=class o{};o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=p({type:o,selectors:[["app-cube-logo"]],standalone:!0,features:[f],decls:9,vars:0,consts:[[1,"cube-wrapper"],[1,"cube"],[1,"face","front"],[1,"face","back"],[1,"face","right"],[1,"face","left"],[1,"face","top"],[1,"face","bottom"],[1,"shadow"]],template:function(e,t){e&1&&(r(0,"div",0)(1,"div",1),c(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7),a(),c(8,"div",8),a())},dependencies:[u],styles:[".cube-wrapper[_ngcontent-%COMP%]{perspective:1000px}.cube[_ngcontent-%COMP%]{position:relative;width:50px;height:50px;transform-style:preserve-3d;animation:_ngcontent-%COMP%_rotate 20s infinite}.face[_ngcontent-%COMP%]{position:absolute;width:50px;height:50px;border:1px solid #333;display:flex;justify-content:center;align-items:center;font-size:20px;color:#fff}.front[_ngcontent-%COMP%]{transform:rotateY(0) translateZ(25px);background-image:url(https://blog.flamingtext.com/blog/2024/08/13/flamingtext_com_1723581882_618471439.png),url(https://i.gifer.com/b6u.gif);background-size:contain;background-position:center;background-repeat:no-repeat}.back[_ngcontent-%COMP%]{transform:rotateX(180deg) translateZ(25px);background:url(https://i.gifer.com/ZNec.gif),#00008b;background-size:contain;background-position:center;background-repeat:no-repeat}.right[_ngcontent-%COMP%]{transform:rotateY(90deg) translateZ(25px);background:url(https://i.gifer.com/DDt.gif) #000;background-size:contain;background-position:center;background-repeat:no-repeat}.left[_ngcontent-%COMP%]{transform:rotateY(-90deg) translateZ(25px);background:url(https://i.gifer.com/Z23N.gif),#000;background-size:cover;background-position:center;background-repeat:no-repeat}.top[_ngcontent-%COMP%]{transform:rotateX(90deg) translateZ(25px);background:url(https://i.gifer.com/31Ck.gif);background-size:contain;background-position:center;background-repeat:no-repeat}.bottom[_ngcontent-%COMP%]{transform:rotateX(-90deg) translateZ(25px);background:url(https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnd3bzd0ZmE3bWZya205dHdmYnR3ODBtdzFjdGkzd2J3NDEzNjl1YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/YbgixxpzGS9Oe8ghP1/giphy.gif),#000;background-size:cover;background-position:center;background-repeat:no-repeat}@keyframes _ngcontent-%COMP%_rotate{0%,20%{transform:rotateX(0) rotateY(0)}40%,60%{transform:rotateX(360deg) rotateY(360deg)}80%,to{transform:rotateX(0) rotateY(0)}}@keyframes _ngcontent-%COMP%_bounce{0%,to{transform:translateY(0)}50%{transform:translateY(-20px)}}"]});let i=o;return i})();var ne=i=>({transform:i}),F=(()=>{let o=class o{constructor(n,e){this.themeService=n,this.storageService=e,this.isAnimated=!1,this.tooltipText=""}ngOnInit(){this.themeService.currentTheme.subscribe(n=>{this.isDarkMode=n===k.Dark,this.updateTooltipText()})}toggleTheme(){let n=this.isDarkMode?k.Light:k.Dark;this.storageService.setItem("theme",n),this.themeService.toggleTheme(),this.isAnimated=!0,setTimeout(()=>{this.isAnimated=!1},500),this.updateTooltipText()}updateTooltipText(){this.tooltipText=this.isDarkMode?"Toggle Light Mode":"Toggle Dark Mode"}};o.\u0275fac=function(e){return new(e||o)(b(w),b(X))},o.\u0275cmp=p({type:o,selectors:[["app-theme-toggle"]],standalone:!0,features:[f],decls:6,vars:19,consts:[[1,"parent"],[1,"child"],[1,"btn",3,"click"],[1,"btn__indicator",3,"ngStyle"],[1,"btn__icon-container",3,"title"]],template:function(e,t){e&1&&(r(0,"main",0)(1,"article",1)(2,"div",2),m("click",function(){return t.toggleTheme()}),r(3,"div",3)(4,"button",4),c(5,"i"),a()()()()()),e&2&&(d(2),T("darkmode",t.isDarkMode)("dark",t.isDarkMode)("light",!t.isDarkMode),d(),s("ngStyle",Z(17,ne,t.isDarkMode?"translateX(1.24em)":"none")),d(),T("dark",t.isDarkMode)("light",!t.isDarkMode),s("title",t.tooltipText),Y("aria-label",t.isDarkMode?"Switch to light mode":"Switch to dark mode"),d(),N(t.isDarkMode?"fas fa-moon btn__icon":"fas fa-sun btn__icon"),T("spin",t.isAnimated))},dependencies:[u,R],styles:["@keyframes _ngcontent-%COMP%_rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.parent[_ngcontent-%COMP%], .child[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;font-family:Arial,sans-serif}.btn[_ngcontent-%COMP%]{display:flex;align-items:center;padding:0;width:2.75em;height:1.5em;position:relative;cursor:pointer;border-radius:10em;background-color:#65758529;box-shadow:0 8px 40px #0003;transition:border-color .3s ease}.btn[_ngcontent-%COMP%]   .btn__indicator[_ngcontent-%COMP%]{width:1.4em;height:1.4em;position:absolute;border-radius:50%;box-shadow:0 8px 40px #0003;transition:transform .3s ease}.btn[_ngcontent-%COMP%]   .btn__icon-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:100%;height:100%;border-radius:50%}.btn[_ngcontent-%COMP%]   .btn__icon-container.light[_ngcontent-%COMP%]{border:1px solid #add8e6;background-color:#b0e2ff}.btn[_ngcontent-%COMP%]   .btn__icon-container.dark[_ngcontent-%COMP%]{border:1px solid #353839;background-color:#36454f}.btn[_ngcontent-%COMP%]   .btn__icon[_ngcontent-%COMP%]{font-size:12px;color:#f6b162;transition:color .3s ease}.btn[_ngcontent-%COMP%]   .btn__icon.spin[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_spin .5s ease-in-out 5}@keyframes _ngcontent-%COMP%_spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.btn[_ngcontent-%COMP%]   .darkmode-bg[_ngcontent-%COMP%]{background-color:#1a1a1a;color:silver}.btn[_ngcontent-%COMP%]:active{transform:scale(.95)}.btn.dark[_ngcontent-%COMP%]{border:1px solid #2a2a2a}.btn.dark[_ngcontent-%COMP%]:hover{border-color:gold}.btn.light[_ngcontent-%COMP%]{border:1px solid #dcdcdc}.btn.light[_ngcontent-%COMP%]:hover{border-color:gray}.btn[_ngcontent-%COMP%]   .btn.darkmode[_ngcontent-%COMP%]{background-color:#1a1a1a}.logo-toggle-button.hidden[_ngcontent-%COMP%]{background-color:#fc0;color:#333}"]});let i=o;return i})();function oe(i,o){if(i&1){let l=S();r(0,"ul",6),m("click",function(e){return h(l),C(e.stopPropagation())}),r(1,"li",7)(2,"a",8),O(3,"Projects"),a()(),r(4,"li",7)(5,"a",9),O(6,"Profile"),a()(),r(7,"li",7),c(8,"app-theme-toggle"),a(),r(9,"li",10)(10,"a",11),m("click",function(e){h(l);let t=g();return C(t.openLink(e,"https://www.linkedin.com/in/stanislaw-wasilewski-1bba55273/"))}),c(11,"i",12),a(),r(12,"a",13),m("click",function(e){h(l);let t=g();return C(t.openLink(e,"https://github.com/gitlaws"))}),c(13,"i",14),a(),r(14,"a",15),m("click",function(e){h(l);let t=g();return C(t.openLink(e,"https://www.youtube.com/@sm.w/streams"))}),c(15,"i",16),a(),r(16,"a",17),m("click",function(e){h(l);let t=g();return C(t.openLink(e,"https://discord.com"))}),c(17,"i",18),a()()()}if(i&2){let l=g();s("ngClass",l.theme),d(2),s("ngClass",l.theme),d(3),s("ngClass",l.theme),d(6),s("ngClass",l.theme),d(2),s("ngClass",l.theme),d(2),s("ngClass",l.theme),d(2),s("ngClass",l.theme)}}var J=(()=>{let o=class o{openLink(n,e){n.preventDefault(),window.open(e,"_blank","noopener")}constructor(n,e){this.elementRef=n,this.themeService=e,this.isMenuOpen=!1,this.menuItems=[{name:"Projects",url:"/home"},{name:"Profile",url:"/about"}]}ngOnInit(){document.addEventListener("click",this.documentClickHandler.bind(this)),this.themeService.currentTheme.subscribe(n=>{this.theme=n===k.Light?"light":"dark"})}ngOnDestroy(){document.removeEventListener("click",this.documentClickHandler.bind(this))}documentClickHandler(n){this.elementRef.nativeElement.contains(n.target)||(this.isMenuOpen=!1)}toggleMenu(n){n.stopPropagation(),this.isMenuOpen=!this.isMenuOpen}};o.\u0275fac=function(e){return new(e||o)(b(I),b(w))},o.\u0275cmp=p({type:o,selectors:[["app-cyber-menu"]],standalone:!0,features:[f],decls:6,vars:1,consts:[["aria-label","Menu",1,"dropdown-toggle",3,"click"],["width","40","height","30","viewBox","0 0 40 30"],["x1","0","y1","5","x2","40","y2","5"],["x1","0","y1","15","x2","40","y2","15"],["x1","0","y1","25","x2","40","y2","25"],["class","dropdown-menu",3,"ngClass","click",4,"ngIf"],[1,"dropdown-menu",3,"click","ngClass"],[1,"dropdown-item"],["routerLink","/projects",3,"ngClass"],["routerLink","/profile",3,"ngClass"],[1,"dropdown-item-social-links"],["href","https://www.linkedin.com","target","_blank","rel","noopener","aria-label","LinkedIn",1,"footer-icon",3,"click"],[1,"fab","fa-linkedin",3,"ngClass"],["href","https://github.com","target","_blank","rel","noopener","aria-label","GitHub",1,"footer-icon",3,"click"],[1,"fab","fa-github",3,"ngClass"],["href","https://www.youtube.com","target","_blank","rel","noopener","aria-label","YouTube",1,"footer-icon",3,"click"],[1,"fab","fa-youtube",3,"ngClass"],["href","https://discord.com","target","_blank","rel","noopener","aria-label","Discord",1,"footer-icon",3,"click"],[1,"fab","fa-discord",3,"ngClass"]],template:function(e,t){e&1&&(r(0,"button",0),m("click",function(_){return t.toggleMenu(_)}),z(),r(1,"svg",1),c(2,"line",2)(3,"line",3)(4,"line",4),a()(),y(5,oe,18,7,"ul",5)),e&2&&(d(5),s("ngIf",t.isMenuOpen))},dependencies:[u,x,D,L,F],styles:["@keyframes _ngcontent-%COMP%_rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.dropdown-toggle[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   line[_ngcontent-%COMP%]{stroke-width:4;animation:_ngcontent-%COMP%_glow 2s infinite}@keyframes _ngcontent-%COMP%_glow{0%{stroke:#b3b3b3}50%{stroke:gray}to{stroke:#b3b3b3}}.dropdown-toggle[_ngcontent-%COMP%]{position:relative;background-color:#333;color:#fff;font-size:1.2em;padding:10px;transition:all .3s ease;border:1px solid #2a2a2a}.dropdown-toggle[_ngcontent-%COMP%]:hover{background:linear-gradient(135deg,#b3b3b3,gray);transition:background .5s ease;animation:none}.dropdown-menu[_ngcontent-%COMP%]{position:absolute;top:100px;right:0%;list-style-type:none;transform:translate(-50%);width:200px;box-shadow:0 10px 20px #0000001a;border-radius:10px;background-color:#ffffff1a;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);transition:transform .3s ease,opacity .3s ease;opacity:1;z-index:1000;font-size:1em;transition:background-color .3s ease}.dropdown-menu.open[_ngcontent-%COMP%]{transform:translate(-50%);opacity:1}.dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;list-style:none;padding:10px 0;transition:background-color .3s ease;animation:_ngcontent-%COMP%_fadeInDown .5s ease-out forwards}.dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;font-family:Orbitron,sans-serif;font-weight:600;font-style:normal;font-size:1em}.dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   a.light[_ngcontent-%COMP%]{color:#757575}.dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   a.light[_ngcontent-%COMP%]:hover{color:#9e9e9e;text-shadow:0px 0px 5px #9e9e9e;cursor:pointer}.dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   a.dark[_ngcontent-%COMP%]{color:#888}.dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   a.dark[_ngcontent-%COMP%]:hover{color:#555;text-shadow:0px 0px 5px #555;cursor:pointer}.dropdown-menu[_ngcontent-%COMP%]   .dropdown-item-social-links[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;padding:10px 0;gap:5px;animation:_ngcontent-%COMP%_fadeInDown .5s ease-out forwards}@keyframes _ngcontent-%COMP%_fadeInDown{0%{opacity:0;transform:translateY(-20px)}to{opacity:1;transform:translateY(0)}}.dropdown-menu[_ngcontent-%COMP%]   .dropdown-item-social-links[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin:0 5px}.dropdown-menu[_ngcontent-%COMP%]   .dropdown-item-social-links[_ngcontent-%COMP%]   i.light[_ngcontent-%COMP%]{color:#757575}.dropdown-menu[_ngcontent-%COMP%]   .dropdown-item-social-links[_ngcontent-%COMP%]   i.light[_ngcontent-%COMP%]:hover{color:#616161;text-shadow:0px 0px 5px #616161}.dropdown-menu[_ngcontent-%COMP%]   .dropdown-item-social-links[_ngcontent-%COMP%]   i.dark[_ngcontent-%COMP%]{color:#888}.dropdown-menu[_ngcontent-%COMP%]   .dropdown-item-social-links[_ngcontent-%COMP%]   i.dark[_ngcontent-%COMP%]:hover{color:#333;text-shadow:0px 0px 5px #333}.dropdown-menu[_ngcontent-%COMP%]   .dropdown-item-social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:1.75em;transition:color .3s ease}@media (max-width: 320px){.dropdown-menu[_ngcontent-%COMP%]{transform:translate(-5%)}}"]});let i=o;return i})();var H=(i,o)=>({light:i,dark:o}),K=(()=>{let o=class o{openLink(n,e){n.preventDefault(),window.open(e,"_blank","noopener")}constructor(n){this.themeService=n}ngOnInit(){this.themeService.currentTheme.subscribe(n=>{this.theme=n===k.Light?"light":"dark"})}};o.\u0275fac=function(e){return new(e||o)(b(w))},o.\u0275cmp=p({type:o,selectors:[["app-toolbar"]],standalone:!0,features:[f],decls:24,vars:16,consts:[[1,"header",3,"ngClass"],["routerLink","/Home","title","Home",1,"header__logo"],["aria-label","Main Navigation",1,"header__nav"],["routerLink","/projects",1,"nav__item-link",3,"ngClass"],["routerLink","/profile",1,"nav__item-link",3,"ngClass"],[1,"nav__theme-toggle"],[1,"nav__social-links"],["href","https://www.linkedin.com","target","_blank","rel","noopener","aria-label","LinkedIn",1,"footer-icon",3,"click"],[1,"fab","fa-linkedin",3,"ngClass"],["href","https://github.com","target","_blank","rel","noopener","aria-label","GitHub",1,"footer-icon",3,"click"],[1,"fab","fa-github",3,"ngClass"],["href","https://www.youtube.com","target","_blank","rel","noopener","aria-label","YouTube",1,"footer-icon",3,"click"],[1,"fab","fa-youtube",3,"ngClass"],["href","https://discord.com","target","_blank","rel","noopener","aria-label","Discord",1,"footer-icon",3,"click"],[1,"fab","fa-discord",3,"ngClass"],[1,"header__menu"]],template:function(e,t){e&1&&(r(0,"header",0)(1,"a",1),c(2,"app-cube-logo"),a(),r(3,"nav",2)(4,"a",3),O(5,"Projects"),a(),r(6,"a",4),O(7,"Profile"),a(),c(8,"app-theme-toggle",5),r(9,"div",6)(10,"ul")(11,"li")(12,"a",7),m("click",function(_){return t.openLink(_,"https://www.linkedin.com/in/stanislaw-wasilewski-1bba55273/")}),c(13,"i",8),a()(),r(14,"li")(15,"a",9),m("click",function(_){return t.openLink(_,"https://github.com/gitlaws")}),c(16,"i",10),a()(),r(17,"li")(18,"a",11),m("click",function(_){return t.openLink(_,"https://www.youtube.com/@sm.w/streams")}),c(19,"i",12),a()(),r(20,"li")(21,"a",13),m("click",function(_){return t.openLink(_,"https://discord.com")}),c(22,"i",14),a()()()()(),c(23,"app-cyber-menu",15),a()),e&2&&(s("ngClass",P(7,H,t.theme==="light",t.theme==="dark")),d(4),s("ngClass",P(10,H,t.theme==="light",t.theme==="dark")),d(2),s("ngClass",P(13,H,t.theme==="light",t.theme==="dark")),d(7),s("ngClass",t.theme),d(3),s("ngClass",t.theme),d(3),s("ngClass",t.theme),d(3),s("ngClass",t.theme))},dependencies:[u,x,L,q,J,F],styles:["@keyframes _ngcontent-%COMP%_rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.header[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:space-around;position:fixed;top:0;left:0;z-index:100;width:100%;height:100px;padding:20px;transition:background-color .3s ease;box-shadow:0 4px 6px #0003}.header.light[_ngcontent-%COMP%]{background-color:#d3d3d3}.header.dark[_ngcontent-%COMP%]{background-color:#121212}.header__menu[_ngcontent-%COMP%]{display:none}.header__nav[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;gap:1rem}.nav__item-link[_ngcontent-%COMP%]{padding:10px 15px;text-decoration:none;font-family:Orbitron,sans-serif;font-weight:600;font-style:normal;font-size:1.5em;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;transition:all .3s ease}.nav__item-link.light[_ngcontent-%COMP%]{background-color:#000}.nav__item-link.light[_ngcontent-%COMP%]:hover{background-color:gray}.nav__item-link.dark[_ngcontent-%COMP%]{background-color:#fff}.nav__item-link.dark[_ngcontent-%COMP%]:hover{background-color:#d3d3d3}.nav__social-links[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.nav__social-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;list-style:none;padding:0;margin:0;gap:1em}.nav__social-links[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:1em}.nav__social-links[_ngcontent-%COMP%]   i.light[_ngcontent-%COMP%]{color:#757575}.nav__social-links[_ngcontent-%COMP%]   i.light[_ngcontent-%COMP%]:hover{color:#616161;text-shadow:0px 0px 5px #616161}.nav__social-links[_ngcontent-%COMP%]   i.dark[_ngcontent-%COMP%]{color:#888}.nav__social-links[_ngcontent-%COMP%]   i.dark[_ngcontent-%COMP%]:hover{color:#555;text-shadow:0px 0px 5px #555}.nav__social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:1.75em;transition:color .3s ease}@media (max-width: 1023px){.header[_ngcontent-%COMP%]{justify-content:space-around;align-items:center}.nav__theme-toggle[_ngcontent-%COMP%], .nav__social-links[_ngcontent-%COMP%], .header__nav[_ngcontent-%COMP%]{display:none}.header__menu[_ngcontent-%COMP%]{display:block}}@media (max-width: 768px){.header[_ngcontent-%COMP%]{justify-content:space-around;align-items:center}.nav__theme-toggle[_ngcontent-%COMP%], .nav__social-links[_ngcontent-%COMP%], .header__nav[_ngcontent-%COMP%]{display:none}.header__menu[_ngcontent-%COMP%]{display:block}}@media (max-width: 120px){.header[_ngcontent-%COMP%]{height:auto;flex-direction:column;overflow:hidden;gap:1rem}}"]});let i=o;return i})();var ie=(i,o)=>({light:i,dark:o});function re(i,o){if(i&1){let l=S();r(0,"footer",1)(1,"div",2)(2,"a",3),m("click",function(e){h(l);let t=g();return C(t.openLink(e,"https://www.linkedin.com/in/stanislaw-wasilewski-1bba55273/"))}),c(3,"i",4),a(),r(4,"a",5),m("click",function(e){h(l);let t=g();return C(t.openLink(e,"https://github.com/gitlaws"))}),c(5,"i",6),a(),r(6,"a",7),m("click",function(e){h(l);let t=g();return C(t.openLink(e,"https://www.youtube.com/@sm.w/streams"))}),c(7,"i",8),a(),r(8,"a",9),m("click",function(e){h(l);let t=g();return C(t.openLink(e,"https://discord.com"))}),c(9,"i",10),a()()()}if(i&2){let l=g();s("ngClass",P(5,ie,l.theme==="light",l.theme==="dark")),d(3),s("ngClass",l.theme),d(2),s("ngClass",l.theme),d(2),s("ngClass",l.theme),d(2),s("ngClass",l.theme)}}var U=(()=>{let o=class o{constructor(n){this.themeService=n,this.isDarkMode=!1,this.isFooterHidden=!0,this.isMouseOver=!1}ngOnInit(){this.themeService.currentTheme.subscribe(n=>{this.theme=n===k.Light?"light":"dark"})}onScroll(){console.log("Scroll event detected"),console.log("Scroll position:",window.scrollY),this.isFooterHidden=!1,console.log("Footer visible"),this.scrollTimeout&&clearTimeout(this.scrollTimeout),this.scrollTimeout=setTimeout(()=>{this.isMouseOver||(this.isFooterHidden=!0,console.log("Footer hidden"))},1e3)}onMouseEnter(){this.isMouseOver=!0,console.log("Mouse entered footer")}onMouseLeave(){this.isMouseOver=!1,console.log("Mouse left footer"),this.scrollTimeout=setTimeout(()=>{this.isMouseOver||(this.isFooterHidden=!0,console.log("Footer hidden"))},1e3)}openLink(n,e){n.preventDefault(),window.open(e,"_blank")}};o.\u0275fac=function(e){return new(e||o)(b(w))},o.\u0275cmp=p({type:o,selectors:[["app-footer"]],hostBindings:function(e,t){e&1&&m("scroll",function(_){return t.onScroll(_)},!1,V)("mouseenter",function(){return t.onMouseEnter()})("mouseleave",function(){return t.onMouseLeave()})},standalone:!0,features:[f],decls:1,vars:1,consts:[["class","footer",3,"ngClass",4,"ngIf"],[1,"footer",3,"ngClass"],[1,"footer-content"],["href","https://www.linkedin.com","target","_blank","rel","noopener","aria-label","LinkedIn",1,"footer-icon",3,"click"],[1,"fab","fa-linkedin",3,"ngClass"],["href","https://github.com","target","_blank","rel","noopener","aria-label","GitHub",1,"footer-icon",3,"click"],[1,"fab","fa-github",3,"ngClass"],["href","https://www.youtube.com","target","_blank","rel","noopener","aria-label","YouTube",1,"footer-icon",3,"click"],[1,"fab","fa-youtube",3,"ngClass"],["href","https://discord.com","target","_blank","rel","noopener","aria-label","Discord",1,"footer-icon",3,"click"],[1,"fab","fa-discord",3,"ngClass"]],template:function(e,t){e&1&&y(0,re,10,8,"footer",0),e&2&&s("ngIf",!t.isFooterHidden)},dependencies:[u,x,D],styles:["@keyframes _ngcontent-%COMP%_rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.footer[_ngcontent-%COMP%]{position:fixed;padding:20px;text-align:center;bottom:0;width:100%;transition:background-color .3s ease;box-shadow:0 4px 8px #0000001a}.footer.light[_ngcontent-%COMP%]{background-color:#d3d3d3}.footer.dark[_ngcontent-%COMP%]{background-color:#121212}.footer-content[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:1rem}.footer-icon[_ngcontent-%COMP%]{font-size:1.75em;transition:color .3s}.footer-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{transition:background-color .3s ease}.footer-icon[_ngcontent-%COMP%]   i.light[_ngcontent-%COMP%]{color:#757575}.footer-icon[_ngcontent-%COMP%]   i.light[_ngcontent-%COMP%]:hover{color:#616161;text-shadow:0px 0px 5px #616161}.footer-icon[_ngcontent-%COMP%]   i.dark[_ngcontent-%COMP%]{color:#888}.footer-icon[_ngcontent-%COMP%]   i.dark[_ngcontent-%COMP%]:hover{color:#555;text-shadow:0px 0px 5px #555}@media (max-width: 768px){.footer-content[_ngcontent-%COMP%]{gap:20px}.footer-icon[_ngcontent-%COMP%]{font-size:28px}}@media (max-width: 480px){.footer-content[_ngcontent-%COMP%]{gap:15px}.footer-icon[_ngcontent-%COMP%]{font-size:28px}}"]});let i=o;return i})();var $=(()=>{let o=class o{constructor(){this.title="PortfoliYOLO"}};o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=p({type:o,selectors:[["app-root"]],standalone:!0,features:[f],decls:3,vars:0,template:function(e,t){e&1&&c(0,"app-toolbar")(1,"router-outlet")(2,"app-footer")},dependencies:[u,B,K,U]});let i=o;return i})();var ee={production:!0,baseHref:"https://gitlaws.github.io/PortfoliYOLO/"};var te=document.querySelector("base");te?te.setAttribute("href",ee.baseHref):console.error("Base element not found!");A($,Q).catch(i=>console.error(i));
