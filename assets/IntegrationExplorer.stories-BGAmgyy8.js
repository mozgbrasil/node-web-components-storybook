import"./Binance-Dq1fvma8.js";import{r as t,g as n}from"./storybook-renderers-DlOoBz5I.js";import"./helpers-DXE-UcnP.js";import"./component-catalog-CuqOSlo7.js";const r=n({group:"integration"}),d={title:"Integrations/Explorer",tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{component:{control:"select",options:r.map(o=>o.id)}},render:o=>t(r,{eyebrow:"Real-world Integrations",title:"Integrações orientadas a dados",description:"Área dedicada aos componentes que exigem contexto de produto, dados externos e inspeção em canvas amplo."},o)},e={args:{component:"binance"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    component: 'binance'
  }
}`,...e.parameters?.docs?.source}}};const i=["Playground"];export{e as Playground,i as __namedExportsOrder,d as default};
