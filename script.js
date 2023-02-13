"use strict";

const leftBtn = document.querySelector('.left-btn button');
const rightBtn = document.querySelector('.right-btn button');
const innerImages = document.querySelectorAll('.inner-img > div');
const outerImages = document.querySelectorAll('.outer-img > div');

console.log(innerImages)
console.log(outerImages)

let currentImgIndex = innerImages.length  - 1;

leftBtn.addEventListener('click', () => {
    if( currentImgIndex > 0 ) {
        currentImgIndex--;
    } else {
        currentImgIndex = innerImages.length-1;
    }
    innerImages.forEach( (img, ind) => {
        img.classList.remove('active');
    })
    innerImages[currentImgIndex].classList.add('active');

    outerImages.forEach( (img, ind) => {
        img.classList.remove('active');
    })
    outerImages[currentImgIndex].classList.add('active');
});

rightBtn.addEventListener('click', () => {
    if( currentImgIndex == innerImages.length-1 ) {
        currentImgIndex = 0;
    } else {
        currentImgIndex++;
    }
    innerImages.forEach( (img, ind) => {
        img.classList.remove('active');
    })
    innerImages[currentImgIndex].classList.add('active');

    outerImages.forEach( (img, ind) => {
        img.classList.remove('active');
    })
    outerImages[currentImgIndex].classList.add('active');
});

