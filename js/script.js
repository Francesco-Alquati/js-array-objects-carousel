const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// RECUPERO IL CONTAINER DAL DOM
const carousel = document.getElementById('main-container');

// INIETTO IN HTML UNA STRUTTURA INSERENDO GLI OGGETTI DELL'ARRAY NEL DOM CON IL METODO FOREACH()
images.forEach((elem) =>{
    carousel.innerHTML += 
    `<div class="card text-bg-dark d-none">
        <img src="${elem.image}" alt="${elem.title}">
        <div class="card-img-overlay">
            <h5 class="card-title text-danger fs-1">${elem.title}</h5>
        </div>
        <div class="card-img-overlay">
        <p class="position-absolute bottom-0 start-0 bg-trasp fs-5">${elem.text}</p>
        </div>
      
    </div>`;
});


// DICHIARO IL PRIMO ELEMENTO VISIBILE
let currentImageIndex = 0; 

// RECUPERO GLI ELEMENTI CON LA CLASSE CARD
const imageCards = document.querySelectorAll('.card'); 

// RIMUOVO D-NONE DAL PRIMO ELEMENTO DELL'ARRAY
imageCards[currentImageIndex].classList.remove('d-none');

// RECUPERO IL PULSANTE DAL DOM
const next = document.getElementById('next');

next.addEventListener('click',function(){
    // AGGIUNGO LA CLASSE D-NONE
    imageCards[currentImageIndex].classList.add('d-none');

    // CONDIZIONE PER SCORRERE LE IMMAGINI FINO ALL'ULTIMO ELEMENTO DELL'ARRAY
    if(currentImageIndex == images.length - 1){
        
        currentImageIndex = 0;
    }
    else{
        // INCREMENTO
            currentImageIndex++;
    }

    // RIMUOVO D-NONE DALL'ELEMENTO DELL'ARRAY
    imageCards[currentImageIndex].classList.remove('d-none');

});

// RECUPERO IL PULSANTE DAL DOM
const prev = document.getElementById('prev');

prev.addEventListener('click',function(){
    // AGGIUNGO LA CLASSE D-NONE
    imageCards[currentImageIndex].classList.add('d-none');

    // SOTTREGGO 1 PER ANDARE ALL'IMAGINE PRECEDENTE 
    // AGGIUNGO LA LUNGHEZZA DELL'ARRAY PER ASSICURARMI CHE IL RISULTATO NON SIA NEGATIVO
    // DIVIDO PER LA LUNGHEZZA DELL'ARRAY COSI DA VERE UN RESIDUO CHE RAPPRESENTA UN INDICE VALIDO DELL'ARRAY
    currentImageIndex = (currentImageIndex - 1 + imageCards.length) % imageCards.length;

    // RIMUOVO D-NONE DALL'ELEMENTO DELL'ARRAY
    imageCards[currentImageIndex].classList.remove('d-none');

});