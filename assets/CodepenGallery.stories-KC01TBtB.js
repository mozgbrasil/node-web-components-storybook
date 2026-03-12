import{l as ae}from"./helpers-DXE-UcnP.js";import"./WebMaster-CMkTxq6E.js";import"./MeuComponenteVanilla-DuG7ZvNz.js";import"./PopoverApi-BQ9YlHyL.js";import"./WindowManagementApi-DRnzi_VN.js";import"./SignedOut-CwePJvlq.js";import"./index-nuYtCEEu.js";import"./iframe-CI5ynypL.js";class re extends HTMLElement{static{this.tag="mozg-simple-css-waves"}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.css(),this.html(),this.js()}disconnectedCallback(){if(this.shadowRoot)for(;this.shadowRoot.firstChild;)this.shadowRoot.removeChild(this.shadowRoot.firstChild)}static get observedAttributes(){return["mode"]}attributeChangedCallback(e,t,o){}adoptedCallback(){}css(){const e=document.createElement("style");e.textContent=`

:host {
  display: flex;
  justify-content: center;
  align-items: center;

}

.flex { /*Flexbox for containers*/
display: flex;
justify-content: center;
align-items: center;
text-align: center;
}

.header {
  bottom: 0;
  width: 100%;
  position: absolute;
  text-align: center;
  background: linear-gradient(
    60deg,
    rgba(84, 58, 183, 1) 0%,
    rgba(0, 172, 193, 1) 100%
  );
  color: white;
}

.inner-header {
  height: 65vh;
  width: 100%;
  margin: 0;
  padding: 0;
}

.waves {
  margin-bottom: -7px;
}

/* Animation */

.parallax > use {
  animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
}
.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}
.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}
.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}
.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}
@keyframes move-forever {
  0% {
    transform: translate3d(-90px, 0, 0);
  }
  100% {
    transform: translate3d(85px, 0, 0);
  }
}
  `,this.shadowRoot?.appendChild(e)}js(){}html(){const t=document.createRange().createContextualFragment(`
  <div class="header">
    <div class="inner-header flex">
      <h1><slot></slot></h1>
    </div>

    <div>
      <svg
        class="waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shape-rendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g class="parallax">
          <use
            xlink:href="#gentle-wave"
            x="48"
            y="0"
            fill="rgba(255,255,255,0.7)"
          />
          <use
            xlink:href="#gentle-wave"
            x="48"
            y="3"
            fill="rgba(255,255,255,0.5)"
          />
          <use
            xlink:href="#gentle-wave"
            x="48"
            y="5"
            fill="rgba(255,255,255,0.3)"
          />
          <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
        </g>
      </svg>
    </div>
  </div>


`);this.shadowRoot?.appendChild(t)}}const ze=re.tag;customElements.get(ze)||customElements.define(ze,re);function ie(M){if(!Array.isArray(M)||M.length===0)return;const e=M.splice(0,M.length);for(const t of e)try{t()}catch{}}class ce extends HTMLElement{constructor(){super(),this.#e="SNICKERS",this.#t=!0,this.#o=this.#r.bind(this),this._cleanupFns=[],this._initialized=!1,console.log("🏗️ CustomSnackbar: Constructor executado"),this.attachShadow({mode:"open"}),this.#i()}static{this.tag="mozg-custom-snackbar"}#e;#t;#o;static get observedAttributes(){return["title","visible"]}#i(){this.#e=this.getAttribute("title")||"SNICKERS",this.#t=this.getAttribute("visible")!=="false"}connectedCallback(){console.log("🔌 CustomSnackbar: Conectado ao DOM"),!this._initialized&&(this.render(),this.#s(),this._initialized=!0)}disconnectedCallback(){console.log("🔌 CustomSnackbar: Desconectado do DOM"),this.#n(),this.shadowRoot&&(this.shadowRoot.innerHTML=""),this._initialized=!1}attributeChangedCallback(e,t,o){switch(console.log(`🔄 CustomSnackbar: Atributo '${e}' alterado de '${t}' para '${o}'`),e){case"title":this.#e=o||"SNICKERS",this.#c();break;case"visible":this.#t=o!=="false",this.#l();break}}adoptedCallback(){console.log("📦 CustomSnackbar: Movido para novo documento"),this.render()}#s(){this.addEventListener("click",this.#o),this._cleanupFns.push(()=>this.removeEventListener("click",this.#o))}#n(){this.removeEventListener("click",this.#o),ie(this._cleanupFns)}#r(){console.log("🖱️ CustomSnackbar: Clicado!"),this.dispatchEvent(new CustomEvent("snackbar-clicked",{detail:{title:this.#e},bubbles:!0}))}#c(){const e=this.shadowRoot?.querySelector(".title");e&&(e.textContent=this.#e,this.#a())}#a(){const e=this.shadowRoot?.querySelector(".rectangle"),t=this.shadowRoot?.querySelector(".container"),o=this.shadowRoot?.querySelector(".title");if(!e||!t||!o)return;const c=this.#e.length,i=67.5,h=85,a=15;let n,s,p;if(c<=8)n=i,s=h,p=a;else if(c<=15){const l=1+(c-8)*.15;n=i*l,s=Math.min(h*l,95),p=Math.max(a*(1-(c-8)*.05),8)}else{const l=1+(c-8)*.12;n=i*l,s=Math.min(h*l,95),p=Math.max(a*(1-(c-8)*.08),6)}e.style.transition="width 0.3s ease-out",e.style.width=`${n}vmin`,t.style.transition="width 0.3s ease-out",t.style.width=`${s}%`,o.style.transition="font-size 0.3s ease-out",o.style.fontSize=`${p}vmin`,e.style.setProperty("--dynamic-width",`${n-2.5}vmin`),console.log(`📏 Ajustando: "${this.#e}" (${c} chars) -> W:${n.toFixed(1)}vmin, Container:${s.toFixed(1)}%, Font:${p.toFixed(1)}vmin`)}#l(){const e=this.shadowRoot?.querySelector(".snackbar");e&&(e.style.display=this.#t?"flex":"none")}setTitle(e){this.setAttribute("title",e)}getTitle(){return this.#e}show(){this.setAttribute("visible","true")}hide(){this.setAttribute("visible","false")}toggle(){this.setAttribute("visible",this.#t?"false":"true")}render(){const t=`
                    
                    <style>
                        @import url("https://fonts.cdnfonts.com/css/snickers");

                        :host {
                            --edge-height: 33.75vmin;
                            --background: linear-gradient(
                                #562a06 0%,
                                #4e2505 10%,
                                #461f04 50%,
                                #3e1700 100%
                            );
                        }

                        .snackbar {
                            display: flex;
                            flex-direction: row;
                            align-items: center;
                            justify-content: center;
                            cursor: pointer;
                            transition: transform 0.2s ease;
                        }

                        .snackbar:hover {
                            transform: scale(1.02);
                        }

                        .left-edge {
                            width: 7.5vmin;
                            height: var(--edge-height);
                            background: var(--background);
                            --mask: radial-gradient(1.22vmin at 1.7vmin 50%, #000 99%, #0000 101%) 0
                                    calc(50% - 2vmin) / 100% 4vmin,
                                radial-gradient(1.22vmin at -0.7vmin 50%, #0000 99%, #000 101%) 1vmin 50%/100%
                                    4vmin repeat-y;
                            -webkit-mask: var(--mask);
                            mask: var(--mask);
                        }

                        .left-trapezoid {
                            position: relative;
                            width: 3.75vmin;
                            height: var(--edge-height);
                            clip-path: polygon(100% 5.6%, 100% 94.4%, 0 100%, 0 0);
                            background: var(--background);
                        }

                        .rectangle {
                            height: 30vmin;
                            width: 67.5vmin;
                            background: var(--background);
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            position: relative;
                            --dynamic-width: 65vmin;
                        }

                        .rectangle::before {
                            content: "";
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            height: 25vmin;
                            width: var(--dynamic-width, 65vmin);
                            background: linear-gradient(
                                #997254 0%,
                                #6b3e2b 20%,
                                #6b3e2b 60%,
                                #3d1602 100%
                            );
                            border-radius: 3vmin;
                            filter: blur(1.5vmin);
                            z-index: 1;
                            transition: width 0.3s ease-out;
                        }

                        .container {
                            width: 85%;
                            height: 18vmin;
                            transform: skew(-20deg);
                            border-radius: 20px 0 20px 0;
                            border: 1.5vmin solid #e31e24;
                            background: #ffffff;
                            text-align: center;
                            z-index: 2;
                            position: relative;
                            transition: width 0.3s ease-out;
                        }

                        .title {
                            position: absolute;
                            font-family: "Snickers", sans-serif;
                            font-size: 15vmin;
                            color: #263d8d;
                            text-shadow: -0.5vmin 0vmin 0 #ffffff, -0.6vmin 0.1vmin 0 #263d8d,
                                -0.4vmin -0.1vmin 0 #263d8d, -0.6vmin -0.1vmin 0 #263d8d,
                                -0.4vmin 0.1vmin 0 #263d8d;
                            z-index: 3;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            white-space: nowrap;
                            transition: font-size 0.3s ease-out;
                        }

                        .right-trapezoid {
                            position: relative;
                            width: 3.75vmin;
                            height: var(--edge-height);
                            clip-path: polygon(0 5.6%, 0 94.4%, 100% 100%, 100% 0);
                            background: var(--background);
                        }

                        .right-edge {
                            width: 7.5vmin;
                            height: var(--edge-height);
                            background: var(--background);
                            --mask: radial-gradient(
                                        1.22vmin at calc(100% - 1.7vmin) 50%,
                                        #000 99%,
                                        #0000 101%
                                    )
                                    0 calc(50% - 2vmin) / 100% 4vmin,
                                radial-gradient(1.22vmin at calc(100% + 0.7vmin) 50%, #0000 99%, #000 101%)
                                    calc(100% - 1vmin) 50%/100% 4vmin repeat-y;
                            -webkit-mask: var(--mask);
                            mask: var(--mask);
                        }
                    </style>
                
                    <div class="snackbar" style="display: ${this.#t?"flex":"none"}">
                        <div class="left-edge"></div>
                        <div class="left-trapezoid"></div>
                        <div class="rectangle">
                            <div class="container"></div>
                            <div class="title">${this.#e}</div>
                        </div>
                        <div class="right-trapezoid"></div>
                        <div class="right-edge"></div>
                    </div>
                `;this.shadowRoot&&(this.shadowRoot.innerHTML=t),this.#a(),console.log("🎨 CustomSnackbar: Renderizado com título:",this.#e)}}const Te=ce.tag;customElements.get(Te)||customElements.define(Te,ce);class le extends HTMLElement{static{this.tag="mozg-spinner-pop-effect"}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}disconnectedCallback(){if(this.shadowRoot)for(;this.shadowRoot.firstChild;)this.shadowRoot.removeChild(this.shadowRoot.firstChild)}static get observedAttributes(){return["mode"]}attributeChangedCallback(e,t,o){}adoptedCallback(){}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`
<style>
  * {
    border: 0;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  :host {
    --hue: 223;
    --sat: 10%;
    --bg: hsl(var(--hue), var(--sat), 90%);
    --fg: hsl(var(--hue), var(--sat), 10%);
    --hue-success: 126;
    --success1: hsl(var(--hue-success), 90%, 40%);
    --success2: hsl(var(--hue-success), 90%, 24%);
    --periwinkle: hsl(240, 90%, 70%);
    --light-blue: hsl(210, 90%, 70%);
    --orange: hsl(15, 90%, 70%);
    --magenta: hsl(300, 90%, 70%);
    --light-green: hsl(105, 40%, 70%);
    --light-teal: hsl(150, 40%, 70%);
    --purple: hsl(270, 90%, 70%);
    --trans-dur: 0.3s;
    font-size: clamp(1rem, 0.95rem + 0.25vw, 1.25rem);
  }
  :host {
    /* background-color: var(--bg); */
    color: var(--fg);
    display: flex;
    font: 1em/1.5 sans-serif;
    height: 100vh;
    transition: background-color var(--trans-dur), color var(--trans-dur);
  }
  .spinner {
    color: var(--success2);
    overflow: visible;
    margin: auto;
    width: 8em;
    height: auto;
    transition: color var(--trans-dur);
  }
  .spinner circle,
  .spinner g,
  .spinner path {
    animation-duration: 4s;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
  }
  .spinner__check,
  .spinner__pop-start,
  .spinner__worm {
    transform-origin: 24px 24px;
  }
  .spinner__check {
    animation-name: check;
  }
  .spinner__pop-dot {
    animation-name: pop-dot;
  }
  .spinner__pop-dot-group {
    animation-name: pop-dot-group1;
  }
  .spinner__pop-dot-group + .spinner__pop-dot-group {
    animation-name: pop-dot-group2;
  }
  .spinner__pop-end {
    animation-name: pop-end;
  }
  .spinner__pop-start {
    animation-name: pop-start;
  }
  .spinner__worm {
    animation-name: worm;
  } /* Dark theme */
  @media (prefers-color-scheme: dark) {
    :root {
      --bg: hsl(var(--hue), var(--sat), 10%);
      --fg: hsl(var(--hue), var(--sat), 90%);
    }
    .spinner {
      color: var(--success1);
    }
  }
  /* Animations */
  @keyframes check {
    from,
    64% {
      stroke-dashoffset: -36.7;
      transform: scale(1);
    }
    75%,
    77% {
      animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1);
      stroke-dashoffset: 13.7;
      transform: scale(1);
    }
    79% {
      animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1);
      stroke-dashoffset: 13.7;
      transform: scale(0.4);
    }
    87% {
      animation-timing-function: cubic-bezier(0.32, 0, 0.67, 0);
      stroke-dashoffset: 13.7;
      transform: scale(1.4);
    }
    93%,
    to {
      stroke-dashoffset: 13.7;
      transform: scale(1);
    }
  }
  @keyframes pop-dot {
    from,
    80% {
      animation-timing-function: cubic-bezier(0.33, 1, 0.68, 1);
      transform: translate(0, 6px);
    }
    90%,
    to {
      transform: translate(0, 0);
    }
  }
  @keyframes pop-dot-group1 {
    from,
    82.5%,
    90%,
    to {
      opacity: 0;
    }
    85%,
    87.5% {
      opacity: 1;
    }
  }
  @keyframes pop-dot-group2 {
    from,
    82.5%,
    to {
      opacity: 0;
    }
    85%,
    90% {
      opacity: 1;
    }
  }
  @keyframes pop-end {
    from {
      animation-timing-function: steps(1, end);
      opacity: 0;
      r: 18px;
      stroke-width: 4px;
    }
    82.5% {
      animation-timing-function: linear;
      opacity: 1;
      r: 18px;
      stroke-width: 4px;
    }
    84%,
    to {
      opacity: 0;
      r: 19px;
      stroke-width: 3px;
    }
  }
  @keyframes pop-start {
    from {
      animation-timing-function: steps(1, end);
      opacity: 0;
      transform: scale(0.35);
    }
    76% {
      animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1);
      opacity: 1;
      transform: scale(0.35);
    }
    82.5% {
      animation-timing-function: steps(1, start);
      opacity: 1;
      transform: scale(1);
    }
    to {
      opacity: 0;
      transform: scale(1);
    }
  }
  @keyframes worm {
    from {
      stroke-dashoffset: -51.84;
      transform: rotate(-119deg);
    }
    60% {
      stroke-dashoffset: -51.84;
      transform: rotate(961deg);
    }
    64% {
      animation-timing-function: cubic-bezier(0.61, 1, 0.88, 1);
      stroke-dashoffset: -51.84;
      transform: rotate(1033deg);
    }
    72.5%,
    to {
      stroke-dashoffset: -138.23;
      transform: rotate(1033deg);
    }
  }
</style>

<svg
  class="spinner"
  viewBox="0 0 48 48"
  role="img"
  aria-label="A partial ring that rotates and then is shaped as a checkmark, which pops out yielding confetti"
>
  <g fill="none" stroke="currentcolor" stroke-linecap="round" stroke-width="4">
    <circle
      class="spinner__worm"
      cx="24"
      cy="24"
      r="22"
      stroke-dasharray="138.23 138.23"
      stroke-dashoffset="-51.84"
      transform="rotate(-119)"
    />
    <circle
      class="spinner__pop-end"
      stroke="var(--light-green)"
      cx="24"
      cy="24"
      r="18"
      opacity="0"
    />
    <g fill="currentcolor" stroke="none">
      <circle
        class="spinner__pop-start"
        fill="var(--light-green)"
        cx="24"
        cy="24"
        r="20"
        opacity="0"
      />
      <g>
        <g class="spinner__pop-dot-group" opacity="0">
          <circle
            class="spinner__pop-dot"
            fill="var(--periwinkle)"
            cx="22"
            cy="5"
            r="1.5"
          />
        </g>
        <g class="spinner__pop-dot-group" opacity="0">
          <circle
            class="spinner__pop-dot"
            fill="var(--light-blue)"
            cx="26"
            cy="2"
            r="1.5"
          />
        </g>
      </g>
      <g transform="rotate(51.43,24,24)">
        <g class="spinner__pop-dot-group" opacity="0">
          <circle
            class="spinner__pop-dot"
            fill="var(--orange)"
            cx="22"
            cy="5"
            r="1.5"
          />
        </g>
        <g class="spinner__pop-dot-group" opacity="0">
          <circle
            class="spinner__pop-dot"
            fill="var(--magenta)"
            cx="26"
            cy="2"
            r="1.5"
          />
        </g>
      </g>
      <g transform="rotate(102.86,24,24)">
        <g class="spinner__pop-dot-group" opacity="0">
          <circle
            class="spinner__pop-dot"
            fill="var(--light-green)"
            cx="22"
            cy="5"
            r="1.5"
          />
        </g>
        <g class="spinner__pop-dot-group" opacity="0">
          <circle
            class="spinner__pop-dot"
            fill="var(--light-teal)"
            cx="26"
            cy="2"
            r="1.5"
          />
        </g>
      </g>
      <g transform="rotate(154.29,24,24)">
        <g class="spinner__pop-dot-group" opacity="0">
          <circle
            class="spinner__pop-dot"
            fill="var(--purple)"
            cx="22"
            cy="5"
            r="1.5"
          />
        </g>
        <g class="spinner__pop-dot-group" opacity="0">
          <circle
            class="spinner__pop-dot"
            fill="var(--magenta)"
            cx="26"
            cy="2"
            r="1.5"
          />
        </g>
      </g>
      <g transform="rotate(205.71,24,24)">
        <g class="spinner__pop-dot-group" opacity="0">
          <circle
            class="spinner__pop-dot"
            fill="var(--light-teal)"
            cx="22"
            cy="5"
            r="1.5"
          />
        </g>
        <g class="spinner__pop-dot-group" opacity="0">
          <circle
            class="spinner__pop-dot"
            fill="var(--light-blue)"
            cx="26"
            cy="2"
            r="1.5"
          />
        </g>
      </g>
      <g transform="rotate(257.14,24,24)">
        <g class="spinner__pop-dot-group" opacity="0">
          <circle
            class="spinner__pop-dot"
            fill="var(--periwinkle)"
            cx="22"
            cy="5"
            r="1.5"
          />
        </g>
        <g class="spinner__pop-dot-group" opacity="0">
          <circle
            class="spinner__pop-dot"
            fill="var(--light-blue)"
            cx="26"
            cy="2"
            r="1.5"
          />
        </g>
      </g>
      <g transform="rotate(308.57,24,24)">
        <g class="spinner__pop-dot-group" opacity="0">
          <circle
            class="spinner__pop-dot"
            fill="var(--purple)"
            cx="22"
            cy="5"
            r="1.5"
          />
        </g>
        <g class="spinner__pop-dot-group" opacity="0">
          <circle
            class="spinner__pop-dot"
            fill="var(--light-teal)"
            cx="26"
            cy="2"
            r="1.5"
          />
        </g>
      </g>
    </g>
    <path
      class="spinner__check"
      d="M 17 25 L 22 30 C 22 30 32.2 19.8 37.3 14.7 C 41.8 10.2 39 7.9 39 7.9"
      stroke-dasharray="36.7 36.7"
      stroke-dashoffset="-36.7"
    />
  </g>
</svg>

  `)}}const Be=le.tag;customElements.get(Be)||customElements.define(Be,le);class de extends HTMLElement{static{this.tag="mozg-squircle"}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.css(),this.html(),this.js()}disconnectedCallback(){if(this.shadowRoot)for(;this.shadowRoot.firstChild;)this.shadowRoot.removeChild(this.shadowRoot.firstChild)}static get observedAttributes(){return["mode"]}attributeChangedCallback(e,t,o){}adoptedCallback(){}css(){const e=document.createElement("style");e.textContent=`
      .svg-squircle {
        height: 0;
        width: 0;
      }

      .squircle {
        background: no-repeat;
        background-image: var(--background);
        position: relative;
        height: 200px;
        width: 200px;
        clip-path: url(#squircle);
        box-shadow: inset 0 -17px 15px 10px #000000aa,
          inset 0 2px 11px 17px #000000bb, inset 0 -38px 24px 10px #000000a6;
        border-radius: 83px;
      }
    `,document.head.appendChild(e);const t=document.createElement("style");t.textContent=`
      :host {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
      }

      .squircle {
        background: no-repeat;
        background-image: var(--background);
        position: relative;
        height: 200px;
        width: 200px;
        clip-path: url(#squircle);
        box-shadow: inset 0 -17px 15px 10px #000000aa,
          inset 0 2px 11px 17px #000000bb, inset 0 -38px 24px 10px #000000a6;
        border-radius: 83px;
      }
    `,this.shadowRoot?.appendChild(t)}js(){}html(){const t=document.createRange().createContextualFragment(`
    <svg class="svg-squircle" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id="squircle">
          <path
            d="
    M 100, 10
    C 160, 10 190, 40 190, 100
    C 190, 160 160, 190 100, 190
    C 40, 190 10, 160 10, 100
    C 10, 40 40, 10 100, 10
  "
            fill="#6a0dad"
          />
        </clipPath>
      </defs>
    </svg>
   `);document?.body&&document.body.appendChild(t);const c=document.createRange().createContextualFragment(`
    <div
    class="squircle"
    style="--background: url('https://picsum.photos/200')"
    ></div>
   `);this.shadowRoot?.appendChild(c)}}const Ae=de.tag;customElements.get(Ae)||customElements.define(Ae,de);class se extends HTMLElement{constructor(){super(),this._title="Default Title",this._content="",this._cleanupFns=[],this.attachShadow({mode:"open"}),this._title=this.getAttribute("title")||"Default Title",this._content=this.innerHTML||"",this.render()}static{this.tag="mozg-card-tilted"}connectedCallback(){const e={css:[{href:"https://fonts.googleapis.com/css?family=Baloo+2:400,800&display=swap",onload:()=>{},onerror:()=>{console.error("Falha ao carregar Baloo 2 CSS!")}}],js:[]};this.shadowRoot&&ae(this.shadowRoot,e).then(()=>{this.initComponent()}).catch(t=>{console.error("Erro ao carregar os recursos:",t)})}disconnectedCallback(){for(const e of this._cleanupFns)try{e()}catch{}if(this._cleanupFns=[],!!this.shadowRoot)for(;this.shadowRoot.firstChild;)this.shadowRoot.removeChild(this.shadowRoot.firstChild)}static get observedAttributes(){return["title","mode"]}attributeChangedCallback(e,t,o){e==="title"&&t!==o&&(this._title=o||"Default Title",this.updateTitle())}adoptedCallback(){}get title(){return this._title}set title(e){this._title!==e&&(this._title=e,this.setAttribute("title",e),this.updateTitle())}get content(){return this._content}set content(e){this._content!==e&&(this._content=e,this.updateContent())}updateTitle(){const e=this.shadowRoot?.querySelector(".card-text");e&&(e.textContent=this._title.toUpperCase())}updateContent(){const e=this.shadowRoot?.querySelector(".card-content");e&&(e.innerHTML=this._content)}initComponent(){const t=this.shadowRoot?.getElementById("ex1"),o=this.shadowRoot?.getElementById("ex1-layer");if(!t||!o)return;const c=(a,n,s)=>{const p=s.getBoundingClientRect(),l=-(n-p.y-p.height/2)/20,m=(a-p.x-p.width/2)/20;return`perspective(250px) rotateX(${l}deg) rotateY(${m}deg)`},i=(a,n)=>{const[s,p]=n;a.style.transform=c(s,p,a)},h=a=>{const n=[a.clientX,a.clientY],s=[n[0],n[1],o];window.requestAnimationFrame(()=>{i(o,s)})};t.onmousemove=h,this._cleanupFns.push(()=>{const a=this.shadowRoot?.getElementById("ex1");a&&(a.onmousemove=null)})}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`
<style>
:host {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  margin: 0px;
  overflow: hidden;
  font-family: sans-serif;
  // background-color: #f9cdad;
  font-family: "Baloo 2", cursive;
  padding: 10px 0 40px 0;
}

.card {
  background: #ece5ce;
  box-shadow: 15px 15px #83af9b;
  border-radius: 8px;
  max-width: 30vw;
}

.card-image {
  transform-origin: 500px 0px;
  font-size: 1.5rem;
  text-align: center;
  padding: 10px;
  margin: 0 auto;
  letter-spacing: 2px;
  font-family: "Baloo 2", sans-serif;
  font-weight: 700;
  color: #774f38;
}

.card-text {
  font-family: "Baloo 2", sans-serif;
  font-weight: 700;
  text-align: center;
  letter-spacing: 1px;
  color: #774f38;
  font-size: 0.55em;
  text-transform: uppercase;
  opacity: 0;
  position: relative;
  transition: opacity 0.05s linear;
}

.card-content {
  padding: 10px;
  font-family: "Baloo 2", sans-serif;
  color: #774f38;
  text-align: center;
  font-size: 0.8em;
  opacity: 0;
  transition: opacity 0.15s linear;
}

.card-title {
  text-align: center;
}

#ex1 {
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

#ex1-layer {
  margin: 0 auto;
  width: 220px;
  max-height: 120px;
  position: relative;
  transition: max-height 0.15s ease-out;
}

#ex1-layer:hover {
  max-height: 250px;
}

#ex1-layer:hover .card-text,
#ex1-layer:hover .card-content {
  opacity: 1;
}

#ex1-layer:after {
  transform: translatey(0px);
  animation: float2 5s ease-in-out infinite;
  content: ".";
  font-weight: bold;
  -webkit-text-fill-color: #ece5ce;
  text-shadow: 18px 18px #83af9b;
  text-align: left;
  font-size: 45px;
  width: 45px;
  height: 9px;
  line-height: 25px;
  border-radius: 9px;
  background-color: #ece5ce;
  position: absolute;
  display: block;
  bottom: -25px;
  left: 0;
  box-shadow: 18px 18px #83af9b;
  z-index: -2;
}

@keyframes float {
  0% { transform: translatey(0px); }
  50% { transform: translatey(-15px); }
  100% { transform: translatey(0px); }
}

@keyframes float2 {
  0% { line-height: 25px; transform: translatey(0px); }
  55% { transform: translatey(-15px); }
  60% { line-height: 8px; }
  100% { line-height: 25px; transform: translatey(0px); }
}
</style>

<div id="ex1">
  <div id="ex1-layer" class="card">
    <div class="card-image">
       ${this._title.toUpperCase()}
    </div>
    <div class="card-text">${this._title.toUpperCase()}</div>
    <div class="card-content">${this._content}</div>
  </div>
</div>
`)}}const Qe=se.tag;customElements.get(Qe)||customElements.define(Qe,se);class he extends HTMLElement{static{this.tag="mozg-inner-glow-card-animation"}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.css(),this.html(),this.js()}disconnectedCallback(){if(this.shadowRoot)for(;this.shadowRoot.firstChild;)this.shadowRoot.removeChild(this.shadowRoot.firstChild)}static get observedAttributes(){return["mode"]}attributeChangedCallback(e,t,o){}adoptedCallback(){}css(){const e=document.createElement("style");e.textContent=`
@property --a {
syntax: "<angle>";
initial-value: 0deg;
inherits: false;
}
    `,document.head.appendChild(e);const t=document.createElement("style");t.textContent=`
 .card {
  overflow: hidden;
  position: relative;
  border-radius: 0.5em;
  padding: 1em;
}

.card::before {
  position: absolute;
  inset: -1em;
  border: solid 1.25em;
  border-image: conic-gradient(from var(--a), #669900, #99cc33, #6ca3fe, #006699, #3399cc, #139f52, #61a9ff, #64a5ff, #ae6ed7, #ffcc00, #f1d6ff) 1;
  filter: blur(0.75em);
  animation: a 4s linear infinite;
  content: "";
}

@keyframes a {
  to {
    --a: 1turn;
  }
}
    `,this.shadowRoot?.appendChild(t)}js(){}html(){const t=document.createRange().createContextualFragment(`
<div class="card">
<slot></slot>
</div>
  `);this.shadowRoot?.appendChild(t)}}const Pe=he.tag;customElements.get(Pe)||customElements.define(Pe,he);class pe extends HTMLElement{constructor(){super(),this._cleanupFns=[],this.attachShadow({mode:"open"})}static{this.tag="mozg-film-grain"}connectedCallback(){this.css(),this.html(),this.js()}disconnectedCallback(){for(const e of this._cleanupFns)try{e()}catch{}if(this._cleanupFns=[],!!this.shadowRoot)for(;this.shadowRoot.firstChild;)this.shadowRoot.removeChild(this.shadowRoot.firstChild)}static get observedAttributes(){return["mode"]}attributeChangedCallback(e,t,o){}adoptedCallback(){}css(){const e=document.createElement("style");e.textContent=`
:host {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
}

canvas {
  position: absolute;
  mix-blend-mode: hard-light;
  top: 0;
  left: 0;
}

#scratch {
  filter: url(#disp-1);
}

svg {
  display: none;
}
    `,this.shadowRoot?.appendChild(e)}js(){const t=this.shadowRoot?.getElementById("noise"),o=this.shadowRoot?.getElementById("seed");if(!t)return;const c=t.getContext("2d");if(!c)return;const i=(p,l)=>{const m=this.shadowRoot?.getElementById("scratch");if(!m)return;const r=m.getContext("2d");r&&(m.width=window.innerWidth,m.height=window.innerHeight,r.strokeStyle=Math.random()>.2?"rgba(255,255,255,0.6)":"black",r.lineWidth=~~(Math.random()*3)+1,r.beginPath(),r.moveTo(p,0),r.lineTo(p,l),r.stroke(),Math.random()>.25&&i(Math.random()*t.width*1,t.height))},h=()=>{t.width=window.innerWidth,t.height=window.innerHeight,a()},a=()=>{const p=t.width,l=t.height,m=c.createImageData(p,l),r=m.data;for(let d=0;d<r.length;d+=4){const u=Math.random()*200;r[d]=u,r[d+1]=u,r[d+2]=u,r[d+3]=80}c.putImageData(m,0,0)};h(),window.addEventListener("resize",h),this._cleanupFns.push(()=>window.removeEventListener("resize",h));const n=setInterval(()=>{const p=this.shadowRoot?.getElementById("scratch");if(p){a(),o&&"setAttribute"in o&&o.setAttribute("seed",~~(Math.random()*1e3));const l=p.getContext("2d");if(!l)return;const m=Math.floor(Math.random()*15);for(let r=0;r<m;r++){const d=Math.random()*p.width,u=Math.random()*p.height,f=Math.floor(Math.random()*5)+1;l.beginPath(),l.arc(d,u,f,0,Math.PI*2),l.fillStyle="black",l.fill()}}else clearInterval(n)},100);this._cleanupFns.push(()=>clearInterval(n));const s=setInterval(()=>{this.shadowRoot?.getElementById("scratch")?i(Math.random()*t.width*12,t.height):clearInterval(s)},200);this._cleanupFns.push(()=>clearInterval(s))}html(){const t=document.createRange().createContextualFragment(`
<canvas id="noise"></canvas>
<canvas id="scratch"></canvas>

<svg class="disp">
  <filter id="disp-1">
    <feTurbulence id="seed" type="fractalNoise" baseFrequency="0.015" numOctaves="2" seed="0"></feTurbulence>
    <feDisplacementMap in="SourceGraphic" scale="20"></feDisplacementMap>
  </filter>
</svg>
  `);this.shadowRoot?.appendChild(t)}}const Xe=pe.tag;customElements.get(Xe)||customElements.define(Xe,pe);class me extends HTMLElement{constructor(){super(),this._cleanupFns=[],this.attachShadow({mode:"open"})}static{this.tag="mozg-embers"}connectedCallback(){this.render(),this.js()}disconnectedCallback(){for(const e of this._cleanupFns)try{e()}catch{}if(this._cleanupFns=[],!!this.shadowRoot)for(;this.shadowRoot.firstChild;)this.shadowRoot.removeChild(this.shadowRoot.firstChild)}static get observedAttributes(){return["mode"]}attributeChangedCallback(e,t,o){}adoptedCallback(){}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`
<style>
:host {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
}

canvas {
  position: absolute;
  mix-blend-mode: hard-light;
  top: 0;
  left: 0;
}
</style>

<canvas id="embersCanvas"></canvas>
  `)}js(){const e=this.shadowRoot?.getElementById("embersCanvas");if(!e)return;const t=e.getContext("2d");if(!t)return;const o=t;e.width=window.innerWidth,e.height=window.innerHeight;const c=e,i=o,h=[],a=200,n={maxSize:4,minSize:1,maxSpeed:7,minSpeed:.5,color:"rgba(255, 69, 0, 0.7)"},s=()=>{e.width=window.innerWidth,e.height=window.innerHeight};window.addEventListener("resize",s),this._cleanupFns.push(()=>window.removeEventListener("resize",s));class p{constructor(){this.reset()}reset(){this.x=Math.random()*c.width,this.y=c.height+Math.random()*100,this.size=n.minSize+Math.random()*(n.maxSize-n.minSize),this.speed=n.minSpeed+Math.random()*(n.maxSpeed-n.minSpeed),this.opacity=1,this.fadeRate=Math.random()*.02+.005,this.color=n.color}update(){this.y-=this.speed,this.opacity-=this.fadeRate,this.opacity<=0&&this.reset()}draw(){i.beginPath(),i.arc(this.x,this.y,this.size,0,Math.PI*2),i.fillStyle=this.color.replace("0.7",this.opacity.toFixed(2)),i.fill()}}for(let r=0;r<a;r++)h.push(new p);let l;function m(){i.clearRect(0,0,c.width,c.height),h.forEach(r=>{r.update(),r.draw()}),l=requestAnimationFrame(m)}m(),this._cleanupFns.push(()=>{l!==void 0&&cancelAnimationFrame(l)})}}const We=me.tag;customElements.get(We)||customElements.define(We,me);class ue extends HTMLElement{static{this.tag="mozg-conditional-css-grid-template-areas"}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this.js()}disconnectedCallback(){for(;this.shadowRoot?.firstChild;)this.shadowRoot.removeChild(this.shadowRoot.firstChild)}static get observedAttributes(){return["mode"]}attributeChangedCallback(e,t,o){}adoptedCallback(){}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`
<style>
/*
Three different layouts with one set of HTML and optionally used inner container div.

This layout has two breakpoints; one at 30rem (~480px), and one at 60rem (~960px).
Take note of grid-template-areas and display: contents; in the CSS.

This code uses the following, optional technologies unavailable in old browsers:

* container queries: https://caniuse.com/css-container-queries;
* selector nesting: https://caniuse.com/css-nesting;
* logical properties: https://caniuse.com/css-logical-props.

Card background colors courtesy of:
https://stephango.com/flexoki
*/

:host {
	font-size: 1em;
	line-height: 1.6;
	padding-block: 4vh;
	padding-inline: 3vw;
}

.card-container {
	container-name: cards;
	container-type: inline-size;
}

/* Base styles + layout 1 */
.cards {
	display: grid;
	gap: 1rem;
	grid-auto-rows: 1fr;
	grid-template-areas:
		"cards-one"
		"cards-two"
		"cards-three"
		"cards-four"
		"cards-five";

	& .card {
		padding: 1em 1.5em;

		& h2 {
			margin-block-start: 0;
		}
	}

	& .card--one {
		background-color: #faeec6;
		grid-area: cards-one;
	}

	& .card--two {
		background-color: #edeecf;
		grid-area: cards-two;
	}

	& .card--three {
		background-color: #ddf1e4;
		grid-area: cards-three;
	}

	& .card--four {
		background-color: #e1eceb;
		grid-area: cards-four;
	}

	& .card--five {
		background-color: #f0eaec;
		grid-area: cards-five;
	}

	& .cards-sidebar {
		display: contents;
		grid-area: cards-sidebar;
	}
}

/* Layout 2 */
@container cards (30rem <= width < 60rem) {
	.cards {
		grid-template-areas:
			"cards-one cards-sidebar"
			"cards-two cards-sidebar";

		& .cards-sidebar {
			display: flex;
			flex-direction: column;
			gap: 1rem;
		}
	}
}

/* Layout 3 */
@container cards (width >= 60rem) {
	.cards {
		/* You must provide the same number of columns in each row, hence the replicated names below: */
		grid-template-areas:
			"cards-one  cards-one  cards-two  cards-two  cards-three cards-three"
			"cards-four cards-four cards-four cards-five cards-five  cards-five";
	}
}
</style>

<main class="main">
	<h1>Conditional CSS grid template areas</h1>

	<div class="card-container">
		<section class="cards">
			<article class="card card--one">
				<h2>Card 1</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
			</article>

			<article class="card card--two">
				<h2>Card 2</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
			</article>

			<div class="cards-sidebar">
				<article class="card card--three">
					<h2>Card 3</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</article>

				<article class="card card--four">
					<h2>Card 4</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</article>

				<article class="card card--five">
					<h2>Card 5</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</article>
			</div>
		</section>
	</div>
</main>
  `)}js(){}}const je=ue.tag;customElements.get(je)||customElements.define(je,ue);class fe extends HTMLElement{constructor(){super(),this._cleanupFns=[],this.attachShadow({mode:"open"})}static{this.tag="mozg-confetti-party"}connectedCallback(){this.css(),this.html(),this.js()}disconnectedCallback(){for(const e of this._cleanupFns)try{e()}catch{}for(this._cleanupFns=[];this.shadowRoot?.firstChild;)this.shadowRoot.removeChild(this.shadowRoot.firstChild)}static get observedAttributes(){return["mode"]}attributeChangedCallback(e,t,o){}adoptedCallback(){}css(){const e=document.createElement("style");e.textContent=`
:host {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
}

#confettiCanvas {
}
    `,this.shadowRoot?.appendChild(e)}js(){const e=this.shadowRoot?.getElementById("confettiCanvas");if(!e)return;const t=e.getContext("2d");if(!t)return;const o=t,c=["#FF3F8E","#04C2C9","#2E55C1","#F9D423"],i=e,h=o;let a=[];const n={x:0,y:0};class s{constructor(C,g,S,b,I,F){this.x=C,this.y=g,this.size=S,this.color=b,this.speedX=I,this.speedY=F}update(){this.x+=this.speedX,this.y+=this.speedY,this.size*=.98}draw(){h.fillStyle=this.color,h.beginPath(),h.arc(this.x,this.y,this.size,0,Math.PI*2),h.closePath(),h.fill()}}function p(){i.width=window.innerWidth,i.height=window.innerHeight}function l(f,C){for(let S=0;S<20;S++){const b=Math.random()*5+2,I=c[Math.floor(Math.random()*c.length)],F=(Math.random()*2-1)*2,v=(Math.random()*2-1)*2;a.push(new s(f,C,b,I,F,v))}}let m;function r(){h.clearRect(0,0,i.width,i.height),a=a.filter(f=>(f.update(),f.draw(),f.size>.5)),m=requestAnimationFrame(r)}function d(f){n.x=f.clientX,n.y=f.clientY}p(),r(),window.addEventListener("resize",p),this._cleanupFns.push(()=>window.removeEventListener("resize",p)),e.addEventListener("mousemove",d),this._cleanupFns.push(()=>e.removeEventListener("mousemove",d));const u=setInterval(()=>{l(n.x,n.y)},500);this._cleanupFns.push(()=>clearInterval(u)),this._cleanupFns.push(()=>{m!==void 0&&cancelAnimationFrame(m)})}html(){const t=document.createRange().createContextualFragment(`
   <canvas id="confettiCanvas"></canvas>
  `);this.shadowRoot?.appendChild(t)}}const He=fe.tag;customElements.get(He)||customElements.define(He,fe);class ge extends HTMLElement{static{this.tag="mozg-dom-structure-diagram"}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.css(),this.html(),this.js()}disconnectedCallback(){for(;this.shadowRoot?.firstChild;)this.shadowRoot.removeChild(this.shadowRoot.firstChild)}static get observedAttributes(){return["mode"]}attributeChangedCallback(e,t,o){}adoptedCallback(){}css(){const e=document.createElement("style");e.textContent=`
        /* It's supposed to look like a tree diagram */
      .tree,
      .tree ul,
      .tree li {
        list-style: none;
        margin: 0;
        padding: 0;
        position: relative;
      }

      .tree {
        margin: 0 0 1em;
        text-align: center;
      }
      .tree,
      .tree ul {
        display: table;
      }
      .tree ul {
        width: 100%;
      }
      .tree li {
        display: table-cell;
        padding: 0.5em 0;
        vertical-align: top;
      }
      /* _________ */
      .tree li:before {
        outline: solid 1px #666;
        content: "";
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
      }
      .tree li:first-child:before {
        left: 50%;
      }
      .tree li:last-child:before {
        right: 50%;
      }

      .tree code,
      .tree span {
        border: solid 0.1em #666;
        border-radius: 0.2em;
        display: inline-block;
        margin: 0 0.2em 0.5em;
        padding: 0.2em 0.5em;
        position: relative;
      }
      /* If the tree represents DOM structure */
      .tree code {
        font-family: monaco, Consolas, "Lucida Console", monospace;
      }

      /* | */
      .tree ul:before,
      .tree code:before,
      .tree span:before {
        outline: solid 1px #666;
        content: "";
        height: 0.5em;
        left: 50%;
        position: absolute;
      }
      .tree ul:before {
        top: -0.5em;
      }
      .tree code:before,
      .tree span:before {
        top: -0.55em;
      }

      /* The root node doesn't connect upwards */
      .tree > li {
        margin-top: 0;
      }
      .tree > li:before,
      .tree > li:after,
      .tree > li > code:before,
      .tree > li > span:before {
        outline: none;
      }

    `,this.shadowRoot?.appendChild(e)}onScriptLoaded(){return(function(t){function o(i,h=!0){if(!i)return null;const a=document.createElement("ul");h&&a.classList.add("tree");const n=i.children;for(const s of Array.from(n)){const p=document.createElement("li"),l=document.createElement("code");l.textContent=s.tagName.toLowerCase(),p.appendChild(l);const m=o(s,!1);m&&p.appendChild(m),a.appendChild(p)}return a.children.length?a:null}function c(){const i=t.querySelector("figure");if(!i)return;const h=o(document);h&&i.appendChild(h)}return c(),{}})(this.shadowRoot)}js(){this.onScriptLoaded()}html(){const t=document.createRange().createContextualFragment(`
    <figure>
      <figcaption>DOM structure diagram</figcaption>
    </figure>
   `);this.shadowRoot?.appendChild(t)}}const Ge=ge.tag;customElements.get(Ge)||customElements.define(Ge,ge);class ve extends HTMLElement{static{this.tag="mozg-interactive-grid-effect"}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.css(),this.html(),this.js()}disconnectedCallback(){for(;this.shadowRoot?.firstChild;)this.shadowRoot.removeChild(this.shadowRoot.firstChild)}static get observedAttributes(){return["mode"]}attributeChangedCallback(e,t,o){}adoptedCallback(){}css(){const e=document.createElement("style");e.textContent=`

:host {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
}

:host {
  --red-rgb: 248 113 113;
  --blue-rgb: 56 189 248;
  --green-rgb: 74 222 128;
  --yellow-rgb: 253 224 71;
  --background-rgb: 0 0 0;
}

:host {
  height: 100vh;
  width: 100%;

  background: #ccc;

  perspective: 2000px;
}

:host {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#container {
  width: 160rem;
  aspect-ratio: 1;
  display: grid;
  grid-template-rows: repeat(40, 1fr);
  grid-template-columns: repeat(40, 1fr);
  position: absolute;
  transform: rotateX(50deg) rotateY(-5deg) rotateZ(20deg) scale(1.25);
}

#container:after,
#container:before {
  content: "";
  position: absolute;
  inset: 0px;
  pointer-events: none;
}

#container:before {
  background-size: 5%;
  background-repeat: repeat;
  opacity: 0.25;
}

#container:after {
  background: radial-gradient(circle, transparent 25%, rgb(var(--background-rgb)) 80%);
}

.tile {
  border: 1px solid rgb(255 255 255 / 25%);
  transition: background-color 1500ms;
}

.tile:hover {
  transition-duration: 0ms;
}

.tile:nth-child(4n):hover {
  background-color: rgb(var(--red-rgb));
}

.tile:nth-child(4n + 1):hover {
  background-color: rgb(var(--blue-rgb));
}

.tile:nth-child(4n + 2):hover {
  background-color: rgb(var(--green-rgb));
}

.tile:nth-child(4n + 3):hover {
  background-color: rgb(var(--yellow-rgb));
}

.tile:nth-child(7n):hover {
  background-color: rgb(var(--blue-rgb));
}

.tile:nth-child(7n + 3):hover {
  background-color: rgb(var(--green-rgb));
}

.tile:nth-child(7n + 5):hover {
  background-color: rgb(var(--yellow-rgb));
}

.tile:nth-child(7n + 6):hover {
  background-color: rgb(var(--red-rgb));
}

.tile:nth-child(11n + 1):hover {
  background-color: rgb(var(--red-rgb));
}

.tile:nth-child(11n + 4):hover {
  background-color: rgb(var(--blue-rgb));
}

.tile:nth-child(11n + 7):hover {
  background-color: rgb(var(--green-rgb));
}

.tile:nth-child(11n + 10):hover {
  background-color: rgb(var(--yellow-rgb));
}
    `,this.shadowRoot?.appendChild(e)}js(){const e=this.shadowRoot?.querySelector("#container"),t=this.shadowRoot?.querySelector(".tile");if(e&&t)for(let o=0;o<1599;o++)e.appendChild(t.cloneNode())}html(){const t=document.createRange().createContextualFragment(`
  <div id="container">
    <div class="tile"></div>
  </div>
  `);this.shadowRoot?.appendChild(t)}}const Ne=ve.tag;customElements.get(Ne)||customElements.define(Ne,ve);class we extends HTMLElement{constructor(){super(),this._cleanupFns=[],this._moduleCleanup=null,this._initialized=!1,this.attachShadow({mode:"open"})}static{this.tag="mozg-sphere-packing2"}connectedCallback(){this._initialized||(this.css(),this.html(),this.js(),this._initialized=!0)}disconnectedCallback(){try{this._moduleCleanup?.()}catch{}for(ie(this._cleanupFns),this._moduleCleanup=null;this.shadowRoot?.firstChild;)this.shadowRoot.removeChild(this.shadowRoot.firstChild);this._initialized=!1}static get observedAttributes(){return["mode"]}attributeChangedCallback(e,t,o){}adoptedCallback(){}css(){const e=document.createElement("style");e.textContent=`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
  }

  #webgl-canvas {
    width: 100vw;
    height: 100vh;
  }
    `,this.shadowRoot?.appendChild(e)}js(){const e=document.createElement("script");e.type="module",e.textContent=`

      import Spheres2Background from 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.8/build/backgrounds/spheres2.cdn.min.js'

      const modules = {
        Spheres2Background
      };

      // console.log({ name: "import ", modules });

      Object.keys(modules).forEach(key => {
        window[key] = modules[key];
      });

      // Chamar a função de callback após o carregamento dos módulos
      if (typeof window.onScriptLoaded === 'function') {
        window.onScriptLoaded();
      }

    `,this.shadowRoot?.appendChild(e);const t=()=>{const o=(function(c){const i=window.Spheres2Background,h=c.getElementById("webgl-canvas"),a=i(h,{count:20,colors:[16711680,0,16777215],minSize:.5,maxSize:1}),n=()=>{a.spheres.setColors([16777215*Math.random(),16777215*Math.random(),16777215*Math.random()])};return c.addEventListener("click",n),{cleanup:()=>{try{c.removeEventListener("click",n)}catch{}try{const s=a;s&&typeof s.destroy=="function"&&s.destroy(),s&&typeof s.dispose=="function"&&s.dispose(),s&&s.spheres&&typeof s.spheres.dispose=="function"&&s.spheres.dispose()}catch{}}}})(this.shadowRoot);this._moduleCleanup=o&&typeof o.cleanup=="function"?o.cleanup:null,this._moduleCleanup&&this._cleanupFns.push(()=>this._moduleCleanup&&this._moduleCleanup())};window.onScriptLoaded=t,this._cleanupFns.push(()=>{if(window.onScriptLoaded===t)try{window.onScriptLoaded=void 0}catch{}})}html(){const t=document.createRange().createContextualFragment(`
<div id="app">
   <canvas id="webgl-canvas"></canvas>
</div>

  `);this.shadowRoot?.appendChild(t)}}const Ye=we.tag;customElements.get(Ye)||customElements.define(Ye,we);class xe extends HTMLElement{constructor(){super(),this._cleanupFns=[],this.attachShadow({mode:"open"})}static{this.tag="mozg-interactive-hover-spotlight-smooth-follow-effect"}connectedCallback(){this.render(),this.js()}disconnectedCallback(){for(const t of this._cleanupFns)try{t()}catch{}this._cleanupFns=[];const e=this.shadowRoot;if(e)for(;e.firstChild;)e.removeChild(e.firstChild)}static get observedAttributes(){return["mode"]}attributeChangedCallback(e,t,o){}adoptedCallback(){}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`
<style>
:host {
  --bg: hsl(132, 83%, 5%);
  --accent: hsl(84, 96%, 80%);
  --fsize: 16px;
  --circleMultiplier: 3;
  --circleSize: calc(calc(var(--circleMultiplier) * 1rem));
}

:host {
  height: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:host {
  display: grid;
  grid-template-rows: 1fr 3rem;
  font-size: var(--fsize);
  // background-color: var(--bg);
  position: relative;
  overflow: hidden;
  place-items: center;

  p {
    position: relative;
    z-index: 2;
    color: white;
    font-family: sans-serif;

    a {
      color: var(--accent);
    }
  }

  &:has(a:hover) #circle {
    --circleSize: calc(calc(var(--circleMultiplier) * 1.5rem));
    opacity: 0.2;
  }
}

#circle {
  pointer-events: none;
  width: var(--circleSize);
  height: var(--circleSize);
  background-color: var(--accent);
  border-radius: 50%;
  position: absolute;
  translate: var(--xpos) var(--ypos);
  transform-origin: center center;
  transition:
    width .2s ease-in-out,
    height .2s ease-in-out,
    border-radius .4s ease-in-out,
    opacity .2s ease-in-out;
  align-self: start;
  justify-self: start;
}

.gallery {
  display: flex;
  width: 80vw;
  overflow: visible;
  gap: min(5%, 2rem);
  container-type: inline-size;
  container-name: gallery;

  img {
    flex: 1;
    width: 100%;
    aspect-ratio: 3/4;
    min-height: 0;
    min-width: 0;
    position: relative;
    clip-path: inset(20px 10px round 12px);
    transition: all .2s cubic-bezier(0.72, 0.14, 0.3, 1.51);

    &:hover {
      translate: 0 -20%;
      scale: 2;
      z-index: 2;
      clip-path: inset(0px 0px round 12px);
      transition: translate .2s cubic-bezier(0.4, 0, 0.2, 1),
                scale .6s cubic-bezier(0.22, 0.61, 0.36, 1),
                clip-path 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
  }
}

@container gallery (min-width: 750px) {
  .gallery {
    img {
      &:hover {
        scale: 1.3;
      }
    }
  }
</style>

<div id="circle" style="--xpos:0;--ypos:0;"></div>

<div class="gallery">
  <slot></slot>
</div>

  `)}js(){const e=document.querySelector("body"),t=this.shadowRoot?.querySelector("#circle"),o=this.shadowRoot?.querySelectorAll(".gallery img"),c=this.shadowRoot?.querySelector(".gallery");let i=0,h=0,a=0,n=0,s=!1,p=null;const l=.1;let m;if(e&&t){const d=u=>{if(!s){const f=t.getBoundingClientRect();i=u.clientX-f.width/2,h=u.clientY-f.height/2}};e.addEventListener("pointermove",d),this._cleanupFns.push(()=>e.removeEventListener("pointermove",d))}const r=d=>{a+=(i-a)*l,n+=(h-n)*l,d.style.setProperty("--xpos",`${a}px`),d.style.setProperty("--ypos",`${n}px`),m=requestAnimationFrame(()=>r(d))};if(t&&r(t),this._cleanupFns.push(()=>{m!==void 0&&cancelAnimationFrame(m)}),o&&t){const d=new Map,u=new Map;o.forEach(f=>{const C=()=>{const b=(c?.getBoundingClientRect().width??0)<750?2:1.3,I=f.getBoundingClientRect(),F=I.width*b+20,v=I.height*b+20,x=-.2*I.height,y=I.left+window.scrollX+I.width/2,R=I.top+window.scrollY+I.height/2+x;i=y-F/2,h=R-v/2,(!s||p!==f)&&(t.style.width=`${F}px`,t.style.height=`${v}px`,t.style.borderRadius="22px"),s=!0,p=f},g=S=>{if(p===f){s=!1,p=null,t.style.width="var(--circleSize)",t.style.height="var(--circleSize)",t.style.borderRadius="50%";const b=t.getBoundingClientRect();i=S.clientX-b.width/2,h=S.clientY-b.height/2}};d.set(f,C),u.set(f,g),f.addEventListener("mouseenter",C),f.addEventListener("mouseleave",g)}),this._cleanupFns.push(()=>{o.forEach(f=>{const C=d.get(f),g=u.get(f);C&&f.removeEventListener("mouseenter",C),g&&f.removeEventListener("mouseleave",g)})})}}}const De=xe.tag;customElements.get(De)||customElements.define(De,xe);class be extends HTMLElement{static{this.tag="mozg-filter-image-gradient-backgrounds"}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.html(),this.css(),this.js()}disconnectedCallback(){const e=this.shadowRoot;if(e)for(;e.firstChild;)e.removeChild(e.firstChild)}static get observedAttributes(){return["mode"]}attributeChangedCallback(e,t,o){}adoptedCallback(){}css(){const e=document.createElement("style");e.textContent=`
  body {
    background-image: linear-gradient(45deg,
    #6666ff 0 7%,    /* Laranja */
    #66b3ff 0 14%,   /* Laranja claro */
    #6666ff 0 21%,   /* Roxo claro */
    #66ffff 0 28%,   /* Roxo */
    #6666ff 0 35%,   /* Azul escuro */
    #66b3ff 0 42%,   /* Azul claro */
    #66ffff 0 49%,   /* Ciano */
    #6666ff 0 60.5%, /* Verde claro */
    #66b3ff 0 72%,   /* Verde */
    #6666ff 0 79%,   /* Verde claro */
    #66b3ff 0 86%,   /* Amarelo */
    #6666ff 0 93%,   /* Laranja claro */
    #66b3ff 0 100%   /* Laranja */
    );
  }

  body:before,
  body:after {
    position: absolute;
    pointer-events: none;
    z-index: -10;
    content: "";
    width: 40vw;
    height: 80vh;
    top: 10vh;
    filter: url(#squiggly-0);
  }

  body:after {
    left: 55vw;
    background-image: linear-gradient(45deg,
    #6666ff 0 7%,    /* Laranja */
    #66b3ff 0 14%,   /* Laranja claro */
    #6666ff 0 21%,   /* Roxo claro */
    #66ffff 0 28%,   /* Roxo */
    #6666ff 0 35%,   /* Azul escuro */
    #66b3ff 0 42%,   /* Azul claro */
    #66ffff 0 49%,   /* Ciano */
    #6666ff 0 60.5%, /* Verde claro */
    #66b3ff 0 72%,   /* Verde */
    #6666ff 0 79%,   /* Verde claro */
    #66b3ff 0 86%,   /* Amarelo */
    #6666ff 0 93%,   /* Laranja claro */
    #66b3ff 0 100%   /* Laranja */
  );
  }

  body:before {
    left: 5vw;
    background-image: url("data:image/svg+xml;utf8,%3Csvg width=%222000%22 height=%221400%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3ClinearGradient id=%22a%22 gradientTransform=%22rotate(90)%22%3E%3Cstop offset=%225%25%22 stop-color=%22%23738973%22%2F%3E%3Cstop offset=%2295%25%22 stop-color=%22%2396a696%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient id=%22b%22 gradientTransform=%22rotate(90)%22%3E%3Cstop offset=%225%25%22 stop-color=%22%2380bca3%22%2F%3E%3Cstop offset=%2295%25%22 stop-color=%22%239fccba%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient id=%22c%22 gradientTransform=%22rotate(90)%22%3E%3Cstop offset=%225%25%22 stop-color=%22%23bbdab0%22%2F%3E%3Cstop offset=%2295%25%22 stop-color=%22%23cce3c3%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient id=%22d%22 gradientTransform=%22rotate(90)%22%3E%3Cstop offset=%225%25%22 stop-color=%22%23f6f7bd%22%2F%3E%3Cstop offset=%2295%25%22 stop-color=%22%23f8f9cd%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient id=%22e%22 gradientTransform=%22rotate(90)%22%3E%3Cstop offset=%225%25%22 stop-color=%22%23eed272%22%2F%3E%3Cstop offset=%2295%25%22 stop-color=%22%23f2dd95%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient id=%22f%22 gradientTransform=%22rotate(90)%22%3E%3Cstop offset=%225%25%22 stop-color=%22%23e6ac27%22%2F%3E%3Cstop offset=%2295%25%22 stop-color=%22%23ecc05d%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient id=%22g%22 gradientTransform=%22rotate(90)%22%3E%3Cstop offset=%225%25%22 stop-color=%22%23d37d28%22%2F%3E%3Cstop offset=%2295%25%22 stop-color=%22%23de9d5d%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient id=%22h%22 gradientTransform=%22rotate(90)%22%3E%3Cstop offset=%225%25%22 stop-color=%22%23bf4d28%22%2F%3E%3Cstop offset=%2295%25%22 stop-color=%22%23cf795d%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Cpath fill=%22%23655643%22 d=%22M0 0h2000v1400H0z%22%2F%3E%3Cpath d=%22M0 155c38.237-3.347 76.474-6.694 115-7 38.526-.306 77.34 2.428 115 2 37.66-.428 74.164-4.018 110-7s71.002-5.355 108-3c36.998 2.355 75.826 9.438 110 14 34.174 4.562 63.693 6.604 101 12s82.403 14.147 121 7c38.597-7.147 70.697-30.193 108-34 37.303-3.807 79.809 11.625 115 13s63.067-11.306 99-19c35.933-7.694 79.924-10.4 117 0 37.076 10.4 67.237 33.909 106 39 38.763 5.091 86.129-8.234 125-16 38.871-7.766 69.25-9.972 104-13 34.75-3.028 73.875-6.878 111-4s72.25 12.483 107 9c34.75-3.483 69.125-20.053 113-14 43.875 6.053 97.25 34.73 118 42 20.75 7.27 8.875-6.865 37-21l-40 1245H0Z%22 fill=%22url(%23a)%22%2F%3E%3Cpath d=%22M0 311c39.489 1.43 78.978 2.86 117 6 38.022 3.14 74.577 7.99 111 6 36.423-1.99 72.712-10.819 109-7 36.288 3.819 72.574 20.285 107 16s66.993-29.322 103-29c36.007.322 75.454 26.004 114 28 38.546 1.996 76.191-19.695 115-29s78.78-6.226 116 3c37.22 9.226 71.687 24.598 106 20 34.313-4.598 68.47-29.168 106-28 37.53 1.168 78.43 28.073 119 32 40.57 3.927 80.81-15.124 117-26s68.332-13.576 102-12c33.668 1.576 68.861 7.429 107 16 38.139 8.571 79.222 19.86 118 25 38.778 5.14 75.25 4.13 112-1s73.779-14.381 114-13c40.221 1.381 83.635 13.395 102 14 18.365.605 11.683-10.197 45-21l-40 1089H0Z%22 fill=%22url(%23b)%22%2F%3E%3Cpath d=%22M0 466c41.786-3.083 83.572-6.166 118-8 34.428-1.834 61.498-2.418 95 1s73.437 10.837 113 11c39.563.163 78.756-6.93 116-5 37.244 1.93 72.54 12.88 108 19 35.46 6.12 71.082 7.409 110 0 38.918-7.409 81.131-23.515 122-23 40.869.515 80.394 17.65 114 15 33.606-2.65 61.293-25.087 96-26 34.707-.913 76.434 19.699 117 26 40.566 6.301 79.97-1.708 119-14s77.686-28.865 111-19c33.314 9.865 61.286 46.17 97 45 35.714-1.17 79.171-39.815 118-42 38.829-2.185 73.029 32.088 109 38 35.971 5.912 73.714-16.54 108-23 34.286-6.46 65.115 3.068 109 6 43.885 2.932 100.824-.734 123-2 22.176-1.266 9.588-.133 37 1l-40 934H0Z%22 fill=%22url(%23c)%22%2F%3E%3Cpath d=%22M0 622c40.271-7.017 80.542-14.035 115-10s63.101 19.122 101 21c37.899 1.878 85.052-9.452 122-15 36.948-5.548 63.69-5.314 100-8s82.19-8.29 123-6c40.81 2.29 76.552 12.476 111 13 34.448.524 67.602-8.614 103-11 35.398-2.386 73.038 1.981 113 10s82.244 19.69 118 13c35.756-6.69 64.986-31.74 101-30 36.014 1.74 78.813 30.27 116 39s68.76-2.34 105-13c36.24-10.66 77.143-20.91 116-22 38.857-1.09 75.667 6.982 114 16s78.189 18.983 115 16c36.811-2.983 70.578-18.913 105-23s69.498 3.669 111 5c41.502 1.331 89.43-3.763 109-4 19.57-.237 10.785 4.381 42 9l-40 778H0Z%22 fill=%22url(%23d)%22%2F%3E%3Cpath d=%22M0 777c37.053 1.128 74.105 2.256 113 0 38.895-2.256 79.632-7.896 117-15 37.368-7.104 71.367-15.673 106-6 34.633 9.673 69.9 37.587 108 44 38.1 6.413 79.036-8.675 118-14 38.964-5.325 75.958-.888 110-3s65.133-10.772 101-12c35.867-1.228 76.51 4.977 113 12 36.49 7.023 68.824 14.865 109 14 40.176-.865 88.193-10.437 124-13 35.807-2.563 59.404 1.883 95-4s83.192-22.093 123-25c39.808-2.907 71.827 7.49 105 14s67.499 9.133 105 12c37.501 2.867 78.179 5.978 115-1s69.787-24.046 108-24c38.213.046 81.673 17.205 123 19 41.327 1.795 80.522-11.773 98-14 17.478-2.227 13.239 6.886 49 16l-40 623H0Z%22 fill=%22url(%23e)%22%2F%3E%3Cpath d=%22M0 933c35.565 10.565 71.13 21.13 109 19 37.87-2.13 78.045-16.952 117-17 38.955-.048 76.691 14.68 111 8s65.191-34.767 101-33c35.809 1.767 76.544 33.387 117 45s80.634 3.217 117-10 68.921-31.255 104-31c35.079.255 72.682 18.804 110 26 37.318 7.196 74.353 3.04 114 5 39.647 1.96 81.908 10.035 117 8s63.015-14.182 99-13c35.985 1.182 80.03 15.692 121 12s78.863-25.584 115-24c36.137 1.584 70.516 26.646 108 25 37.484-1.646 78.072-29.999 113-35 34.928-5.001 64.197 13.35 98 13 33.803-.35 72.14-19.402 116-17 43.86 2.402 93.246 26.258 113 33 19.754 6.742 9.877-3.629 40-14l-40 467H0Z%22 fill=%22url(%23f)%22%2F%3E%3Cpath d=%22M0 1088c39.366 9.288 78.731 18.575 117 19 38.269.425 75.441-8.014 112-7 36.559 1.014 72.504 11.48 109 8 36.496-3.48 73.542-20.908 109-25 35.458-4.092 69.329 5.153 105 2 35.671-3.153 73.144-18.703 110-16 36.856 2.703 73.096 23.657 113 29 39.904 5.343 83.471-4.927 119-2 35.529 2.927 63.018 19.051 99 13 35.982-6.051 80.457-34.279 119-43 38.543-8.721 71.154 2.064 108 10 36.846 7.936 77.928 13.025 116 17 38.072 3.975 73.133 6.838 109 10 35.867 3.162 72.54 6.623 109 0 36.46-6.623 72.709-23.33 112-22 39.291 1.33 81.624 20.697 117 20 35.376-.697 63.793-21.457 103-24 39.207-2.543 89.202 13.13 110 18 20.798 4.87 12.4-1.065 44-7l-40 312H0Z%22 fill=%22url(%23g)%22%2F%3E%3Cpath d=%22M0 1244c34.299 5.384 68.597 10.767 104 10 35.403-.767 71.91-7.685 111-9 39.09-1.315 80.762 2.972 118 9 37.238 6.028 70.041 13.798 104 8s69.074-25.163 110-24c40.926 1.163 87.665 22.854 127 26 39.335 3.146 71.267-12.254 107-16 35.733-3.746 75.266 4.162 111 6 35.734 1.838 67.667-2.395 105-11s80.065-21.582 120-20c39.935 1.582 77.074 17.724 110 26s61.64 8.685 99 2c37.36-6.685 83.366-20.465 122-22 38.634-1.535 69.894 9.175 107 14 37.106 4.825 80.056 3.765 117 0s67.882-10.236 101-12c33.118-1.764 68.416 1.179 110 1 41.584-.179 89.452-3.48 110-2 20.548 1.48 13.774 7.74 47 14l-40 156H0Z%22 fill=%22url(%23h)%22%2F%3E%3C%2Fsvg%3E");
    background-size: cover;
  }


  .squigglysvg {
    height: 0;
    width: 0;
  }
    `,document.head.appendChild(e);const t=document.createElement("style");t.textContent=`


    `,this.shadowRoot?.appendChild(t)}js(){}html(){const t=document.createRange().createContextualFragment(`
<svg class="squigglysvg" xmlns="http://www.w3.org/2000/svg" version="1.1">
  <defs>
    <filter id="squiggly-0">
      <feturbulence id="turbulence" basefrequency=".01" numoctaves="2" result="noise" seed="40">
        <animate attributeName="baseFrequency" from="1" to="1" values=".1;.2;.1" keyTimes="0;0.5;1" dur="42s" repeatCount="indefinite"></animate>
      </feturbulence>
      <fedisplacementmap id="displacement" in="SourceGraphic" in2="noise" scale="50">
        <animate attributeName="scale" from="50" to="50" values="50;10;50" keyTimes="0;0.5;1" dur="16s" repeatCount="indefinite"></animate>
      </fedisplacementmap>
    </filter>
    <filter id="squiggly-1">
      <feturbulence id="turbulence" basefrequency="0.05" numoctaves="3" result="noise" seed="1"></feturbulence>
      <fedisplacementmap in="SourceGraphic" in2="noise" scale="8"></fedisplacementmap>
    </filter>
  </defs>
</svg>
  `);document.body.appendChild(t);const c=document.createRange().createContextualFragment(`

      `);this.shadowRoot?.appendChild(c)}}const Oe=be.tag;customElements.get(Oe)||customElements.define(Oe,be);class ye extends HTMLElement{static{this.tag="mozg-photorealistic-pure-css-mobile-phone"}constructor(){super();const e=this.attachShadow({mode:"open"});e.innerHTML=`
  <style>
    :host {
      background-image: linear-gradient(45deg, #6e6f74, #202022);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      font-family: "Open Sans", sans-serif;
      margin: 0;
      padding: 0;
    }
    .background-panels {
      position: absolute;
      top: 50%;
      left: 50%;
      display: flex;
      width: 1800px;
      border: 2px solid #0f0f0f;
      flex-wrap: wrap;
      transform: translate(-50%, -50%) rotate(-30deg) skewX(30deg);
    }
    .background-panels div {
      height: 500px;
      width: 580px;
      border: 2px solid #0f0f0f;
      box-shadow: inset 3px 0 0px -1px #4b4c4f, inset 0 -3px 1px -1px #424346,
        inset 0 -4px 0 -1px #353639, inset 5px 0 1px -1px rgba(182, 182, 190, 0.6),
        inset 0 -5px 1px -1px rgba(182, 182, 190, 0.2);
    }
    .phone {
      position: absolute;
      left: calc(50% - 8px);
      top: calc(50% - 2px);
      transform: translate(-50%, -50%) rotate(-30deg) skewX(30deg);
    }
    @media screen and (max-width: 1400px) {
      .phone {
        transform: translate(-50%, -50%) rotate(-30deg) skewX(30deg) scale(0.8);
      }
    }
    .phone-back {
      position: absolute;
      top: -3px;
      transform: translate(-50%, -50%);
      height: 734px;
      width: 430px;
      background-image: linear-gradient(to bottom, #3a3b3f 70%, #1d1d1f);
      border-radius: 74px 40px 84px 50px;
      box-shadow: -26px 8px 8px -10px rgba(0, 0, 0, 0.3),
        -6px 6px 6px 0 rgba(0, 0, 0, 0.6),
        -30px 14px 10px -10px rgba(0, 0, 0, 0.5),
        -20px 40px 8px 0 rgba(0, 0, 0, 0.1), -20px 30px 8px 0 rgba(0, 0, 0, 0.1),
        inset 20px 0 15px -6px rgba(0, 0, 0, 0.6),
        inset 2px 0 4px -2px rgba(0, 0, 0, 0.6),
        inset 2px 0 1px -2px rgba(255, 255, 255, 0.1),
        inset 0 -15px 10px -10px rgba(255, 255, 255, 0.15);
    }
    .phone-back:before {
      content: "";
      display: block;
      height: 300px;
      width: 100px;
      position: absolute;
      background-color: #fff;
      left: 16px;
      bottom: 40px;
      border-radius: 20px;
      filter: blur(5px);
      opacity: 0.1;
      transform: rotate(4deg);
    }
    .phone-back:after {
      content: "";
      display: block;
      height: 300px;
      width: 100px;
      position: absolute;
      background-color: #fff;
      left: 26px;
      bottom: 40px;
      border-radius: 20px;
      filter: blur(4px);
      opacity: 0.25;
      transform: rotate(2deg);
    }
    .phone-screen {
      position: absolute;
      top: -16px;
      left: 14px;
      transform: translate(-50%, -50%);
      height: 710px;
      width: 400px;
      background-color: #000;
      border-radius: 48px 40px 52px 45px;
      box-shadow: -2px 0 0px -1px rgba(255, 255, 255, 0.4),
        -1px 3px 3px -3px rgba(255, 255, 255, 0.7);
    }
    .phone-display {
      position: absolute;
      z-index: 1;
      top: -23px;
      left: 20px;
      transform: translate(-50%, -50%);
      height: 690px;
      width: 378px;
      background-color: #fbfbfb;
      border-radius: 45px 37px 41px 41px;
    }
    .phone-notch {
      position: absolute;
      top: -1px;
      left: 50%;
      transform: translate(-50%);
      width: 210px;
      background-color: #131313;
      border-top: 6px solid #000;
      height: 21px;
      z-index: 3;
      border-radius: 0 0 20px 20px;
    }
    .phone-notch:after {
      content: "";
      display: block;
      height: 12px;
      width: 12px;
      background-color: transparent;
      position: absolute;
      left: -12px;
      top: -5px;
      border-radius: 50%;
      box-shadow: 5px -5px 0 -3px #000;
    }
    .phone-notch:before {
      content: "";
      display: block;
      height: 12px;
      width: 12px;
      background-color: transparent;
      position: absolute;
      right: -12px;
      top: -5px;
      border-radius: 50%;
      box-shadow: -4px -4px 0 -3px #000;
    }
    .phone-speaker {
      position: absolute;
      top: 6px;
      width: 58px;
      height: 6px;
      border-radius: 20px;
      background-color: #2b2b2b;
      overflow: hidden;
      box-shadow: 0 0 0 1px #363637, inset -3px 3px 1px 0px #000,
        inset -3px 4px 0px -1px rgba(255, 255, 255, 0.5);
      left: 50%;
      transform: translateX(-50%);
    }
    .phone-speaker:after {
      content: "";
      display: block;
      height: 4px;
      width: 4px;
      background-color: #87888c;
      position: absolute;
      right: -1px;
      border-radius: 50%;
      top: -1px;
    }
    .phone-speaker:before {
      content: "";
      display: block;
      height: 4px;
      width: 4px;
      background-color: #898a8e;
      position: absolute;
      right: -2px;
      border-radius: 50%;
      top: 4px;
    }
    .phone-left-side {
      position: absolute;
      left: 0;
      top: 60px;
      width: 30px;
      height: 100%;
    }
    .phone-left-side .phone-antena {
      position: absolute;
      height: 20px;
      width: 50px;
      left: -5px;
      top: 10px;
      border-radius: 50%;
      transform: rotate(-40deg) skewX(20deg);
      background-color: transparent;
      box-shadow: 0px -2px 1px -2px #000;
    }
    .phone-left-side .phone-antena.bottom {
      top: auto;
      bottom: 128px;
    }
    .phone-left-side .phone-antena:after {
      content: "";
      display: block;
      height: 20px;
      width: 50px;
      position: absolute;
      transform: rotate(-2deg);
      left: -5px;
      top: 3px;
      border-radius: 50%;
      background-color: transparent;
      box-shadow: 0px -2px 1px -2px #000;
    }
    .phone-button {
      position: absolute;
      top: 100px;
      left: 4px;
      height: 47px;
      width: 12px;
      background-color: #010101;
      border-radius: 30px;
      transform: skewY(-40deg);
      box-shadow: -32px -16px 10px 0 rgba(0, 0, 0, 0.4),
        -4px 0 4px 0 rgba(0, 0, 0, 0.4);
    }
    .phone-button.bottom {
      top: 160px;
    }
    .phone-button.top {
      top: 48px;
      height: 29px;
      width: 14px;
      left: 2px;
      border-radius: 10px 10px 10px 3px;
      box-shadow: inset 2px 0 0 -1px rgba(255, 255, 255, 0.25);
    }
    .phone-button.top:after {
      height: 27px;
      width: 8px;
      left: 4px;
      top: 0px;
    }
    .phone-button.top:before {
      height: 28px;
      width: 8px;
      left: 6px;
      top: 0px;
      box-shadow: 1px 0 0 0 rgba(0, 0, 0, 0.4);
    }
    .phone-button:before {
      content: "";
      display: block;
      position: absolute;
      height: 45px;
      width: 10px;
      background-image: linear-gradient(to bottom, #6a6b6f 85%, #0b0b0b);
      border-radius: 20px;
    }
    .phone-button:after {
      content: "";
      display: block;
      position: absolute;
      left: -2px;
      top: -1px;
      height: 44px;
      width: 10px;
      background-color: #2d2d2f;
      border-radius: 20px;
      box-shadow: inset -1px -1px 0 -1px rgba(255, 255, 255, 0.6);
    }

    .display-content {
      position: absolute;
      top: 0;
      left: 0;
      height: 690px;
      width: 378px;
      border-radius: 45px 37px 41px 41px;
      overflow: hidden;
    }
    .display-content .screenshot {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
    .display-content:before {
      content: "";
      display: block;
      position: absolute;
      height: 60%;
      width: 100%;
      top: -10%;
      /* background-image: linear-gradient(to top, #50d2f4, #3660f2); */
      transform: skewY(-15deg);
    }
  </style>
  <div id="photorealistic-pure-css-mobile-phone">
    <div id="phoneview" class="view hidden">
      <div class="background-panels">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div class="phone">
      <div class="phone-back">
        <div class="phone-left-side">
          <div class="phone-antena"></div>
          <div class="phone-button top"></div>
          <div class="phone-button"></div>
          <div class="phone-button bottom"></div>
          <div class="phone-antena bottom"></div>
        </div>
      </div>
      <div class="phone-screen"></div>
      <div class="phone-display">
        <div class="phone-notch">
          <div class="phone-speaker"></div>
        </div>
        <div class="display-content">
          <!-- <img
                id="screenshot"
                src="Captura de tela de 2025-01-11 21-02-43.png"
                alt="Screenshot"
                class="screenshot"
              /> -->

          <!-- <video class="visible-desktop screenshot" id="hero-vid" poster="https://www.markhillard.com/sandbox/media/polina.jpg" autoplay loop muted>
                <source type="video/webm" src="https://www.markhillard.com/sandbox/media/polina.webm"></source>
                <source type="video/mp4" src="https://www.markhillard.com/sandbox/media/polina.mp4"></source>
            </video> -->

          <div class="display-content"></div>
        </div>
      </div>
    </div>
  </div>
  `}}const Je=ye.tag;customElements.get(Je)||customElements.define(Je,ye);class Ce extends HTMLElement{constructor(){super(),this._cleanupFns=[],this._moduleCleanup=null,this._initialized=!1,this.attachShadow({mode:"open"})}static{this.tag="mozg-attracted-elastic-balls"}connectedCallback(){this._initialized||(this.css(),this.html(),this.js(),this._initialized=!0)}disconnectedCallback(){try{this._moduleCleanup?.()}catch{}ie(this._cleanupFns),this._moduleCleanup=null;const e=this.shadowRoot;if(e)for(;e.firstChild;)e.removeChild(e.firstChild);this._initialized=!1}static get observedAttributes(){return["mode"]}attributeChangedCallback(e,t,o){}adoptedCallback(){}css(){const e=document.createElement("style");e.textContent=`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
  }
    `,this.shadowRoot?.appendChild(e)}js(){const e=document.createElement("script");e.src="https://cdnjs.cloudflare.com/ajax/libs/three.js/88/three.min.js",e.onload=()=>{const t=(function(o){const c=window.THREE,{WebGLRenderer:i,Scene:h,PerspectiveCamera:a,Object3D:n,Mesh:s,MeshToonMaterial:p,Color:l,SphereGeometry:m,PlaneGeometry:r,MeshLambertMaterial:d,Vector3:u,AmbientLight:f,PointLight:C,DirectionalLight:g,Fog:S}=c,b=(z,B)=>Math.random()*(B-z)+z,I=z=>z*Math.PI/180,F=(z,B)=>new u(z/window.innerWidth*2-1,-(B/window.innerHeight*2)+1,.5),v=(z,B,W)=>{const ee=z.clone();ee.unproject(W);const te=ee.sub(W.position).normalize(),ne=(B.z-W.position.z)/te.z,ot=W.position.clone().add(te.multiplyScalar(ne));return B.clone().sub(ot)},x="#7e44a1",y=15594228;let R=window.innerWidth,E=window.innerHeight;class j{constructor(B,W){this.meshCount=0,this.meshListeners=[],this.renderer=new i({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setClearColor(y),this.scene=new h,this.scene.fog=new S(y,0,350),this.camera=new a(50,B/W,1,1e3),this.camera.position.set(0,0,10),this.dom=this.renderer.domElement,this.update=this.update.bind(this),this.resize=this.resize.bind(this),this.resize(B,W)}add(B){this.scene.add(B),B.update&&(this.meshListeners.push(B.update),this.meshCount++)}update(){let B=this.meshCount;for(;--B>=0;)this.meshListeners[B].apply(this,null);this.camera.position.x+=(G.x*2-this.camera.position.x)*.08,this.camera.position.y+=(G.y*1.5-this.camera.position.y)*.08,this.camera.lookAt(new u),this.renderer.render(this.scene,this.camera)}resize(B,W){this.camera.aspect=B/W,this.camera.updateProjectionMatrix(),this.renderer.setSize(B,W)}}const k=new j(R,E);o.appendChild(k.dom);const Q=.1,N=.8,H=.07,Y=.1,D=.8,O=200,P=["#53D8FB","#DE1A1A","#B0E0E6","#ED217C","#EDAE49"];class Z extends s{constructor({size:B=b(.2,.3),position:W=new u(b(-8,8),b(-5,5),b(-7,2)),color:ee=x}={}){const te=new p({color:new l(ee),shininess:10}),ne=new m(B,32,32);super(ne,te),this.normalizedMouseVec=new u,this.attractionRadius=B*10,this.force={scale:0,position:new u},this.initialPosition=W,this.position.copy(this.initialPosition),this.scale.multiplyScalar(.001),this.update=this.update.bind(this)}update(){this.updateScale(),this.updateMouseAttractionForce()}updateScale(){this.force.scale+=(1-this.scale.x)*Q,this.scale.addScalar(this.force.scale),this.force.scale*=N}updateMouseAttractionForce(){const B=v(this.normalizedMouseVec,this.position,k.camera),W=Math.max(0,this.attractionRadius-B.length());this.force.position.add(B.multiplyScalar(W*H)),this.force.position.sub(this.initialPosition.clone().sub(this.position).multiplyScalar(Y)),this.position.sub(this.force.position),this.force.position.multiplyScalar(D)}}const T=new s(new r(800,800,32),new d({color:15594228}));T.position.y=-20,T.rotation.x=-I(90),k.add(T);const w=new f(16777215,.8);k.add(w);const L=new g(16777215,.15);L.position.set(0,1,0),k.add(L);const A=new C(16775127,.05);A.position.set(1,0,0),k.add(A);let X=0,G=new u;const J=[],U=setInterval(()=>{const z=new Z({color:P[Math.floor(Math.random()*P.length)]});J.push(z),k.add(z),X++,X===O&&clearInterval(U)},20),V=z=>{G=F(z.clientX,z.clientY);const B=J.length;for(let W=0;W<B;W++)J[W].normalizedMouseVec=G};document.body.addEventListener("mousemove",V);function K(){R=window.innerWidth,E=window.innerHeight,k.resize(R,E)}window.addEventListener("resize",K),window.addEventListener("orientationchange",K);let _=0;function $(){k.update(),_=requestAnimationFrame($)}return $(),{cleanup:()=>{try{clearInterval(U)}catch{}try{window.removeEventListener("resize",K)}catch{}try{window.removeEventListener("orientationchange",K)}catch{}try{document.body.removeEventListener("mousemove",V)}catch{}try{cancelAnimationFrame(_)}catch{}try{const z=k&&k.dom?k.dom:null;z&&z.parentElement===o&&o.removeChild(z)}catch{}try{k&&k.renderer&&typeof k.renderer.dispose=="function"&&k.renderer.dispose()}catch{}}}})(this.shadowRoot);this._moduleCleanup=t&&typeof t.cleanup=="function"?t.cleanup:null,this._moduleCleanup&&this._cleanupFns.push(()=>this._moduleCleanup&&this._moduleCleanup())},e.onerror=t=>{},this.shadowRoot?.appendChild(e)}html(){const t=document.createRange().createContextualFragment(`
   `);this.shadowRoot?.appendChild(t)}}const Ze=Ce.tag;customElements.get(Ze)||customElements.define(Ze,Ce);class Ee extends HTMLElement{constructor(){super(),this._cleanupFns=[],this.attachShadow({mode:"open"})}static{this.tag="mozg-balls-gravity"}connectedCallback(){this.css(),this.html(),this.js()}disconnectedCallback(){for(const t of this._cleanupFns)try{t()}catch{}this._cleanupFns=[];const e=this.shadowRoot;if(e)for(;e.firstChild;)e.removeChild(e.firstChild)}static get observedAttributes(){return["mode"]}attributeChangedCallback(e,t,o){}adoptedCallback(){}css(){const e=document.createElement("style");e.textContent=`
      :host {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
      }
    `,this.shadowRoot?.appendChild(e)}onScriptLoaded(){const e=this;return(function(o){const c=window.Matter,{Engine:i,Render:h,World:a,MouseConstraint:n,Bodies:s,Mouse:p}=c;let l=i.create(),m=null,r=null,d=null;function u(){r!==null&&cancelAnimationFrame(r);const C=o.getElementById("ca-balls-gravity"),g=window.innerWidth,S=window.innerHeight,b=-1;a.clear(l.world),i.clear(l),l=i.create(),l.world.gravity.x=0,l.world.gravity.y=0;const I=n.create(l,{mouse:p.create(C),constraint:{render:{visible:!1}}});a.add(l.world,I),m=h.create({element:C,engine:l,options:{wireframes:!1,background:"transparent",width:g,height:S}});const F=[{x:g/2,y:S/2,w:500,h:46},{x:g/2,y:S/2-40,w:180,h:20},{x:g/2,y:S/2+40,w:180,h:20},{x:g/2,y:S-b,w:g,h:1},{x:g/2,y:b,w:g,h:1},{x:b,y:S/2,w:1,h:S},{x:g-b,y:S/2,w:1,h:S}].map(({x:R,y:E,w:j,h:k})=>s.rectangle(R,E,j,k,{isStatic:!0,render:{fillStyle:"#FFFFFF"}}));F[0].render.fillStyle="transparent",F[1].render.fillStyle="transparent",F[2].render.fillStyle="transparent",a.add(l.world,F);const v=["#4285F4","#EA4335","#FBBC05","#34A853"];for(let R=0;R<230;R++){const E=2+Math.random()*20;a.add(l.world,s.circle(40+Math.random()*g-80,40+Math.random()*100,E,{render:{fillStyle:v[Math.floor(Math.random()*v.length)]}}))}i.run(l),h.run(m);let x=0;l.world.gravity.y=4;function y(){x>8&&(l.world.gravity.x=Math.cos(x/55),l.world.gravity.y=Math.sin(x/55)),x++,r=requestAnimationFrame(y)}y()}u();function f(C,g,S){let b;return function(...I){const F=this,v=()=>{b=null,C.apply(F,I)};b&&clearTimeout(b),b=window.setTimeout(v,g)}}return d=f(()=>{u()},200),window.addEventListener("resize",d,{passive:!0}),e._cleanupFns.push(()=>{try{d&&window.removeEventListener("resize",d)}catch{}try{r!==null&&cancelAnimationFrame(r)}catch{}try{m&&h.stop(m)}catch{}try{l&&(a.clear(l.world),i.clear(l))}catch{}try{const C=e.shadowRoot.getElementById("ca-balls-gravity"),g=C?.querySelector("canvas");C&&g&&g.parentElement===C&&C.removeChild(g)}catch{}}),{}})(this.shadowRoot)}js(){const e={css:[],js:[{src:"https://cdn.rawgit.com/liabru/matter-js/26c12003/build/matter.js",onload:()=>{},onerror:()=>{console.error("Falha ao carregar three!")}}]};ae(this.shadowRoot,e).then(()=>{this.onScriptLoaded()}).catch(t=>{console.error("Erro ao carregar os recursos:",t)})}html(){const t=document.createRange().createContextualFragment(`
 <div id="ca-balls-gravity"></div>
 `);this.shadowRoot?.appendChild(t)}}const Ue=Ee.tag;customElements.get(Ue)||customElements.define(Ue,Ee);class ke extends HTMLElement{constructor(){super(),this._cleanupFns=[],this.attachShadow({mode:"open"})}static{this.tag="mozg-interactive-vortex"}connectedCallback(){this.css(),this.html(),this.js()}disconnectedCallback(){ie(this._cleanupFns);const e=this.shadowRoot;if(e)for(;e.firstChild;)e.removeChild(e.firstChild)}static get observedAttributes(){return["mode"]}attributeChangedCallback(e,t,o){}adoptedCallback(){}css(){const e=document.createElement("style");e.textContent=`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
  }

  #canvas-container {
    width: 100vw;
    height: 100vh;
  }
    `,this.shadowRoot?.appendChild(e)}js(){const e=document.createElement("script");e.type="module",e.textContent=`

      import * as THREE from 'https://cdn.skypack.dev/three@0.136.0/build/three.module.js';
      import { OrbitControls } from 'https://cdn.skypack.dev/three@0.136.0/examples/jsm/controls/OrbitControls.js';

      const modules = {
        THREE,
        OrbitControls,
      };

      // console.log({ name: "import ", modules });

      Object.keys(modules).forEach(key => {
        window[key] = modules[key];
      });

      // Chamar a função de callback após o carregamento dos módulos
      if (typeof window.onScriptLoaded === 'function') {
        window.onScriptLoaded();
      }

    `,this.shadowRoot?.appendChild(e),window.onScriptLoaded=()=>{const t=(function(c){const{THREE:i,OrbitControls:h}=window;let a,n,s,p,l,m,r=0;const d=new i.Vector2,u=new i.Vector2,f=new i.Vector2,C=[];let g;function S(){a=new i.Scene,a.background=null,n=new i.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.1,1e3),s=new i.WebGLRenderer({alpha:!0,antialias:!0}),s.setSize(window.innerWidth,window.innerHeight),s.setClearColor(0,0);const R=c&&c.getElementById?c.getElementById("canvas-container"):null;R&&R.appendChild(s.domElement),n.position.set(30,20,50),n.lookAt(0,0,0),l=new h(n,s.domElement),l.enableDamping=!0,l.dampingFactor=.05,l.screenSpacePanning=!1,l.minDistance=20,l.maxDistance=150,l.enableRotate=!0,l.enableZoom=!1,p=new i.Group,a.add(p);for(let E=0;E<10;E++)C.push({position:new i.Vector3((Math.random()-.5)*40,(Math.random()-.5)*40,(Math.random()-.5)*40),strength:Math.random()*2+1,frequency:Math.random()*2+1})}function b(){const E=new i.BufferGeometry,j=new Float32Array(2e5*3),k=new Float32Array(2e5*3),Q=new Float32Array(2e5),N=new Float32Array(2e5),H=new Float32Array(2e5),Y=15,D=2e5/Y;for(let P=0;P<2e5;P++){const Z=Math.floor(P/D),T=Math.random()>.8?1:0,w=P%D*(Math.PI*2/D),L=15+Math.sin(Z*.5)*5,A=40/Y,X=(Z-Y/2)*A,G=Math.sin(w*3)*(T?4:2),J=Math.cos(Z*.5)*2;j[P*3]=Math.cos(w)*(L+J)+G,j[P*3+1]=X+Math.sin(w*2)*(T?2:1),j[P*3+2]=Math.sin(w)*(L+J)+G;const U=Z/Y*.8,V=Math.sin(w*3)*.1,K=(U+V)%1,_=T?1:.8,$=T?.6:.4,z=new i.Color().setHSL(K,_,$);k[P*3]=z.r,k[P*3+1]=z.g,k[P*3+2]=z.b,Q[P]=T?2.5:1.5,N[P]=Z,H[P]=T}E.setAttribute("position",new i.BufferAttribute(j,3)),E.setAttribute("color",new i.BufferAttribute(k,3)),E.setAttribute("size",new i.BufferAttribute(Q,1)),E.setAttribute("ringIndex",new i.BufferAttribute(N,1)),E.setAttribute("particleType",new i.BufferAttribute(H,1));const O=new i.ShaderMaterial({uniforms:{time:{value:0},mouse:{value:new i.Vector2},mouseVelocity:{value:new i.Vector2}},vertexShader:`
              uniform float time;
              uniform vec2 mouse;
              uniform vec2 mouseVelocity;
              attribute float size;
              attribute float ringIndex;
              attribute float particleType;
              attribute vec3 color;
              varying vec3 vColor;
              varying float vParticleType;
              float noise(vec3 p) {
                return fract(sin(dot(p, vec3(12.9898, 78.233, 45.5432))) * 43758.5453);
              }
              void main() {
                vColor = color;
                vParticleType = particleType;
                vec3 pos = position;
                float angle = atan(pos.x, pos.z);
                float radius = length(pos.xz);
                float ringOffset = ringIndex * 0.2;
                float timeScale = time * (1.0 + particleType * 0.5);
                float spiralFactor = (radius - timeScale * 5.0 + ringOffset) * 0.2;
                float complexAngle = spiralFactor + angle + sin(time + ringIndex * 0.3) * 0.2;
                float twist = sin(time * 0.5 + ringIndex * 0.5) * 0.5;
                complexAngle += twist;
                vec3 noisePos = pos * 0.05 + time * 0.1;
                float displacement = noise(noisePos) * (particleType * 2.0);
                pos.x = cos(complexAngle) * radius + displacement;
                pos.z = sin(complexAngle) * radius + displacement;
                pos.y += sin(time + noise(pos) * 5.0) * (particleType * 2.0);
                vec2 mouseEffect = (mouse - vec2(pos.x, pos.y)) * 0.8;
                float mouseDistance = length(mouseEffect);
                float mouseInfluence = 1.0 - smoothstep(0.0, 15.0, mouseDistance);
                mouseInfluence = mouseInfluence * mouseInfluence;
                vec2 velocityEffect = mouseVelocity * 2.0;
                pos.x += mouseEffect.x * mouseInfluence * 2.0 + velocityEffect.x * mouseInfluence;
                pos.y += mouseEffect.y * mouseInfluence * 2.0 + velocityEffect.y * mouseInfluence;
                vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
                float sizeVariation = 1.0 + sin(time * 2.0 + ringIndex * 0.5) * 0.3;
                float distanceFactor = 50.0 / length(mvPosition.xyz);
                gl_PointSize = size * distanceFactor * (1.0 + mouseInfluence * 2.0) * sizeVariation;
                gl_Position = projectionMatrix * mvPosition;
              }
            `,fragmentShader:`
              varying vec3 vColor;
              varying float vParticleType;
              void main() {
                vec2 center = gl_PointCoord - vec2(0.5);
                float dist = length(center);
                float alpha = vParticleType > 0.5 ? 0.15 / (dist * 0.5 + 0.1) : 0.05 / (dist + 0.1);
                vec3 finalColor = vColor * (1.0 + (1.0 - dist) * 0.2);
                gl_FragColor = vec4(finalColor, alpha);
              }
            `,blending:i.AdditiveBlending,depthTest:!1,transparent:!0});m=new i.Points(E,O),p.add(m)}function I(){r+=.01,u.x=d.x-f.x,u.y=d.y-f.y,f.copy(d),u.multiplyScalar(.95),m.material.uniforms.time.value=r,m.material.uniforms.mouse.value=d,m.material.uniforms.mouseVelocity.value=u,p.rotation.y+=.001*(1+Math.sin(r*.2)*.2),l.update()}function F(){g=requestAnimationFrame(F),I(),s.render(a,n)}function v(){n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),s.setSize(window.innerWidth,window.innerHeight)}function x(R){d.x=R.clientX/window.innerWidth*2-1,d.y=-(R.clientY/window.innerHeight)*2+1}function y(){S(),b(),window.addEventListener("resize",v,!1),window.addEventListener("mousemove",x,!1),window.__mozgVortexCleanup=()=>{try{window.removeEventListener("resize",v,!1)}catch{}try{window.removeEventListener("mousemove",x,!1)}catch{}try{g!==void 0&&cancelAnimationFrame(g)}catch{}try{l&&typeof l.dispose=="function"&&l.dispose()}catch{}try{if(s){const R=c&&c.getElementById?c.getElementById("canvas-container"):null,E=s.domElement;R&&E&&E.parentElement===R&&R.removeChild(E),typeof s.dispose=="function"&&s.dispose()}}catch{}},F()}return{init:y}})(this.shadowRoot),{init:o}=t;o(),window.__mozgVortexCleanup&&this._cleanupFns.push(()=>{try{window.__mozgVortexCleanup()}catch{}try{delete window.__mozgVortexCleanup}catch{}try{delete window.onScriptLoaded}catch{}})}}html(){const t=document.createRange().createContextualFragment(`
<div id="canvas-container"></div>
  `);this.shadowRoot?.appendChild(t)}}const Ve=ke.tag;customElements.get(Ve)||customElements.define(Ve,ke);class Me extends HTMLElement{constructor(){super(),this._cleanupFns=[],this._moduleCleanup=null,this.attachShadow({mode:"open"})}static{this.tag="mozg-glsl-shader-eyeball"}connectedCallback(){this.css(),this.html(),this.js()}disconnectedCallback(){try{this._moduleCleanup?.()}catch{}if(this._cleanupFns.length){const t=this._cleanupFns.splice(0,this._cleanupFns.length);for(const o of t)try{o()}catch{}}const e=this.shadowRoot;if(e)for(;e.firstChild;)e.removeChild(e.firstChild)}static get observedAttributes(){return["mode"]}attributeChangedCallback(e,t,o){}adoptedCallback(){}css(){const e=document.createElement("style");e.textContent=`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
  }
    `,this.shadowRoot?.appendChild(e)}js(){const e=document.createElement("script");e.type="module",e.textContent=`
      import * as THREE from "https://cdn.skypack.dev/three@0.133.1/build/three.module";
      import { GUI } from "https://cdn.skypack.dev/lil-gui@0.16.1";
      import { gsap } from 'https://cdn.skypack.dev/gsap@3.7.1';

      // escopo global

      const modules = {
        THREE,
        GUI,
        gsap
      };

      // console.log({ name: "import ", modules });

      Object.keys(modules).forEach(key => {
        window[key] = modules[key];
      });

      // Chamar a função de callback após o carregamento dos módulos

      if (typeof window.onScriptLoaded === 'function') {
        window.onScriptLoaded();
      }
    `,this.shadowRoot?.appendChild(e);const t=()=>{const o=(function(c){const i=window.THREE,h=window.GUI,a=window.gsap,n=c?.querySelector(".container");if(!n||!i)return console.error("Missing container or THREE"),{};const s={zoomLevel:600,zoomLevelBounds:[300,1e3],shrink:0,fstBaseColor:"#03565c",scdBaseColor:"#42cf44",midColor:"#f2aa00",vignette:.65,brightness:.6,darkness:.5};class p{constructor(){this.gui=new h,this.gui=this.gui.hide(),this.shrinkContol=this.gui.add(r.eyeShaderMaterial.uniforms.u_shrink,"value",-.9,.3,.05).name("shrink"),this.gui.addColor({color:s.fstBaseColor},"color").onChange(x=>{r.eyeShaderMaterial.uniforms.u_base_color_1.value=new i.Color(x)}).name("base color #1"),this.gui.addColor({color:s.scdBaseColor},"color").onChange(x=>{r.eyeShaderMaterial.uniforms.u_base_color_2.value=new i.Color(x)}).name("base color #2"),this.gui.addColor({color:s.midColor},"color").onChange(x=>{r.eyeShaderMaterial.uniforms.u_mid_color.value=new i.Color(x)}).name("middle color"),this.gui.add(r.eyeShaderMaterial.uniforms.u_vignette,"value",0,1,.05).name("vignette"),this.gui.add(r.eyeShaderMaterial.uniforms.u_brightness,"value",.2,.65,.05).name("brightness"),this.gui.add(r.eyeShaderMaterial.uniforms.u_darkness,"value",0,1,.05).name("darkness")}}class l{constructor(){this.playShrink=a.timeline({paused:!0,onUpdate:()=>{d.shrinkContol.setValue(r.eyeShaderMaterial.uniforms.u_shrink.value)}}).timeScale(2).to(r.eyeShaderMaterial.uniforms.u_shrink,{duration:.5,value:-.9,ease:"power2.out"}).to(r.eyeShaderMaterial.uniforms.u_shrink,{duration:3,value:0,ease:"power2.inOut"}),this.eyeAppear=a.timeline({paused:!0}).from(r.eyeGroup.position,{duration:2,y:1e3,ease:"power4.out"}).from(r.eyeGroup.rotation,{duration:2,x:25,z:5,ease:"power3.out"},0).from(r.shadowMesh.scale,{duration:2,x:2.5},0)}}class m{constructor(){this._raf=null,this.renderer=new i.WebGLRenderer({alpha:!0,antialias:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),n.appendChild(this.renderer.domElement),this.scene=new i.Scene,this.scene.background=null,this.eyeGroup=new i.Group,this.eyeRadius=30,this.camera=new i.PerspectiveCamera(20,window.innerWidth/window.innerHeight,1,1e4),this.mouse=new i.Vector2(0,0),this.setupScene(),this.createEyeball(),this.createShadow(),this.render()}setupScene(){this.setCameraPosition(s.zoomLevel);const x=new i.AmbientLight(10066329,.7);this.scene.add(x);const y=new i.DirectionalLight(16777215,.8);y.position.set(-1,1,1),this.scene.add(y)}setCameraOffsetY(){this.camera.position.y=window.innerWidth>800?0:25}setCameraPosition(x){this.camera.position.z=x,this.setCameraOffsetY(),s.zoomLevel=x}createEyeball(){const x=new i.TextureLoader().load("https://assets.codepen.io/959327/eyeball.jpg"),y=new i.SphereGeometry(this.eyeRadius,32,32),R=new i.MeshPhongMaterial({color:16777215,emissive:2228224,opacity:.25,shininess:100,transparent:!0,map:x}),E=new i.Mesh(y,R);this.eyeGroup.add(E);const j=new i.SphereGeometry(this.eyeRadius-.1,32,32);this.eyeShaderMaterial=new i.ShaderMaterial({uniforms:{u_shrink:{type:"f",value:s.shrink},u_base_color_1:{type:"v3",value:new i.Color(s.fstBaseColor)},u_base_color_2:{type:"v3",value:new i.Color(s.scdBaseColor)},u_mid_color:{type:"v3",value:new i.Color(s.midColor)},u_vignette:{type:"f",value:s.vignette},u_brightness:{type:"f",value:s.brightness},u_darkness:{type:"f",value:s.darkness}},vertexShader:c?.getElementById("vertexShader")?.textContent??"",fragmentShader:c?.getElementById("fragmentShader")?.textContent??""});const k=new i.Mesh(j,this.eyeShaderMaterial);k.rotation.y=-Math.PI/2,this.eyeGroup.add(k),this.scene.add(this.eyeGroup)}createShadow(){const x=document.createElement("canvas"),y=x.width=x.height=this.eyeRadius*2.5,R=x.getContext("2d"),E=R.createRadialGradient(y*.5,y*.5,0,y*.5,y*.5,y*.4);E.addColorStop(.2,"rgba(210,210,210,1)"),E.addColorStop(1,"rgba(255,255,255,1)"),R.fillStyle=E,R.fillRect(0,0,x.width,x.height);const j=new i.CanvasTexture(x),k=new i.MeshBasicMaterial({map:j}),Q=new i.PlaneBufferGeometry(y,y,1,1);this.shadowMesh=new i.Mesh(Q,k),this.shadowMesh.position.y=-2*this.eyeRadius,this.shadowMesh.rotation.x=-Math.PI/2.05,this.scene.add(this.shadowMesh)}addCanvasEvents(){n.addEventListener("wheel",y=>{s.zoomLevel+=.1*y.deltaY,s.zoomLevel=Math.min(s.zoomLevel,s.zoomLevelBounds[1]),s.zoomLevel=Math.max(s.zoomLevel,s.zoomLevelBounds[0]),r.setCameraPosition(s.zoomLevel)}),n.querySelector("canvas")?.addEventListener("click",()=>{u.playShrink.play(0)}),n.addEventListener("mousemove",y=>{x(y.clientX,y.clientY,this)}),n.addEventListener("touchmove",y=>{x(y.touches[0].pageX,y.touches[0].pageY,this)});function x(y,R,E){E.mouse={x:(y-E.windowHalf.x)/E.windowHalf.x,y:(R-E.windowHalf.y)/E.windowHalf.y}}}render(){this.eyeGroup.rotation.x+=(this.mouse.y*.3-this.eyeGroup.rotation.x)*.2,this.eyeGroup.rotation.y+=(this.mouse.x*.6-this.eyeGroup.rotation.y)*.2,this.renderer.render(this.scene,this.camera)}loop(){this.render(),this._raf=requestAnimationFrame(this.loop.bind(this))}updateSize(){this.windowHalf={x:window.innerWidth/2,y:window.innerHeight/2},this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.setCameraOffsetY()}}const r=new m,d=new p,u=new l;r.updateSize();const f=(v,x,y)=>{y.mouse={x:(v-y.windowHalf.x)/y.windowHalf.x,y:(x-y.windowHalf.y)/y.windowHalf.y}},C=v=>{s.zoomLevel+=.1*v.deltaY,s.zoomLevel=Math.min(s.zoomLevel,s.zoomLevelBounds[1]),s.zoomLevel=Math.max(s.zoomLevel,s.zoomLevelBounds[0]),r.setCameraPosition(s.zoomLevel)},g=n.querySelector("canvas"),S=()=>{u.playShrink.play(0)},b=v=>{f(v.clientX,v.clientY,r)},I=v=>{v.touches&&v.touches[0]&&f(v.touches[0].pageX,v.touches[0].pageY,r)},F=()=>r.updateSize();return n.addEventListener("wheel",C),g&&g.addEventListener("click",S),n.addEventListener("mousemove",b),n.addEventListener("touchmove",I),window.addEventListener("resize",F),r.loop(),u.eyeAppear.play(0),{cleanup:()=>{try{n.removeEventListener("wheel",C)}catch{}try{g&&g.removeEventListener("click",S)}catch{}try{n.removeEventListener("mousemove",b)}catch{}try{n.removeEventListener("touchmove",I)}catch{}try{window.removeEventListener("resize",F)}catch{}try{r&&r._raf!=null&&cancelAnimationFrame(r._raf)}catch{}try{d&&d.gui&&typeof d.gui.destroy=="function"&&d.gui.destroy()}catch{}try{u&&(u.playShrink&&typeof u.playShrink.kill=="function"&&u.playShrink.kill(),u.eyeAppear&&typeof u.eyeAppear.kill=="function"&&u.eyeAppear.kill())}catch{}try{r&&r.renderer&&typeof r.renderer.dispose=="function"&&r.renderer.dispose()}catch{}try{const v=n.querySelector("canvas");v&&v.parentElement===n&&n.removeChild(v)}catch{}}}})(this.shadowRoot);this._moduleCleanup=o&&o.cleanup&&typeof o.cleanup=="function"?o.cleanup:null,this._moduleCleanup&&this._cleanupFns.push(()=>this._moduleCleanup&&this._moduleCleanup())};window.onScriptLoaded=t,this._cleanupFns.push(()=>{if(window.onScriptLoaded===t)try{window.onScriptLoaded=void 0}catch{}})}html(){const t=document.createRange().createContextualFragment(`

    <div class="container"></div>

    <script type="x-shader/x-fragment" id="fragmentShader">
        varying vec2 vUv;

        uniform float u_shrink;
        uniform vec3 u_base_color_1;
        uniform vec3 u_base_color_2;
        uniform vec3 u_mid_color;
        uniform float u_vignette;
        uniform float u_brightness;
        uniform float u_darkness;

        float random (in vec2 st) {
            return fract(sin(dot(st.xy,vec2(12.9898,78.233)))*43758.5453123);
        }
        float noise (in vec2 st) {
            vec2 i = floor(st);
            vec2 f = fract(st);
            float a = random(i);
            float b = random(i + vec2(1.0, 0.0));
            float c = random(i + vec2(0.0, 1.0));
            float d = random(i + vec2(1.0, 1.0));
            vec2 u = f * f * (3.0 - 2.0 * f);
            return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
        }
        float fbm (in vec2 st) {
            float value = 0.0;
            float amplitude = .5;
            float frequency = 0.;
            for (int i = 0; i < 4; i++) {
                value += amplitude * noise(st);
                st *= 2.;
                amplitude *= .5;
            }
            return value;
        }

        float length2( vec2 p ) {
            vec2 q = p*p*p*p;
            return pow( q.x + q.y, 1.0/4.0 );
        }

        void main() {
            vec2 st = vec2(.5) - vUv;
            st.x *= 6.28318531; // 2Pi
            st.y *= 3.14159265359; // Pi

            float r = length(st) * 1.3;
            float a = atan(st.y, st.x);

            float pulsing = 1. + clamp(1. - r, 0., 1.) * u_shrink;

            // noisy fullscreen mix of 2 colors
            float f = fbm(5. * st);
            vec3 col = mix(u_base_color_1, u_base_color_2, f);

            // blury spot in the middle
            col = mix(col, u_mid_color, 1. - smoothstep(0.2, 0.6, r * (.2 + .8 * pulsing)));

            // white streaks
            a += .05 * fbm(20. * st) * fbm(20. * st);
            f = smoothstep((1. - u_brightness), 1., fbm(vec2(20. * a, 6. * r * pulsing)));
            col = mix(col, vec3(1.), f);

            // dark insertions
            a = fbm(vec2(15. * a, 10. * r * pulsing));
            f = smoothstep(.4, .9,  a);
            col *= 1. - u_darkness * f;

            // vignette
            col *= 1. - u_vignette * smoothstep(.6, .8, r * (.9 + .1 * pulsing));

            // pupil
            f = 1. - smoothstep(.2, .25, r * pulsing);
            col = mix(col, vec3(.0), f);

            // clip the eye
            col = mix(col, vec3(1.), smoothstep(.79, 0.85, r));

            gl_FragColor = vec4(col, 1.);
        }

    <\/script>

    <script id="vertexShader" type="x-shader/x-vertex">
        varying vec2 vUv;

        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
        }
    <\/script>
   `);this.shadowRoot?.appendChild(t)}}const Ke=Me.tag;customElements.get(Ke)||customElements.define(Ke,Me);class Se extends HTMLElement{constructor(){super(),this._cleanupFns=[],this.attachShadow({mode:"open"})}static{this.tag="mozg-threejs-water"}connectedCallback(){this.css(),this.html(),this.js()}disconnectedCallback(){if(this._cleanupFns.length){const t=this._cleanupFns.splice(0,this._cleanupFns.length);for(const o of t)try{o()}catch{}}const e=this.shadowRoot;if(e)for(;e.firstChild;)e.removeChild(e.firstChild)}static get observedAttributes(){return["mode"]}attributeChangedCallback(e,t,o){}adoptedCallback(){}css(){const e=document.createElement("style");e.textContent=`
:host {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
}

canvas {
}
    `,this.shadowRoot?.appendChild(e)}onScriptLoaded(){return(function(t){const o=window.THREE;if(!o)return console.error("THREE not available on window"),{};const c=t?.getElementById("canvas");if(!c)return console.error("Canvas element not found"),{};const i=window.innerWidth,h=window.innerHeight;let a,n=null;const s=new o.Color("black"),p=new o.Color("white");function l(m){return new Promise(r=>{new o.FileLoader().load(m,u=>{r(u)})})}return l("https://rawcdn.githack.com/martinRenou/threejs-water/4d64f76fdb12224ea5a4b698fc2c0c75bff8058a/shaders/utils.glsl").then(m=>{o.ShaderChunk.utils=m;const r=new o.PerspectiveCamera(35,i/h,.01,100);r.position.set(0,-.6,-2),r.rotation.set(0,0,0);const d=new o.WebGLRenderer({canvas:c||void 0,antialias:!0,alpha:!0});d.setPixelRatio(window.devicePixelRatio),d.setSize(i,h),d.autoClear=!1;const u=[.3,.5,-.3];a=new o.OrbitControls(r,d.domElement),a.autoRotate=!1,a.autoRotateSpeed=2,a.enableDamping=!0,a.enablePan=!1,a.minDistance=.01,a.maxDistance=2,a.minPolarAngle=0,a.maxPolarAngle=Math.PI/2,a.target.set(0,-.6,0),a.update();const f=new o.Raycaster,C=new o.Vector2,g=new o.PlaneGeometry(2,2);for(const T of g.vertices)T.z=-T.y,T.y=0;const S=new o.Mesh(g),I=new o.CubeTextureLoader().load(["https://martinRenou.github.io/threejs-water/xpos.jpg","https://martinRenou.github.io/threejs-water/xneg.jpg","https://martinRenou.github.io/threejs-water/ypos.jpg","https://martinRenou.github.io/threejs-water/ypos.jpg","https://martinRenou.github.io/threejs-water/zpos.jpg","https://martinRenou.github.io/threejs-water/zneg.jpg"]),v=new o.TextureLoader().load("https://martinRenou.github.io/threejs-water/tiles.jpg");class x{constructor(){this._camera=new o.OrthographicCamera(0,1,1,0,0,2e3),this._geometry=new o.PlaneGeometry(2,2),this._textureA=new o.WebGLRenderTarget(256,256,{type:o.FloatType}),this._textureB=new o.WebGLRenderTarget(256,256,{type:o.FloatType}),this.texture=this._textureA;const w=[l("https://rawcdn.githack.com/martinRenou/threejs-water/4d64f76fdb12224ea5a4b698fc2c0c75bff8058a/shaders/simulation/vertex.glsl"),l("https://rawcdn.githack.com/martinRenou/threejs-water/4d64f76fdb12224ea5a4b698fc2c0c75bff8058a/shaders/simulation/drop_fragment.glsl"),l("https://rawcdn.githack.com/martinRenou/threejs-water/4d64f76fdb12224ea5a4b698fc2c0c75bff8058a/shaders/simulation/normal_fragment.glsl"),l("https://rawcdn.githack.com/martinRenou/threejs-water/4d64f76fdb12224ea5a4b698fc2c0c75bff8058a/shaders/simulation/update_fragment.glsl")];this.loaded=Promise.all(w).then(([L,A,X,G])=>{const J=new o.RawShaderMaterial({uniforms:{center:{value:[0,0]},radius:{value:0},strength:{value:0},texture:{value:null}},vertexShader:L,fragmentShader:A}),U=new o.RawShaderMaterial({uniforms:{delta:{value:[1/256,1/256]},texture:{value:null}},vertexShader:L,fragmentShader:X}),V=new o.RawShaderMaterial({uniforms:{delta:{value:[1/256,1/256]},texture:{value:null}},vertexShader:L,fragmentShader:G});this._dropMesh=new o.Mesh(this._geometry,J),this._normalMesh=new o.Mesh(this._geometry,U),this._updateMesh=new o.Mesh(this._geometry,V)})}addDrop(w,L,A,X,G){this._dropMesh.material.uniforms.center.value=[L,A],this._dropMesh.material.uniforms.radius.value=X,this._dropMesh.material.uniforms.strength.value=G,this._render(w,this._dropMesh)}stepSimulation(w){this._render(w,this._updateMesh)}updateNormals(w){this._render(w,this._normalMesh)}_render(w,L){const A=this.texture,X=this.texture===this._textureA?this._textureB:this._textureA;L.material.uniforms.texture.value=A.texture,w.setRenderTarget(X),w.render(L,this._camera),this.texture=X}}class y{constructor(w){this._camera=new o.OrthographicCamera(0,1,1,0,0,2e3),this._geometry=w,this.texture=new o.WebGLRenderTarget(1024,1024,{type:o.UNSIGNED_BYTE});const L=[l("https://rawcdn.githack.com/martinRenou/threejs-water/4d64f76fdb12224ea5a4b698fc2c0c75bff8058a/shaders/caustics/vertex.glsl"),l("https://rawcdn.githack.com/martinRenou/threejs-water/4d64f76fdb12224ea5a4b698fc2c0c75bff8058a/shaders/caustics/fragment.glsl")];this.loaded=Promise.all(L).then(([A,X])=>{const G=new o.RawShaderMaterial({uniforms:{light:{value:u},water:{value:null}},vertexShader:A,fragmentShader:X});this._causticMesh=new o.Mesh(this._geometry,G)})}update(w,L){this._causticMesh.material.uniforms.water.value=L,w.setRenderTarget(this.texture),w.setClearColor(s,0),w.clear(),w.render(this._causticMesh,this._camera)}}class R{constructor(){this.geometry=new o.PlaneGeometry(2,2,200,200);const w=t?.getElementById("vertexShaderWater"),L=t?.getElementById("fragmentShaderWater"),A=w?.textContent??"",X=L?.textContent??"";this.material=new o.RawShaderMaterial({uniforms:{light:{value:u},tiles:{value:v},sky:{value:I},water:{value:null},causticTex:{value:null},underwater:{value:!1}},vertexShader:A,fragmentShader:X}),this.mesh=new o.Mesh(this.geometry,this.material)}draw(w,L,A){this.material.uniforms.water.value=L,this.material.uniforms.causticTex.value=A,this.material.side=o.FrontSide,this.material.uniforms.underwater.value=!0,w.render(this.mesh,r),this.material.side=o.BackSide,this.material.uniforms.underwater.value=!1,w.render(this.mesh,r)}}class E{constructor(){this._geometry=new o.BufferGeometry;const w=new Float32Array([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,1,-1,1,-1,1,1,1,1,-1,-1,-1,1,-1,-1,-1,-1,1,1,-1,1,-1,1,-1,-1,1,1,1,1,-1,1,1,1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,-1,-1,-1,1,1,-1,1,-1,1,1,1,1,1]),L=new Uint32Array([0,1,2,2,1,3,4,5,6,6,5,7,12,13,14,14,13,15,16,17,18,18,17,19,20,21,22,22,21,23]);this._geometry.setAttribute("position",new o.BufferAttribute(w,3)),this._geometry.setIndex(new o.BufferAttribute(L,1));const A=t?.getElementById("vertexShaderPool"),X=t?.getElementById("fragmentShaderPool"),G=A?.textContent??"",J=X?.textContent??"";this._material=new o.RawShaderMaterial({uniforms:{light:{value:u},tiles:{value:v},water:{value:null},causticTex:{value:null}},vertexShader:G,fragmentShader:J}),this._material.side=o.FrontSide,this._mesh=new o.Mesh(this._geometry,this._material)}draw(w,L,A){this._material.uniforms.water.value=L,this._material.uniforms.causticTex.value=A,w.render(this._mesh,r)}}class j{constructor(){this._camera=new o.OrthographicCamera(0,1,1,0,0,1),this._geometry=new o.PlaneGeometry;const w=t?.getElementById("vertexShaderDebug"),L=t?.getElementById("fragmentShaderDebug"),A=w?.textContent??"",X=L?.textContent??"";this._material=new o.RawShaderMaterial({uniforms:{texture:{value:null}},vertexShader:A,fragmentShader:X}),this._mesh=new o.Mesh(this._geometry,this._material)}draw(w,L){this._material.uniforms.texture.value=L,w.setRenderTarget(null),w.render(this._mesh,this._camera)}}const k=new x,Q=new R,N=new y(Q.geometry),H=new E,Y=new j;function D(){n=window.requestAnimationFrame(D),k.stepSimulation(d),k.updateNormals(d);const T=k.texture.texture;N.update(d,T);const w=N.texture.texture;d.setRenderTarget(null),d.setClearColor(p,1),d.clear(),Q.draw(d,T,w),H.draw(d,T,w),a.update()}function O(T){const w=c.getBoundingClientRect();C.x=(T.clientX-w.left)*2/i-1,C.y=-(T.clientY-w.top)*2/h+1,f.setFromCamera(C,r);const L=f.intersectObject(S);for(const A of L)k.addDrop(d,A.point.x,A.point.z,.03,.04)}function P(){r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),d.setSize(window.innerWidth,window.innerHeight)}const Z=[k.loaded,N.loaded,Q.loaded,H.loaded,Y.loaded];Promise.all(Z).then(()=>{const T={handleEvent:O};c.addEventListener("mousemove",T);for(let w=0;w<20;w++)k.addDrop(d,Math.random()*2-1,Math.random()*2-1,.03,w&1?.02:-.02);D(),window.addEventListener("resize",P),t?.host?._cleanupFns?.push?.(()=>{try{c.removeEventListener("mousemove",T)}catch{}try{window.removeEventListener("resize",P)}catch{}try{n!==null&&(cancelAnimationFrame(n),n=null)}catch{}try{a&&typeof a.dispose=="function"&&a.dispose()}catch{}try{d&&d.domElement&&d.domElement.parentNode&&d.domElement.parentNode.removeChild(d.domElement),d&&typeof d.dispose=="function"&&d.dispose()}catch{}})})}),{}})(this.shadowRoot)}js(){const e={css:[],js:[{src:"https://cdn.jsdelivr.net/npm/three@0.113.0/build/three.min.js",onload:()=>{},onerror:()=>{console.error("Falha ao carregar three!")}}]},t={css:[],js:[{src:"https://cdn.jsdelivr.net/npm/three@0.113.0/examples/js/controls/OrbitControls.js",onload:()=>{},onerror:()=>{console.error("Falha ao carregar OrbitControls!")}}]};ae(this.shadowRoot,e).then(()=>ae(this.shadowRoot,t)).then(()=>{try{const o=window;o&&o.THREE&&!o.THREE.OrbitControls&&o.OrbitControls&&(o.THREE.OrbitControls=o.OrbitControls)}catch{}this.onScriptLoaded()}).catch(o=>{console.error("Erro ao carregar os recursos:",o)})}html(){const t=document.createRange().createContextualFragment(`
    <canvas id="canvas"></canvas>

    <script type="x-shader/x-vertex" id="vertexShaderWater">
      uniform mat4 projectionMatrix;
      uniform mat4 modelViewMatrix;
      uniform sampler2D water;

      attribute vec3 position;

      varying vec3 eye;
      varying vec3 pos;


      void main() {
        vec4 info = texture2D(water, position.xy * 0.5 + 0.5);
        pos = position.xzy;
        pos.y += info.r;

        vec3 axis_x = vec3(modelViewMatrix[0].x, modelViewMatrix[0].y, modelViewMatrix[0].z);
        vec3 axis_y = vec3(modelViewMatrix[1].x, modelViewMatrix[1].y, modelViewMatrix[1].z);
        vec3 axis_z = vec3(modelViewMatrix[2].x, modelViewMatrix[2].y, modelViewMatrix[2].z);
        vec3 offset = vec3(modelViewMatrix[3].x, modelViewMatrix[3].y, modelViewMatrix[3].z);

        eye = vec3(dot(-offset, axis_x), dot(-offset, axis_y), dot(-offset, axis_z));

        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
    <\/script>

    <script type="x-shader/x-fragment" id="fragmentShaderWater">
      precision highp float;
      precision highp int;

      #include <utils>

      uniform float underwater;
      uniform samplerCube sky;

      varying vec3 eye;
      varying vec3 pos;


      vec3 getSurfaceRayColor(vec3 origin, vec3 ray, vec3 waterColor) {
        vec3 color;

        if (ray.y < 0.0) {
          vec2 t = intersectCube(origin, ray, vec3(-1.0, -poolHeight, -1.0), vec3(1.0, 2.0, 1.0));
          color = getWallColor(origin + ray * t.y);
        } else {
          vec2 t = intersectCube(origin, ray, vec3(-1.0, -poolHeight, -1.0), vec3(1.0, 2.0, 1.0));
          vec3 hit = origin + ray * t.y;
          if (hit.y < 7.0 / 12.0) {
            color = getWallColor(hit);
          } else {
            color = textureCube(sky, ray).rgb;
            color += 0.01 * vec3(pow(max(0.0, dot(light, ray)), 20.0)) * vec3(10.0, 8.0, 6.0);
          }
        }

        if (ray.y < 0.0) color *= waterColor;

        return color;
      }


      void main() {
        vec2 coord = pos.xz * 0.5 + 0.5;
        vec4 info = texture2D(water, coord);

        /* make water look more "peaked" */
        for (int i = 0; i < 5; i++) {
          coord += info.ba * 0.005;
          info = texture2D(water, coord);
        }

        vec3 normal = vec3(info.b, sqrt(1.0 - dot(info.ba, info.ba)), info.a);
        vec3 incomingRay = normalize(pos - eye);

        if (underwater == 1.) {
          normal = -normal;
          vec3 reflectedRay = reflect(incomingRay, normal);
          vec3 refractedRay = refract(incomingRay, normal, IOR_WATER / IOR_AIR);
          float fresnel = mix(0.5, 1.0, pow(1.0 - dot(normal, -incomingRay), 3.0));

          vec3 reflectedColor = getSurfaceRayColor(pos, reflectedRay, underwaterColor);
          vec3 refractedColor = getSurfaceRayColor(pos, refractedRay, vec3(1.0)) * vec3(0.8, 1.0, 1.1);

          gl_FragColor = vec4(mix(reflectedColor, refractedColor, (1.0 - fresnel) * length(refractedRay)), 1.0);
        } else {
          vec3 reflectedRay = reflect(incomingRay, normal);
          vec3 refractedRay = refract(incomingRay, normal, IOR_AIR / IOR_WATER);
          float fresnel = mix(0.25, 1.0, pow(1.0 - dot(normal, -incomingRay), 3.0));

          vec3 reflectedColor = getSurfaceRayColor(pos, reflectedRay, abovewaterColor);
          vec3 refractedColor = getSurfaceRayColor(pos, refractedRay, abovewaterColor);

          gl_FragColor = vec4(mix(refractedColor, reflectedColor, fresnel), 1.0);
        }
      }
    <\/script>

    <script type="x-shader/x-vertex" id="vertexShaderPool">
      #include <utils>

        uniform mat4 projectionMatrix;
        uniform mat4 modelViewMatrix;

        attribute vec3 position;

        varying vec3 pos;


        void main() {
          pos = position.xyz;
          pos.y = ((1.0 - pos.y) * (7.0 / 12.0) - 1.0) * poolHeight;

          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
    <\/script>

    <script type="x-shader/x-fragment" id="fragmentShaderPool">
      precision highp float;
      precision highp int;

      #include <utils>

      varying vec3 pos;


      void main() {
        gl_FragColor = vec4(getWallColor(pos), 1.0);

        vec4 info = texture2D(water, pos.xz * 0.5 + 0.5);

        if (pos.y < info.r) {
          gl_FragColor.rgb *= underwaterColor * 1.2;
        }
      }
    <\/script>

    <script type="x-shader/x-vertex" id="vertexShaderDebug">
      uniform sampler2D texture;
      attribute vec3 position;
      varying vec2 coord;


      void main() {
        coord = position.xy + 0.5;

        gl_Position = vec4(position.xy * 2., 0., 1.);
      }
    <\/script>

    <script type="x-shader/x-fragment" id="fragmentShaderDebug">
      precision highp float;
      precision highp int;

      uniform sampler2D texture;
      varying vec2 coord;


      void main() {
        vec4 color = texture2D(texture, coord);

        gl_FragColor = vec4(color.x, color.y, color.z, 1.);
      }
    <\/script>

   `);this.shadowRoot?.appendChild(t)}}const qe=Se.tag;customElements.get(qe)||customElements.define(qe,Se);class Re extends HTMLElement{static{this.tag="mozg-dock-gal"}constructor(){super(),this.attachShadow({mode:"open"}),this.render()}connectedCallback(){this.initComponent()}disconnectedCallback(){if(this.shadowRoot)for(;this.shadowRoot.firstChild;)this.shadowRoot.removeChild(this.shadowRoot.firstChild)}static get observedAttributes(){return["mode"]}attributeChangedCallback(e,t,o){}adoptedCallback(){}initComponent(){}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`
  <style>
   body {
  background: hsl(0, 0%, 97%);
  }

  svg {
    display: inline-block;
    width: 32px;
  }

  .main {
    background: white;
    position: absolute;
    left: 68px;
    top: 8px;
    right: 8px;
    bottom: 8px;
    border-radius: 8px;
    filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.15));
  }


  .stack {
    position: relative;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    width: 32px;
    transition: all 0.2s;
    filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.2));
    position: absolute;
    bottom: 8px;
    left: 8px;
    background: hsl(360, 0%, 93%);
    padding: 8px 10px 4px 10px;
    border-radius: 12px;
    cursor: pointer;
    // overflow: hidden;
  }

  svg {
    height: 32px;
    width: 32px;
    border-radius: 4px;
    background-size: cover;
    overflow: hidden;
    position: relative;
    margin-bottom: 4px;
    transition: all 0.15s;
    transform-origin: 50% 50%;
  }
  svg:nth-child(2) {
    z-index: 3;

  }
  svg:nth-child(3) {
    z-index: 2;
  }
  svg:nth-child(4) {
    z-index: 1;
  }

  .icon-add {
    width: 12px;
    height: 12px;
  }

  .icon-chevron {
    width: 6px;
    height: 7px;
  }

  .stack.closed {
    padding-top: 0;
    svg {
      transform: scale(0%) translate(0px);
      height: 0;
      opacity: 0;
    }

    svg:nth-child(n+4) {
      margin-bottom: 1px;
    }

    svg:nth-child(1) {
      opacity: 1;
      width: 6px;
      height: 7px;
      transform: scale(100%) translate(0px) rotate(-180deg);
    }

    svg:nth-child(2) {
      transform: scale(100%) translate(0px);
      opacity: 1;
      width: 32px;
      height: 32px;
    }
    svg:nth-child(3) {
      transform: scale(83.3333%) translateY(0px);
      opacity: 0.8;
      width: 32px;
      height: 32px;
      margin-bottom: -26px;
    }
    svg:nth-child(4) {
      transform: scale(66.6667%) translateY(0px);
      opacity: 0.6;
      width: 32px;
      height: 32px;
      margin-bottom: -26px;
    }
  }


  .stack.closed:hover {
    padding-top: 0;
    svg:nth-child(3) {
      transform: scale(83.3333%) translateY(-2px);
      opacity: 1;
    }
    svg:nth-child(4) {
      transform: scale(66.6667%) translateY(-2px);
      opacity: 1;
    }
  }

  </style>


  <div class="stack">
    <svg width="6" height="7" viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg"
         class="icon-chevron">
  <g clip-path="url(#clip0_3_960)">
  <path d="M0.0385628 2.09652C0.0385628 1.90804 0.112293 1.73129 0.246573 1.59847C0.379873 1.46712 0.556143 1.39535 0.743153 1.39681C0.930162 1.39827 1.10545 1.47201 1.23631 1.60482L2.99998 3.39046L4.749 1.61946C4.88035 1.48665 5.05564 1.41243 5.24265 1.41145C5.42966 1.40999 5.60593 1.48176 5.73874 1.61311C5.87302 1.74592 5.94724 1.92268 5.94724 2.11165C5.94724 2.29671 5.87546 2.47151 5.74509 2.60335L3.49802 4.87825C3.35837 5.01595 3.1821 5.08772 2.99509 5.08626C2.80808 5.0848 2.63279 5.01106 2.50193 4.87825L0.240213 2.5887C0.110333 2.45686 0.0385628 2.28207 0.0385628 2.09652Z" fill="#292929"/>
  </g>
  <defs>
  <clipPath id="clip0_3_960">
  <rect width="6" height="6" fill="white" transform="matrix(0 1 -1 0 5.99999 0.111145)"/>
  </clipPath>
  </defs>
  </svg>

  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 56 54"><g clip-path="url(#a)"><mask id="b" width="56" height="55" x="0" y="-1" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" d="M9.91-.0352h36.18c5.473 0 9.91 4.437 9.91 9.91v34.18c0 5.473-4.437 9.91-9.91 9.91H9.91c-5.473 0-9.91-4.437-9.91-9.91v-34.18c0-5.473 4.437-9.91 9.91-9.91Z"/></mask><g mask="url(#b)"><circle cx="27.8782" cy="19.8778" r="23.1272" fill="url(#c)" transform="rotate(18 27.8782 19.8778)"/><circle cx="-.1152" cy="29.3833" r="17.6449" fill="url(#d)" transform="rotate(18 -.1152 29.3833)"/><circle cx="49.3976" cy="3.8978" r="39.8261" fill="url(#e)" transform="rotate(18 49.3976 3.8978)"/><circle cx="22.6758" cy="-4.825" r="29.2809" fill="url(#f)" transform="rotate(18 22.6758 -4.825)"/><circle cx="3.8783" cy="53.8777" r="27.2614" fill="url(#g)" transform="rotate(18 3.8783 53.8777)"/><circle cx="9.3348" cy="39.8338" r="20.4621" fill="url(#h)" transform="rotate(18 9.3348 39.8338)"/><circle cx="5.8782" cy="7.8782" r="29.2809" fill="url(#i)" transform="rotate(18 5.8782 7.8782)"/><circle cx="54.4761" cy="59.4764" r="40.1243" fill="url(#j)" transform="rotate(18 54.4761 59.4764)"/><circle cx="26.195" cy="52.1966" r="15.4931" fill="url(#k)" transform="rotate(18 26.195 52.1966)"/><circle cx="37.8976" cy="34.8964" r="24.091" fill="url(#l)" transform="rotate(18 37.8976 34.8964)"/><circle cx="16.6436" cy="48.9185" r="13.4362" fill="url(#m)" fill-opacity=".4" transform="rotate(18 16.6436 48.9185)"/><circle cx="40.7751" cy="36.7752" r="13.6698" fill="url(#n)" transform="rotate(18 40.7751 36.7752)"/><circle cx="22.6758" cy="-4.825" r="29.2809" fill="url(#o)" transform="rotate(18 22.6758 -4.825)"/><circle cx="54.2182" cy="19.7185" r="12.0647" fill="url(#p)" transform="rotate(18 54.2182 19.7185)"/><circle cx="53.3417" cy="33.8431" r="16.8469" fill="url(#q)" transform="rotate(18 53.3417 33.8431)"/><ellipse cx="17.3573" cy="23.7463" fill="url(#r)" rx="13.9473" ry="6.7788" transform="rotate(18 17.3573 23.7463)"/><ellipse cx="5.1096" cy="13.2108" fill="url(#s)" rx="11.9252" ry="8.973" transform="rotate(18 5.1096 13.2108)"/><ellipse cx="6.1096" cy="6.2108" fill="url(#t)" rx="11.9252" ry="8.973" transform="rotate(18 6.1096 6.2108)"/><circle cx="43.1066" cy="31.1065" r="12.7884" fill="url(#u)" fill-opacity=".4" transform="rotate(18 43.1066 31.1065)"/><circle cx="4.9211" cy="49.9219" r="16.0318" fill="url(#v)" transform="rotate(18 4.9211 49.9219)"/></g><path fill="#fff" d="M43.589 16.5698C40.8653 13.6231 37.1356 12 33.0869 12c-3.8842 0-7.8348 1.677-10.3618 4.3882a12.3748 12.3748 0 0 0-1.3951-.079C13.714 16.3092 9 22.7604 9 28.7375c0 3.1627 1.2607 6.3244 3.4588 8.674 2.3313 2.4919 5.4818 3.864 8.8712 3.864h11.7569c7.9798 0 14.4717-6.5883 14.4717-14.6867 0-3.638-1.4468-7.2899-3.9696-10.019Zm-22.4785 22.587c-5.6329 0-10.2155-4.6345-10.2155-10.3307 0-5.6594 4.5615-10.2635 10.1683-10.2635 2.5295 0 4.9412.924 6.7939 2.6026l.0501.0435 4.2363 4.3776c.3387.3453.5232.809.5181 1.3033-.0049.4883-.2013.9469-.5528 1.2912a1.8087 1.8087 0 0 1-1.2706.5173c-.4982 0-.9633-.1977-1.3099-.5567l-4.2037-4.3442a6.5023 6.5023 0 0 0-4.2575-1.59c-3.5958 0-6.5212 2.9405-6.5212 6.5552 0 3.6068 3.0512 6.6542 6.663 6.6542l.8391.0039.0078.0238c1.2014 1.6691 4.5479 3.7125 4.5479 3.7125h-5.4933Zm20.9468-3.7035c-2.3482 2.4343-5.4578 3.7749-8.7566 3.7749-3.1361 0-6.3392-1.4119-8.7877-3.8737l-5.5991-5.6503c-.7027-.7278-.6874-1.8929.0307-2.6012.3451-.337.7977-.5222 1.2754-.5222.4982 0 .9621.1967 1.306.5531l5.5598 5.6143c1.7652 1.7817 4.0305 2.8035 6.2149 2.8035 2.3175 0 4.5034-.9517 6.1552-2.6795 1.6487-1.7214 2.5567-3.9757 2.5567-6.3475 0-4.8526-3.9222-8.8007-8.7433-8.8007-1.8389 0-3.3585.358-4.8425 1.4219-.0161-.0131-.4182-.2815-.8723-.5594a20.0509 20.0509 0 0 0-.8236-.4743c-.2655-.1454-1.0268-.5215-1.4797-.71a7.512 7.512 0 0 0-.3196-.1226l.0128-.0069c2.3045-2.1693 5.1723-3.2252 8.3249-3.2252 6.8343 0 12.3943 5.5973 12.3943 12.4772 0 3.3421-1.2808 6.5128-3.6063 8.9286Z"/></g><defs><radialGradient id="c" cx="0" cy="0" r="1" gradientTransform="rotate(90 4 23.878) scale(23.127)" gradientUnits="userSpaceOnUse"><stop stop-color="#FD109A"/><stop offset="1" stop-color="#FD109A" stop-opacity="0"/></radialGradient><radialGradient id="d" cx="0" cy="0" r="1" gradientTransform="rotate(90 -14.7493 14.6341) scale(17.645)" gradientUnits="userSpaceOnUse"><stop stop-color="#9D57FF"/><stop offset="1" stop-color="#9D57FF" stop-opacity="0"/></radialGradient><radialGradient id="e" cx="0" cy="0" r="1" gradientTransform="rotate(90 22.7499 26.6477) scale(39.826)" gradientUnits="userSpaceOnUse"><stop stop-color="#FB4201"/><stop offset="1" stop-color="#FB4201" stop-opacity="0"/></radialGradient><radialGradient id="f" cx="0" cy="0" r="1" gradientTransform="rotate(90 13.7504 8.9254) scale(29.281)" gradientUnits="userSpaceOnUse"><stop stop-color="#F90600"/><stop offset="1" stop-color="#F90600" stop-opacity="0"/></radialGradient><radialGradient id="g" cx="0" cy="0" r="1" gradientTransform="rotate(90 -24.9997 28.878) scale(27.261)" gradientUnits="userSpaceOnUse"><stop stop-color="#3988FE"/><stop offset=".195" stop-color="#3988FE"/><stop offset="1" stop-color="#3988FE" stop-opacity="0"/></radialGradient><radialGradient id="h" cx="0" cy="0" r="1" gradientTransform="rotate(90 -15.2495 24.5842) scale(20.462)" gradientUnits="userSpaceOnUse"><stop stop-color="#727DF9"/><stop offset="1" stop-color="#3987FE" stop-opacity="0"/></radialGradient><radialGradient id="i" cx="0" cy="0" r="1" gradientTransform="rotate(90 -1 6.8782) scale(29.281)" gradientUnits="userSpaceOnUse"><stop stop-color="#FD109A"/><stop offset="1" stop-color="#FD109A" stop-opacity="0"/></radialGradient><radialGradient id="j" cx="0" cy="0" r="1" gradientTransform="rotate(90 -2.5001 56.9763) scale(40.124)" gradientUnits="userSpaceOnUse"><stop stop-color="#6CE342"/><stop offset=".585" stop-color="#6CE342"/><stop offset="1" stop-color="#6CE342" stop-opacity="0"/></radialGradient><radialGradient id="k" cx="0" cy="0" r="1" gradientTransform="rotate(90 -13.0009 39.1956) scale(15.493)" gradientUnits="userSpaceOnUse"><stop stop-color="#94B5AC"/><stop offset="1" stop-color="#94B5AC" stop-opacity="0"/></radialGradient><radialGradient id="l" cx="0" cy="0" r="1" gradientTransform="rotate(90 1.5006 36.397) scale(24.091)" gradientUnits="userSpaceOnUse"><stop stop-color="#FED20F"/><stop offset="1" stop-color="#FED20F" stop-opacity="0"/></radialGradient><radialGradient id="m" cx="0" cy="0" r="1" gradientTransform="rotate(90 -16.1376 32.7807) scale(13.436)" gradientUnits="userSpaceOnUse"><stop stop-color="#3987FE"/><stop offset="1" stop-color="#3987FE" stop-opacity="0"/></radialGradient><radialGradient id="n" cx="0" cy="0" r="1" gradientTransform="rotate(90 2.0002 38.7754) scale(13.67)" gradientUnits="userSpaceOnUse"><stop stop-color="#FDD61D"/><stop offset="1" stop-color="#FDD61D" stop-opacity="0"/></radialGradient><radialGradient id="o" cx="0" cy="0" r="1" gradientTransform="rotate(90 13.7504 8.9254) scale(29.281)" gradientUnits="userSpaceOnUse"><stop stop-color="#F90600"/><stop offset="1" stop-color="#F90600" stop-opacity="0"/></radialGradient><radialGradient id="p" cx="0" cy="0" r="1" gradientTransform="rotate(90 17.2499 36.9684) scale(12.065)" gradientUnits="userSpaceOnUse"><stop stop-color="#FD8000"/><stop offset="1" stop-color="#FD8000" stop-opacity="0"/></radialGradient><radialGradient id="q" cx="0" cy="0" r="1" gradientTransform="rotate(90 9.7495 43.5925) scale(16.847)" gradientUnits="userSpaceOnUse"><stop stop-color="#FED20F"/><stop offset="1" stop-color="#FED20F" stop-opacity="0"/></radialGradient><radialGradient id="r" cx="0" cy="0" r="1" gradientTransform="matrix(0 6.779 -13.947 0 17.3573 23.7463)" gradientUnits="userSpaceOnUse"><stop stop-color="#FE53EC"/><stop offset="1" stop-color="#FE53EC" stop-opacity="0"/></radialGradient><radialGradient id="s" cx="0" cy="0" r="1" gradientTransform="matrix(0 8.973 -11.925 0 5.1096 13.2108)" gradientUnits="userSpaceOnUse"><stop stop-color="#F91CB9"/><stop offset="1" stop-color="#F91CB9" stop-opacity="0"/></radialGradient><radialGradient id="t" cx="0" cy="0" r="1" gradientTransform="matrix(0 8.973 -11.925 0 6.1096 6.2108)" gradientUnits="userSpaceOnUse"><stop stop-color="#F91CB9"/><stop offset="1" stop-color="#F91CB9" stop-opacity="0"/></radialGradient><radialGradient id="u" cx="0" cy="0" r="1" gradientTransform="rotate(90 6 37.1065) scale(12.788)" gradientUnits="userSpaceOnUse"><stop stop-color="#FEB902"/><stop offset="1" stop-color="#FEB902" stop-opacity="0"/></radialGradient><radialGradient id="v" cx="0" cy="0" r="1" gradientTransform="rotate(90 -22.5004 27.4218) scale(16.032)" gradientUnits="userSpaceOnUse"><stop stop-color="#358AFF"/><stop offset="1" stop-color="#358AFF" stop-opacity="0"/></radialGradient><clipPath id="a"><path fill="#fff" d="M0 0h56v54H0z"/></clipPath></defs></svg>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 57 54"><g clip-path="url(#a)"><path fill="#EB1000" d="M46.3048 0h-36.18c-5.4731 0-9.91 4.4369-9.91 9.91v34.18c0 5.4731 4.4369 9.91 9.91 9.91h36.18c5.4732 0 9.91-4.4369 9.91-9.91V9.91c0-5.4731-4.4368-9.91-9.91-9.91Z"/><path fill="#fff" fill-rule="evenodd" d="m41.0348 16.011-2.26-.51c-.29-.07-.61.01-.83.22l-1.7 1.57c-.67.62-1.74.01-1.54-.88l.51-2.26c.07-.3-.01-.61-.22-.83l-1.57-1.7c-.62-.67 0-1.73.89-1.53l2.26.51c.29.07.61-.01.83-.22l1.7-1.57c.67-.62 1.74-.01 1.54.88l-.51 2.26c-.07.3.01.61.22.83l1.57 1.7c.62.67 0 1.73-.89 1.53ZM21.785 37.5684c0 .22-.1.32-.32.32h-4.57c-.18 0-.25-.13-.25-.32v-23.63c0-.21.07-.29.28-.29h14.65c.25 0 .31.07.35.31l.41 3.99c.04.22-.07.32-.31.32h-10.24v5.62h9.23c.21 0 .31.07.31.29v4.04c0 .22-.11.29-.29.29h-9.25v9.06ZM35.0747 19.81c0-.21.1-.31.31-.31h4.55c.24 0 .31.06.31.3v17.74c0 .24-.07.34-.34.34h-4.46c-.25 0-.37-.11-.37-.35V19.81Z" clip-rule="evenodd"/></g><defs><clipPath id="a"><path fill="#fff" d="M.2148 0h56v54h-56z"/></clipPath></defs></svg>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 56 54"><defs><clipPath id="vapor-graphics--1003--b"><path fill="#fff" d="M0 0h56v54H0z"/></clipPath><pattern id="vapor-graphics--1004--d" width="1" height="1" patternContentUnits="objectBoundingBox"><use href="#vapor-graphics--1005--a" transform="scale(.00178 .00185)"/></pattern><image id="vapor-graphics--1005--a" width="561" height="540" data-name="Asset 318.png" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAjEAAAIcCAYAAAAHXf8cAAAACXBIWXMAAG66AABuugHW3rEXAAAgAElEQVR4nOy9fawlW3rW97y1z70z/sDdgw3+wNB9TQzGEOZOjIYYMLcnxg5OHKZNzEcM4R4CQSGJk06soFgCuZOgRI4CtGf8ge3I7iGgWDFOepSgKEqE70QiKJHI3AmJAkKW+/JhTGzs2/7Avrd775U/ar1rPetdq2rv0326++w+z8+uqapVq1ZV7b1v13Oe911rWUoJQgghhBDHxvS8b0AIIYQQ4nGQiBFCCCHEUSIRI4QQQoijRCJGCCGEEEeJRIwQQgghjhKJGCGEEEIcJRIxQgghhDhKJGKEEEIIcZRIxAghhBDiKJGIEUIIIcRRIhEjhBBCiKNEIkYIIYQQR4lEjBBCCCGOEokYIYQQQhwlEjFCCCGEOEokYoQQQghxlEjECCGEEOIokYgRQgghxFEiESOEEEKIo0QiRgghhBBHiUSMEEIIIY4SiRghhBBCHCUSMUIIIYQ4SiRihBBCCHGUSMQIIYQQ4iiRiBFCCCHEUSIRI4QQQoijRCJGCCGEEEeJRIwQQgghjhKJGCGEEEIcJRIxQgghhDhKJGKEEEIIcZRIxAghhBDiKJGIEUIIIcRRIhEjhBBCiKNEIkYIIYQQR4lEjBBCCCGOEokYIYQQQhwlEjFCCCGEOEokYoQQQghxlEjECCGEEOIokYgRQgghxFEiESOEEEKIo0QiRgghhBBHiUSMEEIIIY4SiRghhBBCHCUSMUIIIYQ4SiRihBBCCHGUSMQIIYQQ4iiRiBFCCCHEUSIRI4QQQoijRCJGCCGEEEeJRIwQQgghjhKJGCGEEEIcJRIxQgghhDhKJGKEEEIIcZRIxAghhBDiKJGIEUIIIcRRIhEjhBBCiKNEIkYIIYQQR4lEjBBCCCGOEokYIYQQQhwlEjFCCCGEOEokYoQQQghxlEjECCGEEOIokYgRQgghxFEiESOEEEKIo0QiRgghhBBHiUSMEEIIIY4SiRghhBBCHCUSMUIIIYQ4SiRihBBCCHGUSMQIIYQQ4iiRiBFCCCHEUSIRI4QQQoijRCJGCCGEEEeJRIwQQgghjhKJGCGEEEIcJRIxQgghhDhKJGKEEEIIcZRIxAghhBDiKJGIEUIIIcRRIhEjhBBCiKNEIkYIIYQQR4lEjBBCCCGOEokYIYQQQhwlEjFCCCGEOEokYoQQQghxlEjECCGEEOIokYgRQgghxFEiESOEEEKIo0QiRgghhBBHiUSMEEIIIY4SiRghhBBCHCUSMUIIIYQ4SiRihBBCCHGUSMQIIYQQ4iiRiBFCCCHEUSIRI4QQQoijRCJGCCGEEEeJRIwQQgghjhKJGCGEEEIcJRIxQgghhDhKJGKEEEIIcZRIxAghhBDiKJGIEUIIIcRRIhEjhBBCiKNEIkYIIYQQR4lEjBBCCCGOEokYIYQQQhwlEjFCCCGEOEokYoQQQghxlEjECCGEEOIokYgRQgghxFFy8rxvQAhxvLxjm+tAug7AF9TtBNjwtPsw3A/b99/zKN0f1hZCiAUspfS870EIcQS8Yyc3ALw6L+k6gNfmIwv/hthS+er+pwDcB/AmgDfe8yi98Tj3KoS4HEjECCGGvDO99CqAmwBuAGkWLKn8D7HouAzqoq27dF4vbN4AcO89DyVqhBAViRghROGd6b03gXQTSDcAXKsiZCBcyuY5ipjFdsqxBwDuwXDvPe+keyu1hRCXAIkYIS4572w+7ToSbs3iZSRcElZFzHB/4diTCZi4/QCGewDuvOcX05srZwshXlAkYoS4pLyz+YxTIJ2WUBFSCBctreP2WhkdO18BE7c/BeDOe34h3V1pSQjxgiERI8Ql453NZ54C6TaK6zIQJ4nLz0HExCTffSJmJGoOE0EPYLgD4M57/kl6e/mGhBAvAhIxQlwS3tn8klMAt4F0bS5ZEyq0TrEusCxYcvnQWTkgrPSkjgwA89yZLGZe/nmJGSFeVCRihHjBeefkyk0g3QFwrXdYDhAxvE4jVwYkJM4QUurOxf7jK/VtXP4WDLdf/jmFmYR4EZGIEeIF5Z2Tq69m8fJa66ycUbgMhcxSj6SnkBdzwDkLAoa3PwXDrZd/Vl20hXiRkIgR4gXj3ZP3XQVwC0jfMpcsOy5pNffl0DVzYF7MWXNgFvYtli+dU8u/DYbbL/+MQkxCvAhIxAjxAvHuS5/9KpDuAelan8syDiOlg5yZJ0zutXDsrIm947yXkUjZH34yvAXg9OUHcmWEOHY0AaQQLwjvvvw5twF8EsC1YlMYBm/8sG1W63XWRqxvC9sLp4yqPMG+2RMLGAC4BsMPv3vV7izcuRDiSJATI8SR8+7Ln3s1uy+vIe2w10lxh8YApIR0SIKv/zthhzgyKz2XziJY4vGzbI/aHYufTwG4+fJPa/JJIY4RiRghjph33/N5ryKlN4B0pYqVvHQD1y2Jm5T/f5+YWRIrh3S9xv6xYhASdLnOkwqY9fUDADdf/imFl4Q4NhROEuJIefc9n38K4JMwXKlxFnpDd+Gc5dBPKgLj0IFalsoX6hyQ49L1MBqJjicRMMtuzBUYfvjdz7bT8c0LIS4qEjFCHCHvvucLbgP4/nkvxGBs8ObmvJfSrafWMVg+tNR1mupzrs3ebfTtWXuri+5L3G5vua+zTwQt1a/r73/3c+zu4IpCiAuKwklCHBnvvvdX3AXweg0FDcJDpXwpHLQUevIcGew59yzbeZ/ES+GQHJlDQklrx5YEzbKY+djLP5FOIYS48MiJEeKIePe9v/IuYK+PXRavxeXuunCFwR8u5gJmicfNsM17C7eIffuHXmoUchq5QPH88fr1h58rR0aIY0AiRogj4eGnXbtrZq+bWR+CcTq14OW+sLBpDgC53cW2HxN73Mkfz6KV1kJMj7MArz/8PAkZIS46EjFCHAEPP/36XQCvc9ksZpaST/Yljfgpa4PTcT3gsByYut2JrSVxtba/9ChLdbl8TdjsW7uQ+XwJGSEuMsqJEeKC8/DTv+gukF7vc114AUo+y+h4QhUsw/PbvJhxbsz6tnXlcWwZwvIt0X48fnD5PmfmjEImdvIC8LGXfkw5MkJcROTECHGBefgZX3wbZq83Xai7PJf6lp7NkOzQcC+lVQfDap3S3NxjqT/B4lnLqSc2uC5VNgPSmvOy5OIsCZUnDSHFh6n7rz/8Qo3uK8RFRE6MEBeUh5/5a06R0vePXZM9+8GlSSvuzdK57b8N8/asb87SOym3d0gYia2ZfdGwte0lwbPUXljbkpgB/vBLfy/dhRDiwiARI8QF5OFnfsmrQBiJt0wpsCJaht2t5/3E5/OxfW0ZqJ1DtlfCSWfJiTkkZDQq2xcyWjlmE+2P63zgpb+b3oQQ4kIgESPEBePhL/nSq0B6E0jXVh0WFyWLdVC2u1yZNK43bg9UJ26HMhsdGzgxwP6ys7govn2ImFlpZ8WF8fUDANdfeiu9Pbh7IcQzRjkxQlw87gK4BmAl4YQOGi0LCR5dEwYs9qcux5aundZzSeJJI7dlreyQ/JfhPQ/u5ZB22IXZ384VGO4N7kAI8RyQiBHiAvHws379LQAfbkuDUGkSfMMbt9SZunOsGx+GNqMI4Xa7F/tSnMePp0Gbg/1REyOxMaq7JHqW6o7OXRIr++pNeO3hK3ZrcEUhxDNG4SQhLggPP+uffhXAJwHOXcF60m4a1LVRWGiul4ZTEXBddOe0eTYYbxuXreTEOGcRHUvHeXsa1FkTMYM2uymn1rbn/Q+89CPKjxHieSInRoiLgtndNszjcY6BC8POC0LdzpWxEiuxQ0NIhtAO1pfFZxpdZ6FsSXjsc0xiMu4+ATOosxiJW3do7i49thDi2SARI8QF4OHVV2/D7P1jgRKIQiOKnEbw8HnU5lAUIYigePk997ImbtbES2x6SXiMtqMDM7rdpWscLlaWlvc//GK7PbiyEOIZoXCSEM+Zh+/7TdeB9CbS7kofLqLQzlKPIg8pGXKd2JW67cXUj+oL9NcddMdOCPWRX/gLYaSlcNKh7sxoPTp+iPOyVOZF+5yg5e0HMLz60t9O9yGEeObIiRHieWN2B2ZXxuEi34wuC/pjGNSNzg4n+Ja6qOfWe+rb6K45epa4pP7YqD5W1gv1F02nQ9wdKl/slXSYW3PFDBrNV4jnhJwYIZ4jD3/pb74BpB9edD+iG9PUw6DuQht0LB0yVkzn/ITk30UH5oxjxBzitFDZqlg5xEnJ60TbNqp/Bmcn39OHTv5WegNCiGeKnBghnidmt8e5LL2DMlsGE2CbeZkbCHUnWsbHmrmVorPT3NvC/qKACXUfx3kZHUf9GEaPvCo8Fq7VnLLm/MR7D9t0T7f3nC2EeApIxAjxnHj0Ob/lhpm91oiV4VuWMBQRYixIlhi1sfa2bt7sA2FlA1VgICFk/ct+9CxncWIGum6vc3PItdbuk5ep32605lz22qNfbzcghHimSMQI8fy4A7B2YSEwF85CpYoV4zevAaNB7VYdkLKM3BiqsCigvJoPaHdISGnfvQzKUdc2KFsVHWdZNmhFyuh+wnYnqKbSxu3xAwshnhbKiRHiOfDol33FjZILk5eUtlmkrOWkLOXN7HKvo+XjfY8l9OXdwHp0H9bWn//lWMqBifkzxKEuDAYCZu2cNccllo3GlkmDurQ9HAxvQryXD538TeXGCPGskBMjxPPhdiyw8qZce/mzW+IWQM51AQbOip8bXZeBg4NYB7VsmqidKTs5A1emCBi+5/gMgzU/Gt3y3vDQ4ywjAQOMHRn6WJacoqatSW6MEM8SOTFCPGMe/fLXXgXSJzvnw8J+nDZg2JuInJSm9xHXD3XM0PV0GkxR0Dow3M7g2vApDVDPGYWT+M+mFVel0WujujY+b2/9JReF18GRWXWDoiCaz/3AyZuajkCIZ4GcGCGeOXar+RO/6XmUFyC8qJeclIWJHmPbvj1tcrsjBwb1WOPADBya2EYcf4Zue9EBQVj7ZdfqjI4d4rzsm6GaP4ZR8u5Su+P70eSQQjwj5MQI8Qx59LlfeRVI94F0pToZ/id8dF0W8mIslDXHH6EZmXeU11LKduMcmkUHJufRDK/bl3nWDIBe2AD7x3yJ68dxY9YmhqQI2eI11u4hOjn1nAcArp/8n+ltCCGeKnJihHiW2HQKm67Mf+5v5qX5kx9o7IiY32LA4jgwANjNscatmWZXpbTlZRsMXZlSF/2xQxbUU3mbm6wHwvY0KEfY3ufGLIWKwkc8dFom9PcRt0cCpi5XYDiFEOKpIxEjxDMlhpLo7diFiYJQsTzQXW2rVwYh7GN+7hSEUlPfQ1hTK2AwajMInnJvtenmPJBgodvu1mWh59k3HUBskz/G0NRoe7XdkXg5VHDN5QopCfEMkIgR4hnx6PO/5iZsujbOawkuCaZQh5dpoTyIGnqjW3POUs8kkIBZa3tF1MSyaVoXIiPxMtzHuvhBextDYcHba3ky+5Yl4cLHgWuPPmg3z/gTEUKckZPnfQNCXBrMTgEAKb/YS44Jckeead4wL8/7MADbvOYcNqNtP9eAtAWSob7cN0DazWebUZvIuSx513IbCZjzbqj9lI/HGamH9xKKbaJeUWhf/rwe5q/QMy+cZ7ZwbnMPsd0zbnNbywm98R5uAbgHIcRTQ4m9QjwDHn3B114H0o+OE2ZHXaFjd+fQNXqx6zUn644mivRu2Jw8vMsv3sF1R8m+w4TjhUH2vF1DroMVEcMiJ7XHU6hvqZhNc5mhjlOzcA3eXkv4DWVd/o6RlNwvZF45+evpPoQQTwWFk4R4Fpjd6vvvhrAOxzi60NHoz3+Eumjba0JIqMcBzAPr5f09ISSDz9Vk+XRuD/11p0G4qgstja610J5ZE8KZq/pntvTs9aPsxqbZJ3DQfjXNfZE2W8ytacNNyo0R4ikiJ0aIp8z2C7/uasLuPmBXDFu07gY7GHHguTCY3NKUA51rMqq33nZ7Tj+AXuOqpHAvzYB9QNelm+dXMiw7MsWJ6cNHxXVJC24LL92x0N5Cz6VyjX3uyso1U68x5+7Wf03drYV4GsiJEeJpY3YTmK5YCUK4g4Dwp/yKC2MTzDaw7u3p51HdKfdg6pKFg7vBjspE2/xmXkji9UkpD3JgDnVk0JfF2x+6NpONu0MXY8vq802DR5voGmvdqkfbQezwY+WdKzZBCb5CPCUkYoR46tgt696YtCz19Bkea2e1bl7qDI/MC4Q2gPrGDb2Wlu6nET4kMpDvg0VQ2ff1QNyU8WkwFCJVvATRsqH6zXXD8w0Ehn8WJSw2rLOynFHglCigZrcW4qkhESPEU2T7q37vDdj0ftimioTyll7o6rzoxvTlZpY1SS92FrtUd+3nt+9Bbkq9RQBZfNScmVaorOxPfi1qr7gvhk5g8D3vHT/GnxN9OyPBtwafz/tLIggYtX9t+5rdOMNVhRAHoi7WQjxNbDqtPYsMMO89xFMOUL6K0b4BTTdsFxrJ82oA/5PfvF5uMnneCQwlJyT5i92ovbzGrq7NcvODt72fm1KeV6nNqfMzUixY2rap5LlYIwJIbHQ5MnQVFyZle9RGqvrQj8VzohhZ20c4hkF936695E8BvAEhxLmixF4hnhLb63/gKtLup1tBwgmznGw7SqzNgsZCuZ+7dF4WOn3y7aB7tlkQVbTuEoSBrkv2vqW89BOaBN+m+3VI/B0JAwBdF+qE0FW6T/ptxUu+TtfRK7X7SyImaro1J4aXVLZf2fxVdbcW4jxROEmIp8etEqIpf5Z73knsTh3DP3FOJTp/2qAd0Ze2Sy4MaoinCR/RMuX//EuYZXB8lHczbTAOcR2yoN32nBlQud9TXJdnoY+jEQ/zDkfKunDVZnBuDontFTDxqxhth68qHD897GcjhDgUOTFCPCW2r/yr94F0bd4bdW2OoSUvC2Glxa7PwT2x1Lcduk43M1sXFyb1bTXOzzY/Arkni0u45xK2iY5Oyn9CkSsz6nodXZRwzEZOitcfCiE61l3H74PrxnNH9zaow8frsQeb/zldhRDi3JATI8RTYPtFp6fAdK3p+twl2YZj/mc79yza62hg0F5up0sKrj2b5jya2lW6X1OyrjsyB3WhHl13cO/c1r4eRs2xWlY/MioH1UdsY7mtpnwType6Xo/aH9Wt9a9sv9pOn/jHJYQoKLFXiKeCnbZhjpw4mzyB1t2Q/HdEAsqcSZy42uWkkMORHtW2jOqUeZM8YRdobQFPBKb7KvuoCcB532BIi3Mm7fsYrL30qMz8fzz/B60IAZry8mh8zAzNvE7eZnRkGpeEjkcBNDovbo/atIX6qZTdAnAXQohzQeEkIc6Z7a/+o9fh8yRF8TFKoKXwj4dH+tF5B6Pwll5KNK/SKNmX6w1F0a4uKex7OIiul+J9DJ8zL1Moy8/XJvOuhZRqqKhonak/1iURe3kjdLAgMgaJvfHY0nG+p5FY8v3UlH1g8z+mNyGEeGLkxAhx3th0u774g0sCy0KhvtnMuzSXl/AOZtMsZMo7NDgTTdkmv/zdjWAnx1BmkS4OEAsjaqs4OPmtbFOoN++bJSDtQK/39nqDW5y38zOz2GgcF79flHpljicguDR8rp+Xuss3bhg7NiPnpewjHKfthL7e0jnL+7cAJfkKcR7IiRHiHNl98R+/mtLuPpCuNM5DSKC1oTPDIZ5w3HZ57Bd/2bpIeoQ2QXfJ5dnW/SZBd+DAFPdlkITcJOi6mAllpe09zgs9h+XjKW1rNK1Zu5PCgoPFyKDMn9P3S67KyKk5e7lrz4NFTOvGvG/zP2g+JSGeFDkxQpwnNp2a2ZXkPXpclNiUhQuLFM5HmfJLjl0UDtF4d+m5PGGbX4YbNK5EuSavJ3IRWFzwdYPL0ZyP2ZXZjZwOfy52ZsiR6YSI1V2L9RJsyoPfNefknYmcprLmdoM7Y9a2UQTEyI2h8vgxxnJ+LOoa0QmadVFzC9B0BEI8KRIxQpwr063ZWQASdrAmtDMQLtgByUfKndCKGK4LsIIwTLMDUlwNFkcIaxIo7sj4ddK2OhzNtZDf0LQ/xXAUL5bDTNt8NRIZ1uoBrG1z1/IiLEB5MCxWuM5CWXnu4MrEEJKvuQ2rTTXl7ui0zkrrIA2WEkWc655CIkaIJ0bhJCHOid2v/XdvAOmHm3yY4Ui8K9vN+DD71hyG2t9+CUf5iLseimquvzZezCC5eG2xpW2EMtTtMkXCbiAERg7NQkgJ8ZyBYAnlxtdi9wbo7yOKmMW68XrN9h+e/rt0F0KIx0bjxAhxbky3mreXGc3WHJc4dkwcH4bWozdhnHl68a1ZqZfOo9pOJ4NTLVTetwwub6jjwIDa5fOaySD9HNpvZq8mhVHa5DV9Tnwt+hzKuDfdo9lwYvHhs8UxYIbPvVLWHzvtviQhxJmQEyPEObD7km+6DqQfHboq3ai4C9uG4N4srN0paEbwfbS//TIRZU70tex8LM6rlLo2UumuvebAoJ7r9bkbNTsuI4emXA+zmDnIdWnXxvUn2u7CSmjb7o5xG6E+73fthWO+pK7OK9Nf1nxKQjwuyokR4jwwH4mV80by22qy/DLnHBPuvkyzQTeTJA7WBmqD3Rb/Mz/mxVD7NmEOFxmw820/HJwbC/v53ksuTrd4W4O8mjL2CwsS7FlPpcfS7KwkWtMtNcf4/ERuCp0bcl5K/VE3a7/nCVXM8PFROInPxaAsiiHDbai7tRCPjZwYIc6B3a/7E2/Du1V3zgLnreT9NHBMhvVDF+ySbBvqDAe0o+Ml98VdGXJUjM5xh2Ypx2VXz0tc3p2zo3PY1QG5MoOyXG5dgm9wYRadGdpmB4admhTqdW4KiZxGdIT67OosLSOh05Y9gOH69APqbi3E4yAnRognZPel33wKm670L32gvrGmHPLBvG3RkeH6QHVVeD1VV6G8Xf3FaqjTEHDbO8BO2jZ4igE/t2xv0Aonuh0gh3dqUQKo6zd1szZ6ron+UIquCZWZN1pcEUMZA2c0sJ23M+puPdH2yHkBXacL/+RzulmyR20MFmY0km973hXMuTF3IIQ4MxIxQjwpZrf6shBWAdCHmkIeSiNiYldscjhsCscttA9qk+vwNguXwci8JVfG6/Az1OeqAmY+Zhafeb6HNAgpWW2ktlHGgvFjA4Hi99OV5boTnxfOKfV8n4QMC4yJrxmOrYuSw8ra47cgESPEY6FwkhBPwO7X/6lXgfTJ3oXJIqUb4fYRurpNaCV2Z96RuPHwykLIqGmfQ0ijeg+Xr13KPOxFz8HdrMt9xXsK7VlC2m1zjks8j0RXcU/ifYXzRmJkXwgpjuibUhATYT+GkfiaRX0tCJw1MYPFul83/VfpHoQQZ0JOjBBPgs2D241FDImI8mJ+qRUapZ3sRiSgcVtsQ3XJgSmOR4xvUBLvaGA9DjElz7MZuENNbx8DsG2vU+7PH2DgPFGYyjY+vxMLF3ruphfS4NFS2I8ODCfxdgPiRSdncD2u427QUITQsbTg4pxFyFSxdApAIkaIMyInRojHJP3GP301pe1Pj0UM0Hdbzi/wYRIu13dxEcsOcGPS6LwlN8aTeEfdvZe6a6+4N40AGnTZLvcW2nBB0bkw7ACBhMXAjZlou6kXz6Gyzo0B5bCwOKFt3k9Utih6FvZ9PTVlr0wfU3drIc6CnBghHhu7ZbZBKkLBiz3HhMM50aXxJNyEJnG1uCWYzzd+W4Z1EQtW10bb3kbn4OT9nbsPo2RgzsNBFjzzgHFpt6X7pXOb3JpBHk/pkWV0e56sTLdctv1YmpODXcj4+ZwDUxwX+myic+Lt8mda2kE/GF2sPxImXGdJyKy4MYbm+C0AfX6VEGIRjdgrxONi0ylsgtkGdThXGta1GZnXR9h1oUF1mzqbvD5BM0rtaJlvYv5fm+qotPmeLF4ztjcaFbe8tB0XGFN52doURr6drP2XJL7Ay0i8/my+Px02wm1TJ9ynJ+BOXMZ1F57NbJ4708s21t/LtLRt4/Iu6Th8Js1PZ/6qw7gxp+lfs6sQQhyMnBghHoP0/m+9CbNrvm+2qXMTFREQwy9UZoY6GaPnvbC74fuhBxKJF2uO+bW5i7T/pV8dnDl6TLkhjWvS94iqToG7KY/oXurnYcURofvPLkqK+T/eTbubzyhaFO01ahk5MIsD2fn2qCy0u6H2+V5Gzgpvp1G5tc9Fx0qaVDf6b+EKDDcB3IUQ4iAkYoR4HAYJvTbZLGSMBQmfM/rz3B2OHZAofNKFhCw3MUrUpTpFddAblkSMkcBKtpmTU4vombetnEMCycWRnZD44meJib5Oyo/twmVTn9HCgHkIooHXZXtPCMk/52EXaw4h+W2zqFkTLoNjXR1ferFUprjad27CLUjECHEwSuwV4oykV//MdSD96DjZdYduWP7RCLglYTXPJF3Ezzght45gGxN1uSu2rR/nfaPttK1CapQA3LWdk3S7BGA6Z63bdnRpYpfq2CU6foYGEhS8XijL7dhC/dQk7gYXJXbjboTI2HFp3JdpUGffAHgJH7LvSW9ACLEXOTFCnBm7NTJa5kMbWHmhb/01l4/FugCwoRdZ67BY46i4ixBG6i2hJHZcYqyD7sI2ALZo5kpqEpF9n8JMTXJxvn7XxRtUl/a70JO1U0UNHJdyayPnxLh8XltM4h26MtwG7fMgyH5bfL1mv3dYRmKkui4DV2dNwNR7OgXwBoQQe5ETI8QZSB/4tqtAug+kK73D4o7FoJwdmpEzUxyXkRsyckbiPgZ1eR+hzBeelZrHjGEHJTg8fo/NeDepPbbUptlcJ87RtOS8xDoDh6U/d2U7OjmcqzRyW/LxxPvFpQHqJJVYn2dpyYVBOF63X7HvVHdrIfYhJ0aIs2B2E8CV8THvlcRCAPA3l/nLN23rS7GsXCyM/zTv8mC4q3QzN5ILDoT9WGb5vKmKkWaE37xdxJGfQ86QbVBn5yYx0YgY0OdheR4lzwPyAfT8cclRiR+Bf4w+1kwjSMKjlXOMRAlvo53egI0mdnxgpPYAACAASURBVFtQzyuHeIqEUf1w3vD+1sWLb58CuA0hxCoSMUKciel26x6EpQgBoL7cd20TNsFDTgnbVvwkoDonLAJ839t3kcFv4FTab8UMMBQ4JfQyteV0n21IaCSo/Fjqz4/hJU/GLdWmKkr4NkeiwAXEROccMjJvV+Zt8X6aRU1aEB2jbQ4ZIdSJAsvP22DhuYZltyARI8ReNE6MEAeSvuy7bsCma2VMl+E4L4ZuXBgeO8bfgLmOTSeoeS6Yt6cpj6lioU1rl4muM011KWOigOpjcO5Cu3UAmLpMC3U3GwyfuRmHhu91CtuD+nHd3I8Bm9wG4rOF523Gc6GyTftVNGKjaWtQpxtLxmp5+ZpTN2TQ+DroxUwtu5L+HTt9oh+sEJcAOTFCHMx0up7Two4Jj3q7NBpu7Mnj2+40zOPHJJtg6VE9n9sxHicGdH3Hj5NzUsJPyNejbtPF4QHV4fOn2q47OD7uCz8jQM+ZchgJ+fq5nu0A5JAUNxGdCaCGf9hNAbJ7ko95ufl1YiiJyrgbtB9n46kRF1S3CJeFnJcigthxQjsWzdI6ls0JvnchhFhEib1CHED6Td93HZa7VZcckqVwEgmUVbHC9baDNnfhHOoSzYmqnvPSJAUvJfhyUjBtFxHjdazuD5ONvTwm+YZ7LQJmUN4kAQ+ev+lyDdQk3tRue/d0/zy8btwug+NxW6HdRsTEkFAiMUJt8znD87A8ojHCmuvP2x+wP5vehBBiiJwYIQ7ByNqffAbogUApL/+YZxIHsouiZ8I8n9KunsJWRMlfcSeDk3VLJVQXxt2D8MYs7gi36+25w7Ohc7ldWsfu3OazVLuLE90iFy08KJ4/S35+zo+JzsxolFt2XZDbWXJQRu4JBm2lQdlwmz6DMvAe3Q8nEfOAzAe13Sy3AJxCCDFETowQB5A++LG3gXSldV64ezL95d85MFTWdI0eOCxd1+nQTnP8ETp3ZNV1sbZOdG7KSLw2OL7gwPA6PULjpLj7ER2doRuzQ+vGoG67kzNyYXi7CZHR5zWhbXfowiBcF22ZCykLx0ZuTHMM1VVZE0hc1o8l8z77z9PbEEJ0yIkRYg/pg3/xFJiqgOEuw1HMNCEeH2K/753UlgWXJk4tUCZfDNewl3IYh/NirN02Kmt6EGVXh/dhqNMLLLxli/Mx6PY9eW5Nfo6J74PPD25M+UyAmh/DYsHrhFvqtjkfJ383JZfGrx+2ve6wuzW1PRqkbkmE8P5wXqaVZxg7TuqpJMQCEjFC7INDSaWMNwxVyABNSKaEX4L7AgwcBBIHHPYxPt8Fhp/vb70YFgIaQVSSeckyKKEvEj7G5aN2WWTxG3hu1ya+74QEvtewXdYo589dqNmlCZfZJwRywnDVZynfTRBxQwHDImfQ9kis7Dse99fCSqPk33n7FBIxQgxROEmIFdJv/oFXgfTJ1oGJIaS8TtvqAHSiZVQWEnfBybW5/ijBthE0CcORc7tzvGyc9Gsh2TftkOdreie0tRS28jpGx2hUXqv3kpqkYr63vM2j+TahoHhOvzYPPyW/JoV8LM/izeUIddwB8jFjAGBDLk0zgB1tj8aYmQZloO0lUTQWQ19n/2m6ByFEg5wYIdYwuzUuH5WdwMxf0qOB7jxstKv7XCcZmm7Jvt2EV9jZyYJh8rCSH8/X90Tack2OWcz7ZpvaTqrt2ybnuLCrAw5roZ43f075mIePDEj0fOySYKpiJwuH5NcwoMzvxJ9z49q05eZdvJtjLiDIXTGaZ8msXHXoxvjgd6PxXRD3B+7NWvhp5MaM6rfbtwBIxAgRkBMjxALpn/3BOk/SMAzULlachpHLMnByRvslOdaFSkzuHa13KD2D2CVpnJx6zIzrh8WFyGLX64ELg0TdqOM9c7JucIWK88Hl5Nik7aITY1OoH52Z8iwLrkvnwADJ+BwEEcNCZeTGkFsDtCP6jtyYQwVMW/aK/SeaT0kIRk6MEIvYKXyeJAPqrNJchXemXM9dj/ryTVGsNNvk1hi7FJTv0rkxCO6B5WJ3gYwchvktaOWG87HRgN3leTw/ZkPtuhPCbk52enhWa54KIU31WMnPAbXF24naT7DNhDmrxh0aclya7tLs0LgAIQcGB2z792sJMENa6o69tu/E6QVG21x3rV67fRvqbi1Eg5wYIZb48v/2PpCuda7LYm7MRMfj4G9cN4uaTsxEYTNwXtjlGNXz3krkSJi7K92S+rKQG1O2ywB70e0Baq5MPN8dnyXnZe1YdkZcxBTnJDg3Tc4Nf45bEisHuDErLk0CGrHTCihyYlwvNj2MBk4Mabz18W+6sgcArtttdbcWwpETI8SIL793E7Br9Y2zT8Ag/JU9Dc6puSHWhTy4ezBqY9l9SO4SjNZUr7wVDTlZN7s6jW3Ab1LCu1eXfXd1vPqWrmNou2NP/TlAzi15VM8b3TNPEpldpUTPmBLlsozCM0NnJHye5dzg+sQpBbx+HNtlaYn30DkrrdvT3eeSYBk9G3AFhpvQVARCFCRihBgynTYCZUQJm6Sw7W++R1S3/E+/X7o/W/tSpbCRletxnouBnQsgIfnp3J24WwZhJK8bnzUKGQC1C7nfC4sRevPzaMTFoaFtHg/HQ07TBqk4M7kNy121DTC/x6FwQSsYPKRU6kXBQgLD779xXABMNgvOfG5aFDQLYsgvMxIocSqC4fN0+7chESNEQeEkISJf/leuw+dJGrou/t8Mlxkd4zANh036kEmXIGvAOHR0aJkLnDia7yh8NLhPC3WG+zSgXXMPMdTE5x6S4OshpNxWHDE4h5LMz1kKJXnIqXSzRlsPaK45bMfLo/vDZUAWNbV+N0Ygn49wjBN647E1IQN8CH8yvQEhhJwYITpKt+rorvCC9lj3MuI5ishpKPsuNkCiyEUIl3Hb4aUKd2a8zGh9QvkxS29EipUUqyA6T5xgDMB2SNjMQqI8q7spvh2sh9jdGmE796JKxueyk8O3b0g5JEQ5y+134M4Ih92i28IfRSnP21Nsa3m7fNXl+wj3620vhcEWvo6uDpp6twC8ASGEnBghGn7L/1S7Ve8TLouhJN6OA9hxG8FpKD2CBi5OVxaTaPPtxWNlWoLYziBBt3Fcdu1+rpPyMfPnsoRmzqfFpOQdmkHsmlmua7uNo+NuTJmlms7N21bqUvkoYbpxY2gbACZ2g9iJQT2XHZzyWVNbPAkkEMTHQvloDJpDhMzMK/hmdbcWQk6MEIxNN9FN9DgQIFHcjMICAGo+ib+d+AWOui4vSaN1dGpivV3dLi9uQ+3KbIC5I0PXim0190dLcUSmOSelJAjPXZ/jC3we4XdLz8nr+bwuN8YSJfFy7g29+CcD8Ihe5laERcqfV8lbaQQBOVY22Ob7i7kzI2dnWJeX4MTsc1RGixt4a/Xn47cwD4AnxKVGIkaIhim/GHzEWHJZOhEA1Ekel5wYFxT+8i4nop3oMdVjxRUJggS87eeD2iBHpQgQvwdqs3kb5nYsHvPzT8glQdtOI1Jy0isMZlN+0UaB5p+rZfclHgvCofn8ubeXP2cNSyWbZneoEwz+GRhdw8LM2H4dPzeF8wZOCl+DB8RjRkKEt2P36tjeehunkIgRYrGbghCXj9/6wzcAe38Z5M1OMP8nEhab5uPYkFiw/dtlELrcRimbapnFa3hZ2PZjyPWKg8DXzsenqT3G1zJva1Pbtc3cS2ja5MRVG5xvdD/W3HeCIU0TkhnSZPTSzvU287F5/wxLacv3QfuYrzlRjKapn4s3aOc0iu7NlOpXTV8Zf1Vt2aCtGCaKbSwdW6qLYZ0r+C/s9MBfthAvLHJihHDMTkF+/fyX+qbmZHThJXY/Shuojktwb6z8T4bDK7yf63GIpwm5eB4IixW+rl+GQzJ8K+wYcJistpfKs1C75dbZ+eHxYVzYoDlWHZr5c/T98nlwd+py3dQea+p5kddHFRAAUtMtGvN57Ho0a86bIQcm1ouColw3LF6+FhYanRvL1uqnUn4L6m4tLjlK7BUCAH7b/3oVwE93OSrDHBgOQ3DeCi9t1+HaLZlzYsJ+ER6jLs62UO6hI06MTWGfE3TDXEghUbjMMD3sMs0JwTRz9ighN94ndY1O3E27u2dqk7dZSNoB2xv6jLsu2Lush6KA8QVUhrzQ74K3m5mquT79fA5N7MXKPm+34uhD+PfU3VpcXuTECAFgzoWp+R31bQEqY6eDrI0uF6L+qdzNRF3yUtjdoTaaZFuvx/c0UVu5/aZrMufNUBkbQEC9j9K2DzIXqo3yPLBDnROJrwsqozycfC+pJPPmkX8TOTCcf9KV+bOgrVfcGBYSyInAXIfuPbs/adCN2o2hwuRtJ7o26nbnxAzuJW5z2VJOzCFCpm6fQt2txSVGTowQAPAV/9t9IF2bd9hBIaFRnAdDSfztknmjy0Ivwm6wuFDfBUJxNdh9SePtEr5acmAWXJm0hTsXZdbtzrUJrsro/H3XKQnBA3eltB26aC+5M+V4WtjOn4dt2+OxW3d0YPLaRm4MEEQMbY/EzEjElHaoPE5PsCZYRiIoNcdfwTequ7W4nMiJEeIr/vdTwK41ZfzyaVwZn1+IHRY+h3vRsLvAL0Yv8+7I/qIO7TRD/vM2uTCN6+InswOzozLqwpyvUUbIba7tRFclfDbNs7Mr4+f4Ph3ze2ySkCeqg/Z5uNtyKRtsT/x5xOPs2tAzBrGQDLAmH4o/q75+G0oa1I3ncfnhTsvyds3TOQVwG0JcQtQ7SQhMp023E+9p0/VK2qBJZOB68ZzSW2dJYBia3kB2kg977yML9adwrg2ua+Nrl/NAL0LLCbbUXLzHUS+rYXnoXWUb1B5Me+r7/U7ei8ofg0SM92Lqejr5xxiuxQLG21h7Du/pVL7aQajIj1OnsK5OFBe8vXTOUs+lte2+rVMIcUmRiBGXm9/+N67D7LWm+zC/ZfxlXLo700s4vqC7F/amlhVxE4WF1wPmLt0jwTMQV3ayLBKi2Gm6eMf+w7y4+GAxMhIvUbTke5tckMXjod5qN+rBZ7u0bKYgbPyRrX/MKAbKOW1ybirdvmPdFM6J7dC1u3Nt+fpLC1a20W1fw3fZKYS4hCicJC45dru+ETjR1mg/J6TOB/IScl+63BgPG1G7zbxBnsvhoZQ8k3XJoXmImqTr10WtH52VIlYoNNQd35X7SnYC4GE4l5/d78Pvb6K2PETlzolfl0JbQyHlzx7EVhfm4nW+dhm1N9/XRJ9DM2AeULtKc1sxkdefz2ZRUspTzDehz5/DWimU0fl8XmwrfwTLXb5XytYEzhxSugshLhlK7BWXl9/+5lUA94F0pSaychIvJeY2ZUCT2DsUMAtlTdfr+PLnZNqcMzOaqbqcG5NrQ2JuSXAFlc1tJAt1R4m9S9tISNMOlhbqDBOQOTE31I3bXcJwatucOEk3tuPtx++BPveJv+vcXkn4zV3BgdpGI078HNTfQiMsglgCnxsWxHqD40uixsVQW/8D+GPpTQhxiVA4SVxezG7C7EoT6hjGCSicU8JNNJrvMEQ0ypehcg81dXk3tG5G5eU6NEJvc814HyeoISovA1IzSi8/roW6YTvfhw9WlyZDwjyrdOrCPYOw0WQhvyMc4++Aw1CcE7Ph+031I/T7t9E2lZXu11broD2vGWWY23FiXgzCdeL+2rFp4XwMtuPSh6c0DYG4dMiJEZeX1/7m/dqtmsNDQBMu6NwZ3w4hpcZ5QShjB4ba4p5J3YBvfg0eGI5cmEUHBoOyui6DzS11n+6cl3weuRXcRXvef9jfS15bvvfUdJ/m51xyU/z8HdKUZoekc2DSuD0Ln30zV1JwZYyey7tb83fKgqlxZ/w79u8OA8ESw1iDJQ2O79vnMjRl78MfSW9DiEuCcmLE5eS1/+cGYNfqW8T/QvcXn+fB+PFEx4EmxMTihUVPI2A8HwRoBcxE9YCa6+Jr/1PdQxx5e5RvUl5ou/qcRhtmswvTdEO22nZ0c+IgeZOLKnYy8ucynaB2GTfwyzWV3BXU9rvu4XRt4+8jz5gNVLfHP5/BtsFaf3kCtUmPVrbZaeHtUagIrfuBhfXa9si94dDQWdtAV+8UwB0IcUlQOElcUuxW22OGwkLeKyd2p+7KOK4Qw0EWzvVjfnlQHT4nhJRAZWYoPYj8LVa6ZI96GvHEjqOQlpe9hNKrqPTAml/oydBOrNj1VKIXf9OzZ1DXwrMM28rLalv0+bHmspRH4s0Fo1BNEStGIaEsPGk/la/Kmvab6/LHHa8xUX0/vonHB/vTQp3RtcbnKKQkLhUSMeLyceNvXYfZh4dvkyZXxV+aLCZC2dBJiGKA3z4xv2VFuPA1Aczdqt1RoLya4T2AnmleJ+O2UNdGgizOmO0zeY+EBws0Fk7TyUrdBXFTxEu4VhROzTWpjD7DBAM2qX4ORbjwR5uqGIniiL8CHtCuiJCFRN1GZKR2f0lQDc9dWDCo0wuZa/gLdhNCXBIUThKXEDttdw1I9Bc8YjgI6ENBGNTjUNIONRzj4Zop1PU6hjoKsJfx/vwGTaj1a84G12lFCwuZZCfoR9X1tYeq+PiURU8MTRndr7Vl5dkN8z8tWzrPP6cl0eVCakf1/XMnsVE+mwXRll2cZBNs2rU9eMDbVoWM31tM9OV8l+Z8G5TxPQ/KRmGktfNH9ZbaiKGoeXbrexDiEqDEXnH5+NDfeRtpd6V5YRQhwGIlr2NiLxDKuMuu53lQ8ugw8Ze7D3N97lpct1MRDmGeobw2PKL6ffJrWki67eY4si2Qtn0S7ijxtyT3hsRci3VyEvIU75uSc7tr1cTlNG3hycGrib1+DboPa7qWe1JuTujlRGWeX4mSgs3rTCHJF2gFjq+T/2ZQl5ELgz3bI/E1LZwzFmqv4A9oPiXx4qNwkrhcfOhHTgG7UvNF/O3go9MOQkdruTHR1fD/pJamIeAQUhdGGi2bnIzL7feuS7JNHsCOwjH5eOLcmLKMrpmQMCFNPOquOxWo19u3uJNhQNONejTScdOdGSQY+FFrN+7Spbu0AWpr6u4jmc35PDF/pjvfr8f3TqKH6yHes7fp90/3HnvSj77G0Xb8yjeD69mgbl2UGyMuBRIx4pJht9q3DouOXhx0AobLOgFiKHMhDQUMi6KRgGlF0yxMSPg04mSQQGHI57hI4bFg+HrW3V8q4SO0z1+mH6CE4qFoCeeUhOI8L9RE49VMfRvJchKxtWPPJH7u7pxatxuDpvmYWYRYzXUZTR/AYsXrlimzXFyl5uNbFBvRgVnaPlScxByb0b3XslP8gF2FEC84EjHi8vChH30VwPvrS5fEAb9djN8yaF/Q8YVd3jbuXIwcGH65Lzkvtc0iREZ1WMAMRYllHTIh2UkVQU54tGQ5AmII7dl4HcXQUMzwx0nHJxcmqEu+h4McnqVlGg22R2IHNvc2auZJivdqUQQAhnngu/LZWVt3KEZsWWgsbe8TMuHnOdzu274CgxJ8xQuPRIy4PJjdahyF+AZojg1ECL/Q2Y0pL0QaxZfFQBdOCttFSE05JBSEVeOKTOE++jdYgoeWUF+4AK1dLMVn4m7WS4KG2vJQVTPLdFzouqO3fhSHUSTuW1MIaShkGhEVhJffC4eJyiqIlyU64ZH2h3/WxEi49GK9uIxF0e3lGxfixUCJveJy8M/93asAfrrrWVQSa7nMkz5jvdG5lOTJI/gO501a2DbLPY/aZN1+pN8d5kkQPZl4kAxsu3ov3RxE86i6aTGx18AJtV2CbdifE2m97Uehre1bsN09YHcftnsT2N3AlK4DuxvA9tp4/qRxonCyBBvd75Ta82031xslGvvovyVpd5DMW5KMOcEXMGyrQAHQJfP67ySWTfRTOVS88LYLE07cXRJCLHza4x/C16c3IMQLirpYi0uCnfZF3UbdN397cBUq6/44ZyG0sAwFzJxOW0NCOzR/+fu2YT5uebbrco87emHtULspt47FPN9RGFWXltS1FT8LcisaJ2PKAmGTn8feAuz25nu/7274gN7wje2/9ftOYbgDpCttewvbhsY1suLA7EK9OXRksZ3i9GwwizAXqH6Inw11O6+SGSzR974mHFh85I+n+TzPImYOcWDisdSV3+LPXogXDTkx4nLwlX//PoBrjTAp/+LTSy26MQCW507K60bwsIvi7smaG2NZxIR69miljdHs1e4kGJXP9RJaN6J3TXY5LyWfs+DEjFyT1MxXtPu4pe3p5nu/c+/cPY++8fdcBXZvwLbvt3i/nZPCbtPs/thgjqXWkUn9vU/VlTLu2h27X/uxqR5fdmNC2Vr+Stx/XBGzVideZ15ewU11txYvJsqJES8+X/ljN1HmSQr/6neJvb7tybpcFuvyX/uDJOEm4XawxMTcJt9lqRs036cvXvekuaemKzLfE43OW3oljZKRLTxXzt+ZewRN1M3ZAMOnTr7nozcPETAAcPLRH3wbZjdg06fSNLW9kVYcGc+7STEpN3w8Kc6VNKG2M4HOp7bjT4CdoMlIrPBCPZYOdU/OusR/pZfqcDpXW3Z6yHcixDEiESMuA7eG/+ovJceWZFvuGsJJvvyyD0P/d+ImiJnF8WAGb6CDknv5XlsB09xjGCsm2QkSTtAm8tpwnWxD47PEuhNg0wPYdOOsX8rJR/7y2zC7CdgD2ASU8WksLFMVMJQ8nOL8SkH8NKII+d59mWovqU7MwICNoXVbXESBBAvnxLQ/oUWhEQXO0vaSZh21y/DPqaIxY8QLi0SMeLH5yh+/Dkyv1RccvSRj9+ZRHkUneGLvoJG4GUwM2bW3JmbYYcnjrDTnsIBoBUwZNyWKnMXj3iMJ9CLNTotNVHcKbc372ZG5c/Ldf+4gByZycueH7ieb7sxj4+brTt7F3JA2Rs/Yf67J3aRhry+qM01VgJSu1vkzMSMxk5sov4lavurGxK7QayIklh8iVPxf6pF4GYmZ9vwr+O/t9MxfjhBHgESMeLExu7UcMorCJdTxl2cnYEisdOEkrzcIB1n/Zkv+l39Z28Ka7/kE7Qs9uyvdqLztS7950fOaBtFz8TIWLn7PHoYqguzOE35Ld9uwzpybkvKLOcFnlY65K+1+MjrWLKjPF9wYdlrKYHuToR0Iz9p1dGOWRMmSGFkTMvvOPUQocTnKWm6MeCGRiBEvLr/jJ68C0+nin71xBF5/cTdixND8mT0cY2bqt32k207A0HUXc2KC28PHmzDVBM+Dad0VxBdYEQRjqguy+PZshAvfEz720nd/62O5MM5Lf+6H7sPs433YzZ2oLEBy7kwfbqqfZXWQqB0XK7koNS9/OkZiJUXhkgVLcWMMGObBIOzH42cRLSMRs9TmPtEz4f34K3bj7N+OEBcbiRjxwpJgN5NNVzw00S1FDAzKEI43AsYFCp8fhFA5n92Q0Rtm39I7LnWep5yrsvj2IgemuYcNHdvkBN3o0PDw/zyqb32pp3mk3Cd1YebvymwOKZlPPeCj+rqg80fj6Qh46b+2NNFUBtZ+LsWVmsL5LFIawbFwrcdxVNYWoJ+6YOl6o32sHj99ku9IiIuIuliLF5b0Vf/4PmDXAP/3fedH5pVZ3eZyALVbNZfzIHhG26nWMdpuBsjb0v5S9+q4pu6+ce1dp1dmpl6buTo1s0fPXa67rs2xK3fuslzqTelTL//5/+jVA7+Ovbz7H/zu+7DdtaaL+NQOgmfeTTqFLtVLs2hPVMcWzuHPegLVSXQOdyXPXbRZIGBhe20/LdTZ57ikcIyP87nxOvP++/A70xM5Z0JcJOTEiBeS9FU/dcMFDOBz9HAIaeFP6VHSLzshqz2S0G4bvWGWJoVskm/jGstr8L416z55t65rt2t3W/IcS6M8GpvzbOa5nLxuc9/n4sIUzG6XRzMgbXrHpThPYfbr6rogfK1TWVpHisJO3tbG+hBR+R7R3gfnnNA9N9v79tccl8Pdlf1LW1+5MeKFQiJGvKDYaXl5U6hofsGH+ZPWwkmLIaggckY9h5pjsf1Nn9SLuJ4G6/wCTv4WXAsd1eu2wmai7tIDsUOfVd8LqwiYBy//+W+5ey5fVSYZ7iWzB7MYqbNg992gsxjjuZAQjqH0nKqfeROGQr9EAWrkzQ1ycJqJLFlAjcTNSIwsCZJY7ywhpP3XOD37NyPExUUiRrxwpK9++zrMXl/McXGh0SXwklAYihp3YwYipxE3/OIP58Yk39VlIDAAeD6Mv7Sa2aCB5mVWnIvGqXGBwK4QiR1QAm8QXy4QdtM5uzAA3vOtP/Q2bLrrAq8+10nO3XGRRs8yhe+BhdZkg0ReFxssRiZgmtDOcI3SRjceDZ8fKPe9L1eFywY/vzPnwhxSPh+7hv/FTh/3OxLioiERI15ETs+vKRvssrPCL9U1AeMvwjigCL3RhgPO9Ys7KGmxW/Vm8dg8wF0UJWEE3nL/fj0/XsMwwHT33D5iIhnupIkFloWFE3XzM0wLDgu9udvRhZfqL4gVGAkfDO6pvb8ilqYVUTMSLGcJEx0ifJbF0uk5fV1CPHckYsQLSA4l8TLIrVits3R8tF32Qfu07ZvljTIK4+T/FNltKWsLa85bQdN+N9UAh4ea8WBGeTNVOFRxQ29JD0OZffy93/XN9x/761nhvf/ZD91Pho/XAeiq6OjyY7hsau+5jvUyyHHhl3357Aaj8JbvAPl6oOujuZfeoeHPH72o4esDZxMw4ad2JsEzL6/hr9r1J/mehLgoSMSIF4rdV//MKWDXFnNZAHoJskOy8hYZvZiG4mbtTeSOwNQKg+a8A8NM5l2eDXNYyRNwOTyURQdoDBgWJhxeImHnXZK7F3AZf2UDYHPuoaQGw50qHFoXpBUzaO7fw0dzOYWeSOTU565CImGqY9B0obzWDVoepwZA+FxbMTT4TBFEzciZiY4Lb3NiMGh77edYy26f75cmxPNBIka8WJidNvkczZ+76MTK4gBv+1yZoaBBOKfdT/nlmQ8gJMq2KgQYXQAAIABJREFUL8DBenYa3IXhsV7oMfO6ju0yX2c0GWQpAx+bmnspvZeqKHjr077rm954jG/mYD7tT//lN4DprdY584er98tJzJ4vk2wz57fkkXRHgi2RQpinI/Ak503OfwF6cVLLitBbdGWwUhbbDosTt0dChff39XTqQ1Y38Qm7+kRflBAXAIkY8cKw++d/7lXAXisvZae8NMaCJSaL9sJlIe+lc2Sm4X7nfjSC5XBHxkouTH0Bztuc8xJGq8U8oB1SnzMDnNSFX/RFvHj36/wcs3v1dF2YTDLcrgPtkQAJAiCFr6CIhCIiB72GrHVhqsBBfs4pCA5f92KmEyuI+6Es/i7Lb4XcmHI8fCgjoeM/j1g/ihzens+5AuXGiBcAiRjxAmF1DAzrE0A7odK8DKMoiYKEjg9elOUF5gWN+7Lu61fBQXUHbkziXJiBGzO/hFvhk8rkkB5eyiKn65H0EhLyeDE5+TjhpNaZ6z8A7O6TfkuHMd0Dpge1m3X9vmJuShyuszpQ9fNO/F0Uced5PjVkVEJrPIfUUkxnNbzUi545rBX3qQzZcVoKIZ1lwZ7t+SPQmDHi6JGIES8Eu9/5T67CcHPkpHBOSCs2gNW3AL+IWMxEcTMQPHN4I17PX6JWt5s21pyYTX5h1xegh5EaN4bzYZrtlXASv1D9BT/5OCgePgGS2b1P/85vfCajvX76f/zfvA2zu/UzbXtcpbKctPu2KaGvRrCRcCku0+SOC/W+KuPS5M94LbxEQqZOlUCfZxTMnYhG297k94IqOFBP6/bXxMo+YTMv1/DX7OaTfldCPE8kYsQLgp0CdmX4r3cJ65S64bi/jNokzvU3AtcBtRMSShtRwvvx2ITS/Tq4MDX/ox/cbtRTqc45ROEnvp9RGQwpeXfqdiC8knviI+o+I5LhDgkoEhzssPnM0y5KfCmPRYmz1pRXUUOfi5dbnWyyih20v4/ouExB1ExB1EwIycdo2wVfA329+DMa1WGxgrA9FkOnj/v9CHERkIgRLwZmt6Io6Z2XfryQ3rVZCP2M/poOx6v7kov5rWHAMJ8mrkuuSs1jqbkw9fSSJ1LKeNyYKm5IgMzPN3JkwudS84k4lwef+Izv+OP3z+OrOpTP+JYfvA+bPh5DPc2zFPFiJFgMaaLeWpz8a+TClEODsFD4PSQfXHAoZuI+lZUJK0G/Rau/D3ZkprANtNcE2jLePjTsBLRiCPgw/rpdf5LvSYjniUSMOHp2X/POTcCuNaEaXlZEy6hu7Wo7OGewX3u8YKV9ChV14aOBOCohkE3Oa1lwXzo3ZgLspIY2gPLyahwHcA8mIFnCzibsUPNPuOdSsmeVC9OSDDWReKphsdSMpFuSjsGCBVbHZmnDNyh12sReXtdzUlm7MBr8pliMdmKGFg5PlR5FLmpQzktA83w13Bf36cM6xKWp4oX3lRsjjhaJGPEicFo3SUwsiJZuoDt+2eQ2+kTfuADuvnQCZCSguhBTePEt/sl9Njw3g9uo4ShyXdiZKPs1nLLL487ksM1bn/kd//rdM9/MOfCZf+oH30g2vVVzTrwLdX2e5rul3SL+3H1p8mTQCKCS+FzWYyFTwktggUKiYmrP69e0NL+98DuMetzpfmLWihUMtrls7Nic4v9Qd2txnEjEiKNm+y+8ez2Zfbi6DoZxb6AgCLrigdjpukzXdX35oz02fAuthKOaMm+ujIyL3dSO+VJf5tz1mOdOmooLU/JbaLsIGd4uL/cukddf+nef7Ft6MhKm2yn3liqD9/ln14WC2GGZ6BjI/GpzXmKoap6PifNlomDyz2dDeVT1bheFB4nfVkxEQTTX9bya9t4HSyOoBsuSyKnLFQBK8BVHiUSMOHaKFV5e8Oi73QKgFx07EoNlKTzgoiEm5trgbeEvoqY8rmmbwkjsjMzrDTksNdzFA7f5QG+zgCHXgfNBBqLGBcuOeu/scpyD6t998q/p8UmY7iXbPKgii4Uk5bm4w5Jf+HMoafxZoNsOeUFDgePicsI8v1P9LVUhMRAk0YWZMBAyaM8rPwtWQ7GNPdvrwiUut8/lyxLiGSMRI46alENJtcdKc6z2TLH+XK7T/aNfjpO4iO5LdFKorPkrPtaxpfJNSNitrkvpMdMInFo3TcGhYZECdlbapel2zEKnvuQ/9lnf/ofun+lLOWc+60/+wNvJprvJarfqev8zLlrr+C6cI4QiDjyhN1GVZpu+jiWnBt2s1hyS4mNhmWr9GarbbPu+Tx7J16Tz+bdaRPDgumsCpy7X8DfsxhN8TUI8FyRixNHy6F98eAqzKyxelnuZLOXC1ONL/7pzGGHGXyKhzF+UnWDh642SedtYQSNU3CHJE0QWR8aqYOE5f7x3UgrHmzmUiiDisAsJHWtE4d0n+pLOCe9uXZ/b73/TLikvLMymOqDdaKoCUDtlzJlpQ0IGKGG7qYrPdhya+rmV75nFjn+vxYxjwUHlcdt/AkCtv+rCkBCKP2UsrGsbp+f1fQnxrJCIEUdLAm6NQkeL4SSECfcWzivn0gsgzt0zclcaoWRoxckwv2Zq1k2uCr/4XIw0I/TmnktFkFA4zdrwUBmZlpJ32aXaTf0LfTeHpj515Tu+4Y0Dv46nytX/8AfuA9PHSziMHJDae4imE+By5J5KNpV6jYAg56QdDZiTfet3FsVLDCd2IrYIGrTCdySCeZt+A01ujJ/Ljkz3TGcoR2n3dXzSrj/udyTE80AiRhwlD7/20Q2YvR/xZUY0goX/wfbjCGKHRYu1oqa++EmA0J/Abe5L2O4ET1+vFTB1Xd0UFDFVQ0P+TNOCwBnkwGQHgRNg42zK9dmf8mzVZySZ3RlNEVAdEy5HI2bmcV78847TGNRz3VEp7eSGSs5RdPrM+q7Q3ka0QKapbC66JVFwhJSpVWGCWE7LZIClleuV5fQcvzIhnjoSMeIoScDpyG1pJgmkf5nbPBASFxZe9IN6dYA4v3Y41oWM/O1DTou/kfivdu8mHMJec1mfDLzD/CLmxOKdbdC7K7PAad2Y9n7ZsfGeOs3zmz1Ihnvn+Z09Ke/7E//1GwnTW7NTdFLFZvM9Amieq7opcxnml3kJ0QX3JAoZH4V3quIp1mndnP53NYuIqbZTrgX6PYCuj7qfaUR6LR4LmMXeSCR4Fpak+ZTEkSERI46Od7/20VUArwPBLaE6w15K/g+1VbcBo3qo9XbGbVF4x1+eQ8clhhkWjqO+mKqz4n/Fc3iI8mAo9DSHgVqXqOmCbaNj1Y1pe+10cxPd/aXf/vXPZJ6kM2F2u4aJ/J6pd5bNobBubBj6DhJ/xpQ0ywnNZZBBQydgRr2buLdS79RMaMVCFDy0PT8kiZl6f3Pi8UCIYFDW1Ql1Ecvhb4Mr6f+y0/P5soR4+kjEiOPD7NbiC6O8CNCJFqY6E309DiUhHEcjaqhC48Zwom7MickJuu0DhWUUluKEXH+e8CLtXq4UUioCLCb4DkJJ83KhQklOMrs3u0T5uaZZQOzKaL5BnBXRMkhm9hyhLkG3Cotx+Gq0jVYskasTv5smAdf2bIfk4Pl3SPeIcJ6zlPw7FDYov+t87PRcvzQhniISMeLo8FDSUgJvF+JxweIvdH/pWHVX+pFfRyGmIGA4pNC9MVDXZtgB2JlhZ+TuWMphn/oCqV2F2X0xElf5pVjGhAE910pIySYk/gwwSP6t25/4ZR/9Xfef9Ht6Gnz2N/2lt4F58L1kJ/OklWkC0iZPYDkQKKWsig/+jXAODB9HFoqdOCx1+hATi6Z5P7owaM9DPB91O/Zg4mP+HU+U87XPkUFY5+22DQCG19L/ba+e+5cnxFNAIkYcFe/8S9tTANe4bG9IiR2GUGfYjoUD9CLhPIg2HOUvLMtlVsTEDij1WXDs0AqPnbViBHSsnG/ArowJQ+GtIr78pVvDHk1IiXrXNMKmFW4X0oVxEnCnJCRPVZC2uSpoHJPqxgzECmz8m+jERW03bo8Tfqexe1PExopIKRNARnEzqD8t3RtWXZi5y7g/K63nRbkx4iiQiBHHhdnpUiipySuIf4EGovBpuueGshg+YiHEzscOKTstLkQoP4XrYq5ThIaLkSgoMFVHKfkbaYKPzpaCO9CHjPy+aPyTxqlA81LPAuatX/7tX3OhEnojn/Pv/6X7O2w+XsaJyT2PqjghkRaFyyD8FkNQ8+d+UuaPAvy7XA7bzXkx7MwAvctipayfSJLrh3NB+/6jdsGSj7WuTPhvoNu22mV7eXl99/9qPiVx8ZGIEUfDL/6u3fUEvLYYRkIVCLGnURc2Gr1cYOSGDEJJxqEgzrVhZ8TvgUUQh4MG6+DI+Ei0VTSRO4NE95sdgNJGPY8dhnHOC7s2TUjpQrswBbM7/h3tbMq9tKbhdx3nUqpL34MJNmFnJ+3n0owJg855ad25LDZtIdG3GX0XGAoYnqASQCN0eB2PuStX7g+dkOlm9UZ7nF0aQG6MuPhIxIhj4jbv9DkqdemSeeOxwfmjAfAam95fiv4PfXlJBmFiJGRy2Q4uHAZChoUO1vbnF/aWyvg+XPC03Yb9ZUyhrLIOwmbev3vG7+S58Mtu/cU3Eqa3akisFSPttouN1k0ZCdxd5+r4d+5tBLeFBMxqGKn5fkbn5+3FWbAHZYs5MyimXfnNc95LES1B6PShpdOn8uUJcY5IxIij4Bc+vLuaDDejo9ALk/hSIjEQloK1Lsooh6YVOhyuGQqBKmSm6LrUa+3iOYvCBdjaXL+IIXheDUqdXX6JNWGl3M7OcsgDeQwV1Bc1hbA+9nkf/R0Xr1v1AsnsdpuUmx0ZFi1deKnWRRQ700kjepokXXJ0um7b5fc2AXm6gm4ZhG94CoOayLsiTEDnO0Y7XJ4LVsU5n2/1D4FUj1/b/W3T7NbiQiMRI46CBNwEcGVQ3rxMCo3Aaf8aRnjJlQTb8FIv7YXm2eWpoZtWrJQXCCw7MjHkVN2QJkQFdm5Qzw0Oyi60UUSbX49EHVx4GTBPnjgMIyEdSygps5tCd+uyjENLnnwd82RmEbih73w8tkz93XhX7E1eqEdaFk3jXk19eevAcBsI2yRoDq3jxzrnp12afLD+uEJK4kIjESOOgmR2e5jj4m5DXDB2Ubpj8S/b5prkepQlCJjYPtWJzswuhHBmIVJDP/G5dkVgtWKn5O2gFTIuVIbtFWFGz9c8Jz7xBR997c0n/JqeKZ//b/+FtxOmu7vgjsyfieexhPBS+RyqmJhH/+UxZapYKT3AGucFqA7MvF1dlebw2JHhMI+RG+Nio9n2xmhNYa4lAWOTPwdfP4iZ7mYH9wu8tvs7dv2s340QzwqJGHHh+fmb6QaAa/GvRBYkqwTnJfTGqcIDregYi6AYSrK2vqVhWKlNDI5Ch8NIrbNSr9/fq4siFzrVneldmlkQTcWl2Vl4Htjd8/q+niXJE3wp9ONLnZKBv//WiZnDbCx8at3iqljbRl2jOjODENPyEnY5tyUeY/ETmlg9x8tYDJXyeaPLk4kCpx67/VhfjhDPAIkYcQwUS3uc07IgUEoYqWXYRmlroSyUl6ReFlJBsIC2yz4LCBYzua2dAduJBsXL6+rCVFGyGJ5CXW8nwzafuzVgaxMGzsWDX/HR33Z36cO/yHzBv/mx+wnTxzsnpggTzwXynkaGMvmlhRwYGGp4LfyGmjAS5ciURGDM3383xQAGvx93d/yafMiq+PD9fE5bTsdG5xSnhtql/cT7SwKoCF3c3P6IuluLi4lEjLjQ/NzNdD0BH+6EB+Uo7GPUi6mGeNhR4bBLfVkshqWCaKliYlTebnMX7Dn/JWFbrk/1mheyoebYoLovUeQE4VOdo/n8bQ6r7FDCVUeVCxNp3Zg+iXfHOTBZ6HAOzHCcGGyQUl5wEur6dU7a30sWBu7udGKl+c2GpQn17BEyXc4LHYPBXDRzW4+zj1J+JamnkrigSMSIi43hNP57P7/4U1mG+S9Li/UOTCc0WNiMXjT0F/RSr6R225rrNi4MXHT4y5GdFhJWVpN9S86Mn1vupYqgZqwcz61B7a31yOrLe5eH8T9WvvDfuPvGPLt1dWJ2I3FC48CMu2K3eTRNGLKbaHICLIU61J2beh7FXkz+W2pEDYsI5PXq/Ec2PubzMnUuDM6wP6+KuzSXKcFXXEgkYsSFJgG3RkIkiprotIyWRbHCbdbrLrsu5Tr8FzG7RLUN3o5hpZLs66PCkkBhR4d7KLVTFXA9K92ti9Pizg38OL3grYSsPn7tox+8//jf0MUg5dmtl0bq9byVWcC0AqLvUu3b7UB3icVJFi1VmGQBU4TUVEVFSObtlxqiAhAECikLA9XB0IUpGJd7XdrnumG/+QxcvMOuPbw/3TjLdyLEs0AiRlxYfvbr0imAK/AXNf1l2C4JyVIVK93xMILuqI5x+GVFuADlOts9LhDieVTW7qdh/ejWlPssgqQ6Lr7euvtCLkztxWUUnppyfsxxh5KcBLuXYA/cIZtp800S/e+4jaY9sHviXbdBDk+b1Jvr5pwbwLDDCRoVY7wYCQvubs2CJC9l/BgLdahaFih9r6RQFzV/B0Wg1LqJ6jYifF7LjREXDokYcWFJhtP55VFfL7OrEMM+LkIGomJFtCzmtgxdFxQ3Z2sJ29wLaevXdsHh7gl6UbQDh4RqHR/Ibjx2TOuetPfIYSTU3I/GhanipbZRxMxbX/TRL3vj6X2Dz45f9ce+7+1kdrftiYTsJmxyMrPnwsRE3+jGjLpbb+AJwUXYUAJwCUGVnBlqq7g1Rtt1GgQA+bdFds2SWGGRw/tFmKA9jrad1JzbtpkwaM/bmE/78MO3putP/m0JcX5IxIgLyc/8bryaDK+lIEy6f1gDpYtzECOL/zA7JFJG9RNIvKCKEE7MbcI/dO0y0i5aAcN1tjCqV192nDhaX5wTdtg0QmU3uyosUGpPpqatOkHl7gXrOpuwuZPShF2ahcrOxUv+Dn0037aLfZ/UG0VHDR2l/sUf817KMV7Q/57Kb7AdIbhxVoBy/SYc1AmXcF1weWjHj4W6iUUPiTAAdbJIAEm5MeKCIREjLiQ7S/UfyyAmFhcSL86iExPqd+W0z+LF3ZNZqMyBoHhsGKIycmPomlvrBY27M02SMN1PvY5hayR+eO0CpqxDgi/sQYJd6Nmqz8q1P/pf3t+ZfZx7IeXE5SxoNtilDbZo50dq3Zt+2WIDAJ3AKYMHmuXJxWtCMF+fZ9muP+YQVhqKlJEAsnJ6URZZsJj/9hshQ+eUbfoPJLt4rRiqh2tX7BJqOn33703qbi0uDBIx4sLx9r+crgJ4fa/wiEupl+bQ0ki8LAmXps58/jav+dwqpFLjulRhkqrQ4fYQQ0mphpFc3KAVQTXMRL2NfA0f/6UNE7UD+LVlNaHXkGD3fu1HfuPRzJN0KAmbOy5cUhYuHk5icbBLE1Jednnh/bJdZqNGdV4a4TMFcULJsHS9Eirq3BlSDQaA60UFE8vKjNigXkkZbheg8Jof9+eh86KQoaWGmuwK5ilAhLgQSMSIC8ecCzMWKmdsp/8Hua9VF0tI5Ko04iSIpOiQ7Mra2ro2zpcpvYNQnZ12QLu6vbMwH1I53oqWphs1Ql5MqJPMbp/t0zwOXvkj3/vGzuyt6qT493hS3RhssLOTRReG931gwF3pVu25L5QTUxyXOpge927yXksxzNTl4ZSEYfRCpxEYQY00QsiaQ5g4WbcVK81/TzG05CElr0+iJ5kppCQuDBIx4iIy/Edy1YUZLfBxZBb+b5Q/MxAts9BIZeHQEIeNtsH9WcuF2aLWawVLFDIW7oP+Ko6hDfP6vQvzaEK5952lT/y6j3zp/afyzV0AEjZ3Sj6MuzH1BUwCpYqaRI5NES559N3SRbsI6VbsgNwYDiPVfRczPMlk+/0BXLzgxhQBg7pNpzdixUUHt4t6fpfgm4+N6jf5MvOx9//ij21uPNGXJMQ5IREjLhQ/9fXpZgKurea+DJYRXV4KxiKFRQS7KtWJaZN5Y55LcWdcOFlfJ4aTPMTU5LEguCtmi8/bhKb4Gs09JHD+DOXE3H3iL+oCkwx3k+GBOzFtj6SR41K/p8aVKeJmPneLl1ATcdtxYYCaD9M6LSBRYcDUTnNQdUota0UDC40gYApWjxuVIWwHIRPbTHysqR/bAwCN4CsuBhIx4mJhuLWW87LEUv6MH4s9hlZFTRQnYEEzl5eEXMz5LVzehpLoeHOudQLGBVMraqI7U+dNegQrUxU0ISOL26h1zN76DR/5krvn82VdTP6p0+95O2FzzxN620HwPMF3wrY7NuVu6nkbPM/ULDJ2ZS4mFy5V0JSwEh3nwe+aQfAMOdRjjYCpIijMbj10ZrIQQq4P0DFUMcSiJ4qVItzQui9W23G4LMFe/4V/uLl+3t+dEGdFIkZcGH7y96TrCXhtdKwk1Z5lQbXTu/yWkajpytJKvTkcNYeYWneEnZG5fggJYSxWEryrdZ5SwRAWK+JpvsY8Gu/WLJ+3LGQoP+buU/nyLhjJcDtZHRdmFiScE5SFx1Jyb0nodWeGJpcsL36r4RZMWVOkRmeMl6mGjFgldPWs344j/zaD27GrVMsAK2WlHH7Mb8G62+mFkP9ei5A5PaevS4jHRiJGXBwMt4ZCI4oIWphFl4WOFxERllaIuEAJx8s/4qkrbydcjLkwNayznShXxoLwQXVbmtF6MQsVdmbmF3JO+sWc+LuF4ZG1Cb4Dh+aFGKF3H7/mD333/YTNJ5peOcXlQPNSHyX3ti6MzzHlOTQvoUl+nYBUxMQUrpPrcTgLOWGYZ8W2OuovuymNgCEHxowUzSh3Bigipea/WC03EjbetIuTidvIv0cSxdXNUUhJPH8kYsSF4Cd+b7qacpx9KTSUwr/VXDeKnyYPBu2xoStT6qTxeaVsPJheDTm1CcA8Lswo1DQSMjGEtCVBw/MhteGmGjramoeZJjSj9cI+9upHfvUL1616ia1t7jRjxIwSeXMvJZ/DKllN6HWxE7VFmoA05d5KzQB5HDrKM2Fzrky1T3J9TwD2cFUd9XcYUsqCxoqYcIHkggyhfZAwcrKwoW0eo8Z7JHFOVq3PbRgS7NrP//jJ6RN/UUI8ARIx4kKQDDeT4UoRK7W83UcrBIaCJRyPbsxIKDQOC4scrLgzzTW8zxOJj1LX4LkzJTQEX6d2bQMBU+pbuK6hz5updbblfB+A7XKEkpwv/YPfcS8NulvHwex2JXnXBWIVOakIn+jKTPTSr59xl9hL6qcmDOf65JLF+ZfqCMBVvHA7jctSknHzdVHvi92X6gza0K1pe7qxOCLhQ4J/Pk8hJfF8kYgRF4VbwMB54TJaHP5LuXNV4nmDelWULOe/wNrrjsqXnBsXLNv8V3JpozybhXUVLCxgXLBU8WNNefMs1t7PDglb2Kf+mY9cf+MxvpejZh78LufFpM14wQac3FtzaFi49C7O3FvJkJreT7Sdxom+dYA6a367/QB5sxtjU863oYkgG6ECOte3aV1DRtVxWRI8ze+6c3qqEALK7+y1n/1HL7361L5AIfYgESOeO//o96UbCXg/C5JRt+jG0o91cluch1LHgvFB7NgryYu7KEEwASCRktpjVNe3xuV+P9TlOa+rA5Sq05Prby2LnnJ9yo/JfzGzo1O7TnvOjzXiZp6tGpciFyaSgLsJeMCj6A6dmZzYu7VN9zuL4SRml6ckqG5I/fZjqoon/baORzvir4d5qqidmnWF3Bc6N5GA8ZBQczMuphthQ8/ahKpQ6pT74dwYf2LNpySeIxIx4rmTfIReBEFCbgzQHh8l57rUWHRV4mKtQNnxX5js0HB9C9f3EFMo5/mVPKw0ynlh54TnTNoBeIS2K3ZxYEjc8PgzPNO1jznzyAxb4MEHP/Ir7z7xF3WE/IZv+Pa3k0331pJ4m3Lvlo0w23VIzOXBBHfevdnzkMrx2pWoPb9ty7tq17CSz6s0NZEiz5XhfBjOi2l7PFVHp8l5GQqbGvoq4g6gzwTw0FkJNTVt2esPfuJlzackngsSMeK58uO/P10H8LrvD8NJJBKa/eKi8ILur+XUndMKBx44zl0QHt+lyVMBJ+ImGium7ankAqiKmtCjyY+zsEF7jR3fCzsw4HBS7O2U8nmzgMkvmrvn820dJztMt3fYzG5LEyai0JCdzGPEUM7LSLhEJ8fb29FYMr3jQ2UuROb4EKrrwueEa/LxkOcCuPtCP3xrz/Nu4cu5MKD7QLlWFUd8j1Sf3RoNfieeExIx4rmS0M6TxP8WszsCVOHgcmAQHOpdk4GoQajbh6V8AsjW8dnXzXrJoVlyYDiHpYingWip48BUh6WGkzwZtYaWHnn+TBFBl6Nb9RK/8fd/5H6CfYJFykic7EIoibtJ+7gyMVemzq00lfNTEBFg18WFDKpgKU5NTg6umsdy9KcVKPwfSeOq5HuuY7uEc+bGirvSJv+6QKnCx8+tCcco1+ZeTLmOQkriuSARI54vttyt2pnFQT/XEWh75LIsLa0YyYID1c3p50QK4gM0f1JTHtotC+fClPmLUJwf1HvmaQ12oWzrgoXa955NKYudR6WO58lMH/+t3/YF95/GV3dM7DDdYddkdrLytpEYoV5CsX7snbRD79pssUERBuzEUNioFUogwTFYWGCw89K4I1VQVLelFzmzUEJxV5Cr1RCShf+mqEdTPt4mz3NeEa791E++R7Nbi2eORIx4bvzDfyWdIs+TtEYqCZFV3EShw2VLjkwckM4dk+iQAPQPNapY2Lr4MAorgfNfcjgHNQzlg9vxvZRJIKmcw0MjAePrR+X8msybzLD1F7PVcWFym3fP+LW8kLz6+77tXoK91eW0wOZeRKSMWcyMhAu7LywoXOhscVLyRtrh/QFYbdcdmraLd593004vMLszNUQ1N9+Io+CqtE7MBDTCxp85nOOhpEZQxTZRz50blxsjnjkSMeK5kYDTxnGxhQWteOm6FIdlNzjhA3utAAAgAElEQVS3cUZoygAWOywqWhFUezZ52GfsxPQzXO+bxZq7YO9yeRUtqXFaaoiohosSZvelH3/GkMze+u3f9nn3zv2LO1J2ZndGCb3uKGwny8Kk6JnFZXbseifGxc8jnGCHk3kag5jI60Im58UYhYKqIzPR0oqGLqk3ujgxd4ZDQYZyDifpFoFCib3lGEChJNSyWuSXee0n//F7r5/LlyXEgUjEiOfCP/iG9GoyvNaEhzKtIGnzXhDqNwPEBeHiwmcXk39RBURMxC35Lk237Db5N2EWG42TQtduhIvVNmtYqL3uLp7j90dOS3SefORenwCyX3Bpu1UvkWB3d7AHNZRUHatHeCmPGZMnhgzOS7/4QHhByMSxZixMMunfjwVhQz2ZWjFjSNjAWNCwWzIUMAhuC2q7zTlOzYGp7gsfQzlWu1jztudkTQBw+5y+LiEOQiJGPC9uLeWsAP6SryPodj2U0L7Uubxa7KkTQVE0xJmoPVw0DEkN9reWsM1SJ/ZQ2ganp+1FZPX6LmaCWzN0hfLxR+XeUyOIyLF5sDOFkpgv+z133t5ic287nIbAQ3Fzr6VtLht3sw5JvR4WasJK9IK3nCdDAqWaL0Z6hdwWWC2LCbrkqMT9NqE4Lqhr6jFVGPRIosRdahtlu3xuNuXfqd38/37qvepuLZ4ZEjHimfP3vyFdTcBNIAiU4LIsiZyh8KFzd0jYWiptOP6SL3XhTklqBMJoDJd2n/4vt8XJv6MxbLbUdiOgLOe5GB0v29xFmwTMRPWs9kza+gt0func+8o7v/zSzJN0KAl224WGuypb22QB0ib9bnES8ovoPJvK72he15e6rznnZudJvcgj+abxeDLjBF+sH6ek3Sb0xK6Mtb9/YP7tbNG6KVmIVBcQKM9d/wAw+GCK9fx8nuHKDqYEX/HMkIgRz5w0D253ZVms1AkUm9wTFjlR+IDFxXy8y12JImNlssd2PqU2vNTNPI16DneVdnHzKL/kumTdgaDp50KqYuaRoXSfnoVRzY3hQfFyXo1CSQM++PV/9v4O0ydmIWJ5NOM2mZcdluLIhPyZtqs1CRbvjTTohTQ7QPVYNEJm+DwSMAPHpKm3JmCaNuZlR/ftv5267YKl5s7E8FFq2kBY2+1z/MqEWEUiRjxzUggllXIDeJJFhDoxJMSip+SuWBADoW4zmSMwOCeh9DAChbP4XsL9+b0DnH9TrxvvvbZH3aVHAqbcszXJvD5qL48T04ah7BNfdedz3nysL+cSsDO7M7sQdVTeHb2Y5zFfZpGTbMLWTrAUSurDSi6EqjDa4iQn+s5hqkcevvLrupNSnByiCKI6iu8ob6YXMHWfZ7iuIbMiOJrwF0iMdI4ShY94ZvVGwCTDDnbtH/z0p9946l+kEJCIEc+Yt/5gupEM15ZDSP5XX+u+xO7RsCpGFnsyFVE0TuztE4Hbtrbd8YV9q0IKyXNW1qcb4F5KcdyX6MzwqL1jIUNlc/ndp/cNHj9f/rv/zL1HOHlrm0WF58iUXJk8j5LPXl1DS/34MK2LM9XQESY8wklzXnQxynUSj0NjzXV3WRiw2C+uC4ebKGm3GSumcV+qaNktOCzNAIrk+nmX/hg+qnN0+e+xuDjqbi2eCRIx4pniLkzeDkubn8J1yrYLE6TB+f9/e+8atFl21ff913maSqVsaSYQLr7gbhxzKReVGTsXc/U09oe4XNjTuFKpXIzmlQRCxBIaJMA2ia0WGJmCRGoFhyLBsd4hqOJErtByEmNMCN0uQgwGqdsQHCqO6XFVYieAPa2Rv/T7nLPyYd/WWnuf531b091vn57/r+v0c84+++yzz+V99v9Za+29veixw/4P862cN4qIpSvTdtFudYmupOIC6mNdYLpTm1iDIGBK7yPbndpaXUqjMksVL1gEd//Itc88fsCP7YlDMV1T17Cb4NxsiWnWEutaKuPDoMbC2KXka9YWK1yay6laYNyxfVBwExM+jqcbAwYwbqYiaKzQmOBcQyjvlT1vtM4A/h6NrDPoysz7nv9H/+y3XHrUz5W8/qCIIY+MX/t6vaSC54sgAKI1xpqoe9EBQe1thMF+P25Mb1UZjtQbXD921N0am4PmXrKxNeW8bsoAI0RsXEwLiOwDf10PJbT7cBIsMHFagpTmG8jX+xQDZ2UROVaZ7mp1G5UeNtNAMNhgX9OtWqc6+7XqlAYcNIPZeYtNEUJ5tuwcH+NEixMzzTqzN+dvQclSA7nLeRJByFgLkHq3ETDVPyxvnTECyLmPRqNFZ1Et5lrq37EcncOjJa8zKGLIo+TFTpigiY4YzBvdRMXiEYN8o6jo3URGIKCIAD95o3VfVcGCJkKi9aYE8e7Nsd0IvmiCo81O3Swp+yLKgsVnL0nA2IbCW3FsfAzi+vFDe3pPEM9d+d5XFsj16A6yomA1TZOVJYnqJFxmiYLFuG6iZcVYf0ZLtc5AcGLO3wsFKziaSHaxKu5vo7mPaqyYSYvWlU7YlDLrZ1wPxwtH8CUPH4oY8shQ4Kj8CLSWE8C7cnLeg+uHXUQrvY4kdb2ucTGd4PHdpqM4sqJmjumwoiNYY1DiZLw7qfUIaeeq0wpE4WK3zXmsm2oW3P5j156+84Ae1xPPgt3VKFbi6LoxngVAEi+259LAzdK5XWSwBFHjzynY567fcWC+rru3mZ27rO9Hlh4EEVLFjBVWTdD4OJ51sWJdnFaoK+Spf/jKG44e/ZMlrycoYsgj4R++SY9U8NQ4xmXFjeSsLYe7XDfxoN2+KGw6l5Ddb6xD8dMKlChybJkI+8eupbaUMva2QTDCxf6ydl2qc9467QBw40E9r9cDX/P8++8smG42IeF7KVnRgvwO7mWHEzMYXnPtxMBd7+ppQbw7LLrDrDluZiUeZq8XMOf8MybjOvKurm6+LBHjfvLpaURdqYsVM/YdK+dTse+odSXZAGDjKh0LHlpjyEPlwnlXgLw+WMzkcILc2AugmhoHoAmAs65bYjCw+5R2VNxXrECj8ueBoCl174SYO58XYkkiidkWSBZb5dTRZdXKkWo5cmWHfGlyQHBwu/tEIdcU8lyJCxFMgGiez2iCimLCBEWKOlkUmPL7JJggKL8EF8x5WyDYQdMeWbCIQEQwiQCiptu0YNZdkhwiECxQlE8AmLJsnaC4gEkXQLKMUG0vj2HRVP/2ti75Os3fXD5HKyDlbe4orQKuvdftHfbrTajD7CtrCjzzD+6+8fLveeqTNz7dZ0TIIWiJIQ+df/AmvQzgmbLdvvzUCYy4v62r/xIeuXtQvzTbceItK72lpwkYM0hcm+QRPs7FWYDg3UXVtRStNTDmdXPcnH/9zmgD2LWyoivJWoJW4mNgGxJyVv7QH3//9RnTy86yka0ms/tMFhit7h3fA6lZUqZszdjlmcXDoHLBYjO0wmDnrSvV8tIsMLNZnDtJYn28W2jJwb312FAX73Jq64ux1sT1ui02f3NTzcDROT1e8jqAIoY8fESPNI7VYqwv0a1iFwClA0U3yJwVDm5guoEbCaa8pZZVvux7i8rSlR9iXUz+WHeEdYR1AFAtQ7aHxgLlfP2+0XaJYZhFsBd59mwPhFgUcs11f7Yj89aeS8BihEkRpm27iIsQsKsTZjVj0Lj82S1lumf3gbwr8TBGrMy599BJdDuJFTLW1WXfIbvPWmz8+4d6THAXaQgQRu9aWiAv/P27T3E+JfJQoIghD5X/84XlaQVeKNv2i7JYNWBFRxfror7BxkAomHJsuu11VMdmkb4Oswg6q44RL1Zc2C7YUegc6p1k4wtsb6XZ/Yodn2/YI8lsp3mZBAvk8oN5aq8vZkzHC6a7M7z1ZdZdXU+Bsq3Rn9HGg4mWlNqrJwuiNjGksZ6gjZrbAnmbQOpjYELsS1j2RSCpt9DYrtyzLUPi8ZO7Did0qlWlWVvau5zja3RwDsCuMzaGPBQoYshDRQdTDESB4ERNO+6gVaOIl3iMs4qMLCvl/Pl8hfbF3osX5woyYmTkPjpNzBQBY8up7iREMeXjDmLsTbjPUOCpj7zn1aMDj4MM+Lf+2F94ZRFcL0HmS7a8FEtMmaIgWmIWNAvKYsTJqHt167Fj363mPqpiKAxsN9cB9IKFJ1h7RsLGC6E8xoyWQOMWyJwEDMLxwdUEhOsI+1xXbCOCtFpjjs7p8ZInHIoY8lDRNNnjgTgW3zB3A9YhWmb6ctJcR72Fp3PFRIsPvHXExqocssiM6h5Fmd2OomUZnLd2v4a4dB/zsr4vjS8jOMF09Ufe8ypN9/fJrLurc+41NGubhiCOvutnuU5WmhPjErK9jfouyWmB+0wokuVHtcXNLMbC4QfhC1YUMfvkkJDxlpg9/EB6IxEUe12N4nnqRKT1WLPeYmMu3rr79NF5PV/y5EIRQx4av3q0XAFwceRCiqIGZj3l0aHoQVeW9gIHNn6lL6cLghU4lhxjMnInOUGFJiBGVpsiYNb2+XUxcyQZcQKYxqD9Ai77m/m+1vHiiUwctfc++aNf+913FpGbzfUn9f67IFpjEVE0t9FcXVAhINhYaOxnWe7hM5rVQ1Bn1Y7zN83F2tJ1p94Nx4mxadHlFd1HnfBw26kLv+v+n9OLeGnByaN31Amfo/N5uuRJhiKGPDTUzJME9O6QYWMOM1rugSU16tpZR6ybKI5B07l9BhYSL3YEUXy4vKUss22nCBj1cNqbfXXyx1qGONeSr5u3wqRgzrZ94huSF/7Lb//nx6/h0b0uWTBd83ErO+zFz4HkxUiLmak9l+KyImBSEO8OJb5m0SJccrxNCSxGc3Xu9YIXKSNhs2KRKXWv1pcVF1QMArbWo7nuS39XieYy8r2wesG9iDz3C5/8TAafkweKqI487IS8Nv7+m5dLCvyaNXLEeI745pV+RLZbtKwcoyG/aG+1kUE+e7yYvHFfFFellHIuREFmBUssy1xP7JIdXVet7prPoe74NN+TObe0ySeby6zW9bZAX3z79/3WGyBn4n/48T93R2S5OMkMkSU9b1lQtidZIDJjmpYufYe8XveV/P5zyWWW5YKk8Z9FljxGzZLHk0nrgpKenEpp35LFutZxYUTauv9cIEX0116BbeRq5PnBRMxfSx2bSNu6SWvjycD8LRj3bympe8f1pX/jjf/06OE/SfJ6gYPdkYeCAlfzZ9o+MKCdFRMInyOJXb68Xf6B22nJBY8ECgRQ7Y9bFzTSzimhHJwuXqzVphMwK2JmAvKv2VRqEiqCcvWpfAnnNwPrAc8o8NM/8Kf/+e0Jy3UV3GgNi2nQRPPAflobyNp41X35GeYGb8qfEL31Z/6j3/XEDLI3Y7o2AR9M1yZJsEhy8UkeoE4kGbAF6R2aaowIcEEUC9IweCWWJT3HlH+G5D3l34QZS36qbXC79AmITmk+RxSbRnoPF+zSyaUMfJcGyCsCG/k9WJAG3ssyCYKl+zuxoh8hHflKFVr/llKsTjqZoNhOUe9Bkzo2vqwIH7nydz75WU9/2Rt/84l5Z8j5QksMeeD8ypuXpwHcAfAU3Jda49D6SJyUMfGaOOjHf7H72z6tX9BRJIzE09DlFdKsmImixNfxsNg5JGDar+B2DIBmZallpsZhtsfauaHMdhMeTcSkctKcUu7Xe14vFp4iaEodqrWgiCHR2xC9M8lyS6E3vvNP/ys3sEE++uPf/fRnTPfuiCxPpXtmLC7T4rel397J7KwuJX0RqelxSZaYpVpSqkXGWGAgaf8OMyBltOeWviBZd+rzg+bxkBQTZveupOdZnLHl/egtMShb5m94LuvlnTL53buH9u6hrldB861f/sbfZNwWeSBQxJAHzv/+luUIwIdNU1wZCo/iDjLbMV8RHUvesnltBv8r0zfmUbQA9su2/2XaWVJC/eo5VlxLcXuO5zjTdi9I4jnSnD5eLJ0mZNQ0OtEtUURMa7Ca6IFpxKbSmFXRs0BFMU1zvi96E6LXIXr9z73ni+9gI3z0b37X8U72L6iguY+cW2hlO4ucC3Ji9qX7OxIwJW0nOWxWFidYBH57AbCTOVnKBoKze37lL0YUu/xs7Lsg2XqzJmKsyFnyX4/7AWGOK+9iW/d/F0HgvPyVb/yNS4/ocZInHIoY8sD55bcsdwC9WLY7ESM+3QqMmD4WPdrtRzjG/TpcK9e4m+KxQwGTrSJFTPlfl1aEDIQGEGJZ1oWPzdv2mUYhiBsbD4NRvrA9FRGTt9Mv9vYr3rmPSsNVxU85RxMxxQWloUGdTJpCb0KW46vv/pJjPOZ89G9+1yUV/bVpGltbTrfGtDStokUPWmKa1SULlyxgxAiYaqWBYpeForOGme0lPotcvhfCRYwsKyIGABRzdaUaEWveBTHvmBM69W8oxsoACv26r37jb1x/qA+SvC6giCEPlF9+y3IZ0J+2DbAYoQCMhcnaPtv4AoBUL7zZb4+JVhKbx+yLommUJwqMJRw7CubthY3WOIXZlG+v0U40qegngxRTlis/35fm8lnL129XIQPUBk9KWUao1AbNNny5sZucO2kxgsbmWdy2it6dZL4msly7+q4vfWzjIv67n3jfjWman4vCYzrTehIYJcB3tNj81hJT3EfFCrMY4VKtMvW+GvdREDExxqlYYoDyPhhBIoAWq48RMUB+Z+0xMCIIWsWOuP1NuFgrjXM1CW4+94Zfv/xQHyJ5XUARQx4ov/SW+TqA5w8JBrdt3UEh3XyldoInigyb3vbroDyzf2ARGomXsm80orDGfAdiXKogWNk3EkVlvQjBkShZbPqqFWZFyAC5oczBn8FlpGHdipsiUGxDWgWNSZtkRuk1lYTNDIjeFVmuiSzX3vfOf/WxEzN/9Se+64oKfsxaW6xlxqVnl5ICOSZmrvemFzAxTXFhOgmWmLH1xcbKTAcFTFsXf8/NO+ifp81b/uK8Rc6LlmiVmbr32gsaa60xeb7ga97w63ce8qMkTzgUMeSB8ffeOl8C8GtleyRirCUC8OvAIOalfBrBIVoEgRcBXiy1RtvWpa570zaKj2vtmDjnUrTGNJGyLmBmQe2pMo4Z8AG6TcwU+xM6kVLrdh9WGEX6hVzcBM0Ck2tm3Ee+m3cRKSktWllqzybTiFYXU3ZplKBg05345QV48f3v/NLHzrXwo3/rL9yZZL5o3UXrsTBNvNgYmAuYc0xLL2KsaNlll1LZX7phF8uLXUd2WUURo9kNtUCCuMkuqOLe6wRMeS8UUq0oVqSYd6Oue1HTRFR7x+x6EU/lPc7C+0N/+A3/H+dUIq8JDnZHHiRHsVFWyV2dTUMLk6espwGxTKxGXMwxyyCt+5VX3SL+XHZwuZZfuukM4sB4CGXbgee6dLOvCBE78F2b0NEMTFbKEjNgWJ2PJs+v5KYgaIOgmUHu3Hr+fe3vU17m3JwspWzYQc7KcWYOHIQ6I8+arHHgtDyom9oRbtvw+ArBSZ0raMIJpouLyI/92f/8l67/2R+8/VhNl7BArrV5i9oAduWdUEnXZEfgrRMv5uVeHlzOzqXUL3YupHR/ypD/aRLHNgVAqctsF80D0Wk+Vux+uGPaOe2I0OVTsNcwqF3YX96H+L7N5n1J8zL5UYBr+Zjy6L+AAkc/+ernPFbPnGwPihjywNA8U+2o0VwTL9XyUd0Vfv+h8qqlwlonpI3k676As5AYjto7Kt8KmtpotTKtZaY7Pgiq2a5boQMYsSN1FN7ZpTd30R5WuPi6pOkH6siovuySP1t10nD1UhtXK1xKY1n2l3rZRvfQbMi10ar3QHK5bbLB8kxbwyeYIc8vmO78mR+8feWs79vDZsZ0bCderNMKlBF3ywi6YcoBL2qSYLuHCzjBhfx+Du5n/ryHC14I1Tmadnl7h73ucKI7OCEDwb0DUwlE8VPEU5nO4GQgkPZG2C7D9TYNg5r89txuNF8tc0VJnohSnlLgsXneZJvQnUQeCLe+YT4C8GHAC5WyLWa9Ijavdse4sgZWHIEXD227mLWbwCjbqyKqHifD/Z1YKSc7YBFCEDBdPQ+IHWd1GtYVKAPR2fvTgnHT9bh7ENOqSwGm50rL44N5053x++Iosc2VVHo8idlXx0GBHZm2pLvRat/3fW9/5ioeA/7KT77/eJLlBRsHI5NxK6HvpbTmPopBwhdynArscRiNE9PHxPQupSV3qVaMXEkQTd2z83pzAabnXVxQVf4XV5J5zjXGbBAXU969Ce2dAdo7CZc/n1MECn35j77hn1x6ZA+UPHFQxJAHwie+Yb4B4LmybRvysj0SMjYGxjbuXTkr6+4YRf2C9Q33QLiEfXZ/PXfndhrnHwuMsSjpgnTzYnskjbpvx+kKShld8GVplKzos8IEMYamDFg2Fi4+HqaJpBLr0rpZp0bUCpImcpq4KQ3yIikI1jf6tkHXj4ksR9/3tt9/rkG/f/kn/+KzkyyfmPJUA4CaAN+5Bvna4N410bK2vSuxRTD3AUbcmXU7wN1kREnq+aZ1u5QRg353sjRxkoXJUgRLLqOIjSp40NZTgG5Lc8IZRewu5keHtbC2d2nOoimnf83XvuGf3Hh4T5E8yVDEkNfMJ75hfhbAJ5w4EZ9nTcS4ngwhfxQWUXyM8i7u1144dmDN6cVMCaMdWEEGy5pVxcbDRBHkLEjWyrMiYEbp6ZezbXyA2QiV1qvIb1srTBNeWsuKgiU9I/ML3PxCL/cozQXou1gXC4DYbdOglsDVImRWxMxtkeXy93/jv3a+QuZ//os3JpmfU9FOtHQiJl/Xwa7YGO0vgs6LFXSCpllkJsz1fi/OCmMsNPD3vlhv7Jg+TVC051zz2O0gbqKIqda58vdsLX01r/2BUUXMS3/8Df/46GE+Q/LkwpgY8prRPFt1/ZKyFgmMhcPagtG6hMXss5aSRbz7pKV7UTAKxm35peuJ5MqCiaWxiymzzFSdRFCZV6fNCDyXmIF8XImBmWv5/WzEdobgJctBRYuFKXPjaLiWGOS7h7TAT/GxD11ci1uPgZ0pzqUFHk/dudXFy7TA1QUlfqfEYoxneZ51embW6cZ7fvjj5xr8OUOOT3DB1S/W1y0mPmbp1n2MyglS8O9sZpje667GwaSg6RwPo7t8X3Z55uwLOTbHxscgxL34GBy3T9P5Xbr44115MirfvJ+anvMeU43DikHF+65ewAJ54a+/+tsund8TJluGlhjymvjFb5yfBvDPyrYVIGV7zaVUf4fZfOqPWxM2w0/TnbOlrYikkZvJnU9r4931hFopbzX/YNtaY5xoGuSNogr1fM2q4sbhCO6jVSuMKacMSubHg2mf/WSRML/0s1tL2tw+3WIsNWVOHxvzsTOWCR9TsgDZIvPBt/7r52aR+aGf+t47Yma3Hk0/kMbD0bEVxlhfUjfsEisz1/gYsRYU0y0ag/TqUsKMWbLtMNxnDNJ2sgdQnqe3wsQ4mPI+pHcgv3khbqacw3bFVqAOpphzoExdELtul2Mn4H1X3vD/XH24T5E8iXAWa/KaUOBokOaEi0s36yOhEo87KGJMY5xEQRvNtzTQ9libFuvbix1piusA6dhm8RidbxRXU0TMqoAZWJTiPbM9l4oLrF2/3wYE+0HdYp3c/a3rWu/tkke6aY2Q5FFdUwmz7LCrNS93BLAj5CzIcRNm1uYFwC63i5IrIm15BsANAM+e/kQeDjPkeIK8V5FmqE71S5/ljpxgB0Eewh+CSZOFYkKaATvdwylf05Ly5O0l3wdUO1v6v+Uq97QqyFyvHfwTiy9teTsSi15IsTQqaVA8k6uum2Jaenpj2742u3o6RboK+zcIVMcS5nqXyptfjq95XgRwde3+E7IG3UnkNaHWlYTQOLY83boLEh0sGKUFt5JzJdVFnNup61EU8tu87otcbJl+mcUuUgN4gb5rdNel25SzF5Nv7bjB4vOVMViKi2rcvXqueUPX7uLSkuZKaG4AZBeC4ARpTJR2/GiskzZWSRrrZORuad24F/Hdt/ci1R3TdVvW6Zl3/FefOD7wKj5UZkzXkgupXFd27ZjtVG9p9TcuJ39PevdOGe+ljEsza8k3ZdfRlMfWQXXllTzFjdS7BH0X6zqeTMmv7VwLct3LsyznVzl1X3uuZcygqXbPXwCznl2UauqYhd4e01MfffV3HJ3X8yXbhSKGfNr8/NvmKyq46ITFyPoBv3/VPVPjSILAGByzIJTnxE0b+wT2/KM6me2Y19oRYOrj0kp9TN3rNnpRsgzy9sLkgLixosO4r1JjEWMgmrCr+9bGdYGNr7GxETg4WFsbMwZmvQifNo5Ki4cpDXsczC03+vkaU0xRi73JjeUL3/zhj5/LCK/f8oe//RVVeWnR3AhXsSLd+DBx4LoqXqogS2O92KWMozO7Z1JikNpSxnWZs6mk7VsXMDF9RhtQz6bFOJgmsuD3Cdw+J8YE7hqsmImfsc4K4ei95L6hiCGfNtYKk7eHwgWnWWaMSAFOETph//C8JU9ujJ24CMfbwFcnEnK9SoBuV4YtR4IraUXI2XiUOZxvVWitLLOpg61/EzJRzMQGLliX0Af47iU3QsZCExtaJ2bKuhlF+J7YoNMYuGsFilSLxWxEQLEQLbkus04f/KYPf/xc3Ep7ma7tZcJekjBZumtqFqmTei3ZAqLB6hKWe3oBexPA20TPzt2vcq8A5NGAd00kZoGjKlCdoMYyEvPUZ1UsRtq2FyeojNBUv50sKdYqI1VkFeGM8u5p/87YdzP/fTzzV1/9nefmMiTbhCKGfFr83NvmSwCeO4twGefRg2IFK8eNLBilAa/k9eJuKX73NYEB9PWwFpDiLoouKCsIokiJwqQPqA1f5vexvRfp6+hcVV6s7IcuJl9msVwVsXJiGra1xbuefJoVNieyC4092vkFzqXUrASDHj/NfXP8tuNH32PpW//Qt91S4GZ5Z2rdRHAPu3r/rPtk+Cy7ZWpWHedOMlYq9fdib1xuJ/WeBqvIQLAWaw7yMy8Ua47dLn8sWlP77bbe9tcytEAjJWYAACAASURBVLxb9hzWcpQ/1YlsWmPIfUERQz5dXrRfYFYglO3R+mi7Hg9vlendRIN8Ib+bswjWmiJOUFhBEo8ZjZI7h3pUVw6MpWZwbiuU4vWuxr0Mzh/r7USLmEZABvEx3S/fsBhxk1wCU76u1rW6fLZzhXJlzRqThYlM1VLkGmcTN1JjQIyQicPv50b/mRnTuTR2i8pxiw/JDXF+8fe57s6iVdxPB8RLs9JMRnyM3Tsn2rpiJ9dNFi6Duar68ybBeIIdTjTX0747aFa58qxtrE2dEsNsl+OLa+kESWDVaSZ06t8h9/507+cLP/rq53M+JXJm2MWa3Dd/523z0wDuQPDUIYHi1oPAUbN3ZCGJZbgRaDFet9trLp3WFXSlHGmumpGVqOUVt39BX9ehKKm9edYsNP7YOFKvswZBVvMokGeqHggqCWW70X5TuuT0lF/bcSEtWdSkdtktedKPcq3rqVuxAFjCDM4KPxKtSctdtt0gcGZwPJHl9/2VF37/LTxivv+nv//OJMtFcd2s54PXckH23YB+peu1m8l6OMVA2lYzWN5iR+fN57PTCgy7WEPTcWEQu8kOgAfU4+zgdvX5AuZZ++00YnOpv9b3HObYSUbTF6BdR+J9b3rDP7r6gB8beUKhJYbcP4IragRMbMi7BnzkMrKxJquCY9CQr5UfrTcYWBuqRcYPCmddRLWnUSe6cqBlOV58+VYouOOCwJhN/moJgpmi4JTrbq6f5iKy+W1dhoPY5TrYethB8fZ5/wnsL27zyzuk9UsTV4p2I2cIyu+ldo9ymopPM/dvlmQZauezgbPTNZwDC+S4xiRBcE93uKcXUsxIiDkp97gE+O7zAHZ9nIwJdrb3XKRaXppVylteWu8m63IKA9vV52bLyFayGtcSBr6zvZJMPE4tKx93kl1a5f1cUOJnmkWoXF+xJNm8dj3fs6PzeK5km1DEkPtGw2zVdX3kBkK/IHx24mfgKkI4D0blr4ilmF4a49FxvkdQ+ZLtu20vtk72mM5aUs7RYhSigCnre7M9vCe5/OpGMAJoDuvpc+Q+8uKnm+m6Xq93ixT30MhlVMWNCeit27n8NoprcG0ZMevdXXl0YaSYiZWA2OeOfuTjl1df1IfEDLnmYnxy/U+CO6g14pNzK+1DMLBzpdUGv8W+zABmew/UCBVtee+VQOL6nI2A0DIy8DiwuBOnQQSNeiLV2Cm0a4vdp2uZ6t1H+xqo7Eejzu64i3/51YtHj/q5km1CEUPui5/9pvmyAs90wmTktsBgfSAqgNaQwVhlbEPuulLHc6NPOyiiSvxKbmTLuebqommBrq6ht4vYqQUGYsylp4Hm+kbbi5kyLYAXBOKmBzgkCotYKvVHLrNH/DF16UXPXlqDeH8WmdaQlZ48vow+9qNbz8Prjxpbk//q4AIfKt/5Ne95RYGXFiBZMUzcTi8YZfjMbfxJ7aFUYl3ysz5x15wFj5Z0oE0D4AXCUi0yVqgAvpeSFxpJgPk6+XVjidHS+2rqrzUKGSD8PSXrm01bcpotS2mNIWeEIobcFwocddYQ8Y3p/bqV7PE2tiSWP1yMS6qKoFG7jbbPHr9Iszz0cw8dqHNet24gGGFTgij3Im5UXthzl/qjCYjOIhOsRLFrdTmPNc0j7jeNUt/oDARayGcDhecssHpB0VtjWkMXRUvrjhyDd8sAcvd0Vxs4O+7KwD3y3J/8rx+9NWaP3bXU/TkvWXDd0wvNZVNcRsUKsxLg695Hc402zYnn2GPLWmPsPErObWRcTMY6Y8s6KQP2DURjOg5V8PSWF+OmtFYp6zJTL6pKmi1TtVplnvuhVy9detTPlWwPihhyZv7Xt8+XIHhhbG3R2ghXoXBIhOR0hHIQ88E3+oWReCp5OndMqIP9ZQw0cdCde1B+F8wrreeSP6e4bSs83LVUxeYpliFvEWnCq/3K791i9hx2fdTl1oqQanVxXbCLO6i3lqy6kdAmFux6LcV17dNOtB9cr8ZoDITMcg7dcv/85XffmjHdtOKiupWMIOsWPWWp3a2buGgxJWYkYB0JAxNfE0bjta6ubjFllXzNouOFxol7h3qrW7EWjdxKa9aaExXEdzF/Xn3Uz5VsD4oYcmaqFWawLCLOynEwGLeVN943EAXI6d0AcTDrLgbF542D1plrqrhyYnxKFELx+ksZOfDXWmjieDjOkiLeCrPYY2AsLyPRsrLMoe42/mUsZM5gmRE/InAZtdV3505dak9qgy31l70bIM0JoShgdogN3ihvaPCe//d+9OOX8Ii5h+k4jsRbrBtRUI/ETnQxpdmoi+BsVpkaOxMtKNZ6ZYTOiZqxeIrVI1pt1gQNYOJhYJ6LjX0Zu6SiZaYXJeLHhFEzpo49romaK3/p1S9gd2tyEIoYcmaKiMnrtcF3XSXN5xLyAqdbZtS4TEZWkUPHRatLtLiMBFRZj6PyrhhIOlFVsOexEy121hj4utYv7uBCalYUyV2Tx9c+PqYXQ84i4ywnpy22cUILtjUNn22Q7BxNUaCkINWdafTjaL2+8T20NDFWr+XKyiN7aHzP5RePZ8jL0QqywLiVrOtnbUETFvd0547xcylNuFfvrR3+fxTHMpljdv5ZAWMBgiRQqhWtPDez3YTIukiLrqQ1obPvzm9Edkp/6jyeK9kWnMWanIm//c3zsxBctGmtoRe3Xa0pZV3hAnbLp81n06zgwcq+sj+mR8GyZvWxabahl9DorwmuZXB8LNNtd8cKAO3O4e9ryrFYtRTvX0ibbf2jZSrUBcWq003EeSA2SEyebIWx8xbb+mv9vx/ZNf1r64v5X3L59p8izXldZoF2cyIroIIjAI+8y/WscjyJvDfWNb1Hk5uZW8xVTe7qgEV3eYyZFOC7U+RxZJIqF9GcbwJkSXdAlzzjd7mT5Q/NfpZjFNAlJ09m7Ja8qLo8cz0GaOPHHMCccoH4KdHzupj12R6Yb9isE3Zi3qS06wqA4/t5JuT1BS0x5EzowJWEuq6r3aIPCYFhzEnYt3rO4BYq6YJx+lpaFBBuoLszCphWpriynDsKzVrihlwP4sIKqjbLc29tiesz+i7aq+4MNJdFEST7Olpv6fkytvBEoZOuU5oLRe0ov53bZ+hSsr2XTre+9OXlaRie+RMf+cQlPGIWyLW+u3ILVh677EL8CnZlXihjofL3q+UNVhprzanru+z+mWqvI2utcRaZbpH87JpFrT5ztc9+zcJi3UPBpSTACVLvquF+tOBhY4l8/gOv/m66lMgqFDHkrFxZFxV+gDIM8vXCx6+vC4dgJTggcIorau38SyxjJCDWygaccLLup/Zl3K4jupGsBaPmcce348qxcyjjNDGzdp/X3EzJPTR23/WipdRdasDvHM63x4S9xMHe1uNfkoA5iwupH0DONsamQX3krofvv/yuV2ZML1kRsTcuons45FbaedFiXKmpp5B4d5OKSSuiZuTe68eU6bpWQ9ykkKnrc+j2nJ+56THUxEeX1gtML5RyXM1awK8NBtZ2fI7RoUuJrEJ3EjmVG988XwJwEQPrB9A3nDbdHaNte82q0u+TZNU+xe00arzXBMhQXFn3j1nv3DJo4mNtGbmalnxuK1awkq9YaOL5a35zP8r6HOsUjl+77rVradffx+Os3uO8lBFZm7OpHZMYu5Cse6VtTRAs0LwGAKo7TPmRFbfShAkiehnn4FLSdM4XyjsEIF95Wk5W3EpJOiTXTckLyVeuCzAVKSEQFUCm/N4sgKb7ApkAzXc5+9ZSOYpZ09QTgBktSJLDq6ZqO2e7oAkiS3bvzPm5tf1q/m9paf9Sy/M3aLFFqCL7wfw6FAumJGu1vbcALoMuJbICLTHkVFRweRR/MlwfuJUONpiDtHzO+qW32tCac1hLhZsvSNyX4bARXwuKjeJmHokFpC9we75lWG76ZdyJnHB9yOccWl1GacHqU+oxsgqNrSt5SoCwWLfCSKT1LqlRuVMNCo3WmJPOuiLdKLHRGjNjwt6NHxN/9U+XcQ584Ll33drr7ma1bJQeQ8by4p9ju544dUCdkgAmyFdb4HPr1m7cPXa0ZUEts8Y8abzHxfrT3EUx0HfOIwXfq72Senege17dOVqZfQ8kb20Zrc95fa+CPeRcnivZBhQx5Cxc7n+hrwuKtQVhfVXUSH8O2OOzwLGNahUcRXREARWWkaiyLqVuhNVgnXENksm7RxARRRSYct09lFhHP7pvdz4rWvL+02Jh7LmcCDLnPiRGDglOHdUr5LfdhNcEzJp4mSFuZFj7bDReH/DU137k1iWcAwtwvEeb5yiOlXJiex2hdF9OIqHE0YxGJ75nu0RrET9iuqxPNb24ZJDvyYlOONHdytQA7X3zA9CVubNa/hO1dTZCp64PBGkWSHuN5a937bbbe7TRqxW4+D2f/MJLj/6pki1AEUNORYFL+dMLlmrx8HErGH0Gq4h1cQB9mhM90jeMTsBYCwjWLQTIdYfJPxJPnbVEBnVC+gXcHePKlaEYmQflVmvNASG4FguDQZ61/L21RIzYCHllUI65N+56tL9vLRA04X6VB6HiLS5+fJQy3ozmRlrLOlJvJT8I3vQszoEfeO5bjhfIyyVepFih9kG89bEwfSO+QFw8TBMbUxUONjhXAcxq5mTSNICcnZLgZCCQum7Wau+lH0+mjKhrhY6NW5kBN2idmmftphmo74S496M+W/MutF6PUr+DCIlQxJBTUeC5NReRSvnSqnmdKCiCAXa/BPGCXsB0okX8cYo2Uu6owR/VZdgzZyRoSh4ZDBwX6tWlhzJGVqUy75K3ZEg33cCqBcYsdTLIeIytX1g/tc4447WFa+r2jZ6NAjHOpsTN+EWqsCrPpwmC1oBai0I+97mIGKR6HzdXT7uWPXKwb3EriWIR5PFbwpg5YeyYpUwlkIVRERoKaYHEmAaC1Ys7K0Sau6iN5eKnB5jaWDBG4LheZAdcSQuyoOnSDx+L8p7mP+D2nIGFLiWyAgN7yUF+6k/NT0cRMlwfWVZWjikjQdT9spLXpFuLw2hQuk705EUA9A3kWLjYBhmx3K588cdH94YZWTe6dGya5LxzyHPQEnTAWrMmRmSwz1ph7DXYQOrRAqC7nnIt9p4hlFP3SRr7JgWYCtp0lbacFnxq9+8huAA7JsuUm/Q6hsy5dcedMV0TLO8VFYj0Yco7APsclKzYIT0Bm7ddZ70HeXyYe9hhp4v5m2gBuoLUgyjpgKTKl/LAJY0nA0nPdZEpR9aUMgrtL292tVC0MWSAGTsAikmWnN6uv7xni6ZxbdQ9TbiXRHJAr9YzKVRRg3yXvD5By3GX7v+JkNcDtMSQg2j+ZTsSDACcpWW0vxMZGHSZhl9sV2eM9q3UJzaY8dhYBmK+cC2x/NIFdl3YlG0Z1hHhPgHtl2a8VxikRXESrTBrFpnR+t6OP9PtW7E+mTrYPDbdlWXz1LTUWLVu3dqOFTHlCJa8V83xCpiYmnJesXU5N0vMD/3Bd76yqLwU3WXFbdK6P0+mgTcB1eqPc5YKlTbGCoo1sY8n8lMTiIuXqRYZM4WAH6+mxPJM3THNSrNShqZntw91mrVdd3uHvBXNX7exsqmZs0spYsgYWmLIqQwbVzmcZ7Uhtr/cdZyvOwbwXbVDvoOWCWnnWcs3CjAuX7qxPoLmurANK8oxAwtMZ1kJ6e56o1vNHLuY/W5k3lMWxHxrrrtQRwnH2E9bb7tvAlwX8Jont9kKTQ/EWLSaBSINmiiCPJVFGb23jHTbmv49BDu0MXAnTBBN9+U8WSDXBPJC6iYtwdLiLS5lFF6gjbnbrDcC0QlS3hEpd2PCrEgTCQjQRu4tFpfU9XoGIHV035wPC6CASHIXTWWf5nuuAGTCXJ+codx4f635V3DauZQ/NuQXQPIh1upS/vDrFQPWYlP2L2a7vFeEjOC7QQ6iwCXbGA7jYlre7tOLBR26YKLo6I4PloFR/lgXAL6nksS6tEXhyx+eo7O29I1+FTcH7kEvTqwloncjWQGzOnqujI9x983kqb+MZZxvFDszuj/tl3QTKqvWHwFmaEvX0rVbu/u3KNyEgJp/ldf1nL8Gjtpz6fl+pf3wH3znrQW42a6977VTeg3NtYdRG6TOBzrnIFo7k3W2rJyU+ZDUW2BK+fXYahVpdXExMjXNBucOgn6NxagftLBdR8I7qfw0Fm1AvRIfVawuo/iZYrXZn1PANnn8oSWGHESRzLgjl9Egr/90v/i132+WPn9iNC9RXT/FAmO3yw/NQ71/RiIjWV6sWJH1847u0QFRVspDlza47nBvlvAZ00fbQJr88dR7Z45FOO/wHouvoxucUP25KpLiPUpcRorr0Gq5WKSNA63QbJ3J6+5+CnbZCpN++S+XcM7MmI4FeE40WTusDWbJA8kh9zraoRqmSv3TwHaY8sB4zeoFzfcBC5CFyk5mNKtGul9LttjUN0zhYmPSH0QaRHLBlONbktVmgaDOyaQwz1+S6pDF/0Hlz0nS+Zs1BijWmPoSdOvA2sB3JSZGan596sE8HfKkQUsMOYgaa8VZG/9oucAgn/1FX85zmhAZNZxDBi4F28i6tJX6j0SCs17YfeZ61wJ062c8PpwvCpZoRUn72y9UCPp7E85tLS11v57teR6csXiUHwMLUjmfmBiXnJbuV/4nOY+o+WUOWOtLW2+/7vdZWOYuyxcHb8Qj5cNf/c7jReVl3306jb1SrCPNmmS6k5ueScW6cqJlgDtU64pdr72JilVETWxL3baxMsXKYbpP1/iWqe4r47TsIXmsl2YtGy7arD77EocTrCr99ASjZWyRWeIfLyEZWmLIQbpf0Gb7rHExS/1FndOsAFG4htgf5xtIGAGDsO9gOlYEUby+gcXAC46Bu2hN1MA35FbArMXEjPLYe1C6G/t7tNILKosFP32BqX+0oozSpD6eMwke+9ykK1PLLW65swmi2CqSRCnmHNRf9M76Yn/Eo0SRKPZ5uPoT/YyX8RiwAMcCvLdYmRZMkBy7IvkOlZgZZCtGsTblj3pvUC1Ni1sXpNiWYo2RfHOSFcNaXqacH7CxMSWPCMxM12qOKdvhMz8/++alXk/lyadBH8vZEuXtyG+GYmiBsd8H7cmXt5CQHooYcpDYYBdXgd0f1+1nCuQci5QiTEbnOSRCRnWL5ZwmbkaxOWuuGFs+BseNhElJk8HxHq3NwciyMa5b+lL39zkeI17UrFlsDqWZ42HyQPy9GQmZ4bp5d4oDBKqYBdiZ3CXYV1Vy8KtpyGqDZ8J+86GzACL7O2t3+lGSA3zfGwVMlWwqOQgXxq20ZFGT0xV17qMi1xJ5PQuBBTvsMCO5qNoTs+9euYMuHda71Ny9Z6XlL0G7UxOe+XEtJWPtLq1RhaIeYESNmnURW3tCPHQnkYOo4AakNT6HXEsYfUZXSVhizMaaCIl5nGg4cA4rbrpzid/fnV/MMjrvIH+0oOxlnO7vo/+CtnWpo6Oa66yuleAyOvQ8hvc2HBMDcW1wrgLDUXk711I+bg7HJHdRW5aQNnIlpOOCpUnycfn4xeSpg6Y9BvzoV7/zlQV46V4N4N3VAe+8yyht22kJ2j2dvLtIW2BvCwpOaWmeJbQu1fAjHnczWKMMJjjVEZHbPUf3LNbcQX4WbdQu2AvQuYPaVALNVehdVPacnevq5rk8SPLYQ0sMOchaYzhar9tiGi6Tvip0uuP6xhghb2kwYxrMvpFYAmxj2PbFclanGsjH3s9cQ3Moo3cZibNuLOYc8d6ddn2j+z2ympQGRLBSfrwfgHMDrllioLlu2urYPUX1ZZWu0clOkSVJEJjFbZTMgdLSFNBqrVnwOLHX3TUVfaHW3biKrMuorCsEk5aZu9vVlEDgYsWxd6TcxVRG6h4tAMpM1O0T2aIBFJ+cZNNqcSdN2S2lKphkgYbB7CJ2Fuz0GV0/cT3VtLquIJiKyytkT6vtvWFMDFmDlhhyEAVeWWuk66B0cYH9tXxADADVkrK2zwalWgvEyL0Ee9zg3EA7F8K+UjbC8f7X4orVRwbnXLEeDWfMHtR35O6y+V2ckb1/wTozx3OGepU62YDR1ec9qlu4j+O0ENArMEG+6qxMbRbtWB8dpKVy4I7FLTwm/Ldf/Y5bCtxs9yx0TVZvHZkhtVv2iZlKYNz92k/A2AJ0S5ntPsXB6px1plh4yjk1jX+8N9YiH8DbunTHv8txd+lo0YFbL4HDJX2vzUqk2ZqU0145h0dINgBFDDnI1/7A7pZroPLPxoNBtBg3dEPRY8pdK8sJlZELxJ5PxsfZMWGKqwMhn3VNWazYGgqtcM1dAK+59mVUrsm7lzBf00DAWAES74Gtg7WWIOQd3adYl+hestankaBp+TWPCaSYRQ8K27qovW85n/oRfEfvWGkozbU9Vo2dAsdVwNR6WqHmRU1yK1mXUeu1VHsQud5EZZJFO9kispiZqrtIa/726WfaLiIp9IBSK5asK8q6qVI99mpFTxOk/rlZ+woQXV8AzNg37lY+NuKUPF5QxJDTEbxcxQsOCxfANEJBsOCUY11DPXKXrJ1/JIrMcXFsGGD0iz406OV4kbSY21G/W08RNU7AmPPZ6QEO1XNkgfGipR97p67rQOQMrFCxzJJWLDjxvu3jszJlL9D27OO9OChkSrfq0sDFEZF9fIxrJDV/SikJN/AY8de+6p3Hi04v2xma7RQD9d5qa9xP8oSPNb6n9tJK6+rWy9+apu7N2aJiLVft+dqBBZtALTNcO0uJFS5auk5Pfr+1mKm3DC05fscLoCR09nnSyr1O7f1WX2553kY83XmoD4psFsbEkFPR9CvoYmwwuwZU+ob10DHDtJGF4AzpAr/fNp5r7o/VY+Ab6bOUuyqyBuII0guMQ+6oKGBsmr2XblRe6cs5eJ1rFqx4zyWcW5owsddXmt1yn0+j5F+APKFjOjqFcZjSpMVKlO0Fijbpot45w+keKYu07tapK3S5rjwEXo5RKVMoIMuXdOnpd2aKaxGkQfDsOgBdsJT0fLcXnbCrA9NJN+CdoE1TsJinNGPCbtCDKPU2UjMicpkE0r+HNk4HWYRANE/4WKRJy+t7V5su1So5dCefQJSWGDKElhhyFpxLaQ1dWY9po3yl8RsdY10oo3SFN4Fba87QNQTfeK/1boL4Y6pb5YAw6CxKo/OFvKdZuDBYt3WzVp1i0bG/tK3oWkJ5sfw1y4wrt543W146weQnbvTrZv/A7Zaepbe0RMuLd1e4z5d/6U9+4R08Ziwq11xvoWjFEDNxoolxmdX25jltEeNySmWdGPeOjauxx+3DMUseXK8tPg7HHl96G9kYphNMOCmWFvOcWo+zbGmx7ikbp5PX96lDdrXK/Bf/0i2KGDKEIoacigI3hg0eTONVGyg/fon9PEvaaSJp1MDHctZEgW2UVXxszOgcdvbdKEpmYHVfFANnEScuTcL+gVXGupTWyonXVFjk9DrGe+gowsQIqfSp1d3RP4MoZFLaYt0j9t5rCwot71W3jeTG0FrG4/lr/a9/1TteWSAvpfo20VEa7hPd+cYcI4FiA3EH6+qDdMv2iQkedqP4apm52ggVNcLGxd40F9jo07m+Mge/L9DElBXMM6zYQas3u1eTA1DEkFN5/j/b3QBwFxiIkFGcxWBZbcyz3dw3zMa6sOai6eJDxvlH1hn7BRvPqbmcfqh/fx3OKhPFwMCFNG7YUeNtDoqaeM8Npb46WrfXbepc66m+zDUh1D/L8TxYyGXaT8AGBGsop6UDZhyZsg7xea1VJ/+/iNYAYAWuD27RY8Gscq31JJpqUO0JdnmcFjPeirag3DaMfxNtsWfSSYllMQLJTvh4gimkF7HiLSCzDSaG/7uIls7hok2AlVglG3hthUnJU+q1r2KrHWdinh7b50rOH4oYcibUWGNqgxwtBPWz70kC+ynoBEXXkAdXzmlLEVNWLFXXyWnixi61HD87chRiCGXN5vhYhyqMRvU2ZUWLjhUdsZzF7U9N+hzEyiExY+t6aLDAXlyp20ZNCwG7VXDY/P0UCd1iGzxTQvv0A9uFYNQbeEz5G1/1jlsL5HZttDFyFdmuy15c7Ovgds2K0ZY28J3v1pzu4QK43k1t5mk7aJ63Ap10bqbWRbvvqh1dWafMm+TWy0zkYj79PVn08QrWJo8XDOwlZ+W6As8XawIwauBsegnNNKLnwHFRRAz3r7k4QuNcAgfXRheODSgO5MfKehRZMPUbHYPB+hzmYrLXPqK7f8HiE8vvzq1GpA2tQoP7XNPG4/4Avu7psw/0NTlTTyJpJdlQ0EJJmyE50DdVpAxsVwM+pyWVJXr7V7/+d99Zu3ePA0uaiuDDaTqBZIJMAbfSrgktODYbKVOaIF2vpCkMgCkH3Obrzy++5BJQ7k+ZrVoUE8z+nAaUcpHLyOULYM2sa69mqmWR/OUl0BqtK7Ze2hLa9CXJkmbTka81BXbryz/yWb/wWLoJyeMBLTHkTKjgOgR31xrmkdhw48KM8iG4YA7FkYwaXXgrQmHB4eBbd12mnjatXtcBseIsLmJM6fH6ojUFxkoU0pZwnKv3QAiWatvyVkcbHli+Dt2XlveQgMmCRUv6qIu1rp4XYf9omYv1RaxVJo1BYywWx3jM+YmvfMfxiU537bgwNg5kzuOtFFdRnYZAS5DvyM0zOetHjImxlhdrzTkZTENQLDH97NbeClODb0uXaxfL05fV3u9ibTEurZHVxpSlwPGjf1JkS1DEkDPxJz60e0WTNcY1js7FYgVL/iUXG91RAz+yKLjGbsVCgiA8Ut762xXaLeH8K8KpfokG8REFwqhOqdFd31fWZxMLU+5due5Drp++rvnL3gicIiiimIMpC6Hcbl4moManxOcWt9sz0iqmWp4W0LuYUXpjfWqqtKPs+RcVE/sSYyYAhR5jAyhwrblR7PsW3EhW3BT3j4oRIk1E+LmK4MtCcVOhHjOb47qxXOKnq1+L09nfdAAAFbtJREFUx9mjufVs76P+GlDHhvHXYwJ4o7hRNxjg8aN+RmRbUMSQM1N+FY0aMAwa99Sg9eIhCohO2CCKoUFdRmJCyi/28TmrmBHJYkfKdRlB0J/3kGgBxlaYNTFirTCx7GhRWhMM9vqXwf21FhuUc0o/4u4ShI8/19g64p/zeLC9JvRsN+pYnq6eo190IDilNnYKeen/etMXPFYj9a4xQ46bMGxCrIqBKkD9zOaDOJGh6HAD6Wk5B1B/UJT3QP09dmUbUVUGwksiKAUDr4me7seC+u1i4Sn128MG88JcQ63LzY981s/fefhPhWwZihhyZv7tD+1uKHATMELjlDiSkdsiWjOi1eXULsDx+CxKTm0Mpbc49OZ0WRFIGAbLWiFw2nWu5XNWFkFvdemutzUKo/uxdk6gty5FsZXyjoJ0Q91HXalHAic0ln1ZA8vMcNEaTFoae7RZsa9hI9z8yj91Z9bdS/X9sRaPaoGoLrJs+TDdpLM1xfY46kVOFELWQoLqpurHf8nvU3lm3iJirC8jYRWvx1sa7dALRQwh74MVO+qu/+pDfBTkCYEihtwXClxda6BjQ9TWTa+UQw17sH50lg3pj1/EW1PW1p27ZXD+mn5AYMWyERrk0fnGIk5Wy4auu418vfx1HxIu7hq1Vr2VW4WNH7dl7bmOLCgwaeU+2s94fn/8WIDaQ8qShFu28CigKjfvvOnipgI/F9Grzg1j1uMEj36AvzZHUnQ7lXtYegnVT2uZ6cRKsOKY8zgXT82XXFFqttXMnWTFWBObslrf2tMp1ivtv/nRz/7fbpzncyLbgCKG3Bf/zod2N1SSNWZEbHzqp8gweLasr1kTKgfiX9YactugnqWB7MQG1ntloOZpriRr1bCiI7px4r1xIiUEKneWCwkupENWmKEFpQgps08HwiRceDt2PDjdKC1dh3EbqcnrHm5f1qjsOjZMFjKpAcTVvqTHm5/5infcmfPgd/6+a3cPrLXFvkst5suIkfx17kVhsYg0F9SqWOnSvCXICsk2IF2zwOx1h2H3amPNmTvhlfY1K1v9O7r6sJ8DeTKgiCH3jeYvmFGDM1yX9oUaR/SNDWb3Jb5ifVlCYOyhhjyWuyaSRiKrnL9zwaxYYaJ1JjY+Nn4mCp44XstoBuvZNVBnXA6574DWfXpVuAQxEoWTtd4YodOVYcsPrqfwNAYpNl3KHD4v/d9Hv/PGINtjj0KvjnoHFTERn9Ns0uO0AFXoVHFSxMu6mFgVMMW1o1Zc2L/d3mqkpr5Dy4s2y5C6/DKIm5mwqNz87z/7Z288wsdBNgxFDLlv/t1ruxsKfKxs28amNj4lXmZoKbABtusN7yjexAbtIhwTt23ZluG5MFiCqKjXKuPzWgETkVwmVF2etfwjV1InYFZid0b304qwQ4yFUG8hgDmXvQ47CnALYDUluVmYY1m+h1LLn7fzuCbZ7XVXZbu/1n/2K955Z4a8r1hjogvRxrWkbsjWGlIEQkrb50HrmkD2nzaupbmU7LthtvM73wTSeAA6G0DsB75DDk4exNqgCbL29xy/FwAFXnz4T4A8KVDEkE8LBV5UpHFjYiMaG/lDDeCwC3S0QJR1EV9GKNcdP7A+LKE8G+g7LCMca6cYALwrKbqQRlaiwT3srqMeKz7Peo+rw0up3yEOCaFag1VrmelC7USKO7o7xkub8G506f07AsjVf3z02++ccmmPNQvk2ozdy4sb66Wt73WXYlDgG3o3dH+xakibRsBNrji0yMBZSRbAxcf4GJWRJcaL/HGQfHE7Df4WjOuo75klH/rY5/zMpmKcyPlCEUM+Lf79a7s7moN814TDqJGKjaRv5HzX58Kc3UeHBMJpSyE21Aj7MMhv16MYQihrJKr8ef2v3tF9sOcqDRS6u7Le8M/SZpx25xg8n7VA3iIzznyvde3eWdmSXhLbtXjtGiy1e7bW/Tf/3zd/3mZ6JK3x81/xjlcW6IvRBbPPPYfcuz5yPfmePFiyRWZvgmy9FSYE3UbXE3z3aRvAu4S6uIkgnXBJ4yvPJWYGMU9/TjPuz8uMhSH3C0UM+bT5D67trkHwsehGOSggBi4e28i27fblNwquPU2cHBQzp+QZN/ZmHSZA19R5zRJTLTVGwNj5mBDPGe7RsPfOoI5FuHQqIN6jM1xzuU/dcSGWpXWHN86j2v3auo7U7Ctuo3G9bNqCLs9dQI/GV7g9/u6Xf8v1GfKSorlw/DvkrSF9TyLvDirv5r6Kjz4uZiQgrFsoio5Utyn3jIqxLeVHh+1JlYjPsonQanUx68ACufI/fs7f3sR4P+TxgSKGvCYUOFLgZdfgo2+YDjVUqZHzaUMXzyllnCZgRnEu8XwxiHiEAMliFMTbmthq+XR4ziI+YoOdXFi9BWp0DYfO390vE6y7xmnPzl57LSektWtfianpRI3WI/vnX/Me/fpbPu/OasW3yYsz5Hb/brQeQNGt0yw3RVRMLk5GtcyAPVUhEl1JVQiphPgXH8fi3UpeLNX3VJtLaTZCx1p0evHURI1CvvVvfO4NupHIfUMRQ14TX//B3SsKXEGOj4kNMaybaaXnzij+BIN9qwImuLK68gd5hsvAMhB7R1nT/GzS1urnG3bfMysSBQpCHMyh43qB0Oddlyyn7RydT+t6TRv0m1ZX8XzMilB0I8yOA8I/9Btv/dzrZ6/pNviFL/+WVxRypDrdba625JZJwbxTFQOpl5I2EZGtXSWtvMfW7Tm7WJsmUIqYKGPJDC09aq0lNoYGRmABS7XUFFE0tWODoKnnbrE9L/345/705t2D5HygiCGvmRc+uLulwIvONRJFwxkETNcEniY6Bsd3wbumHMuhcuz+mB+QsdgZHDvsvRNF0Sndn0+j5jlQZleWtrp012+sNGv1OFS3XuAU4WLK0/G9bfUW+GHxBQp56Tff+tlPbK+Vj3/Zu24tKVgersdSCZiGZoEbXD4mbqXrVm3S9jlWJvZU2pcB6zoribGm1KDj9jxa3lJu/+668qp4gZszSSG3/9bn/S9H53DLyRMCRQx5IBx9cHesgjcfsoh02ysxEaeKGxxurOMxh3oKxXKcCFqJTVmrszOxi08r3VZHIsmuW5fQqK7xnsX1OIN13R9EzgLtxEQ7SWDNchLrYesmUcwcPr4F/Yb0lHbzn37Dv3w0qNkTxSe+7MXjBXhza+CtK6lZR1rArRUKazEy4t7LfRY2qmKCh8duztgdu8yybQN/yzxMIUC3mwfJiBaTD7cXlcuP8h6TJw+KGPLAeOsHdseav4SB0wXMKA4Eed8hsVAayUP7UbpPH+hq3fXesRfTCSRZETah/BW3lZUnUSfYa9KQx4kjc89quvTpri6je3PoHg5iWHpB5MVJXbeiKK/Y8nxwbxEp5Rw2PsbcQ9HbEL2C1wm3/sC7j2edPtQsKj441/ZS6gaOQxV9sBOvFsp67YUEmzcMcwD4QFwXx2LjW6bsSmpuJvd+WpeS7RqucnuBXP6p3/aTDOQlrwkZ+bEJeS388LvnIwU+vPbLezlkTThrDMwgT9l31m7B3Yi4g3TXQATrSjw2WkEWt1+caFpG5+m2Zbh/ra6rbirbg6q6J0y6cyVFEdHfd9SeSKUMzbFPOdX2TrL782fKs+R1TeKmDHAnMOv60t23feYRXod86c/9p1cnmd8rooDkN1CWfF/bNiS/WZLf1JwfUEj+TPnyvpzHDSqYPycxb1ZOK8f4PMjPOMsel7f/nKT+BeVz4zagl2/+9p+ggCGvGVpiyAPnG5NF5usUuAv0IiMy+rXYHWeOP02cYGV9rR6jY9K2+XU6sNiMyivbc5dXnYDpriPUpxvcbnTfDlijurwhXTDozaToU0eFhfPXbFrWq1IJZYqpi9ikEa9bAQMAv/wH3nN1xvTmGa0HUp38EjDj+5jP8n5pdCvZuBTTK0j9c4vj1ZR3tR/PpXQF77tku/PkTzvlwAL52AKhgCEPDFpiyEPjh949P6vAdQUuxgbXrpd27lRRcsZAX8BbS+K5rJViHhxfGtklpHvLSi9I1saJKeXtg3Ujxt743iUyrC/CeZeV7WhBaT2eUoO3SJvJure26NACsxhrin1mKGkDS4yzwLj0/Eu+s8YAEH3zJ7/p6WMQ/N6f/74rInossjzlrC31UwGZ8/1rFpqhpSZbcgTWSqP101pVrPXF7ptkBoD2HNH2+XP79Cmtv+9nfsf/dPXR30XyJENLDHlovP0Du1sAnlVJ8yxZuRwtA2vbtfFc/8We8odYFEsdH2YQI+OQtjIST/YaziK+rKAposEVEq53lBbTo3CK4sZfh687wv1xsUE1bz+btRWHfZ2b4CmZipUl1s2t55sX7tVtFf19FDCNX/k3v+O6As8q5HYLoLXPpzp10AKj7aexlqi3poze01audPvSeDBTnXTS9yCzblMzNkz6vDtDvo4ChjwMaIkhj4S/9J75igLHCjwFhAZtJZYkigSg/+KtIgd9vpGVQkL5veVCvHVmIFJGPZBGDUHLN45tGQmSVldxdYhWobXri3Uex8bYkXbNPXNBuH7/nC0mNo7Gbqe0XNKa9QWAllgY8ys/7/8QRK9+6u1P0c2wwu/9hfdfVdH3Ajk2JVhcgBgHY+Nl0j41MS51VqbO4uKtNOL2m1gmd4wJC/ZWnY8J9OjnPv9jfK7koUARQx4ZP/Ce+WkFrinwAhAb1sFyWhwKDouYKFKii2cueasoGPxCDcfN8HUbBRG7LqUm39Kdb3AOU5ehq2ogxrogYRmII2dNMu4id9zhoN6hiDHPcD2QN6fbQNK6X29C9MVPffMbOVrrGfiSX3z/s8ByDaLPpSDbLFaMeLHBuNGVVPNkUeNcSJ1oWfy2EZ2Sy7b7vNjRlyH64t/9/B974gYnJI8XFDHkkXPtPfNlpInenht1WZ6BoZsG6NNG4qTkWxMwvVVD+nSMeimtpffiZyRA1qwucbvOnzMSSqM6yeH17ljbxTmmRVGZXXBFiNT7Wy0rcJ9VwNTu1HA9j7Q1dC9DcPVT/+FvPQa5b7744999BdBrkywXXW+kQS+lIlrSM/KWGdtrqAmZIoC8wElltPzR8pLLuAvRa7/4u/7a1fO4L+T1B0UMOTc+8G3zZaRRSp8fiZNTBQx6QRHzDoVCPUcvXlaDbVeO6YTP4PiRmCpWmVG36DpI2ECE9PUJ5wnxO+vBviOry4olplhNYEVL2AZ6S0zNk2uUgndvA3rtU+/4Lccgr5kv+sT7jiZZjgB9rncveTGTnpG1vizZLZWFSRAtTtxkARO7VEsTPC9D9Bqgx5+4+FG6jsgjgyKGnDv/ybfNl5DEzJVFcHEkVuxbuiZeVpdR448WqzLeN0hDEjGHXEij840sOENLjRUxBywua9fW5VmJjQGaiFmiiDljrEyLZWmiqGIETBI2ehfQ6xBc+9Q7/0W6jR4CX3zrzz8L0SNAjyDLU6PeSdpZWExszAELTH1zhiJGPwbR49uX/hu6jci5QBFDHiu+99vnZzXNjH1ZgWecVQHtl/9ISETBc1hUyLpQQRAALo+szoS9Kl5MeWtBwYAXMacOhGfKBHoBsyZoFqDGo7jrXBExBwWMeR7RMgPRl1X0BoDrn3rXv8AG7hHyRX/vOy+L6BVguQxZnqlxLMaVVMUN1FljmlVmMULVdZ++C9HrgN4Q0eu/9AUfodWFnCsUMeSx5Xu+fX5agWezoHlWgacheO40AXOaiFkTCocEiRUTdj6ZodWjO1cvWty2mKBf9AHBUYTEOgKHRcvYOuPHgkEUMaX8Ik5qHtTGzbiSbkP0FQVuQHALwK1Xv/Uz7pzxMZOHyBf98nc8DeizClyGLJcAvSSilwC9aAN3W5BuEzQK3BbRV7JguQMst37l9xzTkkYeKyhiyGb5j79jflaBp88iYrxlpA+cBQ4LhjXrje31sxYf03XFXnEBLWgCZi2YdxjfEs7THTNIx8jqMrTEBCtMTnvl2y7cuN/nRR5PvvD/eMezAn1aoHd+9Ut+8M5514eQ+4EihhBCCCGbhCP2EkIIIWSTUMQQQgghZJNQxBBCCCFkk1DEEEIIIWSTUMQQQgghZJNQxBBCCCFkk1DEEEIIIWSTUMQQQgghZJNQxBBCCCFkk1DEEEIIIWSTUMQQQgghZJNQxBBCCCFkk1DEEEIIIWSTUMQQQgghZJNQxBBCCCFkk1DEEEIIIWSTUMQQQgghZJNQxBBCCCFkk1DEEEIIIWSTUMQQQgghZJNQxBBCCCFkk1DEEEIIIWSTUMQQQgghZJNQxBBCCCFkk1DEEEIIIWSTUMQQQgghZJNQxBBCCCFkk1DEEEIIIWSTUMQQQgghZJNQxBBCCCFkk1DEEEIIIWSTUMQQQgghZJNQxBBCCCFkk1DEEEIIIWSTUMQQQgghZJNQxBBCCCFkk1DEEEIIIWSTUMQQQgghZJNQxBBCCCFkk1DEEEIIIWSTUMQQQgghZJNQxBBCCCFkk1DEEEIIIWSTUMQQQgghZJNQxBBCCCFkk1DEEEIIIWSTUMQQQgghZJNQxBBCCCFkk1DEEEIIIWSTUMQQQgghZJNQxBBCCCFkk1DEEEIIIWSTUMQQQgghZJNQxBBCCCFkk1DEEEIIIWSTUMQQQgghZJNQxBBCCCFkk1DEEEIIIWSTUMQQQgghZJNQxBBCCCFkk1DEEEIIIWSTUMQQQgghZJNQxBBCCCFkk1DEEEIIIWSTUMQQQgghZJNQxBBCCCFkk1DEEEIIIWSTUMQQQgghZJNQxBBCCCFkk1DEEEIIIWSTUMQQQgghZJNQxBBCCCFkk1DEEEIIIWSTUMQQQgghZJNQxBBCCCFkk1DEEEIIIWSTUMQQQgghZJNQxBBCCCFkk1DEEEIIIWSTUMQQQgghZJNQxBBCCCFkk1DEEEIIIWSTUMQQQgghZJNQxBBCCCFkk1DEEEIIIWSTUMQQQgghZJNQxBBCCCFkk1DEEEIIIWSTUMQQQgghZJNQxBBCCCFkk1DEEEIIIWSTUMQQQgghZJNQxBBCCCFkk1DEEEIIIWSTUMQQQgghZJNQxBBCCCFkk1DEEEIIIWSTUMQQQgghZJNQxBBCCCFkk1DEEEIIIWSTUMQQQgghZJNQxBBCCCFkk1DEEEIIIWSTUMQQQgghZJNQxBBCCCFkk1DEEEIIIWSTUMQQQgghZJNQxBBCCCFkk1DEEEIIIWSTUMQQQgghZJNQxBBCCCFkk1DEEEIIIWSTUMQQQgghZJNQxBBCCCFkk1DEEEIIIWSTUMQQQgghZJNQxBBCCCFkk1DEEEIIIWSTUMQQQgghZJNQxBBCCCFkk1DEEEIIIWSTUMQQQgghZJNQxBBCCCFkk1DEEEIIIWSTUMQQQgghZJNQxBBCCCFkk1DEEEIIIWSTUMQQQgghZJNQxBBCCCFkk1DEEEIIIWSTUMQQQgghZJNQxBBCCCFkk/z/XieyBRwPL5YAAAAASUVORK5CYII="/></defs><g clip-path="url(#vapor-graphics--1003--b)"><mask id="vapor-graphics--1006--c" width="56" height="54" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path fill="#000B1D" d="M46.086 0H9.914C4.439 0 0 4.439 0 9.914v34.172C0 49.561 4.439 54 9.914 54h36.172C51.561 54 56 49.561 56 44.086V9.914C56 4.439 51.561 0 46.086 0"/></mask><g mask="url(#vapor-graphics--1006--c)"><path fill="#000B1D" d="M-1 0h57v54H-1z"/><path fill="url(#vapor-graphics--1004--d)" d="M0 0h56.1v54H0z"/></g></g></svg>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 56 55"><clipPath id="vapor-graphics--1058--a"><path d="M0 .5h56v54H0z"/></clipPath><g clip-path="url(#vapor-graphics--1058--a)"><path fill="#001e36" d="M0 10.5C0 4.977 4.477.5 10 .5h36c5.523 0 10 4.477 10 10v34c0 5.523-4.477 10-10 10H10c-5.523 0-10-4.477-10-10z"/><path fill="#31a8ff" d="M12.56 38.244V14.907c0-.183.073-.256.256-.256 1.497-.073 4.382-.11 7.158-.11 7.377 0 9.897 4.091 9.897 8.036 0 5.916-4.565 8.436-10.153 8.436h-2.081v7.195c0 .219-.073.292-.329.292h-4.456c-.182 0-.292-.073-.292-.256m5.077-19.247v7.56c.62.037 1.022.037 2.045.037 2.849 0 5.186-.877 5.186-3.908 0-2.3-1.57-3.762-4.784-3.762-1.132 0-2.118.037-2.447.073m25.966 6.1c-1.169-.585-3.031-1.06-4.675-1.06-1.716 0-2.3.658-2.3 1.279s.474 1.059 2.63 1.899c4.418 1.607 5.806 3.323 5.806 5.916 0 3.433-2.703 5.734-7.524 5.734-2.264 0-4.2-.402-5.332-.986-.182-.11-.219-.219-.219-.438v-3.945c0-.219.11-.292.256-.182 1.68 1.022 3.725 1.46 5.369 1.46 1.716 0 2.483-.474 2.483-1.278 0-.693-.584-1.205-2.74-2.008-4.126-1.534-5.514-3.25-5.514-5.88 0-2.849 2.301-5.588 7.158-5.588 2.155 0 3.835.256 4.748.73.22.11.22.256.22.475v3.652c0 .183-.11.33-.366.22"/></g></svg>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 56 55"><clipPath id="vapor-graphics--1049--a"><path d="M0 .5h56v54H0z"/></clipPath><clipPath id="vapor-graphics--1050--b"><path d="M0 .5h56v54H0z"/></clipPath><g clip-path="url(#vapor-graphics--1049--a)"><g clip-path="url(#vapor-graphics--1050--b)"><path fill="#001e36" d="M0 10.5C0 4.977 4.477.5 10 .5h36c5.523 0 10 4.477 10 10v34c0 5.523-4.477 10-10 10H10c-5.523 0-10-4.477-10-10z"/><path fill="#31a8ff" d="M29.608 38.5h-14.39c-.292 0-.365-.11-.365-.402V14.944c0-.22.073-.33.329-.33h4.492c.183 0 .256.074.256.256v19.065h10.445c.255 0 .329.146.292.292l-.694 3.98c-.036.256-.183.293-.365.293m4.005-18.115h3.981c.22 0 .329.073.438.292.183.512.329 1.279.366 2.046 1.205-1.425 3.25-2.703 5.806-2.703.256 0 .33.073.33.292v4.456c0 .219-.074.256-.366.256-2.63-.073-4.711.693-5.515 1.607v11.577c0 .256-.11.292-.329.292h-4.419c-.255 0-.365-.073-.365-.329V25.608c0-1.607-.036-3.689-.182-5.004 0-.182.073-.219.255-.219"/></g></g></svg>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 56 55"><clipPath id="vapor-graphics--1061--a"><path d="M0 .5h56v54H0z"/></clipPath><clipPath id="vapor-graphics--1062--b"><path d="M0 .5h56v54H0z"/></clipPath><g clip-path="url(#vapor-graphics--1061--a)"><g clip-path="url(#vapor-graphics--1062--b)"><path fill="#00005b" d="M0 10.5C0 4.977 4.477.5 10 .5h36c5.523 0 10 4.477 10 10v34c0 5.523-4.477 10-10 10H10c-5.523 0-10-4.477-10-10z"/><path fill="#99f" d="M13.837 38.244V14.907c0-.183.073-.256.255-.256 1.498-.073 4.383-.11 7.158-.11 7.378 0 9.898 4.091 9.898 8.036 0 5.916-4.565 8.436-10.153 8.436h-2.082v7.195c0 .219-.073.292-.329.292H14.13c-.183 0-.292-.073-.292-.256m5.076-19.247v7.56c.62.037 1.023.037 2.045.037 2.849 0 5.186-.877 5.186-3.908 0-2.3-1.57-3.762-4.784-3.762-1.132 0-2.118.037-2.447.073m15.717 1.388h3.98c.22 0 .33.073.439.292.182.512.329 1.279.365 2.046 1.205-1.425 3.25-2.703 5.807-2.703.256 0 .329.073.329.292v4.456c0 .219-.073.256-.365.256-2.63-.074-4.712.693-5.515 1.606v11.578c0 .256-.11.292-.329.292h-4.42c-.255 0-.364-.073-.364-.329V25.608c0-1.607-.037-3.689-.183-5.004 0-.182.073-.219.256-.219"/></g></g></svg>

  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-add">
  <path d="M5.55 9.74999L5.55 6.44999L2.25 6.44999C2.00157 6.44999 1.8 6.24842 1.8 5.99999C1.8 5.75155 2.00157 5.54999 2.25 5.54999L5.55 5.54999L5.55 2.24999C5.55 2.00155 5.75157 1.79999 6 1.79999C6.24844 1.79999 6.45 2.00155 6.45 2.24999L6.45 5.54999L9.75 5.54999C9.99844 5.54999 10.2 5.75155 10.2 5.99999C10.2 6.24842 9.99844 6.44999 9.75 6.44999L6.45 6.44999L6.45 9.74999C6.45 9.99842 6.24844 10.2 6 10.2C5.75157 10.2 5.55 9.99842 5.55 9.74999Z" fill="#292929" stroke="#292929" stroke-width="0.6"/>
  </svg>

  </div>
  <div class="main"></div>

        `)}}const _e=Re.tag;customElements.get(_e)||customElements.define(_e,Re);class Ie extends HTMLElement{static{this.tag="mozg-macosx-dock"}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.css(),this.html(),this.js()}disconnectedCallback(){const e=this.shadowRoot;if(e)for(;e.firstChild;)e.removeChild(e.firstChild)}static get observedAttributes(){return["mode"]}attributeChangedCallback(e,t,o){}adoptedCallback(){}css(){const e=document.createElement("style");e.textContent=`
:host {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
}

.dock {
  display: flex;
  flex-wrap: wrap; /* Permite que os elementos quebrem para a linha de baixo */
  justify-content: center;
  gap: 10px;
  background: rgba(200, 200, 200, 0.5);
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 8px;
  height: auto;
  transition: all ease-in-out 0.2s;
}

a {
  text-decoration: none;
  display: flex;
  align-items: center;
}

a img {
  width: 50px;
  transition: all ease-in 0.1s;
}

a img:hover {
  transform: translateY(-20px) scale(1.75);
  z-index: 10;
}

a img:hover + img {
  transform: translateY(-10px) scale(1.35);
  z-index: -10;
}

mozg-fullscreen,
mozg-a2hs,
mozg-web-share,
mozg-google-sign-in {
  display: flex;
  align-items: center;
}
    `,this.shadowRoot?.appendChild(e)}js(){}html(){const t=document.createRange().createContextualFragment(`
  <div class="dock inner">
      <mozg-fullscreen></mozg-fullscreen>
      <mozg-a2hs></mozg-a2hs>
      <mozg-web-share></mozg-web-share>
      <a
        href="https://wa.me/5511977072339"
        target="_blank"
      >
        <img
          src="https://icons.iconarchive.com/icons/alecive/flatwoken/256/Apps-Whatsapp-C-icon.png"
        />
      </a>
      <a href="https://github.com/mozgbrasil" target="_blank">
        <img
          src="https://icons.iconarchive.com/icons/artcore-illustrations/artcore-4/256/github-icon.png"
        />
      </a>
      <a href="https://www.linkedin.com/in/mozgbrasil/" target="_blank">
        <img
          src="https://icons.iconarchive.com/icons/designbolts/cute-social-media/256/Linkedin-icon.png"
        />
      </a>
      <a href="https://web.facebook.com/mozgbrasil/" target="_blank">
        <img
          src="https://icons.iconarchive.com/icons/land-of-web/social-coffee/256/facebook-icon.png"
        />
      </a>
      <a href="https://www.npmjs.com/~mozg" target="_blank">
        <img
          src="https://icons.iconarchive.com/icons/iconoir-team/iconoir/256/npm-icon.png"
        />
      </a>
      <a href="https://www.instagram.com/mozgbrasil" target="_blank">
        <img
          src="https://icons.iconarchive.com/icons/dakirby309/simply-styled/256/Instagram-icon.png"
        />
      </a>
      <a href="https://gitlab.com/mozgbrasil" target="_blank">
        <img
          src="https://icons.iconarchive.com/icons/ionic/ionicons/256/logo-gitlab-icon.png"
        />
      </a>
      <a href="https://www.youtube.com/@mozgbrasil" target="_blank">
        <img
          src="https://icons.iconarchive.com/icons/bokehlicia/alike/256/youtube-icon.png"
        />
      </a>
      <a href="https://x.com/mozgbrasil" target="_blank">
        <img
          src="https://icons.iconarchive.com/icons/double-j-design/social-balloons/128/social-balloon-twitter-icon.png"
        />
      </a>
      <a href="https://mozgbrasil.wordpress.com/" target="_blank">
        <img
          src="https://icons.iconarchive.com/icons/papirus-team/papirus-apps/256/wordpress-icon.png"
        />
      </a>
      <a href="https://mozg.com.br/sitemap.xml" target="_blank">
        <img
          src="https://icons.iconarchive.com/icons/ahmadhania/spherical/128/sitemap-icon.png"
        />
      </a>
      <mozg-google-sign-in></mozg-google-sign-in>
    </div>
   `);this.shadowRoot?.appendChild(t)}}const $e=Ie.tag;customElements.get($e)||customElements.define($e,Ie);class Fe extends HTMLElement{constructor(){super(),this._cleanupFns=[],this.attachShadow({mode:"open"})}static{this.tag="mozg-shadertoy-threejs"}connectedCallback(){this.css(),this.html(),this.js()}disconnectedCallback(){if(this._cleanupFns.length){const e=this._cleanupFns.splice(0,this._cleanupFns.length);for(const t of e)try{t()}catch{}}if(this.shadowRoot)for(;this.shadowRoot.firstChild;)this.shadowRoot.removeChild(this.shadowRoot.firstChild)}static get observedAttributes(){return["mode"]}attributeChangedCallback(e,t,o){}adoptedCallback(){}css(){const e=document.createElement("style");e.textContent=`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
  }
    `,this.shadowRoot&&this.shadowRoot.appendChild(e)}js(){const e=document.createElement("script");e.src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r70/three.min.js",e.onload=()=>{(o=>{const{THREE:c}=window;let i,h,a;i=new c.Scene;const n=75,s=window.innerWidth/window.innerHeight;h=new c.PerspectiveCamera(n,s,.1,1e3),h.position.z=100,h.lookAt(i.position),a=new c.WebGLRenderer,a.setClearColor(12895428),a.setSize(window.innerWidth,window.innerHeight);const p=o??document.body;p.appendChild(a.domElement),this._cleanupFns.push(()=>{try{a&&a.domElement&&a.domElement.parentElement===p&&p.removeChild(a.domElement)}catch{}});const l=new c.Clock,m={time:{type:"f",value:.1},resolution:{type:"v2",value:new c.Vector2},mouse:{type:"v4",value:new c.Vector2}},r=b=>{const F=a.domElement.getBoundingClientRect();m.mouse.value.x=(b.clientX-F.left)/window.innerWidth*2-1,m.mouse.value.y=(b.clientY-F.top)/window.innerHeight*-2+1};a.domElement.addEventListener("mousedown",r),this._cleanupFns.push(()=>{try{a.domElement.removeEventListener("mousedown",r)}catch{}});const d=b=>{const F=a.domElement.getBoundingClientRect();m.mouse.value.z=(b.clientX-F.left)/window.innerWidth*2-1,m.mouse.value.w=(b.clientY-F.top)/window.innerHeight*-2+1};a.domElement.addEventListener("mouseup",d),this._cleanupFns.push(()=>{try{a.domElement.removeEventListener("mouseup",d)}catch{}});const u=()=>{h.aspect=window.innerWidth/window.innerHeight,h.updateProjectionMatrix(),a.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",u),this._cleanupFns.push(()=>{try{window.removeEventListener("resize",u)}catch{}}),m.resolution.value.x=window.innerWidth,m.resolution.value.y=window.innerHeight;const f=new c.ShaderMaterial({uniforms:m,vertexShader:o?.getElementById("vertex-shader")?.textContent||"",fragmentShader:o?.getElementById("fragment-shader")?.textContent||""}),C=new c.Mesh(new c.PlaneBufferGeometry(window.innerWidth,window.innerHeight,40),f);i.add(C);let g=null;const S=b=>{m.time.value+=l.getDelta(),g=requestAnimationFrame(S),a.render(i,h)};return S(),this._cleanupFns.push(()=>{try{g!=null&&cancelAnimationFrame(g)}catch{}}),this._cleanupFns.push(()=>{try{a&&typeof a.dispose=="function"&&a.dispose()}catch{}}),{}})(this?.shadowRoot??null)},e.onerror=t=>{},this.shadowRoot&&this.shadowRoot.appendChild(e)}html(){const t=document.createRange().createContextualFragment(`
<!-- THIS is OPENGL Shading language scripts -->
<script id="vertex-shader" type="no-js">
		void main()	{
			gl_Position = vec4( position, 1.0 );
		}
<\/script>
<!-- orinal from https://www.shadertoy.com/view/Ms2SD1 -->
<script id="fragment-shader" type="no-js">
#ifdef GL_ES
precision mediump float;
#endif

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;
varying vec2 surfacePosition;

const int NUM_STEPS = 8;
const float PI      = 3.1415;
const float EPSILON = 1e-3;
float EPSILON_NRM   = 0.1 / resolution.x;

// sea
const int ITER_GEOMETRY = 3;
const int ITER_FRAGMENT = 5;
const float SEA_HEIGHT = 0.6;
const float SEA_CHOPPY = 2.0;
const float SEA_SPEED = 0.8;
const float SEA_FREQ = 0.16;
const vec3 SEA_BASE = vec3(0.1,0.19,0.22);
const vec3 SEA_WATER_COLOR = vec3(0.8,0.9,0.6);
const float SKY_INTENSITY = 1.0;

#define SEA_TIME time * SEA_SPEED

// math
mat4 fromEuler(vec3 ang) {
  vec2 a1 = vec2(sin(ang.x),cos(ang.x));
    vec2 a2 = vec2(sin(ang.y),cos(ang.y));
    vec2 a3 = vec2(sin(ang.z),cos(ang.z));
    mat4 m;
    m[0] = vec4(a1.y*a3.y+a1.x*a2.x*a3.x,a1.y*a2.x*a3.x+a3.y*a1.x,-a2.y*a3.x,0.0);
	m[1] = vec4(-a2.y*a1.x,a1.y*a2.y,a2.x,0.0);
	m[2] = vec4(a3.y*a1.x*a2.x+a1.y*a3.x,a1.x*a3.x-a1.y*a3.y*a2.x,a2.y*a3.y,0.0);
	m[3] = vec4(0.0,0.0,0.0,1.0);
	return m;
}
vec3 rotate(vec3 v, mat4 m) {
    return vec3(dot(v,m[0].xyz),dot(v,m[1].xyz),dot(v,m[2].xyz));
}
float hash( vec2 p ) {
    float h = dot(p,vec2(127.1,311.7));
    return fract(sin(h)*43758.5453123);
}
float noise( in vec2 p ) {
    vec2 i = floor( p );
    vec2 f = fract( p );
    vec2 u = f*f*(3.0-2.0*f);
    return -1.0+2.0*mix( mix( hash( i + vec2(0.0,0.0) ),
                     hash( i + vec2(1.0,0.0) ), u.x),
                mix( hash( i + vec2(0.0,1.0) ),
                     hash( i + vec2(1.0,1.0) ), u.x), u.y);
}


// lighting
float diffuse(vec3 n,vec3 l,float p) { return pow(dot(n,l) * 0.4 + 0.6,p); }
float specular(vec3 n,vec3 l,vec3 e,float s) {
    float nrm = (s + 8.0) / (3.1415 * 8.0);
    return pow(max(dot(reflect(e,n),l),0.0),s) * nrm;
}

// sky
vec3 sky_color(vec3 e) {
    e.y = max(e.y,0.0);
    vec3 ret;
    ret.x = pow(1.0-e.y,2.0);
    ret.y = 1.0-e.y;
    ret.z = 0.6+(1.0-e.y)*0.4;
    return ret * SKY_INTENSITY;
}

// sea
float sea_octave(vec2 uv, float choppy) {
    uv += noise(uv);
    vec2 wv = 1.0-abs(sin(uv));
    vec2 swv = abs(cos(uv));
    wv = mix(wv,swv,wv);
    return pow(1.0-pow(wv.x * wv.y,0.65),choppy);
}

float map(vec3 p) {
    float freq = SEA_FREQ;
    float amp = SEA_HEIGHT;
    float choppy = SEA_CHOPPY;
    vec2 uv = p.xz; uv.x *= 0.75;
    mat2 m = mat2(1.6,1.2,-1.2,1.6);

    float d, h = 0.0;
    for(int i = 0; i < ITER_GEOMETRY; i++) {
    	d = sea_octave((uv+SEA_TIME)*freq,choppy);
    	d += sea_octave((uv-SEA_TIME)*freq,choppy);
        h += d * amp;
    	uv *= m; freq *= 1.9; amp *= 0.22;
        choppy = mix(choppy,1.0,0.2);
    }
    return p.y - h;
}
float map_detailed(vec3 p) {
    float freq = SEA_FREQ;
    float amp = SEA_HEIGHT;
    float choppy = SEA_CHOPPY;
    vec2 uv = p.xz; uv.x *= 0.75;
    mat2 m = mat2(1.6,1.2,-1.2,1.6);

    float d, h = 0.0;
    for(int i = 0; i < ITER_FRAGMENT; i++) {
    	d = sea_octave((uv+SEA_TIME)*freq,choppy);
    	d += sea_octave((uv-SEA_TIME)*freq,choppy);
        h += d * amp;
    	uv *= m; freq *= 1.9; amp *= 0.22;
        choppy = mix(choppy,1.0,0.2);
    }
    return p.y - h;
}

vec3 sea_color(in vec3 p, in vec3 n, in vec3 eye, in vec3 dist) {
    float fresnel_o = 1.0 - max(dot(n,-eye),0.0);
    float fresnel = pow(fresnel_o,3.0) * 0.65;

    // reflection
    vec3 refl = sky_color(reflect(eye,n));

    // color
    vec3 ret = SEA_BASE;
    ret = mix(ret,refl,fresnel);

    // wave peaks
    float atten = max(1.0 - dot(dist,dist) * 0.001, 0.0);
    ret += SEA_WATER_COLOR * (p.y - SEA_HEIGHT) * 0.18 * atten;

    return ret;
}

// tracing
vec3 getNormal(vec3 p, float eps) {
    vec3 n;
    n.y = map_detailed(p);
    n.x = map_detailed(vec3(p.x+eps,p.y,p.z)) - n.y;
    n.z = map_detailed(vec3(p.x,p.y,p.z+eps)) - n.y;
    n.y = eps;
    return normalize(n);
}
float hftracing(vec3 ori, vec3 dir, out vec3 p) {
    float tm = 0.0;
    float tx = 1000.0;
    float hx = map(ori + dir * tx);
    if(hx > 0.0) return tx;
    float hm = map(ori + dir * tm);
    float tmid = 0.0;
    for(int i = 0; i < NUM_STEPS; i++) {
        tmid = mix(tm,tx, hm/(hm-hx));
        p = ori + dir * tmid;
    	float hmid = map(p);
	if(hmid < 0.0) {
            tx = tmid;
            hx = hmid;
        } else {
            tm = tmid;
            hm = hmid;
        }
    }
    return tmid;
}

// main
void main(void)
{
  vec2 uv = gl_FragCoord.xy / resolution.xy;
  uv = 1.0 - uv * 2.0;
  uv.x *= resolution.x / resolution.y;
  //uv = (surfacePosition+vec2(0., .5))*17. + 5E-3*(pow(length(surfacePosition+vec2(0. ,0.5)), -2.));
  uv.y *= -1.;
  //uv.y += -2.;

  // ray
  vec3 ang = vec3(0.0,0.003, pow(time, 0.6));
  ang = vec3(0.0,clamp(2.0-mouse.y*0.01,-0.3,PI),mouse.x*0.01);

  vec3 ori = vec3(0.0,3.5,time*.05);
  vec3 dir = normalize(vec3(uv.xy,-2.0));
  dir.z -= length(uv) * 0.15;
  //dir = rotate(normalize(dir),ang);

  // tracing
  vec3 p;
  float dens = hftracing(ori,dir,p);
  vec3 dist = p - ori;
  vec3 n = getNormal(p, dot(dist,dist)*EPSILON_NRM);

  // color
  vec3 color = sea_color(p,n,dir,dist);
  vec3 light = normalize(vec3(0.0,1.0,0.8));
  color += vec3(diffuse(n,light,80.0) * SEA_WATER_COLOR) * 0.12;
  color += vec3(specular(n,light,dir,60.0));

  // post
  color = mix(sky_color(dir),color,pow(smoothstep(0.0,-0.05,dir.y),0.3));
  color = pow(color,vec3(0.75));
  gl_FragColor = vec4(color,1.0);
}
<\/script>

  `);this.shadowRoot&&this.shadowRoot.appendChild(t)}}const et=Fe.tag;customElements.get(et)||customElements.define(et,Fe);class Le extends HTMLElement{constructor(){super(),this._cleanupFns=[],this.attachShadow({mode:"open"})}static{this.tag="mozg-threejs-sphere"}connectedCallback(){this.css(),this.html(),this.js()}disconnectedCallback(){if(this._cleanupFns.length){const e=this._cleanupFns.splice(0,this._cleanupFns.length);for(const t of e)try{t()}catch{}}if(this.shadowRoot)for(;this.shadowRoot.firstChild;)this.shadowRoot.removeChild(this.shadowRoot.firstChild)}static get observedAttributes(){return["mode"]}attributeChangedCallback(e,t,o){}adoptedCallback(){}css(){const e=document.createElement("style");e.textContent=`
      :host {
        margin: 0;
        overflow: hidden;
        user-select: none;
      }
      :host {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
      }
      :host {
        margin: 0;
        overflow: hidden;
        user-select: none;
      }
      canvas {
        display: block;
      }
      .title {
        position: absolute;
        font-family: Arial;
        color: #fff;
        font-size: .8rem;
        mix-blend-mode:normal;
      }
    `,this.shadowRoot&&this.shadowRoot.appendChild(e)}js(){const e=document.createElement("script");e.type="module",e.textContent=`

      import * as THREE from 'https://cdn.skypack.dev/three@0.136.0/build/three.module.js';
      import { OrbitControls } from 'https://cdn.skypack.dev/three@0.136.0/examples/jsm/controls/OrbitControls.js';
      import { UnrealBloomPass } from 'https://cdn.skypack.dev/three@0.136.0/examples/jsm/postprocessing/UnrealBloomPass.js';
      import { EffectComposer } from 'https://cdn.skypack.dev/three@0.136.0/examples/jsm/postprocessing/EffectComposer.js';
      import { RenderPass } from 'https://cdn.skypack.dev/three@0.136.0/examples/jsm/postprocessing/RenderPass.js';
      import { ShaderPass } from 'https://cdn.skypack.dev/three@0.136.0/examples/jsm/postprocessing/ShaderPass.js';
      import { DotScreenPass } from 'https://cdn.skypack.dev/three@0.136.0/examples/jsm/postprocessing/DotScreenPass.js';
      import { GlitchPass } from 'https://cdn.skypack.dev/three@0.136.0/examples/jsm/postprocessing/GlitchPass.js';
      import { GUI } from 'https://cdn.skypack.dev/dat.gui';
      import { gsap } from 'https://cdn.skypack.dev/gsap@3.7.1';

      const modules = {
        THREE,
        OrbitControls,
        UnrealBloomPass,
        EffectComposer,
        RenderPass,
        ShaderPass,
        DotScreenPass,
        GlitchPass,
        GUI,
        gsap,
      };

      // console.log({ name: "import ", modules });

      Object.keys(modules).forEach(key => {
        window[key] = modules[key];
      });

      // Chamar a função de callback após o carregamento dos módulos
      if (typeof window.onScriptLoaded === 'function') {
        window.onScriptLoaded();
      }

      // Disparar um evento personalizado após o carregamento dos módulos
      const event = new CustomEvent('modulesLoaded', {
        detail: { THREE, gsap }
      });
      document.dispatchEvent(event);

    `,this.shadowRoot&&this.shadowRoot.appendChild(e),window.onScriptLoaded=()=>{let t=null;const o=a=>{const{THREE:n,gsap:s}=a.detail},c=(function(a){const n=window.THREE,s=window.OrbitControls,p=window.UnrealBloomPass,l=window.EffectComposer,m=window.RenderPass,r=window.DotScreenPass,d=window.GlitchPass;let u,f,C,g,S,b,I,F,v;const x={transparency:.5,bloomStrength:.1,bloomRadius:.4,bloomThreshold:0,dotScale:.1};function y(){u=new n.Scene,u.background=null,f=new n.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.1,1e3),f.position.set(0,0,3),C=new n.WebGLRenderer({alpha:!0}),C.setSize(window.innerWidth,window.innerHeight),C.setPixelRatio(window.devicePixelRatio),(a||document.body).appendChild(C.domElement);const Q=new n.SphereGeometry(1,16,16),N=new n.MeshPhongMaterial({color:16777215,wireframe:!0,transparent:!0,opacity:x.transparency});I=new n.Mesh(Q,N),u.add(I);const H=new n.PointLight(16777215,1);H.position.set(5,5,5),u.add(H),b=new s(f,C.domElement),b.enableDamping=!1,g=new l(C),g.addPass(new m(u,f)),F=new d,F.enabled=!1,g.addPass(F),S=new p(new n.Vector2(window.innerWidth,window.innerHeight),x.bloomStrength,x.bloomRadius,x.bloomThreshold),g.addPass(S),v=new r(new n.Vector2(0,0),x.dotScale),v.enabled=!0,g.addPass(v),window.addEventListener("resize",R)}function R(){f.aspect=window.innerWidth/window.innerHeight,f.updateProjectionMatrix(),C.setSize(window.innerWidth,window.innerHeight),g.setSize(window.innerWidth,window.innerHeight)}function E(){t=requestAnimationFrame(E),I.rotation.x+=.001,I.rotation.y+=.005,I.rotation.z+=.001,b.update(),g.render()}function j(){const Q=document.createElement("h3");Q.classList.add("title","_1"),Q.textContent="three.js + Sphere";const N=document.createElement("h3");N.classList.add("title","_2");const H=document.createElement("h3");H.classList.add("title","_3"),H.textContent="Fullscreen on",H.addEventListener("click",k),(a||document.body).appendChild(Q),(a||document.body).appendChild(N),(a||document.body).appendChild(H);const Y=(a||document.body).querySelector(".title._1");Y&&(Y.style.top="20px",Y.style.left="30px");const D=(a||document.body).querySelector(".title._2");D&&(D.style.bottom="20px",D.style.left="30px");const O=(a||document.body).querySelector(".title._3");O&&(O.style.bottom="20px",O.style.right="30px",O.style.cursor="pointer")}function k(){if(document.fullscreenElement){if(document.exitFullscreen){document.exitFullscreen();const Q=document.querySelector(".title._3");Q&&(Q.textContent="Fullscreen on")}}else{document.documentElement.requestFullscreen();const Q=document.querySelector(".title._3");Q&&(Q.textContent="Fullscreen off")}}return{init:y,animate:E,createTitles:j,onWindowResize:R,renderer:C,controls:b}})(this.shadowRoot??null),{init:i,animate:h}=c;i(),h(),document.addEventListener("modulesLoaded",o),this._cleanupFns.push(()=>{document.removeEventListener("modulesLoaded",o)}),this._cleanupFns.push(()=>{try{c&&typeof c.onWindowResize=="function"&&window.removeEventListener("resize",c.onWindowResize)}catch{}try{const a=c.controls;a&&typeof a.dispose=="function"&&a.dispose()}catch{}try{const a=c.renderer;a&&a.domElement&&a.domElement.parentNode&&a.domElement.parentNode.removeChild(a.domElement),a&&typeof a.dispose=="function"&&a.dispose()}catch{}}),this._cleanupFns.push(()=>{t!==null&&(cancelAnimationFrame(t),t=null)}),this._cleanupFns.push(()=>{try{window.onScriptLoaded=void 0}catch{}})}}html(){}}const tt=Le.tag;customElements.get(tt)||customElements.define(tt,Le);const at=[{label:"SimpleCssWaves",tag:re?.tag||"mozg-simple-css-waves"},{label:"Embers",tag:me?.tag||"mozg-embers"},{label:"CardTilted",tag:se?.tag||"mozg-card-tilted"},{label:"SpinnerPopEffect",tag:le?.tag||"mozg-spinner-pop-effect"},{label:"SnowyProceduralLandscape",tag:"mozg-snowy-procedural-landscape"},{label:"PhotorealisticPureCssMobilePhone",tag:ye?.tag||"mozg-photorealistic-pure-css-mobile-phone"},{label:"InteractiveVortex",tag:ke?.tag||"mozg-interactive-vortex"},{label:"InteractiveGridEffect",tag:ve?.tag||"mozg-interactive-grid-effect"},{label:"InnerGlowCardAnimation",tag:he?.tag||"mozg-inner-glow-card-animation"},{label:"FilmGrain",tag:pe?.tag||"mozg-film-grain"},{label:"AttractedElasticBalls",tag:Ce?.tag||"mozg-attracted-elastic-balls"},{label:"BallsGravity",tag:Ee?.tag||"mozg-balls-gravity"},{label:"ConditionalCssGridTemplateAreas",tag:ue?.tag||"mozg-conditional-css-grid-template-areas"},{label:"ConfettiParty",tag:fe?.tag||"mozg-confetti-party"},{label:"CustomSnackbar",tag:ce?.tag||"mozg-custom-snackbar"},{label:"DockGal",tag:Re?.tag||"mozg-dock-gal"},{label:"DomStructureDiagram",tag:ge?.tag||"mozg-dom-structure-diagram"},{label:"FilterImageGradientBackgrounds",tag:be?.tag||"mozg-filter-image-gradient-backgrounds"},{label:"GlslShaderEyeball",tag:Me?.tag||"mozg-glsl-shader-eyeball"},{label:"MacosxDock",tag:Ie?.tag||"mozg-macosx-dock"},{label:"ShadertoyThreejs",tag:Fe?.tag||"mozg-shadertoy-threejs"},{label:"SpherePacking2",tag:we?.tag||"mozg-sphere-packing-2"},{label:"Squircle",tag:de?.tag||"mozg-squircle"},{label:"ThreejsSphere",tag:Le?.tag||"mozg-threejs-sphere"},{label:"ThreejsWater",tag:Se?.tag||"mozg-threejs-water"},{label:"WebGlMouseControlledSnow",tag:"mozg-webgl-mouse-controlled-snow"},{label:"InteractiveHoverSpotlightSmoothFollowEffect",tag:xe?.tag||"mozg-interactive-hover-spotlight-smooth-follow-effect"}],q=[...at].sort((M,e)=>M.label.localeCompare(e.label)),pt={title:"Vanilla/Codepen Gallery",tags:["autodocs"],argTypes:{component:{control:{type:"select",options:q.map(M=>M.label)},description:"Selecione o componente CodePen para visualizar"}},render:M=>{const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.gap="1rem";const t=document.createElement("div");t.style.position="sticky",t.style.top="0",t.style.zIndex="10",t.style.background="#fff",t.style.padding="0.25rem 0";const o=document.createElement("select");o.style.padding="0.5rem",o.style.fontSize="14px",q.forEach(a=>{const n=document.createElement("option");n.value=a.tag,n.textContent=a.label,o.appendChild(n)});const c=document.createElement("div");c.style.minHeight="300px",c.style.border="1px solid #e5e7eb",c.style.borderRadius="8px",c.style.overflow="hidden",c.style.position="relative",c.style.transform="translateZ(0)",c.style.isolation="isolate";const i=a=>{c.innerHTML="";const n=document.createElement(a);(a===se?.tag||a==="mozg-card-tilted")&&(n.setAttribute("title","Mozg Card"),n.innerHTML="<p>Exemplo de conteúdo</p>"),c.appendChild(n)},h=q.find(a=>a.label===M.component)?.tag||q[0].tag;return o.value=h,i(h),o.addEventListener("change",()=>i(o.value)),t.appendChild(o),e.appendChild(t),e.appendChild(c),e}},oe={args:{component:q[0]?.label}};oe.parameters={...oe.parameters,docs:{...oe.parameters?.docs,source:{originalSource:`{
  args: {
    component: SORTED[0]?.label
  }
}`,...oe.parameters?.docs?.source}}};const mt=["Gallery"];export{oe as Gallery,mt as __namedExportsOrder,pt as default};
