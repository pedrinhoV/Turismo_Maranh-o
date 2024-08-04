const attractionsButton = document.querySelector('.attractions');
const botaolink = document.getElementById('link');

function updateAttractionsButton(cidade) {
  attractionsButton.dataset.id = `attraction-${cidade}`;
  const link = `attractions.html?attractionId=attraction-${cidade}`;
  botaolink.href = link;
;}
