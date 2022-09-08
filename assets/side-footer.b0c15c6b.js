import{F as R}from"./flex.8d91f8b4.js";import{M as te,N as G,O as _e,P as se,Q as W,R as K,U as oe,W as fe,_ as x,o as i,c as p,K as re,f as M,r as $,q as O,l as le,e as h,t as I,X as he,Y as ve,E as me,Z as X,j as d,I as k,F as H,G as ae,u as l,$ as B,L as V,a0 as ge,i as A,p as D,k as Q,d as Y,a1 as ye,w as j,g as E,a2 as be,m as Se,H as q,n as Le,a3 as we}from"./index.9c45d513.js";import{_ as xe}from"./gh-repo.vue_vue_type_script_setup_true_lang.0d85e94a.js";import{u as Ae,A as F}from"./Numbers.6cfe9762.js";function Ce(e){return te(e==null?void 0:e.lift)}function ie(e){return function(t){if(Ce(t))return t.lift(function(n){try{return e(n,this)}catch(s){this.error(s)}});throw new TypeError("Unable to lift unknown Observable type")}}function ue(e,t,n,s,o){return new Pe(e,t,n,s,o)}var Pe=function(e){G(t,e);function t(n,s,o,a,v,w){var c=e.call(this,n)||this;return c.onFinalize=v,c.shouldUnsubscribe=w,c._next=s?function(u){try{s(u)}catch(r){n.error(r)}}:e.prototype._next,c._error=a?function(u){try{a(u)}catch(r){n.error(r)}finally{this.unsubscribe()}}:e.prototype._error,c._complete=o?function(){try{o()}catch(u){n.error(u)}finally{this.unsubscribe()}}:e.prototype._complete,c}return t.prototype.unsubscribe=function(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var s=this.closed;e.prototype.unsubscribe.call(this),!s&&((n=this.onFinalize)===null||n===void 0||n.call(this))}},t}(_e),ce={now:function(){return(ce.delegate||Date).now()},delegate:void 0},$e=function(e){G(t,e);function t(n,s){return e.call(this)||this}return t.prototype.schedule=function(n,s){return this},t}(se),N={setInterval:function(e,t){for(var n=[],s=2;s<arguments.length;s++)n[s-2]=arguments[s];var o=N.delegate;return o!=null&&o.setInterval?o.setInterval.apply(o,W([e,t],K(n))):setInterval.apply(void 0,W([e,t],K(n)))},clearInterval:function(e){var t=N.delegate;return((t==null?void 0:t.clearInterval)||clearInterval)(e)},delegate:void 0},Me=function(e){G(t,e);function t(n,s){var o=e.call(this,n,s)||this;return o.scheduler=n,o.work=s,o.pending=!1,o}return t.prototype.schedule=function(n,s){if(s===void 0&&(s=0),this.closed)return this;this.state=n;var o=this.id,a=this.scheduler;return o!=null&&(this.id=this.recycleAsyncId(a,o,s)),this.pending=!0,this.delay=s,this.id=this.id||this.requestAsyncId(a,this.id,s),this},t.prototype.requestAsyncId=function(n,s,o){return o===void 0&&(o=0),N.setInterval(n.flush.bind(n,this),o)},t.prototype.recycleAsyncId=function(n,s,o){if(o===void 0&&(o=0),o!=null&&this.delay===o&&this.pending===!1)return s;N.clearInterval(s)},t.prototype.execute=function(n,s){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var o=this._execute(n,s);if(o)return o;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},t.prototype._execute=function(n,s){var o=!1,a;try{this.work(n)}catch(v){o=!0,a=v||new Error("Scheduled action threw falsy error")}if(o)return this.unsubscribe(),a},t.prototype.unsubscribe=function(){if(!this.closed){var n=this,s=n.id,o=n.scheduler,a=o.actions;this.work=this.state=this.scheduler=null,this.pending=!1,oe(a,this),s!=null&&(this.id=this.recycleAsyncId(o,s,null)),this.delay=null,e.prototype.unsubscribe.call(this)}},t}($e),ee=function(){function e(t,n){n===void 0&&(n=e.now),this.schedulerActionCtor=t,this.now=n}return e.prototype.schedule=function(t,n,s){return n===void 0&&(n=0),new this.schedulerActionCtor(this,t).schedule(s,n)},e.now=ce.now,e}(),ke=function(e){G(t,e);function t(n,s){s===void 0&&(s=ee.now);var o=e.call(this,n,s)||this;return o.actions=[],o._active=!1,o._scheduled=void 0,o}return t.prototype.flush=function(n){var s=this.actions;if(this._active){s.push(n);return}var o;this._active=!0;do if(o=n.execute(n.state,n.delay))break;while(n=s.shift());if(this._active=!1,o){for(;n=s.shift();)n.unsubscribe();throw o}},t}(ee),Ie=new ke(Me);function Ve(e){return e&&te(e.schedule)}function Re(e){return e[e.length-1]}function Be(e){return Ve(Re(e))?e.pop():void 0}function ne(e,t,n,s,o){s===void 0&&(s=0),o===void 0&&(o=!1);var a=t.schedule(function(){n(),o?e.add(this.schedule(null,s)):this.unsubscribe()},s);if(e.add(a),!o)return a}function Ee(e,t){return ie(function(n,s){var o=0;n.subscribe(ue(s,function(a){return e.call(t,a,o++)&&s.next(a)}))})}function Fe(e){for(var t,n,s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];var a=(t=Be(s))!==null&&t!==void 0?t:Ie,v=(n=s[0])!==null&&n!==void 0?n:null,w=s[1]||1/0;return ie(function(c,u){var r=[],_=!1,g=function(y){var C=y.buffer,m=y.subs;m.unsubscribe(),oe(r,y),u.next(C),_&&f()},f=function(){if(r){var y=new se;u.add(y);var C=[],m={buffer:C,subs:y};r.push(m),ne(y,a,function(){return g(m)},e)}};v!==null&&v>=0?ne(u,a,f,v,!0):_=!0,f();var S=ue(u,function(y){var C,m,P=r.slice();try{for(var b=fe(P),L=b.next();!L.done;L=b.next()){var T=L.value,Z=T.buffer;Z.push(y),w<=Z.length&&g(T)}}catch(pe){C={error:pe}}finally{try{L&&!L.done&&(m=b.return)&&m.call(b)}finally{if(C)throw C.error}}},function(){for(;r!=null&&r.length;)u.next(r.shift().buffer);S==null||S.unsubscribe(),u.complete(),u.unsubscribe()},void 0,function(){return r=null});c.subscribe(S)})}const Te={},Oe={style:{flex:"1"}};function Ne(e,t){return i(),p("span",Oe)}const Ge=x(Te,[["render",Ne]]),De=`JavaScript
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
`,Qe=()=>{const e=new Set;return t=>e.has(t)?!1:(e.add(t),!0)},J=["Any Language",...De.split(`
`).filter(Boolean).filter(Qe())],qe={inheritAttrs:!0,props:{elRef:{type:Function,required:!1}}};function Xe(e,t,n,s,o,a){return i(),p("ul",{class:"list",ref:n.elRef},[re(e.$slots,"default",{},void 0,!0)],512)}const de=x(qe,[["render",Xe],["__scopeId","data-v-c7f044ce"]]),je={class:"content"},ze=["onKeydown"],Je=["onMousedown","onMouseenter"],He={key:0,class:"no-data"},Ue=M({__name:"lang-select",props:{modelValue:null},emits:["update:modelValue"],setup(e,{emit:t}){const n=e,s=$(!1),o=$(""),a=$(),v=$(),w=$(!1),c=$(),u=$(),r=O(()=>c.value||u.value),_=()=>{typeof r.value=="number"&&(t("update:modelValue",C.value[r.value]),s.value=!1)},g=()=>{w.value=!1},f=m=>{w.value||(c.value=m,u.value=void 0)},S=()=>{w.value||(c.value=void 0,u.value=void 0)};le(()=>{var m;s.value?(o.value="",w.value=!1,c.value=void 0,u.value=void 0):(m=a.value)==null||m.blur()});const y=()=>{var m;r.value&&v.value&&((m=v.value.children.item(r.value))==null||m.scrollIntoView({block:"center"}))},C=O(()=>o.value?J.filter(m=>m.toLowerCase().indexOf(o.value.toLowerCase())!==-1):J);return(m,P)=>(i(),p("div",{class:V(["select-container",{focused:s.value}])},[h("span",je,I(n.modelValue),1),he(h("input",{ref_key:"input",ref:a,class:"search",onFocus:P[0]||(P[0]=b=>s.value=!0),onBlur:P[1]||(P[1]=b=>s.value=!1),style:me({opacity:s.value?1:0}),placeholder:"Search...","onUpdate:modelValue":P[2]||(P[2]=b=>o.value=b),onKeydown:[P[3]||(P[3]=X(b=>{var L;u.value=Math.min(((L=l(r))!=null?L:-1)+1,l(C).length-1),c.value=void 0,y(),w.value=!0},["down"])),P[4]||(P[4]=X(b=>{var L;u.value=Math.max(((L=l(r))!=null?L:1)-1,0),c.value=void 0,y(),w.value=!0},["up"])),X(_,["enter"])]},null,44,ze),[[ve,o.value]]),d(de,{class:V(["lang-list",{show:s.value}]),"el-ref":b=>v.value=b},{default:k(()=>[(i(!0),p(H,null,ae(l(C),(b,L)=>(i(),p("li",{class:V(["lang",{focused:l(r)===L}]),key:b,onMousedown:T=>t("update:modelValue",b),onMouseenter:T=>f(L),onMouseleave:S,onMousemove:g},I(b),43,Je))),128)),l(C).length?B("",!0):(i(),p("li",He," Not found "))]),_:1},8,["class","el-ref"]),h("span",{class:V(["arrow-down",{open:s.value}])},null,2)],2))}});const Ze=x(Ue,[["__scopeId","data-v-3e0dc566"]]),We=["value"],Ke=M({__name:"repo-filter",props:{modelValue:null},emits:["update:modelValue"],setup(e,{emit:t}){const n=e,s=o=>{t("update:modelValue",o.currentTarget.value)};return(o,a)=>(i(),p("input",{class:"repo-filter",value:n.modelValue,onInput:s,placeholder:"Filter by keyword"},null,40,We))}});const Ye=x(Ke,[["__scopeId","data-v-21c977f4"]]),en=["href"],nn=M({__name:"gh-user",props:{login:null,isNew:{type:Boolean},url:null},setup(e){const t=e,n=/\[bot]$/,s=O(()=>{const{login:o}=t;return n.test(o)?`https://github.com/apps/${o.replace(n,"")}`:`https://github.com/${o}`});return(o,a)=>(i(),p("a",{href:l(s),target:"_blank",class:V({new:t.isNew})},I(t.login),11,en))}}),tn=["href"],sn=M({__name:"gh-pr",props:{repo:null,number:null},setup(e){const t=e;return(n,s)=>(i(),p("a",{href:`https://github.com/${t.repo}/pull/${t.number}`,target:"_blank"},"#"+I(t.number),9,tn))}}),on=e=>(D("data-v-436e3bb1"),e=e(),Q(),e),rn=on(()=>h("span",{class:"dot"},null,-1)),ln=A(" in "),an={key:0,class:"language"},un={key:1,class:"code-changes addition"},cn={key:2,class:"code-changes deletion"},dn=M({__name:"event",props:{event:null},setup(e){const t=e,{event:n}=ge(t);return(s,o)=>(i(),p("span",{class:V(["event",l(n).prEventType])},[rn,d(nn,{login:l(n).actorLogin,"is-new":!!l(n).isDevDay},null,8,["login","is-new"]),A(" "+I(l(n).prEventType)+" ",1),d(sn,{repo:l(n).repoName,number:l(n).pr},null,8,["repo","number"]),ln,d(xe,{name:l(n).repoName},null,8,["name"]),l(n).language?(i(),p("span",an,I(l(n).language),1)):B("",!0),l(n).additions?(i(),p("span",un,"+"+I(l(n).additions),1)):B("",!0),l(n).deletions?(i(),p("span",cn,"-"+I(l(n).deletions),1)):B("",!0)],2))}});const pn=x(dn,[["__scopeId","data-v-436e3bb1"]]),_n=M({__name:"event-list",props:{stream:null,language:null,repo:null,play:{type:Boolean}},setup(e){const t=e,n=r=>!0,s=Y([]),o=$(),a=Y([]),v=$(n),w=Ae(),c=new ye,u=(r,_)=>{s[r]=_?Se(_):void 0};return c.pipe(Fe(300)).subscribe(r=>{t.play&&a.unshift(...r)}),le(r=>{if(w.value){const _=t.stream.pipe(Ee(v.value)).subscribe(c);r(()=>_.unsubscribe())}}),j(s,r=>{const _=o.value;if(!_)return;const{bottom:g}=_.getBoundingClientRect();if(r.length>0){let f=r.length-1;for(;f>=0;){const S=r[f];if(!S)return;const{bottom:y}=S.getBoundingClientRect();if(y>=g+32)a.splice(f,1),f--;else break}}},{immediate:!1,flush:"post"}),j([()=>t.language,()=>t.repo],([r,_])=>{_=_.toLowerCase().trim();let g=[];r==="Others"?g.push(f=>{const S=f.language;for(let y of J)if(S===y)return!1;return!0}):r!=="Any Language"&&g.push(f=>f.language===r),_!==""&&g.push(f=>f.actorLogin.toLowerCase().indexOf(_)!==-1||f.repoName.toLowerCase().indexOf(_)!==-1),g.length===0?v.value=n:v.value=f=>{for(const S of g)if(!S(f))return!1;return!0}}),j(v,r=>{const _=a.filter(r);_.length!==a.length&&a.splice(0,a.length,..._)}),(r,_)=>(i(),E(de,{class:"list","el-ref":g=>o.value=g},{default:k(()=>[d(be,{name:"list"},{default:k(()=>[(i(!0),p(H,null,ae(a,(g,f)=>(i(),p("li",{key:g.id,ref_for:!0,ref:S=>u(f,S)},[d(pn,{event:g},null,8,["event"])]))),128))]),_:1})]),_:1},8,["el-ref"]))}});const fn=x(_n,[["__scopeId","data-v-14777efc"]]),hn={xmlns:"http://www.w3.org/2000/svg",height:"48",width:"48"},vn=h("path",{d:"M19.15 32.5 32.5 24l-13.35-8.5ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 24q0-4.15 1.575-7.8 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24 4q4.15 0 7.8 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm0-3q7.1 0 12.05-4.975Q41 31.05 41 24q0-7.1-4.95-12.05Q31.1 7 24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24 41Zm0-17Z"},null,-1),mn=[vn];function gn(e,t){return i(),p("svg",hn,mn)}const yn={render:gn},bn={xmlns:"http://www.w3.org/2000/svg",height:"48",width:"48"},Sn=h("path",{d:"M18.5 32h3V16h-3Zm8 0h3V16h-3ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 24q0-4.15 1.575-7.8 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24 4q4.15 0 7.8 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm0-3q7.1 0 12.05-4.975Q41 31.05 41 24q0-7.1-4.95-12.05Q31.1 7 24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24 41Zm0-17Z"},null,-1),Ln=[Sn];function wn(e,t){return i(),p("svg",bn,Ln)}const xn={render:wn},An=["title"],Cn=M({__name:"play-button",props:{modelValue:{type:Boolean}},emits:["update:modelValue"],setup(e,{emit:t}){const n=e;return(s,o)=>(i(),p("button",{onClick:o[0]||(o[0]=a=>t("update:modelValue",!n.modelValue)),title:n.modelValue?"Pause":"Play"},[n.modelValue?(i(),E(l(xn),{key:0,viewBox:"0 0 48 48"})):(i(),E(l(yn),{key:1,viewBox:"0 0 48 48"}))],8,An))}});const Pn=x(Cn,[["__scopeId","data-v-572430ef"]]),$n={class:"events-player-title"},Mn=A(" Real-Time Pull Requests "),kn=M({__name:"events-player",setup(e){const t=$("Any Language"),n=$(""),s=$(!0),o=q(),v=Le("pullRequestEvents")();return(w,c)=>(i(),p(H,null,[l(o).height>430?(i(),E(R,{key:0,info:"",direction:"row",justify:"space-between"},{default:k(()=>[h("h2",$n,[d(Pn,{modelValue:s.value,"onUpdate:modelValue":c[0]||(c[0]=u=>s.value=u)},null,8,["modelValue"]),Mn])]),_:1})):B("",!0),l(o).height>530?(i(),E(R,{key:1,info:"",direction:"row",justify:"space-between"},{default:k(()=>[d(Ze,{modelValue:t.value,"onUpdate:modelValue":c[1]||(c[1]=u=>t.value=u)},null,8,["modelValue"]),d(Ye,{modelValue:n.value,"onUpdate:modelValue":c[2]||(c[2]=u=>n.value=u),style:{"margin-left":"16px",flex:"1"}},null,8,["modelValue"])]),_:1})):B("",!0),d(fn,{stream:l(v).stream,language:t.value,repo:n.value,play:s.value},null,8,["stream","language","repo","play"])],64))}});const ft=x(kn,[["__scopeId","data-v-a71da635"]]);const In={},Vn={class:"divider"};function Rn(e,t){return i(),p("hr",Vn)}const ht=x(In,[["render",Rn],["__scopeId","data-v-5a89f117"]]),Bn=e=>(D("data-v-eb0c94a7"),e=e(),Q(),e),En={class:"dot"},Fn=Bn(()=>h("span",{class:"ripple"},null,-1)),Tn=[Fn],On=M({__name:"dot",props:{color:null,size:null},setup(e){const t=e;we(s=>({"7e9f2258":l(n),"546637ec":e.color}));const n=O(()=>{var s;return`${(s=t.size)!=null?s:8}px`});return(s,o)=>(i(),p("span",En,Tn))}});const Nn=x(On,[["__scopeId","data-v-eb0c94a7"]]),Gn=M({__name:"number-card",props:{title:null,value:null,colorStart:null,colorStop:null},setup(e){const t=e,n=q();return(s,o)=>(i(),p("div",{class:V(["number-card",{small:l(n).down("xs")}])},[h("div",{class:V(["number-card-bg",`number-card-bg-c${t.colorStart}-c${t.colorStop}`])},null,2),d(R,{class:"number-card-content",direction:l(n).down("xs")?"row":"column",align:l(n).down("xs")?"center":"flex-start"},{default:k(()=>[d(R,{class:"number-card-content-title",justify:"center",align:"flex-start"},{default:k(()=>[A(I(t.title),1)]),_:1}),d(R,{class:"number-card-content-value",align:"center",direction:l(n).down("xs")?"row-reverse":"row",gap:"8px"},{default:k(()=>[d(Nn,{color:`var(--c${t.colorStart})`},null,8,["color"]),d(l(F),{value:t.value,comma:""},null,8,["value"])]),_:1},8,["direction"])]),_:1},8,["direction","align"])],2))}});const z=x(Gn,[["__scopeId","data-v-232febb1"]]),Dn=e=>(D("data-v-5c63a06b"),e=e(),Q(),e),Qn={class:"banner-title"},qn=A(" developers collaborated on "),Xn=Dn(()=>h("br",null,null,-1)),jn=A(" repositories "),zn=A(". "),Jn={class:"code-info"},Hn=A(" Total code line changes: "),Un={class:"number addition"},Zn=A(" +"),Wn=A(" / "),Kn={class:"number deletion"},Yn=A(" -"),et=M({__name:"StatusCard",props:{developers:null,repositories:null,opened:null,merged:null,closed:null,additions:null,deletions:null,time:null},setup(e){const t=q();return(n,s)=>(i(),E(R,{class:"banner"},{default:k(()=>[h("div",Qn,[d(l(F),{class:"number",value:e.developers,comma:""},null,8,["value"]),qn,Xn,d(l(F),{class:"number",value:e.repositories,comma:""},null,8,["value"]),jn,h("b",null,I(e.time),1),zn]),h("div",Jn,[Hn,h("span",Un,[Zn,d(l(F),{value:e.additions,comma:""},null,8,["value"])]),Wn,h("span",Kn,[Yn,d(l(F),{value:e.deletions,comma:""},null,8,["value"])])]),d(R,{class:"number-cards",info:"",direction:l(t).down("xs")?"column":"row",gap:"4px"},{default:k(()=>[d(z,{title:"Opened PRs",value:e.opened,"color-start":"1","color-stop":"6"},null,8,["value"]),d(z,{title:"Merged PRs",value:e.merged,"color-start":"7","color-stop":"5"},null,8,["value"]),d(z,{title:"Closed PRs",value:e.closed,"color-start":"2","color-stop":"7"},null,8,["value"])]),_:1},8,["direction"]),re(n.$slots,"footer",{},void 0,!0)]),_:3}))}});const vt=x(et,[["__scopeId","data-v-5c63a06b"]]),nt="/logos/tidbcloud.png",tt="/logos/pulsar.png",U=e=>(D("data-v-5c36c8e9"),e=e(),Q(),e),st=U(()=>h("a",{class:"more-info",href:"https://ossinsight.io/blog/why-we-choose-tidb-to-support-ossinsight"},"\u{1F916}\uFE0F how to make it",-1)),ot={key:0,style:{color:"var(--text-secondary)","font-size":"12px"}},rt=A(" \xA0 \xA0 "),lt=U(()=>h("a",{href:"https://en.pingcap.com/tidb-cloud?utm_source=ossinsight&utm_medium=referral",target:"_blank"},[h("img",{src:nt,alt:"TiDB Cloud",height:"16"})],-1)),at=A(" \xA0 \xA0 "),it=U(()=>h("a",{href:"https://pulsar.apache.org",target:"_blank"},[h("img",{src:tt,alt:"Pulsar",height:"16"})],-1)),ut=M({__name:"side-footer",setup(e){const t=q();return(n,s)=>(i(),E(R,{info:"",direction:"row",justify:"center"},{default:k(()=>[st,d(Ge),l(t).up("sm")?(i(),p("span",ot,"Powered by")):B("",!0),rt,lt,at,it]),_:1}))}});const mt=x(ut,[["__scopeId","data-v-5c36c8e9"]]);export{ht as D,ft as E,Ge as F,vt as S,mt as a};
