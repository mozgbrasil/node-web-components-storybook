import{l as V}from"./helpers-DXE-UcnP.js";class R{constructor(e,t,r){this.next=r,r&&(r.prev=this),this.prev=t,t&&(t.next=this),this.data=e}}class M{constructor(){this._length=0}get head(){return this._head&&this._head.data}get tail(){return this._tail&&this._tail.data}get current(){return this._current&&this._current.data}get length(){return this._length}push(e){this._tail=new R(e,this._tail),this._length===0&&(this._head=this._tail,this._current=this._head,this._next=this._head),this._length++}pop(){var e=this._tail;if(this._length!==0)return this._length--,this._length===0?(this._head=this._tail=this._current=this._next=void 0,e.data):(this._tail=e.prev,this._tail.next=void 0,this._current===e&&(this._current=this._tail,this._next=void 0),e.data)}shift(){var e=this._head;if(this._length!==0)return this._length--,this._length===0?(this._head=this._tail=this._current=this._next=void 0,e.data):(this._head=this._head.next,this._current===e&&(this._current=this._head,this._next=this._current.next),e.data)}unshift(e){this._head=new R(e,void 0,this._head),this._length===0&&(this._tail=this._head,this._next=this._head),this._length++}unshiftCurrent(){var e=this._current;return e===this._head||this._length<2?e&&e.data:(e===this._tail?(this._tail=e.prev,this._tail.next=void 0,this._current=this._tail):(e.next.prev=e.prev,e.prev.next=e.next,this._current=e.prev),this._next=this._current.next,e.next=this._head,e.prev=void 0,this._head.prev=e,this._head=e,e.data)}removeCurrent(){var e=this._current;if(this._length!==0)return this._length--,this._length===0?(this._head=this._tail=this._current=this._next=void 0,e.data):(e===this._tail?(this._tail=e.prev,this._tail.next=void 0,this._current=this._tail):e===this._head?(this._head=e.next,this._head.prev=void 0,this._current=this._head):(e.next.prev=e.prev,e.prev.next=e.next,this._current=e.prev),this._next=this._current.next,e.data)}resetCursor(){return this._current=this._next=this._head,this}next(){var e=this._next;if(e!==void 0)return this._next=e.next,this._current=e,e.data}}class T extends M{constructor(e,t,r,s){if(super(),this.size=e,this.maintainHigh=t,this.maintainLow=r,this.maintainSum=s,this.totalPushed=0,this.periodHigh=0,this.periodLow=1/0,this.periodSum=0,!e||typeof e!="number")throw"Size required and should be a number.";this._push=this.push,this.push=function(a){this.add(a),this.totalPushed++}}add(e){this.length===this.size?(this.lastShift=this.shift(),this._push(e),this.maintainHigh&&this.lastShift==this.periodHigh&&this.calculatePeriodHigh(),this.maintainLow&&this.lastShift==this.periodLow&&this.calculatePeriodLow(),this.maintainSum&&(this.periodSum=this.periodSum-this.lastShift)):this._push(e),this.maintainHigh&&this.periodHigh<=e&&(this.periodHigh=e),this.maintainLow&&this.periodLow>=e&&(this.periodLow=e),this.maintainSum&&(this.periodSum=this.periodSum+e)}*iterator(){for(this.resetCursor();this.next();)yield this.current}calculatePeriodHigh(){for(this.resetCursor(),this.next()&&(this.periodHigh=this.current);this.next();)this.periodHigh<=this.current&&(this.periodHigh=this.current)}calculatePeriodLow(){for(this.resetCursor(),this.next()&&(this.periodLow=this.current);this.next();)this.periodLow>=this.current&&(this.periodLow=this.current)}}let O={};function j(l){return O[l]}function z(l){let e=j("precision");return e?parseFloat(l.toPrecision(e)):l}class g{constructor(e){this.format=e.format||z}static reverseInputs(e){e.reversedInput&&(e.values&&e.values.reverse(),e.open&&e.open.reverse(),e.high&&e.high.reverse(),e.low&&e.low.reverse(),e.close&&e.close.reverse(),e.volume&&e.volume.reverse(),e.timestamp&&e.timestamp.reverse())}getResult(){return this.result}}class x extends g{constructor(e){super(e),this.period=e.period,this.price=e.values;var t=(function*(r){var s=new M,a=0,n=1,o=yield,i;for(s.push(0);;)n<r?(n++,s.push(o),a=a+o):(a=a-s.shift()+o,i=a/r,s.push(o)),o=yield i});this.generator=t(this.period),this.generator.next(),this.result=[],this.price.forEach(r=>{var s=this.generator.next(r);s.value!==void 0&&this.result.push(this.format(s.value))})}nextValue(e){var t=this.generator.next(e).value;if(t!=null)return this.format(t)}}x.calculate=H;function H(l){g.reverseInputs(l);var e=new x(l).result;return l.reversedInput&&e.reverse(),g.reverseInputs(l),e}class S extends g{constructor(e){super(e);var t=e.period,r=e.values,s=2/(t+1),a;this.result=[],a=new x({period:t,values:[]});var n=(function*(){for(var o=yield,i;;)i!==void 0&&o!==void 0?(i=(o-i)*s+i,o=yield i):(o=yield,i=a.nextValue(o),i&&(o=yield i))});this.generator=n(),this.generator.next(),this.generator.next(),r.forEach(o=>{var i=this.generator.next(o);i.value!=null&&this.result.push(this.format(i.value))})}nextValue(e){var t=this.generator.next(e).value;if(t!=null)return this.format(t)}}S.calculate=q;function q(l){g.reverseInputs(l);var e=new S(l).result;return l.reversedInput&&e.reverse(),g.reverseInputs(l),e}class F extends g{constructor(e){super(e);var t=e.SimpleMAOscillator?x:S,r=e.SimpleMASignal?x:S,s=new t({period:e.fastPeriod,values:[],format:i=>i}),a=new t({period:e.slowPeriod,values:[],format:i=>i}),n=new r({period:e.signalPeriod,values:[],format:i=>i}),o=this.format;this.result=[],this.generator=(function*(){for(var i=0,c,d,h,m,p,u;;){if(i<e.slowPeriod){c=yield,p=s.nextValue(c),u=a.nextValue(c),i++;continue}p&&u&&(d=p-u,h=n.nextValue(d)),m=d-h,c=yield{MACD:o(d),signal:h?o(h):void 0,histogram:isNaN(m)?void 0:o(m)},p=s.nextValue(c),u=a.nextValue(c)}})(),this.generator.next(),e.values.forEach(i=>{var c=this.generator.next(i);c.value!=null&&this.result.push(c.value)})}nextValue(e){var t=this.generator.next(e).value;return t}}F.calculate=G;function G(l){g.reverseInputs(l);var e=new F(l).result;return l.reversedInput&&e.reverse(),g.reverseInputs(l),e}class $ extends g{constructor(e){super(e);let t=e.values,r=e.period,s=this.format;this.generator=(function*(a){var n=yield,o=1,i=0,c,d,h=n;for(n=yield;;)d=n-h,d=d>0?d:0,d>0&&(i=i+d),o<a?o++:c===void 0?c=i/a:c=(c*(a-1)+d)/a,h=n,c=c!==void 0?s(c):void 0,n=yield c})(r),this.generator.next(),this.result=[],t.forEach(a=>{var n=this.generator.next(a);n.value!==void 0&&this.result.push(n.value)})}nextValue(e){return this.generator.next(e).value}}$.calculate=U;function U(l){g.reverseInputs(l);var e=new $(l).result;return l.reversedInput&&e.reverse(),g.reverseInputs(l),e}class D extends g{constructor(e){super(e);let t=e.values,r=e.period,s=this.format;this.generator=(function*(a){var n=yield,o=1,i=0,c,d,h=n;for(n=yield;;)d=h-n,d=d>0?d:0,d>0&&(i=i+d),o<a?o++:c===void 0?c=i/a:c=(c*(a-1)+d)/a,h=n,c=c!==void 0?s(c):void 0,n=yield c})(r),this.generator.next(),this.result=[],t.forEach(a=>{var n=this.generator.next(a);n.value!==void 0&&this.result.push(n.value)})}nextValue(e){return this.generator.next(e).value}}D.calculate=W;function W(l){g.reverseInputs(l);var e=new D(l).result;return l.reversedInput&&e.reverse(),g.reverseInputs(l),e}class E extends g{constructor(e){super(e);var t=e.period,r=e.values,s=new $({period:t,values:[]}),a=new D({period:t,values:[]});this.generator=(function*(n){for(var o=yield,i,c,d,h;;)i=s.nextValue(o),c=a.nextValue(o),i!==void 0&&c!==void 0&&(c===0?h=100:i===0?h=0:(d=i/c,d=isNaN(d)?0:d,h=parseFloat((100-100/(1+d)).toFixed(2)))),o=yield h})(),this.generator.next(),this.result=[],r.forEach(n=>{var o=this.generator.next(n);o.value!==void 0&&this.result.push(o.value)})}nextValue(e){return this.generator.next(e).value}}E.calculate=K;function K(l){g.reverseInputs(l);var e=new E(l).result;return l.reversedInput&&e.reverse(),g.reverseInputs(l),e}class L extends g{constructor(e){super(e);var t=e.period,r=e.values,s=new x({period:t,values:[],format:a=>a});this.result=[],this.generator=(function*(){var a,n,o=new T(t);a=yield;for(var i;;){if(o.push(a),n=s.nextValue(a),n){let c=0;for(let d of o.iterator())c=c+Math.pow(d-n,2);i=Math.sqrt(c/t)}a=yield i}})(),this.generator.next(),r.forEach(a=>{var n=this.generator.next(a);n.value!=null&&this.result.push(this.format(n.value))})}nextValue(e){var t=this.generator.next(e);if(t.value!=null)return this.format(t.value)}}L.calculate=Y;function Y(l){g.reverseInputs(l);var e=new L(l).result;return l.reversedInput&&e.reverse(),g.reverseInputs(l),e}class k extends g{constructor(e){super(e);var t=e.period,r=e.values,s=e.stdDev,a=this.format,n,o;this.result=[],n=new x({period:t,values:[],format:i=>i}),o=new L({period:t,values:[],format:i=>i}),this.generator=(function*(){var i,c,d,h;for(c=yield;;){if(d=n.nextValue(c),h=o.nextValue(c),d){let m=a(d),p=a(d+h*s),u=a(d-h*s),f=a((c-u)/(p-u));i={middle:m,upper:p,lower:u,pb:f}}c=yield i}})(),this.generator.next(),r.forEach(i=>{var c=this.generator.next(i);c.value!=null&&this.result.push(c.value)})}nextValue(e){return this.generator.next(e).value}}k.calculate=J;function J(l){g.reverseInputs(l);var e=new k(l).result;return l.reversedInput&&e.reverse(),g.reverseInputs(l),e}function B(l){if(!l||!Array.isArray(l)||l.length===0)return console.warn("Dados inválidos para análise técnica"),[];try{const e=l.map(y=>{const C=typeof y.c=="number"?y.c:parseFloat(y.c);if(isNaN(C))throw new Error("Preço de fechamento inválido encontrado");return C}),t=9,r=21,s=14,a=20,n=x.calculate({period:t,values:e})||[],o=x.calculate({period:r,values:e})||[],i=E.calculate({period:s,values:e})||[],c=F.calculate({fastPeriod:12,slowPeriod:26,signalPeriod:9,values:e})||[],d=k.calculate({period:a,stdDev:2,values:e})||[],h=l[l.length-1],m=parseFloat(h.c),p=i[i.length-1],u=c[c.length-1],f=d[d.length-1],v=[];let b="Neutro";typeof p=="number"&&(b=p>70?"Sobrecomprado":p<30?"Sobrevendido":"Neutro",v.push({indicator:"RSI",value:p.toFixed(2),signal:b,color:b==="Sobrecomprado"?"#ff4444":b==="Sobrevendido"?"#4CAF50":"#666666"}));let I="Neutro";u&&typeof u.MACD=="number"&&typeof u.signal=="number"?(I=u.MACD>u.signal?"Positivo":"Negativo",v.push({indicator:"MACD",value:`${u.MACD.toFixed(2)} | Signal: ${u.signal.toFixed(2)}`,signal:I,color:I==="Positivo"?"#4CAF50":"#ff4444"})):console.warn("Dados do MACD inválidos",u);let w="Dentro das bandas";f&&m&&(w=m>f.upper?"Sobrecomprado":m<f.lower?"Sobrevendido":"Dentro das bandas",v.push({indicator:"BB",value:`Preço: ${m.toFixed(2)} | Superior: ${f.upper.toFixed(2)} | Inferior: ${f.lower.toFixed(2)}`,signal:w,color:w==="Sobrecomprado"?"#ff4444":w==="Sobrevendido"?"#4CAF50":"#666666"}));let _="Neutro";if(n.length&&o.length){const y=n[n.length-1],C=o[o.length-1];_=y>C?"Alta":"Baixa",v.push({indicator:"SMA",value:`Curta: ${y.toFixed(2)} | Longa: ${C.toFixed(2)}`,signal:_,color:_==="Alta"?"#4CAF50":"#ff4444"})}const N=Z(b,I,w,_);return{analysis:v,recommendation:N}}catch(e){return console.error("Erro na análise técnica:",e),[]}}function Z(l,e,t,r){return l==="Sobrecomprado"||e==="Negativo"||t==="Sobrecomprado"||r==="Baixa"?"Vender ou esperar":l==="Sobrevendido"||e==="Positivo"||t==="Sobrevendido"||r==="Alta"?"Comprar":"Esperar"}window.analyzeCandles=B;class Q extends HTMLElement{static{this.tag="mozg-binance"}constructor(){super(),this.attachShadow({mode:"open"}),this.API_CONFIG={baseUrls:{coins:"https://www.binance.com/bapi/apex/v1/public/apex/marketing/symbol/list",chart:"https://www.binance.com/bapi/composite/v1/public/promo/cmc/cryptocurrency/detail/chart",kline:"https://www.binance.com/api/v3/uiKlines"},timeRanges:["1D","7D","1M","3M","1Y","YTD"],klineIntervals:["1d","1w"]},this.autoIterating=!1,this.currentIterationIndex=0,this.charts={},this.db=null;const e={css:[],js:[{src:"https://cdn.jsdelivr.net/npm/luxon@3.4.4",onload:()=>{},onerror:()=>{console.error("Falha ao carregar Luxon!")}},{src:"https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.js",onload:()=>{},onerror:()=>{console.error("Falha ao carregar Chart.js!")}},{src:"https://cdn.jsdelivr.net/npm/chartjs-adapter-luxon@1.3.1",onload:()=>{},onerror:()=>{console.error("Falha ao carregar Chartjs Adapter Luxon!")}},{src:"https://cdn.jsdelivr.net/npm/chartjs-chart-financial@0.2.0",onload:()=>{},onerror:()=>{console.error("Falha ao carregar Chartjs Chart Financial!")}},{src:"https://cdn.jsdelivr.net/npm/html2canvas",onload:()=>{},onerror:()=>{console.error("Falha ao carregar Html2Canvas!")}}]};V(this.shadowRoot,e).then(()=>{this.initDB().then(()=>{this.init()})}).catch(t=>{console.error("Erro ao carregar os recursos:",t)})}connectedCallback(){this.render()}disconnectedCallback(){for(;this.shadowRoot.firstChild;)this.shadowRoot.removeChild(this.shadowRoot.firstChild)}static get observedAttributes(){return["element"]}attributeChangedCallback(e,t,r){}adoptedCallback(){}render(){let e="";e+=`

`,e+=`

       `,e+=`

 <div>
<style>
  :root {
    --primary-color: #f44336;
    --bg-color: #f4f4f9;
    --card-bg: #f4f4f9;
    --success: #4caf50;
    --danger: #f44336;
    background: #4caf50;
  }

  // body {
  //   font-family: Arial, sans-serif;
  //   margin: 0;
  //   padding: 0;
  //   background-color: var(--bg-color);
  // }

  .content {
  }

  .crypto-table {
    width: 100%;
    border-collapse: collapse;
    background: var(--card-bg);
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .crypto-table th,
  .crypto-table td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  .crypto-table th {
    /* background-color: #f8f9fa; */
    cursor: pointer;
  }

  .crypto-table tr:hover {
    /* background-color: #f5f5f5; */
  }

  .charts-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    gap: 20px;
    padding: 20px 0;
  }

  .chart-card {
    background: var(--card-bg);
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .variation {
    text-align: center;
    margin-top: 10px;
    font-weight: bold;
  }

  .positive {
    color: var(--success);
  }

  .negative {
    color: var(--danger);
  }

  .controls {
    display: none;
    gap: 10px;
  }

  select {
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ddd;
  }

  .hidden {
    display: none;
  }

  .loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    font-size: 24px;
  }

  .countdown {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 20px;
    border-radius: 10px;
    font-size: 24px;
    z-index: 1001;
  }

  .analysis-info {
    font-family: Arial, sans-serif;
    font-size: 13px;
    line-height: 1.4;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 10px;
    padding: 10px;
    border-top: 1px solid #eee;
  }

  .analysis-info span {
    background-color: #f8f9fa;
    padding: 4px 8px;
    border-radius: 4px;
  }

  .floating-info {
    position: fixed;
    bottom: 10px;
    left: 10px;
    /* background-color: #fff; */
    padding: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
  }
</style>

<div class="content">

  <div class="controls">
    <select id="sortSelect">
    <option value="volume">Volume</option>
    <option value="rank">Rank</option>
    <option value="dayChange">Day Change</option>
    <option value="marketCap">Market Cap</option>
    <option value="price">Price</option>
    </select>
    <button id="captureBtn" class="btn btn-primary">Capture Screen</button>
    <button id="autoIterateToggle" class="btn btn-success">
      Play
    </button>
  </div>

  <div class="capture-area" id="capture-area">
    <table class="crypto-table">
      <thead>
        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>Symbol</th>
          <th>Price (USD)</th>
          <th>24h Change</th>
        </tr>
      </thead>
      <tbody id="cryptoList"></tbody>
    </table>

    <div id="chartsContainer" class="charts-container"></div>
  </div>
</div>

<div class="floating-info" id="floating-info"></div>
</div>
 `,this.shadowRoot.innerHTML=e}async initDB(){return new Promise((e,t)=>{const r=indexedDB.open("CryptoCacheDB",1);r.onupgradeneeded=s=>{const n=s.target.result;n.objectStoreNames.contains("cache")||n.createObjectStore("cache",{keyPath:"key"})},r.onsuccess=()=>{this.db=r.result,e()},r.onerror=()=>{t(r.error)}})}async setCache(e,t){if(!this.db)return;this.db.transaction("cache","readwrite").objectStore("cache").put({key:e,data:t,timestamp:Date.now()})}async getCache(e,t=432e5){return this.db?new Promise(r=>{const n=this.db.transaction("cache","readonly").objectStore("cache").get(e);n.onsuccess=()=>{const o=n.result;o&&Date.now()-o.timestamp<t?r(o.data):r(null)},n.onerror=()=>r(null)}):null}async fetchWithCache(e,t){const r=await this.getCache(t);if(r)return r;const a=await(await fetch(e)).json();return this.setCache(t,a),a}showLoading(){const e=document.createElement("div");e.className="loading-overlay",e.id="loading-overlay",e.innerHTML="<mozg-spinner-pop-effect></mozg-spinner-pop-effect>",this.shadowRoot.appendChild(e)}hideLoading(){const e=this.shadowRoot.getElementById("loading-overlay");e&&e.remove()}showCountdown(e){const t=document.createElement("div");t.className="countdown",t.id="countdown",this.shadowRoot.appendChild(t);const r=s=>{s>=0?(t.textContent=`${s} seconds`,setTimeout(()=>r(s-1),1e3)):t.remove()};r(e)}processAnalyzeCandles(e,t){const r=e(t),s=r.analysis,a=document.createElement("span");s.forEach(i=>{const c=document.createElement("span");c.style.marginRight="15px",c.style.display="inline-block",c.innerHTML=`
      <strong>${i.indicator}:</strong>
      <span style="color: ${i.color}">${i.value} (${i.signal})</span>
    `,a.appendChild(c)});const n=r.recommendation,o=document.createElement("span");return o.style.marginRight="15px",o.style.display="inline-block",o.style.backgroundColor="#007BFF",o.style.color="white",o.style.padding="10px",o.style.borderRadius="5px",o.innerHTML=`
    <strong>Recomendação:</strong>
    <span style="font-weight: bold; color: ${n==="Comprar"?"#4CAF50":n==="Vender ou esperar"?"#FF4444":"#666666"}">${n}</span>
  `,a.appendChild(o),{analysis:s,recommendation:n,elementRoot:a}}analyzeCandles(e){const t=e[e.length-1].c,r=e[0].o,s=(t-r)/r*100,a=[{indicator:"Price Change",value:`${s.toFixed(2)}%`,signal:s>=0?"Bullish":"Bearish",color:s>=0?"#4CAF50":"#FF4444"}],n=s>=0?"Buy":"Sell or Wait";return{analysis:a,recommendation:n}}async init(){this.setupEventListeners();const e=await this.fetchCoins();this.renderCoinsList(e)}setupEventListeners(){const e=this.shadowRoot.querySelector("#sortSelect");e?e.addEventListener("change",s=>{this.handleSort(s.target.value)}):console.error("Elemento não encontrado: #sortSelect");const t=this.shadowRoot.querySelector("#captureBtn");t?t.addEventListener("click",()=>this.captureScreen()):console.error("Elemento não encontrado: #captureBtn");const r=this.shadowRoot.querySelector("#autoIterateToggle");r?r.addEventListener("click",()=>this.toggleAutoIteration()):console.error("Elemento não encontrado: #autoIterateToggle")}async fetchCoins(){try{return(await this.fetchWithCache(this.API_CONFIG.baseUrls.coins,"coins")).data||[]}catch(e){return console.error("Error fetching coins:",e),[]}}renderCoinsList(e){const t=e.map(a=>`
            <tr class="coin-item" data-coin='${JSON.stringify(a)}'>
              <td>${a.rank}</td>
              <td>${a.fullName}</td>
              <td>${a.name}</td>
              <td>$${this.formatNumber(a.price)}</td>
              <td class="${a.dayChange>=0?"positive":"negative"}">
                ${a.dayChange.toFixed(2)}%
              </td>
            </tr>
          `).join(""),r=this.shadowRoot.querySelector("#cryptoList");r?r.innerHTML=t:console.error("Elemento não encontrado: #cryptoList"),this.shadowRoot.querySelectorAll(".coin-item").forEach(a=>{a.addEventListener("click",()=>{const n=JSON.parse(a.dataset.coin);this.loadCoinData(n)})})}async loadCoinData(e){this.showLoading();const t=this.shadowRoot.getElementById("chartsContainer");t.innerHTML="";try{const r=await Promise.all(this.API_CONFIG.timeRanges.map(a=>this.fetchChartData(e.cmcUniqueId,a))),s=await Promise.all(this.API_CONFIG.klineIntervals.map(a=>this.fetchKlineData(e.name,a,a==="1d"?60:1e3)));r.forEach((a,n)=>{const o=this.API_CONFIG.timeRanges[n];this.createChart(a,e,o)}),this.createCombinedChart(r,e),s.forEach((a,n)=>{const o=this.API_CONFIG.klineIntervals[n];this.createCandlestickChart(a,e,o)})}catch(r){console.error("Error loading coin data:",r)}finally{this.hideLoading()}}createCombinedChart(e,t){const r=`${t.name}-combined`,{wrapper:s,canvas:a}=this.createChartCard(r),o={type:"line",data:{datasets:this.API_CONFIG.timeRanges.map((i,c)=>{const h=e[c]?.data?.body?.data?.points||{},m=Object.entries(h).map(([p,u])=>({x:parseInt(p)*1e3,y:u.c?.[0]})).filter(p=>p.y!=null).sort((p,u)=>p.x-u.x);return{label:i,data:m,borderColor:this.getChartColor(i),backgroundColor:this.getChartColor(i).replace("1)","0.1)"),borderWidth:2,fill:!1,tension:.1}}).filter(i=>i.data.length>0)},options:this.getChartOptions(t,"All Intervals")};new Chart(a,o)}getChartOptions(e,t){return{responsive:!0,interaction:{mode:"nearest",axis:"x",intersect:!1},plugins:{chartAreaBorder:{borderColor:"red",borderWidth:2,borderDash:[5,5],borderDashOffset:2},title:{display:!0,text:`${e.fullName} - Todos os intervalos`,padding:{top:10,bottom:2},font:{size:16,weight:"bold"}},subtitle:{display:!0,text:`Valor Atual: ${e.price<.01?e.price.toFixed(8):e.price.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2})} USD`,padding:{bottom:10},font:{size:14,weight:"normal"}},legend:{display:!0},tooltip:{callbacks:{label:function(r){if(!r.raw||typeof r.raw.y>"u")return"";const s=r.raw.y;return s<.01?`${r.dataset.label}: ${s.toFixed(8)}`:`${r.dataset.label}: ${s.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2})}`}}}},scales:{x:{type:"time",time:{unit:"day",displayFormats:{day:"MMM dd",week:"MMM dd",month:"MMM yyyy"}},title:{display:!0,text:"Data"}},y:{title:{display:!0,text:"Preço (USD)"},ticks:{callback:function(r){return r<.01?r.toFixed(8):r.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2})}}}}}}async fetchChartData(e,t){try{const r=`${this.API_CONFIG.baseUrls.chart}?id=${e}&range=${t}`,s=`chart_${e}_${t}`;return await this.fetchWithCache(r,s)}catch(r){return console.error("Error fetching chart data:",r),null}}async fetchKlineData(e,t,r){try{const s=`${this.API_CONFIG.baseUrls.kline}?symbol=${e}USDT&interval=${t}&limit=${r}`,a=`chart_${e}_${t}`;return await this.fetchWithCache(s,a)}catch(s){return console.error("Error fetching kline data:",s),null}}calculateVariation(e){if(e.length<2)return 0;const t=e[0];return(e[e.length-1]-t)/t*100}createChart(e,t,r){const s=`${t.name}-${r}`,{wrapper:a,canvas:n,variationDiv:o}=this.createChartCard(s),i=e?.data?.body?.data?.points||{},c=Object.entries(i).map(([f])=>""),d=Object.entries(i).map(([,f])=>f.c&&f.c.length>0?f.c[0]:null).filter(f=>f!==null),h=this.calculateVariation(d),m=h>=0,p=m?"rgba(76, 175, 80, 1)":"rgba(244, 67, 54, 1)";o.textContent=`Variação: ${h.toFixed(2)}%`,o.className=`variation ${m?"positive":"negative"}`;const u={type:"line",data:{labels:c,datasets:[{label:`${t.name} Price (${r})`,data:d,borderColor:p,backgroundColor:p.replace("1)","0.1)"),borderWidth:2,fill:!0}]},options:{responsive:!0,maintainAspectRatio:!0,plugins:{chartAreaBorder:{borderColor:"red",borderWidth:2,borderDash:[5,5],borderDashOffset:2},title:{display:!0,text:t.fullName,padding:{top:10,bottom:2},font:{size:16,weight:"bold"}},subtitle:{display:!0,text:`Valor Atual: ${t.price<.01?t.price.toFixed(8):t.price.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2})} USD`,padding:{bottom:10},font:{size:14,weight:"normal"}},legend:{display:!0},tooltip:{callbacks:{label:function(f){const v=f.raw;return v<.01?`${f.dataset.label}: ${v.toFixed(8)}`:`${f.dataset.label}: ${v.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2})}`}}}},scales:{x:{grid:{display:!1}},y:{grid:{display:!1},ticks:{callback:function(f){return f<.01?f.toFixed(8):f.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2})}}}},animation:{duration:0}}};new Chart(n,u)}createCandlestickChart(e,t,r){const s=`${t.name}-${r}`,{wrapper:a,canvas:n,analysisDiv:o}=this.createChartCard(s),i=e.map(v=>({x:v[0],o:parseFloat(v[1]),h:parseFloat(v[2]),l:parseFloat(v[3]),c:parseFloat(v[4])})),{analysis:c,recommendation:d,elementRoot:h}=this.processAnalyzeCandles(B,i);n.setAttribute("data-coin","selfRecommendation");const{analysis:m,recommendation:p,elementRoot:u}=this.processAnalyzeCandles(this.analyzeCandles,i);o.appendChild(h),o.appendChild(u);const f={type:"candlestick",data:{datasets:[{label:`${t.name} - ${r}`,data:i}]},options:{responsive:!0,plugins:{title:{display:!0,text:`${t.fullName} - ${r}`}},scales:{x:{type:"time",time:{unit:r==="1d"?"day":"week"}}}}};new Chart(n,f)}createChartCard(e){const t=document.createElement("div");t.id=`chart-wrapper-${e}`,t.className="chart-wrapper";const r=document.createElement("canvas");r.id=`canvas-${e}`;const s=document.createElement("div");s.id=`variation-${e}`,s.className="variation";const a=document.createElement("div");s.id=`analysis-${e}`,a.className="analysis-info",a.style.padding="10px",a.style.marginTop="10px",a.style.borderTop="1px solid #eee",t.appendChild(r),t.appendChild(s),t.appendChild(a);const n=this.shadowRoot.getElementById("chartsContainer");return n&&n.appendChild(t),{wrapper:t,canvas:r,variationDiv:s,analysisDiv:a}}getCoin(){const e=this.shadowRoot.querySelectorAll(".coin-item"),t=e[this.currentIterationIndex],r=t.getAttribute("data-coin"),s=r?JSON.parse(r):{};return{coins:e,item:t,parseAttribute:s}}async captureScreen(e){const t=this.shadowRoot.getElementById("capture-area");try{if(!t)return;const s=(await html2canvas(t)).toDataURL("image/png"),n=new Date().toISOString().split("T")[0],{coins:o,item:i,parseAttribute:c}=this.getCoin();let h=`${e??c.name}`;const m=this.shadowRoot.getElementById(`canvas-${e}-1w`);if(m){const u=m.getAttribute("data-coin"),v=this.shadowRoot.getElementById(`canvas-${e}-1d`).getAttribute("data-coin");h=`${u}-${v}-${h}`}h=h.replace(/[^a-zA-Z0-9]/g,"_");const p=document.createElement("a");p.download=`${n}-${h}.png`,p.href=s,p.click()}catch(r){console.error("Erro ao capturar tela:",r)}}toggleAutoIteration(){const e=this.shadowRoot.getElementById("autoIterateToggle");this.autoIterating=!this.autoIterating,this.updateFloatingInfo(),this.autoIterating?(e&&(e.textContent="Pause",e.classList.replace("btn-success","btn-danger")),this.startAutoIteration()):(e&&(e.textContent="Start Auto-Iteration",e.classList.replace("btn-danger","btn-success")),this.iterationTimeout&&clearTimeout(this.iterationTimeout),this.showAllCoins())}updateFloatingInfo(){const e=this.shadowRoot.getElementById("floating-info"),t=this.currentIterationIndex,r=this.shadowRoot.querySelectorAll(".coin-item").length;e&&(this.autoIterating?e.innerText=`Iteração ${t+1} de ${r}`:e.innerText="")}async startAutoIteration(){if(!this.autoIterating)return;const{coins:e,item:t,parseAttribute:r}=this.getCoin();t.click();const s=r.name;this.currentIterationIndex>=e.length&&(this.currentIterationIndex=0),this.showOnlyCurrent(e),this.updateFloatingInfo(),await this.checkCharts(),await this.captureScreen(s),this.currentIterationIndex++,this.autoIterating&&(this.iterationTimeout=setTimeout(()=>{this.startAutoIteration()},5e3)),this.currentIterationIndex===e.length&&this.shadowRoot.getElementById("autoIterateToggle")?.click()}async checkCharts(){return await new Promise(e=>{const t=setInterval(()=>{this.shadowRoot.querySelectorAll("canvas").length>0&&(clearInterval(t),setTimeout(e,1e3))},100)}),await new Promise(e=>setTimeout(e,500))}showOnlyCurrent(e){e.forEach((t,r)=>{t.classList.toggle("active",r===this.currentIterationIndex),t.classList.toggle("hidden",r!==this.currentIterationIndex)})}showAllCoins(){this.shadowRoot.querySelectorAll(".coin-item").forEach(e=>{e.classList.remove("hidden"),e.classList.remove("active")})}formatNumber(e){return e<.01?e.toFixed(8):e.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})}getChartColor(e){return{"1D":"#FF6384","7D":"#36A2EB","1M":"#4BC0C0","3M":"#9966FF","1Y":"#FF9F40",YTD:"#92AB57"}[e]||"#000000"}handleSort(e){const t=this.shadowRoot.getElementById("cryptoList"),r=Array.from(t.getElementsByTagName("tr"));r.sort((s,a)=>{const n=s.cells[this.getSortColumnIndex(e)].textContent,o=a.cells[this.getSortColumnIndex(e)].textContent;return this.compareValues(n,o,e)}),t.innerHTML="",r.forEach(s=>t.appendChild(s))}getSortColumnIndex(e){return{rank:0,price:3,dayChange:4}[e]||0}compareValues(e,t,r){return r==="price"?parseFloat(t.replace(/[$,]/g,""))-parseFloat(e.replace(/[$,]/g,"")):r==="dayChange"?parseFloat(t)-parseFloat(e):parseInt(e)-parseInt(t)}}const P=Q;P.name;const A=P.tag,X={};customElements.get(A)||(customElements.define(A,P,X),customElements.get(A));
