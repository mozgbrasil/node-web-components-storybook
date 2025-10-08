class n extends HTMLElement{static{this.tag="mozg-popover-api"}constructor(e={}){super(),this.options={status:e.status??"success",msg:e.msg??"success"},this.attachShadow({mode:"open"})}connectedCallback(){this.css(),this.html(),this.js()}disconnectedCallback(){for(;this.shadowRoot.firstChild;)this.shadowRoot.removeChild(this.shadowRoot.firstChild)}static get observedAttributes(){return["mode"]}attributeChangedCallback(e,s,t){}adoptedCallback(){}css(){const e=document.createElement("style");e.textContent=`
    .failure {
      background: rgb(255, 100, 100);
    }

    .success {
      background: #ecf4de;
    }

    [popover] { 
      padding: 10px; 
      margin-bottom: 10px;
      border- bottom: 2px solid #61c250
    }

    :popover-open {
      position: fixed;
      inset: unset;
      right: 5px;
      bottom: 5px;  
    } 
    `,document.head.appendChild(e)}js(){}html(){const s=document.createRange().createContextualFragment(`
   `);document.body.appendChild(s)}makeToast(){const e=this.options.status,s=this.options.msg,t=document.createElement("article");t.popover="manual",t.classList.add("toast"),t.classList.add("newest"),t.classList.add(e),t.textContent=s,document.body.appendChild(t),t.showPopover(),setTimeout(()=>{t.hidePopover(),t.remove()},4e3),t.addEventListener("toggle",o=>{o.newState==="open"&&this.moveToastsUp()})}moveToastsUp(){document.querySelectorAll(".toast").forEach(s=>{if(s.classList.contains("newest"))s.style.bottom="5px",s.classList.remove("newest");else{const t=s.style.bottom.replace("px",""),o=parseInt(t)+50+2;s.style.bottom=`${o}px`}})}showToast(){this.connectedCallback(),this.makeToast()}}const a=n.tag;customElements.get(a)||customElements.define(a,n);export{n as P};
