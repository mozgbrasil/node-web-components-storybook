import{x as st}from"./iframe-CQoxeWFO.js";import"./index-nuYtCEEu.js";const dn="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(dn);let we=!1,hn=!1;function vn(){we=!0}vn();const pn=2,mn=8,_n=2,Et="[",xt="[!",St="]",ge={},b=Symbol(),Xe=!1;var gn=Array.isArray,yn=Array.prototype.indexOf,$n=Array.from,je=Object.keys,Ie=Object.defineProperty,re=Object.getOwnPropertyDescriptor,bn=Object.prototype,wn=Array.prototype,En=Object.getPrototypeOf,ht=Object.isExtensible;function xn(e){for(var t=0;t<e.length;t++)e[t]()}function Tt(){var e,t,n=new Promise((r,i)=>{e=r,t=i});return{promise:n,resolve:e,reject:t}}const $=2,kt=4,it=8,Sn=1<<24,Y=16,le=32,Q=64,Ke=128,M=512,S=1024,R=2048,H=4096,W=8192,U=16384,ot=32768,qe=65536,vt=1<<17,Ct=1<<18,ae=1<<19,Tn=1<<20,oe=32768,Ze=1<<21,lt=1<<22,J=1<<23,Fe=Symbol("$state"),zt=Symbol("legacy props"),fe=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"},kn=3,Ge=8;function Cn(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function zn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function An(){throw new Error("https://svelte.dev/e/hydration_failed")}function Rn(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function Nn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function On(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Pn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Dn(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}function at(e){console.warn("https://svelte.dev/e/hydration_mismatch")}function Fn(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let w=!1;function Ce(e){w=e}let g;function Z(e){if(e===null)throw at(),ge;return g=e}function ut(){return Z(ee(g))}function pt(e){if(w){if(ee(g)!==null)throw at(),ge;g=e}}function Ln(e=1){if(w){for(var t=e,n=g;t--;)n=ee(n);g=n}}function Mn(e=!0){for(var t=0,n=g;;){if(n.nodeType===Ge){var r=n.data;if(r===St){if(t===0)return n;t-=1}else(r===Et||r===xt)&&(t+=1)}var i=ee(n);e&&n.remove(),n=i}}function At(e){return e===this.v}function jn(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Rt(e){return!jn(e,this.v)}let E=null;function de(e){E=e}function Nt(e,t=!1,n){E={p:E,i:!1,c:null,e:null,s:e,x:null,l:we&&!t?{s:null,u:null,$:[]}:null}}function Ot(e){var t=E,n=t.e;if(n!==null){t.e=null;for(var r of n)nr(r)}return e!==void 0&&(t.x=e),t.i=!0,E=t.p,e??{}}function Ee(){return!we||E!==null&&E.l===null}let ne=[];function Pt(){var e=ne;ne=[],xn(e)}function ft(e){if(ne.length===0&&!me){var t=ne;queueMicrotask(()=>{t===ne&&Pt()})}ne.push(e)}function In(){for(;ne.length>0;)Pt()}function Dt(e){var t=p;if(t===null)return v.f|=J,e;if((t.f&ot)===0){if((t.f&Ke)===0)throw e;t.b.error(e)}else he(e,t)}function he(e,t){for(;t!==null;){if((t.f&Ke)!==0)try{t.b.error(e);return}catch(n){e=n}t=t.parent}throw e}const ze=new Set;let m=null,P=null,O=[],We=null,Qe=!1,me=!1;class F{committed=!1;current=new Map;previous=new Map;#t=new Set;#e=new Set;#a=0;#i=0;#u=null;#o=[];#s=[];skipped_effects=new Set;is_fork=!1;is_deferred(){return this.is_fork||this.#i>0}process(t){O=[],this.apply();var n={parent:null,effect:null,effects:[],render_effects:[],block_effects:[]};for(const r of t)this.#n(r,n);this.is_fork||this.#f(),this.is_deferred()?(this.#r(n.effects),this.#r(n.render_effects),this.#r(n.block_effects)):(m=null,mt(n.render_effects),mt(n.effects),this.#u?.resolve()),P=null}#n(t,n){t.f^=S;for(var r=t.first;r!==null;){var i=r.f,s=(i&(le|Q))!==0,o=s&&(i&S)!==0,l=o||(i&W)!==0||this.skipped_effects.has(r);if((r.f&Ke)!==0&&r.b?.is_pending()&&(n={parent:n,effect:r,effects:[],render_effects:[],block_effects:[]}),!l&&r.fn!==null){s?r.f^=S:(i&kt)!==0?n.effects.push(r):Se(r)&&((r.f&Y)!==0&&n.block_effects.push(r),be(r));var a=r.first;if(a!==null){r=a;continue}}var u=r.parent;for(r=r.next;r===null&&u!==null;)u===n.effect&&(this.#r(n.effects),this.#r(n.render_effects),this.#r(n.block_effects),n=n.parent),r=u.next,u=u.parent}}#r(t){for(const n of t)((n.f&R)!==0?this.#o:this.#s).push(n),this.#l(n.deps),T(n,S)}#l(t){if(t!==null)for(const n of t)(n.f&$)===0||(n.f&oe)===0||(n.f^=oe,this.#l(n.deps))}capture(t,n){this.previous.has(t)||this.previous.set(t,n),(t.f&J)===0&&(this.current.set(t,t.v),P?.set(t,t.v))}activate(){m=this,this.apply()}deactivate(){m===this&&(m=null,P=null)}flush(){if(this.activate(),O.length>0){if(Lt(),m!==null&&m!==this)return}else this.#a===0&&this.process([]);this.deactivate()}discard(){for(const t of this.#e)t(this);this.#e.clear()}#f(){if(this.#i===0){for(const t of this.#t)t();this.#t.clear()}this.#a===0&&this.#c()}#c(){if(ze.size>1){this.previous.clear();var t=P,n=!0,r={parent:null,effect:null,effects:[],render_effects:[],block_effects:[]};for(const s of ze){if(s===this){n=!1;continue}const o=[];for(const[a,u]of this.current){if(s.current.has(a))if(n&&u!==s.current.get(a))s.current.set(a,u);else continue;o.push(a)}if(o.length===0)continue;const l=[...s.current.keys()].filter(a=>!this.current.has(a));if(l.length>0){var i=O;O=[];const a=new Set,u=new Map;for(const d of o)Mt(d,l,a,u);if(O.length>0){m=s,s.apply();for(const d of O)s.#n(d,r);s.deactivate()}O=i}}m=null,P=t}this.committed=!0,ze.delete(this)}increment(t){this.#a+=1,t&&(this.#i+=1)}decrement(t){this.#a-=1,t&&(this.#i-=1),this.revive()}revive(){for(const t of this.#o)T(t,R),ve(t);for(const t of this.#s)T(t,H),ve(t);this.#o=[],this.#s=[],this.flush()}oncommit(t){this.#t.add(t)}ondiscard(t){this.#e.add(t)}settled(){return(this.#u??=Tt()).promise}static ensure(){if(m===null){const t=m=new F;ze.add(m),me||F.enqueue(()=>{m===t&&t.flush()})}return m}static enqueue(t){ft(t)}apply(){}}function Ft(e){var t=me;me=!0;try{for(var n;;){if(In(),O.length===0&&(m?.flush(),O.length===0))return We=null,n;Lt()}}finally{me=t}}function Lt(){var e=se;Qe=!0;var t=null;try{var n=0;for(Ye(!0);O.length>0;){var r=F.ensure();if(n++>1e3){var i,s;qn()}r.process(O),X.clear()}}finally{Qe=!1,Ye(e),We=null}}function qn(){try{zn()}catch(e){he(e,We)}}let q=null;function mt(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var r=e[n++];if((r.f&(U|W))===0&&Se(r)&&(q=new Set,be(r),r.deps===null&&r.first===null&&r.nodes===null&&(r.teardown===null&&r.ac===null?Qt(r):r.fn=null),q?.size>0)){X.clear();for(const i of q){if((i.f&(U|W))!==0)continue;const s=[i];let o=i.parent;for(;o!==null;)q.has(o)&&(q.delete(o),s.push(o)),o=o.parent;for(let l=s.length-1;l>=0;l--){const a=s[l];(a.f&(U|W))===0&&be(a)}}q.clear()}}q=null}}function Mt(e,t,n,r){if(!n.has(e)&&(n.add(e),e.reactions!==null))for(const i of e.reactions){const s=i.f;(s&$)!==0?Mt(i,t,n,r):(s&(lt|Y))!==0&&(s&R)===0&&jt(i,t,r)&&(T(i,R),ve(i))}}function jt(e,t,n){const r=n.get(e);if(r!==void 0)return r;if(e.deps!==null)for(const i of e.deps){if(t.includes(i))return!0;if((i.f&$)!==0&&jt(i,t,n))return n.set(i,!0),!0}return n.set(e,!1),!1}function ve(e){for(var t=We=e;t.parent!==null;){t=t.parent;var n=t.f;if(Qe&&t===p&&(n&Y)!==0&&(n&Ct)===0)return;if((n&(Q|le))!==0){if((n&S)===0)return;t.f^=S}}O.push(t)}function Vn(e){let t=0,n=xe(0),r;return()=>{ye()&&(D(n),Jt(()=>(t===0&&(r=vr(()=>e(()=>_e(n)))),t+=1,()=>{ft(()=>{t-=1,t===0&&(r?.(),r=void 0,_e(n))})})))}}var Un=qe|ae|Ke;function Bn(e,t,n){new Yn(e,t,n)}class Yn{parent;#t=!1;#e;#a=w?g:null;#i;#u;#o;#s=null;#n=null;#r=null;#l=null;#f=null;#c=0;#d=0;#v=!1;#h=null;#y=Vn(()=>(this.#h=xe(this.#c),()=>{this.#h=null}));constructor(t,n,r){this.#e=t,this.#i=n,this.#u=r,this.parent=p.b,this.#t=!!this.#i.pending,this.#o=lr(()=>{if(p.b=this,w){const s=this.#a;ut(),s.nodeType===Ge&&s.data===xt?this.#b():this.#$()}else{var i=this.#_();try{this.#s=te(()=>r(i))}catch(s){this.error(s)}this.#d>0?this.#m():this.#t=!1}return()=>{this.#f?.remove()}},Un),w&&(this.#e=g)}#$(){try{this.#s=te(()=>this.#u(this.#e))}catch(t){this.error(t)}this.#t=!1}#b(){const t=this.#i.pending;t&&(this.#n=te(()=>t(this.#e)),F.enqueue(()=>{var n=this.#_();this.#s=this.#p(()=>(F.ensure(),te(()=>this.#u(n)))),this.#d>0?this.#m():(Le(this.#n,()=>{this.#n=null}),this.#t=!1)}))}#_(){var t=this.#e;return this.#t&&(this.#f=Je(),this.#e.before(this.#f),t=this.#f),t}is_pending(){return this.#t||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#i.pending}#p(t){var n=p,r=v,i=E;I(this.#o),k(this.#o),de(this.#o.ctx);try{return t()}catch(s){return Dt(s),null}finally{I(n),k(r),de(i)}}#m(){const t=this.#i.pending;this.#s!==null&&(this.#l=document.createDocumentFragment(),this.#l.append(this.#f),fr(this.#s,this.#l)),this.#n===null&&(this.#n=te(()=>t(this.#e)))}#g(t){if(!this.has_pending_snippet()){this.parent&&this.parent.#g(t);return}this.#d+=t,this.#d===0&&(this.#t=!1,this.#n&&Le(this.#n,()=>{this.#n=null}),this.#l&&(this.#e.before(this.#l),this.#l=null))}update_pending_count(t){this.#g(t),this.#c+=t,this.#h&&Ue(this.#h,this.#c)}get_effect_pending(){return this.#y(),D(this.#h)}error(t){var n=this.#i.onerror;let r=this.#i.failed;if(this.#v||!n&&!r)throw t;this.#s&&(L(this.#s),this.#s=null),this.#n&&(L(this.#n),this.#n=null),this.#r&&(L(this.#r),this.#r=null),w&&(Z(this.#a),Ln(),Z(Mn()));var i=!1,s=!1;const o=()=>{if(i){Fn();return}i=!0,s&&Dn(),F.ensure(),this.#c=0,this.#r!==null&&Le(this.#r,()=>{this.#r=null}),this.#t=this.has_pending_snippet(),this.#s=this.#p(()=>(this.#v=!1,te(()=>this.#u(this.#e)))),this.#d>0?this.#m():this.#t=!1};var l=v;try{k(null),s=!0,n?.(t,o),s=!1}catch(a){he(a,this.#o&&this.#o.parent)}finally{k(l)}r&&ft(()=>{this.#r=this.#p(()=>{F.ensure(),this.#v=!0;try{return te(()=>{r(this.#e,()=>t,()=>o)})}catch(a){return he(a,this.#o.parent),null}finally{this.#v=!1}})})}}function Hn(e,t,n,r){const i=Ee()?It:qt;if(n.length===0&&e.length===0){r(t.map(i));return}var s=m,o=p,l=Kn();function a(){Promise.all(n.map(u=>Gn(u))).then(u=>{l();try{r([...t.map(i),...u])}catch(d){(o.f&U)===0&&he(d,o)}s?.deactivate(),Ve()}).catch(u=>{he(u,o)})}e.length>0?Promise.all(e).then(()=>{l();try{return a()}finally{s?.deactivate(),Ve()}}):a()}function Kn(){var e=p,t=v,n=E,r=m;return function(s=!0){I(e),k(t),de(n),s&&r?.activate()}}function Ve(){I(null),k(null),de(null)}function It(e){var t=$|R,n=v!==null&&(v.f&$)!==0?v:null;return p!==null&&(p.f|=ae),{ctx:E,deps:null,effects:null,equals:At,f:t,fn:e,reactions:null,rv:0,v:b,wv:0,parent:n??p,ac:null}}function Gn(e,t){let n=p;n===null&&Cn();var r=n.b,i=void 0,s=xe(b),o=!v,l=new Map;return ir(()=>{var a=Tt();i=a.promise;try{Promise.resolve(e()).then(a.resolve,a.reject).then(()=>{u===m&&u.committed&&u.deactivate(),Ve()})}catch(f){a.reject(f),Ve()}var u=m;if(o){var d=!r.is_pending();r.update_pending_count(1),u.increment(d),l.get(u)?.reject(fe),l.delete(u),l.set(u,a)}const h=(f,c=void 0)=>{if(u.activate(),c)c!==fe&&(s.f|=J,Ue(s,c));else{(s.f&J)!==0&&(s.f^=J),Ue(s,f);for(const[_,C]of l){if(l.delete(_),_===u)break;C.reject(fe)}}o&&(r.update_pending_count(-1),u.decrement(d))};a.promise.then(h,f=>h(null,f||"unknown"))}),tr(()=>{for(const a of l.values())a.reject(fe)}),new Promise(a=>{function u(d){function h(){d===i?a(s):u(i)}d.then(h,h)}u(i)})}function qt(e){const t=It(e);return t.equals=Rt,t}function Vt(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)L(t[n])}}function Wn(e){for(var t=e.parent;t!==null;){if((t.f&$)===0)return(t.f&U)===0?t:null;t=t.parent}return null}function ct(e){var t,n=p;I(Wn(e));try{e.f&=~oe,Vt(e),t=sn(e)}finally{I(n)}return t}function Ut(e){var t=ct(e);if(e.equals(t)||(m?.is_fork||(e.v=t),e.wv=nn()),!pe)if(P!==null)(ye()||m?.is_fork)&&P.set(e,t);else{var n=(e.f&M)===0?H:S;T(e,n)}}let et=new Set;const X=new Map;let Bt=!1;function xe(e,t){var n={f:0,v:e,reactions:null,equals:At,rv:0,wv:0};return n}function G(e,t){const n=xe(e);return cr(n),n}function Jn(e,t=!1,n=!0){const r=xe(e);return t||(r.equals=Rt),we&&n&&E!==null&&E.l!==null&&(E.l.s??=[]).push(r),r}function V(e,t,n=!1){v!==null&&(!j||(v.f&vt)!==0)&&Ee()&&(v.f&($|Y|lt|vt))!==0&&!B?.includes(e)&&Pn();let r=n?ce(t):t;return Ue(e,r)}function Ue(e,t){if(!e.equals(t)){var n=e.v;pe?X.set(e,t):X.set(e,n),e.v=t;var r=F.ensure();r.capture(e,n),(e.f&$)!==0&&((e.f&R)!==0&&ct(e),T(e,(e.f&M)!==0?S:H)),e.wv=nn(),Yt(e,R),Ee()&&p!==null&&(p.f&S)!==0&&(p.f&(le|Q))===0&&(N===null?dr([e]):N.push(e)),!r.is_fork&&et.size>0&&!Bt&&Xn()}return t}function Xn(){Bt=!1;var e=se;Ye(!0);const t=Array.from(et);try{for(const n of t)(n.f&S)!==0&&T(n,H),Se(n)&&be(n)}finally{Ye(e)}et.clear()}function _e(e){V(e,e.v+1)}function Yt(e,t){var n=e.reactions;if(n!==null)for(var r=Ee(),i=n.length,s=0;s<i;s++){var o=n[s],l=o.f;if(!(!r&&o===p)){var a=(l&R)===0;if(a&&T(o,t),(l&$)!==0){var u=o;P?.delete(u),(l&oe)===0&&(l&M&&(o.f|=oe),Yt(u,H))}else a&&((l&Y)!==0&&q!==null&&q.add(o),ve(o))}}}function ce(e){if(typeof e!="object"||e===null||Fe in e)return e;const t=En(e);if(t!==bn&&t!==wn)return e;var n=new Map,r=gn(e),i=G(0),s=ie,o=l=>{if(ie===s)return l();var a=v,u=ie;k(null),$t(s);var d=l();return k(a),$t(u),d};return r&&n.set("length",G(e.length)),new Proxy(e,{defineProperty(l,a,u){(!("value"in u)||u.configurable===!1||u.enumerable===!1||u.writable===!1)&&Nn();var d=n.get(a);return d===void 0?d=o(()=>{var h=G(u.value);return n.set(a,h),h}):V(d,u.value,!0),!0},deleteProperty(l,a){var u=n.get(a);if(u===void 0){if(a in l){const d=o(()=>G(b));n.set(a,d),_e(i)}}else V(u,b),_e(i);return!0},get(l,a,u){if(a===Fe)return e;var d=n.get(a),h=a in l;if(d===void 0&&(!h||re(l,a)?.writable)&&(d=o(()=>{var c=ce(h?l[a]:b),_=G(c);return _}),n.set(a,d)),d!==void 0){var f=D(d);return f===b?void 0:f}return Reflect.get(l,a,u)},getOwnPropertyDescriptor(l,a){var u=Reflect.getOwnPropertyDescriptor(l,a);if(u&&"value"in u){var d=n.get(a);d&&(u.value=D(d))}else if(u===void 0){var h=n.get(a),f=h?.v;if(h!==void 0&&f!==b)return{enumerable:!0,configurable:!0,value:f,writable:!0}}return u},has(l,a){if(a===Fe)return!0;var u=n.get(a),d=u!==void 0&&u.v!==b||Reflect.has(l,a);if(u!==void 0||p!==null&&(!d||re(l,a)?.writable)){u===void 0&&(u=o(()=>{var f=d?ce(l[a]):b,c=G(f);return c}),n.set(a,u));var h=D(u);if(h===b)return!1}return d},set(l,a,u,d){var h=n.get(a),f=a in l;if(r&&a==="length")for(var c=u;c<h.v;c+=1){var _=n.get(c+"");_!==void 0?V(_,b):c in l&&(_=o(()=>G(b)),n.set(c+"",_))}if(h===void 0)(!f||re(l,a)?.writable)&&(h=o(()=>G(void 0)),V(h,ce(u)),n.set(a,h));else{f=h.v!==b;var C=o(()=>ce(u));V(h,C)}var z=Reflect.getOwnPropertyDescriptor(l,a);if(z?.set&&z.set.call(d,u),!f){if(r&&typeof a=="string"){var Te=n.get("length"),y=Number(a);Number.isInteger(y)&&y>=Te.v&&V(Te,y+1)}_e(i)}return!0},ownKeys(l){D(i);var a=Reflect.ownKeys(l).filter(h=>{var f=n.get(h);return f===void 0||f.v!==b});for(var[u,d]of n)d.v!==b&&!(u in l)&&a.push(u);return a},setPrototypeOf(){On()}})}var _t,Ht,Kt,Gt;function tt(){if(_t===void 0){_t=window,Ht=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;Kt=re(t,"firstChild").get,Gt=re(t,"nextSibling").get,ht(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),ht(n)&&(n.__t=void 0)}}function Je(e=""){return document.createTextNode(e)}function Be(e){return Kt.call(e)}function ee(e){return Gt.call(e)}function gt(e,t){if(!w)return Be(e);var n=Be(g);return n===null&&(n=g.appendChild(Je())),Z(n),n}function Zn(e,t=1,n=!1){let r=w?g:e;for(var i;t--;)i=r,r=ee(r);if(!w)return r;if(n&&r?.nodeType!==kn){var s=Je();return r===null?i?.after(s):r.before(s),Z(s),s}return Z(r),r}function Qn(e){e.textContent=""}function Wt(e){var t=v,n=p;k(null),I(null);try{return e()}finally{k(t),I(n)}}function er(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function K(e,t,n){var r=p;r!==null&&(r.f&W)!==0&&(e|=W);var i={ctx:E,deps:null,nodes:null,f:e|R|M,first:null,fn:t,last:null,next:null,parent:r,b:r&&r.b,prev:null,teardown:null,wv:0,ac:null};if(n)try{be(i),i.f|=ot}catch(l){throw L(i),l}else t!==null&&ve(i);var s=i;if(n&&s.deps===null&&s.teardown===null&&s.nodes===null&&s.first===s.last&&(s.f&ae)===0&&(s=s.first,(e&Y)!==0&&(e&qe)!==0&&s!==null&&(s.f|=qe)),s!==null&&(s.parent=r,r!==null&&er(s,r),v!==null&&(v.f&$)!==0&&(e&Q)===0)){var o=v;(o.effects??=[]).push(s)}return i}function ye(){return v!==null&&!j}function tr(e){const t=K(it,null,!1);return T(t,S),t.teardown=e,t}function nr(e){return K(kt|Tn,e,!1)}function rr(e){F.ensure();const t=K(Q|ae,e,!0);return()=>{L(t)}}function sr(e){F.ensure();const t=K(Q|ae,e,!0);return(n={})=>new Promise(r=>{n.outro?Le(t,()=>{L(t),r(void 0)}):(L(t),r(void 0))})}function ir(e){return K(lt|ae,e,!0)}function Jt(e,t=0){return K(it|t,e,!0)}function or(e,t=[],n=[],r=[]){Hn(r,t,n,i=>{K(it,()=>e(...i.map(D)),!0)})}function lr(e,t=0){var n=K(Y|t,e,!0);return n}function te(e){return K(le|ae,e,!0)}function Xt(e){var t=e.teardown;if(t!==null){const n=pe,r=v;yt(!0),k(null);try{t.call(null)}finally{yt(n),k(r)}}}function Zt(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){const i=n.ac;i!==null&&Wt(()=>{i.abort(fe)});var r=n.next;(n.f&Q)!==0?n.parent=null:L(n,t),n=r}}function ar(e){for(var t=e.first;t!==null;){var n=t.next;(t.f&le)===0&&L(t),t=n}}function L(e,t=!0){var n=!1;(t||(e.f&Ct)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(ur(e.nodes.start,e.nodes.end),n=!0),Zt(e,t&&!n),He(e,0),T(e,U);var r=e.nodes&&e.nodes.t;if(r!==null)for(const s of r)s.stop();Xt(e);var i=e.parent;i!==null&&i.first!==null&&Qt(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=null}function ur(e,t){for(;e!==null;){var n=e===t?null:ee(e);e.remove(),e=n}}function Qt(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function Le(e,t,n=!0){var r=[];en(e,r,!0);var i=()=>{n&&L(e),t&&t()},s=r.length;if(s>0){var o=()=>--s||i();for(var l of r)l.out(o)}else i()}function en(e,t,n){if((e.f&W)===0){e.f^=W;var r=e.nodes&&e.nodes.t;if(r!==null)for(const l of r)(l.is_global||n)&&t.push(l);for(var i=e.first;i!==null;){var s=i.next,o=(i.f&qe)!==0||(i.f&le)!==0&&(e.f&Y)!==0;en(i,t,o?n:!1),i=s}}}function fr(e,t){if(e.nodes)for(var n=e.nodes.start,r=e.nodes.end;n!==null;){var i=n===r?null:ee(n);t.append(n),n=i}}let se=!1;function Ye(e){se=e}let pe=!1;function yt(e){pe=e}let v=null,j=!1;function k(e){v=e}let p=null;function I(e){p=e}let B=null;function cr(e){v!==null&&(B===null?B=[e]:B.push(e))}let x=null,A=0,N=null;function dr(e){N=e}let tn=1,$e=0,ie=$e;function $t(e){ie=e}function nn(){return++tn}function Se(e){var t=e.f;if((t&R)!==0)return!0;if(t&$&&(e.f&=~oe),(t&H)!==0){var n=e.deps;if(n!==null)for(var r=n.length,i=0;i<r;i++){var s=n[i];if(Se(s)&&Ut(s),s.wv>e.wv)return!0}(t&M)!==0&&P===null&&T(e,S)}return!1}function rn(e,t,n=!0){var r=e.reactions;if(r!==null&&!B?.includes(e))for(var i=0;i<r.length;i++){var s=r[i];(s.f&$)!==0?rn(s,t,!1):t===s&&(n?T(s,R):(s.f&S)!==0&&T(s,H),ve(s))}}function sn(e){var t=x,n=A,r=N,i=v,s=B,o=E,l=j,a=ie,u=e.f;x=null,A=0,N=null,v=(u&(le|Q))===0?e:null,B=null,de(e.ctx),j=!1,ie=++$e,e.ac!==null&&(Wt(()=>{e.ac.abort(fe)}),e.ac=null);try{e.f|=Ze;var d=e.fn,h=d(),f=e.deps;if(x!==null){var c;if(He(e,A),f!==null&&A>0)for(f.length=A+x.length,c=0;c<x.length;c++)f[A+c]=x[c];else e.deps=f=x;if(ye()&&(e.f&M)!==0)for(c=A;c<f.length;c++)(f[c].reactions??=[]).push(e)}else f!==null&&A<f.length&&(He(e,A),f.length=A);if(Ee()&&N!==null&&!j&&f!==null&&(e.f&($|H|R))===0)for(c=0;c<N.length;c++)rn(N[c],e);return i!==null&&i!==e&&($e++,N!==null&&(r===null?r=N:r.push(...N))),(e.f&J)!==0&&(e.f^=J),h}catch(_){return Dt(_)}finally{e.f^=Ze,x=t,A=n,N=r,v=i,B=s,de(o),j=l,ie=a}}function hr(e,t){let n=t.reactions;if(n!==null){var r=yn.call(n,e);if(r!==-1){var i=n.length-1;i===0?n=t.reactions=null:(n[r]=n[i],n.pop())}}n===null&&(t.f&$)!==0&&(x===null||!x.includes(t))&&(T(t,H),(t.f&M)!==0&&(t.f^=M,t.f&=~oe),Vt(t),He(t,0))}function He(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)hr(e,n[r])}function be(e){var t=e.f;if((t&U)===0){T(e,S);var n=p,r=se;p=e,se=!0;try{(t&(Y|Sn))!==0?ar(e):Zt(e),Xt(e);var i=sn(e);e.teardown=typeof i=="function"?i:null,e.wv=tn;var s;Xe&&hn&&(e.f&R)!==0&&e.deps}finally{se=r,p=n}}}function D(e){var t=e.f,n=(t&$)!==0;if(v!==null&&!j){var r=p!==null&&(p.f&U)!==0;if(!r&&!B?.includes(e)){var i=v.deps;if((v.f&Ze)!==0)e.rv<$e&&(e.rv=$e,x===null&&i!==null&&i[A]===e?A++:x===null?x=[e]:x.includes(e)||x.push(e));else{(v.deps??=[]).push(e);var s=e.reactions;s===null?e.reactions=[v]:s.includes(v)||s.push(v)}}}if(pe){if(X.has(e))return X.get(e);if(n){var o=e,l=o.v;return((o.f&S)===0&&o.reactions!==null||ln(o))&&(l=ct(o)),X.set(o,l),l}}else n&&(!P?.has(e)||m?.is_fork&&!ye())&&(o=e,Se(o)&&Ut(o),se&&ye()&&(o.f&M)===0&&on(o));if(P?.has(e))return P.get(e);if((e.f&J)!==0)throw e.v;return e.v}function on(e){if(e.deps!==null){e.f^=M;for(const t of e.deps)(t.reactions??=[]).push(e),(t.f&$)!==0&&(t.f&M)===0&&on(t)}}function ln(e){if(e.v===b)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(X.has(t)||(t.f&$)!==0&&ln(t))return!0;return!1}function vr(e){var t=j;try{return j=!0,e()}finally{j=t}}const pr=-7169;function T(e,t){e.f=e.f&pr|t}const mr=new Set,bt=new Set;let wt=null;function Ae(e){var t=this,n=t.ownerDocument,r=e.type,i=e.composedPath?.()||[],s=i[0]||e.target;wt=e;var o=0,l=wt===e&&e.__root;if(l){var a=i.indexOf(l);if(a!==-1&&(t===document||t===window)){e.__root=t;return}var u=i.indexOf(t);if(u===-1)return;a<=u&&(o=a)}if(s=i[o]||e.target,s!==t){Ie(e,"currentTarget",{configurable:!0,get(){return s||n}});var d=v,h=p;k(null),I(null);try{for(var f,c=[];s!==null;){var _=s.assignedSlot||s.parentNode||s.host||null;try{var C=s["__"+r];C!=null&&(!s.disabled||e.target===s)&&C.call(s,e)}catch(z){f?c.push(z):f=z}if(e.cancelBubble||_===t||_===null)break;s=_}if(f){for(let z of c)queueMicrotask(()=>{throw z});throw f}}finally{e.__root=t,delete e.currentTarget,k(d),I(h)}}}function _r(e){var t=document.createElement("template");return t.innerHTML=e.replaceAll("<!>","<!---->"),t.content}function nt(e,t){var n=p;n.nodes===null&&(n.nodes={start:e,end:t,a:null,t:null})}function gr(e,t){var n=(t&_n)!==0,r,i=!e.startsWith("<!>");return()=>{if(w)return nt(g,null),g;r===void 0&&(r=_r(i?e:"<!>"+e),r=Be(r));var s=n||Ht?document.importNode(r,!0):r.cloneNode(!0);return nt(s,s),s}}function an(e,t){if(w){var n=p;((n.f&ot)===0||n.nodes.end===null)&&(n.nodes.end=g),ut();return}e!==null&&e.before(t)}const yr=["touchstart","touchmove"];function $r(e){return yr.includes(e)}function br(e,t){var n=t==null?"":typeof t=="object"?t+"":t;n!==(e.__t??=e.nodeValue)&&(e.__t=n,e.nodeValue=n+"")}function un(e,t){return fn(e,t)}function wr(e,t){tt(),t.intro=t.intro??!1;const n=t.target,r=w,i=g;try{for(var s=Be(n);s&&(s.nodeType!==Ge||s.data!==Et);)s=ee(s);if(!s)throw ge;Ce(!0),Z(s);const o=fn(e,{...t,anchor:s});return Ce(!1),o}catch(o){if(o instanceof Error&&o.message.split(`
`).some(l=>l.startsWith("https://svelte.dev/e/")))throw o;return o!==ge&&console.warn("Failed to hydrate: ",o),t.recover===!1&&An(),tt(),Qn(n),Ce(!1),un(e,t)}finally{Ce(r),Z(i)}}const ue=new Map;function fn(e,{target:t,anchor:n,props:r={},events:i,context:s,intro:o=!0}){tt();var l=new Set,a=h=>{for(var f=0;f<h.length;f++){var c=h[f];if(!l.has(c)){l.add(c);var _=$r(c);t.addEventListener(c,Ae,{passive:_});var C=ue.get(c);C===void 0?(document.addEventListener(c,Ae,{passive:_}),ue.set(c,1)):ue.set(c,C+1)}}};a($n(mr)),bt.add(a);var u=void 0,d=sr(()=>{var h=n??t.appendChild(Je());return Bn(h,{pending:()=>{}},f=>{if(s){Nt({});var c=E;c.c=s}if(i&&(r.$$events=i),w&&nt(f,null),u=e(f,r)||{},w&&(p.nodes.end=g,g===null||g.nodeType!==Ge||g.data!==St))throw at(),ge;s&&Ot()}),()=>{for(var f of l){t.removeEventListener(f,Ae);var c=ue.get(f);--c===0?(document.removeEventListener(f,Ae),ue.delete(f)):ue.set(f,c)}bt.delete(a),h!==n&&h.parentNode?.removeChild(h)}});return rt.set(u,d),u}let rt=new WeakMap;function Er(e,t){const n=rt.get(e);return n?(rt.delete(e),n(t)):Promise.resolve()}function xr(e,t,n,r,i){w&&ut();var s=t.$$slots?.[n],o=!1;s===!0&&(s=t.children,o=!0),s===void 0||s(e,o?()=>r:r)}let Re=!1;function Sr(e){var t=Re;try{return Re=!1,[e(),Re]}finally{Re=t}}function Tr(e,t,n,r){var i=!we||(n&pn)!==0,s=(n&mn)!==0,o=r,l=!0,a=()=>(l&&(l=!1,o=r),o),u;{var d=Fe in e||zt in e;u=re(e,t)?.set??(d&&t in e?y=>e[t]=y:void 0)}var h,f=!1;[h,f]=Sr(()=>e[t]),h===void 0&&r!==void 0&&(h=a(),u&&(i&&Rn(),u(h)));var c;if(i?c=()=>{var y=e[t];return y===void 0?a():(l=!0,y)}:c=()=>{var y=e[t];return y!==void 0&&(o=void 0),y===void 0?o:y},u){var _=e.$$legacy;return(function(y,ke){return arguments.length>0?((!i||!ke||_||f)&&u(ke?c():y),y):c()})}var C=!1,z=qt(()=>(C=!1,c()));D(z);var Te=p;return(function(y,ke){if(arguments.length>0){const dt=ke?D(z):i&&s?ce(y):y;return V(z,dt),C=!0,o!==void 0&&(o=dt),y}return pe&&C||(Te.f&U)!==0?z.v:D(z)})}function kr(e){return new Cr(e)}class Cr{#t;#e;constructor(t){var n=new Map,r=(s,o)=>{var l=Jn(o,!1,!1);return n.set(s,l),l};const i=new Proxy({...t.props||{},$$events:{}},{get(s,o){return D(n.get(o)??r(o,Reflect.get(s,o)))},has(s,o){return o===zt?!0:(D(n.get(o)??r(o,Reflect.get(s,o))),Reflect.has(s,o))},set(s,o,l){return V(n.get(o)??r(o,l),l),Reflect.set(s,o,l)}});this.#e=(t.hydrate?wr:un)(t.component,{target:t.target,anchor:t.anchor,props:i,context:t.context,intro:t.intro??!1,recover:t.recover}),(!t?.props?.$$host||t.sync===!1)&&Ft(),this.#t=i.$$events;for(const s of Object.keys(this.#e))s==="$set"||s==="$destroy"||s==="$on"||Ie(this,s,{get(){return this.#e[s]},set(o){this.#e[s]=o},enumerable:!0});this.#e.$set=s=>{Object.assign(i,s)},this.#e.$destroy=()=>{Er(this.#e)}}$set(t){this.#e.$set(t)}$on(t,n){this.#t[t]=this.#t[t]||[];const r=(...i)=>n.call(this,...i);return this.#t[t].push(r),()=>{this.#t[t]=this.#t[t].filter(i=>i!==r)}}$destroy(){this.#e.$destroy()}}let cn;typeof HTMLElement=="function"&&(cn=class extends HTMLElement{$$ctor;$$s;$$c;$$cn=!1;$$d={};$$r=!1;$$p_d={};$$l={};$$l_u=new Map;$$me;constructor(e,t,n){super(),this.$$ctor=e,this.$$s=t,n&&this.attachShadow({mode:"open"})}addEventListener(e,t,n){if(this.$$l[e]=this.$$l[e]||[],this.$$l[e].push(t),this.$$c){const r=this.$$c.$on(e,t);this.$$l_u.set(t,r)}super.addEventListener(e,t,n)}removeEventListener(e,t,n){if(super.removeEventListener(e,t,n),this.$$c){const r=this.$$l_u.get(t);r&&(r(),this.$$l_u.delete(t))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let e=function(r){return i=>{const s=document.createElement("slot");r!=="default"&&(s.name=r),an(i,s)}};if(await Promise.resolve(),!this.$$cn||this.$$c)return;const t={},n=zr(this);for(const r of this.$$s)r in n&&(r==="default"&&!this.$$d.children?(this.$$d.children=e(r),t.default=!0):t[r]=e(r));for(const r of this.attributes){const i=this.$$g_p(r.name);i in this.$$d||(this.$$d[i]=Me(i,r.value,this.$$p_d,"toProp"))}for(const r in this.$$p_d)!(r in this.$$d)&&this[r]!==void 0&&(this.$$d[r]=this[r],delete this[r]);this.$$c=kr({component:this.$$ctor,target:this.shadowRoot||this,props:{...this.$$d,$$slots:t,$$host:this}}),this.$$me=rr(()=>{Jt(()=>{this.$$r=!0;for(const r of je(this.$$c)){if(!this.$$p_d[r]?.reflect)continue;this.$$d[r]=this.$$c[r];const i=Me(r,this.$$d[r],this.$$p_d,"toAttribute");i==null?this.removeAttribute(this.$$p_d[r].attribute||r):this.setAttribute(this.$$p_d[r].attribute||r,i)}this.$$r=!1})});for(const r in this.$$l)for(const i of this.$$l[r]){const s=this.$$c.$on(r,i);this.$$l_u.set(i,s)}this.$$l={}}}attributeChangedCallback(e,t,n){this.$$r||(e=this.$$g_p(e),this.$$d[e]=Me(e,n,this.$$p_d,"toProp"),this.$$c?.$set({[e]:this.$$d[e]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$me(),this.$$c=void 0)})}$$g_p(e){return je(this.$$p_d).find(t=>this.$$p_d[t].attribute===e||!this.$$p_d[t].attribute&&t.toLowerCase()===e)||e}});function Me(e,t,n,r){const i=n[e]?.type;if(t=i==="Boolean"&&typeof t!="boolean"?t!=null:t,!r||!n[e])return t;if(r==="toAttribute")switch(i){case"Object":case"Array":return t==null?null:JSON.stringify(t);case"Boolean":return t?"":null;case"Number":return t??null;default:return t}else switch(i){case"Object":case"Array":return t&&JSON.parse(t);case"Boolean":return t;case"Number":return t!=null?+t:t;default:return t}}function zr(e){const t={};return e.childNodes.forEach(n=>{t[n.slot||"default"]=!0}),t}function Ar(e,t,n,r,i,s){let o=class extends cn{constructor(){super(e,n,i),this.$$p_d=t}static get observedAttributes(){return je(t).map(l=>(t[l].attribute||l).toLowerCase())}};return je(t).forEach(l=>{Ie(o.prototype,l,{get(){return this.$$c&&l in this.$$c?this.$$c[l]:this.$$d[l]},set(a){a=Me(l,a,t),this.$$d[l]=a;var u=this.$$c;if(u){var d=re(u,l)?.get;d?u[l]=a:u.$set({[l]:a})}}})}),r.forEach(l=>{Ie(o.prototype,l,{get(){return this.$$c?.[l]}})}),e.element=o,o}var Rr=gr("<div><p> </p> <!></div>");function Nr(e,t){Nt(t,!1);let n=Tr(t,"nome",12,"mundo");var r={get nome(){return n()},set nome(a){n(a),Ft()}},i=Rr(),s=gt(i),o=gt(s);pt(s);var l=Zn(s,2);return xr(l,t,"default",{}),pt(i),or(()=>br(o,`Aqui é ${n()??""}`)),an(e,i),Ot(r)}Ar(Nr,{nome:{}},["default"],[],!0);const Fr={title:"Components/MeuComponenteSvelte",component:"mozg-meu-componente-svelte",tags:["autodocs"],argTypes:{titulo:{control:"text",description:"Título do componente",defaultValue:"Olá, Svelte!"},nome:{control:"text",description:"Nome a ser exibido no componente",defaultValue:"mundo"},contador:{control:{type:"number",min:0},description:"Valor inicial do contador",table:{type:{summary:"number"},defaultValue:{summary:0}}}},render:e=>st`
      <mozg-meu-componente-svelte titulo="${e.titulo}" nome="${e.nome}">
        <div
          slot=""
          style="margin-top: 1rem; padding: 1rem; background: #f0f8ff; border-radius: 4px; border-left: 4px solid #4a90e2;"
        >
          <p style="margin: 0; color: #2c3e50; font-size: 0.9em;">
            Conteúdo adicional via slot
          </p>
        </div>
      </mozg-meu-componente-svelte>
    `},Ne={args:{titulo:"Componente Svelte",nome:"Visitante"},parameters:{docs:{description:{story:"Componente Svelte padrão com título e nome personalizáveis."}}}},Oe={args:{titulo:"Este é um componente Svelte com um título muito longo para demonstrar o comportamento",nome:"Usuário com nome longo também"},parameters:{docs:{description:{story:"Demonstração do componente Svelte com textos longos para testar o comportamento de layout."}}}},Pe={args:{titulo:"Conteúdo Personalizado",nome:"Usuário Svelte"},render:e=>st`
    <mozg-meu-componente-svelte titulo="${e.titulo}" nome="${e.nome}">
      <div
        slot=""
        style="margin-top: 1rem; padding: 1rem; background: #f8f9fa; border-radius: 8px; border: 1px dashed #dee2e6;"
      >
        <h3 style="margin-top: 0; color: #495057;">Conteúdo Personalizado</h3>
        <p style="color: #6c757d;">
          Este é um exemplo de conteúdo personalizado usando slots no componente
          Svelte.
        </p>
        <button
          style="background: #4CAF50; color: white; padding: 8px 16px; border: none; border-radius: 4px; cursor: pointer; font-size: 0.9em;"
        >
          Ação Personalizada
        </button>
      </div>
    </mozg-meu-componente-svelte>
  `,parameters:{docs:{description:{story:"Exemplo de como personalizar o conteúdo do componente Svelte usando slots."}}}},De={render:()=>st`
    <div style="max-width: 1000px; margin: 0 auto; padding: 20px;">
      <h1 style="color: #2c3e50; text-align: center; margin-bottom: 2rem;">
        Dashboard com Svelte
      </h1>

      <div
        style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-bottom: 2rem;"
      >
        <mozg-meu-componente-svelte titulo="Tarefas" nome="Diárias">
          <div slot="" style="text-align: center; padding: 1rem;">
            <div
              style="font-size: 2.5em; font-weight: bold; color: #3498db; margin: 0.5em 0;"
            >
              12
            </div>
            <div style="color: #7f8c8d; font-size: 0.9em;">
              tarefas para hoje
            </div>
          </div>
        </mozg-meu-componente-svelte>

        <mozg-meu-componente-svelte titulo="Mensagens" nome="Não Lidas">
          <div slot="" style="text-align: center; padding: 1rem;">
            <div
              style="font-size: 2.5em; font-weight: bold; color: #2ecc71; margin: 0.5em 0;"
            >
              5
            </div>
            <div style="color: #7f8c8d; font-size: 0.9em;">
              mensagens não lidas
            </div>
          </div>
        </mozg-meu-componente-svelte>

        <mozg-meu-componente-svelte titulo="Notificações" nome="Pendentes">
          <div slot="" style="text-align: center; padding: 1rem;">
            <div
              style="font-size: 2.5em; font-weight: bold; color: #e74c3c; margin: 0.5em 0;"
            >
              3
            </div>
            <div style="color: #7f8c8d; font-size: 0.9em;">
              notificações não lidas
            </div>
          </div>
        </mozg-meu-componente-svelte>
      </div>

      <div
        style="margin-top: 2rem; background: #f8f9fa; padding: 1.5rem; border-radius: 8px;"
      >
        <h2 style="margin-top: 0; color: #2c3e50;">Sobre este componente</h2>
        <p>
          Este é um exemplo de como o componente Svelte pode ser usado em um
          layout de dashboard responsivo. O componente é totalmente
          personalizável e suporta slots para conteúdo personalizado.
        </p>

        <div
          style="margin-top: 1.5rem; padding: 1rem; background: white; border-radius: 6px; border-left: 4px solid #3498db;"
        >
          <h3 style="margin-top: 0; color: #3498db;">Dica de Uso</h3>
          <p>
            Experimente clicar nos botões de incremento e resetar o contador em
            cada um dos cards acima para ver a interatividade em ação.
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
}`,...Oe.parameters?.docs?.source}}};Pe.parameters={...Pe.parameters,docs:{...Pe.parameters?.docs,source:{originalSource:`{
  args: {
    titulo: 'Conteúdo Personalizado',
    nome: 'Usuário Svelte'
  },
  render: args => html\`
    <mozg-meu-componente-svelte titulo="\${args.titulo}" nome="\${args.nome}">
      <div
        slot=""
        style="margin-top: 1rem; padding: 1rem; background: #f8f9fa; border-radius: 8px; border: 1px dashed #dee2e6;"
      >
        <h3 style="margin-top: 0; color: #495057;">Conteúdo Personalizado</h3>
        <p style="color: #6c757d;">
          Este é um exemplo de conteúdo personalizado usando slots no componente
          Svelte.
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
}`,...Pe.parameters?.docs?.source}}};De.parameters={...De.parameters,docs:{...De.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <div style="max-width: 1000px; margin: 0 auto; padding: 20px;">
      <h1 style="color: #2c3e50; text-align: center; margin-bottom: 2rem;">
        Dashboard com Svelte
      </h1>

      <div
        style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-bottom: 2rem;"
      >
        <mozg-meu-componente-svelte titulo="Tarefas" nome="Diárias">
          <div slot="" style="text-align: center; padding: 1rem;">
            <div
              style="font-size: 2.5em; font-weight: bold; color: #3498db; margin: 0.5em 0;"
            >
              12
            </div>
            <div style="color: #7f8c8d; font-size: 0.9em;">
              tarefas para hoje
            </div>
          </div>
        </mozg-meu-componente-svelte>

        <mozg-meu-componente-svelte titulo="Mensagens" nome="Não Lidas">
          <div slot="" style="text-align: center; padding: 1rem;">
            <div
              style="font-size: 2.5em; font-weight: bold; color: #2ecc71; margin: 0.5em 0;"
            >
              5
            </div>
            <div style="color: #7f8c8d; font-size: 0.9em;">
              mensagens não lidas
            </div>
          </div>
        </mozg-meu-componente-svelte>

        <mozg-meu-componente-svelte titulo="Notificações" nome="Pendentes">
          <div slot="" style="text-align: center; padding: 1rem;">
            <div
              style="font-size: 2.5em; font-weight: bold; color: #e74c3c; margin: 0.5em 0;"
            >
              3
            </div>
            <div style="color: #7f8c8d; font-size: 0.9em;">
              notificações não lidas
            </div>
          </div>
        </mozg-meu-componente-svelte>
      </div>

      <div
        style="margin-top: 2rem; background: #f8f9fa; padding: 1.5rem; border-radius: 8px;"
      >
        <h2 style="margin-top: 0; color: #2c3e50;">Sobre este componente</h2>
        <p>
          Este é um exemplo de como o componente Svelte pode ser usado em um
          layout de dashboard responsivo. O componente é totalmente
          personalizável e suporta slots para conteúdo personalizado.
        </p>

        <div
          style="margin-top: 1.5rem; padding: 1rem; background: white; border-radius: 6px; border-left: 4px solid #3498db;"
        >
          <h3 style="margin-top: 0; color: #3498db;">Dica de Uso</h3>
          <p>
            Experimente clicar nos botões de incremento e resetar o contador em
            cada um dos cards acima para ver a interatividade em ação.
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
}`,...De.parameters?.docs?.source}}};const Lr=["Padrao","ComTituloLongo","ComConteudoPersonalizado","EmLayout"];export{Pe as ComConteudoPersonalizado,Oe as ComTituloLongo,De as EmLayout,Ne as Padrao,Lr as __namedExportsOrder,Fr as default};
