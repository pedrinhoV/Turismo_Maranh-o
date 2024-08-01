document.addEventListener('DOMContentLoaded', () => {
    const card1 = document.querySelector('.card1');
    const card2 = document.querySelector('.card2');
    const card3 = document.querySelector('.card3');
    const card4 = document.querySelector('.card4');
    const bg = document.querySelector('.general');
    const title = document.querySelector('h1');
    const textCard = document.querySelector('p');
    const visitButton = document.querySelector('.visit');
    const attractionsButton = document.querySelector('.attractions');
    const mapLencois = document.querySelector('.map-lencois');
    const mapSaoLuis = document.querySelector('.map-sao-luis');
    const mapChapada = document.querySelector('.map-chapada');
    const mapAlcantara = document.querySelector('.map-alcantara');
    const cancelButton = document.querySelector('.cancel');
    const container = document.querySelector('.container');
    
    // Ocultar todos os mapas
    function hideAllMaps() {
        mapLencois.classList.remove('show');
        mapSaoLuis.classList.remove('show');
        mapChapada.classList.remove('show');
        mapAlcantara.classList.remove('show');
    }

    // Mostrar os botões visitar e atrações
    function showButtons() {
        visitButton.style.display = 'block';
        attractionsButton.style.display = 'block';
    }

    // Ocultar os botões visitar e atrações
    function hideButtons() {
        visitButton.style.display = 'none';
        attractionsButton.style.display = 'none';
    }

    // Restaurar a página aos padrões iniciais
    function resetPage() {
        bg.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('../img/maranhao.jpg')";
        title.innerText = 'Trilhas - TourMA';
        textCard.innerText = 'Trilhas: TourMA é uma inovadora iniciativa voltada para a promoção e facilitação do turismo no território maranhense...';
        hideAllMaps();
        hideButtons();
        cancelButton.style.display = 'none';
        container.style.display = 'flex';
    }
    // Ocultar o botão cancel quando qualquer outro card for clicado
    function hideCancelButton() {
        cancelButton.style.display = 'none';
    }

    // Evento de clique para cada card
    function addCardClickListener(card, bgImage, titleText, descriptionText, visitButtonId, attractionId) {
        card.addEventListener('click', () => {
            bg.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url(${bgImage})`;
            title.innerText = titleText;
            textCard.innerText = descriptionText;
            visitButton.id = visitButtonId;
            attractionsButton.id = attractionId;
            attractionsButton.href = `attractions.html?attractionId=${attractionId}`;
            hideAllMaps();
            showButtons();
            cancelButton.style.display = 'none'; 
        });
    }

    addCardClickListener(card1, '../img/lencol-MA.png', 'Lençóis Maranhenses', 'Parque Nacional com vastas dunas de areia branca e lagoas de água doce.', 'visit-lencois');
    addCardClickListener(card2, '../img/centro-historico-sao-luis.jpg', 'São Luís', 'Capital do Maranhão, conhecida por seu centro histórico e cultura vibrante.', 'visit-sao-luis');
    addCardClickListener(card3, '../img/chapada-background.jpg', 'Chapada das Mesas', 'Parque Nacional famoso por suas formações rochosas e cachoeiras.', 'visit-chapada');
    addCardClickListener(card4, '../img/alcantara-background.jpg', 'Alcântara', 'Histórica cidade colonial com ruínas e praias tranquilas.', 'visit-alcantara');

    // Mostrar mapa e button.cancel
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
        cancelButton.style.display = 'block';
    });

    // Ocultar o mapa -> button.cancel
    cancelButton.addEventListener('click', () => {
        hideAllMaps();
        cancelButton.style.display = 'none';
    });
});
