import{d as it}from"./iframe-BK6HzFne.js";import"./index-nuYtCEEu.js";const wn="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(wn);let Te=!1,En=!1;function xn(){Te=!0}xn();const Sn=2,Tn=8,An=2,Nt="[",Rt="[!",mt="[?",kt="]",Ee={},x=Symbol(),zn="http://www.w3.org/1999/xhtml",Cn=!1;var Nn=Array.isArray,Rn=Array.prototype.indexOf,_e=Array.prototype.includes,kn=Array.from,Ue=Object.keys,Ye=Object.defineProperty,ae=Object.getOwnPropertyDescriptor,On=Object.prototype,Pn=Array.prototype,Dn=Object.getPrototypeOf,_t=Object.isExtensible;const Mn=()=>{};function Ln(e){for(var t=0;t<e.length;t++)e[t]()}function Ot(){var e,t,n=new Promise((r,s)=>{e=r,t=s});return{promise:n,resolve:e,reject:t}}const E=2,xe=4,We=8,Pt=1<<24,re=16,Q=32,ee=64,Ze=128,P=512,S=1024,z=2048,V=4096,J=8192,I=16384,de=32768,gt=1<<25,He=65536,yt=1<<17,Fn=1<<18,he=1<<19,In=1<<20,fe=65536,Qe=1<<21,ot=1<<22,X=1<<23,Fe=Symbol("$state"),Dt=Symbol("legacy props"),Y=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"},Mt=3,lt=8;function jn(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Vn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function qn(){throw new Error("https://svelte.dev/e/hydration_failed")}function Un(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function Yn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Hn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Bn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Gn(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}function at(e){console.warn("https://svelte.dev/e/hydration_mismatch")}function Kn(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let T=!1;function Ne(e){T=e}let $;function te(e){if(e===null)throw at(),Ee;return $=e}function ut(){return te(se($))}function bt(e){if(T){if(se($)!==null)throw at(),Ee;$=e}}function Wn(e=1){if(T){for(var t=e,n=$;t--;)n=se(n);$=n}}function Jn(e=!0){for(var t=0,n=$;;){if(n.nodeType===lt){var r=n.data;if(r===kt){if(t===0)return n;t-=1}else(r===Nt||r===Rt||r[0]==="["&&!isNaN(Number(r.slice(1))))&&(t+=1)}var s=se(n);e&&n.remove(),n=s}}function Lt(e){return e===this.v}function Xn(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Ft(e){return!Xn(e,this.v)}let A=null;function ge(e){A=e}function It(e,t=!1,n){A={p:A,i:!1,c:null,e:null,s:e,x:null,r:m,l:Te&&!t?{s:null,u:null,$:[]}:null}}function jt(e){var t=A,n=t.e;if(n!==null){t.e=null;for(var r of n)br(r)}return e!==void 0&&(t.x=e),t.i=!0,A=t.p,e??{}}function Ae(){return!Te||A!==null&&A.l===null}let oe=[];function Vt(){var e=oe;oe=[],Ln(e)}function me(e){if(oe.length===0&&!$e){var t=oe;queueMicrotask(()=>{t===oe&&Vt()})}oe.push(e)}function Zn(){for(;oe.length>0;)Vt()}function qt(e){var t=m;if(t===null)return p.f|=X,e;if((t.f&de)===0&&(t.f&xe)===0)throw e;W(e,t)}function W(e,t){for(;t!==null;){if((t.f&Ze)!==0){if((t.f&de)===0)throw e;try{t.b.error(e);return}catch(n){e=n}}t=t.parent}throw e}const Qn=-7169;function w(e,t){e.f=e.f&Qn|t}function ft(e){(e.f&P)!==0||e.deps===null?w(e,S):w(e,V)}function Ut(e){if(e!==null)for(const t of e)(t.f&E)===0||(t.f&fe)===0||(t.f^=fe,Ut(t.deps))}function Yt(e,t,n){(e.f&z)!==0?t.add(e):(e.f&V)!==0&&n.add(e),Ut(e.deps),w(e,S)}let Re=!1;function er(e){var t=Re;try{return Re=!1,[e(),Re]}finally{Re=t}}const be=new Set;let g=null,L=null,et=null,$e=!1,Xe=!1,ve=null,Ie=null;var $t=0;let tr=1;class ne{id=tr++;current=new Map;previous=new Map;#e=new Set;#n=new Set;#l=0;#a=0;#r=null;#t=[];#s=new Set;#i=new Set;#o=new Map;is_fork=!1;#u=!1;#f(){return this.is_fork||this.#a>0}skip_effect(t){this.#o.has(t)||this.#o.set(t,{d:[],m:[]})}unskip_effect(t){var n=this.#o.get(t);if(n){this.#o.delete(t);for(var r of n.d)w(r,z),this.schedule(r);for(r of n.m)w(r,V),this.schedule(r)}}#d(){$t++>1e3&&nr();const t=this.#t;this.#t=[],this.apply();var n=ve=[],r=[],s=Ie=[];for(const o of t)this.#h(o,n,r);if(g=null,s.length>0){var i=ne.ensure();for(const o of s)i.schedule(o)}if(ve=null,Ie=null,this.#f()){this.#v(r),this.#v(n);for(const[o,a]of this.#o)Kt(o,a)}else{this.#s.clear(),this.#i.clear();for(const o of this.#e)o(this);this.#e.clear(),wt(r),wt(n),this.#l===0&&this.#c(),this.#r?.resolve()}var l=g;if(this.#t.length>0){const o=l??=this;o.#t.push(...this.#t.filter(a=>!o.#t.includes(a)))}l!==null&&(be.add(l),l.#d())}#h(t,n,r){t.f^=S;for(var s=t.first;s!==null;){var i=s.f,l=(i&(Q|ee))!==0,o=l&&(i&S)!==0,a=o||(i&J)!==0||this.#o.has(s);if(!a&&s.fn!==null){l?s.f^=S:(i&xe)!==0?n.push(s):Ce(s)&&((i&re)!==0&&this.#i.add(s),ye(s));var u=s.first;if(u!==null){s=u;continue}}for(;s!==null;){var f=s.next;if(f!==null){s=f;break}s=s.parent}}}#v(t){for(var n=0;n<t.length;n+=1)Yt(t[n],this.#s,this.#i)}capture(t,n){n!==x&&!this.previous.has(t)&&this.previous.set(t,n),(t.f&X)===0&&(this.current.set(t,t.v),L?.set(t,t.v))}activate(){g=this}deactivate(){g=null,L=null}flush(){try{if(Xe=!0,g=this,!this.#f()){for(const t of this.#s)this.#i.delete(t),w(t,z),this.schedule(t);for(const t of this.#i)w(t,V),this.schedule(t)}this.#d()}finally{$t=0,et=null,ve=null,Ie=null,Xe=!1,g=null,L=null,Z.clear()}}discard(){for(const t of this.#n)t(this);this.#n.clear()}#c(){if(be.size>1){this.previous.clear();var t=g,n=L,r=!0;for(const s of be){if(s===this){r=!1;continue}const i=[];for(const[o,a]of this.current){if(s.current.has(o))if(r&&a!==s.current.get(o))s.current.set(o,a);else continue;i.push(o)}if(i.length===0)continue;const l=[...s.current.keys()].filter(o=>!this.current.has(o));if(l.length>0){s.activate();const o=new Set,a=new Map;for(const u of i)Bt(u,l,o,a);if(s.#t.length>0){s.apply();for(const u of s.#t)s.#h(u,[],[])}s.deactivate()}}g=t,L=n}this.#o.clear(),be.delete(this)}increment(t){this.#l+=1,t&&(this.#a+=1)}decrement(t,n){this.#l-=1,t&&(this.#a-=1),!(this.#u||n)&&(this.#u=!0,me(()=>{this.#u=!1,this.flush()}))}oncommit(t){this.#e.add(t)}ondiscard(t){this.#n.add(t)}settled(){return(this.#r??=Ot()).promise}static ensure(){if(g===null){const t=g=new ne;Xe||(be.add(g),$e||me(()=>{g===t&&t.flush()}))}return g}apply(){}schedule(t){if(et=t,t.b?.is_pending&&(t.f&(xe|We|Pt))!==0&&(t.f&de)===0){t.b.defer_effect(t);return}for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(ve!==null&&n===m&&(p===null||(p.f&E)===0))return;if((r&(ee|Q))!==0){if((r&S)===0)return;n.f^=S}}this.#t.push(n)}}function Ht(e){var t=$e;$e=!0;try{for(var n;;){if(Zn(),g===null)return n;g.flush()}}finally{$e=t}}function nr(){try{Vn()}catch(e){W(e,et)}}let U=null;function wt(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var r=e[n++];if((r.f&(I|J))===0&&Ce(r)&&(U=new Set,ye(r),r.deps===null&&r.first===null&&r.nodes===null&&r.teardown===null&&r.ac===null&&fn(r),U?.size>0)){Z.clear();for(const s of U){if((s.f&(I|J))!==0)continue;const i=[s];let l=s.parent;for(;l!==null;)U.has(l)&&(U.delete(l),i.push(l)),l=l.parent;for(let o=i.length-1;o>=0;o--){const a=i[o];(a.f&(I|J))===0&&ye(a)}}U.clear()}}U=null}}function Bt(e,t,n,r){if(!n.has(e)&&(n.add(e),e.reactions!==null))for(const s of e.reactions){const i=s.f;(i&E)!==0?Bt(s,t,n,r):(i&(ot|re))!==0&&(i&z)===0&&Gt(s,t,r)&&(w(s,z),ct(s))}}function Gt(e,t,n){const r=n.get(e);if(r!==void 0)return r;if(e.deps!==null)for(const s of e.deps){if(_e.call(t,s))return!0;if((s.f&E)!==0&&Gt(s,t,n))return n.set(s,!0),!0}return n.set(e,!1),!1}function ct(e){g.schedule(e)}function Kt(e,t){if(!((e.f&Q)!==0&&(e.f&S)!==0)){(e.f&z)!==0?t.d.push(e):(e.f&V)!==0&&t.m.push(e),w(e,S);for(var n=e.first;n!==null;)Kt(n,t),n=n.next}}function rr(e){let t=0,n=ze(0),r;return()=>{ht()&&(O(n),an(()=>(t===0&&(r=kr(()=>e(()=>we(n)))),t+=1,()=>{me(()=>{t-=1,t===0&&(r?.(),r=void 0,we(n))})})))}}var sr=He|he;function ir(e,t,n,r){new or(e,t,n,r)}class or{parent;is_pending=!1;transform_error;#e;#n=T?$:null;#l;#a;#r;#t=null;#s=null;#i=null;#o=null;#u=0;#f=0;#d=!1;#h=new Set;#v=new Set;#c=null;#y=rr(()=>(this.#c=ze(this.#u),()=>{this.#c=null}));constructor(t,n,r,s){this.#e=t,this.#l=n,this.#a=i=>{var l=m;l.b=this,l.f|=Ze,r(i)},this.parent=m.b,this.transform_error=s??this.parent?.transform_error??(i=>i),this.#r=Sr(()=>{if(T){const i=this.#n;ut();const l=i.data===Rt;if(i.data.startsWith(mt)){const a=JSON.parse(i.data.slice(mt.length));this.#$(a)}else l?this.#w():this.#b()}else this.#_()},sr),T&&(this.#e=$)}#b(){try{this.#t=ie(()=>this.#a(this.#e))}catch(t){this.error(t)}}#$(t){const n=this.#l.failed;n&&(this.#i=ie(()=>{n(this.#e,()=>t,()=>()=>{})}))}#w(){const t=this.#l.pending;if(t){this.is_pending=!0,this.#s=ie(()=>t(this.#e));var n=g;me(()=>{var r=this.#o=document.createDocumentFragment(),s=Je();r.append(s),this.#t=this.#m(()=>ie(()=>this.#a(s))),this.#f===0&&(this.#e.before(r),this.#o=null,je(this.#s,()=>{this.#s=null}),this.#p(n))})}}#_(){var t=g;try{if(this.is_pending=this.has_pending_snippet(),this.#f=0,this.#u=0,this.#t=ie(()=>{this.#a(this.#e)}),this.#f>0){var n=this.#o=document.createDocumentFragment();zr(this.#t,n);const r=this.#l.pending;this.#s=ie(()=>r(this.#e))}else this.#p(t)}catch(r){this.error(r)}}#p(t){this.is_pending=!1;for(const n of this.#h)w(n,z),t.schedule(n);for(const n of this.#v)w(n,V),t.schedule(n);this.#h.clear(),this.#v.clear()}defer_effect(t){Yt(t,this.#h,this.#v)}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!this.#l.pending}#m(t){var n=m,r=p,s=A;q(this.#r),M(this.#r),ge(this.#r.ctx);try{return ne.ensure(),t()}catch(i){return qt(i),null}finally{q(n),M(r),ge(s)}}#g(t,n){if(!this.has_pending_snippet()){this.parent&&this.parent.#g(t,n);return}this.#f+=t,this.#f===0&&(this.#p(n),this.#s&&je(this.#s,()=>{this.#s=null}),this.#o&&(this.#e.before(this.#o),this.#o=null))}update_pending_count(t,n){this.#g(t,n),this.#u+=t,!(!this.#c||this.#d)&&(this.#d=!0,me(()=>{this.#d=!1,this.#c&&Ge(this.#c,this.#u)}))}get_effect_pending(){return this.#y(),O(this.#c)}error(t){var n=this.#l.onerror;let r=this.#l.failed;if(!n&&!r)throw t;this.#t&&(j(this.#t),this.#t=null),this.#s&&(j(this.#s),this.#s=null),this.#i&&(j(this.#i),this.#i=null),T&&(te(this.#n),Wn(),te(Jn()));var s=!1,i=!1;const l=()=>{if(s){Kn();return}s=!0,i&&Gn(),this.#i!==null&&je(this.#i,()=>{this.#i=null}),this.#m(()=>{this.#_()})},o=a=>{try{i=!0,n?.(a,l),i=!1}catch(u){W(u,this.#r&&this.#r.parent)}r&&(this.#i=this.#m(()=>{try{return ie(()=>{var u=m;u.b=this,u.f|=Ze,r(this.#e,()=>a,()=>l)})}catch(u){return W(u,this.#r.parent),null}}))};me(()=>{var a;try{a=this.transform_error(t)}catch(u){W(u,this.#r&&this.#r.parent);return}a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(o,u=>W(u,this.#r&&this.#r.parent)):o(a)})}}function lr(e,t,n,r){const s=Ae()?Jt:Xt;var i=e.filter(c=>!c.settled);if(n.length===0&&i.length===0){r(t.map(s));return}var l=m,o=ar(),a=i.length===1?i[0].promise:i.length>1?Promise.all(i.map(c=>c.promise)):null;function u(c){o();try{r(c)}catch(h){(l.f&I)===0&&W(h,l)}Be()}if(n.length===0){a.then(()=>u(t.map(s)));return}var f=Wt();function d(){Promise.all(n.map(c=>ur(c))).then(c=>u([...t.map(s),...c])).catch(c=>W(c,l)).finally(()=>f())}a?a.then(()=>{o(),d(),Be()}):d()}function ar(){var e=m,t=p,n=A,r=g;return function(i=!0){q(e),M(t),ge(n),i&&(e.f&I)===0&&(r?.activate(),r?.apply())}}function Be(e=!0){q(null),M(null),ge(null),e&&g?.deactivate()}function Wt(){var e=m.b,t=g,n=e.is_rendered();return e.update_pending_count(1,t),t.increment(n),(r=!1)=>{e.update_pending_count(-1,t),t.decrement(n,r)}}function Jt(e){var t=E|z,n=p!==null&&(p.f&E)!==0?p:null;return m!==null&&(m.f|=he),{ctx:A,deps:null,effects:null,equals:Lt,f:t,fn:e,reactions:null,rv:0,v:x,wv:0,parent:n??m,ac:null}}function ur(e,t,n){let r=m;r===null&&jn();var s=void 0,i=ze(x),l=!p,o=new Map;return Er(()=>{var a=m,u=Ot();s=u.promise;try{Promise.resolve(e()).then(u.resolve,u.reject).finally(Be)}catch(h){u.reject(h),Be()}var f=g;if(l){if((a.f&de)!==0)var d=Wt();if(r.b.is_rendered())o.get(f)?.reject(Y),o.delete(f);else{for(const h of o.values())h.reject(Y);o.clear()}o.set(f,u)}const c=(h,v=void 0)=>{if(d){var _=v===Y;d(_)}if(!(v===Y||(a.f&I)!==0)){if(f.activate(),v)i.f|=X,Ge(i,v);else{(i.f&X)!==0&&(i.f^=X),Ge(i,h);for(const[y,N]of o){if(o.delete(y),y===f)break;N.reject(Y)}}f.deactivate()}};u.promise.then(c,h=>c(null,h||"unknown"))}),yr(()=>{for(const a of o.values())a.reject(Y)}),new Promise(a=>{function u(f){function d(){f===s?a(i):u(s)}f.then(d,d)}u(s)})}function Xt(e){const t=Jt(e);return t.equals=Ft,t}function fr(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)j(t[n])}}function cr(e){for(var t=e.parent;t!==null;){if((t.f&E)===0)return(t.f&I)===0?t:null;t=t.parent}return null}function dt(e){var t,n=m;q(cr(e));try{e.f&=~fe,fr(e),t=pn(e)}finally{q(n)}return t}function Zt(e){var t=dt(e);if(!e.equals(t)&&(e.wv=hn(),(!g?.is_fork||e.deps===null)&&(e.v=t,e.deps===null))){w(e,S);return}ce||(L!==null?(ht()||g?.is_fork)&&L.set(e,t):ft(e))}function dr(e){if(e.effects!==null)for(const t of e.effects)(t.teardown||t.ac)&&(t.teardown?.(),t.ac?.abort(Y),t.teardown=Mn,t.ac=null,Se(t,0),vt(t))}function Qt(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&ye(t)}let tt=new Set;const Z=new Map;let en=!1;function ze(e,t){var n={f:0,v:e,reactions:null,equals:Lt,rv:0,wv:0};return n}function K(e,t){const n=ze(e);return Cr(n),n}function hr(e,t=!1,n=!0){const r=ze(e);return t||(r.equals=Ft),Te&&n&&A!==null&&A.l!==null&&(A.l.s??=[]).push(r),r}function H(e,t,n=!1){p!==null&&(!F||(p.f&yt)!==0)&&Ae()&&(p.f&(E|re|ot|yt))!==0&&(D===null||!_e.call(D,e))&&Bn();let r=n?pe(t):t;return Ge(e,r,Ie)}function Ge(e,t,n=null){if(!e.equals(t)){var r=e.v;ce?Z.set(e,t):Z.set(e,r),e.v=t;var s=ne.ensure();if(s.capture(e,r),(e.f&E)!==0){const i=e;(e.f&z)!==0&&dt(i),ft(i)}e.wv=hn(),tn(e,z,n),Ae()&&m!==null&&(m.f&S)!==0&&(m.f&(Q|ee))===0&&(k===null?Nr([e]):k.push(e)),!s.is_fork&&tt.size>0&&!en&&vr()}return t}function vr(){en=!1;for(const e of tt)(e.f&S)!==0&&w(e,V),Ce(e)&&ye(e);tt.clear()}function we(e){H(e,e.v+1)}function tn(e,t,n){var r=e.reactions;if(r!==null)for(var s=Ae(),i=r.length,l=0;l<i;l++){var o=r[l],a=o.f;if(!(!s&&o===m)){var u=(a&z)===0;if(u&&w(o,t),(a&E)!==0){var f=o;L?.delete(f),(a&fe)===0&&(a&P&&(o.f|=fe),tn(f,V,n))}else if(u){var d=o;(a&re)!==0&&U!==null&&U.add(d),n!==null?n.push(d):ct(d)}}}}function pe(e){if(typeof e!="object"||e===null||Fe in e)return e;const t=Dn(e);if(t!==On&&t!==Pn)return e;var n=new Map,r=Nn(e),s=K(0),i=ue,l=o=>{if(ue===i)return o();var a=p,u=ue;M(null),Tt(i);var f=o();return M(a),Tt(u),f};return r&&n.set("length",K(e.length)),new Proxy(e,{defineProperty(o,a,u){(!("value"in u)||u.configurable===!1||u.enumerable===!1||u.writable===!1)&&Yn();var f=n.get(a);return f===void 0?l(()=>{var d=K(u.value);return n.set(a,d),d}):H(f,u.value,!0),!0},deleteProperty(o,a){var u=n.get(a);if(u===void 0){if(a in o){const f=l(()=>K(x));n.set(a,f),we(s)}}else H(u,x),we(s);return!0},get(o,a,u){if(a===Fe)return e;var f=n.get(a),d=a in o;if(f===void 0&&(!d||ae(o,a)?.writable)&&(f=l(()=>{var h=pe(d?o[a]:x),v=K(h);return v}),n.set(a,f)),f!==void 0){var c=O(f);return c===x?void 0:c}return Reflect.get(o,a,u)},getOwnPropertyDescriptor(o,a){var u=Reflect.getOwnPropertyDescriptor(o,a);if(u&&"value"in u){var f=n.get(a);f&&(u.value=O(f))}else if(u===void 0){var d=n.get(a),c=d?.v;if(d!==void 0&&c!==x)return{enumerable:!0,configurable:!0,value:c,writable:!0}}return u},has(o,a){if(a===Fe)return!0;var u=n.get(a),f=u!==void 0&&u.v!==x||Reflect.has(o,a);if(u!==void 0||m!==null&&(!f||ae(o,a)?.writable)){u===void 0&&(u=l(()=>{var c=f?pe(o[a]):x,h=K(c);return h}),n.set(a,u));var d=O(u);if(d===x)return!1}return f},set(o,a,u,f){var d=n.get(a),c=a in o;if(r&&a==="length")for(var h=u;h<d.v;h+=1){var v=n.get(h+"");v!==void 0?H(v,x):h in o&&(v=l(()=>K(x)),n.set(h+"",v))}if(d===void 0)(!c||ae(o,a)?.writable)&&(d=l(()=>K(void 0)),H(d,pe(u)),n.set(a,d));else{c=d.v!==x;var _=l(()=>pe(u));H(d,_)}var y=Reflect.getOwnPropertyDescriptor(o,a);if(y?.set&&y.set.call(f,u),!c){if(r&&typeof a=="string"){var N=n.get("length"),b=Number(a);Number.isInteger(b)&&b>=N.v&&H(N,b+1)}we(s)}return!0},ownKeys(o){O(s);var a=Reflect.ownKeys(o).filter(d=>{var c=n.get(d);return c===void 0||c.v!==x});for(var[u,f]of n)f.v!==x&&!(u in o)&&a.push(u);return a},setPrototypeOf(){Hn()}})}var Et,nn,rn,sn;function nt(){if(Et===void 0){Et=window,nn=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;rn=ae(t,"firstChild").get,sn=ae(t,"nextSibling").get,_t(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),_t(n)&&(n.__t=void 0)}}function Je(e=""){return document.createTextNode(e)}function Ke(e){return rn.call(e)}function se(e){return sn.call(e)}function xt(e,t){if(!T)return Ke(e);var n=Ke($);return n===null&&(n=$.appendChild(Je())),te(n),n}function pr(e,t=1,n=!1){let r=T?$:e;for(var s;t--;)s=r,r=se(r);if(!T)return r;if(n){if(r?.nodeType!==Mt){var i=Je();return r===null?s?.after(i):r.before(i),te(i),i}_r(r)}return te(r),r}function mr(e){e.textContent=""}function on(e,t,n){return document.createElementNS(zn,e,void 0)}function _r(e){if(e.nodeValue.length<65536)return;let t=e.nextSibling;for(;t!==null&&t.nodeType===Mt;)t.remove(),e.nodeValue+=t.nodeValue,t=e.nextSibling}function ln(e){var t=p,n=m;M(null),q(null);try{return e()}finally{M(t),q(n)}}function gr(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function B(e,t){var n=m;n!==null&&(n.f&J)!==0&&(e|=J);var r={ctx:A,deps:null,nodes:null,f:e|z|P,first:null,fn:t,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null},s=r;if((e&xe)!==0)ve!==null?ve.push(r):ne.ensure().schedule(r);else if(t!==null){try{ye(r)}catch(l){throw j(r),l}s.deps===null&&s.teardown===null&&s.nodes===null&&s.first===s.last&&(s.f&he)===0&&(s=s.first,(e&re)!==0&&(e&He)!==0&&s!==null&&(s.f|=He))}if(s!==null&&(s.parent=n,n!==null&&gr(s,n),p!==null&&(p.f&E)!==0&&(e&ee)===0)){var i=p;(i.effects??=[]).push(s)}return r}function ht(){return p!==null&&!F}function yr(e){const t=B(We,null);return w(t,S),t.teardown=e,t}function br(e){return B(xe|In,e)}function $r(e){ne.ensure();const t=B(ee|he,e);return()=>{j(t)}}function wr(e){ne.ensure();const t=B(ee|he,e);return(n={})=>new Promise(r=>{n.outro?je(t,()=>{j(t),r(void 0)}):(j(t),r(void 0))})}function Er(e){return B(ot|he,e)}function an(e,t=0){return B(We|t,e)}function xr(e,t=[],n=[],r=[]){lr(r,t,n,s=>{B(We,()=>e(...s.map(O)))})}function Sr(e,t=0){var n=B(re|t,e);return n}function ie(e){return B(Q|he,e)}function un(e){var t=e.teardown;if(t!==null){const n=ce,r=p;St(!0),M(null);try{t.call(null)}finally{St(n),M(r)}}}function vt(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){const s=n.ac;s!==null&&ln(()=>{s.abort(Y)});var r=n.next;(n.f&ee)!==0?n.parent=null:j(n,t),n=r}}function Tr(e){for(var t=e.first;t!==null;){var n=t.next;(t.f&Q)===0&&j(t),t=n}}function j(e,t=!0){var n=!1;(t||(e.f&Fn)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(Ar(e.nodes.start,e.nodes.end),n=!0),w(e,gt),vt(e,t&&!n),Se(e,0);var r=e.nodes&&e.nodes.t;if(r!==null)for(const i of r)i.stop();un(e),e.f^=gt,e.f|=I;var s=e.parent;s!==null&&s.first!==null&&fn(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=null}function Ar(e,t){for(;e!==null;){var n=e===t?null:se(e);e.remove(),e=n}}function fn(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function je(e,t,n=!0){var r=[];cn(e,r,!0);var s=()=>{n&&j(e),t&&t()},i=r.length;if(i>0){var l=()=>--i||s();for(var o of r)o.out(l)}else s()}function cn(e,t,n){if((e.f&J)===0){e.f^=J;var r=e.nodes&&e.nodes.t;if(r!==null)for(const o of r)(o.is_global||n)&&t.push(o);for(var s=e.first;s!==null;){var i=s.next,l=(s.f&He)!==0||(s.f&Q)!==0&&(e.f&re)!==0;cn(s,t,l?n:!1),s=i}}}function zr(e,t){if(e.nodes)for(var n=e.nodes.start,r=e.nodes.end;n!==null;){var s=n===r?null:se(n);t.append(n),n=s}}let Ve=!1,ce=!1;function St(e){ce=e}let p=null,F=!1;function M(e){p=e}let m=null;function q(e){m=e}let D=null;function Cr(e){p!==null&&(D===null?D=[e]:D.push(e))}let C=null,R=0,k=null;function Nr(e){k=e}let dn=1,le=0,ue=le;function Tt(e){ue=e}function hn(){return++dn}function Ce(e){var t=e.f;if((t&z)!==0)return!0;if(t&E&&(e.f&=~fe),(t&V)!==0){for(var n=e.deps,r=n.length,s=0;s<r;s++){var i=n[s];if(Ce(i)&&Zt(i),i.wv>e.wv)return!0}(t&P)!==0&&L===null&&w(e,S)}return!1}function vn(e,t,n=!0){var r=e.reactions;if(r!==null&&!(D!==null&&_e.call(D,e)))for(var s=0;s<r.length;s++){var i=r[s];(i.f&E)!==0?vn(i,t,!1):t===i&&(n?w(i,z):(i.f&S)!==0&&w(i,V),ct(i))}}function pn(e){var t=C,n=R,r=k,s=p,i=D,l=A,o=F,a=ue,u=e.f;C=null,R=0,k=null,p=(u&(Q|ee))===0?e:null,D=null,ge(e.ctx),F=!1,ue=++le,e.ac!==null&&(ln(()=>{e.ac.abort(Y)}),e.ac=null);try{e.f|=Qe;var f=e.fn,d=f();e.f|=de;var c=e.deps,h=g?.is_fork;if(C!==null){var v;if(h||Se(e,R),c!==null&&R>0)for(c.length=R+C.length,v=0;v<C.length;v++)c[R+v]=C[v];else e.deps=c=C;if(ht()&&(e.f&P)!==0)for(v=R;v<c.length;v++)(c[v].reactions??=[]).push(e)}else!h&&c!==null&&R<c.length&&(Se(e,R),c.length=R);if(Ae()&&k!==null&&!F&&c!==null&&(e.f&(E|V|z))===0)for(v=0;v<k.length;v++)vn(k[v],e);if(s!==null&&s!==e){if(le++,s.deps!==null)for(let _=0;_<n;_+=1)s.deps[_].rv=le;if(t!==null)for(const _ of t)_.rv=le;k!==null&&(r===null?r=k:r.push(...k))}return(e.f&X)!==0&&(e.f^=X),d}catch(_){return qt(_)}finally{e.f^=Qe,C=t,R=n,k=r,p=s,D=i,ge(l),F=o,ue=a}}function Rr(e,t){let n=t.reactions;if(n!==null){var r=Rn.call(n,e);if(r!==-1){var s=n.length-1;s===0?n=t.reactions=null:(n[r]=n[s],n.pop())}}if(n===null&&(t.f&E)!==0&&(C===null||!_e.call(C,t))){var i=t;(i.f&P)!==0&&(i.f^=P,i.f&=~fe),ft(i),dr(i),Se(i,0)}}function Se(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)Rr(e,n[r])}function ye(e){var t=e.f;if((t&I)===0){w(e,S);var n=m,r=Ve;m=e,Ve=!0;try{(t&(re|Pt))!==0?Tr(e):vt(e),un(e);var s=pn(e);e.teardown=typeof s=="function"?s:null,e.wv=dn;var i;Cn&&En&&(e.f&z)!==0&&e.deps}finally{Ve=r,m=n}}}function O(e){var t=e.f,n=(t&E)!==0;if(p!==null&&!F){var r=m!==null&&(m.f&I)!==0;if(!r&&(D===null||!_e.call(D,e))){var s=p.deps;if((p.f&Qe)!==0)e.rv<le&&(e.rv=le,C===null&&s!==null&&s[R]===e?R++:C===null?C=[e]:C.push(e));else{(p.deps??=[]).push(e);var i=e.reactions;i===null?e.reactions=[p]:_e.call(i,p)||i.push(p)}}}if(ce&&Z.has(e))return Z.get(e);if(n){var l=e;if(ce){var o=l.v;return((l.f&S)===0&&l.reactions!==null||_n(l))&&(o=dt(l)),Z.set(l,o),o}var a=(l.f&P)===0&&!F&&p!==null&&(Ve||(p.f&P)!==0),u=(l.f&de)===0;Ce(l)&&(a&&(l.f|=P),Zt(l)),a&&!u&&(Qt(l),mn(l))}if(L?.has(e))return L.get(e);if((e.f&X)!==0)throw e.v;return e.v}function mn(e){if(e.f|=P,e.deps!==null)for(const t of e.deps)(t.reactions??=[]).push(e),(t.f&E)!==0&&(t.f&P)===0&&(Qt(t),mn(t))}function _n(e){if(e.v===x)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(Z.has(t)||(t.f&E)!==0&&_n(t))return!0;return!1}function kr(e){var t=F;try{return F=!0,e()}finally{F=t}}const ke=Symbol("events"),Or=new Set,At=new Set;let zt=null;function Ct(e){var t=this,n=t.ownerDocument,r=e.type,s=e.composedPath?.()||[],i=s[0]||e.target;zt=e;var l=0,o=zt===e&&e[ke];if(o){var a=s.indexOf(o);if(a!==-1&&(t===document||t===window)){e[ke]=t;return}var u=s.indexOf(t);if(u===-1)return;a<=u&&(l=a)}if(i=s[l]||e.target,i!==t){Ye(e,"currentTarget",{configurable:!0,get(){return i||n}});var f=p,d=m;M(null),q(null);try{for(var c,h=[];i!==null;){var v=i.assignedSlot||i.parentNode||i.host||null;try{var _=i[ke]?.[r];_!=null&&(!i.disabled||e.target===i)&&_.call(i,e)}catch(y){c?h.push(y):c=y}if(e.cancelBubble||v===t||v===null)break;i=v}if(c){for(let y of h)queueMicrotask(()=>{throw y});throw c}}finally{e[ke]=t,delete e.currentTarget,M(f),q(d)}}}const Pr=globalThis?.window?.trustedTypes&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function Dr(e){return Pr?.createHTML(e)??e}function Mr(e){var t=on("template");return t.innerHTML=Dr(e.replaceAll("<!>","<!---->")),t.content}function rt(e,t){var n=m;n.nodes===null&&(n.nodes={start:e,end:t,a:null,t:null})}function Lr(e,t){var n=(t&An)!==0,r,s=!e.startsWith("<!>");return()=>{if(T)return rt($,null),$;r===void 0&&(r=Mr(s?e:"<!>"+e),r=Ke(r));var i=n||nn?document.importNode(r,!0):r.cloneNode(!0);return rt(i,i),i}}function gn(e,t){if(T){var n=m;((n.f&de)===0||n.nodes.end===null)&&(n.nodes.end=$),ut();return}e!==null&&e.before(t)}const Fr=["touchstart","touchmove"];function Ir(e){return Fr.includes(e)}function jr(e,t){var n=t==null?"":typeof t=="object"?`${t}`:t;n!==(e.__t??=e.nodeValue)&&(e.__t=n,e.nodeValue=`${n}`)}function yn(e,t){return bn(e,t)}function Vr(e,t){nt(),t.intro=t.intro??!1;const n=t.target,r=T,s=$;try{for(var i=Ke(n);i&&(i.nodeType!==lt||i.data!==Nt);)i=se(i);if(!i)throw Ee;Ne(!0),te(i);const l=bn(e,{...t,anchor:i});return Ne(!1),l}catch(l){if(l instanceof Error&&l.message.split(`
`).some(o=>o.startsWith("https://svelte.dev/e/")))throw l;return l!==Ee&&console.warn("Failed to hydrate: ",l),t.recover===!1&&qn(),nt(),mr(n),Ne(!1),yn(e,t)}finally{Ne(r),te(s)}}const Oe=new Map;function bn(e,{target:t,anchor:n,props:r={},events:s,context:i,intro:l=!0,transformError:o}){nt();var a=void 0,u=wr(()=>{var f=n??t.appendChild(Je());ir(f,{pending:()=>{}},h=>{It({});var v=A;if(i&&(v.c=i),s&&(r.$$events=s),T&&rt(h,null),a=e(h,r)||{},T&&(m.nodes.end=$,$===null||$.nodeType!==lt||$.data!==kt))throw at(),Ee;jt()},o);var d=new Set,c=h=>{for(var v=0;v<h.length;v++){var _=h[v];if(!d.has(_)){d.add(_);var y=Ir(_);for(const G of[t,document]){var N=Oe.get(G);N===void 0&&(N=new Map,Oe.set(G,N));var b=N.get(_);b===void 0?(G.addEventListener(_,Ct,{passive:y}),N.set(_,1)):N.set(_,b+1)}}}};return c(kn(Or)),At.add(c),()=>{for(var h of d)for(const y of[t,document]){var v=Oe.get(y),_=v.get(h);--_==0?(y.removeEventListener(h,Ct),v.delete(h),v.size===0&&Oe.delete(y)):v.set(h,_)}At.delete(c),f!==n&&f.parentNode?.removeChild(f)}});return st.set(a,u),a}let st=new WeakMap;function qr(e,t){const n=st.get(e);return n?(st.delete(e),n(t)):Promise.resolve()}function Ur(e,t,n,r,s){T&&ut();var i=t.$$slots?.[n],l=!1;i===!0&&(i=t.children,l=!0),i===void 0||i(e,l?()=>r:r)}function Yr(e,t,n,r){var s=!Te||(n&Sn)!==0,i=(n&Tn)!==0,l=r,o=!0,a=()=>(o&&(o=!1,l=r),l);let u;{var f=Fe in e||Dt in e;u=ae(e,t)?.set??(f&&t in e?b=>e[t]=b:void 0)}var d,c=!1;[d,c]=er(()=>e[t]),d===void 0&&r!==void 0&&(d=a(),u&&(s&&Un(),u(d)));var h;if(s?h=()=>{var b=e[t];return b===void 0?a():(o=!0,b)}:h=()=>{var b=e[t];return b!==void 0&&(l=void 0),b===void 0?l:b},u){var v=e.$$legacy;return(function(b,G){return arguments.length>0?((!s||!G||v||c)&&u(G?h():b),b):h()})}var _=!1,y=Xt(()=>(_=!1,h()));O(y);var N=m;return(function(b,G){if(arguments.length>0){const pt=G?O(y):s&&i?pe(b):b;return H(y,pt),_=!0,l!==void 0&&(l=pt),b}return ce&&_||(N.f&I)!==0?y.v:O(y)})}function Hr(e){return new Br(e)}class Br{#e;#n;constructor(t){var n=new Map,r=(i,l)=>{var o=hr(l,!1,!1);return n.set(i,o),o};const s=new Proxy({...t.props||{},$$events:{}},{get(i,l){return O(n.get(l)??r(l,Reflect.get(i,l)))},has(i,l){return l===Dt?!0:(O(n.get(l)??r(l,Reflect.get(i,l))),Reflect.has(i,l))},set(i,l,o){return H(n.get(l)??r(l,o),o),Reflect.set(i,l,o)}});this.#n=(t.hydrate?Vr:yn)(t.component,{target:t.target,anchor:t.anchor,props:s,context:t.context,intro:t.intro??!1,recover:t.recover,transformError:t.transformError}),(!t?.props?.$$host||t.sync===!1)&&Ht(),this.#e=s.$$events;for(const i of Object.keys(this.#n))i==="$set"||i==="$destroy"||i==="$on"||Ye(this,i,{get(){return this.#n[i]},set(l){this.#n[i]=l},enumerable:!0});this.#n.$set=i=>{Object.assign(s,i)},this.#n.$destroy=()=>{qr(this.#n)}}$set(t){this.#n.$set(t)}$on(t,n){this.#e[t]=this.#e[t]||[];const r=(...s)=>n.call(this,...s);return this.#e[t].push(r),()=>{this.#e[t]=this.#e[t].filter(s=>s!==r)}}$destroy(){this.#n.$destroy()}}let $n;typeof HTMLElement=="function"&&($n=class extends HTMLElement{$$ctor;$$s;$$c;$$cn=!1;$$d={};$$r=!1;$$p_d={};$$l={};$$l_u=new Map;$$me;$$shadowRoot=null;constructor(e,t,n){super(),this.$$ctor=e,this.$$s=t,n&&(this.$$shadowRoot=this.attachShadow(n))}addEventListener(e,t,n){if(this.$$l[e]=this.$$l[e]||[],this.$$l[e].push(t),this.$$c){const r=this.$$c.$on(e,t);this.$$l_u.set(t,r)}super.addEventListener(e,t,n)}removeEventListener(e,t,n){if(super.removeEventListener(e,t,n),this.$$c){const r=this.$$l_u.get(t);r&&(r(),this.$$l_u.delete(t))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let e=function(r){return s=>{const i=on("slot");r!=="default"&&(i.name=r),gn(s,i)}};if(await Promise.resolve(),!this.$$cn||this.$$c)return;const t={},n=Gr(this);for(const r of this.$$s)r in n&&(r==="default"&&!this.$$d.children?(this.$$d.children=e(r),t.default=!0):t[r]=e(r));for(const r of this.attributes){const s=this.$$g_p(r.name);s in this.$$d||(this.$$d[s]=qe(s,r.value,this.$$p_d,"toProp"))}for(const r in this.$$p_d)!(r in this.$$d)&&this[r]!==void 0&&(this.$$d[r]=this[r],delete this[r]);this.$$c=Hr({component:this.$$ctor,target:this.$$shadowRoot||this,props:{...this.$$d,$$slots:t,$$host:this}}),this.$$me=$r(()=>{an(()=>{this.$$r=!0;for(const r of Ue(this.$$c)){if(!this.$$p_d[r]?.reflect)continue;this.$$d[r]=this.$$c[r];const s=qe(r,this.$$d[r],this.$$p_d,"toAttribute");s==null?this.removeAttribute(this.$$p_d[r].attribute||r):this.setAttribute(this.$$p_d[r].attribute||r,s)}this.$$r=!1})});for(const r in this.$$l)for(const s of this.$$l[r]){const i=this.$$c.$on(r,s);this.$$l_u.set(s,i)}this.$$l={}}}attributeChangedCallback(e,t,n){this.$$r||(e=this.$$g_p(e),this.$$d[e]=qe(e,n,this.$$p_d,"toProp"),this.$$c?.$set({[e]:this.$$d[e]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$me(),this.$$c=void 0)})}$$g_p(e){return Ue(this.$$p_d).find(t=>this.$$p_d[t].attribute===e||!this.$$p_d[t].attribute&&t.toLowerCase()===e)||e}});function qe(e,t,n,r){const s=n[e]?.type;if(t=s==="Boolean"&&typeof t!="boolean"?t!=null:t,!r||!n[e])return t;if(r==="toAttribute")switch(s){case"Object":case"Array":return t==null?null:JSON.stringify(t);case"Boolean":return t?"":null;case"Number":return t??null;default:return t}else switch(s){case"Object":case"Array":return t&&JSON.parse(t);case"Boolean":return t;case"Number":return t!=null?+t:t;default:return t}}function Gr(e){const t={};return e.childNodes.forEach(n=>{t[n.slot||"default"]=!0}),t}function Kr(e,t,n,r,s,i){let l=class extends $n{constructor(){super(e,n,s),this.$$p_d=t}static get observedAttributes(){return Ue(t).map(o=>(t[o].attribute||o).toLowerCase())}};return Ue(t).forEach(o=>{Ye(l.prototype,o,{get(){return this.$$c&&o in this.$$c?this.$$c[o]:this.$$d[o]},set(a){a=qe(o,a,t),this.$$d[o]=a;var u=this.$$c;if(u){var f=ae(u,o)?.get;f?u[o]=a:u.$set({[o]:a})}}})}),r.forEach(o=>{Ye(l.prototype,o,{get(){return this.$$c?.[o]}})}),e.element=l,l}var Wr=Lr("<div><p> </p> <!></div>");function Jr(e,t){It(t,!1);let n=Yr(t,"nome",12,"mundo");var r={get nome(){return n()},set nome(a){n(a),Ht()}},s=Wr(),i=xt(s),l=xt(i);bt(i);var o=pr(i,2);return Ur(o,t,"default",{}),bt(s),xr(()=>jr(l,`Aqui é ${n()??""}`)),gn(e,s),jt(r)}Kr(Jr,{nome:{}},["default"],[],{mode:"open"});const es={title:"Components/MeuComponenteSvelte",component:"mozg-meu-componente-svelte",tags:["autodocs"],argTypes:{titulo:{control:"text",description:"Título do componente",defaultValue:"Olá, Svelte!"},nome:{control:"text",description:"Nome a ser exibido no componente",defaultValue:"mundo"},contador:{control:{type:"number",min:0},description:"Valor inicial do contador",table:{type:{summary:"number"},defaultValue:{summary:0}}}},render:e=>it`
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
    `},Pe={args:{titulo:"Componente Svelte",nome:"Visitante"},parameters:{docs:{description:{story:"Componente Svelte padrão com título e nome personalizáveis."}}}},De={args:{titulo:"Este é um componente Svelte com um título muito longo para demonstrar o comportamento",nome:"Usuário com nome longo também"},parameters:{docs:{description:{story:"Demonstração do componente Svelte com textos longos para testar o comportamento de layout."}}}},Me={args:{titulo:"Conteúdo Personalizado",nome:"Usuário Svelte"},render:e=>it`
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
  `,parameters:{docs:{description:{story:"Exemplo de como personalizar o conteúdo do componente Svelte usando slots."}}}},Le={render:()=>it`
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
  `,parameters:{layout:"fullscreen",docs:{description:{story:"Exemplo de uso do componente Svelte em um layout de dashboard completo com múltiplos cards e informações adicionais."}}}};Pe.parameters={...Pe.parameters,docs:{...Pe.parameters?.docs,source:{originalSource:`{
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
}`,...Pe.parameters?.docs?.source}}};De.parameters={...De.parameters,docs:{...De.parameters?.docs,source:{originalSource:`{
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
}`,...De.parameters?.docs?.source}}};Me.parameters={...Me.parameters,docs:{...Me.parameters?.docs,source:{originalSource:`{
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
}`,...Me.parameters?.docs?.source}}};Le.parameters={...Le.parameters,docs:{...Le.parameters?.docs,source:{originalSource:`{
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
}`,...Le.parameters?.docs?.source}}};const ts=["Padrao","ComTituloLongo","ComConteudoPersonalizado","EmLayout"];export{Me as ComConteudoPersonalizado,De as ComTituloLongo,Le as EmLayout,Pe as Padrao,ts as __namedExportsOrder,es as default};
