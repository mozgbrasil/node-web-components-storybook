import{x as Qe}from"./iframe-DGXKmtGt.js";import"./index-nuYtCEEu.js";const un="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(un);let Ee=!1,fn=!1;function cn(){Ee=!0}cn();const dn=2,hn=8,vn=2,gt="[",yt="[!",$t="]",$e={},b=Symbol(),bt=!1;var wt=Array.isArray,mn=Array.prototype.indexOf,pn=Array.from,Fe=Object.keys,ce=Object.defineProperty,Q=Object.getOwnPropertyDescriptor,_n=Object.prototype,gn=Array.prototype,yn=Object.getPrototypeOf,lt=Object.isExtensible;const $n=()=>{};function bn(e){for(var t=0;t<e.length;t++)e[t]()}function Et(){var e,t,n=new Promise((r,s)=>{e=r,t=s});return{promise:n,resolve:e,reject:t}}const k=2,xt=4,et=8,ne=16,re=32,W=64,tt=128,D=256,Ie=512,S=1024,P=2048,K=4096,de=8192,se=16384,St=32768,Tt=65536,at=1<<17,wn=1<<18,ie=1<<19,En=1<<20,We=1<<21,Ve=1<<22,ee=1<<23,Re=Symbol("$state"),Ct=Symbol("legacy props"),_e=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"},xn=3,Ye=8;function Sn(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Tn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Cn(){throw new Error("https://svelte.dev/e/hydration_failed")}function kn(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function zn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Nn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function On(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function An(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}function nt(e){console.warn("https://svelte.dev/e/hydration_mismatch")}function Pn(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let y=!1;function ae(e){y=e}let g;function U(e){if(e===null)throw nt(),$e;return g=e}function rt(){return U(G(g))}function ut(e){if(y){if(G(g)!==null)throw nt(),$e;g=e}}function Rn(e=1){if(y){for(var t=e,n=g;t--;)n=G(n);g=n}}function Dn(e=!0){for(var t=0,n=g;;){if(n.nodeType===Ye){var r=n.data;if(r===$t){if(t===0)return n;t-=1}else(r===gt||r===yt)&&(t+=1)}var s=G(n);e&&n.remove(),n=s}}function kt(e){return e===this.v}function Ln(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function zt(e){return!Ln(e,this.v)}let w=null;function he(e){w=e}function Nt(e,t=!1,n){w={p:w,c:null,e:null,s:e,x:null,l:Ee&&!t?{s:null,u:null,$:[]}:null}}function Ot(e){var t=w,n=t.e;if(n!==null){t.e=null;for(var r of n)tr(r)}return e!==void 0&&(t.x=e),w=t.p,e??{}}function xe(){return!Ee||w!==null&&w.l===null}let Z=[];function At(){var e=Z;Z=[],bn(e)}function Me(e){if(Z.length===0&&!ge){var t=Z;queueMicrotask(()=>{t===Z&&At()})}Z.push(e)}function Fn(){for(;Z.length>0;)At()}const In=new WeakMap;function Pt(e){var t=v;if(t===null)return m.f|=ee,e;if((t.f&St)===0){if((t.f&tt)===0)throw!t.parent&&e instanceof Error&&Rt(e),e;t.b.error(e)}else ve(e,t)}function ve(e,t){for(;t!==null;){if((t.f&tt)!==0)try{t.b.error(e);return}catch(n){e=n}t=t.parent}throw e instanceof Error&&Rt(e),e}function Rt(e){const t=In.get(e);t&&(ce(e,"message",{value:t.message}),ce(e,"stack",{value:t.stack}))}const Ce=new Set;let $=null,Ke=new Set,I=[],Be=null,Ge=!1,ge=!1;class N{current=new Map;#t=new Map;#e=new Set;#a=0;#i=null;#u=[];#s=[];#r=[];#n=[];#o=[];#f=[];skipped_effects=new Set;process(t){I=[];var n=N.apply(this);for(const i of t)this.#c(i);if(this.#a===0){this.#d();var r=this.#s,s=this.#r;this.#s=[],this.#r=[],this.#n=[],$=null,ft(r),ft(s),this.#i?.resolve()}else this.#l(this.#s),this.#l(this.#r),this.#l(this.#n);n();for(const i of this.#u)we(i);this.#u=[]}#c(t){t.f^=S;for(var n=t.first;n!==null;){var r=n.f,s=(r&(re|W))!==0,i=s&&(r&S)!==0,o=i||(r&de)!==0||this.skipped_effects.has(n);if(!o&&n.fn!==null){s?n.f^=S:(r&xt)!==0?this.#r.push(n):(r&S)===0&&((r&Ve)!==0&&n.b?.is_pending()?this.#u.push(n):He(n)&&((n.f&ne)!==0&&this.#n.push(n),we(n)));var a=n.first;if(a!==null){n=a;continue}}var l=n.parent;for(n=n.next;n===null&&l!==null;)n=l.next,l=l.parent}}#l(t){for(const n of t)((n.f&P)!==0?this.#o:this.#f).push(n),C(n,S);t.length=0}capture(t,n){this.#t.has(t)||this.#t.set(t,n),this.current.set(t,t.v)}activate(){$=this}deactivate(){$=null;for(const t of Ke)if(Ke.delete(t),t(),$!==null)break}flush(){if(I.length>0){if(this.activate(),Lt(),$!==null&&$!==this)return}else this.#a===0&&this.#d();this.deactivate()}#d(){for(const t of this.#e)t();if(this.#e.clear(),Ce.size>1){this.#t.clear();let t=!0;for(const n of Ce){if(n===this){t=!1;continue}for(const[r,s]of this.current){if(n.current.has(r))if(t)n.current.set(r,s);else continue;Ft(r)}if(I.length>0){$=n;const r=N.apply(n);for(const s of I)n.#c(s);I=[],r()}}$=null}Ce.delete(this)}increment(){this.#a+=1}decrement(){if(this.#a-=1,this.#a===0){for(const t of this.#o)C(t,P),me(t);for(const t of this.#f)C(t,K),me(t);this.flush()}else this.deactivate()}add_callback(t){this.#e.add(t)}settled(){return(this.#i??=Et()).promise}static ensure(){if($===null){const t=$=new N;Ce.add($),ge||N.enqueue(()=>{$===t&&t.flush()})}return $}static enqueue(t){Me(t)}static apply(t){return $n}}function Dt(e){var t=ge;ge=!0;try{for(var n;;){if(Fn(),I.length===0&&($?.flush(),I.length===0))return Be=null,n;Lt()}}finally{ge=t}}function Lt(){var e=fe;Ge=!0;try{var t=0;for(ht(!0);I.length>0;){var n=N.ensure();if(t++>1e3){var r,s;Mn()}n.process(I),H.clear()}}finally{Ge=!1,ht(e),Be=null}}function Mn(){try{Tn()}catch(e){ve(e,Be)}}let X=null;function ft(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var r=e[n++];if((r.f&(se|de))===0&&He(r)&&(X=[],we(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null&&r.ac===null?Xt(r):r.fn=null),X?.length>0)){H.clear();for(const s of X)we(s);X=[]}}X=null}}function Ft(e){if(e.reactions!==null)for(const t of e.reactions){const n=t.f;(n&k)!==0?Ft(t):(n&(Ve|ne))!==0&&(C(t,P),me(t))}}function me(e){for(var t=Be=e;t.parent!==null;){t=t.parent;var n=t.f;if(Ge&&t===v&&(n&ne)!==0)return;if((n&(W|re))!==0){if((n&S)===0)return;t.f^=S}}I.push(t)}function jn(e){let t=0,n=Se(0),r;return()=>{Qn()&&(A(n),Kt(()=>(t===0&&(r=hr(()=>e(()=>ye(n)))),t+=1,()=>{Me(()=>{t-=1,t===0&&(r?.(),r=void 0,ye(n))})})))}}var qn=Tt|ie|tt;function Un(e,t,n){new Vn(e,t,n)}class Vn{parent;#t=!1;#e;#a=y?g:null;#i;#u;#s;#r=null;#n=null;#o=null;#f=null;#c=0;#l=0;#d=!1;#h=null;#_=()=>{this.#h&&je(this.#h,this.#c)};#g=jn(()=>(this.#h=Se(this.#c),()=>{this.#h=null}));constructor(t,n,r){this.#e=t,this.#i=n,this.#u=r,this.parent=v.b,this.#t=!!this.#i.pending,this.#s=or(()=>{if(v.b=this,y){const s=this.#a;rt(),s.nodeType===Ye&&s.data===yt?this.#$():this.#y()}else{try{this.#r=J(()=>r(this.#e))}catch(s){this.error(s)}this.#l>0?this.#m():this.#t=!1}},qn),y&&(this.#e=g)}#y(){try{this.#r=J(()=>this.#u(this.#e))}catch(t){this.error(t)}this.#t=!1}#$(){const t=this.#i.pending;t&&(this.#n=J(()=>t(this.#e)),N.enqueue(()=>{this.#r=this.#v(()=>(N.ensure(),J(()=>this.#u(this.#e)))),this.#l>0?this.#m():(De(this.#n,()=>{this.#n=null}),this.#t=!1)}))}is_pending(){return this.#t||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#i.pending}#v(t){var n=v,r=m,s=w;M(this.#s),T(this.#s),he(this.#s.ctx);try{return t()}catch(i){return Pt(i),null}finally{M(n),T(r),he(s)}}#m(){const t=this.#i.pending;this.#r!==null&&(this.#f=document.createDocumentFragment(),Yn(this.#r,this.#f)),this.#n===null&&(this.#n=J(()=>t(this.#e)))}#p(t){if(!this.has_pending_snippet()){this.parent&&this.parent.#p(t);return}this.#l+=t,this.#l===0&&(this.#t=!1,this.#n&&De(this.#n,()=>{this.#n=null}),this.#f&&(this.#e.before(this.#f),this.#f=null),Me(()=>{N.ensure().flush()}))}update_pending_count(t){this.#p(t),this.#c+=t,Ke.add(this.#_)}get_effect_pending(){return this.#g(),A(this.#h)}error(t){var n=this.#i.onerror;let r=this.#i.failed;if(this.#d||!n&&!r)throw t;this.#r&&(L(this.#r),this.#r=null),this.#n&&(L(this.#n),this.#n=null),this.#o&&(L(this.#o),this.#o=null),y&&(U(this.#a),Rn(),U(Dn()));var s=!1,i=!1;const o=()=>{if(s){Pn();return}s=!0,i&&An(),N.ensure(),this.#c=0,this.#o!==null&&De(this.#o,()=>{this.#o=null}),this.#t=this.has_pending_snippet(),this.#r=this.#v(()=>(this.#d=!1,J(()=>this.#u(this.#e)))),this.#l>0?this.#m():this.#t=!1};var a=m;try{T(null),i=!0,n?.(t,o),i=!1}catch(l){ve(l,this.#s&&this.#s.parent)}finally{T(a)}r&&Me(()=>{this.#o=this.#v(()=>{this.#d=!0;try{return J(()=>{r(this.#e,()=>t,()=>o)})}catch(l){return ve(l,this.#s.parent),null}finally{this.#d=!1}})})}}function Yn(e,t){for(var n=e.nodes_start,r=e.nodes_end;n!==null;){var s=n===r?null:G(n);t.append(n),n=s}}function Bn(e,t,n){const r=xe()?Mt:jt;if(t.length===0){n(e.map(r));return}var s=$,i=v,o=Hn(),a=y;Promise.all(t.map(l=>Wn(l))).then(l=>{s?.activate(),o();try{n([...e.map(r),...l])}catch(u){(i.f&se)===0&&ve(u,i)}a&&ae(!1),s?.deactivate(),It()}).catch(l=>{ve(l,i)})}function Hn(){var e=v,t=m,n=w,r=$,s=y;if(s)var i=g;return function(){M(e),T(t),he(n),r?.activate(),s&&(ae(!0),U(i))}}function It(){M(null),T(null),he(null)}function Mt(e){var t=k|P,n=m!==null&&(m.f&k)!==0?m:null;return v===null||n!==null&&(n.f&D)!==0?t|=D:v.f|=ie,{ctx:w,deps:null,effects:null,equals:kt,f:t,fn:e,reactions:null,rv:0,v:b,wv:0,parent:n??v,ac:null}}function Wn(e,t){let n=v;n===null&&Sn();var r=n.b,s=void 0,i=Se(b),o=!m,a=new Map;return sr(()=>{var l=Et();s=l.promise;try{Promise.resolve(e()).then(l.resolve,l.reject)}catch(h){l.reject(h)}var u=$,c=r.is_pending();o&&(r.update_pending_count(1),c||(u.increment(),a.get(u)?.reject(_e),a.set(u,l)));const d=(h,f=void 0)=>{c||u.activate(),f?f!==_e&&(i.f|=ee,je(i,f)):((i.f&ee)!==0&&(i.f^=ee),je(i,h)),o&&(r.update_pending_count(-1),c||u.decrement()),It()};l.promise.then(d,h=>d(null,h||"unknown"))}),er(()=>{for(const l of a.values())l.reject(_e)}),new Promise(l=>{function u(c){function d(){c===s?l(i):u(s)}c.then(d,d)}u(s)})}function jt(e){const t=Mt(e);return t.equals=zt,t}function qt(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)L(t[n])}}function Kn(e){for(var t=e.parent;t!==null;){if((t.f&k)===0)return t;t=t.parent}return null}function st(e){var t,n=v;M(Kn(e));try{qt(e),t=nn(e)}finally{M(n)}return t}function Ut(e){var t=st(e);if(e.equals(t)||(e.v=t,e.wv=en()),!pe){var n=(B||(e.f&D)!==0)&&e.deps!==null?K:S;C(e,n)}}const H=new Map;function Se(e,t){var n={f:0,v:e,reactions:null,equals:kt,rv:0,wv:0};return n}function Y(e,t){const n=Se(e);return fr(n),n}function Gn(e,t=!1,n=!0){const r=Se(e);return t||(r.equals=zt),Ee&&n&&w!==null&&w.l!==null&&(w.l.s??=[]).push(r),r}function j(e,t,n=!1){m!==null&&(!R||(m.f&at)!==0)&&xe()&&(m.f&(k|ne|Ve|at))!==0&&!q?.includes(e)&&On();let r=n?ue(t):t;return je(e,r)}function je(e,t){if(!e.equals(t)){var n=e.v;pe?H.set(e,t):H.set(e,n),e.v=t;var r=N.ensure();r.capture(e,n),(e.f&k)!==0&&((e.f&P)!==0&&st(e),C(e,(e.f&D)===0?S:K)),e.wv=en(),Vt(e,P),xe()&&v!==null&&(v.f&S)!==0&&(v.f&(re|W))===0&&(O===null?cr([e]):O.push(e))}return t}function ye(e){j(e,e.v+1)}function Vt(e,t){var n=e.reactions;if(n!==null)for(var r=xe(),s=n.length,i=0;i<s;i++){var o=n[i],a=o.f;if(!(!r&&o===v)){var l=(a&P)===0;l&&C(o,t),(a&k)!==0?Vt(o,K):l&&((a&ne)!==0&&X!==null&&X.push(o),me(o))}}}function ue(e){if(typeof e!="object"||e===null||Re in e)return e;const t=yn(e);if(t!==_n&&t!==gn)return e;var n=new Map,r=wt(e),s=Y(0),i=te,o=a=>{if(te===i)return a();var l=m,u=te;T(null),mt(i);var c=a();return T(l),mt(u),c};return r&&n.set("length",Y(e.length)),new Proxy(e,{defineProperty(a,l,u){(!("value"in u)||u.configurable===!1||u.enumerable===!1||u.writable===!1)&&zn();var c=n.get(l);return c===void 0?c=o(()=>{var d=Y(u.value);return n.set(l,d),d}):j(c,u.value,!0),!0},deleteProperty(a,l){var u=n.get(l);if(u===void 0){if(l in a){const c=o(()=>Y(b));n.set(l,c),ye(s)}}else j(u,b),ye(s);return!0},get(a,l,u){if(l===Re)return e;var c=n.get(l),d=l in a;if(c===void 0&&(!d||Q(a,l)?.writable)&&(c=o(()=>{var f=ue(d?a[l]:b),p=Y(f);return p}),n.set(l,c)),c!==void 0){var h=A(c);return h===b?void 0:h}return Reflect.get(a,l,u)},getOwnPropertyDescriptor(a,l){var u=Reflect.getOwnPropertyDescriptor(a,l);if(u&&"value"in u){var c=n.get(l);c&&(u.value=A(c))}else if(u===void 0){var d=n.get(l),h=d?.v;if(d!==void 0&&h!==b)return{enumerable:!0,configurable:!0,value:h,writable:!0}}return u},has(a,l){if(l===Re)return!0;var u=n.get(l),c=u!==void 0&&u.v!==b||Reflect.has(a,l);if(u!==void 0||v!==null&&(!c||Q(a,l)?.writable)){u===void 0&&(u=o(()=>{var h=c?ue(a[l]):b,f=Y(h);return f}),n.set(l,u));var d=A(u);if(d===b)return!1}return c},set(a,l,u,c){var d=n.get(l),h=l in a;if(r&&l==="length")for(var f=u;f<d.v;f+=1){var p=n.get(f+"");p!==void 0?j(p,b):f in a&&(p=o(()=>Y(b)),n.set(f+"",p))}if(d===void 0)(!h||Q(a,l)?.writable)&&(d=o(()=>Y(void 0)),j(d,ue(u)),n.set(l,d));else{h=d.v!==b;var E=o(()=>ue(u));j(d,E)}var F=Reflect.getOwnPropertyDescriptor(a,l);if(F?.set&&F.set.call(c,u),!h){if(r&&typeof l=="string"){var oe=n.get("length"),_=Number(l);Number.isInteger(_)&&_>=oe.v&&j(oe,_+1)}ye(s)}return!0},ownKeys(a){A(s);var l=Reflect.ownKeys(a).filter(d=>{var h=n.get(d);return h===void 0||h.v!==b});for(var[u,c]of n)c.v!==b&&!(u in a)&&l.push(u);return l},setPrototypeOf(){Nn()}})}var ct,Yt,Bt,Ht;function Je(){if(ct===void 0){ct=window,Yt=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;Bt=Q(t,"firstChild").get,Ht=Q(t,"nextSibling").get,lt(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),lt(n)&&(n.__t=void 0)}}function it(e=""){return document.createTextNode(e)}function qe(e){return Bt.call(e)}function G(e){return Ht.call(e)}function dt(e,t){if(!y)return qe(e);var n=qe(g);return n===null&&(n=g.appendChild(it())),U(n),n}function Jn(e,t=1,n=!1){let r=y?g:e;for(var s;t--;)s=r,r=G(r);if(!y)return r;if(n&&r?.nodeType!==xn){var i=it();return r===null?s?.after(i):r.before(i),U(i),i}return U(r),r}function Xn(e){e.textContent=""}function Wt(e){var t=m,n=v;T(null),M(null);try{return e()}finally{T(t),M(n)}}function Zn(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function V(e,t,n,r=!0){var s=v;s!==null&&(s.f&de)!==0&&(e|=de);var i={ctx:w,deps:null,nodes_start:null,nodes_end:null,f:e|P,first:null,fn:t,last:null,next:null,parent:s,b:s&&s.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(n)try{we(i),i.f|=St}catch(l){throw L(i),l}else t!==null&&me(i);if(r){var o=i;if(n&&o.deps===null&&o.teardown===null&&o.nodes_start===null&&o.first===o.last&&(o.f&ie)===0&&(o=o.first),o!==null&&(o.parent=s,s!==null&&Zn(o,s),m!==null&&(m.f&k)!==0&&(e&W)===0)){var a=m;(a.effects??=[]).push(o)}}return i}function Qn(){return m!==null&&!R}function er(e){const t=V(et,null,!1);return C(t,S),t.teardown=e,t}function tr(e){return V(xt|En,e,!1)}function nr(e){N.ensure();const t=V(W|ie,e,!0);return()=>{L(t)}}function rr(e){N.ensure();const t=V(W|ie,e,!0);return(n={})=>new Promise(r=>{n.outro?De(t,()=>{L(t),r(void 0)}):(L(t),r(void 0))})}function sr(e){return V(Ve|ie,e,!0)}function Kt(e,t=0){return V(et|t,e,!0)}function ir(e,t=[],n=[]){Bn(t,n,r=>{V(et,()=>e(...r.map(A)),!0)})}function or(e,t=0){var n=V(ne|t,e,!0);return n}function J(e,t=!0){return V(re|ie,e,!0,t)}function Gt(e){var t=e.teardown;if(t!==null){const n=pe,r=m;vt(!0),T(null);try{t.call(null)}finally{vt(n),T(r)}}}function Jt(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){const s=n.ac;s!==null&&Wt(()=>{s.abort(_e)});var r=n.next;(n.f&W)!==0?n.parent=null:L(n,t),n=r}}function lr(e){for(var t=e.first;t!==null;){var n=t.next;(t.f&re)===0&&L(t),t=n}}function L(e,t=!0){var n=!1;(t||(e.f&wn)!==0)&&e.nodes_start!==null&&e.nodes_end!==null&&(ar(e.nodes_start,e.nodes_end),n=!0),Jt(e,t&&!n),Ue(e,0),C(e,se);var r=e.transitions;if(r!==null)for(const i of r)i.stop();Gt(e);var s=e.parent;s!==null&&s.first!==null&&Xt(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=e.ac=null}function ar(e,t){for(;e!==null;){var n=e===t?null:G(e);e.remove(),e=n}}function Xt(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function De(e,t){var n=[];Zt(e,n,!0),ur(n,()=>{L(e),t&&t()})}function ur(e,t){var n=e.length;if(n>0){var r=()=>--n||t();for(var s of e)s.out(r)}else t()}function Zt(e,t,n){if((e.f&de)===0){if(e.f^=de,e.transitions!==null)for(const o of e.transitions)(o.is_global||n)&&t.push(o);for(var r=e.first;r!==null;){var s=r.next,i=(r.f&Tt)!==0||(r.f&re)!==0;Zt(r,t,i?n:!1),r=s}}}let fe=!1;function ht(e){fe=e}let pe=!1;function vt(e){pe=e}let m=null,R=!1;function T(e){m=e}let v=null;function M(e){v=e}let q=null;function fr(e){m!==null&&(q===null?q=[e]:q.push(e))}let x=null,z=0,O=null;function cr(e){O=e}let Qt=1,be=0,te=be;function mt(e){te=e}let B=!1;function en(){return++Qt}function He(e){var t=e.f;if((t&P)!==0)return!0;if((t&K)!==0){var n=e.deps,r=(t&D)!==0;if(n!==null){var s,i,o=(t&Ie)!==0,a=r&&v!==null&&!B,l=n.length;if((o||a)&&(v===null||(v.f&se)===0)){var u=e,c=u.parent;for(s=0;s<l;s++)i=n[s],(o||!i?.reactions?.includes(u))&&(i.reactions??=[]).push(u);o&&(u.f^=Ie),a&&c!==null&&(c.f&D)===0&&(u.f^=D)}for(s=0;s<l;s++)if(i=n[s],He(i)&&Ut(i),i.wv>e.wv)return!0}(!r||v!==null&&!B)&&C(e,S)}return!1}function tn(e,t,n=!0){var r=e.reactions;if(r!==null&&!q?.includes(e))for(var s=0;s<r.length;s++){var i=r[s];(i.f&k)!==0?tn(i,t,!1):t===i&&(n?C(i,P):(i.f&S)!==0&&C(i,K),me(i))}}function nn(e){var t=x,n=z,r=O,s=m,i=B,o=q,a=w,l=R,u=te,c=e.f;x=null,z=0,O=null,B=(c&D)!==0&&(R||!fe||m===null),m=(c&(re|W))===0?e:null,q=null,he(e.ctx),R=!1,te=++be,e.ac!==null&&(Wt(()=>{e.ac.abort(_e)}),e.ac=null);try{e.f|=We;var d=e.fn,h=d(),f=e.deps;if(x!==null){var p;if(Ue(e,z),f!==null&&z>0)for(f.length=z+x.length,p=0;p<x.length;p++)f[z+p]=x[p];else e.deps=f=x;if(!B||(c&k)!==0&&e.reactions!==null)for(p=z;p<f.length;p++)(f[p].reactions??=[]).push(e)}else f!==null&&z<f.length&&(Ue(e,z),f.length=z);if(xe()&&O!==null&&!R&&f!==null&&(e.f&(k|K|P))===0)for(p=0;p<O.length;p++)tn(O[p],e);return s!==null&&s!==e&&(be++,O!==null&&(r===null?r=O:r.push(...O))),(e.f&ee)!==0&&(e.f^=ee),h}catch(E){return Pt(E)}finally{e.f^=We,x=t,z=n,O=r,m=s,B=i,q=o,he(a),R=l,te=u}}function dr(e,t){let n=t.reactions;if(n!==null){var r=mn.call(n,e);if(r!==-1){var s=n.length-1;s===0?n=t.reactions=null:(n[r]=n[s],n.pop())}}n===null&&(t.f&k)!==0&&(x===null||!x.includes(t))&&(C(t,K),(t.f&(D|Ie))===0&&(t.f^=Ie),qt(t),Ue(t,0))}function Ue(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)dr(e,n[r])}function we(e){var t=e.f;if((t&se)===0){C(e,S);var n=v,r=fe;v=e,fe=!0;try{(t&ne)!==0?lr(e):Jt(e),Gt(e);var s=nn(e);e.teardown=typeof s=="function"?s:null,e.wv=Qt;var i;bt&&fn&&(e.f&P)!==0&&e.deps}finally{fe=r,v=n}}}function A(e){var t=e.f,n=(t&k)!==0;if(m!==null&&!R){var r=v!==null&&(v.f&se)!==0;if(!r&&!q?.includes(e)){var s=m.deps;if((m.f&We)!==0)e.rv<be&&(e.rv=be,x===null&&s!==null&&s[z]===e?z++:x===null?x=[e]:(!B||!x.includes(e))&&x.push(e));else{(m.deps??=[]).push(e);var i=e.reactions;i===null?e.reactions=[m]:i.includes(m)||i.push(m)}}}else if(n&&e.deps===null&&e.effects===null){var o=e,a=o.parent;a!==null&&(a.f&D)===0&&(o.f^=D)}if(pe){if(H.has(e))return H.get(e);if(n){o=e;var l=o.v;return((o.f&S)===0&&o.reactions!==null||rn(o))&&(l=st(o)),H.set(o,l),l}}else n&&(o=e,He(o)&&Ut(o));if((e.f&ee)!==0)throw e.v;return e.v}function rn(e){if(e.v===b)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(H.has(t)||(t.f&k)!==0&&rn(t))return!0;return!1}function hr(e){var t=R;try{return R=!0,e()}finally{R=t}}const vr=-7169;function C(e,t){e.f=e.f&vr|t}const mr=new Set,pt=new Set;let _t=null;function ke(e){var t=this,n=t.ownerDocument,r=e.type,s=e.composedPath?.()||[],i=s[0]||e.target;_t=e;var o=0,a=_t===e&&e.__root;if(a){var l=s.indexOf(a);if(l!==-1&&(t===document||t===window)){e.__root=t;return}var u=s.indexOf(t);if(u===-1)return;l<=u&&(o=l)}if(i=s[o]||e.target,i!==t){ce(e,"currentTarget",{configurable:!0,get(){return i||n}});var c=m,d=v;T(null),M(null);try{for(var h,f=[];i!==null;){var p=i.assignedSlot||i.parentNode||i.host||null;try{var E=i["__"+r];if(E!=null&&(!i.disabled||e.target===i))if(wt(E)){var[F,...oe]=E;F.apply(i,[e,...oe])}else E.call(i,e)}catch(_){h?f.push(_):h=_}if(e.cancelBubble||p===t||p===null)break;i=p}if(h){for(let _ of f)queueMicrotask(()=>{throw _});throw h}}finally{e.__root=t,delete e.currentTarget,T(c),M(d)}}}function pr(e){var t=document.createElement("template");return t.innerHTML=e.replaceAll("<!>","<!---->"),t.content}function Xe(e,t){var n=v;n.nodes_start===null&&(n.nodes_start=e,n.nodes_end=t)}function _r(e,t){var n=(t&vn)!==0,r,s=!e.startsWith("<!>");return()=>{if(y)return Xe(g,null),g;r===void 0&&(r=pr(s?e:"<!>"+e),r=qe(r));var i=n||Yt?document.importNode(r,!0):r.cloneNode(!0);return Xe(i,i),i}}function sn(e,t){if(y){v.nodes_end=g,rt();return}e!==null&&e.before(t)}const gr=["touchstart","touchmove"];function yr(e){return gr.includes(e)}function $r(e,t){var n=t==null?"":typeof t=="object"?t+"":t;n!==(e.__t??=e.nodeValue)&&(e.__t=n,e.nodeValue=n+"")}function on(e,t){return ln(e,t)}function br(e,t){Je(),t.intro=t.intro??!1;const n=t.target,r=y,s=g;try{for(var i=qe(n);i&&(i.nodeType!==Ye||i.data!==gt);)i=G(i);if(!i)throw $e;ae(!0),U(i);const o=ln(e,{...t,anchor:i});return ae(!1),o}catch(o){if(o instanceof Error&&o.message.split(`
`).some(a=>a.startsWith("https://svelte.dev/e/")))throw o;return o!==$e&&console.warn("Failed to hydrate: ",o),t.recover===!1&&Cn(),Je(),Xn(n),ae(!1),on(e,t)}finally{ae(r),U(s)}}const le=new Map;function ln(e,{target:t,anchor:n,props:r={},events:s,context:i,intro:o=!0}){Je();var a=new Set,l=d=>{for(var h=0;h<d.length;h++){var f=d[h];if(!a.has(f)){a.add(f);var p=yr(f);t.addEventListener(f,ke,{passive:p});var E=le.get(f);E===void 0?(document.addEventListener(f,ke,{passive:p}),le.set(f,1)):le.set(f,E+1)}}};l(pn(mr)),pt.add(l);var u=void 0,c=rr(()=>{var d=n??t.appendChild(it());return Un(d,{pending:()=>{}},h=>{if(i){Nt({});var f=w;f.c=i}if(s&&(r.$$events=s),y&&Xe(h,null),u=e(h,r)||{},y&&(v.nodes_end=g,g===null||g.nodeType!==Ye||g.data!==$t))throw nt(),$e;i&&Ot()}),()=>{for(var h of a){t.removeEventListener(h,ke);var f=le.get(h);--f===0?(document.removeEventListener(h,ke),le.delete(h)):le.set(h,f)}pt.delete(l),d!==n&&d.parentNode?.removeChild(d)}});return Ze.set(u,c),u}let Ze=new WeakMap;function wr(e,t){const n=Ze.get(e);return n?(Ze.delete(e),n(t)):Promise.resolve()}function Er(e,t,n,r,s){y&&rt();var i=t.$$slots?.[n],o=!1;i===!0&&(i=t.children,o=!0),i===void 0||i(e,o?()=>r:r)}let ze=!1;function xr(e){var t=ze;try{return ze=!1,[e(),ze]}finally{ze=t}}function Sr(e,t,n,r){var s=!Ee||(n&dn)!==0,i=(n&hn)!==0,o=r,a=!0,l=()=>(a&&(a=!1,o=r),o),u;{var c=Re in e||Ct in e;u=Q(e,t)?.set??(c&&t in e?_=>e[t]=_:void 0)}var d,h=!1;[d,h]=xr(()=>e[t]),d===void 0&&r!==void 0&&(d=l(),u&&(s&&kn(),u(d)));var f;if(s?f=()=>{var _=e[t];return _===void 0?l():(a=!0,_)}:f=()=>{var _=e[t];return _!==void 0&&(o=void 0),_===void 0?o:_},u){var p=e.$$legacy;return(function(_,Te){return arguments.length>0?((!s||!Te||p||h)&&u(Te?f():_),_):f()})}var E=!1,F=jt(()=>(E=!1,f()));A(F);var oe=v;return(function(_,Te){if(arguments.length>0){const ot=Te?A(F):s&&i?ue(_):_;return j(F,ot),E=!0,o!==void 0&&(o=ot),_}return pe&&E||(oe.f&se)!==0?F.v:A(F)})}function Tr(e){return new Cr(e)}class Cr{#t;#e;constructor(t){var n=new Map,r=(i,o)=>{var a=Gn(o,!1,!1);return n.set(i,a),a};const s=new Proxy({...t.props||{},$$events:{}},{get(i,o){return A(n.get(o)??r(o,Reflect.get(i,o)))},has(i,o){return o===Ct?!0:(A(n.get(o)??r(o,Reflect.get(i,o))),Reflect.has(i,o))},set(i,o,a){return j(n.get(o)??r(o,a),a),Reflect.set(i,o,a)}});this.#e=(t.hydrate?br:on)(t.component,{target:t.target,anchor:t.anchor,props:s,context:t.context,intro:t.intro??!1,recover:t.recover}),(!t?.props?.$$host||t.sync===!1)&&Dt(),this.#t=s.$$events;for(const i of Object.keys(this.#e))i==="$set"||i==="$destroy"||i==="$on"||ce(this,i,{get(){return this.#e[i]},set(o){this.#e[i]=o},enumerable:!0});this.#e.$set=i=>{Object.assign(s,i)},this.#e.$destroy=()=>{wr(this.#e)}}$set(t){this.#e.$set(t)}$on(t,n){this.#t[t]=this.#t[t]||[];const r=(...s)=>n.call(this,...s);return this.#t[t].push(r),()=>{this.#t[t]=this.#t[t].filter(s=>s!==r)}}$destroy(){this.#e.$destroy()}}let an;typeof HTMLElement=="function"&&(an=class extends HTMLElement{$$ctor;$$s;$$c;$$cn=!1;$$d={};$$r=!1;$$p_d={};$$l={};$$l_u=new Map;$$me;constructor(e,t,n){super(),this.$$ctor=e,this.$$s=t,n&&this.attachShadow({mode:"open"})}addEventListener(e,t,n){if(this.$$l[e]=this.$$l[e]||[],this.$$l[e].push(t),this.$$c){const r=this.$$c.$on(e,t);this.$$l_u.set(t,r)}super.addEventListener(e,t,n)}removeEventListener(e,t,n){if(super.removeEventListener(e,t,n),this.$$c){const r=this.$$l_u.get(t);r&&(r(),this.$$l_u.delete(t))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let e=function(r){return s=>{const i=document.createElement("slot");r!=="default"&&(i.name=r),sn(s,i)}};if(await Promise.resolve(),!this.$$cn||this.$$c)return;const t={},n=kr(this);for(const r of this.$$s)r in n&&(r==="default"&&!this.$$d.children?(this.$$d.children=e(r),t.default=!0):t[r]=e(r));for(const r of this.attributes){const s=this.$$g_p(r.name);s in this.$$d||(this.$$d[s]=Le(s,r.value,this.$$p_d,"toProp"))}for(const r in this.$$p_d)!(r in this.$$d)&&this[r]!==void 0&&(this.$$d[r]=this[r],delete this[r]);this.$$c=Tr({component:this.$$ctor,target:this.shadowRoot||this,props:{...this.$$d,$$slots:t,$$host:this}}),this.$$me=nr(()=>{Kt(()=>{this.$$r=!0;for(const r of Fe(this.$$c)){if(!this.$$p_d[r]?.reflect)continue;this.$$d[r]=this.$$c[r];const s=Le(r,this.$$d[r],this.$$p_d,"toAttribute");s==null?this.removeAttribute(this.$$p_d[r].attribute||r):this.setAttribute(this.$$p_d[r].attribute||r,s)}this.$$r=!1})});for(const r in this.$$l)for(const s of this.$$l[r]){const i=this.$$c.$on(r,s);this.$$l_u.set(s,i)}this.$$l={}}}attributeChangedCallback(e,t,n){this.$$r||(e=this.$$g_p(e),this.$$d[e]=Le(e,n,this.$$p_d,"toProp"),this.$$c?.$set({[e]:this.$$d[e]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$me(),this.$$c=void 0)})}$$g_p(e){return Fe(this.$$p_d).find(t=>this.$$p_d[t].attribute===e||!this.$$p_d[t].attribute&&t.toLowerCase()===e)||e}});function Le(e,t,n,r){const s=n[e]?.type;if(t=s==="Boolean"&&typeof t!="boolean"?t!=null:t,!r||!n[e])return t;if(r==="toAttribute")switch(s){case"Object":case"Array":return t==null?null:JSON.stringify(t);case"Boolean":return t?"":null;case"Number":return t??null;default:return t}else switch(s){case"Object":case"Array":return t&&JSON.parse(t);case"Boolean":return t;case"Number":return t!=null?+t:t;default:return t}}function kr(e){const t={};return e.childNodes.forEach(n=>{t[n.slot||"default"]=!0}),t}function zr(e,t,n,r,s,i){let o=class extends an{constructor(){super(e,n,s),this.$$p_d=t}static get observedAttributes(){return Fe(t).map(a=>(t[a].attribute||a).toLowerCase())}};return Fe(t).forEach(a=>{ce(o.prototype,a,{get(){return this.$$c&&a in this.$$c?this.$$c[a]:this.$$d[a]},set(l){l=Le(a,l,t),this.$$d[a]=l;var u=this.$$c;if(u){var c=Q(u,a)?.get;c?u[a]=l:u.$set({[a]:l})}}})}),r.forEach(a=>{ce(o.prototype,a,{get(){return this.$$c?.[a]}})}),e.element=o,o}var Nr=_r("<div><p> </p> <!></div>");function Or(e,t){Nt(t,!1);let n=Sr(t,"nome",12,"mundo");var r={get nome(){return n()},set nome(l){n(l),Dt()}},s=Nr(),i=dt(s),o=dt(i);ut(i);var a=Jn(i,2);return Er(a,t,"default",{}),ut(s),ir(()=>$r(o,`Aqui é ${n()??""}`)),sn(e,s),Ot(r)}zr(Or,{nome:{}},["default"],[],!0);const Dr={title:"Components/MeuComponenteSvelte",component:"mozg-meu-componente-svelte",tags:["autodocs"],argTypes:{titulo:{control:"text",description:"Título do componente",defaultValue:"Olá, Svelte!"},nome:{control:"text",description:"Nome a ser exibido no componente",defaultValue:"mundo"},contador:{control:{type:"number",min:0},description:"Valor inicial do contador",table:{type:{summary:"number"},defaultValue:{summary:0}}}},render:e=>Qe`
      <mozg-meu-componente-svelte titulo=${e.titulo} nome=${e.nome}>
        <div
          slot=""
          style="margin-top: 1rem; padding: 1rem; background: #f0f8ff; border-radius: 4px; border-left: 4px solid #4a90e2;"
        >
          <p style="margin: 0; color: #2c3e50; font-size: 0.9em;">Conteúdo adicional via slot</p>
        </div>
      </mozg-meu-componente-svelte>
    `},Ne={args:{titulo:"Componente Svelte",nome:"Visitante"},parameters:{docs:{description:{story:"Componente Svelte padrão com título e nome personalizáveis."}}}},Oe={args:{titulo:"Este é um componente Svelte com um título muito longo para demonstrar o comportamento",nome:"Usuário com nome longo também"},parameters:{docs:{description:{story:"Demonstração do componente Svelte com textos longos para testar o comportamento de layout."}}}},Ae={args:{titulo:"Conteúdo Personalizado",nome:"Usuário Svelte"},render:e=>Qe`
    <mozg-meu-componente-svelte titulo=${e.titulo} nome=${e.nome}>
      <div
        slot=""
        style="margin-top: 1rem; padding: 1rem; background: #f8f9fa; border-radius: 8px; border: 1px dashed #dee2e6;"
      >
        <h3 style="margin-top: 0; color: #495057;">Conteúdo Personalizado</h3>
        <p style="color: #6c757d;">
          Este é um exemplo de conteúdo personalizado usando slots no componente Svelte.
        </p>
        <button
          style="background: #4CAF50; color: white; padding: 8px 16px; border: none; border-radius: 4px; cursor: pointer; font-size: 0.9em;"
        >
          Ação Personalizada
        </button>
      </div>
    </mozg-meu-componente-svelte>
  `,parameters:{docs:{description:{story:"Exemplo de como personalizar o conteúdo do componente Svelte usando slots."}}}},Pe={render:()=>Qe`
    <div style="max-width: 1000px; margin: 0 auto; padding: 20px;">
      <h1 style="color: #2c3e50; text-align: center; margin-bottom: 2rem;">Dashboard com Svelte</h1>

      <div
        style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-bottom: 2rem;"
      >
        <mozg-meu-componente-svelte titulo="Tarefas" nome="Diárias">
          <div slot="" style="text-align: center; padding: 1rem;">
            <div style="font-size: 2.5em; font-weight: bold; color: #3498db; margin: 0.5em 0;">
              12
            </div>
            <div style="color: #7f8c8d; font-size: 0.9em;">tarefas para hoje</div>
          </div>
        </mozg-meu-componente-svelte>

        <mozg-meu-componente-svelte titulo="Mensagens" nome="Não Lidas">
          <div slot="" style="text-align: center; padding: 1rem;">
            <div style="font-size: 2.5em; font-weight: bold; color: #2ecc71; margin: 0.5em 0;">
              5
            </div>
            <div style="color: #7f8c8d; font-size: 0.9em;">mensagens não lidas</div>
          </div>
        </mozg-meu-componente-svelte>

        <mozg-meu-componente-svelte titulo="Notificações" nome="Pendentes">
          <div slot="" style="text-align: center; padding: 1rem;">
            <div style="font-size: 2.5em; font-weight: bold; color: #e74c3c; margin: 0.5em 0;">
              3
            </div>
            <div style="color: #7f8c8d; font-size: 0.9em;">notificações não lidas</div>
          </div>
        </mozg-meu-componente-svelte>
      </div>

      <div style="margin-top: 2rem; background: #f8f9fa; padding: 1.5rem; border-radius: 8px;">
        <h2 style="margin-top: 0; color: #2c3e50;">Sobre este componente</h2>
        <p>
          Este é um exemplo de como o componente Svelte pode ser usado em um layout de dashboard
          responsivo. O componente é totalmente personalizável e suporta slots para conteúdo
          personalizado.
        </p>

        <div
          style="margin-top: 1.5rem; padding: 1rem; background: white; border-radius: 6px; border-left: 4px solid #3498db;"
        >
          <h3 style="margin-top: 0; color: #3498db;">Dica de Uso</h3>
          <p>
            Experimente clicar nos botões de incremento e resetar o contador em cada um dos cards
            acima para ver a interatividade em ação.
          </p>
        </div>
      </div>
    </div>
  `,parameters:{layout:"fullscreen",docs:{description:{story:"Exemplo de uso do componente Svelte em um layout de dashboard completo com múltiplos cards e informações adicionais."}}}};Ne.parameters={...Ne.parameters,docs:{...Ne.parameters?.docs,source:{originalSource:`{
  args: {
    titulo: 'Componente Svelte',
    nome: 'Visitante'
  },
  parameters: {
    docs: {
      description: {
        story: 'Componente Svelte padrão com título e nome personalizáveis.'
      }
    }
  }
}`,...Ne.parameters?.docs?.source}}};Oe.parameters={...Oe.parameters,docs:{...Oe.parameters?.docs,source:{originalSource:`{
  args: {
    titulo: 'Este é um componente Svelte com um título muito longo para demonstrar o comportamento',
    nome: 'Usuário com nome longo também'
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstração do componente Svelte com textos longos para testar o comportamento de layout.'
      }
    }
  }
}`,...Oe.parameters?.docs?.source}}};Ae.parameters={...Ae.parameters,docs:{...Ae.parameters?.docs,source:{originalSource:`{
  args: {
    titulo: 'Conteúdo Personalizado',
    nome: 'Usuário Svelte'
  },
  render: args => html\`
    <mozg-meu-componente-svelte titulo=\${args.titulo} nome=\${args.nome}>
      <div
        slot=""
        style="margin-top: 1rem; padding: 1rem; background: #f8f9fa; border-radius: 8px; border: 1px dashed #dee2e6;"
      >
        <h3 style="margin-top: 0; color: #495057;">Conteúdo Personalizado</h3>
        <p style="color: #6c757d;">
          Este é um exemplo de conteúdo personalizado usando slots no componente Svelte.
        </p>
        <button
          style="background: #4CAF50; color: white; padding: 8px 16px; border: none; border-radius: 4px; cursor: pointer; font-size: 0.9em;"
        >
          Ação Personalizada
        </button>
      </div>
    </mozg-meu-componente-svelte>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Exemplo de como personalizar o conteúdo do componente Svelte usando slots.'
      }
    }
  }
}`,...Ae.parameters?.docs?.source}}};Pe.parameters={...Pe.parameters,docs:{...Pe.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <div style="max-width: 1000px; margin: 0 auto; padding: 20px;">
      <h1 style="color: #2c3e50; text-align: center; margin-bottom: 2rem;">Dashboard com Svelte</h1>

      <div
        style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-bottom: 2rem;"
      >
        <mozg-meu-componente-svelte titulo="Tarefas" nome="Diárias">
          <div slot="" style="text-align: center; padding: 1rem;">
            <div style="font-size: 2.5em; font-weight: bold; color: #3498db; margin: 0.5em 0;">
              12
            </div>
            <div style="color: #7f8c8d; font-size: 0.9em;">tarefas para hoje</div>
          </div>
        </mozg-meu-componente-svelte>

        <mozg-meu-componente-svelte titulo="Mensagens" nome="Não Lidas">
          <div slot="" style="text-align: center; padding: 1rem;">
            <div style="font-size: 2.5em; font-weight: bold; color: #2ecc71; margin: 0.5em 0;">
              5
            </div>
            <div style="color: #7f8c8d; font-size: 0.9em;">mensagens não lidas</div>
          </div>
        </mozg-meu-componente-svelte>

        <mozg-meu-componente-svelte titulo="Notificações" nome="Pendentes">
          <div slot="" style="text-align: center; padding: 1rem;">
            <div style="font-size: 2.5em; font-weight: bold; color: #e74c3c; margin: 0.5em 0;">
              3
            </div>
            <div style="color: #7f8c8d; font-size: 0.9em;">notificações não lidas</div>
          </div>
        </mozg-meu-componente-svelte>
      </div>

      <div style="margin-top: 2rem; background: #f8f9fa; padding: 1.5rem; border-radius: 8px;">
        <h2 style="margin-top: 0; color: #2c3e50;">Sobre este componente</h2>
        <p>
          Este é um exemplo de como o componente Svelte pode ser usado em um layout de dashboard
          responsivo. O componente é totalmente personalizável e suporta slots para conteúdo
          personalizado.
        </p>

        <div
          style="margin-top: 1.5rem; padding: 1rem; background: white; border-radius: 6px; border-left: 4px solid #3498db;"
        >
          <h3 style="margin-top: 0; color: #3498db;">Dica de Uso</h3>
          <p>
            Experimente clicar nos botões de incremento e resetar o contador em cada um dos cards
            acima para ver a interatividade em ação.
          </p>
        </div>
      </div>
    </div>
  \`,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Exemplo de uso do componente Svelte em um layout de dashboard completo com múltiplos cards e informações adicionais.'
      }
    }
  }
}`,...Pe.parameters?.docs?.source}}};const Lr=["Padrao","ComTituloLongo","ComConteudoPersonalizado","EmLayout"];export{Ae as ComConteudoPersonalizado,Oe as ComTituloLongo,Pe as EmLayout,Ne as Padrao,Lr as __namedExportsOrder,Dr as default};
