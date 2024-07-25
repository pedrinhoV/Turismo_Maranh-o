const card1 = document.querySelector('.card1');
const card2 = document.querySelector('.card2');
const card3 = document.querySelector('.card3');
const card4 = document.querySelector('.card4');
const bg = document.querySelector('.general');
const title = document.querySelector('h1');
const textCard = document.querySelector('p');
const visitButton = document.querySelector('.visit');
const mapLencois = document.querySelector('.map-lencois');
const mapSaoLuis = document.querySelector('.map-sao-luis');
const mapChapada = document.querySelector('.map-chapada');
const mapAlcantara = document.querySelector('.map-alcantara');

function hideAllMaps() {
    mapLencois.classList.remove('show');
    mapSaoLuis.classList.remove('show');
    mapChapada.classList.remove('show');
    mapAlcantara.classList.remove('show');
}

card1.addEventListener('click', () => {
    bg.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url('../img/lencol-MA.png')";
    title.innerText = 'Lençóis Maranhenses';
    textCard.innerText = 'Parque Nacional com vastas dunas de areia branca e lagoas de água doce.';
    visitButton.id = "visit-lencois";
    hideAllMaps();
});

card2.addEventListener('click', () => {
    bg.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url('../img/centro-historico-sao-luis.jpg')";
    title.innerText = 'São Luís';
    textCard.innerText = 'Capital do Maranhão, conhecida por seu centro histórico e cultura vibrante.';
    visitButton.id = "visit-sao-luis";
    hideAllMaps();
});

card3.addEventListener('click', () => {
    bg.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url('../img/chapada-background.jpg')";
    title.innerText = 'Chapada das Mesas';
    textCard.innerText = 'Parque Nacional famoso por suas formações rochosas e cachoeiras.';
    visitButton.id = "visit-chapada";
    hideAllMaps();
});

card4.addEventListener('click', () => {
    bg.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url('../img/alcantara-background.jpg')";
    title.innerText = 'Alcântara';
    textCard.innerText = 'Histórica cidade colonial com ruínas e praias tranquilas.';
    visitButton.id = "visit-alcantara";
    hideAllMaps();
});

visitButton.addEventListener('click', () => {
    if (visitButton.id === 'visit-sao-luis') {
        mapSaoLuis.classList.add('show');
    } else if (visitButton.id === 'visit-lencois') {
        mapLencois.classList.add('show');
    } else if (visitButton.id === 'visit-chapada') {
        mapChapada.classList.add('show');
    } else if (visitButton.id === 'visit-alcantara') {
        mapAlcantara.classList.add('show');
    }
});