// innerHTML
// const judul = document.getElementById('judul');
// judul.innerHTML = '<em>Alghifari</em>';

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = 'Hello World';


//element.style
// const judul = document.querySelector('#judul');
// judul.style.backgroundColor = 'blue';

// element.setAttribute
// const judul = document.getElementsByTagName('h1')[0];
// const a = document.querySelector('section#a a');
// judul.setAttribute('name', 'judul');
// a.setAttribute('id', 'link');

// getAttribute
// a.getAttribute('href'); //mengembalikan attribute dari element 'a' yang namanya 'href'
// a.removeAttribute('href'); //menghapus attribute dari element 'a' yang namanya 'href'

const p2 = document.querySelector('.p2');
// p2.setAttribute('class', 'label'); // menimpa class p2 menjadi class label
p2.classList.add('label');      //menambahkan class 'label' pada element p2
p2.classList.remove('label');   //menghapus class 'label' pada element p2
p2.classList.toggle('label');   //berfungsi seperti on off, akan berguna saat eventHandler
p2.classList.item(1);           //memilih class dengan index pada element yang dipilih
p2.classList.contains('label'); //mengecek apakah ada class 'label' pada element p2
p2.classList.replace('label', 'name'); // mengganti class yang ada dengan yang diinginkan

//Node Manipulation
//buat element baru
const pBaru = document.createElement('p');
const textPBaru = document.createTextNode('Paragraf Baru');
//simpan text kedalam paragraf
pBaru.appendChild(textPBaru);
//simpan pBaru di akhir section a
// const sectionA = document.getElementById('a');
// sectionA.appendChild(pBaru);

// const liBaru = document.createElement('li');
// const itemBaru = document.createTextNode('Item baru');

// liBaru.appendChild(itemBaru);

// const ul = document.querySelector('section#b ul');
// const li2 = document.querySelector('section#b ul li:nth-child(2)')
// ul.insertBefore(liBaru, li2);

// const sectionA = document.getElementById('a');
// const link = document.querySelector('a');
// sectionA.removeChild(link);

const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const textH2Baru = document.createTextNode('Judul Baru');

h2Baru.appendChild(textH2Baru);

sectionB.replaceChild(h2Baru, p4);
