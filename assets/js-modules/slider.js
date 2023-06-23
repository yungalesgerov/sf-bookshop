
let slider = document.querySelector('.slider-wrapper');
let dot1 = document.querySelector('.svg-dot-1');
let dot2 = document.querySelector('.svg-dot-2');
let dot3 = document.querySelector('.svg-dot-3');
let dots = document.querySelectorAll('.slider-dots-item');

const entities = [
    {
        // img: './dist/6f345790f612312eca2e.jpg'
        img: 'http://localhost:3000/6f345790f612312eca2e.jpg'
    }, {
        // img: './dist/037f848a9334184fbe61.jpg'
        img: 'http://localhost:3000/037f848a9334184fbe61.jpg'
    }, {
        // img: './dist/cc7860b31a3ba793be84.jpg'
        // img: 'assets\icons\banner3.jpg'
        img: 'http://localhost:3000/cc7860b31a3ba793be84.jpg'
    }
];
let currentIndex = 0;
const setEntity = (index) => {
    slider.style.backgroundImage = `url(${entities[index].img})`;
};
setEntity(currentIndex);

function markDot(index) {
    dots.forEach(a => a.classList.remove('dot-active'));
    dots[index].classList.add('dot-active');
};
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        setEntity(currentIndex);
        markDot(currentIndex);
    });
});

setInterval(() => {
    if(currentIndex == entities.length-1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    setEntity(currentIndex);
    markDot(currentIndex);
},5000);
