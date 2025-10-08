import{x as m}from"./iframe-DGXKmtGt.js";import{e as p,j as e}from"./index-ewikmuNB.js";import{R as l}from"./client-CBaSfb8C.js";import"./index-nuYtCEEu.js";import"./_commonjsHelpers-Cpj98o6Y.js";const u=({titulo:o="Olá, React!",nome:t="mundo"})=>e.jsxs("div",{className:"meu-componente-react",children:[e.jsx("style",{children:`
          .meu-componente-react {
            display: block;
            padding: 16px;
            border: 1px solid #ccc;
            border-radius: 8px;
            font-family: Arial, sans-serif;
            background-color: #f9f9f9;
          }

          .meu-componente-react h1 {
            color: #333;
            margin: 0 0 16px 0;
            font-size: 1.5em;
          }

          .meu-componente-react p {
            margin: 0 0 16px 0;
            color: #666;
          }

          .meu-componente-react button {
            margin-top: 10px;
            padding: 8px 16px;
            font-size: 1em;
            cursor: pointer;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 4px;
            transition: background-color 0.2s;
          }

          .meu-componente-react button:hover {
            background-color: #0056b3;
          }
        `}),e.jsx("h1",{children:o}),e.jsxs("p",{children:["Aqui é ",t]}),e.jsx("slot",{})]});class i extends HTMLElement{constructor(){super(),this.root=null,this.shadow=this.attachShadow({mode:"open"})}static{this.tag="mozg-meu-componente-react"}static get observedAttributes(){return["titulo","nome"]}connectedCallback(){this.render()}attributeChangedCallback(t,d,c){d!==c&&this.render()}disconnectedCallback(){this.root?.unmount()}render(){const t={titulo:this.getAttribute("titulo")||void 0,nome:this.getAttribute("nome")||void 0};this.root||(this.root=l.createRoot(this.shadow)),this.root.render(p.createElement(u,t))}}const g=()=>{const o=i.tag;customElements.get(o)||(customElements.define(o,i),console.log(`✅ Componente React registrado: ${o}`))};g();const z={title:"Components/MeuComponenteReact",component:"mozg-meu-componente-react",tags:["autodocs"],argTypes:{titulo:{control:"text",description:"Título do componente",defaultValue:"Olá, React!"},nome:{control:"text",description:"Nome a ser exibido no componente",defaultValue:"mundo"}},render:o=>m`
    <mozg-meu-componente-react titulo=${o.titulo} nome=${o.nome}>
      <div slot="">
        <p>Conteúdo adicional via slot</p>
        <button>Botão personalizado</button>
      </div>
    </mozg-meu-componente-react>
  `},n={args:{titulo:"Bem-vindo ao React",nome:"Visitante"},parameters:{docs:{description:{story:"Componente React padrão com título e nome personalizáveis."}}}},r={args:{titulo:"Este é um título muito longo para demonstrar como o componente lida com textos extensos",nome:"Usuário com nome longo também"},parameters:{docs:{description:{story:"Demonstração do componente com textos longos para testar o comportamento de layout."}}}},a={args:{titulo:"Conteúdo Personalizado",nome:"Usuário"},render:o=>m`
    <mozg-meu-componente-react titulo=${o.titulo} nome=${o.nome}>
      <div
        slot=""
        style="margin-top: 1rem; padding: 1rem; background: #f0f0f0; border-radius: 4px;"
      >
        <h3 style="margin-top: 0;">Conteúdo Personalizado</h3>
        <p>Este é um exemplo de conteúdo personalizado usando slots.</p>
        <button
          style="background: #4CAF50; color: white; padding: 8px 16px; border: none; border-radius: 4px; cursor: pointer;"
        >
          Ação Personalizada
        </button>
      </div>
    </mozg-meu-componente-react>
  `,parameters:{docs:{description:{story:"Exemplo de como personalizar o conteúdo do componente usando slots."}}}},s={render:()=>m`
    <div style="max-width: 800px; margin: 0 auto; padding: 20px;">
      <h1>Dashboard de Exemplo</h1>
      <div
        style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-top: 20px;"
      >
        <mozg-meu-componente-react titulo="Tarefas Pendentes" nome="Usuário">
          <div slot="" style="text-align: center; padding: 1rem;">
            <div style="font-size: 2em; font-weight: bold; color: #007bff;">12</div>
            <div>tarefas para hoje</div>
          </div>
        </mozg-meu-componente-react>

        <mozg-meu-componente-react titulo="Mensagens" nome="Usuário">
          <div slot="" style="text-align: center; padding: 1rem;">
            <div style="font-size: 2em; font-weight: bold; color: #28a745;">5</div>
            <div>novas mensagens</div>
          </div>
        </mozg-meu-componente-react>
      </div>
    </div>
  `,parameters:{docs:{description:{story:"Exemplo de uso do componente em um layout de dashboard com conteúdo personalizado."}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    titulo: 'Bem-vindo ao React',
    nome: 'Visitante'
  },
  parameters: {
    docs: {
      description: {
        story: 'Componente React padrão com título e nome personalizáveis.'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    titulo: 'Este é um título muito longo para demonstrar como o componente lida com textos extensos',
    nome: 'Usuário com nome longo também'
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstração do componente com textos longos para testar o comportamento de layout.'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    titulo: 'Conteúdo Personalizado',
    nome: 'Usuário'
  },
  render: args => html\`
    <mozg-meu-componente-react titulo=\${args.titulo} nome=\${args.nome}>
      <div
        slot=""
        style="margin-top: 1rem; padding: 1rem; background: #f0f0f0; border-radius: 4px;"
      >
        <h3 style="margin-top: 0;">Conteúdo Personalizado</h3>
        <p>Este é um exemplo de conteúdo personalizado usando slots.</p>
        <button
          style="background: #4CAF50; color: white; padding: 8px 16px; border: none; border-radius: 4px; cursor: pointer;"
        >
          Ação Personalizada
        </button>
      </div>
    </mozg-meu-componente-react>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Exemplo de como personalizar o conteúdo do componente usando slots.'
      }
    }
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <div style="max-width: 800px; margin: 0 auto; padding: 20px;">
      <h1>Dashboard de Exemplo</h1>
      <div
        style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-top: 20px;"
      >
        <mozg-meu-componente-react titulo="Tarefas Pendentes" nome="Usuário">
          <div slot="" style="text-align: center; padding: 1rem;">
            <div style="font-size: 2em; font-weight: bold; color: #007bff;">12</div>
            <div>tarefas para hoje</div>
          </div>
        </mozg-meu-componente-react>

        <mozg-meu-componente-react titulo="Mensagens" nome="Usuário">
          <div slot="" style="text-align: center; padding: 1rem;">
            <div style="font-size: 2em; font-weight: bold; color: #28a745;">5</div>
            <div>novas mensagens</div>
          </div>
        </mozg-meu-componente-react>
      </div>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Exemplo de uso do componente em um layout de dashboard com conteúdo personalizado.'
      }
    }
  }
}`,...s.parameters?.docs?.source}}};const y=["Padrao","ComTituloLongo","ComConteudoPersonalizado","EmLayout"];export{a as ComConteudoPersonalizado,r as ComTituloLongo,s as EmLayout,n as Padrao,y as __namedExportsOrder,z as default};
