let nLi = document.createElement('li');
let txt = document.createTextNode('Esto es un Li');
nLi.appendChild(txt);
document.querySelector('.uList').appendChild(nLi);

let nLi2 = document.createElement('li');
let txt2 = document.createTextNode('Esto es un Li');
nLi2.appendChild(txt2);
document.querySelector('.uList').appendChild(nLi2);

let nP = document.createElement('p');
let txtP = document.createTextNode('Ahora me ves');
nP.appendChild(txtP);
nP.setAttribute("id","para");
document.querySelector('.hide').appendChild(nP);

let txt4 = document.querySelector('#para');
let button = document.querySelector('.button');
button.addEventListener('click', function() {
    txt4.classList.toggle('para');
})

let pic = document.createElement('h2');
let txt3 = document.createTextNode('Capibara, Capibara!');
pic.appendChild(txt3);
document.querySelector('.capibara').appendChild(pic);

let img = document.querySelector('.capibara img');
img.addEventListener('mouseout', function() {
    pic.style.visibility = 'hidden';
});

img.addEventListener('mouseenter', function() {
    pic.style.visibility = 'visible';
});

