const textElement = document.getElementById('text');
const choicesElement = document.getElementById('choices');
const restartBtn = document.getElementById('restart');

let state = {};

const scenes = {
  start: {
    text: "Sei nato in un piccolo villaggio. Il mondo davanti a te è vasto e pieno di possibilità. Come vuoi iniziare la tua vita?",
    choices: [
      { text: "Esplora la natura", next: "natura" },
      { text: "Impara a conoscere le persone", next: "sociale" }
    ]
  },
  natura: {
    text: "Passeggiando tra alberi e fiumi, senti una profonda connessione con il mondo. Quale emozione ti guida?",
    choices: [
      { text: "Curiosità", next: "curiosita" },
      { text: "Paura", next: "paura" }
    ]
  },
  sociale: {
    text: "Conosci nuove persone e impari il valore dell'amicizia. Senti una grande speranza per il futuro. Cosa fai?",
    choices: [
      { text: "Aiutare un amico in difficoltà", next: "aiuto" },
      { text: "Seguire i tuoi sogni", next: "sogni" }
    ]
  },
  curiosita: {
    text: "La tua curiosità ti spinge a scoprire segreti nascosti. Scopri un antico libro che parla di scelte e destino.",
    choices: [
      { text: "Leggere il libro", next: "libro" },
      { text: "Ignorarlo e continuare", next: "continuare" }
    ]
  },
  paura: {
    text: "La paura ti blocca, ma anche ti protegge. Decidi di affrontarla o evitarla?",
    choices: [
      { text: "Affrontare la paura", next: "coraggio" },
      { text: "Evitare e rifugiarti", next: "rifugio" }
    ]
  },
  aiuto: {
    text: "Il tuo aiuto cambia la vita di qualcuno. Provi gratitudine e felicità. Come reagisci?",
    choices: [
      { text: "Continua a essere presente per gli altri", next: "speranza_finale" },
      { text: "Metti te stesso al primo posto", next: "riflessione" }
    ]
  },
  sogni: {
    text: "Segui i tuoi sogni e affronti difficoltà, ma cresci molto. Che sentimento ti accompagna?",
    choices: [
      { text: "Determinazione", next: "determinazione" },
      { text: "Sconforto", next: "sconforto" }
    ]
  },
  libro: {
    text: "Il libro ti insegna che ogni scelta crea infinite possibilità. Ti senti ispirato.",
    choices: [
      { text: "Abbraccia il futuro", next: "futuro" },
      { text: "Rimani nel presente", next: "presente" }
    ]
  },
  continuare: {
    text: "Decidi di non lasciarti distrarre. La tua vita scorre tranquilla ma senza grandi sorprese.",
    choices: [
      { text: "Fine", next: "fine_tranquillo" }
    ]
  },
  coraggio: {
    text: "Affrontando la paura, diventi più forte. La vita ti riserva sfide, ma sei pronto.",
    choices: [
      { text: "Continua", next: "mezza_vita" }
    ]
  },
  rifugio: {
    text: "Nel rifugio cerchi conforto, ma ti senti solo. La solitudine è pesante.",
    choices: [
      { text: "Prova a uscire", next: "coraggio" },
      { text: "Rimani isolato", next: "solitudine" }
    ]
  },
  speranza_finale: {
    text: "La tua speranza ispira chi ti sta intorno. Hai lasciato un segno positivo nel mondo.",
    choices: [
      { text: "Fine", next: "fine_felice" }
    ]
  },
  riflessione: {
    text: "Mettere te stesso al primo posto ti porta a scoperte interiori. Cosa scegli di fare dopo?",
    choices: [
      { text: "Crescere come persona", next: "mezza_vita" },
      { text: "Allontanarti dagli altri", next: "solitudine" }
    ]
  },
  determinazione: {
    text: "La determinazione ti guida verso grandi traguardi.",
    choices: [
      { text: "Continua", next: "mezza_vita" }
    ]
  },
  sconforto: {
    text: "Lo sconforto ti rallenta, ma può insegnarti molto.",
    choices: [
      { text: "Rialzati", next: "mezza_vita" },
      { text: "Abbandona i sogni", next: "fine_triste" }
    ]
  },
  futuro: {
    text: "Abbracciando il futuro, ti apri a nuove emozioni e opportunità.",
    choices: [
      { text: "Continua", next: "mezza_vita" }
    ]
  },
  presente: {
    text: "Rimanendo nel presente, vivi il momento ma temi il cambiamento.",
    choices: [
      { text: "Accetta il cambiamento", next: "mezza_vita" },
      { text: "Resisti", next: "fine_triste" }
    ]
  },
  mezza_vita: {
    text: "Ora sei nella fase adulta della vita, dove le scelte sono più complesse. Cosa provi?",
    choices: [
      { text: "Amore", next: "amore" },
      { text: "Rimpianto", next: "rimpianto" },
      { text: "Gratitudine", next: "gratitudine" }
    ]
  },
  amore: {
    text: "L'amore ti riempie il cuore di gioia e speranza.",
    choices: [
      { text: "Condividi con chi ami", next: "fine_felice" },
      { text: "Temi di perdere tutto", next: "paura_perdita" }
    ]
  },
  rimpianto: {
    text: "Il rimpianto ti pesa, ma può diventare una lezione preziosa.",
    choices: [
      { text: "Impara e vai avanti", next: "gratitudine" },
      { text: "Lasciati andare", next: "fine_triste" }
    ]
  },
  gratitudine: {
    text: "La gratitudine ti aiuta a vedere il bello nella vita.",
    choices: [
      { text: "Continua", next: "vecchiaia" }
    ]
  },
  paura_perdita: {
    text: "La paura di perdere ciò che ami ti spinge a proteggere con tutto te stesso.",
    choices: [
      { text: "Affronta la paura", next: "fine_felice" },
      { text: "Lascia andare", next: "fine_triste" }
    ]
  },
  solitudine: {
    text: "La solitudine ti avvolge, ma anche ti fa riflettere profondamente.",
    choices: [
      { text: "Cerca compagnia", next: "gratitudine" },
      { text: "Risolvi i tuoi conflitti", next: "mezza_vita" }
    ]
  },
  vecchiaia: {
    text: "Invecchiando, riflette sulle scelte fatte e sul senso della vita.",
    choices: [
      { text: "Accetta la fine con pace", next: "fine_felice" },
      { text: "Temi la morte", next: "fine_triste" }
    ]
  },
  fine_felice: {
    text: "Hai vissuto una vita piena, ricca di emozioni e scelte importanti. Il tuo viaggio termina con serenità.",
    choices: []
  },
  fine_triste: {
    text: "La vita ti ha posto molte sfide. Anche se alcune strade sono state difficili, ogni esperienza ti ha formato.",
    choices: []
  },
  fine_tranquillo: {
    text: "Una vita semplice, priva di grandi eventi, ma serena e stabile. A volte la quiete è un dono.",
    choices: []
  }
};

function startGame() {
  state = {};
  showScene('start');
  restartBtn.style.display = 'none';
}

function showScene(sceneKey) {
  const scene = scenes[sceneKey];
  textElement.textContent = scene.text;
  choicesElement.innerHTML = '';

  if (scene.choices.length === 0) {
    restartBtn.style.display = 'block';
    return;
  } else {
    restartBtn.style.display = 'none';
  }

  scene.choices.forEach(choice => {
    const button = document.createElement('button');
    button.textContent = choice.text;
    button.className = 'choice-button';
    button.onclick = () => showScene(choice.next);
    choicesElement.appendChild(button);
  });
}

restartBtn.addEventListener('click', startGame);

startGame();
