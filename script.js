const screen = document.getElementById("screen");

const state = {
  sospetto: "",
  gatto: "",
  scenario: "",
  voto: "",
  noClicks: 0
};

const gifs = {
  intro: "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif",
  loading: "https://media.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.gif",
  happy: "https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif"
};

function badge(text) {
  return `<div class="badge">🐱 ${text}</div>`;
}

function renderIntro() {
  screen.innerHTML = `
    <div class="center">
      ${badge("portale ufficiale di cose importantissime")}
      <h1>test molto serio</h1>
      <p>Creato con metodi scientifici discutibili, gattini e una quantità sospetta di intenzioni.</p>

      <img class="cat-img" src="${gifs.intro}" alt="gattino al computer" />

      <button class="main-btn" onclick="renderQ1()">inizia il test</button>
      <p class="small">durata: meno di un trauma emotivo</p>
    </div>
  `;
}

function renderQ1() {
  screen.innerHTML = `
    <div>
      ${badge("domanda 1/4")}
      <h2>Quanto è sospetto che io ti abbia fatto un sito?</h2>
      <p>Il sistema accetta solo risposte che mi facciano sembrare meno strano.</p>

      <div class="choices">
        <button class="choice" onclick="saveQ1('molto sospetto')">molto sospetto</button>
        <button class="choice" onclick="saveQ1('abbastanza sospetto')">abbastanza sospetto</button>
        <button class="choice" onclick="saveQ1('ok però è carino')">ok però è carino</button>
      </div>
    </div>
  `;
}

function saveQ1(value) {
  state.sospetto = value;
  renderQ2();
}

function renderQ2() {
  screen.innerHTML = `
    <div>
      ${badge("domanda 2/4")}
      <h2>Scegli il gattino che rappresenta il tuo mood</h2>
      <p>Psicologia avanzata, ma con le orecchie.</p>

      <div class="cat-grid">
        <button class="cat-card" onclick="saveQ2('cute chaos')">
          <span class="emoji">🐱</span>
          <span class="card-title">cute chaos</span>
          <span class="card-text">sembra dolce, poi rovina i piani</span>
        </button>

        <button class="cat-card" onclick="saveQ2('principessa')">
          <span class="emoji">🎀</span>
          <span class="card-title">principessa</span>
          <span class="card-text">standard alti, come è giusto</span>
        </button>

        <button class="cat-card" onclick="saveQ2('minaccia affettuosa')">
          <span class="emoji">😼</span>
          <span class="card-title">minaccia affettuosa</span>
          <span class="card-text">ti prende in giro ma con affetto</span>
        </button>
      </div>
    </div>
  `;
}

function saveQ2(value) {
  state.gatto = value;
  renderQ3();
}

function renderQ3() {
  screen.innerHTML = `
    <div>
      ${badge("domanda 3/4")}
      <h2>Scegli una missione per venerdì sera</h2>
      <p>Attenzione: la risposta potrebbe influenzare il destino di due persone e una birra sotto casa.</p>

      <div class="choices">
        <button class="mission" onclick="saveQ3('birretta tattica')">
          <span class="mission-inner">
            <span class="mission-emoji">🍺</span>
            <span>
              <span class="mission-title">missione birretta tattica</span>
              <span class="mission-text">una birra sotto casa, molto casual, molto pericolosa per il mio autocontrollo</span>
            </span>
          </span>
        </button>

        <button class="mission" onclick="saveQ3('fingere casualità')">
          <span class="mission-inner">
            <span class="mission-emoji">🕵️‍♀️</span>
            <span>
              <span class="mission-title">missione facciamo finta sia casuale</span>
              <span class="mission-text">ci vediamo, diciamo “solo una cosa tranquilla”, poi ovviamente non è solo una cosa tranquilla</span>
            </span>
          </span>
        </button>

        <button class="mission" onclick="saveQ3('approvazione del gatto')">
          <span class="mission-inner">
            <span class="mission-emoji">🐈</span>
            <span>
              <span class="mission-title">missione gattino supervisore</span>
              <span class="mission-text">io propongo, tu giudichi, un gatto immaginario approva in silenzio</span>
            </span>
          </span>
        </button>
      </div>
    </div>
  `;
}

function saveQ3(value) {
  state.scenario = value;
  renderQ4();
}

function renderQ4() {
  screen.innerHTML = `
    <div>
      ${badge("domanda 4/4")}
      <h2>Quanto stai bene con me?</h2>
      <p>Scala ufficiale da 9 a 10. Ho tolto le risposte sbagliate per comodità.</p>

      <div class="scale-grid">
        <button class="scale-btn scale-light" onclick="saveQ4('9')">
          <span class="big-number">9</span>
          <span class="scale-text">bene, ma possiamo migliorare venerdì</span>
        </button>

        <button class="scale-btn scale-dark" onclick="saveQ4('10')">
          <span class="big-number">10</span>
          <span class="scale-text">risposta corretta e molto elegante</span>
        </button>
      </div>
    </div>
  `;
}

function saveQ4(value) {
  state.voto = value;
  renderLoading();
  setTimeout(renderResult, 1600);
}

function renderLoading() {
  screen.innerHTML = `
    <div class="center">
      ${badge("elaborazione dati")}
      <h2>Il sistema sta calcolando...</h2>
      <p class="loading-text">miao miao... controllo compatibilità... miao...</p>

      <img class="cat-img" src="${gifs.loading}" alt="gatto che lavora" />
    </div>
  `;
}

function renderResult() {
  state.noClicks = 0;

  screen.innerHTML = `
    <div class="center">
      ${badge("risultato ufficiale")}
      <h1>compatibilità 100%</h1>
      <p>Il test, totalmente imparziale e non manipolato, ha stabilito che venerdì sera dovremmo fare una cosa molto specifica.</p>

      <div class="summary-box">
        <p><strong>Sospetto rilevato:</strong> ${state.sospetto}</p>
        <p><strong>Mood felino:</strong> ${state.gatto}</p>
        <p><strong>Missione scelta:</strong> ${state.scenario}</p>
        <p><strong>Quanto stai bene con me:</strong> ${state.voto}/10</p>
      </div>

      <div class="final-box">
        <div class="badge">🍺 proposta finale</div>
        <h2 class="final-title">Birra sotto casa venerdì sera?</h2>
        <p>Rispondere con attenzione. Il pulsante “no” è tecnicamente instabile.</p>

        <div class="buttons-area" id="buttonsArea">
          <button class="yes-btn" id="yesBtn" onclick="renderYes()">sì</button>
          <button class="no-btn" id="noBtn" onclick="moveNo()">no</button>
        </div>

        <p class="no-counter" id="noCounter"></p>
      </div>
    </div>
  `;
}

function moveNo() {
  state.noClicks++;

  const noBtn = document.getElementById("noBtn");
  const yesBtn = document.getElementById("yesBtn");
  const noCounter = document.getElementById("noCounter");

  const positions = [
    { left: "62%", top: "12%", rotate: "7deg" },
    { left: "9%", top: "55%", rotate: "-9deg" },
    { left: "68%", top: "68%", rotate: "12deg" },
    { left: "18%", top: "8%", rotate: "-13deg" },
    { left: "45%", top: "78%", rotate: "4deg" },
    { left: "4%", top: "28%", rotate: "-5deg" }
  ];

  const pos = positions[state.noClicks % positions.length];

  noBtn.style.left = pos.left;
  noBtn.style.top = pos.top;
  noBtn.style.transform = `scale(${Math.max(0.42, 1 - state.noClicks * 0.08)}) rotate(${pos.rotate})`;

  if (state.noClicks < 3) {
    noBtn.textContent = "no";
  } else if (state.noClicks < 6) {
    noBtn.textContent = "no?";
  } else {
    noBtn.textContent = "dai";
  }

  const yesScale = 1 + Math.min(state.noClicks, 8) * 0.23;
  yesBtn.style.transform = `scale(${yesScale})`;

  noCounter.textContent = `Tentativi di cliccare no: ${state.noClicks}. Il sistema li considera errori di battitura.`;
}

function renderYes() {
  screen.innerHTML = `
    <div class="center">
      ${badge("contratto firmato")}
      <h1>perfetto.</h1>
      <p>
        Venerdì sera: <strong>birra sotto casa</strong>.
        Io porto la faccia da persona normale, tu porta te stessa che è già abbastanza grave.
      </p>

      <img class="cat-img" src="${gifs.happy}" alt="gatto felice" />

      <button class="main-btn" onclick="renderIntro()">rifai il test, ma ormai hai detto sì</button>
    </div>
  `;
}

renderIntro();
