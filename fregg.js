let leftBtn = document.querySelector('.left-btn');
let rightBtn = document.querySelector('.right-btn');
let heroBox = document.querySelectorAll('.hero_box');

 let a = 0;

 rightBtn.addEventListener('click', ()=> {

    a++;
    if(a > heroBox.length - 1) {
        a = 0;
        heroBox[0].classList.remove('hide');
        heroBox[heroBox.length - 1].classList.add('hide');
    }

    heroBox[a].classList.remove('hide');
    heroBox[a - 1].classList.add('hide');
 });

leftBtn.addEventListener('click', ()=> {

    a--;
    if(a < 0) {
        a = heroBox.length - 1;
        heroBox[0].classList.add('hide');
    }

    heroBox[a].classList.remove('hide');
    heroBox[a + 1].classList.add('hide');
});


// NUMBER2.....


let whiteBtn = document.querySelector('.white-btn');
let blackBtn = document.querySelector('.black-btn');
let veryBx = document.querySelectorAll('.very_bx');

let f = 0;

blackBtn.addEventListener('click' , ()=> {

    f++;
    if(f > veryBx.length - 1) {
        f = 0;
        veryBx[0].classList.remove('dis');
        veryBx[veryBx.length - 1].classList.add('dis');
    }

    veryBx[f].classList.remove('dis');
    veryBx[f - 1].classList.add('dis');
});

whiteBtn.addEventListener('click', ()=> {

    f--;
    if(f < 0) {
        f = veryBx.length - 1;
        veryBx[0].classList.add('dis');
    }

    veryBx[f].classList.remove('dis');
    veryBx[f + 1].classList.add('dis');
});