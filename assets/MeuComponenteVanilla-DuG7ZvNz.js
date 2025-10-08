class o extends HTMLElement{constructor(){super(),this.nome="Vanilla!",this.attachShadow({mode:"open"})}static{this.tag="mozg-meu-componente-vanilla"}connectedCallback(){this.render()}static get observedAttributes(){return["nome"]}attributeChangedCallback(s,n,t){s==="nome"&&n!==t&&(this.nome=t,this.render())}disconnectedCallback(){}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`
        <style>
          :host {
            display: block;
            padding: 16px;
            border: 1px solid #ccc;
            border-radius: 8px;
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
          }
          h1 {
            color: #333;
          }
        </style>
        <div>
          <p>Aqui é ${this.nome}</p>
          <slot></slot>
        </div>
      `)}}const a=()=>{const e=o.tag;customElements.get(e)||(customElements.define(e,o),console.log(`✅ Componente Vanilla registrado: ${e}`))};a();export{o as M};
