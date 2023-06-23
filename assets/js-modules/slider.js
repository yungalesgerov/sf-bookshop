
let slider = document.querySelector('.slider-wrapper');
let dot1 = document.querySelector('.svg-dot-1');
let dot2 = document.querySelector('.svg-dot-2');
let dot3 = document.querySelector('.svg-dot-3');

const entities = [
    {
        // img: './dist/6f345790f612312eca2e.jpg'
        img: 'dist\6f345790f612312eca2e.jpg'
    }, {
        // img: './dist/037f848a9334184fbe61.jpg'
        img: 'assets\icons\banner2.jpg'
    }, {
        // img: './dist/cc7860b31a3ba793be84.jpg'
        img: 'assets\icons\banner3.jpg'
    }
];
let currentIndex = 0;
const setEntity = (index) => {
    slider.style.backgroundImage = `url(${entities[index].img})`;
};





dot1.addEventListener('click',() => {
    console.log('0');
    setEntity(0);
    return currentIndex = 0;
});
dot2.addEventListener('click',() => {
    console.log('1');
    setEntity(1);
    return currentIndex = 1;
});
dot3.addEventListener('click',() => {
    console.log("2");
    setEntity(2);
    return currentIndex = 2;
});

// slider.style.backgroundImage = 'url(\banner3.jpg)';
