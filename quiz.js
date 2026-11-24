const QUESTIONS = [
  {
    tag: "Módulo 1 · Halogenação",
    q: "Na halogenação por radical livre de um alcano, o halogênio tende a substituir o hidrogênio de qual carbono, preferencialmente?",
    options: [
      "Do carbono primário, por ser mais acessível",
      "Do carbono mais substituído (terciário, quando houver), porque forma o radical intermediário mais estável",
      "De qualquer carbono, com a mesma probabilidade",
      "Apenas do carbono com maior número de hidrogênios",
    ],
    correct: 1,
    explain: "A reação passa por um radical intermediário, e radicais mais substituídos são mais estáveis (3º > 2º > 1º). Por isso, a halogenação tende a ocorrer preferencialmente no carbono mais substituído disponível.",
    example: "No 3-metil-pentano, o carbono 3 é terciário (ligado a dois CH₂ da cadeia, um grupo metil e um H). É nesse carbono que o cloro substitui o hidrogênio preferencialmente, formando o cloreto terciário.",
  },
  {
    tag: "Módulo 1 · Estabilidade de radicais",
    q: "Qual é a ordem correta de estabilidade de radicais livres de carbono?",
    options: [
      "1º > 2º > 3º",
      "2º > 3º > 1º",
      "3º > 2º > 1º",
      "Todos têm a mesma estabilidade",
    ],
    correct: 2,
    explain: "Radicais terciários são mais estáveis que secundários, que são mais estáveis que primários (3º > 2º > 1º), por isso reações via radical livre favorecem a formação do radical mais substituído.",
    example: "É o mesmo princípio usado para prever o produto principal de uma halogenação: o halogênio 'procura' o carbono que formaria o radical mais confortável (mais substituído) no caminho da reação.",
  },
  {
    tag: "Módulo 2 · Oxidação de álcoois",
    q: "Uma solução de dicromato de potássio concentrado em meio ácido, um oxidante forte, transforma um álcool primário e um álcool secundário, respectivamente, em:",
    options: [
      "Aldeído e cetona",
      "Ácido carboxílico e cetona",
      "Cetona e ácido carboxílico",
      "Ambos em ácido carboxílico",
    ],
    correct: 1,
    explain: "Um oxidante forte e concentrado, como o dicromato de potássio em meio ácido, oxida álcoois primários totalmente até ácido carboxílico (passando pelo aldeído) e álcoois secundários até cetona — que não sofre mais oxidação por não ter hidrogênio no carbono da carbonila.",
    example: "Se o oxidante fosse brando, o álcool primário pararia no estágio de aldeído, sem chegar a ácido carboxílico.",
  },
  {
    tag: "Módulo 2 · Oxidação de aldeídos",
    q: "Por que os aldeídos são considerados muito fáceis de oxidar, mesmo em soluções oxidantes fracas?",
    options: [
      "Porque não reagem com oxidantes, apenas com redutores",
      "Porque o hidrogênio ligado diretamente à carbonila facilita a oxidação a ácido carboxílico",
      "Porque aldeídos são sempre mais estáveis que ácidos carboxílicos",
      "Porque aldeídos não têm nenhum átomo de hidrogênio na molécula",
    ],
    correct: 1,
    explain: "O hidrogênio ligado ao carbono da carbonila do aldeído é facilmente removido, permitindo a oxidação a ácido carboxílico mesmo com oxidantes fracos. Por isso aldeídos são considerados o grupo mais fácil de oxidar entre os compostos orgânicos comuns.",
    example: "Essa é a base de testes de laboratório como o de Tollens e o de Fehling, que usam oxidantes relativamente fracos justamente para diferenciar aldeídos (que reagem) de cetonas (que não reagem facilmente).",
  },
  {
    tag: "Módulo 3 · Hidrólise de ésteres",
    q: "O ácido acetilsalicílico (aspirina), um éster, é hidrolisado no organismo formando ácido salicílico e outro composto X. O composto X é:",
    options: [
      "Etanoato de etila",
      "Ácido etanoico (ácido acético)",
      "Etoxietano",
      "Etanol",
    ],
    correct: 1,
    explain: "A hidrólise de um éster sempre regenera um ácido carboxílico e um álcool (ou, neste caso, um fenol/ácido do outro lado). No caso da aspirina, a quebra libera o ácido salicílico e o ácido acético (ácido etanoico), que era o grupo usado para acetilar a molécula original.",
    example: "É a reação inversa da esterificação: assim como ácido + álcool formam éster + água, aqui éster + água voltam a formar ácido + álcool (ou, como nesse caso, ácido + ácido, já que o grupo original era fenólico).",
  },
  {
    tag: "Módulo 3 · Hidrólise",
    q: "De forma geral, a hidrólise de um éster produz sempre:",
    options: [
      "Dois hidrocarbonetos",
      "Um ácido carboxílico e um álcool (ou fenol)",
      "Um alceno e água",
      "Apenas dióxido de carbono e água",
    ],
    correct: 1,
    explain: "A hidrólise quebra a ligação éster com a participação de uma molécula de água, regenerando o ácido carboxílico e o álcool (ou fenol) que originalmente formaram o éster na esterificação.",
    example: "Pense nisso como desmontar um sanduíche: a hidrólise é o processo inverso de juntar as duas partes (esterificação).",
  },
  {
    tag: "Módulo 4 · Ozonólise",
    q: "Na ozonólise redutiva (O₃, seguida de Zn/H₂O) do 2-metil-pent-2-eno [H₃C-C(CH₃)=CH-CH₂-CH₃], os dois produtos formados são:",
    options: [
      "Propanal e butanona",
      "Propanol e propanona",
      "Propanona e ácido propanoico",
      "Propanona e propanal",
    ],
    correct: 3,
    explain: "A dupla ligação é cortada entre o carbono 2 (que tem dois grupos metil, sem hidrogênio) e o carbono 3 (que tem um hidrogênio). O lado do carbono 2 vira propanona (cetona, pois não há H para formar aldeído) e o lado do carbono 3 vira propanal (aldeído).",
    example: "A regra prática: 'corte' a dupla ligação mentalmente e coloque um oxigênio em cada ponta. Carbono sem H na dupla vira cetona; carbono com H na dupla vira aldeído.",
  },
  {
    tag: "Módulo 4 · Ozonólise redutiva",
    q: "Por que a ozonólise feita com Zn/H₂O (condições redutoras) produz aldeídos e cetonas, e não ácidos carboxílicos?",
    options: [
      "Porque o zinco impede qualquer reação de ocorrer",
      "Porque o zinco evita a oxidação adicional do produto intermediário até ácido carboxílico",
      "Porque ozônio nunca reage com ligações duplas",
      "Porque aldeídos não podem ser formados por ozonólise",
    ],
    correct: 1,
    explain: "O zinco atua como agente redutor na etapa final, impedindo que o intermediário formado seja ainda mais oxidado até ácido carboxílico — por isso a reação 'para' nos estágios de aldeído e cetona.",
    example: "É esse o papel do Zn no 2-metil-pent-2-eno: sem ele (em condições oxidantes), o fragmento que viraria propanal poderia ser oxidado adiante até ácido propanoico.",
  },
  {
    tag: "Módulo 5 · Funções orgânicas",
    q: "O gás de isqueiro (H₃C-CH₂-CH₂-CH₃), um excelente solvente de gorduras usado em farmácias (H₃C-CH₂-O-CH₂-CH₃) e o composto usado na fabricação de detergentes (C₁₂H₂₅-C₆H₄-SO₃H) representam, respectivamente, as funções:",
    options: [
      "Ácido carboxílico, cetona e hidrocarboneto",
      "Butano, éster e ácido carboxílico",
      "Hidrocarboneto, éter e ácido sulfônico",
      "Hidrocarboneto, hidrocarboneto e ácido",
    ],
    correct: 2,
    explain: "O butano é um hidrocarboneto (só C e H); o composto com um oxigênio ligando dois carbonos, sem carbonila, é um éter; e o grupo -SO₃H ligado a um anel aromático de cadeia longa é um ácido sulfônico, usado como base de detergentes.",
    example: "Não confunda éter (-O- isolado) com álcool (-OH) nem ácido sulfônico (-SO₃H) com ácido carboxílico (-COOH) — são 'placas de identificação' diferentes.",
  },
  {
    tag: "Módulo 5 · Reconhecimento de grupos",
    q: "Qual grupo funcional é identificado pela presença do grupo -SO₃H ligado a uma cadeia carbônica?",
    options: [
      "Ácido carboxílico",
      "Ácido sulfônico",
      "Éster",
      "Amina",
    ],
    correct: 1,
    explain: "O grupo -SO₃H caracteriza um ácido sulfônico. É diferente do ácido carboxílico (-COOH), apesar de ambos serem ácidos orgânicos.",
    example: "Ácidos sulfônicos de cadeia longa, ligados a um anel aromático, são a base dos detergentes sintéticos modernos (surfactantes aniônicos).",
  },
  {
    tag: "Módulo 6 · Substituição aromática",
    q: "Nas reações do benzeno com CH₃Cl/AlCl₃, com HNO₃ concentrado/H₂SO₄ concentrado, e com Cl₂/AlCl₃, os produtos principais são, respectivamente:",
    options: [
      "Tolueno, nitrobenzeno e clorobenzeno",
      "1,3-diclorobenzeno, ácido benzenossulfônico e hexaclorobenzeno",
      "1,3-dimetilbenzeno, 1,4-dinitrobenzeno e 1,3-diclorobenzeno",
      "Clorobenzeno, nitrobenzeno e hexaclorobenzeno",
    ],
    correct: 0,
    explain: "Cada reagente introduz um único grupo no anel por substituição eletrofílica: CH₃Cl/AlCl₃ faz uma alquilação de Friedel-Crafts (forma tolueno), HNO₃ conc./H₂SO₄ conc. faz uma nitração (forma nitrobenzeno), e Cl₂/AlCl₃ faz uma halogenação aromática (forma clorobenzeno).",
    example: "Repare que nenhuma dessas condições leva a múltiplas substituições (como di- ou hexaclorobenzeno) — cada uma delas, nas proporções padrão, introduz apenas um grupo no anel.",
  },
  {
    tag: "Módulo 6 · Aromaticidade",
    q: "Por que o benzeno reage preferencialmente por substituição eletrofílica, e não por adição, como os alcenos comuns?",
    options: [
      "Porque o benzeno não tem nenhuma ligação dupla",
      "Porque uma reação de adição destruiria a estabilidade da aromaticidade do anel",
      "Porque o benzeno é sempre menos reativo que qualquer alceno",
      "Porque não existe mecanismo de adição conhecido para anéis aromáticos",
    ],
    correct: 1,
    explain: "A adição quebraria a conjugação responsável pela estabilidade extra do anel aromático. A substituição eletrofílica permite introduzir um novo grupo sem perder essa estabilidade, trocando apenas um hidrogênio do anel.",
    example: "É por isso que o benzeno reage com Cl₂ e AlCl₃ fazendo substituição (clorobenzeno), enquanto um alceno comum reagiria com Cl₂ fazendo adição, sem precisar de catalisador.",
  },
  {
    tag: "Módulo 7 · Classificação de reações",
    q: "Na reação CH₂=CH₂ + H₂ → CH₃-CH₃, o tipo de reação é classificado como:",
    options: [
      "Substituição",
      "Eliminação",
      "Adição",
      "Hidrólise",
    ],
    correct: 2,
    explain: "Dois reagentes se unem (o eteno e o hidrogênio), com incorporação de átomos à molécula e consumo da ligação dupla — isso caracteriza uma reação de adição.",
    example: "É o oposto da eliminação: aqui átomos são incorporados à molécula, formando uma ligação simples a partir de uma dupla, em vez de retirar átomos para formar uma dupla.",
  },
  {
    tag: "Módulo 7 · Classificação de reações",
    q: "A desidratação do etanol (CH₃CH₂OH → CH₂=CH₂ + H₂O) é classificada como uma reação de:",
    options: [
      "Adição, pois ocorre entrada de átomos",
      "Eliminação, pois ocorre a retirada de uma molécula de água",
      "Substituição, pois um átomo é trocado por outro",
      "Redução, pois ocorre ganho de hidrogênio",
    ],
    correct: 1,
    explain: "Nessa reação, uma molécula de água é retirada do álcool, formando uma ligação dupla (o eteno) — essa retirada de átomos com formação de uma ligação dupla é a marca registrada de uma reação de eliminação.",
    example: "Note que é o processo inverso da hidratação de alcenos (que seria uma adição de água ao eteno para formar etanol).",
  },
  {
    tag: "Módulo 7 · Oxirredução",
    q: "Na reação Zn + CuSO₄ → ZnSO₄ + Cu, o que acontece com o zinco e com o cobre, respectivamente?",
    options: [
      "O zinco é reduzido e o cobre é oxidado",
      "O zinco é oxidado (perde elétrons) e o cobre é reduzido (ganha elétrons)",
      "Ambos são oxidados",
      "Ambos são reduzidos",
    ],
    correct: 1,
    explain: "O zinco metálico (Zn⁰) perde 2 elétrons, virando Zn²⁺ — sofre oxidação. O cobre, que estava como Cu²⁺, ganha esses elétrons e vira Cu⁰ metálico — sofre redução. É uma reação de oxirredução clássica, com transferência direta de elétrons.",
    example: "É por isso que, ao colocar um objeto de zinco numa solução azul de sulfato de cobre, a cor azul desaparece (o Cu²⁺ é consumido) e cobre metálico se deposita na superfície do zinco.",
  },
  {
    tag: "Revisão geral",
    q: "Qual conjunto de perguntas-chave ajuda a identificar rapidamente o tipo de uma reação orgânica?",
    options: [
      "Só é preciso saber se a reação libera calor ou não",
      "Um átomo foi trocado (substituição)? Dois reagentes se uniram sem sobrar nada (adição)? Algo saiu formando uma dupla (eliminação)? A água quebrou uma ligação (hidrólise)? Houve transferência de elétrons (oxirredução)?",
      "Apenas o número de carbonos da molécula importa",
      "Todas as reações orgânicas são, no fundo, reações de substituição",
    ],
    correct: 1,
    explain: "Essas cinco perguntas cobrem as classificações centrais de reações orgânicas vistas no guia: substituição, adição, eliminação, hidrólise e oxirredução.",
    example: "Volte à tabela do Módulo 7 sempre que precisar relembrar rapidamente qual categoria se aplica a uma reação antes de uma prova.",
  },
];

let current = 0;
let answers = new Array(QUESTIONS.length).fill(null);

const root = document.getElementById("quiz-root");
const progressBar = document.getElementById("progress-bar");
const resultsEl = document.getElementById("results");

function renderQuestion(index) {
  const item = QUESTIONS[index];
  const card = document.createElement("div");
  card.className = "module quiz-card active";
  card.innerHTML = `
    <span class="qtag">${item.tag} · Pergunta ${index + 1} de ${QUESTIONS.length}</span>
    <h3>${item.q}</h3>
    <div class="options">
      ${item.options.map((opt, i) => `<button class="option" data-i="${i}">${opt}</button>`).join("")}
    </div>
    <div class="feedback" id="feedback-${index}"></div>
    <div class="quiz-nav">
      <button class="btn ghost" id="prev-btn" type="button" ${index === 0 ? "disabled style='opacity:.4;cursor:default;'" : ""}>← Anterior</button>
      <button class="btn primary" id="next-btn" type="button" disabled style="opacity:.4;cursor:default;">${index === QUESTIONS.length - 1 ? "Ver resultado" : "Próxima →"}</button>
    </div>
  `;
  root.innerHTML = "";
  root.appendChild(card);

  const optionButtons = card.querySelectorAll(".option");
  const feedbackEl = card.querySelector(`#feedback-${index}`);
  const nextBtn = card.querySelector("#next-btn");
  const prevBtn = card.querySelector("#prev-btn");

  if (answers[index] !== null) {
    lockAnswer(optionButtons, feedbackEl, item, answers[index]);
    nextBtn.disabled = false;
    nextBtn.style.opacity = 1;
    nextBtn.style.cursor = "pointer";
  }

  optionButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (answers[index] !== null) return;
      const chosen = parseInt(btn.dataset.i, 10);
      answers[index] = chosen;
      lockAnswer(optionButtons, feedbackEl, item, chosen);
      nextBtn.disabled = false;
      nextBtn.style.opacity = 1;
      nextBtn.style.cursor = "pointer";
      updateProgress();
    });
  });

  nextBtn.addEventListener("click", () => {
    if (index === QUESTIONS.length - 1) {
      showResults();
    } else {
      current = index + 1;
      renderQuestion(current);
    }
  });

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      current = index - 1;
      renderQuestion(current);
    });
  }

  updateProgress();
}

function lockAnswer(optionButtons, feedbackEl, item, chosen) {
  optionButtons.forEach((b) => (b.disabled = true));
  const correctBtn = optionButtons[item.correct];
  const chosenBtn = optionButtons[chosen];
  correctBtn.classList.add("correct");
  const isRight = chosen === item.correct;
  if (!isRight) chosenBtn.classList.add("incorrect");

  feedbackEl.classList.add("show", isRight ? "ok" : "no");
  feedbackEl.innerHTML = `
    <div class="verdict ${isRight ? "ok-text" : "no-text"}">${isRight ? "✅ Certo!" : "❌ Não é essa — vamos entender por quê."}</div>
    <div>${item.explain}</div>
    <div class="example"><b>Exemplo para fixar:</b> ${item.example}</div>
  `;
}

function updateProgress() {
  const answered = answers.filter((a) => a !== null).length;
  const pct = Math.round((answered / QUESTIONS.length) * 100);
  progressBar.style.width = pct + "%";
}

function showResults() {
  root.innerHTML = "";
  const score = answers.reduce((acc, a, i) => acc + (a === QUESTIONS[i].correct ? 1 : 0), 0);
  const pct = Math.round((score / QUESTIONS.length) * 100);

  resultsEl.classList.add("show");
  document.getElementById("score-ring").style.setProperty("--pct", pct);
  document.getElementById("score-text").textContent = `${score}/${QUESTIONS.length}`;

  let msg;
  if (score === QUESTIONS.length) msg = "Perfeito! Você dominou halogenação, oxirredução, hidrólise, ozonólise, funções orgânicas e substituição aromática. Releia só o atalho mental de vez em quando para manter fresco.";
  else if (score >= 12) msg = "Muito bom! Reveja no guia os módulos das perguntas erradas abaixo — são pontos pequenos de ajustar.";
  else if (score >= 7) msg = "Bom começo. Volte ao guia de estudo e releia com calma os módulos indicados abaixo antes de repetir o quiz.";
  else msg = "Sem problema — é bastante conteúdo novo. Releia o guia do início, focando nas imagens mentais e nos exemplos, e tente de novo.";
  document.getElementById("score-msg").textContent = msg;

  const reviewList = document.getElementById("review-list");
  reviewList.innerHTML = QUESTIONS.map((item, i) => {
    const isRight = answers[i] === item.correct;
    return `
      <div class="review-item ${isRight ? "right" : "wrong"}">
        <div style="font-weight:700; margin-bottom:4px;">${isRight ? "✅" : "❌"} ${item.tag}</div>
        <div style="margin-bottom:6px;">${item.q}</div>
        ${isRight ? "" : `<div style="color:var(--muted); font-size:0.92rem;"><b>Sua resposta:</b> ${item.options[answers[i]]}<br><b>Correta:</b> ${item.options[item.correct]}<br>${item.explain}</div>`}
      </div>
    `;
  }).join("");

  progressBar.style.width = "100%";
}

document.getElementById("retry-btn").addEventListener("click", () => {
  current = 0;
  answers = new Array(QUESTIONS.length).fill(null);
  resultsEl.classList.remove("show");
  renderQuestion(0);
  window.scrollTo({ top: 0, behavior: "smooth" });
});

renderQuestion(0);
