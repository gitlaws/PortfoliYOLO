import{Ca as e,Fa as i,Ga as a,Ha as c,La as o,Ma as m,T as d,cb as C,fb as h,jb as f,lb as P,ma as M,qa as t,ra as p}from"./chunk-VA27ORFX.js";var u=(()=>{let r=class r{constructor(l){this.themeService=l}ngOnInit(){this.themeService.currentTheme.subscribe(l=>{this.theme=l===f.Light?"light":"dark"})}};r.\u0275fac=function(g){return new(g||r)(p(P))},r.\u0275cmp=d({type:r,selectors:[["app-link-tree"]],standalone:!0,features:[m],decls:27,vars:13,consts:[[1,"link-tree-container",3,"ngClass"],["alt","Profile Image","src","https://i.imgur.com/pKpu1QR.jpg",1,"profile-image"],[1,"profile-details",3,"ngClass"],[1,"job-title"],[1,"link-tree",3,"ngClass"],[1,"link-item",3,"ngClass"],["aria-hidden","true",1,"icon","fab","fa-linkedin","linkedin",3,"ngClass"],["href","https://www.linkedin.com/in/stanislaw-wasilewski-1bba55273/","aria-label","LinkedIn Profile",1,"link-text"],["aria-hidden","true",1,"icon","fab","fa-instagram","instagram",3,"ngClass"],["href","https://www.instagram.com/m18law/","aria-label","Instagram Profile",1,"link-text"],["aria-hidden","true",1,"icon","fab","fa-github","github",3,"ngClass"],["href","https://github.com/gitlaws","aria-label","GitHub Profile",1,"link-text"],["aria-hidden","true",1,"icon","fab","fa-youtube","youtube",3,"ngClass"],["href","https://www.youtube.com/@sm.w/streams","aria-label","YouTube Channel",1,"link-text"],["aria-hidden","true",1,"icon","fas","fa-envelope","gmail",3,"ngClass"],["href","mailto:lawmski@gmail.com","aria-label","Email",1,"link-text"]],template:function(g,n){g&1&&(i(0,"div",0)(1,"header"),c(2,"img",1),a(),i(3,"section",2)(4,"h2",3),o(5,"Software Engineer"),a()(),i(6,"section",4)(7,"div",5),c(8,"i",6),i(9,"a",7),o(10,"LinkedIn"),a()(),i(11,"div",5),c(12,"i",8),i(13,"a",9),o(14,"Instagram"),a()(),i(15,"div",5),c(16,"i",10),i(17,"a",11),o(18,"GitHub"),a()(),i(19,"div",5),c(20,"i",12),i(21,"a",13),o(22,"YouTube"),a()(),i(23,"div",5),c(24,"i",14),i(25,"a",15),o(26,"Gmail"),a()()()()),g&2&&(e("ngClass",n.theme),t(3),e("ngClass",n.theme),t(3),e("ngClass",n.theme),t(),e("ngClass",n.theme),t(),e("ngClass",n.theme),t(3),e("ngClass",n.theme),t(),e("ngClass",n.theme),t(3),e("ngClass",n.theme),t(),e("ngClass",n.theme),t(3),e("ngClass",n.theme),t(),e("ngClass",n.theme),t(3),e("ngClass",n.theme),t(),e("ngClass",n.theme))},dependencies:[h,C],styles:[".link-tree-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);padding:20px;border-radius:15px;font-family:Roboto,sans-serif;background:transparent}.link-tree-container.light[_ngcontent-%COMP%]{box-shadow:0 0 15px #dcdcdc,0 0 15px #bcbcbc,0 0 15px #9c9c9c;text-shadow:0 0 10px #dcdcdc,0 0 10px #bcbcbc,0 0 10px #9c9c9c;background:radial-gradient(at center,#f5f5f5,#e0e0e0);transition:background .3s ease}.link-tree-container.dark[_ngcontent-%COMP%]{box-shadow:0 0 15px #1a1a1a,0 0 15px #333,0 0 15px #4d4d4d;text-shadow:0 0 10px #1a1a1a,0 0 10px #333333,0 0 10px #4d4d4d;background:radial-gradient(at center,#2e2e2e,#1e1e1e);transition:background .3s ease}.profile-image[_ngcontent-%COMP%]{width:150px;height:150px;border-radius:50%;box-shadow:0 4px 6px #0000001a,0 8px 12px #0000001a;margin:0 auto 20px;object-fit:cover;border:2px solid #888}@media (max-width: 768px){.profile-image[_ngcontent-%COMP%]{width:120px;height:120px}}@media (max-width: 480px){.profile-image[_ngcontent-%COMP%]{width:100px;height:100px}}@media (max-width: 320px){.profile-image[_ngcontent-%COMP%]{width:80px;height:80px}}.profile-details[_ngcontent-%COMP%]{padding:20px;color:inherit}.profile-details[_ngcontent-%COMP%]   .job-title[_ngcontent-%COMP%]{margin:10px 0;font-size:1.75rem;font-weight:700;font-family:Arial,sans-serif;color:inherit}.profile-details[_ngcontent-%COMP%]   .dual-icons[_ngcontent-%COMP%]{font-size:1.5rem;background:linear-gradient(90deg,red,#fff,#00f);-webkit-background-clip:text;-moz-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;margin-right:8px;vertical-align:middle;transition:background .3s ease}@media (max-width: 768px){.profile-details[_ngcontent-%COMP%]   .dual-icons[_ngcontent-%COMP%]{font-size:1.25rem}}@media (max-width: 480px){.profile-details[_ngcontent-%COMP%]   .dual-icons[_ngcontent-%COMP%]{font-size:1rem}}.profile-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1rem;font-weight:400;line-height:1.5;letter-spacing:.5px;color:inherit;margin:10px 0}@media (max-width: 768px){.profile-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.9375rem}}@media (max-width: 480px){.profile-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.875rem}}.link-tree[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;gap:20px;padding:20px}@media (max-width: 320px){.link-tree[_ngcontent-%COMP%]{padding:10px}}.link-tree[_ngcontent-%COMP%]   .link-item[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-start;padding:15px 80px;border-radius:15px;box-shadow:0 4px 6px #0000001a,0 8px 12px #0000001a;transition:all .3s ease;text-decoration:none;font-weight:700;cursor:pointer}@keyframes _ngcontent-%COMP%_gradient-animation{0%{background-position:0% 50%}25%{background-position:50% 50%}50%{background-position:100% 50%}75%{background-position:50% 50%}to{background-position:0% 50%}}.link-tree[_ngcontent-%COMP%]   .link-item.light[_ngcontent-%COMP%]{box-shadow:0 0 15px #dcdcdc,0 0 15px #bcbcbc,0 0 15px #9c9c9c;text-shadow:0 0 10px #dcdcdc,0 0 10px #bcbcbc,0 0 10px #9c9c9c;transition:background .3s ease,text-shadow .3s ease}.link-tree[_ngcontent-%COMP%]   .link-item.light[_ngcontent-%COMP%]:hover{box-shadow:0 0 20px #dcdcdc,0 0 20px #bcbcbc,0 0 20px #9c9c9c;text-shadow:0 0 15px #dcdcdc,0 0 15px #bcbcbc,0 0 15px #9c9c9c;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);filter:brightness(.9)}.link-tree[_ngcontent-%COMP%]   .link-item.dark[_ngcontent-%COMP%]{box-shadow:0 0 15px #1a1a1a,0 0 15px #2b2b2b,0 0 15px #4d4d4d;text-shadow:0 0 10px #1a1a1a,0 0 10px #2b2b2b,0 0 10px #4d4d4d;transition:background .3s ease,text-shadow .3s ease}.link-tree[_ngcontent-%COMP%]   .link-item.dark[_ngcontent-%COMP%]:hover{box-shadow:0 0 20px #1a1a1a,0 0 20px #2b2b2b,0 0 20px #4d4d4d;text-shadow:0 0 15px #1a1a1a,0 0 15px #2b2b2b,0 0 15px #4d4d4d;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);filter:brightness(.9)}@media (max-width: 320px){.link-tree[_ngcontent-%COMP%]   .link-item[_ngcontent-%COMP%]{padding:10px 120px}}@media (min-width: 768px){.link-tree[_ngcontent-%COMP%]   .link-item[_ngcontent-%COMP%]{padding:20px 150px}}@media (min-width: 1440px){.link-tree[_ngcontent-%COMP%]   .link-item[_ngcontent-%COMP%]{padding:25px 200px}}.link-tree[_ngcontent-%COMP%]   .link-item[_ngcontent-%COMP%]   .link-text[_ngcontent-%COMP%]{flex-grow:1;text-decoration:none;color:inherit}.link-tree[_ngcontent-%COMP%]   .link-item[_ngcontent-%COMP%]   .link-text.light[_ngcontent-%COMP%]{color:#333;transition:color .3s ease}.link-tree[_ngcontent-%COMP%]   .link-item[_ngcontent-%COMP%]   .link-text.dark[_ngcontent-%COMP%]{color:#fff;transition:color .3s ease}.link-tree[_ngcontent-%COMP%]   .link-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{margin-right:10px;font-size:24px;flex-shrink:0}.link-tree[_ngcontent-%COMP%]   .link-item[_ngcontent-%COMP%]   .icon.linkedin[_ngcontent-%COMP%]{color:#0077b5}.link-tree[_ngcontent-%COMP%]   .link-item[_ngcontent-%COMP%]   .icon.instagram[_ngcontent-%COMP%]{color:#e4405f}.link-tree[_ngcontent-%COMP%]   .link-item[_ngcontent-%COMP%]   .icon.github[_ngcontent-%COMP%]{color:#181717}.link-tree[_ngcontent-%COMP%]   .link-item[_ngcontent-%COMP%]   .icon.github.dark[_ngcontent-%COMP%]{color:#fff}.link-tree[_ngcontent-%COMP%]   .link-item[_ngcontent-%COMP%]   .icon.youtube[_ngcontent-%COMP%]{color:red}.link-tree[_ngcontent-%COMP%]   .link-item[_ngcontent-%COMP%]   .icon.gmail[_ngcontent-%COMP%]{color:#d93025}@media (max-width: 320px){.link-tree[_ngcontent-%COMP%]   .link-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{font-size:20px}}"]});let s=r;return s})();var x=(()=>{let r=class r{constructor(l){this.themeService=l}ngOnInit(){this.themeService.currentTheme.subscribe(l=>{this.theme=l===f.Light?"light":"dark"})}};r.\u0275fac=function(g){return new(g||r)(p(P))},r.\u0275cmp=d({type:r,selectors:[["app-videos"]],standalone:!0,features:[m],decls:28,vars:22,consts:[[1,"video-container"],[1,"video-wrapper"],["src",M`https://www.youtube.com/embed/VIDEO_ID_1`,"frameborder","0","allowfullscreen",""],[1,"icon-container"],["aria-hidden","true","title","Angular",1,"fab","fa-angular","tech-icon",3,"ngClass"],["aria-hidden","true","title","React",1,"fab","fa-react","tech-icon",3,"ngClass"],["aria-hidden","true","title","Node.js",1,"fab","fa-node-js","tech-icon",3,"ngClass"],["aria-hidden","true","title",".NET Core",1,"fas","fa-code","tech-icon",3,"ngClass"],["aria-hidden","true","title","JavaScript",1,"fab","fa-js","tech-icon",3,"ngClass"],["aria-hidden","true","title","HTML",1,"fab","fa-html5","tech-icon",3,"ngClass"],["aria-hidden","true","title","CSS3",1,"fab","fa-css3-alt","tech-icon",3,"ngClass"],["aria-hidden","true","title","Python",1,"fab","fa-python","tech-icon",3,"ngClass"],["aria-hidden","true","title","Java",1,"fab","fa-java","tech-icon",3,"ngClass"],["aria-hidden","true","title","Android",1,"fab","fa-android","tech-icon",3,"ngClass"],["aria-hidden","true","title","iOS",1,"fab","fa-apple","tech-icon",3,"ngClass"],["aria-hidden","true","title","Git",1,"fab","fa-git","tech-icon",3,"ngClass"],["aria-hidden","true","title","Docker",1,"fab","fa-docker","tech-icon",3,"ngClass"],["aria-hidden","true","title","AWS",1,"fab","fa-aws","tech-icon",3,"ngClass"],["aria-hidden","true","title","VSCode",1,"fas","fa-terminal","tech-icon",3,"ngClass"],["aria-hidden","true","title","Linux",1,"fab","fa-linux","tech-icon",3,"ngClass"],["aria-hidden","true","title","Windows",1,"fab","fa-windows","tech-icon",3,"ngClass"],["aria-hidden","true","title","PHP",1,"fab","fa-php","tech-icon",3,"ngClass"],["aria-hidden","true","title","Sass",1,"fab","fa-sass","tech-icon",3,"ngClass"],["aria-hidden","true","title","Bootstrap",1,"fab","fa-bootstrap","tech-icon",3,"ngClass"],["aria-hidden","true","title","npm",1,"fab","fa-npm","tech-icon",3,"ngClass"],["aria-hidden","true","title","Yarn",1,"fab","fa-yarn","tech-icon",3,"ngClass"]],template:function(g,n){g&1&&(i(0,"div",0)(1,"h2"),o(2,"Wasup"),a(),i(3,"div",1),c(4,"iframe",2),a(),i(5,"div",3),c(6,"i",4)(7,"i",5)(8,"i",6)(9,"i",7)(10,"i",8)(11,"i",9)(12,"i",10)(13,"i",11)(14,"i",12)(15,"i",13)(16,"i",14)(17,"i",15)(18,"i",16)(19,"i",17)(20,"i",18)(21,"i",19)(22,"i",20)(23,"i",21)(24,"i",22)(25,"i",23)(26,"i",24)(27,"i",25),a()()),g&2&&(t(6),e("ngClass",n.theme),t(),e("ngClass",n.theme),t(),e("ngClass",n.theme),t(),e("ngClass",n.theme),t(),e("ngClass",n.theme),t(),e("ngClass",n.theme),t(),e("ngClass",n.theme),t(),e("ngClass",n.theme),t(),e("ngClass",n.theme),t(),e("ngClass",n.theme),t(),e("ngClass",n.theme),t(),e("ngClass",n.theme),t(),e("ngClass",n.theme),t(),e("ngClass",n.theme),t(),e("ngClass",n.theme),t(),e("ngClass",n.theme),t(),e("ngClass",n.theme),t(),e("ngClass",n.theme),t(),e("ngClass",n.theme),t(),e("ngClass",n.theme),t(),e("ngClass",n.theme),t(),e("ngClass",n.theme))},dependencies:[h,C],styles:[".video-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.video-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.5rem;margin-top:10px;margin-bottom:20px}.video-container[_ngcontent-%COMP%]   .video-wrapper[_ngcontent-%COMP%]{margin-bottom:20px}.video-container[_ngcontent-%COMP%]   .video-wrapper[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{width:100%;height:auto;max-width:560px;max-height:315px}@media (min-width: 1023px){.video-container[_ngcontent-%COMP%]   .video-wrapper[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{width:560px;height:315px}}@media (max-width: 768px){.video-container[_ngcontent-%COMP%]   .video-wrapper[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{width:100%;height:auto}}@media (min-width: 820px) and (max-width: 1024px){.video-container[_ngcontent-%COMP%]   .video-wrapper[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{width:460px;height:215px}}.icon-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(5,1fr);grid-template-rows:repeat(5,auto);gap:20px;margin-top:20px;justify-items:center;align-items:center}.icon-container[_ngcontent-%COMP%]   .tech-icon[_ngcontent-%COMP%]{filter:drop-shadow(2px 4px 6px rgba(0,0,0,.2));font-size:3rem;transition:color .3s ease}.icon-container[_ngcontent-%COMP%]   .tech-icon.fa-angular[_ngcontent-%COMP%]{color:#dd0031}.icon-container[_ngcontent-%COMP%]   .tech-icon.fa-react[_ngcontent-%COMP%]{color:#61dafb}.icon-container[_ngcontent-%COMP%]   .tech-icon.fa-node-js[_ngcontent-%COMP%]{color:#68a063}.icon-container[_ngcontent-%COMP%]   .tech-icon.fa-code[_ngcontent-%COMP%]{color:#5c2d91}.icon-container[_ngcontent-%COMP%]   .tech-icon.fa-js[_ngcontent-%COMP%]{color:#f7df1e}.icon-container[_ngcontent-%COMP%]   .tech-icon.fa-html5[_ngcontent-%COMP%]{color:#e34f26}.icon-container[_ngcontent-%COMP%]   .tech-icon.fa-css3-alt[_ngcontent-%COMP%]{color:#1572b6}.icon-container[_ngcontent-%COMP%]   .tech-icon.fa-python[_ngcontent-%COMP%]{color:#3776ab}.icon-container[_ngcontent-%COMP%]   .tech-icon.fa-java[_ngcontent-%COMP%]{color:#007396}.icon-container[_ngcontent-%COMP%]   .tech-icon.fa-android[_ngcontent-%COMP%]{color:#3ddc84}.icon-container[_ngcontent-%COMP%]   .tech-icon.fa-apple[_ngcontent-%COMP%]{color:#999}.icon-container[_ngcontent-%COMP%]   .tech-icon.fa-git[_ngcontent-%COMP%]{color:#f05032}.icon-container[_ngcontent-%COMP%]   .tech-icon.fa-docker[_ngcontent-%COMP%]{color:#2496ed}.icon-container[_ngcontent-%COMP%]   .tech-icon.fa-aws[_ngcontent-%COMP%]{color:#f90}.icon-container[_ngcontent-%COMP%]   .tech-icon.fa-terminal[_ngcontent-%COMP%]{color:#007acc}.icon-container[_ngcontent-%COMP%]   .tech-icon.fa-linux[_ngcontent-%COMP%]{color:#fcc624}.icon-container[_ngcontent-%COMP%]   .tech-icon.fa-windows[_ngcontent-%COMP%]{color:#0078d6}.icon-container[_ngcontent-%COMP%]   .tech-icon.fa-php[_ngcontent-%COMP%]{color:#777bb4}.icon-container[_ngcontent-%COMP%]   .tech-icon.fa-ruby[_ngcontent-%COMP%]{color:#cc342d}.icon-container[_ngcontent-%COMP%]   .tech-icon.fa-sass[_ngcontent-%COMP%]{color:#c69}.icon-container[_ngcontent-%COMP%]   .tech-icon.fa-bootstrap[_ngcontent-%COMP%]{color:#563d7c}.icon-container[_ngcontent-%COMP%]   .tech-icon.fa-npm[_ngcontent-%COMP%]{color:#cb3837}.icon-container[_ngcontent-%COMP%]   .tech-icon.fa-yarn[_ngcontent-%COMP%]{color:#2c8ebb}@media (max-width: 768px){.icon-container[_ngcontent-%COMP%]{grid-template-columns:repeat(5,1fr);grid-template-rows:repeat(5,auto);gap:10px}.icon-container[_ngcontent-%COMP%]   .tech-icon[_ngcontent-%COMP%]{font-size:2rem}}@media (min-width: 1023px) and (max-width: 1024px){.icon-container[_ngcontent-%COMP%]{grid-template-columns:repeat(5,1fr);grid-template-rows:repeat(5,auto);gap:15px}.icon-container[_ngcontent-%COMP%]   .tech-icon[_ngcontent-%COMP%]{font-size:2.5rem}}"]});let s=r;return s})();var A=(()=>{let r=class r{constructor(l){this.themeService=l}ngOnInit(){this.themeService.currentTheme.subscribe(l=>{this.theme=l===f.Light?"light":"dark"})}};r.\u0275fac=function(g){return new(g||r)(p(P))},r.\u0275cmp=d({type:r,selectors:[["app-profile"]],standalone:!0,features:[m],decls:86,vars:43,consts:[[1,"wrapper",3,"ngClass"],[1,"bio-container",3,"ngClass"],[1,"left-column",3,"ngClass"],[1,"bio-content",3,"ngClass"],[3,"ngClass"],["href","https://gitlaws.github.io/angular-net-connect/","target","_blank","rel","noopener",3,"ngClass"],["href","https://gitlaws.github.io/PortfoliYOLO/","target","_blank","rel","noopener",3,"ngClass"],["href","https://github.com/laws","target","_blank","rel","noopener",3,"ngClass"],["href","https://ignitebase.firebaseapp.com/","target","_blank","rel","noopener",3,"ngClass"],[1,"divider",3,"ngClass"],[1,"right-column",3,"ngClass"],[1,"spaced-component"]],template:function(g,n){g&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h1",4),o(5,"Experience"),a(),i(6,"p",4),o(7," With a solid foundation in full-stack development and keen on crafting clean, efficient code, I\u2019m excited to dive into all stages of development\u2014from design and coding to troubleshooting and debugging. "),a(),i(8,"h2",4),o(9,"Here\u2019s what I bring to the table:"),a(),i(10,"h3",4),o(11,"Full-Stack Expertise"),a(),i(12,"p",4),o(13," My hands-on experience spans both front-end and back-end technologies, including Angular, React, and database integration. "),a(),i(14,"h3",4),o(15,"Performance Optimization"),a(),i(16,"p",4),o(17," I specialize in transforming slow applications into high-performance scalable apps, enhancing user experience through effective code refactoring and optimization. "),a(),i(18,"h3",4),o(19,"Continuous Learning"),a(),i(20,"p",4),o(21," Following industry trends and tools is a priority for me. Whether it\u2019s exploring AI technologies or the latest code methods and engaging with developer communities, I\u2019m committed to ongoing growth and learning. "),a(),i(22,"h3",4),o(23,"Project Management"),a(),i(24,"p",4),o(25," I employ a rigorous SDLC-based approach to deliver successful projects, effectively balancing structure with agile adaptability. "),a(),i(26,"h2",4),o(27,"Technical Skills"),a(),i(28,"ul",4)(29,"li",4)(30,"strong",4),o(31,"Front End:"),a(),o(32," Angular, React/Redux/Native, PHP, jQuery, SASS, HTML5, CSS3, JavaScript, TypeScript, UI/UX "),a(),i(33,"li",4)(34,"strong",4),o(35,"Back End:"),a(),o(36," Node.js, Spring Boot, Kotlin, PostgreSQL, Ruby on Rails, C# .Net, JSON, API integration "),a(),i(37,"li",4)(38,"strong",4),o(39,"Principles & Methodologies:"),a(),o(40," Clean Code, SDLC, Responsive design, SOLID, Agile, Scrum "),a(),i(41,"li",4)(42,"strong",4),o(43,"AI:"),a(),o(44," GitHub Copilot, Gemini, ChatGPT, etc. "),a()(),i(45,"h2",4),o(46,"Projects"),a(),i(47,"ul",4)(48,"li",4)(49,"strong",4),o(50,"Angular Essentials:"),a(),o(51," Core Angular Components, Services, Pipes, Directives + API Integration "),c(52,"br"),i(53,"a",5),o(54,"Project Demo"),a()(),i(55,"li",4)(56,"strong",4),o(57,"PortfoliYOLO:"),a(),o(58," Crafted Angular portfolio site template with Single Page Application routes, responsive design, UI/UX with a variety of functionalities. "),c(59,"br"),i(60,"a",6),o(61,"Project Demo"),a()(),i(62,"li",4)(63,"strong",4),o(64,"REST CRUD:"),a(),o(65," Crafted a Bootstrap Angular REST CRUD app with JSON Server for structured data management. "),c(66,"br"),i(67,"a",7),o(68,"Project Demo"),a()(),i(69,"li",4)(70,"strong",4),o(71,"Ignite:"),a(),o(72," Firebase & Google Cloud App with secure user authentication, real-time updates, and personalized profiles. "),c(73,"br"),i(74,"a",8),o(75,"Project Demo"),a()()(),i(76,"h2",4),o(77,"Education"),a(),i(78,"p",4),o(79," Business Administration - LCC Stars, 2013 "),c(80,"br"),o(81," Self-Taught: I've mastered a diverse range of tech skills and proven my abilities through my work. "),a()()(),c(82,"div",9),i(83,"div",10),c(84,"app-link-tree",11)(85,"app-videos",11),a()()()),g&2&&(e("ngClass",n.theme),t(),e("ngClass",n.theme),t(),e("ngClass",n.theme),t(),e("ngClass",n.theme),t(),e("ngClass",n.theme),t(2),e("ngClass",n.theme),t(2),e("ngClass",n.theme),t(2),e("ngClass",n.theme),t(2),e("ngClass",n.theme),t(2),e("ngClass",n.theme),t(2),e("ngClass",n.theme),t(2),e("ngClass",n.theme),t(2),e("ngClass",n.theme),t(2),e("ngClass",n.theme),t(2),e("ngClass",n.theme),t(2),e("ngClass",n.theme),t(2),e("ngClass",n.theme),t(),e("ngClass",n.theme),t(),e("ngClass",n.theme),t(3),e("ngClass",n.theme),t(),e("ngClass",n.theme),t(3),e("ngClass",n.theme),t(),e("ngClass",n.theme),t(3),e("ngClass",n.theme),t(),e("ngClass",n.theme),t(3),e("ngClass",n.theme),t(2),e("ngClass",n.theme),t(),e("ngClass",n.theme),t(),e("ngClass",n.theme),t(4),e("ngClass",n.theme),t(2),e("ngClass",n.theme),t(),e("ngClass",n.theme),t(4),e("ngClass",n.theme),t(2),e("ngClass",n.theme),t(),e("ngClass",n.theme),t(4),e("ngClass",n.theme),t(2),e("ngClass",n.theme),t(),e("ngClass",n.theme),t(4),e("ngClass",n.theme),t(2),e("ngClass",n.theme),t(2),e("ngClass",n.theme),t(4),e("ngClass",n.theme),t(),e("ngClass",n.theme))},dependencies:[h,C,u,x],styles:['@charset "UTF-8";@keyframes _ngcontent-%COMP%_rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;padding:20px}.wrapper.light[_ngcontent-%COMP%]{background:linear-gradient(270deg,#d3d3d3,#a9a9a9,#d3d3d3);background-size:600% 600%}.wrapper.dark[_ngcontent-%COMP%]{background:linear-gradient(270deg,#1c1c1c,#363636,#1c1c1c);background-size:600% 600%}.bio-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-top:100px;margin-bottom:100px;padding:20px;max-width:1240px}.bio-container.light[_ngcontent-%COMP%]{background-color:#e8e8e8;color:#2e2e2e;border:1px solid #d1d1d1;box-shadow:0 2px 4px #2e2e2e80}.bio-container.dark[_ngcontent-%COMP%]{background-color:#2e2e2e;color:#e8e8e8;border:1px solid #1f1f1f;box-shadow:0 2px 4px #2e2e2e80}@media (min-width: 1023px){.bio-container[_ngcontent-%COMP%]{flex-direction:row}}@media (min-width: 1240px){.bio-container[_ngcontent-%COMP%]{padding:40px}}@media (max-width: 320px){.bio-container[_ngcontent-%COMP%]{padding:10px;margin-top:50px;margin-bottom:50px}}.bio-container[_ngcontent-%COMP%]   .left-column[_ngcontent-%COMP%], .bio-container[_ngcontent-%COMP%]   .right-column[_ngcontent-%COMP%]{flex:1;padding:20px}@media (max-width: 320px){.bio-container[_ngcontent-%COMP%]   .left-column[_ngcontent-%COMP%], .bio-container[_ngcontent-%COMP%]   .right-column[_ngcontent-%COMP%]{padding:10px}}.bio-container[_ngcontent-%COMP%]   .left-column[_ngcontent-%COMP%]   .bio-content[_ngcontent-%COMP%]{flex-grow:1;line-height:1.6}.bio-container[_ngcontent-%COMP%]   .left-column[_ngcontent-%COMP%]   .bio-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .bio-container[_ngcontent-%COMP%]   .left-column[_ngcontent-%COMP%]   .bio-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .bio-container[_ngcontent-%COMP%]   .left-column[_ngcontent-%COMP%]   .bio-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-bottom:10px;font-weight:700;letter-spacing:.5px}.bio-container[_ngcontent-%COMP%]   .left-column[_ngcontent-%COMP%]   .bio-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:1.5em}@media (max-width: 320px){.bio-container[_ngcontent-%COMP%]   .left-column[_ngcontent-%COMP%]   .bio-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:1.2em}}.bio-container[_ngcontent-%COMP%]   .left-column[_ngcontent-%COMP%]   .bio-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.25em;margin-top:20px}@media (max-width: 320px){.bio-container[_ngcontent-%COMP%]   .left-column[_ngcontent-%COMP%]   .bio-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1em}}.bio-container[_ngcontent-%COMP%]   .left-column[_ngcontent-%COMP%]   .bio-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1em;margin-top:20px}@media (max-width: 320px){.bio-container[_ngcontent-%COMP%]   .left-column[_ngcontent-%COMP%]   .bio-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:.85em}}.bio-container[_ngcontent-%COMP%]   .left-column[_ngcontent-%COMP%]   .bio-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:20px}@media (max-width: 320px){.bio-container[_ngcontent-%COMP%]   .left-column[_ngcontent-%COMP%]   .bio-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:10px}}.bio-container[_ngcontent-%COMP%]   .left-column[_ngcontent-%COMP%]   .bio-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style-type:none;margin-left:20px;padding-left:10px}.bio-container[_ngcontent-%COMP%]   .left-column[_ngcontent-%COMP%]   .bio-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\2022";font-weight:700;display:inline-block;width:1em;margin-left:-1em}.bio-container[_ngcontent-%COMP%]   .left-column[_ngcontent-%COMP%]   .bio-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.light[_ngcontent-%COMP%]:before{color:#4682b4}.bio-container[_ngcontent-%COMP%]   .left-column[_ngcontent-%COMP%]   .bio-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.dark[_ngcontent-%COMP%]:before{color:#daa520}.bio-container[_ngcontent-%COMP%]   .left-column[_ngcontent-%COMP%]   .bio-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;font-weight:700}.bio-container[_ngcontent-%COMP%]   .left-column[_ngcontent-%COMP%]   .bio-content[_ngcontent-%COMP%]   a.light[_ngcontent-%COMP%]{color:#4682b4}.bio-container[_ngcontent-%COMP%]   .left-column[_ngcontent-%COMP%]   .bio-content[_ngcontent-%COMP%]   a.dark[_ngcontent-%COMP%]{color:#daa520}.bio-container[_ngcontent-%COMP%]   .left-column[_ngcontent-%COMP%]   .bio-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}.bio-container[_ngcontent-%COMP%]   .left-column[_ngcontent-%COMP%]   .bio-content[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]{font-style:italic}.divider[_ngcontent-%COMP%]{width:1px;background-color:#4a4a4a;margin:0 20px;order:2}@media (max-width: 767px){.divider[_ngcontent-%COMP%]{display:none}}.right-column[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;text-align:center;order:3}.right-column[_ngcontent-%COMP%]   .spaced-component[_ngcontent-%COMP%]{margin-bottom:60px}.right-column[_ngcontent-%COMP%]   .spaced-component[_ngcontent-%COMP%]:last-child{margin-bottom:0}']});let s=r;return s})();export{A as a};