import{g as t,r as a}from"./storybook-renderers-B2ET0HuH.js";import"./component-catalog-CPMzjWDJ.js";const r=t(),p={title:"Catalog/Explorer",tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{component:{control:"select",options:r.map(e=>e.id),description:"Componente inicial selecionado ao abrir o explorer."}},render:e=>a(r,{eyebrow:"Global Playground",title:"Explorer geral de componentes",description:"Ambiente único para navegar por todo o catálogo, alternar presets e inspecionar metadados técnicos."},e)},o={args:{component:r[0]?.id}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    component: entries[0]?.id
  }
}`,...o.parameters?.docs?.source}}};const c=["Playground"];export{o as Playground,c as __namedExportsOrder,p as default};
