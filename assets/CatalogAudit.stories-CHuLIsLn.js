import{n as e}from"./rolldown-runtime-Ps8w5BGs.js";import{o as t,t as n}from"./catalog-CmyIhdUG.js";function r(e){return e.replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`).replaceAll(`'`,`&#39;`)}var i,a,o,s;e((()=>{n(),i=t(`storybook-audit`,void 0,`storybook-static`),a={title:`Catalog/Audit`,tags:[`autodocs`],parameters:{layout:`fullscreen`},render:()=>{let e=document.createElement(`section`);return e.className=`catalog-page`,e.innerHTML=`
      <header class="catalog-hero">
        <div>
          <p class="catalog-eyebrow">Catalog governance</p>
          <h1>Snapshot operacional do inventário</h1>
          <p class="catalog-lead">
            Leitura objetiva para auditoria do catálogo: cobertura, risco, documentação
            estrutural e consistência entre ids, tags e superfícies-fonte.
          </p>
        </div>
        <div class="catalog-hero-stats">
          <article class="catalog-stat-card">
            <span>Componentes</span>
            <strong>${i.totals.components}</strong>
          </article>
          <article class="catalog-stat-card">
            <span>Frameworks ativos</span>
            <strong>${i.totals.active_frameworks}</strong>
          </article>
          <article class="catalog-stat-card">
            <span>Descritos</span>
            <strong>${i.totals.described_components}</strong>
          </article>
        </div>
      </header>

      <section class="catalog-grid-section">
        <div class="catalog-grid catalog-grid--wide">
          <article class="catalog-card">
            <span class="catalog-chip">Integridade</span>
            <strong>${i.duplicate_ids.length===0&&i.duplicate_tags.length===0?`OK`:`Revisar`}</strong>
            <p>Ids duplicados: ${i.duplicate_ids.length}</p>
            <p>Tags duplicadas: ${i.duplicate_tags.length}</p>
          </article>
          <article class="catalog-card">
            <span class="catalog-chip">Documentação</span>
            <strong>${i.totals.documented_attributes+i.totals.documented_events+i.totals.documented_slots}</strong>
            <p>Atributos: ${i.totals.documented_attributes}</p>
            <p>Eventos: ${i.totals.documented_events}</p>
            <p>Slots: ${i.totals.documented_slots}</p>
          </article>
          <article class="catalog-card">
            <span class="catalog-chip">Risco operacional</span>
            <strong>${i.risk_profile.experimental+i.risk_profile.browser_dependent+i.risk_profile.external_integrations}</strong>
            <p>Experimental: ${i.risk_profile.experimental}</p>
            <p>Browser dependent: ${i.risk_profile.browser_dependent}</p>
            <p>External integrations: ${i.risk_profile.external_integrations}</p>
          </article>
        </div>
      </section>

      <section class="catalog-grid-section">
        <div class="catalog-grid catalog-grid--wide">
          <article class="catalog-card catalog-card--feature">
            <span class="catalog-chip">Cobertura</span>
            <h2>Frameworks, grupos e status ativos</h2>
            <p><strong>Frameworks:</strong> ${r(i.coverage.frameworks.join(`, `))}</p>
            <p><strong>Grupos:</strong> ${r(i.coverage.groups.join(`, `))}</p>
            <p><strong>Status:</strong> ${r(i.coverage.statuses.join(`, `))}</p>
          </article>
          <article class="catalog-card catalog-card--feature">
            <span class="catalog-chip">Fontes</span>
            <h2>Raízes de código observadas</h2>
            <p>${r(i.source_roots.join(`, `))}</p>
          </article>
        </div>
      </section>

      <section class="catalog-grid-section">
        <article class="catalog-card catalog-card--feature">
          <span class="catalog-chip">Snapshot JSON</span>
          <h2>Payload determinístico do catálogo</h2>
          <pre style="margin:0;overflow:auto;padding:1rem;border-radius:18px;background:#0f172a;color:#e2e8f0;font:500 0.84rem/1.55 'IBM Plex Mono','SFMono-Regular',monospace;">${r(JSON.stringify(i,null,2))}</pre>
        </article>
      </section>
    `,e}},o={},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{}`,...o.parameters?.docs?.source}}},s=[`Audit`]}))();export{o as Audit,s as __namedExportsOrder,a as default};