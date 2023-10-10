// getElementById
// const judul = document.getElementById('judul'); //mencari element dengan id 'judul' dan ditampung kedalam variable 'judul
// judul.style.color = 'red'; // memanipulasi element berdasarkan id yang sudah dideklarasikan, merubah warna text
// judul.style.backgroundColor = 'black'; // mengubah warna background
// judul.innerHTML = 'Belajar DOM selection'; // mengubah isi text

//getElementsByTagName mengembalikan HTMLCollection
// const p = document.getElementsByTagName('p');
// p.style.backgroundColor = 'blue'; // error karena tidak memberi index 
// p[1].style.backgroundColor = 'blue'; //memberi atribut background color pada element dengan index-1
// for (let i = 0; i < p.length; i++) {
// p[i].style.backgroundColor = 'grey'; //memberi atribut backgroun color pada semua element p dengan looping
// }

// const h1 = document.getElementsByTagName('h1'); // meski hanya terdapat 1 element jika dipanggil dengan getElementsByTagName maka bentuknya tetap HTMLCollection dalam array
// const h1 = document.getElementsByTagName('h1')[0]; //tambahkan index untuk memanggil element dalam htmlcollection
// h1.style.fontSize = '1rem'; //karena sudah ditambahkan index diatas, maka bisa langsung dituliskan element nya tampa menambahkan index


//getElementsByClassName mengembalikan HTMLCollection
// const p1 = document.getElementsByClassName('p1');
// p1[0].innerHTML = 'ini diubah dengan Javascript';

//querrySelector element
// const p4 = document.querySelector('#b p');
// p4.style.color = 'green';
// p4.style.fontSize = '2rem';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = 'orange';

// const p = document.querySelector('p');
// p.innerHTML = 'ini diubah dengan Javascript';

// querrySelectorAll 

// const p = document.querySelectorAll('p'); // mengembalikan menjadi nodelist bukan HTMLCollection
// p[1].style.color = 'green'; //ubah warna satu element p dengan index ke 1, jika ingin semua element diubah bisa dengan looping seperti contoh sebelumnya

// mengubah node root
const sectionB = document.getElementById('b'); //deklarasikan sebuah variable yang mengarah ke element dengan id 'b'
const p4 = sectionB.querySelector('p'); // cari element p yang berada pada sectionB dimana telah dideklarasikan bahwa itu mengarah ke suatu element dengan id 'b'
p4.style.backgroundColor = 'orange'; // ubah background color pada variable p4 yaitu element p yang berada di dalam section dengan id 'b'
// dengan itu, node root dapat diubah sesuai dengan kebutuhan spesifik
