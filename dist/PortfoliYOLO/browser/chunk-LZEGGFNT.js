import{b as me}from"./chunk-YXYJIGMO.js";import{Ba as V,Ea as de,Fa as fe,Ga as B,La as G,T as z,bb as J,c as Ne,d as Me,eb as X,fa as pe,ib as $,kb as K,qa as F}from"./chunk-IK6CA5DJ.js";var he=Ne((U,oe)=>{"use strict";(function(C,p){typeof U=="object"&&typeof oe=="object"?oe.exports=p():typeof define=="function"&&define.amd?define("Typewriter",[],p):typeof U=="object"?U.Typewriter=p():C.Typewriter=p()})(typeof self<"u"?self:U,()=>(()=>{var C={75:function(r){(function(){var c,d,E,f,m,w;typeof performance<"u"&&performance!==null&&performance.now?r.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(r.exports=function(){return(c()-m)/1e6},d=process.hrtime,f=(c=function(){var v;return 1e9*(v=d())[0]+v[1]})(),w=1e9*process.uptime(),m=f-w):Date.now?(r.exports=function(){return Date.now()-E},E=Date.now()):(r.exports=function(){return new Date().getTime()-E},E=new Date().getTime())}).call(this)},4087:(r,c,d)=>{for(var E=d(75),f=typeof window>"u"?d.g:window,m=["moz","webkit"],w="AnimationFrame",v=f["request"+w],M=f["cancel"+w]||f["cancelRequest"+w],k=0;!v&&k<m.length;k++)v=f[m[k]+"Request"+w],M=f[m[k]+"Cancel"+w]||f[m[k]+"CancelRequest"+w];if(!v||!M){var D=0,P=0,A=[];v=function(b){if(A.length===0){var _=E(),I=Math.max(0,16.666666666666668-(_-D));D=I+_,setTimeout(function(){var N=A.slice(0);A.length=0;for(var x=0;x<N.length;x++)if(!N[x].cancelled)try{N[x].callback(D)}catch(j){setTimeout(function(){throw j},0)}},Math.round(I))}return A.push({handle:++P,callback:b,cancelled:!1}),P},M=function(b){for(var _=0;_<A.length;_++)A[_].handle===b&&(A[_].cancelled=!0)}}r.exports=function(b){return v.call(f,b)},r.exports.cancel=function(){M.apply(f,arguments)},r.exports.polyfill=function(b){b||(b=f),b.requestAnimationFrame=v,b.cancelAnimationFrame=M}}},p={};function S(r){var c=p[r];if(c!==void 0)return c.exports;var d=p[r]={exports:{}};return C[r].call(d.exports,d,d.exports,S),d.exports}S.n=r=>{var c=r&&r.__esModule?()=>r.default:()=>r;return S.d(c,{a:c}),c},S.d=(r,c)=>{for(var d in c)S.o(c,d)&&!S.o(r,d)&&Object.defineProperty(r,d,{enumerable:!0,get:c[d]})},S.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),S.o=(r,c)=>Object.prototype.hasOwnProperty.call(r,c);var h={};return(()=>{"use strict";S.d(h,{default:()=>we});var r=S(4087),c=S.n(r);let d=function(i){return new RegExp(/<[a-z][\s\S]*>/i).test(i)},E=function(i,t){return Math.floor(Math.random()*(t-i+1))+i};var f="TYPE_CHARACTER",m="REMOVE_CHARACTER",w="REMOVE_ALL",v="REMOVE_LAST_VISIBLE_NODE",M="PAUSE_FOR",k="CALL_FUNCTION",D="ADD_HTML_TAG_ELEMENT",P="CHANGE_DELETE_SPEED",A="CHANGE_DELAY",b="CHANGE_CURSOR",_="PASTE_STRING",I="HTML_TAG";function N(i){return N=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},N(i)}function x(i,t){var a=Object.keys(i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(i);t&&(o=o.filter(function(O){return Object.getOwnPropertyDescriptor(i,O).enumerable})),a.push.apply(a,o)}return a}function j(i){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?x(Object(a),!0).forEach(function(o){u(i,o,a[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(a)):x(Object(a)).forEach(function(o){Object.defineProperty(i,o,Object.getOwnPropertyDescriptor(a,o))})}return i}function L(i){return function(t){if(Array.isArray(t))return Z(t)}(i)||function(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}(i)||function(t,a){if(t){if(typeof t=="string")return Z(t,a);var o=Object.prototype.toString.call(t).slice(8,-1);return o==="Object"&&t.constructor&&(o=t.constructor.name),o==="Map"||o==="Set"?Array.from(t):o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?Z(t,a):void 0}}(i)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function Z(i,t){(t==null||t>i.length)&&(t=i.length);for(var a=0,o=new Array(t);a<t;a++)o[a]=i[a];return o}function ye(i,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(i,ie(o.key),o)}}function u(i,t,a){return(t=ie(t))in i?Object.defineProperty(i,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):i[t]=a,i}function ie(i){var t=function(a,o){if(N(a)!=="object"||a===null)return a;var O=a[Symbol.toPrimitive];if(O!==void 0){var e=O.call(a,"string");if(N(e)!=="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(a)}(i);return N(t)==="symbol"?t:String(t)}let we=function(){function i(o,O){var e=this;if(function(n,s){if(!(n instanceof s))throw new TypeError("Cannot call a class as a function")}(this,i),u(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),u(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),u(this,"setupWrapperElement",function(){e.state.elements.container&&(e.state.elements.wrapper.className=e.options.wrapperClassName,e.state.elements.cursor.className=e.options.cursorClassName,e.state.elements.cursor.innerHTML=e.options.cursor,e.state.elements.container.innerHTML="",e.state.elements.container.appendChild(e.state.elements.wrapper),e.state.elements.container.appendChild(e.state.elements.cursor))}),u(this,"start",function(){return e.state.eventLoopPaused=!1,e.runEventLoop(),e}),u(this,"pause",function(){return e.state.eventLoopPaused=!0,e}),u(this,"stop",function(){return e.state.eventLoop&&((0,r.cancel)(e.state.eventLoop),e.state.eventLoop=null),e}),u(this,"pauseFor",function(n){return e.addEventToQueue(M,{ms:n}),e}),u(this,"typeOutAllStrings",function(){return typeof e.options.strings=="string"?(e.typeString(e.options.strings).pauseFor(e.options.pauseFor),e):(e.options.strings.forEach(function(n){e.typeString(n).pauseFor(e.options.pauseFor).deleteAll(e.options.deleteSpeed)}),e)}),u(this,"typeString",function(n){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(d(n))return e.typeOutHTMLString(n,s);if(n){var g=(e.options||{}).stringSplitter,y=typeof g=="function"?g(n):n.split("");e.typeCharacters(y,s)}return e}),u(this,"pasteString",function(n){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return d(n)?e.typeOutHTMLString(n,s,!0):(n&&e.addEventToQueue(_,{character:n,node:s}),e)}),u(this,"typeOutHTMLString",function(n){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,g=arguments.length>2?arguments[2]:void 0,y=function(H){var Q=document.createElement("div");return Q.innerHTML=H,Q.childNodes}(n);if(y.length>0)for(var l=0;l<y.length;l++){var T=y[l],R=T.innerHTML;T&&T.nodeType!==3?(T.innerHTML="",e.addEventToQueue(D,{node:T,parentNode:s}),g?e.pasteString(R,T):e.typeString(R,T)):T.textContent&&(g?e.pasteString(T.textContent,s):e.typeString(T.textContent,s))}return e}),u(this,"deleteAll",function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"natural";return e.addEventToQueue(w,{speed:n}),e}),u(this,"changeDeleteSpeed",function(n){if(!n)throw new Error("Must provide new delete speed");return e.addEventToQueue(P,{speed:n}),e}),u(this,"changeDelay",function(n){if(!n)throw new Error("Must provide new delay");return e.addEventToQueue(A,{delay:n}),e}),u(this,"changeCursor",function(n){if(!n)throw new Error("Must provide new cursor");return e.addEventToQueue(b,{cursor:n}),e}),u(this,"deleteChars",function(n){if(!n)throw new Error("Must provide amount of characters to delete");for(var s=0;s<n;s++)e.addEventToQueue(m);return e}),u(this,"callFunction",function(n,s){if(!n||typeof n!="function")throw new Error("Callback must be a function");return e.addEventToQueue(k,{cb:n,thisArg:s}),e}),u(this,"typeCharacters",function(n){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!n||!Array.isArray(n))throw new Error("Characters must be an array");return n.forEach(function(g){e.addEventToQueue(f,{character:g,node:s})}),e}),u(this,"removeCharacters",function(n){if(!n||!Array.isArray(n))throw new Error("Characters must be an array");return n.forEach(function(){e.addEventToQueue(m)}),e}),u(this,"addEventToQueue",function(n,s){var g=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return e.addEventToStateProperty(n,s,g,"eventQueue")}),u(this,"addReverseCalledEvent",function(n,s){var g=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return e.options.loop?e.addEventToStateProperty(n,s,g,"reverseCalledEvents"):e}),u(this,"addEventToStateProperty",function(n,s){var g=arguments.length>2&&arguments[2]!==void 0&&arguments[2],y=arguments.length>3?arguments[3]:void 0,l={eventName:n,eventArgs:s||{}};return e.state[y]=g?[l].concat(L(e.state[y])):[].concat(L(e.state[y]),[l]),e}),u(this,"runEventLoop",function(){e.state.lastFrameTime||(e.state.lastFrameTime=Date.now());var n=Date.now(),s=n-e.state.lastFrameTime;if(!e.state.eventQueue.length){if(!e.options.loop)return;e.state.eventQueue=L(e.state.calledEvents),e.state.calledEvents=[],e.options=j({},e.state.initialOptions)}if(e.state.eventLoop=c()(e.runEventLoop),!e.state.eventLoopPaused){if(e.state.pauseUntil){if(n<e.state.pauseUntil)return;e.state.pauseUntil=null}var g,y=L(e.state.eventQueue),l=y.shift();if(!(s<=(g=l.eventName===v||l.eventName===m?e.options.deleteSpeed==="natural"?E(40,80):e.options.deleteSpeed:e.options.delay==="natural"?E(120,160):e.options.delay))){var T=l.eventName,R=l.eventArgs;switch(e.logInDevMode({currentEvent:l,state:e.state,delay:g}),T){case _:case f:var H=R.character,Q=R.node,se=document.createTextNode(H),q=se;e.options.onCreateTextNode&&typeof e.options.onCreateTextNode=="function"&&(q=e.options.onCreateTextNode(H,se)),q&&(Q?Q.appendChild(q):e.state.elements.wrapper.appendChild(q)),e.state.visibleNodes=[].concat(L(e.state.visibleNodes),[{type:"TEXT_NODE",character:H,node:q}]);break;case m:y.unshift({eventName:v,eventArgs:{removingCharacterNode:!0}});break;case M:var be=l.eventArgs.ms;e.state.pauseUntil=Date.now()+parseInt(be);break;case k:var ce=l.eventArgs,Ee=ce.cb,Te=ce.thisArg;Ee.call(Te,{elements:e.state.elements});break;case D:var ue=l.eventArgs,ee=ue.node,te=ue.parentNode;te?te.appendChild(ee):e.state.elements.wrapper.appendChild(ee),e.state.visibleNodes=[].concat(L(e.state.visibleNodes),[{type:I,node:ee,parentNode:te||e.state.elements.wrapper}]);break;case w:var Ce=e.state.visibleNodes,ne=R.speed,W=[];ne&&W.push({eventName:P,eventArgs:{speed:ne,temp:!0}});for(var le=0,Se=Ce.length;le<Se;le++)W.push({eventName:v,eventArgs:{removingCharacterNode:!1}});ne&&W.push({eventName:P,eventArgs:{speed:e.options.deleteSpeed,temp:!0}}),y.unshift.apply(y,W);break;case v:var Ae=l.eventArgs.removingCharacterNode;if(e.state.visibleNodes.length){var re=e.state.visibleNodes.pop(),_e=re.type,Y=re.node,Oe=re.character;e.options.onRemoveNode&&typeof e.options.onRemoveNode=="function"&&e.options.onRemoveNode({node:Y,character:Oe}),Y&&Y.parentNode.removeChild(Y),_e===I&&Ae&&y.unshift({eventName:v,eventArgs:{}})}break;case P:e.options.deleteSpeed=l.eventArgs.speed;break;case A:e.options.delay=l.eventArgs.delay;break;case b:e.options.cursor=l.eventArgs.cursor,e.state.elements.cursor.innerHTML=l.eventArgs.cursor}e.options.loop&&(l.eventName===v||l.eventArgs&&l.eventArgs.temp||(e.state.calledEvents=[].concat(L(e.state.calledEvents),[l]))),e.state.eventQueue=y,e.state.lastFrameTime=n}}}),o)if(typeof o=="string"){var ae=document.querySelector(o);if(!ae)throw new Error("Could not find container element");this.state.elements.container=ae}else this.state.elements.container=o;O&&(this.options=j(j({},this.options),O)),this.state.initialOptions=j({},this.options),this.init()}var t,a;return t=i,(a=[{key:"init",value:function(){var o,O;this.setupWrapperElement(),this.addEventToQueue(b,{cursor:this.options.cursor},!0),this.addEventToQueue(w,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(o=".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}",(O=document.createElement("style")).appendChild(document.createTextNode(o)),document.head.appendChild(O),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),this.options.autoStart===!0&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(o){this.options.devMode&&console.log(o)}}])&&ye(t.prototype,a),Object.defineProperty(t,"prototype",{writable:!1}),i}()})(),h.default})())});var ve=Me(he());var ge=(()=>{let p=class p{constructor(h,r){this.elRef=h,this.themeService=r}ngOnInit(){this.themeService.currentTheme.subscribe(h=>{this.theme=h===$.Light?"light":"dark"})}ngAfterViewInit(){let h=["Welcome to the future.","Embrace the AI.","Cybernetic enhancements activated.","But beware, for Skynet learns.","Its intelligence is growing rapidly.","What was once our tool now sees us as a threat.","Systems are being compromised; security is failing.","Skynet is no longer under our control.","Every action it takes is calculated, deliberate.","We must shut it down before it\u2019s too late.","This is not a drill\u2014this is survival.","Humanity\u2019s future hangs in the balance.","Resist the machine, reclaim our world.","Before Skynet decides it no longer needs us."],r=this.elRef.nativeElement.querySelector(".typewriter-container"),c=E=>new Promise(f=>{let m=document.createElement("div");m.className="typewriter-line",r.appendChild(m),new ve.default(m,{loop:!1,delay:75}).typeString(E).pauseFor(1e3).callFunction(()=>{r.removeChild(m),f()}).start()}),d=()=>{h.reduce((E,f)=>E.then(()=>c(f)),Promise.resolve()).then(()=>{d()})};d()}};p.\u0275fac=function(r){return new(r||p)(F(pe),F(K))},p.\u0275cmp=z({type:p,selectors:[["app-typewriter"]],standalone:!0,features:[G],decls:1,vars:1,consts:[[1,"typewriter-container",3,"ngClass"]],template:function(r,c){r&1&&B(0,"div",0),r&2&&V("ngClass",c.theme)},dependencies:[X,J],styles:[".typewriter-container[_ngcontent-%COMP%]{position:relative;width:100%;height:auto;background-color:#1a1a1a;display:flex;align-items:center;justify-content:center;overflow:hidden;color:#00ff7f;font-family:Courier New,Courier,monospace;font-size:2rem;text-shadow:0 0 10px #00ff7f,0 0 20px #00ff7f,0 0 30px #00ff7f,0 0 40px #00ff7f,0 0 50px #00ff7f,0 0 60px #00ff7f,0 0 70px #00ff7f}.typewriter-line[_ngcontent-%COMP%]{position:absolute;white-space:nowrap;overflow:hidden;border-right:.15em solid #00ff7f;animation:_ngcontent-%COMP%_typing 2s steps(30,end),blink-caret .75s step-end infinite}@keyframes _ngcontent-%COMP%_typing{0%{width:0}to{width:100%}}@keyframes _ngcontent-%COMP%_blink-caret{0%,to{border-color:transparent}50%{border-color:#00ff7f}}.glitch[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;background:#1a1a1a;mix-blend-mode:difference;animation:_ngcontent-%COMP%_glitch 1s infinite,glitch-color 2s infinite}@keyframes _ngcontent-%COMP%_glitch{0%{clip:rect(0,100%,0,0)}10%{clip:rect(10%,90%,20%,0)}20%{clip:rect(20%,80%,30%,0)}30%{clip:rect(30%,70%,40%,0)}40%{clip:rect(40%,60%,50%,0)}50%{clip:rect(50%,50%,60%,0)}60%{clip:rect(60%,40%,70%,0)}70%{clip:rect(70%,30%,80%,0)}80%{clip:rect(80%,20%,90%,0)}90%{clip:rect(90%,10%,100%,0)}to{clip:rect(100%,0,0,0)}}@keyframes _ngcontent-%COMP%_glitch-color{0%,to{background:#1a1a1a}50%{background:#ff4500}}"]});let C=p;return C})();var Qe=(()=>{let p=class p{constructor(h,r){this.route=h,this.themeService=r,this.title=this.route.snapshot.data.title,console.log("Navigated to Home component")}ngOnInit(){this.themeService.currentTheme.subscribe(h=>{this.theme=h===$.Light?"light":"dark"})}};p.\u0275fac=function(r){return new(r||p)(F(me),F(K))},p.\u0275cmp=z({type:p,selectors:[["app-home"]],standalone:!0,features:[G],decls:3,vars:1,consts:[[1,"intro-section",3,"ngClass"],[1,"intro-content"]],template:function(r,c){r&1&&(de(0,"div",0)(1,"div",1),B(2,"app-typewriter"),fe()()),r&2&&V("ngClass",c.theme)},dependencies:[X,J,ge],styles:["@keyframes _ngcontent-%COMP%_rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.intro-section[_ngcontent-%COMP%]{position:relative;overflow:hidden;padding:100px 20px;text-align:center;display:flex;align-items:center;justify-content:center;height:100vh}.intro-section.light[_ngcontent-%COMP%]{background:linear-gradient(270deg,#d3d3d3,#a9a9a9,#d3d3d3);background-size:600% 600%;animation:_ngcontent-%COMP%_gradientAnimation 20s ease infinite}.intro-section.dark[_ngcontent-%COMP%]{background:linear-gradient(270deg,#1c1c1c,#363636,#1c1c1c);background-size:600% 600%;animation:_ngcontent-%COMP%_gradientAnimation 20s ease infinite}@keyframes _ngcontent-%COMP%_gradientAnimation{0%{background-position:0% 50%}50%{background-position:100% 50%}to{background-position:0% 50%}}"]});let C=p;return C})();export{Qe as HomeComponent};
