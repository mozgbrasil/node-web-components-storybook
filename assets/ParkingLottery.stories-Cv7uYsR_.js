import{n as e}from"./rolldown-runtime-BJ9pB_0e.js";import{i as t,n,t as r}from"./parking-lottery-models-CUySHe6d.js";var i,a,o,s,c;e((()=>{t(),i={title:`Vanilla/Parking Lottery`,tags:[`autodocs`],parameters:{layout:`fullscreen`},args:{model:`balanced`,scenarioPreset:`torre-panorama-20`,seed:20260409},argTypes:{model:{control:`select`,options:r.map(e=>e.id),description:`Modelo de sorteio utilizado pelo componente.`},scenarioPreset:{control:`select`,options:n.map(e=>e.id),description:`Preset de empreendimento imobiliário usado na simulação.`},seed:{control:{type:`number`,min:1,step:1},description:`Seed reprodutível para o sorteio.`}},render:e=>{let t=document.createElement(`section`);t.className=`catalog-page`;let i=document.createElement(`header`);i.className=`catalog-hero`,i.innerHTML=`
      <div>
        <p class="catalog-eyebrow">Real Estate Lab</p>
        <h1>Sorteio visual de vagas</h1>
        <p class="catalog-lead">
          Painel pronto para síndicos, incorporadoras e administradoras compararem modelos de sorteio,
          capacidade por zona e fila de espera sem sair do Storybook.
        </p>
      </div>
      <div class="catalog-hero-stats">
        <article class="catalog-stat-card">
          <span>Cenários</span>
          <strong>${n.length}</strong>
        </article>
        <article class="catalog-stat-card">
          <span>Modelos</span>
          <strong>${r.length}</strong>
        </article>
        <article class="catalog-stat-card">
          <span>Preset pedido</span>
          <strong>20 andares</strong>
        </article>
      </div>
    `;let a=document.createElement(`mozg-parking-lottery`);a.setAttribute(`scenario-preset`,e.scenarioPreset),a.setAttribute(`model`,e.model),a.setAttribute(`seed`,String(e.seed)),a.setAttribute(`label-reroll`,`Reprocessar sorteio`);let o=document.createElement(`section`);return o.className=`catalog-grid-section`,o.appendChild(a),t.append(i,o),t}},a={},o={args:{model:`rotation`,scenarioPreset:`torre-panorama-20`,seed:20260410}},s={args:{model:`cluster`,scenarioPreset:`residencial-jardins-16`,seed:20260412}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    model: 'rotation',
    scenarioPreset: 'torre-panorama-20',
    seed: 20260410
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    model: 'cluster',
    scenarioPreset: 'residencial-jardins-16',
    seed: 20260412
  }
}`,...s.parameters?.docs?.source}}},c=[`Playground`,`PanoramaRotation`,`JardinsCluster`]}))();export{s as JardinsCluster,o as PanoramaRotation,a as Playground,c as __namedExportsOrder,i as default};