// const p3 = document.querySelector('.p3');
// function ubahWarna() {
//     p3.style.backgroundColor = 'blue';
// }

// const p2 = document.querySelector('.p2');
// function ubahWarnaP2() {
//     p2.style.backgroundColor = 'blue';
// }
// p2.onclick = ubahWarnaP2;


const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function(){
    const ul = document.querySelector('section#b ul');
    const liBaru = document.createElement('li');
    const itemBaru = document.createTextNode('Item Baru');
    liBaru.appendChild(itemBaru);
    ul.appendChild(liBaru);
});

// perbedaan eventHandler dengan addEventListener
/* 1) Event Handler adalah fungsi yang dijalankan ketika suatu elemen diklik,
sedangkan AddEvent Listener merupakan metode untuk menambahkan listener ke sebuah element */

// EventHandler
const p3 = document.querySelector('.p3');
// p3.onclick = function(){
//     p3.style.backgroundColor = 'blue';
// }

// p3.onclick = function(){
//     p3.style.color = 'red';
// }

// EventListener
p3.addEventListener('click', function(){
    p3.style.backgroundColor = 'blue';
});

p3.addEventListener('click', function () {
    p3.style.color = 'red';
});
