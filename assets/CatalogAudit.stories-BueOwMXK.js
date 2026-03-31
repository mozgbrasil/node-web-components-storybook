import{b as o}from"./component-catalog-DwzZ5kON.js";function s(t){return t.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}const a=o("storybook-audit",void 0,"storybook-static"),c={title:"Catalog/Audit",tags:["autodocs"],parameters:{layout:"fullscreen"},render:()=>{const t=document.createElement("section");return t.className="catalog-page",t.innerHTML=`
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
            <strong>${a.totals.components}</strong>
          </article>
          <article class="catalog-stat-card">
            <span>Frameworks ativos</span>
            <strong>${a.totals.active_frameworks}</strong>
          </article>
          <article class="catalog-stat-card">
            <span>Descritos</span>
            <strong>${a.totals.described_components}</strong>
          </article>
        </div>
      </header>

      <section class="catalog-grid-section">
        <div class="catalog-grid catalog-grid--wide">
          <article class="catalog-card">
            <span class="catalog-chip">Integridade</span>
            <strong>${a.duplicate_ids.length===0&&a.duplicate_tags.length===0?"OK":"Revisar"}</strong>
            <p>Ids duplicados: ${a.duplicate_ids.length}</p>
            <p>Tags duplicadas: ${a.duplicate_tags.length}</p>
          </article>
          <article class="catalog-card">
            <span class="catalog-chip">Documentação</span>
            <strong>${a.totals.documented_attributes+a.totals.documented_events+a.totals.documented_slots}</strong>
            <p>Atributos: ${a.totals.documented_attributes}</p>
            <p>Eventos: ${a.totals.documented_events}</p>
            <p>Slots: ${a.totals.documented_slots}</p>
          </article>
          <article class="catalog-card">
            <span class="catalog-chip">Risco operacional</span>
            <strong>${a.risk_profile.experimental+a.risk_profile.browser_dependent+a.risk_profile.external_integrations}</strong>
            <p>Experimental: ${a.risk_profile.experimental}</p>
            <p>Browser dependent: ${a.risk_profile.browser_dependent}</p>
            <p>External integrations: ${a.risk_profile.external_integrations}</p>
          </article>
        </div>
      </section>

      <section class="catalog-grid-section">
        <div class="catalog-grid catalog-grid--wide">
          <article class="catalog-card catalog-card--feature">
            <span class="catalog-chip">Cobertura</span>
            <h2>Frameworks, grupos e status ativos</h2>
            <p><strong>Frameworks:</strong> ${s(a.coverage.frameworks.join(", "))}</p>
            <p><strong>Grupos:</strong> ${s(a.coverage.groups.join(", "))}</p>
            <p><strong>Status:</strong> ${s(a.coverage.statuses.join(", "))}</p>
          </article>
          <article class="catalog-card catalog-card--feature">
            <span class="catalog-chip">Fontes</span>
            <h2>Raízes de código observadas</h2>
            <p>${s(a.source_roots.join(", "))}</p>
          </article>
        </div>
      </section>

      <section class="catalog-grid-section">
        <article class="catalog-card catalog-card--feature">
          <span class="catalog-chip">Snapshot JSON</span>
          <h2>Payload determinístico do catálogo</h2>
          <pre style="margin:0;overflow:auto;padding:1rem;border-radius:18px;background:#0f172a;color:#e2e8f0;font:500 0.84rem/1.55 'IBM Plex Mono','SFMono-Regular',monospace;">${s(JSON.stringify(a,null,2))}</pre>
        </article>
      </section>
    `,t}},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const l=["Audit"];export{e as Audit,l as __namedExportsOrder,c as default};
