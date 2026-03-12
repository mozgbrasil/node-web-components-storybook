class W extends HTMLElement{static{this.tag="mozg-a2hs"}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.css(),this.html(),this.js()}disconnectedCallback(){if(this.shadowRoot)for(;this.shadowRoot.firstChild;)this.shadowRoot.removeChild(this.shadowRoot.firstChild)}static get observedAttributes(){return["toggle","another-attribute"]}attributeChangedCallback(t,e,o){}adoptedCallback(){}css(){const t=document.createElement("style");t.textContent=`
    a {
    text-decoration: none;
    width: 50px;
    }

    a img {
      width: 50px;
    }
    `,this.shadowRoot.appendChild(t)}js(){(async()=>{let e;const o=this.shadowRoot.querySelector("#installBtn");window.addEventListener("beforeinstallprompt",s=>{s.preventDefault(),e=s,o&&(o.style.display="block",o.addEventListener("click",()=>{o&&(o.style.display="none",e.prompt(),e.userChoice.then(a=>{a.outcome,e=null}))}))})})()}html(){const e=document.createRange().createContextualFragment(`
    <a href="javascript:void(0)">
    <img
      id="installBtn"
      src="https://icons.iconarchive.com/icons/simpleicons-team/simple/256/pwa-icon.png"
    />
    </a>
   `);this.shadowRoot.appendChild(e)}}const b=W.tag;customElements.get(b)||customElements.define(b,W);class F extends HTMLElement{static{this.tag="mozg-change-favicon"}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.css(),this.html(),this.js()}disconnectedCallback(){if(this.shadowRoot)for(;this.shadowRoot.firstChild;)this.shadowRoot.removeChild(this.shadowRoot.firstChild)}static get observedAttributes(){return["toggle","another-attribute"]}attributeChangedCallback(t,e,o){}adoptedCallback(){}css(){const t=document.createElement("style");t.textContent=`
    `,this.shadowRoot.appendChild(t)}js(){(e=>{const o=document.createElement("canvas");o.width=64,o.height=64;const s=o.getContext("2d");if(!s)return;const a=new Image;a.src="logo-mini.png",a.onload=()=>{s.drawImage(a,0,0,64,64),s.fillStyle="#4fa3da",s.beginPath(),s.arc(50,14,14,0,2*Math.PI),s.fill(),s.fillStyle="white",s.font="bold 14px Arial",s.fillText(e,43,18);const c=document.querySelectorAll("link[rel~='icon']");if(c.length===0){const h=document.createElement("link");h.rel="icon",h.href=o.toDataURL("image/png"),document.head.appendChild(h)}else c.forEach(h=>{h.href=o.toDataURL("image/png")})}})("5")}html(){const e=document.createRange().createContextualFragment(`
   `);this.shadowRoot.appendChild(e)}}const C=F.tag;customElements.get(C)||customElements.define(C,F);class M extends HTMLElement{static{this.tag="mozg-fullscreen"}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.css(),this.html(),this.js()}disconnectedCallback(){if(this.shadowRoot)for(;this.shadowRoot.firstChild;)this.shadowRoot.removeChild(this.shadowRoot.firstChild)}static get observedAttributes(){return["toggle","another-attribute"]}attributeChangedCallback(t,e,o){}adoptedCallback(){}css(){const t=document.createElement("style");t.textContent=`
    :host {

    }

    a {
    text-decoration: none;
    }

    a img {
      width: 50px;
    }
    `,this.shadowRoot.appendChild(t)}js(){(async()=>{const e=this.shadowRoot.querySelector("#fullscreenBtn");e&&e.addEventListener("click",async()=>{document.fullscreenElement?document.exitFullscreen&&(await document.exitFullscreen(),e.src="https://icons.iconarchive.com/icons/pictogrammers/material-light/256/fullscreen-icon.png"):document.documentElement.requestFullscreen?(document.documentElement.requestFullscreen().then(()=>{}).catch(o=>console.error("Erro ao entrar em tela cheia:",o)),e.src="https://icons.iconarchive.com/icons/pictogrammers/material-light/256/fullscreen-exit-icon.png"):console.error("A API Fullscreen não é suportada neste navegador.")})})()}html(){const e=document.createRange().createContextualFragment(`
    <a href="javascript:void(0)">
      <img
        id="fullscreenBtn"
        src="https://icons.iconarchive.com/icons/pictogrammers/material-light/256/fullscreen-icon.png"
      />
    </a>
   `);this.shadowRoot.appendChild(e)}}const k=M.tag;customElements.get(k)||customElements.define(k,M);class j extends HTMLElement{static{this.tag="mozg-monitor-connectivity"}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.css(),this.html(),this.js()}disconnectedCallback(){for(;this.shadowRoot.firstChild;)this.shadowRoot.removeChild(this.shadowRoot.firstChild)}static get observedAttributes(){return["toggle","another-attribute"]}attributeChangedCallback(t,e,o){}adoptedCallback(){}css(){const t=document.createElement("style");t.textContent=`
    `,this.shadowRoot.appendChild(t)}js(){const t=o=>{navigator.serviceWorker.ready.then(s=>{s.active?.postMessage({type:"connectivityNotification",data:{title:"Estado de Conectividade",body:`Você está ${o}.`,icon:"/icon.png"}})})};(async()=>{try{window.addEventListener("online",()=>{t("Online")}),window.addEventListener("offline",()=>{t("Offline")})}catch(o){console.error(`Registration failed with ${o}`)}})()}html(){const e=document.createRange().createContextualFragment(`
   `);this.shadowRoot.appendChild(e)}}const y=j.tag;customElements.get(y)||customElements.define(y,j);class A extends HTMLElement{constructor(){super(),this.toggleFunction=null,this.attachShadow({mode:"open"})}static{this.tag="mozg-popover-popup"}connectedCallback(){for(const t of this.attributes);this.toggleFunction=this.getAttribute("toggle"),this.css(),this.html(),this.js()}disconnectedCallback(){if(this.shadowRoot)for(;this.shadowRoot.firstChild;)this.shadowRoot.removeChild(this.shadowRoot.firstChild)}static get observedAttributes(){return["toggle","another-attribute"]}attributeChangedCallback(t,e,o){}adoptedCallback(){}css(){const t=document.createElement("style");t.textContent=`
      [popover]:popover-open {
        opacity: 1;
        transform: scale(1) rotate(0deg);
      }

      [popover] {
        /* Final state of the exit animation */
        opacity: 0;
        transform: scale(0) rotate(270deg);
        transition: opacity 0.7s, transform 0.7s, overlay 0.7s allow-discrete,
          display 0.7s allow-discrete;
      }

      /* Needs to be after the previous [popover]:popover-open rule to take effect, as the specificity is the same */
      @starting-style {
        [popover]:popover-open {
          opacity: 0;
          transform: scale(0) rotate(270deg);
        }
      }
      /* Transition for the popover's backdrop */
      [popover]::backdrop {
        background-color: rgba(0, 0, 0, 0);
        transition: display 0.7s allow-discrete, overlay 0.7s allow-discrete,
          background-color 0.7s;
      }

      [popover]:popover-open::backdrop {
        background-color: rgba(0, 0, 0, 0.25);
      }

      @starting-style {
        [popover]:popover-open::backdrop {
          background-color: rgba(0, 0, 0, 0);
        }
      }
      [popover] {
        width: 90vw;
        height: 90vh;
        display: grid;
        font-size: 1.2rem;
        padding: 1rem;
        border: 1vmin solid;
        /* background-color: #ffe681; */
        box-shadow: 1vmin 1vmin 0 0 color-mix(in lab, currentcolor 80%, #0000);
      }
      [popover] a {
        color: #5eb0e5;
        text-decoration: none;
      }
      [popover] p {
        max-width: 80%;
      }

      button[popovertarget="popup"] {
        appearance: none;
        border: 1px solid;
        background-color: #0000;
        box-shadow: 2px 2px 0 2px #000;
        cursor: pointer;
        transition: 0.1s ease;
        padding: 0.5em 1em;
        font-size: 1.3rem;
        border-radius: 0.2em;
      }
      button[popovertarget="popup"]:active {
        box-shadow: -2px -2px 0 2px #000, inset 4px 4px 6px #0008;
        translate: 2px 2px;
      }

      button[popovertarget="popup"].closer {
        position: fixed;
        top: 1ch;
        right: 1ch;
        width: 4ch;
        aspect-ratio: 1;
        border: 1px solid;
        border-radius: 100%;
        box-shadow: none;
        padding: 0.2em;
      }
      button[popovertarget="popup"].closer:active {
        box-shadow: inset 0 0 0.1em 0.1em;
      }
    `,this.shadowRoot.appendChild(t)}js(){function t(){return HTMLElement.prototype.hasOwnProperty("popover")}const e=this.shadowRoot.getElementById("popup");t()&&e&&document.addEventListener("keydown",a=>{a.key==="h"&&e.togglePopover?.()});const s=this.shadowRoot.querySelector('dialog[id^="popup"]');s&&(s.addEventListener("beforetoggle",function(a){a.newState==="open"||a.newState}),s.addEventListener("toggle",a=>{const c=a;c.newState==="open"||c.newState,this.toggleFunction&&new Function(this.toggleFunction)()}))}html(){const e=document.createRange().createContextualFragment(`

    <button popovertarget="popup">Clique aqui</button>

    <dialog id="popup" popover="auto">
      <button class="closer" popovertarget="popup" popovertargetaction="hide">
        X
      </button>
      <div class="content">
        <slot></slot>
      </div>
    </dialog>
   `);this.shadowRoot.appendChild(e)}}const R=A.tag;customElements.get(R)||customElements.define(R,A);class H extends HTMLElement{static{this.tag="mozg-service-worker"}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.css(),this.html(),this.js()}disconnectedCallback(){for(;this.shadowRoot.firstChild;)this.shadowRoot.removeChild(this.shadowRoot.firstChild)}static get observedAttributes(){return["toggle","another-attribute"]}attributeChangedCallback(t,e,o){}adoptedCallback(){}css(){const t=document.createElement("style");t.textContent=`
    `,this.shadowRoot.appendChild(t)}js(){(async()=>{if(!document.querySelector("link[rel='manifest']")){console.error("Manifest não encontrado! Algumas funcionalidades do PWA podem não funcionar.");return}})(),(async()=>{if("serviceWorker"in navigator)try{navigator.serviceWorker.getRegistrations().then(async o=>{if(o.length===0){const s=await navigator.serviceWorker.register("service-worker.js",{scope:"./"});s.installing||s.waiting||s.active}})}catch(o){console.error(`Registration failed with ${o}`)}})()}html(){const e=document.createRange().createContextualFragment(`
   `);this.shadowRoot.appendChild(e)}}const x=H.tag;customElements.get(x)||customElements.define(x,H);class V extends HTMLElement{static{this.tag="mozg-web-share"}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.css(),this.html(),this.js()}disconnectedCallback(){if(this.shadowRoot)for(;this.shadowRoot.firstChild;)this.shadowRoot.removeChild(this.shadowRoot.firstChild)}static get observedAttributes(){return["toggle","another-attribute"]}attributeChangedCallback(t,e,o){}adoptedCallback(){}css(){const t=document.createElement("style");t.textContent=`
    :host {

    }

    a {
    text-decoration: none;
    }

    a img {
      width: 50px;
    }
    `,this.shadowRoot.appendChild(t)}js(){(async()=>{try{const e=this.shadowRoot.querySelector("#shareBtn");if(!navigator.share){e&&(e.style.display="none");return}if(!e)return;e.addEventListener("click",()=>{const o=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
      </svg>`,s=new Blob([o],{type:"image/svg+xml"}),a=new File([s],"imagem.svg",{type:"image/svg+xml"});navigator.share({url:window.location.href,title:"Isso pode te interessar!",text:"Clique no link para ver mais detalhes. 🚀"}).then(()=>{}).catch(c=>console.error("Erro ao compartilhar:",c))})}catch(e){console.error(`Registration failed with ${e}`)}})()}html(){const e=document.createRange().createContextualFragment(`
    <a href="javascript:void(0)">
      <img
        id="shareBtn"
        src="https://icons.iconarchive.com/icons/icons8/ios7/256/Very-Basic-Shared-icon.png"
      />
    </a>
   `);this.shadowRoot.appendChild(e)}}const E=V.tag;customElements.get(E)||customElements.define(E,V);class B extends HTMLElement{static{this.tag="mozg-web-worker"}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.css(),this.html(),this.js()}disconnectedCallback(){if(this.shadowRoot)for(;this.shadowRoot.firstChild;)this.shadowRoot.removeChild(this.shadowRoot.firstChild)}static get observedAttributes(){return["toggle","another-attribute"]}attributeChangedCallback(t,e,o){}adoptedCallback(){}css(){const t=document.createElement("style");t.textContent=`
    `,this.shadowRoot.appendChild(t)}js(){(async()=>{try{if(window.Worker){const e=new Worker("worker.js");e.postMessage([1,2]),e.onmessage=o=>{}}}catch(e){console.error(`Registration failed with ${e}`)}})()}html(){const e=document.createRange().createContextualFragment(`
   `);this.shadowRoot.appendChild(e)}}const S=B.tag;customElements.get(S)||customElements.define(S,B);class T extends HTMLElement{static{this.tag="mozg-window-management-api"}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.css(),this.html(),this.js()}disconnectedCallback(){if(this.shadowRoot)for(;this.shadowRoot.firstChild;)this.shadowRoot.removeChild(this.shadowRoot.firstChild)}static get observedAttributes(){return["mode"]}attributeChangedCallback(t,e,o){}adoptedCallback(){}css(){const t=document.createElement("style");t.textContent=`
    `,this.shadowRoot.appendChild(t)}js(){const t=[{name:" ",url:"https://mozg.com.br/"},{name:" ",url:"https://mozg.com.br/"},{name:" ",url:"https://mozg.com.br/"},{name:" ",url:"https://mozg.com.br/"}],e=this.shadowRoot.querySelector("section");let o,s=[];const a=51,c=1;"getScreenDetails"in window?($(),P()):h(t);function h(i){const m=document.createElement("ul");i.forEach(u=>{const g=document.createElement("li"),n=document.createElement("a");n.textContent=u.name,n.href=u.url,g.appendChild(n),m.appendChild(g)}),e?.appendChild(m)}function $(){const i=document.createElement("button");i.textContent="Open learning environment",e?.appendChild(i),i.addEventListener("click",v)}function P(){o=document.createElement("div"),o.id="block-warning",o.popover="manual",o.innerHTML=`
    <h2>Please disable popup blocking</h2>
    <p>Your browser is blocking the app's popup windows. Please enable popups and then try again.
    You can do this by clicking the icon to the right of your web address bar, selecting the "Always allow..."
    option, then clicking "Done".</p>

    <img src="popups-blocked.png" alt="Browser dialog window with title Popups blocked, showing options to allow popups or keep blocking them, with Done and Manage buttons at the bottom">

    <p><button id="popover-dismiss">OK, got it</button></p>
  `,document.body.append(o),document.getElementById("popover-dismiss")?.addEventListener("click",()=>{o?.hidePopover?.()})}function p(i,m,u,g,n){const l=`left=${i},top=${m},width=${u},height=${g}`,r=window.open(n,"_blank",l);r===null?(w(),o?.showPopover?.()):s.push(r)}function w(){s.forEach(i=>{i.close()}),s=[]}async function v(){const i=await window.getScreenDetails(),m=i.screens.length;if(m===1){const n=i.screens[0],l=Math.floor((n.availWidth-2*c)/2),r=Math.floor((n.availHeight-2*a)/2);p(n.availLeft,n.availTop,l,r,t[0].url),p(l+n.availLeft+c,n.availTop,l,r,t[1].url),p(n.availLeft,r+n.availHeight+a,l,r,t[2].url),p(l+n.availLeft+c,r+n.availHeight+a,l,r,t[3].url)}else{const n=i.screens[0],l=i.screens[1],r=Math.floor((n.availWidth-3*c)/3),f=Math.floor(n.availHeight-a);p(n.availLeft,n.availTop,r,f,t[1].url),p(n.availLeft+r+c,n.availTop,r,f,t[2].url),p(n.availLeft+(r+c)*2,n.availTop,r,f,t[3].url),p(l.availLeft,l.availTop,l.availWidth,l.availHeight,t[0].url)}const u=setInterval(g,250);function g(){s.some(n=>n.closed)&&(w(),clearInterval(u))}window.addEventListener("beforeunload",()=>{w()}),i.addEventListener("screenschange",()=>{i.screens.length,s.length>0&&(w(),v())})}}html(){const e=document.createRange().createContextualFragment(`
<section></section>
   `);this.shadowRoot.appendChild(e)}}const L=T.tag;customElements.get(L)||customElements.define(L,T);
