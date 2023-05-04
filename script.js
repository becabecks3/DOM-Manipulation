//CREAR LI
let nLi = document.createElement('li');
let txt = document.createTextNode('Esto es un Li');
nLi.appendChild(txt);
document.querySelector('.uList').appendChild(nLi);

let nLi2 = document.createElement('li');
let txt2 = document.createTextNode('Esto es un Li');
nLi2.appendChild(txt2);
document.querySelector('.uList').appendChild(nLi2);

//CREAR PARRAFO DEBAJO DEL BOTON, ESCONDERLO Y MOSTRARLO
let nP = document.createElement('p');
let txtP = document.createTextNode('Ahora me ves');
nP.appendChild(txtP);
nP.setAttribute("id","para");
document.querySelector('.hide').appendChild(nP);

let txt3 = document.querySelector('#para');
let button = document.querySelector('.button');
button.addEventListener('click', function() {
    txt3.classList.toggle('para');
});

//CREAR H2 Y ESCONDERLO Y MOSTRARLO
let title2 = document.createElement('h2');
let txt4 = document.createTextNode('Capibara, Capibara!');
title2.appendChild(txt4);
document.querySelector('.capibara').appendChild(title2);

let img = document.querySelector('.capibara img');
img.addEventListener('mouseout', function() {
    title2.style.visibility = 'hidden';
});

img.addEventListener('mouseenter', function() {
    title2.style.visibility = 'visible';
});

