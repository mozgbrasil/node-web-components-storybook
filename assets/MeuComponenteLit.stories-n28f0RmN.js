import{f as x,u as f,i as v,e as y,d as b}from"./iframe-BK6HzFne.js";import"./index-nuYtCEEu.js";const w=e=>(t,o)=>{o!==void 0?o.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};const k={attribute:!0,type:String,converter:f,reflect:!1,hasChanged:x},C=(e=k,t,o)=>{const{kind:n,metadata:a}=o;let r=globalThis.litPropertyMetadata.get(a);if(r===void 0&&globalThis.litPropertyMetadata.set(a,r=new Map),n==="setter"&&((e=Object.create(e)).wrapped=!0),r.set(o.name,e),n==="accessor"){const{name:i}=o;return{set(d){const u=t.get.call(this);t.set.call(this,d),this.requestUpdate(i,u,e,!0,d)},init(d){return d!==void 0&&this.C(i,void 0,e,d),d}}}if(n==="setter"){const{name:i}=o;return function(d){const u=this[i];t.call(this,d),this.requestUpdate(i,u,e,!0,d)}}throw Error("Unsupported decorator location: "+n)};function h(e){return(t,o)=>typeof o=="object"?C(e,t,o):((n,a,r)=>{const i=a.hasOwnProperty(r);return a.constructor.createProperty(r,n),i?Object.getOwnPropertyDescriptor(a,r):void 0})(e,t,o)}function z(e){return h({...e,state:!0,attribute:!1})}var $=Object.defineProperty,E=Object.getOwnPropertyDescriptor,g=(e,t,o,n)=>{for(var a=n>1?void 0:n?E(t,o):t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(a=(n?i(t,o,a):i(a))||a);return n&&a&&$(t,o,a),a};let s=class extends y{constructor(){super(...arguments),this.nome="Lit!",this.tema="light",this.contador=0}incrementarContador(){this.contador++,this.dispatchEvent(new CustomEvent("contador-change",{detail:{contador:this.contador},bubbles:!0,composed:!0}))}resetarContador(){this.contador=0,this.dispatchEvent(new CustomEvent("contador-change",{detail:{contador:this.contador},bubbles:!0,composed:!0}))}alternarTema(){this.tema=this.tema==="light"?"dark":"light"}render(){return b`
      <div class="contador-container">
        <h1>${this.nome}</h1>
        <p>Aqui é ${this.nome}</p>

        <div class="contador-texto">Contador: ${this.contador}</div>

        <div class="botoes-container">
          <button
            class="btn btn-incrementar"
            @click="${this.incrementarContador}"
            aria-label="Incrementar contador"
          >
            + Incrementar
          </button>

          <button
            class="btn btn-resetar"
            @click="${this.resetarContador}"
            aria-label="Resetar contador"
          >
            🔄 Resetar
          </button>

          <button
            class="btn btn-tema"
            @click="${this.alternarTema}"
            aria-label="Alternar tema"
          >
            ${this.tema==="light"?"🌙":"☀️"} Tema
          </button>
        </div>
      </div>

      <slot></slot>
    `}};s.styles=v`
    :host {
      display: block;
      padding: 24px;
      border: 2px solid var(--border-color, #e1e5e9);
      border-radius: 16px;
      font-family:
        -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: var(
        --bg-color,
        linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)
      );
      box-shadow: var(--shadow, 0 8px 25px rgba(0, 0, 0, 0.1));
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      max-width: 400px;
      margin: 0 auto;
      color: var(--text-color, #2d3748);
    }

    :host([tema='dark']) {
      --border-color: #4a5568;
      --bg-color: linear-gradient(135deg, #2d3748 0%, #1a202c 100%);
      --shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
      --text-color: #f7fafc;
    }

    :host:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-hover, 0 12px 35px rgba(0, 0, 0, 0.15));
    }

    :host([tema='dark']:hover) {
      --shadow-hover: 0 12px 35px rgba(0, 0, 0, 0.4);
    }

    h1 {
      color: var(--heading-color, #1a202c);
      margin: 0 0 20px 0;
      font-size: 2em;
      font-weight: 700;
      text-align: center;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    :host([tema='dark']) h1 {
      --heading-color: #f7fafc;
      background: linear-gradient(135deg, #a0aec0 0%, #e2e8f0 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    p {
      margin: 0 0 24px 0;
      font-size: 1.2em;
      text-align: center;
      line-height: 1.6;
    }

    .contador-container {
      margin: 24px 0;
      padding: 20px;
      background: var(
        --contador-bg,
        linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)
      );
      border-radius: 12px;
      border: 1px solid var(--contador-border, #e2e8f0);
    }

    :host([tema='dark']) .contador-container {
      --contador-bg: linear-gradient(135deg, #4a5568 0%, #2d3748 100%);
      --contador-border: #718096;
    }

    .contador-texto {
      margin: 0 0 16px 0;
      font-size: 1.1em;
      font-weight: 600;
      text-align: center;
    }

    .botoes-container {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
      justify-content: center;
    }

    .btn {
      padding: 12px 20px;
      font-size: 0.95em;
      font-weight: 600;
      cursor: pointer;
      border: none;
      border-radius: 8px;
      transition: all 0.2s ease;
      min-width: 120px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .btn-incrementar {
      background: linear-gradient(135deg, #48bb78 0%, #38a169 100%);
      color: white;
      box-shadow: 0 4px 12px rgba(72, 187, 120, 0.4);
    }

    .btn-incrementar:hover {
      background: linear-gradient(135deg, #38a169 0%, #2f855a 100%);
      transform: translateY(-2px);
      box-shadow: 0 6px 16px rgba(72, 187, 120, 0.5);
    }

    .btn-resetar {
      background: linear-gradient(135deg, #ed8936 0%, #dd6b20 100%);
      color: white;
      box-shadow: 0 4px 12px rgba(237, 137, 54, 0.4);
    }

    .btn-resetar:hover {
      background: linear-gradient(135deg, #dd6b20 0%, #c05621 100%);
      transform: translateY(-2px);
      box-shadow: 0 6px 16px rgba(237, 137, 54, 0.5);
    }

    .btn-tema {
      background: linear-gradient(135deg, #805ad5 0%, #6b46c1 100%);
      color: white;
      box-shadow: 0 4px 12px rgba(128, 90, 213, 0.4);
    }

    .btn-tema:hover {
      background: linear-gradient(135deg, #6b46c1 0%, #553c9a 100%);
      transform: translateY(-2px);
      box-shadow: 0 6px 16px rgba(128, 90, 213, 0.5);
    }

    .btn:active {
      transform: translateY(0);
    }

    .btn:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
    }

    /* Animações */
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    :host {
      animation: fadeIn 0.6s ease-out;
    }

    /* Responsividade */
    @media (max-width: 768px) {
      :host {
        padding: 20px;
        margin: 10px;
        border-radius: 12px;
      }

      h1 {
        font-size: 1.75em;
      }

      .botoes-container {
        flex-direction: column;
        align-items: center;
      }

      .btn {
        width: 100%;
        max-width: 200px;
      }
    }

    @media (max-width: 480px) {
      :host {
        padding: 16px;
        border-radius: 8px;
      }

      h1 {
        font-size: 1.5em;
      }

      .contador-container {
        padding: 16px;
      }
    }
  `;g([h({type:String})],s.prototype,"nome",2);g([h({type:String})],s.prototype,"tema",2);g([z()],s.prototype,"contador",2);s=g([w("mozg-meu-componente-lit")],s);const T={title:"Components/MeuComponenteLit",component:"mozg-meu-componente-lit",tags:["autodocs"],argTypes:{nome:{control:"text",description:"Nome a ser exibido no componente",defaultValue:"Lit!"},tema:{control:"select",options:["light","dark"],description:"Tema do componente",defaultValue:"light"},contador:{control:{type:"number",min:0},description:"Valor inicial do contador",table:{type:{summary:"number"},defaultValue:{summary:0}}}},render:e=>b`
    <mozg-meu-componente-lit
      nome="${e.nome}"
      tema="${e.tema}"
      .contador="${e.contador}"
      @contador-change="${t=>console.log("Contador mudou:",t.detail)}"
    >
      <div
        slot=""
        style="margin-top: 1rem; padding: 1rem; background: #f0f8ff; border-radius: 4px; border-left: 4px solid #4a90e2;"
      >
        <p style="margin: 0; color: #2c3e50; font-size: 0.9em;">
          Conteúdo adicional via slot
        </p>
      </div>
    </mozg-meu-componente-lit>
  `},c={args:{nome:"Lit Component",tema:"light",contador:0},parameters:{docs:{description:{story:"Componente padrão com tema claro e contador zerado."}}}},m={args:{nome:"Dark Mode",tema:"dark",contador:5},parameters:{backgrounds:{default:"dark"},docs:{description:{story:"Componente com tema escuro e contador inicial em 5."}}}},p={args:{nome:"Contador Alto",tema:"light",contador:25},parameters:{docs:{description:{story:"Componente com um valor inicial alto no contador."}}}},l={render:()=>b`
    <div style="max-width: 800px; margin: 0 auto; padding: 20px;">
      <h2>Meu Dashboard</h2>
      <div
        style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-top: 20px;"
      >
        <mozg-meu-componente-lit
          nome="Tarefas"
          tema="light"
          .contador="${5}"
        ></mozg-meu-componente-lit>

        <mozg-meu-componente-lit
          nome="Notificações"
          tema="dark"
          .contador="${12}"
        ></mozg-meu-componente-lit>

        <mozg-meu-componente-lit
          nome="Mensagens"
          tema="light"
          .contador="${3}"
        ></mozg-meu-componente-lit>
      </div>
    </div>
  `,parameters:{docs:{description:{story:"Exemplo de uso do componente em um layout de dashboard."}}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    nome: 'Lit Component',
    tema: 'light',
    contador: 0
  },
  parameters: {
    docs: {
      description: {
        story: 'Componente padrão com tema claro e contador zerado.'
      }
    }
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    nome: 'Dark Mode',
    tema: 'dark',
    contador: 5
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    },
    docs: {
      description: {
        story: 'Componente com tema escuro e contador inicial em 5.'
      }
    }
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    nome: 'Contador Alto',
    tema: 'light',
    contador: 25
  },
  parameters: {
    docs: {
      description: {
        story: 'Componente com um valor inicial alto no contador.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <div style="max-width: 800px; margin: 0 auto; padding: 20px;">
      <h2>Meu Dashboard</h2>
      <div
        style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-top: 20px;"
      >
        <mozg-meu-componente-lit
          nome="Tarefas"
          tema="light"
          .contador="\${5}"
        ></mozg-meu-componente-lit>

        <mozg-meu-componente-lit
          nome="Notificações"
          tema="dark"
          .contador="\${12}"
        ></mozg-meu-componente-lit>

        <mozg-meu-componente-lit
          nome="Mensagens"
          tema="light"
          .contador="\${3}"
        ></mozg-meu-componente-lit>
      </div>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Exemplo de uso do componente em um layout de dashboard.'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};const O=["Padrao","TemaEscuro","ComContadorAlto","EmLayout"];export{p as ComContadorAlto,l as EmLayout,c as Padrao,m as TemaEscuro,O as __namedExportsOrder,T as default};
