const v={codepen:"Codepen Lab",core:"Vanilla Core",framework:"Framework Wrappers",google:"Google / Firebase",integration:"Integrações",mdn:"Browser APIs"},w={"browser-dependent":"Dependente do navegador",experimental:"Experimental",integration:"Integração externa",stable:"Estável"},p={lit:"Lit",react:"React",svelte:"Svelte",vanilla:"Vanilla",vue:"Vue"},$=[{id:"meu-componente-react",displayName:"MeuComponenteReact",exportName:"MeuComponenteReactElement",tag:"mozg-meu-componente-react",framework:"react",group:"framework",status:"stable",sourcePath:"src/react/MeuComponenteReact.tsx",description:"Wrapper em React para demonstrar slots, atributos reativos e composição via Custom Elements.",attributes:[{name:"titulo",type:"string",defaultValue:"Olá, React!",description:"Texto principal exibido no card."},{name:"nome",type:"string",defaultValue:"mundo",description:"Texto de apoio exibido no corpo do componente."}],slots:[{name:"default",description:"Área para conteúdo complementar vindo do host."}]},{id:"meu-componente-vue",displayName:"MeuComponenteVue",exportName:"MeuComponenteVueElement",tag:"mozg-meu-componente-vue",framework:"vue",group:"framework",status:"stable",sourcePath:"src/vue/MeuComponenteVue.vue",description:"Wrapper em Vue convertido para Custom Element com contador e evento de atualização.",attributes:[{name:"titulo",type:"string",defaultValue:"Olá, Vue!",description:"Título exibido no cabeçalho do componente."},{name:"nome",type:"string",defaultValue:"mundo",description:"Legenda descritiva do componente."}],events:[{name:"update:contador",description:"Emitido quando o contador interno é incrementado."}],slots:[{name:"default",description:"Conteúdo adicional projetado dentro do card."}]},{id:"meu-componente-svelte",displayName:"MeuComponenteSvelte",exportName:"MeuComponenteSvelte",tag:"mozg-meu-componente-svelte",framework:"svelte",group:"framework",status:"stable",sourcePath:"src/svelte/MeuComponente.svelte",description:"Wrapper em Svelte empacotado como Web Component com variantes visuais e eventos compostos.",attributes:[{name:"titulo",type:"string",defaultValue:"Olá, Svelte!",description:"Texto principal exibido no topo do componente."},{name:"nome",type:"string",defaultValue:"mundo",description:"Legenda de apoio usada na área de contexto."},{name:"variant",type:"aurora | sunset | graphite",defaultValue:"aurora",description:"Variação visual do card."}],events:[{name:"counter-change",description:"Emitido sempre que o contador interno é alterado."}]},{id:"meu-componente-lit",displayName:"MeuComponenteLit",exportName:"MeuComponenteLit",tag:"mozg-meu-componente-lit",framework:"lit",group:"framework",status:"stable",sourcePath:"src/lit/MeuComponenteLit.ts",description:"Componente Lit com temas, estado interno e eventos para servir de referência de implementação.",attributes:[{name:"nome",type:"string",defaultValue:"Lit!",description:"Texto exibido no cabeçalho."},{name:"tema",type:"light | dark",defaultValue:"light",description:"Tema visual do componente."}],events:[{name:"contador-change",description:"Emitido quando o contador interno muda."}],slots:[{name:"default",description:"Conteúdo opcional anexado abaixo do bloco principal."}]}],T=[{id:"animate",displayName:"Animate",exportName:"Animate",tag:"mozg-animate",framework:"vanilla",group:"core",status:"stable",sourcePath:"src/vanilla/core/Animate.ts"},{id:"confetti",displayName:"Confetti",exportName:"Confetti",tag:"mozg-confetti",framework:"vanilla",group:"core",status:"stable",sourcePath:"src/vanilla/core/Confetti.ts"},{id:"container",displayName:"Container",exportName:"Container",tag:"mozg-container",framework:"vanilla",group:"core",status:"stable",sourcePath:"src/vanilla/core/Container.ts",slots:[{name:"title",description:"Título projetado no cabeçalho do container."},{name:"body",description:"Corpo de conteúdo projetado na área principal."}]},{id:"core",displayName:"Core",exportName:"Core",tag:"mozg-core",framework:"vanilla",group:"core",status:"stable",sourcePath:"src/vanilla/core/Core.ts",attributes:[{name:"mode",type:"string",defaultValue:"demo",description:"Modo textual usado no cabeçalho do componente."}]},{id:"linkedin-badges",displayName:"LinkedinBadges",exportName:"LinkedinBadges",tag:"mozg-linkedin-badges",framework:"vanilla",group:"core",status:"stable",sourcePath:"src/vanilla/core/LinkedinBadges.ts"},{id:"meu-componente-vanilla",displayName:"MeuComponenteVanilla",exportName:"MeuComponenteVanilla",tag:"mozg-meu-componente-vanilla",framework:"vanilla",group:"core",status:"stable",sourcePath:"src/vanilla/core/MeuComponenteVanilla.ts",attributes:[{name:"nome",type:"string",defaultValue:"Vanilla!",description:"Legenda principal do exemplo."}],slots:[{name:"default",description:"Conteúdo complementar anexado abaixo do texto."}]},{id:"my-toggle-button",displayName:"MyToggleButton",exportName:"MyToggleButton",tag:"mozg-my-toggle-button",framework:"vanilla",group:"core",status:"stable",sourcePath:"src/vanilla/core/MyToggleButton.ts"},{id:"my-vitepress",displayName:"MyVitepress",exportName:"MyVitepress",tag:"mozg-my-vitepress",framework:"vanilla",group:"core",status:"stable",sourcePath:"src/vanilla/core/MyVitepress.ts"},{id:"pwa",displayName:"Pwa",exportName:"Pwa",tag:"mozg-pwa",framework:"vanilla",group:"core",status:"stable",sourcePath:"src/vanilla/core/Pwa.ts"},{id:"random-elements",displayName:"RandomElements",exportName:"RandomElements",tag:"mozg-random-elements",framework:"vanilla",group:"core",status:"stable",sourcePath:"src/vanilla/core/RandomElements.ts"},{id:"reader-json",displayName:"ReaderJson",exportName:"ReaderJson",tag:"mozg-reader-json",framework:"vanilla",group:"core",status:"stable",sourcePath:"src/vanilla/core/ReaderJson.ts"},{id:"sender-atributes",displayName:"SenderAtributes",exportName:"SenderAtributes",tag:"mozg-sender-atributes",framework:"vanilla",group:"core",status:"stable",sourcePath:"src/vanilla/core/SenderReceiverAtributes.ts",events:[{name:"custom-message",description:"Evento disparado para demonstrar comunicação por atributos."}]},{id:"receiver-atributes",displayName:"ReceiverAtributes",exportName:"ReceiverAtributes",tag:"mozg-receiver-atributes",framework:"vanilla",group:"core",status:"stable",sourcePath:"src/vanilla/core/SenderReceiverAtributes.ts"},{id:"sender-event-bus",displayName:"SenderEventBus",exportName:"SenderEventBus",tag:"mozg-sender-event-bus",framework:"vanilla",group:"core",status:"stable",sourcePath:"src/vanilla/core/SenderReceiverEventBus.ts"},{id:"receiver-event-bus",displayName:"ReceiverEventBus",exportName:"ReceiverEventBus",tag:"mozg-receiver-event-bus",framework:"vanilla",group:"core",status:"stable",sourcePath:"src/vanilla/core/SenderReceiverEventBus.ts"},{id:"web-master",displayName:"WebMaster",exportName:"WebMaster",tag:"mozg-web-master",framework:"vanilla",group:"core",status:"stable",sourcePath:"src/vanilla/core/WebMaster.ts"}],A=[{id:"a2hs",displayName:"A2hs",exportName:"A2hs",tag:"mozg-a2hs",framework:"vanilla",group:"mdn",status:"browser-dependent",sourcePath:"src/vanilla/mdn/A2hs.ts"},{id:"change-favicon",displayName:"ChangeFavicon",exportName:"ChangeFavicon",tag:"mozg-change-favicon",framework:"vanilla",group:"mdn",status:"browser-dependent",sourcePath:"src/vanilla/mdn/ChangeFavicon.ts"},{id:"fullscreen",displayName:"Fullscreen",exportName:"Fullscreen",tag:"mozg-fullscreen",framework:"vanilla",group:"mdn",status:"browser-dependent",sourcePath:"src/vanilla/mdn/Fullscreen.ts"},{id:"monitor-connectivity",displayName:"MonitorConnectivity",exportName:"MonitorConnectivity",tag:"mozg-monitor-connectivity",framework:"vanilla",group:"mdn",status:"browser-dependent",sourcePath:"src/vanilla/mdn/MonitorConnectivity.ts"},{id:"popover-api",displayName:"PopoverApi",exportName:"PopoverApi",tag:"mozg-popover-api",framework:"vanilla",group:"mdn",status:"browser-dependent",sourcePath:"src/vanilla/mdn/PopoverApi.ts"},{id:"popover-popup",displayName:"PopoverPopup",exportName:"PopoverPopup",tag:"mozg-popover-popup",framework:"vanilla",group:"mdn",status:"browser-dependent",sourcePath:"src/vanilla/mdn/PopoverPopup.ts",slots:[{name:"default",description:"Conteúdo que será mostrado dentro do popup."}]},{id:"service-worker",displayName:"ServiceWorker",exportName:"ServiceWorker",tag:"mozg-service-worker",framework:"vanilla",group:"mdn",status:"browser-dependent",sourcePath:"src/vanilla/mdn/ServiceWorker.ts"},{id:"web-share",displayName:"WebShare",exportName:"WebShare",tag:"mozg-web-share",framework:"vanilla",group:"mdn",status:"browser-dependent",sourcePath:"src/vanilla/mdn/WebShare.ts"},{id:"web-worker",displayName:"WebWorker",exportName:"WebWorker",tag:"mozg-web-worker",framework:"vanilla",group:"mdn",status:"browser-dependent",sourcePath:"src/vanilla/mdn/WebWorker.ts"},{id:"window-management-api",displayName:"WindowManagementApi",exportName:"WindowManagementApi",tag:"mozg-window-management-api",framework:"vanilla",group:"mdn",status:"browser-dependent",sourcePath:"src/vanilla/mdn/WindowManagementApi.ts"}],O=[{id:"firebase-tools",displayName:"FirebaseTools",exportName:"FirebaseTools",tag:"mozg-firebase-tools",framework:"vanilla",group:"google",status:"integration",sourcePath:"src/vanilla/google/FirebaseTools.ts"},{id:"google-sign-in",displayName:"GoogleSignIn",exportName:"GoogleSignIn",tag:"mozg-google-sign-in",framework:"vanilla",group:"google",status:"integration",sourcePath:"src/vanilla/google/GoogleSignIn.ts"},{id:"signed-in",displayName:"SignedIn",exportName:"SignedIn",tag:"mozg-signed-in",framework:"vanilla",group:"google",status:"integration",sourcePath:"src/vanilla/google/SignedIn.ts"},{id:"signed-out",displayName:"SignedOut",exportName:"SignedOut",tag:"mozg-signed-out",framework:"vanilla",group:"google",status:"integration",sourcePath:"src/vanilla/google/SignedOut.ts"}],j=[{id:"attracted-elastic-balls",displayName:"AttractedElasticBalls",exportName:"AttractedElasticBalls",tag:"mozg-attracted-elastic-balls",framework:"vanilla",group:"codepen",status:"experimental",sourcePath:"src/vanilla/codepen/AttractedElasticBalls.ts"},{id:"balls-gravity",displayName:"BallsGravity",exportName:"BallsGravity",tag:"mozg-balls-gravity",framework:"vanilla",group:"codepen",status:"experimental",sourcePath:"src/vanilla/codepen/BallsGravity.ts"},{id:"card-tilted",displayName:"CardTilted",exportName:"CardTilted",tag:"mozg-card-tilted",framework:"vanilla",group:"codepen",status:"experimental",sourcePath:"src/vanilla/codepen/CardTilted.ts"},{id:"conditional-css-grid-template-areas",displayName:"ConditionalCssGridTemplateAreas",exportName:"ConditionalCssGridTemplateAreas",tag:"mozg-conditional-css-grid-template-areas",framework:"vanilla",group:"codepen",status:"experimental",sourcePath:"src/vanilla/codepen/ConditionalCssGridTemplateAreas.ts"},{id:"confetti-party",displayName:"ConfettiParty",exportName:"ConfettiParty",tag:"mozg-confetti-party",framework:"vanilla",group:"codepen",status:"experimental",sourcePath:"src/vanilla/codepen/ConfettiParty.ts"},{id:"custom-snackbar",displayName:"CustomSnackbar",exportName:"CustomSnackbar",tag:"mozg-custom-snackbar",framework:"vanilla",group:"codepen",status:"experimental",sourcePath:"src/vanilla/codepen/CustomSnackbar.ts"},{id:"dock-gal",displayName:"DockGal",exportName:"DockGal",tag:"mozg-dock-gal",framework:"vanilla",group:"codepen",status:"experimental",sourcePath:"src/vanilla/codepen/DockGal.ts"},{id:"dom-structure-diagram",displayName:"DomStructureDiagram",exportName:"DomStructureDiagram",tag:"mozg-dom-structure-diagram",framework:"vanilla",group:"codepen",status:"experimental",sourcePath:"src/vanilla/codepen/DomStructureDiagram.ts"},{id:"embers",displayName:"Embers",exportName:"Embers",tag:"mozg-embers",framework:"vanilla",group:"codepen",status:"experimental",sourcePath:"src/vanilla/codepen/Embers.ts"},{id:"film-grain",displayName:"FilmGrain",exportName:"FilmGrain",tag:"mozg-film-grain",framework:"vanilla",group:"codepen",status:"experimental",sourcePath:"src/vanilla/codepen/FilmGrain.ts"},{id:"filter-image-gradient-backgrounds",displayName:"FilterImageGradientBackgrounds",exportName:"FilterImageGradientBackgrounds",tag:"mozg-filter-image-gradient-backgrounds",framework:"vanilla",group:"codepen",status:"experimental",sourcePath:"src/vanilla/codepen/FilterImageGradientBackgrounds.ts"},{id:"glsl-shader-eyeball",displayName:"GlslShaderEyeball",exportName:"GlslShaderEyeball",tag:"mozg-glsl-shader-eyeball",framework:"vanilla",group:"codepen",status:"experimental",sourcePath:"src/vanilla/codepen/GlslShaderEyeball.ts"},{id:"inner-glow-card-animation",displayName:"InnerGlowCardAnimation",exportName:"InnerGlowCardAnimation",tag:"mozg-inner-glow-card-animation",framework:"vanilla",group:"codepen",status:"experimental",sourcePath:"src/vanilla/codepen/InnerGlowCardAnimation.ts"},{id:"interactive-grid-effect",displayName:"InteractiveGridEffect",exportName:"InteractiveGridEffect",tag:"mozg-interactive-grid-effect",framework:"vanilla",group:"codepen",status:"experimental",sourcePath:"src/vanilla/codepen/InteractiveGridEffect.ts"},{id:"interactive-hover-spotlight-smooth-follow-effect",displayName:"InteractiveHoverSpotlightSmoothFollowEffect",exportName:"InteractiveHoverSpotlightSmoothFollowEffect",tag:"mozg-interactive-hover-spotlight-smooth-follow-effect",framework:"vanilla",group:"codepen",status:"experimental",sourcePath:"src/vanilla/codepen/InteractiveHoverSpotlightSmoothFollowEffect.ts"},{id:"interactive-vortex",displayName:"InteractiveVortex",exportName:"InteractiveVortex",tag:"mozg-interactive-vortex",framework:"vanilla",group:"codepen",status:"experimental",sourcePath:"src/vanilla/codepen/InteractiveVortex.ts"},{id:"macosx-dock",displayName:"MacosxDock",exportName:"MacosxDock",tag:"mozg-macosx-dock",framework:"vanilla",group:"codepen",status:"experimental",sourcePath:"src/vanilla/codepen/MacosxDock.ts"},{id:"photorealistic-pure-css-mobile-phone",displayName:"PhotorealisticPureCssMobilePhone",exportName:"PhotorealisticPureCssMobilePhone",tag:"mozg-photorealistic-pure-css-mobile-phone",framework:"vanilla",group:"codepen",status:"experimental",sourcePath:"src/vanilla/codepen/PhotorealisticPureCssMobilePhone.ts"},{id:"shadertoy-threejs",displayName:"ShadertoyThreejs",exportName:"ShadertoyThreejs",tag:"mozg-shadertoy-threejs",framework:"vanilla",group:"codepen",status:"experimental",sourcePath:"src/vanilla/codepen/ShadertoyThreejs.ts"},{id:"simple-css-waves",displayName:"SimpleCssWaves",exportName:"SimpleCssWaves",tag:"mozg-simple-css-waves",framework:"vanilla",group:"codepen",status:"experimental",sourcePath:"src/vanilla/codepen/SimpleCssWaves.ts"},{id:"snowy-procedural-landscape",displayName:"SnowyProceduralLandscape",exportName:"SnowyProceduralLandscape",tag:"mozg-snowy-procedural-landscape",framework:"vanilla",group:"codepen",status:"experimental",sourcePath:"src/vanilla/codepen/SnowyProceduralLandscape.ts"},{id:"sphere-packing2",displayName:"SpherePacking2",exportName:"SpherePacking2",tag:"mozg-sphere-packing2",framework:"vanilla",group:"codepen",status:"experimental",sourcePath:"src/vanilla/codepen/SpherePacking2.ts"},{id:"spinner-pop-effect",displayName:"SpinnerPopEffect",exportName:"SpinnerPopEffect",tag:"mozg-spinner-pop-effect",framework:"vanilla",group:"codepen",status:"experimental",sourcePath:"src/vanilla/codepen/SpinnerPopEffect.ts"},{id:"squircle",displayName:"Squircle",exportName:"Squircle",tag:"mozg-squircle",framework:"vanilla",group:"codepen",status:"experimental",sourcePath:"src/vanilla/codepen/Squircle.ts"},{id:"threejs-sphere",displayName:"ThreejsSphere",exportName:"ThreejsSphere",tag:"mozg-threejs-sphere",framework:"vanilla",group:"codepen",status:"experimental",sourcePath:"src/vanilla/codepen/ThreejsSphere.ts"},{id:"threejs-water",displayName:"ThreejsWater",exportName:"ThreejsWater",tag:"mozg-threejs-water",framework:"vanilla",group:"codepen",status:"experimental",sourcePath:"src/vanilla/codepen/ThreejsWater.ts"},{id:"web-gl-mouse-controlled-snow",displayName:"WebGlMouseControlledSnow",exportName:"WebGlMouseControlledSnow",tag:"mozg-web-gl-mouse-controlled-snow",framework:"vanilla",group:"codepen",status:"experimental",sourcePath:"src/vanilla/codepen/WebGlMouseControlledSnow.ts"}],G=[{id:"binance",displayName:"Binance",exportName:"Binance",tag:"mozg-binance",framework:"vanilla",group:"integration",status:"integration",sourcePath:"src/vanilla/Binance.ts",description:"Componente de integração com visualização e utilitários baseados em dados de mercado."}],b=[...$,...T,...A,...O,...j,...G],W={codepen:"Experimento visual e interativo para showcases e provas de conceito.",core:"Componente base da biblioteca para composição, eventos ou utilidades estruturais.",framework:"Wrapper de framework para consumo como Web Component sem perder ergonomia.",google:"Componente integrado a serviços Google/Firebase e dependente de credenciais válidas.",integration:"Integração orientada a dados externos com foco em cenários reais de produto.",mdn:"Demonstração de API moderna do navegador e seus comportamentos práticos."};function C(e){return Object.fromEntries(e.map(a=>[a,0]))}function I(e){return e.description??`${e.displayName}: ${W[e.group]}`}function S(e=b){const a=C(Object.keys(p)),t=C(Object.keys(v)),o=C(Object.keys(w));return e.forEach(s=>{a[s.framework]+=1,t[s.group]+=1,o[s.status]+=1}),{total:e.length,byFramework:a,byGroup:t,byStatus:o}}function R(e=b){const a=Object.fromEntries(Object.keys(p).map(t=>[t,[]]));return e.forEach(t=>{a[t.framework].push(t.displayName)}),Object.values(a).forEach(t=>t.sort((o,s)=>o.localeCompare(s))),a}function F(e=b){const a=Object.fromEntries(Object.keys(v).map(t=>[t,[]]));return e.forEach(t=>{a[t.group].push(t.displayName)}),Object.values(a).forEach(t=>t.sort((o,s)=>o.localeCompare(s))),a}function ae(e){return{name:"Mozg Web Components",version:e,description:"Biblioteca auditável de Web Components com wrappers multiplataforma, demos de APIs do navegador e showcases visuais.",frameworks:Object.values(p).sort((a,t)=>a.localeCompare(t)),summary:S(),components:R(),groups:F(),registry:b}}const L={codepen:{tone:"night",minHeight:"32rem"},core:{tone:"paper",minHeight:"24rem",maxWidth:"48rem"},framework:{tone:"mesh",minHeight:"26rem",maxWidth:"52rem"},google:{tone:"paper",minHeight:"34rem",maxWidth:"62rem"},integration:{tone:"contrast",minHeight:"40rem"},mdn:{tone:"paper",minHeight:"26rem",maxWidth:"56rem"}},B={codepen:"Demos visuais priorizam impacto e podem exigir mais GPU ou isolamento no canvas.",google:"Fluxos completos dependem de credenciais Firebase válidas e permissões externas.",mdn:"A experiência depende do nível de suporte do navegador para a API demonstrada.",integration:"Integrações de dados merecem validação de rede, desempenho e comportamento em cenários reais."},g=`
  <div class="story-slot-card">
    <strong>Slot ativo</strong>
    <p>Conteúdo injetado pelo Storybook para validar composição e extensibilidade.</p>
  </div>
`,V={"meu-componente-react":{presets:[{id:"default",label:"Padrão",attributes:{titulo:"Bem-vindo ao React",nome:"Catálogo Mozg"}},{id:"slot",label:"Com Slot",attributes:{titulo:"Composição React",nome:"Conteúdo projetado"},slot:g}]},"meu-componente-vue":{presets:[{id:"default",label:"Padrão",attributes:{titulo:"Olá, Vue!",nome:"Catálogo Mozg"}},{id:"slot",label:"Com Slot",attributes:{titulo:"Vue + Slots",nome:"Interação dirigida"},slot:g}]},"meu-componente-svelte":{presets:[{id:"aurora",label:"Aurora",attributes:{titulo:"Svelte Aurora",nome:"Biblioteca auditável",variant:"aurora","contador-inicial":4}},{id:"graphite",label:"Graphite",attributes:{titulo:"Svelte Graphite",nome:"Preset alternativo",variant:"graphite","contador-inicial":9}}]},"meu-componente-lit":{presets:[{id:"light",label:"Tema Claro",attributes:{nome:"Lit Component",tema:"light"},slot:g},{id:"dark",label:"Tema Escuro",attributes:{nome:"Lit After Hours",tema:"dark"},canvas:{tone:"contrast"},slot:g}]},container:{presets:[{id:"slots",label:"Slots Nomeados",slot:`
          <span slot="title">Container Mozg</span>
          <span slot="body">Um exemplo simples para validar projeção de conteúdo e ação interna.</span>
        `}]},core:{presets:[{id:"demo",label:"Modo Demo",attributes:{mode:"demo"}},{id:"audit",label:"Modo Audit",attributes:{mode:"audit"}}]},"meu-componente-vanilla":{presets:[{id:"default",label:"Padrão",attributes:{nome:"Vanilla Showcase"}},{id:"slot",label:"Com Slot",attributes:{nome:"Composição via host"},slot:g}]},"sender-atributes":{note:"O preset acopla automaticamente o receptor para demonstrar o fluxo de mensagem.",presets:[{id:"paired",label:"Com Receptor",onMount:(e,a)=>{const t=document.createElement("mozg-receiver-atributes");a.appendChild(t)}}]},"sender-event-bus":{note:"O preset acopla automaticamente o receptor para demonstrar o fluxo no EventBus.",presets:[{id:"paired",label:"Com Receptor",onMount:(e,a)=>{const t=document.createElement("mozg-receiver-event-bus");a.appendChild(t)}}]},"popover-api":{note:"Esse componente expõe sua experiência principal via método imperativo e o Storybook adiciona um gatilho de demo.",presets:[{id:"toast",label:"Toast Demo",onMount:(e,a)=>{const t=document.createElement("button");return t.className="story-action-button",t.textContent="Disparar toast",t.addEventListener("click",()=>{e.showToast?.()}),a.prepend(t),queueMicrotask(()=>{e.showToast?.()}),()=>{document.querySelectorAll("article.toast").forEach(o=>o.remove())}}}]},"popover-popup":{presets:[{id:"default",label:"Conteúdo Rico",slot:`
          <article class="story-slot-card">
            <strong>Popup Mozg</strong>
            <p>Use o botão para abrir o conteúdo projetado dentro do dialog.</p>
          </article>
        `}]},"firebase-tools":{note:"O componente troca o conteúdo interno com base no estado de autenticação observado pelo Firebase."},"signed-in":{support:"Esse fluxo depende de autenticação ativa. Em Storybook, o foco é validar a composição do estado conectado."},"signed-out":{support:"Esse fluxo depende de autenticação. Em Storybook, o objetivo é revisar o estado visual de entrada."},"card-tilted":{presets:[{id:"content",label:"Com Conteúdo",attributes:{title:"Mozg Card"},slot:`
          <div class="story-slot-card">
            <strong>Card inclinado</strong>
            <p>Preset com conteúdo simples para validar profundidade, slots e hover.</p>
          </div>
        `}]},binance:{note:"Integração visualmente mais pesada. O canvas foi mantido amplo para facilitar inspeção.",canvas:{tone:"contrast",minHeight:"44rem"}}};function D(e){return{id:"default",label:"Padrão",description:`Preset base para ${e.displayName}.`}}const _=b.map(e=>{const a=V[e.id],t={...L[e.group],...a?.canvas};return{...e,description:I(e),support:a?.support??B[e.group],note:a?.note,canvas:t,presets:a?.presets&&a.presets.length>0?a.presets:[D(e)]}});function te(e={}){return _.filter(a=>!(e.group&&a.group!==e.group||e.framework&&a.framework!==e.framework)).sort((a,t)=>a.displayName.localeCompare(t.displayName))}function H(e,a){return a&&e.some(t=>t.id===a)?a:e[0]?.id??""}function q(e){return e.presets[0]?.id??"default"}const U=["framework","core","mdn","google","codepen","integration"],Y=["stable","browser-dependent","integration","experimental"],J=["vanilla","react","vue","svelte","lit"];function r(e){return e.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function P(e,a){if(!a||a.length===0)return`
      <section class="catalog-section">
        <h3>${r(e)}</h3>
        <p class="catalog-muted">Sem itens documentados para esta categoria.</p>
      </section>
    `;const t=a.map(o=>{const s=o.type?`<span class="catalog-inline-meta">${r(o.type)}</span>`:"",n=o.defaultValue?`<span class="catalog-inline-meta">default: ${r(o.defaultValue)}</span>`:"";return`
        <li>
          <strong>${r(o.name)}</strong>
          ${s}
          ${n}
          <p>${r(o.description)}</p>
        </li>
      `}).join("");return`
    <section class="catalog-section">
      <h3>${r(e)}</h3>
      <ul class="catalog-doc-list">${t}</ul>
    </section>
  `}function E(e,a){const t=S(e),o=[{label:"Componentes",value:String(t.total)},{label:"Grupos",value:String(Object.values(t.byGroup).filter(s=>s>0).length)},{label:"Frameworks",value:String(Object.values(t.byFramework).filter(s=>s>0).length)}];return`
    <header class="catalog-hero">
      <div>
        <p class="catalog-eyebrow">${r(a.eyebrow)}</p>
        <h1>${r(a.title)}</h1>
        <p class="catalog-lead">${r(a.description)}</p>
      </div>
      <div class="catalog-hero-stats">
        ${o.map(s=>`
              <article class="catalog-stat-card">
                <span>${r(s.label)}</span>
                <strong>${r(s.value)}</strong>
              </article>
            `).join("")}
      </div>
    </header>
  `}function K(e){const a=S(e),t=U.filter(n=>a.byGroup[n]>0).map(n=>`
        <article class="catalog-card">
          <span class="catalog-chip">${r(v[n])}</span>
          <strong>${a.byGroup[n]}</strong>
          <p>componentes mapeados nesta família.</p>
        </article>
      `).join(""),o=J.filter(n=>a.byFramework[n]>0).map(n=>`
        <article class="catalog-card">
          <span class="catalog-chip">${r(p[n])}</span>
          <strong>${a.byFramework[n]}</strong>
          <p>implementações ou wrappers ativos.</p>
        </article>
      `).join(""),s=Y.filter(n=>a.byStatus[n]>0).map(n=>`
        <article class="catalog-card">
          <span class="catalog-chip">${r(w[n])}</span>
          <strong>${a.byStatus[n]}</strong>
          <p>entradas classificadas com esse perfil operacional.</p>
        </article>
      `).join("");return`
    <section class="catalog-grid-section">
      <div>
        <h2>Famílias</h2>
        <div class="catalog-grid">${t}</div>
      </div>
      <div>
        <h2>Frameworks</h2>
        <div class="catalog-grid">${o}</div>
      </div>
      <div>
        <h2>Status</h2>
        <div class="catalog-grid">${s}</div>
      </div>
    </section>
  `}function oe(e,a){const t=document.createElement("section");return t.className="catalog-page",t.innerHTML=`
    ${E(e,a)}
    ${K(e)}
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
  `,t}function re(e,a){const t=document.createElement("section");t.className="catalog-page";const o=[...e].sort((s,n)=>s.displayName.localeCompare(n.displayName)).map(s=>`
        <tr>
          <td>${r(s.displayName)}</td>
          <td>${r(v[s.group])}</td>
          <td>${r(p[s.framework])}</td>
          <td>${r(w[s.status])}</td>
          <td><code>${r(s.tag)}</code></td>
          <td><code>${r(s.sourcePath)}</code></td>
        </tr>
      `).join("");return t.innerHTML=`
    ${E(e,a)}
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
  `,t}function Q(e,a){Object.entries(a.attributes??{}).forEach(([t,o])=>{if(o===void 0||o===!1||o===null){e.removeAttribute(t);return}if(o===!0){e.setAttribute(t,"true");return}e.setAttribute(t,String(o))})}function X(e,a){Object.entries(a.properties??{}).forEach(([t,o])=>{e[t]=o})}function Z(e,a){const t=`<${e.tag}></${e.tag}>`,o=e.note?`<p class="catalog-support">${r(e.note)}</p>`:"",s=e.support?`<p class="catalog-support">${r(e.support)}</p>`:"",n=a.description?`<p class="catalog-support">${r(a.description)}</p>`:"";return`
    <article class="catalog-card catalog-card--sticky">
      <div class="catalog-meta-header">
        <div>
          <span class="catalog-chip">${r(v[e.group])}</span>
          <h2>${r(e.displayName)}</h2>
        </div>
        <span class="catalog-status" data-status="${r(e.status)}">
          ${r(w[e.status])}
        </span>
      </div>
      <p>${r(e.description)}</p>
      <dl class="catalog-definition-list">
        <div>
          <dt>Tag</dt>
          <dd><code>${r(e.tag)}</code></dd>
        </div>
        <div>
          <dt>Export</dt>
          <dd><code>${r(e.exportName)}</code></dd>
        </div>
        <div>
          <dt>Framework</dt>
          <dd>${r(p[e.framework])}</dd>
        </div>
        <div>
          <dt>Origem</dt>
          <dd><code>${r(e.sourcePath)}</code></dd>
        </div>
        <div>
          <dt>Snippet</dt>
          <dd><code>${r(t)}</code></dd>
        </div>
        <div>
          <dt>Preset</dt>
          <dd>${r(a.label)}</dd>
        </div>
      </dl>
      ${n}
      ${o}
      ${s}
      ${P("Atributos",e.attributes)}
      ${P("Eventos",e.events)}
      ${P("Slots",e.slots)}
    </article>
  `}function ee(e,a){return{...e.canvas,...a.canvas}}function se(e,a,t={}){const o=document.createElement("section");o.className="catalog-page";const s=H(e,t.component);o.innerHTML=`
    ${E(e,a)}
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
  `;const n=o.querySelector(".catalog-sidebar"),m=o.querySelector('[data-control="component"]'),d=o.querySelector('[data-control="preset"]'),N=o.querySelector(".catalog-canvas"),h=o.querySelector(".catalog-canvas__inner");if(!n||!m||!d||!N||!h)return o;m.innerHTML=e.map(i=>`
        <option value="${r(i.id)}">${r(i.displayName)}</option>
      `).join(""),m.value=s;let x;const z=i=>{const l=d.value;d.innerHTML=i.presets.map(c=>`
          <option value="${r(c.id)}">${r(c.label)}</option>
        `).join(""),d.value=i.presets.some(c=>c.id===l)?l:q(i)},k=()=>{const i=e.find(y=>y.id===m.value)??e[0];if(!i)return;z(i);const l=i.presets.find(y=>y.id===d.value)??i.presets[0];if(!l)return;x?.(),x=void 0,n.innerHTML=Z(i,l),h.replaceChildren();const c=document.createElement("div");c.className="catalog-preview-frame";const f=ee(i,l);N.dataset.tone=f.tone,N.style.minHeight=f.minHeight,f.maxWidth?c.style.maxWidth=f.maxWidth:c.style.maxWidth="none";const u=document.createElement(i.tag);Q(u,l),X(u,l),l.slot&&(u.innerHTML=l.slot),c.appendChild(u),h.appendChild(c);const M=l.onMount?.(u,c,h);typeof M=="function"&&(x=M)};return m.addEventListener("change",k),d.addEventListener("change",k),z(e.find(i=>i.id===s)??e[0]),k(),o}export{re as a,ae as b,oe as c,te as g,se as r};
