import{n as e}from"./rolldown-runtime-BJ9pB_0e.js";import{a as t,c as n,i as r,n as i,r as a,s as o,t as s}from"./catalog-Bsmtwg8G.js";import{i as c,r as l}from"./parking-lottery-models-CUySHe6d.js";function u(e){return{id:`default`,label:`Padrão`,description:`Preset base para ${e.displayName}.`}}function d(e={}){return v.filter(t=>!(e.group&&t.group!==e.group||e.framework&&t.framework!==e.framework)).sort((e,t)=>e.displayName.localeCompare(t.displayName))}function f(e,t){return t&&e.some(e=>e.id===t)?t:e[0]?.id??``}function p(e){return e.presets[0]?.id??`default`}var m,h,g,_,v,y=e((()=>{s(),c(),m={codepen:{tone:`night`,minHeight:`32rem`},core:{tone:`paper`,minHeight:`24rem`,maxWidth:`48rem`},framework:{tone:`mesh`,minHeight:`26rem`,maxWidth:`52rem`},google:{tone:`paper`,minHeight:`34rem`,maxWidth:`62rem`},integration:{tone:`contrast`,minHeight:`40rem`},mdn:{tone:`paper`,minHeight:`26rem`,maxWidth:`56rem`}},h={codepen:`Demos visuais priorizam impacto e podem exigir mais GPU ou isolamento no canvas.`,google:`Fluxos completos dependem de credenciais Firebase válidas e permissões externas.`,mdn:`A experiência depende do nível de suporte do navegador para a API demonstrada.`,integration:`Integrações de dados merecem validação de rede, desempenho e comportamento em cenários reais.`},g=`
  <div class="story-slot-card">
    <strong>Slot ativo</strong>
    <p>Conteúdo injetado pelo Storybook para validar composição e extensibilidade.</p>
  </div>
`,_={"parking-lottery":{note:"Use `scenarioData` como property quando precisar injetar empreendimentos fora dos presets canônicos.",support:`O componente foi desenhado para assembleias, portais do síndico e páginas de acompanhamento com necessidade de replay por seed.`,canvas:{tone:`paper`,minHeight:`72rem`,maxWidth:`88rem`},presets:[{id:`panorama-balanced`,label:`Panorama 20 · Equilíbrio`,description:`Cenário exato pedido para 20 andares com apartamentos 11 a 14 no primeiro pavimento e vagas distribuídas em térreo, subsolo 1 e subsolo 2.`,attributes:{"scenario-preset":`torre-panorama-20`,model:`balanced`,seed:20260409}},{id:`panorama-rotation`,label:`Panorama 20 · Rodízio`,description:`Sequência reprocessável por seed, adequada para atas e validação externa do sorteio.`,attributes:{"scenario-preset":`torre-panorama-20`,model:`rotation`,seed:20260410}},{id:`boutique-cluster`,label:`Boutique 8 · Clusters`,description:`Agrupa faixas e colunas em um empreendimento compacto, privilegiando leitura operacional.`,attributes:{"scenario-preset":`torre-boutique-8`,model:`cluster`,seed:20260411}},{id:`jardins-custom`,label:`Jardins 16 · Cenário via property`,description:`Preset demonstra injeção estruturada por property em vez de depender somente de atributos.`,attributes:{model:`proximity`,seed:20260412},properties:{scenarioData:l()[2]}}]},"meu-componente-react":{presets:[{id:`default`,label:`Padrão`,attributes:{titulo:`Bem-vindo ao React`,nome:`Catálogo Mozg`}},{id:`slot`,label:`Com Slot`,attributes:{titulo:`Composição React`,nome:`Conteúdo projetado`},slot:g}]},"meu-componente-vue":{presets:[{id:`default`,label:`Padrão`,attributes:{titulo:`Olá, Vue!`,nome:`Catálogo Mozg`}},{id:`slot`,label:`Com Slot`,attributes:{titulo:`Vue + Slots`,nome:`Interação dirigida`},slot:g}]},"meu-componente-svelte":{presets:[{id:`aurora`,label:`Aurora`,attributes:{titulo:`Svelte Aurora`,nome:`Biblioteca auditável`,variant:`aurora`,"contador-inicial":4}},{id:`graphite`,label:`Graphite`,attributes:{titulo:`Svelte Graphite`,nome:`Preset alternativo`,variant:`graphite`,"contador-inicial":9}}]},"meu-componente-lit":{presets:[{id:`light`,label:`Tema Claro`,attributes:{nome:`Lit Component`,tema:`light`},slot:g},{id:`dark`,label:`Tema Escuro`,attributes:{nome:`Lit After Hours`,tema:`dark`},canvas:{tone:`contrast`},slot:g}]},container:{presets:[{id:`slots`,label:`Slots Nomeados`,slot:`
          <span slot="title">Container Mozg</span>
          <span slot="body">Um exemplo simples para validar projeção de conteúdo e ação interna.</span>
        `}]},core:{presets:[{id:`demo`,label:`Modo Demo`,attributes:{mode:`demo`}},{id:`audit`,label:`Modo Audit`,attributes:{mode:`audit`}}]},"meu-componente-vanilla":{presets:[{id:`default`,label:`Padrão`,attributes:{nome:`Vanilla Showcase`}},{id:`slot`,label:`Com Slot`,attributes:{nome:`Composição via host`},slot:g}]},"sender-atributes":{note:`O preset acopla automaticamente o receptor para demonstrar o fluxo de mensagem.`,presets:[{id:`paired`,label:`Com Receptor`,onMount:(e,t)=>{let n=document.createElement(`mozg-receiver-atributes`);t.appendChild(n)}}]},"sender-event-bus":{note:`O preset acopla automaticamente o receptor para demonstrar o fluxo no EventBus.`,presets:[{id:`paired`,label:`Com Receptor`,onMount:(e,t)=>{let n=document.createElement(`mozg-receiver-event-bus`);t.appendChild(n)}}]},"popover-api":{note:`Esse componente expõe sua experiência principal via método imperativo e o Storybook adiciona um gatilho de demo.`,presets:[{id:`toast`,label:`Toast Demo`,onMount:(e,t)=>{let n=document.createElement(`button`);return n.className=`story-action-button`,n.textContent=`Disparar toast`,n.addEventListener(`click`,()=>{e.showToast?.()}),t.prepend(n),queueMicrotask(()=>{e.showToast?.()}),()=>{document.querySelectorAll(`article.toast`).forEach(e=>e.remove())}}}]},"popover-popup":{presets:[{id:`default`,label:`Conteúdo Rico`,slot:`
          <article class="story-slot-card">
            <strong>Popup Mozg</strong>
            <p>Use o botão para abrir o conteúdo projetado dentro do dialog.</p>
          </article>
        `}]},"firebase-tools":{note:`O componente troca o conteúdo interno com base no estado de autenticação observado pelo Firebase.`},"signed-in":{support:`Esse fluxo depende de autenticação ativa. Em Storybook, o foco é validar a composição do estado conectado.`},"signed-out":{support:`Esse fluxo depende de autenticação. Em Storybook, o objetivo é revisar o estado visual de entrada.`},"card-tilted":{presets:[{id:`content`,label:`Com Conteúdo`,attributes:{title:`Mozg Card`},slot:`
          <div class="story-slot-card">
            <strong>Card inclinado</strong>
            <p>Preset com conteúdo simples para validar profundidade, slots e hover.</p>
          </div>
        `}]},binance:{note:`Integração visualmente mais pesada. O canvas foi mantido amplo para facilitar inspeção.`,canvas:{tone:`contrast`,minHeight:`44rem`}}},v=i.map(e=>{let t=_[e.id],n={...m[e.group],...t?.canvas};return{...e,description:o(e),support:t?.support??h[e.group],note:t?.note,canvas:n,presets:t?.presets&&t.presets.length>0?t.presets:[u(e)]}})}));function b(e){return e.replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`).replaceAll(`'`,`&#39;`)}function x(e,t){if(!t||t.length===0)return`
      <section class="catalog-section">
        <h3>${b(e)}</h3>
        <p class="catalog-muted">Sem itens documentados para esta categoria.</p>
      </section>
    `;let n=t.map(e=>{let t=e.type?`<span class="catalog-inline-meta">${b(e.type)}</span>`:``,n=e.defaultValue?`<span class="catalog-inline-meta">default: ${b(e.defaultValue)}</span>`:``;return`
        <li>
          <strong>${b(e.name)}</strong>
          ${t}
          ${n}
          <p>${b(e.description)}</p>
        </li>
      `}).join(``);return`
    <section class="catalog-section">
      <h3>${b(e)}</h3>
      <ul class="catalog-doc-list">${n}</ul>
    </section>
  `}function S(e,t){let r=n(e),i=[{label:`Componentes`,value:String(r.total)},{label:`Grupos`,value:String(Object.values(r.byGroup).filter(e=>e>0).length)},{label:`Frameworks`,value:String(Object.values(r.byFramework).filter(e=>e>0).length)}];return`
    <header class="catalog-hero">
      <div>
        <p class="catalog-eyebrow">${b(t.eyebrow)}</p>
        <h1>${b(t.title)}</h1>
        <p class="catalog-lead">${b(t.description)}</p>
      </div>
      <div class="catalog-hero-stats">
        ${i.map(e=>`
              <article class="catalog-stat-card">
                <span>${b(e.label)}</span>
                <strong>${b(e.value)}</strong>
              </article>
            `).join(``)}
      </div>
    </header>
  `}function C(e){let i=n(e);return`
    <section class="catalog-grid-section">
      <div>
        <h2>Famílias</h2>
        <div class="catalog-grid">${j.filter(e=>i.byGroup[e]>0).map(e=>`
        <article class="catalog-card">
          <span class="catalog-chip">${b(r[e])}</span>
          <strong>${i.byGroup[e]}</strong>
          <p>componentes mapeados nesta família.</p>
        </article>
      `).join(``)}</div>
      </div>
      <div>
        <h2>Frameworks</h2>
        <div class="catalog-grid">${N.filter(e=>i.byFramework[e]>0).map(e=>`
        <article class="catalog-card">
          <span class="catalog-chip">${b(a[e])}</span>
          <strong>${i.byFramework[e]}</strong>
          <p>implementações ou wrappers ativos.</p>
        </article>
      `).join(``)}</div>
      </div>
      <div>
        <h2>Status</h2>
        <div class="catalog-grid">${M.filter(e=>i.byStatus[e]>0).map(e=>`
        <article class="catalog-card">
          <span class="catalog-chip">${b(t[e])}</span>
          <strong>${i.byStatus[e]}</strong>
          <p>entradas classificadas com esse perfil operacional.</p>
        </article>
      `).join(``)}</div>
      </div>
    </section>
  `}function w(e,t){let n=document.createElement(`section`);return n.className=`catalog-page`,n.innerHTML=`
    ${S(e,t)}
    ${C(e)}
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
  `,n}function T(e,n){let i=document.createElement(`section`);i.className=`catalog-page`;let o=[...e].sort((e,t)=>e.displayName.localeCompare(t.displayName)).map(e=>`
        <tr>
          <td>${b(e.displayName)}</td>
          <td>${b(r[e.group])}</td>
          <td>${b(a[e.framework])}</td>
          <td>${b(t[e.status])}</td>
          <td><code>${b(e.tag)}</code></td>
          <td><code>${b(e.sourcePath)}</code></td>
        </tr>
      `).join(``);return i.innerHTML=`
    ${S(e,n)}
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
          <tbody>${o}</tbody>
        </table>
      </div>
    </section>
  `,i}function E(e,t){Object.entries(t.attributes??{}).forEach(([t,n])=>{if(n===void 0||n===!1||n===null){e.removeAttribute(t);return}if(n===!0){e.setAttribute(t,`true`);return}e.setAttribute(t,String(n))})}function D(e,t){Object.entries(t.properties??{}).forEach(([t,n])=>{Reflect.set(e,t,n)})}function O(e,n){let i=`<${e.tag}></${e.tag}>`,o=e.note?`<p class="catalog-support">${b(e.note)}</p>`:``,s=e.support?`<p class="catalog-support">${b(e.support)}</p>`:``,c=n.description?`<p class="catalog-support">${b(n.description)}</p>`:``;return`
    <article class="catalog-card catalog-card--sticky">
      <div class="catalog-meta-header">
        <div>
          <span class="catalog-chip">${b(r[e.group])}</span>
          <h2>${b(e.displayName)}</h2>
        </div>
        <span class="catalog-status" data-status="${b(e.status)}">
          ${b(t[e.status])}
        </span>
      </div>
      <p>${b(e.description)}</p>
      <dl class="catalog-definition-list">
        <div>
          <dt>Tag</dt>
          <dd><code>${b(e.tag)}</code></dd>
        </div>
        <div>
          <dt>Export</dt>
          <dd><code>${b(e.exportName)}</code></dd>
        </div>
        <div>
          <dt>Framework</dt>
          <dd>${b(a[e.framework])}</dd>
        </div>
        <div>
          <dt>Origem</dt>
          <dd><code>${b(e.sourcePath)}</code></dd>
        </div>
        <div>
          <dt>Snippet</dt>
          <dd><code>${b(i)}</code></dd>
        </div>
        <div>
          <dt>Preset</dt>
          <dd>${b(n.label)}</dd>
        </div>
      </dl>
      ${c}
      ${o}
      ${s}
      ${x(`Atributos`,e.attributes)}
      ${x(`Eventos`,e.events)}
      ${x(`Slots`,e.slots)}
    </article>
  `}function k(e,t){return{...e.canvas,...t.canvas}}function A(e,t,n={}){let r=document.createElement(`section`);r.className=`catalog-page`;let i=f(e,n.component);r.innerHTML=`
    ${S(e,t)}
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
  `;let a=r.querySelector(`.catalog-sidebar`),o=r.querySelector(`[data-control="component"]`),s=r.querySelector(`[data-control="preset"]`),c=r.querySelector(`.catalog-canvas`),l=r.querySelector(`.catalog-canvas__inner`);if(!a||!o||!s||!c||!l)return r;o.innerHTML=e.map(e=>`
        <option value="${b(e.id)}">${b(e.displayName)}</option>
      `).join(``),o.value=i;let u,d=e=>{let t=s.value;s.innerHTML=e.presets.map(e=>`
          <option value="${b(e.id)}">${b(e.label)}</option>
        `).join(``),s.value=e.presets.some(e=>e.id===t)?t:p(e)},m=()=>{let t=e.find(e=>e.id===o.value)??e[0];if(!t)return;d(t);let n=t.presets.find(e=>e.id===s.value)??t.presets[0];if(!n)return;u?.(),u=void 0,a.innerHTML=O(t,n),l.replaceChildren();let r=document.createElement(`div`);r.className=`catalog-preview-frame`;let i=k(t,n);c.dataset.tone=i.tone,c.style.minHeight=i.minHeight,i.maxWidth?r.style.maxWidth=i.maxWidth:r.style.maxWidth=`none`;let f=document.createElement(t.tag);E(f,n),D(f,n),n.slot&&(f.innerHTML=n.slot),r.appendChild(f),l.appendChild(r);let p=n.onMount?.(f,r,l);typeof p==`function`&&(u=p)};return o.addEventListener(`change`,m),s.addEventListener(`change`,m),d(e.find(e=>e.id===i)??e[0]),m(),r}var j,M,N,P=e((()=>{s(),y(),j=[`framework`,`core`,`mdn`,`google`,`codepen`,`integration`],M=[`stable`,`browser-dependent`,`integration`,`experimental`],N=[`vanilla`,`react`,`vue`,`svelte`,`lit`]}));export{d as a,A as i,T as n,y as o,w as r,P as t};