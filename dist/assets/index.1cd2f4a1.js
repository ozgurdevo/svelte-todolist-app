(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();function $(){}function lt(t,e){for(const o in e)t[o]=e[o];return t}function et(t){return t()}function W(){return Object.create(null)}function k(t){t.forEach(et)}function it(t){return typeof t=="function"}function w(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function ut(t){return Object.keys(t).length===0}function dt(t,e,o,n){if(t){const r=nt(t,e,o,n);return t[0](r)}}function nt(t,e,o,n){return t[1]&&n?lt(o.ctx.slice(),t[1](n(e))):o.ctx}function ct(t,e,o,n){if(t[2]&&n){const r=t[2](n(o));if(e.dirty===void 0)return r;if(typeof r=="object"){const s=[],d=Math.max(e.dirty.length,r.length);for(let c=0;c<d;c+=1)s[c]=e.dirty[c]|r[c];return s}return e.dirty|r}return e.dirty}function ft(t,e,o,n,r,s){if(r){const d=nt(e,o,n,s);t.p(d,r)}}function at(t){if(t.ctx.length>32){const e=[],o=t.ctx.length/32;for(let n=0;n<o;n++)e[n]=-1;return e}return-1}function X(t){return t==null?"":t}function m(t,e){t.appendChild(e)}function v(t,e,o){t.insertBefore(e,o||null)}function b(t){t.parentNode.removeChild(t)}function _t(t,e){for(let o=0;o<t.length;o+=1)t[o]&&t[o].d(e)}function g(t){return document.createElement(t)}function D(t){return document.createTextNode(t)}function E(){return D(" ")}function T(t,e,o,n){return t.addEventListener(e,o,n),()=>t.removeEventListener(e,o,n)}function p(t,e,o){o==null?t.removeAttribute(e):t.getAttribute(e)!==o&&t.setAttribute(e,o)}function mt(t){return Array.from(t.childNodes)}function R(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Y(t,e){t.value=e==null?"":e}let j;function O(t){j=t}function pt(){if(!j)throw new Error("Function called outside component initialization");return j}function ot(t){pt().$$.on_mount.push(t)}const L=[],G=[],q=[],J=[],ht=Promise.resolve();let Q=!1;function gt(){Q||(Q=!0,ht.then(rt))}function U(t){q.push(t)}function $t(t){J.push(t)}const K=new Set;let M=0;function rt(){const t=j;do{for(;M<L.length;){const e=L[M];M++,O(e),Ct(e.$$)}for(O(null),L.length=0,M=0;G.length;)G.pop()();for(let e=0;e<q.length;e+=1){const o=q[e];K.has(o)||(K.add(o),o())}q.length=0}while(L.length);for(;J.length;)J.pop()();Q=!1,K.clear(),O(t)}function Ct(t){if(t.fragment!==null){t.update(),k(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(U)}}const P=new Set;let x;function yt(){x={r:0,c:[],p:x}}function bt(){x.r||k(x.c),x=x.p}function C(t,e){t&&t.i&&(P.delete(t),t.i(e))}function y(t,e,o,n){if(t&&t.o){if(P.has(t))return;P.add(t),x.c.push(()=>{P.delete(t),n&&(o&&t.d(1),n())}),t.o(e)}else n&&n()}function xt(t,e,o){const n=t.$$.props[e];n!==void 0&&(t.$$.bound[n]=o,o(t.$$.ctx[n]))}function S(t){t&&t.c()}function H(t,e,o,n){const{fragment:r,on_mount:s,on_destroy:d,after_update:c}=t.$$;r&&r.m(e,o),n||U(()=>{const i=s.map(et).filter(it);d?d.push(...i):k(i),t.$$.on_mount=[]}),c.forEach(U)}function B(t,e){const o=t.$$;o.fragment!==null&&(k(o.on_destroy),o.fragment&&o.fragment.d(e),o.on_destroy=o.fragment=null,o.ctx=[])}function vt(t,e){t.$$.dirty[0]===-1&&(L.push(t),gt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function N(t,e,o,n,r,s,d,c=[-1]){const i=j;O(t);const l=t.$$={fragment:null,ctx:null,props:s,update:$,not_equal:r,bound:W(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(i?i.$$.context:[])),callbacks:W(),dirty:c,skip_bound:!1,root:e.target||i.$$.root};d&&d(l.root);let f=!1;if(l.ctx=o?o(t,e.props||{},(u,_,...h)=>{const a=h.length?h[0]:_;return l.ctx&&r(l.ctx[u],l.ctx[u]=a)&&(!l.skip_bound&&l.bound[u]&&l.bound[u](a),f&&vt(t,u)),_}):[],l.update(),f=!0,k(l.before_update),l.fragment=n?n(l.ctx):!1,e.target){if(e.hydrate){const u=mt(e.target);l.fragment&&l.fragment.l(u),u.forEach(b)}else l.fragment&&l.fragment.c();e.intro&&C(t.$$.fragment),H(t,e.target,e.anchor,e.customElement),rt()}O(i)}class I{$destroy(){B(this,1),this.$destroy=$}$on(e,o){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(o),()=>{const r=n.indexOf(o);r!==-1&&n.splice(r,1)}}$set(e){this.$$set&&!ut(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function kt(t){let e,o;const n=t[1].default,r=dt(n,t,t[0],null);return{c(){e=g("div"),r&&r.c(),p(e,"class","todoCard svelte-hcm7pr")},m(s,d){v(s,e,d),r&&r.m(e,null),o=!0},p(s,[d]){r&&r.p&&(!o||d&1)&&ft(r,n,s,s[0],o?ct(n,s[0],d,null):at(s[0]),null)},i(s){o||(C(r,s),o=!0)},o(s){y(r,s),o=!1},d(s){s&&b(e),r&&r.d(s)}}}function wt(t,e,o){let{$$slots:n={},$$scope:r}=e;return t.$$set=s=>{"$$scope"in s&&o(0,r=s.$$scope)},[r,n]}class At extends I{constructor(e){super(),N(this,e,wt,kt,w,{})}}const A=[];function st(t,e=$){let o;const n=new Set;function r(c){if(w(t,c)&&(t=c,o)){const i=!A.length;for(const l of n)l[1](),A.push(l,t);if(i){for(let l=0;l<A.length;l+=2)A[l][0](A[l+1]);A.length=0}}}function s(c){r(c(t))}function d(c,i=$){const l=[c,i];return n.add(l),n.size===1&&(o=e(r)||$),c(t),()=>{n.delete(l),n.size===0&&(o(),o=null)}}return{set:r,update:s,subscribe:d}}const z=st(0),F=st(0);function Tt(t){let e,o,n,r,s,d,c,i,l;return{c(){e=g("div"),o=g("div"),o.textContent="To-do list",n=E(),r=g("div"),s=g("span"),d=D(t[0]),c=D("/"),i=g("span"),l=D(t[1]),p(s,"id","todoCard__completedItemCounter"),p(i,"id","todoCard__itemCounter"),p(e,"class","todoCard__header svelte-oemzzp")},m(f,u){v(f,e,u),m(e,o),m(e,n),m(e,r),m(r,s),m(s,d),m(r,c),m(r,i),m(i,l)},p(f,[u]){u&1&&R(d,f[0]),u&2&&R(l,f[1])},i:$,o:$,d(f){f&&b(e)}}}function Et(t,e,o){let n,r;return F.subscribe(s=>o(1,r=s)),z.subscribe(s=>o(0,n=s)),[n,r]}class Ht extends I{constructor(e){super(),N(this,e,Et,Tt,w,{})}}function Bt(t){let e,o,n=t[0].text+"",r,s,d,c,i,l,f,u,_;return{c(){e=g("li"),o=g("span"),r=D(n),s=E(),d=g("div"),c=g("input"),i=E(),l=g("button"),l.textContent="del",p(o,"class","svelte-1077ozo"),p(c,"type","checkbox"),p(l,"class","todoCard__deleteItemButton svelte-1077ozo"),p(d,"class","todoCard__itemButtons svelte-1077ozo"),p(e,"class",f=X(t[0].isCompleted?"todoCard__item--completed":"todoCard__item")+" svelte-1077ozo")},m(h,a){v(h,e,a),m(e,o),m(o,r),m(e,s),m(e,d),m(d,c),c.checked=t[0].isCompleted,m(d,i),m(d,l),u||(_=[T(c,"change",t[3]),T(c,"change",t[2]),T(l,"click",t[4])],u=!0)},p(h,[a]){a&1&&n!==(n=h[0].text+"")&&R(r,n),a&1&&(c.checked=h[0].isCompleted),a&1&&f!==(f=X(h[0].isCompleted?"todoCard__item--completed":"todoCard__item")+" svelte-1077ozo")&&p(e,"class",f)},i:$,o:$,d(h){h&&b(e),u=!1,k(_)}}}function zt(t,e,o){let{task:n}=e,{onDeleteHandler:r}=e;const s=()=>{n.isCompleted?z.update(i=>i+1):z.update(i=>i-1)};function d(){n.isCompleted=this.checked,o(0,n)}const c=()=>r(n.id);return t.$$set=i=>{"task"in i&&o(0,n=i.task),"onDeleteHandler"in i&&o(1,r=i.onDeleteHandler)},[n,r,s,d,c]}class Nt extends I{constructor(e){super(),N(this,e,zt,Bt,w,{task:0,onDeleteHandler:1})}}function It(t){let e,o,n,r,s,d;return{c(){e=g("div"),o=g("input"),n=E(),r=g("button"),r.textContent="+",p(o,"class","todoCard__inputBox svelte-1nkpu48"),p(o,"id","todoCard__inputBox"),p(o,"placeholder","Add Item"),p(r,"class","todoCard__addNewItemButton svelte-1nkpu48"),p(r,"id","todoCard__addNewItemButton"),p(e,"class","todoCard__addNewItem svelte-1nkpu48")},m(c,i){v(c,e,i),m(e,o),Y(o,t[0]),m(e,n),m(e,r),s||(d=[T(window,"keydown",t[2]),T(o,"input",t[3]),T(r,"click",t[4])],s=!0)},p(c,[i]){i&1&&o.value!==c[0]&&Y(o,c[0])},i:$,o:$,d(c){c&&b(e),s=!1,k(d)}}}function Lt(t,e,o){let{todoText:n=""}=e,{onAddHandler:r}=e;ot(()=>{z.set(0)});function s(i){i&&i.key==="Enter"&&n&&n.length>0&&r(n)}function d(){n=this.value,o(0,n)}const c=()=>r(n);return t.$$set=i=>{"todoText"in i&&o(0,n=i.todoText),"onAddHandler"in i&&o(1,r=i.onAddHandler)},[n,r,s,d,c]}class Dt extends I{constructor(e){super(),N(this,e,Lt,It,w,{todoText:0,onAddHandler:1})}}function Z(t,e,o){const n=t.slice();return n[5]=e[o],n}function tt(t){let e,o;return e=new Nt({props:{task:t[5],onDeleteHandler:t[2]}}),{c(){S(e.$$.fragment)},m(n,r){H(e,n,r),o=!0},p(n,r){const s={};r&1&&(s.task=n[5]),e.$set(s)},i(n){o||(C(e.$$.fragment,n),o=!0)},o(n){y(e.$$.fragment,n),o=!1},d(n){B(e,n)}}}function Ot(t){let e,o,n,r,s;function d(u){t[4](u)}let c={onAddHandler:t[3]};t[1]!==void 0&&(c.todoText=t[1]),e=new Dt({props:c}),G.push(()=>xt(e,"todoText",d));let i=t[0],l=[];for(let u=0;u<i.length;u+=1)l[u]=tt(Z(t,i,u));const f=u=>y(l[u],1,1,()=>{l[u]=null});return{c(){S(e.$$.fragment),n=E(),r=g("ul");for(let u=0;u<l.length;u+=1)l[u].c();p(r,"class","todoCard__list svelte-lo6x8t"),p(r,"id","todoCard__list")},m(u,_){H(e,u,_),v(u,n,_),v(u,r,_);for(let h=0;h<l.length;h+=1)l[h].m(r,null);s=!0},p(u,[_]){const h={};if(!o&&_&2&&(o=!0,h.todoText=u[1],$t(()=>o=!1)),e.$set(h),_&5){i=u[0];let a;for(a=0;a<i.length;a+=1){const V=Z(u,i,a);l[a]?(l[a].p(V,_),C(l[a],1)):(l[a]=tt(V),l[a].c(),C(l[a],1),l[a].m(r,null))}for(yt(),a=i.length;a<l.length;a+=1)f(a);bt()}},i(u){if(!s){C(e.$$.fragment,u);for(let _=0;_<i.length;_+=1)C(l[_]);s=!0}},o(u){y(e.$$.fragment,u),l=l.filter(Boolean);for(let _=0;_<l.length;_+=1)y(l[_]);s=!1},d(u){B(e,u),u&&b(n),u&&b(r),_t(l,u)}}}function jt(t,e,o){ot(()=>{F.set(n.length);const i=n.filter(l=>l.isCompleted===!0);z.set(i.length)});let{todos:n=[]}=e,r="";const s=i=>{!n||n&&n.length===0||(F.update(f=>f-1),n.find(f=>f.id===i&&f.isCompleted)&&z.update(f=>f-1),o(0,n=n.filter(f=>f.id!==i)))},d=()=>{!n||r===""||(o(0,n=[...n,{id:n.length,isCompleted:!1,text:r}]),o(1,r=""),F.update(i=>i+1))};function c(i){r=i,o(1,r)}return t.$$set=i=>{"todos"in i&&o(0,n=i.todos)},[n,r,s,d,c]}class St extends I{constructor(e){super(),N(this,e,jt,Ot,w,{todos:0})}}const Mt=[{id:0,text:"Do some exercise",isCompleted:!1},{id:1,text:"Read some book",isCompleted:!1},{id:2,text:"Learn Angular",isCompleted:!0},{id:3,text:"Buy milk",isCompleted:!1},{id:4,text:"Create to-do list app",isCompleted:!0}];function qt(t){let e,o,n,r;return e=new Ht({}),n=new St({props:{todos:t[0]}}),{c(){S(e.$$.fragment),o=E(),S(n.$$.fragment)},m(s,d){H(e,s,d),v(s,o,d),H(n,s,d),r=!0},p:$,i(s){r||(C(e.$$.fragment,s),C(n.$$.fragment,s),r=!0)},o(s){y(e.$$.fragment,s),y(n.$$.fragment,s),r=!1},d(s){B(e,s),s&&b(o),B(n,s)}}}function Pt(t){let e,o;return e=new At({props:{$$slots:{default:[qt]},$$scope:{ctx:t}}}),{c(){S(e.$$.fragment)},m(n,r){H(e,n,r),o=!0},p(n,[r]){const s={};r&2&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){o||(C(e.$$.fragment,n),o=!0)},o(n){y(e.$$.fragment,n),o=!1},d(n){B(e,n)}}}function Ft(t){return[[...Mt]]}class Kt extends I{constructor(e){super(),N(this,e,Ft,Pt,w,{})}}new Kt({target:document.getElementById("app")});
