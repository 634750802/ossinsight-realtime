import{v as z,x as te,y as K,z as U,a3 as se,q as _e,G as fe,_ as k,o as i,b as v,a1 as oe,e as $,r as x,n as T,k as ae,d as f,t as I,a4 as le,a5 as ve,W as he,a6 as Q,i as d,Z as M,F as J,X as re,u as a,a7 as R,a2 as V,a8 as me,g as C,p as O,j as D,a as Y,a9 as ge,w as q,f as E,aa as ye,m as Se,Y as Z,l as be,ab as Le,ac as xe,a0 as Ce}from"./main.617f12e4.js";import{_ as Ae,F as B,u as we}from"./element-size.e59491bf.js";import{o as ie,c as ue,e as ee,_ as Pe,u as ke,A as F}from"./gh-repo.vue_vue_type_script_setup_true_lang.28a21a14.js";var ce={now:function(){return(ce.delegate||Date).now()},delegate:void 0},Me=function(e){z(o,e);function o(n,t){return e.call(this)||this}return o.prototype.schedule=function(n,t){return this},o}(te),G={setInterval:function(e,o){for(var n=[],t=2;t<arguments.length;t++)n[t-2]=arguments[t];var s=G.delegate;return s!=null&&s.setInterval?s.setInterval.apply(s,K([e,o],U(n))):setInterval.apply(void 0,K([e,o],U(n)))},clearInterval:function(e){var o=G.delegate;return((o==null?void 0:o.clearInterval)||clearInterval)(e)},delegate:void 0},$e=function(e){z(o,e);function o(n,t){var s=e.call(this,n,t)||this;return s.scheduler=n,s.work=t,s.pending=!1,s}return o.prototype.schedule=function(n,t){if(t===void 0&&(t=0),this.closed)return this;this.state=n;var s=this.id,l=this.scheduler;return s!=null&&(this.id=this.recycleAsyncId(l,s,t)),this.pending=!0,this.delay=t,this.id=this.id||this.requestAsyncId(l,this.id,t),this},o.prototype.requestAsyncId=function(n,t,s){return s===void 0&&(s=0),G.setInterval(n.flush.bind(n,this),s)},o.prototype.recycleAsyncId=function(n,t,s){if(s===void 0&&(s=0),s!=null&&this.delay===s&&this.pending===!1)return t;G.clearInterval(t)},o.prototype.execute=function(n,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var s=this._execute(n,t);if(s)return s;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},o.prototype._execute=function(n,t){var s=!1,l;try{this.work(n)}catch(y){s=!0,l=y||new Error("Scheduled action threw falsy error")}if(s)return this.unsubscribe(),l},o.prototype.unsubscribe=function(){if(!this.closed){var n=this,t=n.id,s=n.scheduler,l=s.actions;this.work=this.state=this.scheduler=null,this.pending=!1,se(l,this),t!=null&&(this.id=this.recycleAsyncId(s,t,null)),this.delay=null,e.prototype.unsubscribe.call(this)}},o}(Me),ne=function(){function e(o,n){n===void 0&&(n=e.now),this.schedulerActionCtor=o,this.now=n}return e.prototype.schedule=function(o,n,t){return n===void 0&&(n=0),new this.schedulerActionCtor(this,o).schedule(t,n)},e.now=ce.now,e}(),Ie=function(e){z(o,e);function o(n,t){t===void 0&&(t=ne.now);var s=e.call(this,n,t)||this;return s.actions=[],s._active=!1,s._scheduled=void 0,s}return o.prototype.flush=function(n){var t=this.actions;if(this._active){t.push(n);return}var s;this._active=!0;do if(s=n.execute(n.state,n.delay))break;while(n=t.shift());if(this._active=!1,s){for(;n=t.shift();)n.unsubscribe();throw s}},o}(ne),Be=new Ie($e);function Ve(e){return e&&_e(e.schedule)}function Re(e){return e[e.length-1]}function Ee(e){return Ve(Re(e))?e.pop():void 0}function Fe(e,o){return ie(function(n,t){var s=0;n.subscribe(ue(t,function(l){return e.call(o,l,s++)&&t.next(l)}))})}function Te(e){for(var o,n,t=[],s=1;s<arguments.length;s++)t[s-1]=arguments[s];var l=(o=Ee(t))!==null&&o!==void 0?o:Be,y=(n=t[0])!==null&&n!==void 0?n:null,A=t[1]||1/0;return ie(function(w,c){var u=[],p=!1,_=function(r){var g=r.buffer,m=r.subs;m.unsubscribe(),se(u,r),c.next(g),p&&b()},b=function(){if(u){var r=new te;c.add(r);var g=[],m={buffer:g,subs:r};u.push(m),ee(r,l,function(){return _(m)},e)}};y!==null&&y>=0?ee(c,l,b,y,!0):p=!0,b();var h=ue(c,function(r){var g,m,P=u.slice();try{for(var S=fe(P),L=S.next();!L.done;L=S.next()){var N=L.value,W=N.buffer;W.push(r),A<=W.length&&_(N)}}catch(pe){g={error:pe}}finally{try{L&&!L.done&&(m=S.return)&&m.call(S)}finally{if(g)throw g.error}}},function(){for(;u!=null&&u.length;)c.next(u.shift().buffer);h==null||h.unsubscribe(),c.complete(),c.unsubscribe()},void 0,function(){return u=null});w.subscribe(h)})}const Ne=`JavaScript
Python
TypeScript
Java
Ruby
HTML
Go
C++
PHP
C#
CSS
C
Vue
Shell
Rust
Kotlin
Scala
Jupyter
Swift
PowerShell
Dart
SCSS
Objective-C
Julia
Makefile
DM
HCL
Dockerfile
R
Lua
Roff
Elixir
Groovy
Haskell
Perl
Nix
TeX
Clojure
OCaml
CoffeeScript
Smarty
Erlang
TSQL
CMake
Fortran
Svelte
Emacs
Solidity
Vim
MATLAB
Jinja
D
PLpgSQL
F#
Assembly
XSLT
Mustache
Blade
Puppet
SystemVerilog
Lean
Apex
Markdown
Starlark
EJS
Handlebars
Elm
Batchfile
Nim
GDScript
Crystal
Gherkin
Tcl
Rich
Jsonnet
VimL
Ballerina
Pascal
ShaderLab
Common
QML
Visual
Nunjucks
Twig
Cuda
Verilog
Smalltalk
Haxe
SQF
PureScript
BitBake
Liquid
Vala
SaltStack
Less
WebAssembly
Chapel
Mathematica
Hack
CodeQL
Coq
Nextflow
Bicep
PLSQL
Scheme
Zig
Reason
Objective-C++
Pug
VHDL
Stylus
Modelica
GLSL
V
GAP
Processing
Racket
Arduino
ASP
FreeMarker
SMT
ColdFusion
RobotFramework
Visual
ActionScript
Open
GCC
PostScript
ABAP
Ren'Py
Sass
Standard
Ada
SourcePawn
VBA
Gnuplot
Logos
ApacheConf
Brainfuck
Astro
API
AGS
wdl
Prolog
RAML
Xtend
XQuery
PureBasic
LLVM
AMPL
Agda
YAML
SWIG
JSON
SQLPL
mcfunction
Squirrel
ReScript
Raku
Yacc
Game
M4
Perl6
Groff
LiveScript
LookML
1C
AutoHotkey
Stata
Perl
ASP.NET
ZenScript
Protocol
NSIS
Web
Common
reStructuredText
DIGITAL
Idris
ANTLR
SAS
Eagle
MAXScript
AutoIt
NCL
Dhall
Cucumber
Isabelle
OpenEdge
UnrealScript
ooc
Nginx
OpenSCAD
Objective-J
Nimrod
Gosu
LabVIEW
XML
Inno
Thrift
Haml
COBOL
Slim
Smali
Lasso
Eiffel
AngelScript
KiCad
GAMS
YARA
Pawn
q
DataWeave
VCL
P4
Brightscript
F*
MLIR
CartoCSS
nesC
Pony
CUE
mIRC
Rascal
SQL
Marko
Max
SuperCollider
ASL
Slash
NASL
AL
Cirru
Mako
Meson
G-code
Gettext
NetLogo
Cython
HLSL
IDL
Vim
QMake
RPC
Red
Stan
Scilab
M
Fluent
Inform
OpenQASM
Dylan
LilyPond
Macaulay2
Forth
IGOR
LSL
Classic
EmberScript
Kaitai
MoonScript
XC
Zeek
Cairo
Awk
Motoko
CIL
Ecl
xBase
Cadence
ObjectScript
Factor
Diff
Lex
Pan
Terra
Papyrus
Rebol
Boogie
hoon
VBScript
AppleScript
JSONiq
PowerBuilder
POV-Ray
Propeller
Bikeshed
TLA
Mercury
MQL5
Riot
DTrace
LoomScript
Fennel
Odin
RenderScript
kvlang
Grammatical
Delphi
NewLisp
Io
HyPhy
Ceylon
Uno
Wollok
Augeas
Wikitext
Ring
BlitzMax
Harbour
Bluespec
Q#
BlitzBasic
Hy
sed
Latte
Component
Arc
Dafny
APL
YASnippet
WebIDL
PicoLisp
Bro
REXX
ZAP
Nu
Parrot
Sage
XProc
Cap'n
Pep8
Text
Pure
Xojo
Cool
SRecode
Turing
Alloy
Nemerle
Genshi
FreeBasic
CLIPS
Promela
PEG.js
E
AspectJ
Gleam
JetBrains
MQL4
Limbo
Move
Clean
HolyC
DOT
NWScript
CWeb
RouterOS
LigoLANG
Frege
Nit
Clarity
CAP
Mask
Oz
ATS
Boo
Slice
XS
Monkey
4D
Procfile
ImageJ
REALbasic
J
Ragel
GAML
NetLinx
Vyper
BASIC
Jolie
DenizenScript
Witcher
Csound
Mirah
ZIL
Logtalk
ABNF
RMarkdown
FLUX
PigLatin
AsciiDoc
HiveQL
Shen
LFE
Singularity
Bison
GDB
Kit
Monkey
Asymptote
Nearley
KRL
RPGLE
Turtle
Volt
KakouneScript
ChucK
LOLCODE
Self
Modula-2
eC
Jasmin
Futhark
Fantom
DCPU-16
BrighterScript
Modula-3
GSC
Wren
Faust
Fancy
Zephir
Portugol
wisp
SVG
SmPL
Janet
AL
Metal
Rouge
Golo
TXL
Pike
EQ
Ragel
Clarion
Oxygene
X10
Grace
StringTemplate
Earthly
Xonsh
UrWeb
Click
Csound
Euphoria
Zimpl
Beef
Ox
RUNOFF
Cycript
mupad
MTML
PogoScript
Moocode
Glyph
Dogescript
jq
KiCad
Qt
Opal
AIDL
INI
Org
Velocity
Csound
Nasal
CSON
Opa
Berry
Gerber
Tea
XPages
TI
CSV
Filebench
Genie
TOML
Wavefront
ABAP
Module
Redcode
Altium
Kusto
Talon
Closure
Charity
Edje
KiCad
Antlers
JFlex
Gradle
Ioke
Sieve
Mint
PlantUML
Windows
Curry
`,Ge=()=>{const e=new Set;return o=>e.has(o)?!1:(e.add(o),!0)},j=["Any Language",...Ne.split(`
`).filter(Boolean).filter(Ge())],Oe={inheritAttrs:!0,props:{elRef:{type:Function,required:!1}}};function De(e,o,n,t,s,l){return i(),v("ul",{class:"list",ref:n.elRef},[oe(e.$slots,"default",{},void 0,!0)],512)}const de=k(Oe,[["render",De],["__scopeId","data-v-c7f044ce"]]),Qe={class:"content"},qe=["onKeydown"],Xe=["onMousedown","onMouseenter"],je={key:0,class:"no-data"},ze=$({__name:"lang-select",props:{modelValue:null},emits:["update:modelValue"],setup(e,{emit:o}){const n=e,t=x(!1),s=x(""),l=x(),y=x(),A=x(!1),w=x(),c=x(),u=T(()=>w.value||c.value),p=()=>{typeof u.value=="number"&&(o("update:modelValue",g.value[u.value]),t.value=!1)},_=()=>{A.value=!1},b=m=>{A.value||(w.value=m,c.value=void 0)},h=()=>{A.value||(w.value=void 0,c.value=void 0)};ae(()=>{var m;t.value?(s.value="",A.value=!1,w.value=void 0,c.value=void 0):(m=l.value)==null||m.blur()});const r=()=>{var m;u.value&&y.value&&((m=y.value.children.item(u.value))==null||m.scrollIntoView({block:"center"}))},g=T(()=>s.value?j.filter(m=>m.toLowerCase().indexOf(s.value.toLowerCase())!==-1):j);return(m,P)=>(i(),v("div",{class:V(["select-container",{focused:t.value}])},[f("span",Qe,I(n.modelValue),1),le(f("input",{ref_key:"input",ref:l,class:"search",onFocus:P[0]||(P[0]=S=>t.value=!0),onBlur:P[1]||(P[1]=S=>t.value=!1),style:he({opacity:t.value?1:0}),placeholder:"Search...","onUpdate:modelValue":P[2]||(P[2]=S=>s.value=S),onKeydown:[P[3]||(P[3]=Q(S=>{var L;c.value=Math.min(((L=a(u))!=null?L:-1)+1,a(g).length-1),w.value=void 0,r(),A.value=!0},["down"])),P[4]||(P[4]=Q(S=>{var L;c.value=Math.max(((L=a(u))!=null?L:1)-1,0),w.value=void 0,r(),A.value=!0},["up"])),Q(p,["enter"])]},null,44,qe),[[ve,s.value]]),d(de,{class:V(["lang-list",{show:t.value}]),"el-ref":S=>y.value=S},{default:M(()=>[(i(!0),v(J,null,re(a(g),(S,L)=>(i(),v("li",{class:V(["lang",{focused:a(u)===L}]),key:S,onMousedown:N=>o("update:modelValue",S),onMouseenter:N=>b(L),onMouseleave:h,onMousemove:_},I(S),43,Xe))),128)),a(g).length?R("",!0):(i(),v("li",je," Not found "))]),_:1},8,["class","el-ref"]),f("span",{class:V(["arrow-down",{open:t.value}])},null,2)],2))}});const Je=k(ze,[["__scopeId","data-v-3e0dc566"]]),Ze=["value"],He=$({__name:"repo-filter",props:{modelValue:null},emits:["update:modelValue"],setup(e,{emit:o}){const n=e,t=s=>{o("update:modelValue",s.currentTarget.value)};return(s,l)=>(i(),v("input",{class:"repo-filter",value:n.modelValue,onInput:t,placeholder:"Filter by keyword"},null,40,Ze))}});const We=k(He,[["__scopeId","data-v-21c977f4"]]),Ke=["href"],Ue=$({__name:"gh-pr",props:{repo:null,number:null},setup(e){const o=e;return(n,t)=>(i(),v("a",{href:`https://github.com/${o.repo}/pull/${o.number}`,target:"_blank"},"#"+I(o.number),9,Ke))}}),Ye=e=>(O("data-v-00552f24"),e=e(),D(),e),en=Ye(()=>f("span",{class:"dot"},null,-1)),nn=C(" in "),tn={key:0,class:"language"},sn={key:1,class:"code-changes addition"},on={key:2,class:"code-changes deletion"},an=$({__name:"event",props:{event:null},setup(e){const o=e,{event:n}=me(o);return(t,s)=>(i(),v("span",{class:V(["event",a(n).prEventType])},[en,d(Ae,{login:a(n).actorLogin,"is-new":!!a(n).isDevDay},null,8,["login","is-new"]),C(" "+I(a(n).prEventType)+" ",1),d(Ue,{repo:a(n).repoName,number:a(n).pr},null,8,["repo","number"]),nn,d(Pe,{name:a(n).repoName},null,8,["name"]),a(n).language?(i(),v("span",tn,I(a(n).language),1)):R("",!0),a(n).additions?(i(),v("span",sn,"+"+I(a(n).additions),1)):R("",!0),a(n).deletions?(i(),v("span",on,"-"+I(a(n).deletions),1)):R("",!0)],2))}});const ln=k(an,[["__scopeId","data-v-00552f24"]]),rn=$({__name:"event-list",props:{stream:null,language:null,repo:null,play:{type:Boolean},excludeBots:{type:Boolean}},setup(e){const o=e,n=p=>!0,t=Y([]),s=x(),l=Y([]),y=x(n),A=ke(),w=new ge,c=(p,_)=>{t[p]=_?Se(_):void 0};w.pipe(Te(300)).subscribe(p=>{o.play&&l.unshift(...p)}),ae(p=>{if(A.value){const _=o.stream.pipe(Fe(y.value)).subscribe(w);p(()=>_.unsubscribe())}}),q(t,p=>{const _=s.value;if(!_)return;const{bottom:b}=_.getBoundingClientRect();if(p.length>0){let h=p.length-1;for(;h>=0;){const r=p[h];if(!r)return;const{bottom:g}=r.getBoundingClientRect();if(g>=b+32)l.splice(h,1),h--;else break}}},{immediate:!1,flush:"post"});const u=/(?:robot|bot|\[bot])$/i;return q([()=>o.language,()=>o.repo,()=>o.excludeBots],([p,_,b])=>{_=_.toLowerCase().trim();let h=[];p==="Others"?h.push(r=>{const g=r.language;for(let m of j)if(g===m)return!1;return!0}):p!=="Any Language"&&h.push(r=>r.language===p),_!==""&&h.push(r=>r.actorLogin.toLowerCase().indexOf(_)!==-1||r.repoName.toLowerCase().indexOf(_)!==-1),b&&h.push(r=>!u.test(r.actorLogin)),h.length===0?y.value=n:y.value=r=>{for(const g of h)if(!g(r))return!1;return!0}},{immediate:!0}),q(y,p=>{const _=l.filter(p);_.length!==l.length&&l.splice(0,l.length,..._)}),(p,_)=>(i(),E(de,{class:"list","el-ref":b=>s.value=b},{default:M(()=>[d(ye,{name:"list"},{default:M(()=>[(i(!0),v(J,null,re(l,(b,h)=>(i(),v("li",{key:b.id,ref_for:!0,ref:r=>c(h,r)},[d(ln,{event:b},null,8,["event"])]))),128))]),_:1})]),_:1},8,["el-ref"]))}});const un=k(rn,[["__scopeId","data-v-b787f84b"]]),cn={xmlns:"http://www.w3.org/2000/svg",height:"48",width:"48"},dn=f("path",{d:"M19.15 32.5 32.5 24l-13.35-8.5ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 24q0-4.15 1.575-7.8 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24 4q4.15 0 7.8 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm0-3q7.1 0 12.05-4.975Q41 31.05 41 24q0-7.1-4.95-12.05Q31.1 7 24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24 41Zm0-17Z"},null,-1),pn=[dn];function _n(e,o){return i(),v("svg",cn,pn)}const fn={render:_n},vn={xmlns:"http://www.w3.org/2000/svg",height:"48",width:"48"},hn=f("path",{d:"M18.5 32h3V16h-3Zm8 0h3V16h-3ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 24q0-4.15 1.575-7.8 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24 4q4.15 0 7.8 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm0-3q7.1 0 12.05-4.975Q41 31.05 41 24q0-7.1-4.95-12.05Q31.1 7 24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24 41Zm0-17Z"},null,-1),mn=[hn];function gn(e,o){return i(),v("svg",vn,mn)}const yn={render:gn},Sn=["title"],bn=$({__name:"play-button",props:{modelValue:{type:Boolean}},emits:["update:modelValue"],setup(e,{emit:o}){const n=e;return(t,s)=>(i(),v("button",{onClick:s[0]||(s[0]=l=>o("update:modelValue",!n.modelValue)),title:n.modelValue?"Pause":"Play"},[n.modelValue?(i(),E(a(yn),{key:0,viewBox:"0 0 48 48"})):(i(),E(a(fn),{key:1,viewBox:"0 0 48 48"}))],8,Sn))}});const Ln=k(bn,[["__scopeId","data-v-572430ef"]]),xn={class:"events-player-title"},Cn=C(" Real-Time Pull Requests "),An={style:{"font-size":"14px",color:"var(--text-secondary)"}},wn=C(" Exclude bots "),Pn=$({__name:"events-player",setup(e){const o=x("Any Language"),n=x(""),t=x(!0),s=x(!0),l=Z(),A=be("pullRequestEvents")();return(w,c)=>(i(),v(J,null,[a(l).height>430?(i(),E(B,{key:0,class:"info",direction:"row",justify:"space-between"},{default:M(()=>[f("h2",xn,[d(Ln,{modelValue:t.value,"onUpdate:modelValue":c[0]||(c[0]=u=>t.value=u)},null,8,["modelValue"]),Cn]),f("label",An,[wn,le(f("input",{"onUpdate:modelValue":c[1]||(c[1]=u=>s.value=u),type:"checkbox"},null,512),[[Le,s.value]])])]),_:1})):R("",!0),a(l).height>530?(i(),E(B,{key:1,class:"info",direction:"row",justify:"space-between"},{default:M(()=>[d(Je,{modelValue:o.value,"onUpdate:modelValue":c[2]||(c[2]=u=>o.value=u)},null,8,["modelValue"]),d(We,{modelValue:n.value,"onUpdate:modelValue":c[3]||(c[3]=u=>n.value=u),style:{"margin-left":"16px",flex:"1"}},null,8,["modelValue"])]),_:1})):R("",!0),d(un,{stream:a(A).stream,language:o.value,repo:n.value,play:t.value,"exclude-bots":s.value},null,8,["stream","language","repo","play","exclude-bots"])],64))}});const ct=k(Pn,[["__scopeId","data-v-265ad74e"]]);const kn={},Mn={class:"divider"};function $n(e,o){return i(),v("hr",Mn)}const dt=k(kn,[["render",$n],["__scopeId","data-v-5a89f117"]]),In=e=>(O("data-v-eb0c94a7"),e=e(),D(),e),Bn={class:"dot"},Vn=In(()=>f("span",{class:"ripple"},null,-1)),Rn=[Vn],En=$({__name:"dot",props:{color:null,size:null},setup(e){const o=e;xe(t=>({"7e9f2258":a(n),"546637ec":e.color}));const n=T(()=>{var t;return`${(t=o.size)!=null?t:8}px`});return(t,s)=>(i(),v("span",Bn,Rn))}});const Fn=k(En,[["__scopeId","data-v-eb0c94a7"]]),Tn=$({__name:"number-card",props:{title:null,value:null,colorStart:null,colorStop:null,small:{type:Boolean}},setup(e){const o=e;return Z(),(n,t)=>(i(),v("div",{class:V(["number-card",{small:e.small}])},[f("div",{class:V(["number-card-bg",`number-card-bg-c${o.colorStart}-c${o.colorStop}`])},null,2),d(B,{class:"number-card-content",direction:e.small?"row":"column",align:e.small?"center":"flex-start"},{default:M(()=>[d(B,{class:"number-card-content-title",justify:"center",align:"flex-start"},{default:M(()=>[C(I(o.title),1)]),_:1}),d(B,{class:"number-card-content-value",align:"center",direction:e.small?"row-reverse":"row",gap:"8px"},{default:M(()=>[d(Fn,{color:`var(--c${o.colorStart})`},null,8,["color"]),d(a(F),{value:o.value,comma:""},null,8,["value"])]),_:1},8,["direction"])]),_:1},8,["direction","align"])],2))}});const X=k(Tn,[["__scopeId","data-v-bf59511e"]]),Nn=e=>(O("data-v-5237ce11"),e=e(),D(),e),Gn={class:"banner-title"},On=C(" developers collaborated on "),Dn=Nn(()=>f("br",null,null,-1)),Qn=C(" repositories "),qn=C(". "),Xn={class:"code-info"},jn=C(" Total code line changes: "),zn={class:"number addition"},Jn=C(" +"),Zn=C(" / "),Hn={class:"number deletion"},Wn=C(" -"),Kn=$({__name:"StatusCard",props:{developers:null,repositories:null,opened:null,merged:null,closed:null,additions:null,deletions:null,time:null},setup(e){const o=x(),n=we(T(()=>{var s;return(s=o.value)==null?void 0:s.el})),t=T(()=>{var s,l;return((l=(s=n.value)==null?void 0:s.width)!=null?l:1920)<468});return(s,l)=>(i(),E(B,{ref_key:"el",ref:o,class:"banner"},{default:M(()=>[f("div",Gn,[d(a(F),{class:"number",value:e.developers,comma:""},null,8,["value"]),On,Dn,d(a(F),{class:"number",value:e.repositories,comma:""},null,8,["value"]),Qn,f("b",null,I(e.time),1),qn]),f("div",Xn,[jn,f("span",zn,[Jn,d(a(F),{value:e.additions,comma:""},null,8,["value"])]),Zn,f("span",Hn,[Wn,d(a(F),{value:e.deletions,comma:""},null,8,["value"])])]),d(B,{class:"number-cards info",direction:a(t)?"column":"row",gap:"4px"},{default:M(()=>[d(X,{small:a(t),title:"Opened PRs",value:e.opened,"color-start":"1","color-stop":"6"},null,8,["small","value"]),d(X,{small:a(t),title:"Merged PRs",value:e.merged,"color-start":"7","color-stop":"5"},null,8,["small","value"]),d(X,{small:a(t),title:"Closed PRs",value:e.closed,"color-start":"2","color-stop":"7"},null,8,["small","value"])]),_:1},8,["direction"]),oe(s.$slots,"footer",{},void 0,!0)]),_:3},512))}});const pt=k(Kn,[["__scopeId","data-v-5237ce11"]]),Un="/logos/tidbcloud.png",Yn="/logos/pulsar.png",H=e=>(O("data-v-28b6d3c1"),e=e(),D(),e),et=H(()=>f("a",{class:"more-info",href:"https://ossinsight.io/blog/why-we-choose-tidb-to-support-ossinsight"},"\u{1F916}\uFE0F how to make it",-1)),nt={key:0,style:{color:"var(--text-secondary)","font-size":"12px"}},tt=C(" \xA0 \xA0 "),st=H(()=>f("a",{href:"https://en.pingcap.com/tidb-cloud?utm_source=ossinsight&utm_medium=referral",target:"_blank"},[f("img",{src:Un,alt:"TiDB Cloud",height:"16"})],-1)),ot=C(" \xA0 \xA0 "),at=H(()=>f("a",{href:"https://pulsar.apache.org",target:"_blank"},[f("img",{src:Yn,alt:"Pulsar",height:"16"})],-1)),lt=$({__name:"side-footer",setup(e){const o=Z();return(n,t)=>(i(),E(B,{class:"info",direction:"row",justify:"center"},{default:M(()=>[et,d(Ce),a(o).up("sm")?(i(),v("span",nt,"Powered by")):R("",!0),tt,st,ot,at]),_:1}))}});const _t=k(lt,[["__scopeId","data-v-28b6d3c1"]]);export{dt as D,ct as E,pt as S,_t as a};
