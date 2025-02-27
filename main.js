// Seleciona os elementos do DOM
const botaoMusica = document.getElementById('play_btn');
const musica = new Audio('som/song.mp3');

let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');

// Seleciona os elementos do carrossel
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

// Adiciona o primeiro item do carrossel ao final da lista para criar a animação de loop
thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);

// Define o tempo de duração da animação e o tempo de espera para o próximo slide automático
let timeRunning = 3000; // Tempo da animação (em milissegundos)
let timeAutonext = 9000; // Tempo de espera para o próximo slide automático (em milissegundos)

botaoMusica.addEventListener("click", () => {
    if (musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
});

nextDom.onclick = function () {
    showSlider('next');
};
prevDom.onclick = function () {
    showSlider('prev');
};

let runTimeOut;
let runNextAuto = setTimeout(() => {
    nextDom.click();
}, timeAutonext);

function showSlider(type) {
    let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if (type === "next") {
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    } else {
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next', 'prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        nextDom.click();
    }, timeAutonext);
}