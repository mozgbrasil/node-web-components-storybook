import{C as k,d as M,a as S,c as E,e as O,s as A}from"./component-catalog-CPMzjWDJ.js";const N={codepen:{tone:"night",minHeight:"32rem"},core:{tone:"paper",minHeight:"24rem",maxWidth:"48rem"},framework:{tone:"mesh",minHeight:"26rem",maxWidth:"52rem"},google:{tone:"paper",minHeight:"34rem",maxWidth:"62rem"},integration:{tone:"contrast",minHeight:"40rem"},mdn:{tone:"paper",minHeight:"26rem",maxWidth:"56rem"}},w={codepen:"Demos visuais priorizam impacto e podem exigir mais GPU ou isolamento no canvas.",google:"Fluxos completos dependem de credenciais Firebase válidas e permissões externas.",mdn:"A experiência depende do nível de suporte do navegador para a API demonstrada.",integration:"Integrações de dados merecem validação de rede, desempenho e comportamento em cenários reais."},u=`
  <div class="story-slot-card">
    <strong>Slot ativo</strong>
    <p>Conteúdo injetado pelo Storybook para validar composição e extensibilidade.</p>
  </div>
`,_={"meu-componente-react":{presets:[{id:"default",label:"Padrão",attributes:{titulo:"Bem-vindo ao React",nome:"Catálogo Mozg"}},{id:"slot",label:"Com Slot",attributes:{titulo:"Composição React",nome:"Conteúdo projetado"},slot:u}]},"meu-componente-vue":{presets:[{id:"default",label:"Padrão",attributes:{titulo:"Olá, Vue!",nome:"Catálogo Mozg"}},{id:"slot",label:"Com Slot",attributes:{titulo:"Vue + Slots",nome:"Interação dirigida"},slot:u}]},"meu-componente-svelte":{presets:[{id:"aurora",label:"Aurora",attributes:{titulo:"Svelte Aurora",nome:"Biblioteca auditável",variant:"aurora","contador-inicial":4}},{id:"graphite",label:"Graphite",attributes:{titulo:"Svelte Graphite",nome:"Preset alternativo",variant:"graphite","contador-inicial":9}}]},"meu-componente-lit":{presets:[{id:"light",label:"Tema Claro",attributes:{nome:"Lit Component",tema:"light"},slot:u},{id:"dark",label:"Tema Escuro",attributes:{nome:"Lit After Hours",tema:"dark"},canvas:{tone:"contrast"},slot:u}]},container:{presets:[{id:"slots",label:"Slots Nomeados",slot:`
          <span slot="title">Container Mozg</span>
          <span slot="body">Um exemplo simples para validar projeção de conteúdo e ação interna.</span>
        `}]},core:{presets:[{id:"demo",label:"Modo Demo",attributes:{mode:"demo"}},{id:"audit",label:"Modo Audit",attributes:{mode:"audit"}}]},"meu-componente-vanilla":{presets:[{id:"default",label:"Padrão",attributes:{nome:"Vanilla Showcase"}},{id:"slot",label:"Com Slot",attributes:{nome:"Composição via host"},slot:u}]},"sender-atributes":{note:"O preset acopla automaticamente o receptor para demonstrar o fluxo de mensagem.",presets:[{id:"paired",label:"Com Receptor",onMount:(e,t)=>{const a=document.createElement("mozg-receiver-atributes");t.appendChild(a)}}]},"sender-event-bus":{note:"O preset acopla automaticamente o receptor para demonstrar o fluxo no EventBus.",presets:[{id:"paired",label:"Com Receptor",onMount:(e,t)=>{const a=document.createElement("mozg-receiver-event-bus");t.appendChild(a)}}]},"popover-api":{note:"Esse componente expõe sua experiência principal via método imperativo e o Storybook adiciona um gatilho de demo.",presets:[{id:"toast",label:"Toast Demo",onMount:(e,t)=>{const a=document.createElement("button");return a.className="story-action-button",a.textContent="Disparar toast",a.addEventListener("click",()=>{e.showToast?.()}),t.prepend(a),queueMicrotask(()=>{e.showToast?.()}),()=>{document.querySelectorAll("article.toast").forEach(s=>s.remove())}}}]},"popover-popup":{presets:[{id:"default",label:"Conteúdo Rico",slot:`
          <article class="story-slot-card">
            <strong>Popup Mozg</strong>
            <p>Use o botão para abrir o conteúdo projetado dentro do dialog.</p>
          </article>
        `}]},"firebase-tools":{note:"O componente troca o conteúdo interno com base no estado de autenticação observado pelo Firebase."},"signed-in":{support:"Esse fluxo depende de autenticação ativa. Em Storybook, o foco é validar a composição do estado conectado."},"signed-out":{support:"Esse fluxo depende de autenticação. Em Storybook, o objetivo é revisar o estado visual de entrada."},"card-tilted":{presets:[{id:"content",label:"Com Conteúdo",attributes:{title:"Mozg Card"},slot:`
          <div class="story-slot-card">
            <strong>Card inclinado</strong>
            <p>Preset com conteúdo simples para validar profundidade, slots e hover.</p>
          </div>
        `}]},binance:{note:"Integração visualmente mais pesada. O canvas foi mantido amplo para facilitar inspeção.",canvas:{tone:"contrast",minHeight:"44rem"}}};function y(e){return{id:"default",label:"Padrão",description:`Preset base para ${e.displayName}.`}}const L=k.map(e=>{const t=_[e.id],a={...N[e.group],...t?.canvas};return{...e,description:M(e),support:t?.support??w[e.group],note:t?.note,canvas:a,presets:t?.presets&&t.presets.length>0?t.presets:[y(e)]}});function q(e={}){return L.filter(t=>!(e.group&&t.group!==e.group||e.framework&&t.framework!==e.framework)).sort((t,a)=>t.displayName.localeCompare(a.displayName))}function R(e,t){return t&&e.some(a=>a.id===t)?t:e[0]?.id??""}function H(e){return e.presets[0]?.id??"default"}const j=["framework","core","mdn","google","codepen","integration"],F=["stable","browser-dependent","integration","experimental"],G=["vanilla","react","vue","svelte","lit"];function o(e){return e.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function C(e,t){if(!t||t.length===0)return`
      <section class="catalog-section">
        <h3>${o(e)}</h3>
        <p class="catalog-muted">Sem itens documentados para esta categoria.</p>
      </section>
    `;const a=t.map(s=>{const r=s.type?`<span class="catalog-inline-meta">${o(s.type)}</span>`:"",n=s.defaultValue?`<span class="catalog-inline-meta">default: ${o(s.defaultValue)}</span>`:"";return`
        <li>
          <strong>${o(s.name)}</strong>
          ${r}
          ${n}
          <p>${o(s.description)}</p>
        </li>
      `}).join("");return`
    <section class="catalog-section">
      <h3>${o(e)}</h3>
      <ul class="catalog-doc-list">${a}</ul>
    </section>
  `}function P(e,t){const a=A(e),s=[{label:"Componentes",value:String(a.total)},{label:"Grupos",value:String(Object.values(a.byGroup).filter(r=>r>0).length)},{label:"Frameworks",value:String(Object.values(a.byFramework).filter(r=>r>0).length)}];return`
    <header class="catalog-hero">
      <div>
        <p class="catalog-eyebrow">${o(t.eyebrow)}</p>
        <h1>${o(t.title)}</h1>
        <p class="catalog-lead">${o(t.description)}</p>
      </div>
      <div class="catalog-hero-stats">
        ${s.map(r=>`
              <article class="catalog-stat-card">
                <span>${o(r.label)}</span>
                <strong>${o(r.value)}</strong>
              </article>
            `).join("")}
      </div>
    </header>
  `}function I(e){const t=A(e),a=j.filter(n=>t.byGroup[n]>0).map(n=>`
        <article class="catalog-card">
          <span class="catalog-chip">${o(S[n])}</span>
          <strong>${t.byGroup[n]}</strong>
          <p>componentes mapeados nesta família.</p>
        </article>
      `).join(""),s=G.filter(n=>t.byFramework[n]>0).map(n=>`
        <article class="catalog-card">
          <span class="catalog-chip">${o(E[n])}</span>
          <strong>${t.byFramework[n]}</strong>
          <p>implementações ou wrappers ativos.</p>
        </article>
      `).join(""),r=F.filter(n=>t.byStatus[n]>0).map(n=>`
        <article class="catalog-card">
          <span class="catalog-chip">${o(O[n])}</span>
          <strong>${t.byStatus[n]}</strong>
          <p>entradas classificadas com esse perfil operacional.</p>
        </article>
      `).join("");return`
    <section class="catalog-grid-section">
      <div>
        <h2>Famílias</h2>
        <div class="catalog-grid">${a}</div>
      </div>
      <div>
        <h2>Frameworks</h2>
        <div class="catalog-grid">${s}</div>
      </div>
      <div>
        <h2>Status</h2>
        <div class="catalog-grid">${r}</div>
      </div>
    </section>
  `}function V(e,t){const a=document.createElement("section");return a.className="catalog-page",a.innerHTML=`
    ${P(e,t)}
    ${I(e)}
    <section class="catalog-grid-section">
      <div class="catalog-grid catalog-grid--wide">
        <article class="catalog-card catalog-card--feature">
          <span class="catalog-chip">Catálogo central</span>
          <h2>Uma fonte única para export, Storybook e auditoria</h2>
          <p>
            O inventário agora vive em um catálogo tipado, reaproveitado pela biblioteca
            e pelas páginas do Storybook. Isso reduz divergências entre tag, export e documentação.
          </p>
        </article>
        <article class="catalog-card catalog-card--feature">
          <span class="catalog-chip">Cobertura Storybook</span>
          <h2>Todas as famílias acessíveis por explorers</h2>
          <p>
            Em vez de manter stories manuais e desconectadas, o projeto ganhou explorers
            com presets, metadados técnicos e canvas isolado para componentes pesados.
          </p>
        </article>
        <article class="catalog-card catalog-card--feature">
          <span class="catalog-chip">Manutenção</span>
          <h2>Estrutura preparada para evolução coerente</h2>
          <p>
            Os componentes podem crescer por família, mantendo visibilidade de status,
            origem, atributos, eventos e notas de suporte diretamente no catálogo.
          </p>
        </article>
      </div>
    </section>
  `,a}function Y(e,t){const a=document.createElement("section");a.className="catalog-page";const s=[...e].sort((r,n)=>r.displayName.localeCompare(n.displayName)).map(r=>`
        <tr>
          <td>${o(r.displayName)}</td>
          <td>${o(S[r.group])}</td>
          <td>${o(E[r.framework])}</td>
          <td>${o(O[r.status])}</td>
          <td><code>${o(r.tag)}</code></td>
          <td><code>${o(r.sourcePath)}</code></td>
        </tr>
      `).join("");return a.innerHTML=`
    ${P(e,t)}
    <section class="catalog-table-section">
      <div class="catalog-table-shell">
        <table>
          <thead>
            <tr>
              <th>Componente</th>
              <th>Família</th>
              <th>Framework</th>
              <th>Status</th>
              <th>Tag</th>
              <th>Origem</th>
            </tr>
          </thead>
          <tbody>${s}</tbody>
        </table>
      </div>
    </section>
  `,a}function U(e,t){Object.entries(t.attributes??{}).forEach(([a,s])=>{if(s===void 0||s===!1||s===null){e.removeAttribute(a);return}if(s===!0){e.setAttribute(a,"true");return}e.setAttribute(a,String(s))})}function D(e,t){Object.entries(t.properties??{}).forEach(([a,s])=>{Reflect.set(e,a,s)})}function z(e,t){const a=`<${e.tag}></${e.tag}>`,s=e.note?`<p class="catalog-support">${o(e.note)}</p>`:"",r=e.support?`<p class="catalog-support">${o(e.support)}</p>`:"",n=t.description?`<p class="catalog-support">${o(t.description)}</p>`:"";return`
    <article class="catalog-card catalog-card--sticky">
      <div class="catalog-meta-header">
        <div>
          <span class="catalog-chip">${o(S[e.group])}</span>
          <h2>${o(e.displayName)}</h2>
        </div>
        <span class="catalog-status" data-status="${o(e.status)}">
          ${o(O[e.status])}
        </span>
      </div>
      <p>${o(e.description)}</p>
      <dl class="catalog-definition-list">
        <div>
          <dt>Tag</dt>
          <dd><code>${o(e.tag)}</code></dd>
        </div>
        <div>
          <dt>Export</dt>
          <dd><code>${o(e.exportName)}</code></dd>
        </div>
        <div>
          <dt>Framework</dt>
          <dd>${o(E[e.framework])}</dd>
        </div>
        <div>
          <dt>Origem</dt>
          <dd><code>${o(e.sourcePath)}</code></dd>
        </div>
        <div>
          <dt>Snippet</dt>
          <dd><code>${o(a)}</code></dd>
        </div>
        <div>
          <dt>Preset</dt>
          <dd>${o(t.label)}</dd>
        </div>
      </dl>
      ${n}
      ${s}
      ${r}
      ${C("Atributos",e.attributes)}
      ${C("Eventos",e.events)}
      ${C("Slots",e.slots)}
    </article>
  `}function B(e,t){return{...e.canvas,...t.canvas}}function K(e,t,a={}){const s=document.createElement("section");s.className="catalog-page";const r=R(e,a.component);s.innerHTML=`
    ${P(e,t)}
    <section class="catalog-workbench">
      <aside class="catalog-sidebar"></aside>
      <div class="catalog-stage">
        <div class="catalog-toolbar">
          <label>
            <span>Componente</span>
            <select data-control="component"></select>
          </label>
          <label>
            <span>Preset</span>
            <select data-control="preset"></select>
          </label>
        </div>
        <div class="catalog-canvas" data-tone="paper">
          <div class="catalog-canvas__inner"></div>
        </div>
      </div>
    </section>
  `;const n=s.querySelector(".catalog-sidebar"),p=s.querySelector('[data-control="component"]'),d=s.querySelector('[data-control="preset"]'),b=s.querySelector(".catalog-canvas"),g=s.querySelector(".catalog-canvas__inner");if(!n||!p||!d||!b||!g)return s;p.innerHTML=e.map(i=>`
        <option value="${o(i.id)}">${o(i.displayName)}</option>
      `).join(""),p.value=r;let h;const T=i=>{const l=d.value;d.innerHTML=i.presets.map(c=>`
          <option value="${o(c.id)}">${o(c.label)}</option>
        `).join(""),d.value=i.presets.some(c=>c.id===l)?l:H(i)},f=()=>{const i=e.find($=>$.id===p.value)??e[0];if(!i)return;T(i);const l=i.presets.find($=>$.id===d.value)??i.presets[0];if(!l)return;h?.(),h=void 0,n.innerHTML=z(i,l),g.replaceChildren();const c=document.createElement("div");c.className="catalog-preview-frame";const v=B(i,l);b.dataset.tone=v.tone,b.style.minHeight=v.minHeight,v.maxWidth?c.style.maxWidth=v.maxWidth:c.style.maxWidth="none";const m=document.createElement(i.tag);U(m,l),D(m,l),l.slot&&(m.innerHTML=l.slot),c.appendChild(m),g.appendChild(c);const x=l.onMount?.(m,c,g);typeof x=="function"&&(h=x)};return p.addEventListener("change",f),d.addEventListener("change",f),T(e.find(i=>i.id===r)??e[0]),f(),s}export{Y as a,V as b,q as g,K as r};
