import{v as p,x as v,S as d,y as _,r as c,z as l,A as m,B as y,q as S,V as g,C as T,D as B,E as I,G as x,H as E,e as L,o as O,b as U,t as V}from"./index.cce20643.js";function A(t){return p(t==null?void 0:t.lift)}function k(t){return function(n){if(A(n))return n.lift(function(e){try{return t(e,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function w(t,n,e,r,o){return new M(t,n,e,r,o)}var M=function(t){v(n,t);function n(e,r,o,i,b,h){var s=t.call(this,e)||this;return s.onFinalize=b,s.shouldUnsubscribe=h,s._next=r?function(a){try{r(a)}catch(u){e.error(u)}}:t.prototype._next,s._error=i?function(a){try{i(a)}catch(u){e.error(u)}finally{this.unsubscribe()}}:t.prototype._error,s._complete=o?function(){try{o()}catch(a){e.error(a)}finally{this.unsubscribe()}}:t.prototype._complete,s}return n.prototype.unsubscribe=function(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var r=this.closed;t.prototype.unsubscribe.call(this),!r&&((e=this.onFinalize)===null||e===void 0||e.call(this))}},n}(d);function j(t,n){return k(function(e,r){var o=0;e.subscribe(w(r,function(i){r.next(t.call(n,i,o++))}))})}const f=_(c(!0));function z(){var t;return(t=l(m))!=null?t:f}function D(){var t;return(t=l(y))!=null?t:f}function F(){const t=c(!1);return T(()=>t.value=!0),B(()=>t.value=!1),t}function H(t){const{result:n,toggle:e,throttleToggle:r}=I(!0,t);return x(()=>{e(!0)}),E(()=>{r(!1)}),n}function q(t=g){const n=t>0?z():D(),e=F(),r=H(t);return S(()=>n.value&&e.value&&r.value)}const R=["href"],C=L({__name:"gh-repo",props:{name:null},setup(t){const n=t;return(e,r)=>(O(),U("a",{href:`https://github.com/${n.name}`,target:"_blank"},V(n.name),9,R))}});export{C as _,w as c,j as m,k as o,q as u};