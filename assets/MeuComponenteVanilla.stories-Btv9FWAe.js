import{M as n}from"./MeuComponenteVanilla-DuG7ZvNz.js";customElements.get("mozg-meu-componente-vanilla")||customElements.define("mozg-meu-componente-vanilla",n);const s={title:"Components/MeuComponenteVanilla",component:"mozg-meu-componente-vanilla",tags:["autodocs"],argTypes:{nome:{control:"text"},ativado:{control:"boolean"}},render:e=>{const a=document.createElement("mozg-meu-componente-vanilla");return e.nome&&a.setAttribute("nome",e.nome),e.ativado!==void 0&&a.setAttribute("ativado",e.ativado.toString()),a}},o={args:{nome:"Visitante",ativado:!0}},t={args:{nome:"Usuário",ativado:!1}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    nome: 'Visitante',
    ativado: true
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    nome: 'Usuário',
    ativado: false
  }
}`,...t.parameters?.docs?.source}}};const m=["Default","Desativado"];export{o as Default,t as Desativado,m as __namedExportsOrder,s as default};
