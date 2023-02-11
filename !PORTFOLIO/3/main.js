'use strict';

/* =================================================================================================== */
// < .buttonTop >

let buttonTop = document.querySelector('.buttonTop');
let buttonBottom = document.querySelector('.buttonBottom');
// let scrollTop = querySelector('.scrollTop');
let scrollBox = document.querySelector('.scrollBox');

buttonTop.addEventListener('click', () => {
    let posY = parseInt(window.scrollY);

    window.scroll(scrollX, 0)

    backScroll(() => window.scroll(scrollX, posY -= 5));
    function backScroll(backSc) {
        let stopTimeout = setInterval(() => {
            backSc();

            if(posY < 0) {
                clearInterval(stopTimeout);
            }
        }, 5);
    }
})

/* =================================================================================================== */
// < .buttonBottom >

buttonBottom.addEventListener('click', () => {
    let posY = parseInt(window.scrollY);

    backScroll(() => window.scroll(scrollX, posY += 5));
    function backScroll(backSc) {
        let stopTimeout = setInterval(() => {
            backSc();

            if(posY > window.innerHeight * 2) {
                clearInterval(stopTimeout);
            }
        }, 5);
    }
})

/* =================================================================================================== */
// < calculate position, scroll >

document.addEventListener('scroll', () => {
    let posX = parseInt(window.scrollX),
        posY = parseInt(window.scrollY);

/*     if (window.innerWidth >= 900) {
        buttonBottom.classList.remove('scrollBar');
    }
 */
    if (posY > window.innerHeight * .5 &&
        innerWidth >= 1000) {
        buttonTop.classList.add('visibility');
    } else {
        buttonTop.classList.remove('visibility');
    }

    if (posY > window.innerHeight * 1.5 ||
        innerWidth <= 1000) {
        buttonBottom.classList.remove('scrollBar');
    } else {
        buttonBottom.classList.add('scrollBar');
    }
});

console.log(parseInt(scrollX));
console.log(innerWidth);
