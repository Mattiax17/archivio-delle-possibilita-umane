function scegli(scelta) {
  const testo = document.getElementById('testo-risultato');
  const resultSection = document.getElementById('result');
  const chooseSection = document.getElementById('choose');

  let messaggio = '';

  switch (scelta) {
    case 'speranza':
      messaggio = 'La speranza apre porte invisibili verso un futuro luminoso.';
      break;
    case 'paura':
      messaggio = 'La paura può essere un ostacolo o un segnale per crescere.';
      break;
    case 'curiosita':
      messaggio = 'La curiosità spinge l’anima a scoprire nuove possibilità.';
      break;
    default:
      messaggio = 'Scelta non valida.';
  }

  testo.textContent = messaggio;
  resultSection.style.display = 'block';
  chooseSection.style.display = 'none';
}

function reset() {
  document.getElementById('result').style.display = 'none';
  document.getElementById('choose').style.display = 'block';
  document.getElementById('testo-risultato').textContent = '';
}
