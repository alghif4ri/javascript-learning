Lesson-3
DOM Manipulation
=====================
Apa itu DOM Manipulation?
Dalam pemrograman web, terdapat beberapa cara untuk mengubah struktur HTML. Dari segi teknikalnya ada 2 jenis metode yang digunakan dalam melakukan manipulasi pada elemen di halaman website:
DOM adalah singkatan dari Document Object Model. Dalam bahasa pemrograman web,
DOM merupakan model yang digunakan untuk mengakses dan mengelola dokumen HTML secara terstruktur.
Dengan begitu kita dapat melakukan manipulasi pada elemen dalam suatu halaman website dengan mudah tanpa harus membuat ulang tampilannya sendiri.
Dengan kata lain, DOM dapat diartikan sebagai API (Application Programming Interface)

DOM Manipulation Method
------------------------
1. document.getElementById() - Mengambil elemen berdasarkan ID
2. document.getElementsByTagName() - Mengambil semua elemen dengan tag tertentu
3. document.getElementsByClassName() - Mengambil semua elemen dengan class CSS tertentu
4. document.querySelector() - Mengambil satu elemen pertama dengan selector CSS
5. document.querySelectorAll() - Mengambil seluruh elemen dengan selector CSS
6. parentNode / childNodes / firstChild / lastChild - Membaca anggota induk/anak/pertama/terakhir node
7. appendChild(node) - Menambahkan node baru ke dalam node ini
8. insertBefore(new_element, reference_element) - Menyisipkan element baru sebelum referensi
9. removeChild(childElement) - Menghapus elemen
10. replaceChild(new_element, old_element) - Merubah suatu elemen dengan elemen baru
Contoh Penggunaannya:
```javascript
//Mengambil elemen dengan id "demo" pada halaman html
var x = document.getElementById("demo");  //x is a variable that stores the object of type Element with id="demo".

var demo = document.getElementById("demo");
console.log('Demo : ' + demo); // Demo : <p>Ini contoh penggunaan method getElementById()</p>
//Mengambil semua elemen p pada halaman html
var paras = document.getElementsByTagName("p");
for (i=0; i<paras.length; i++) {
    document.write('<br/>'+'Paragraf Ke-'+(i+1)+' : '+paras[i].innerHTML);
    }
    /* Paragraf Ke-1 : Ini contoh penggunaan method getElementsByTagName()
    Paragraf Ke-2 : Ini contoh penggunaan method getElementsByClassName() */
/* Mengambil semua elemen dengan class .box pada halaman html*/
var boxes = document.getElementsByClassName(".box");
document.write("<h3><strong>"+boxes+"</strong></h3>");
//Membuat ul list
var myList = document.createElement("ul") ;
myList.setAttribute("id", "list"); 	//Menetapkan atribut id="list".
myList.style.color="#FFA";		        //Menetapkan style color #FFA
myList.appendChild(item1);			    //Tambahkan item1 ke dalam daftar
myList.insertBefore(item2, item1);//Sebelum item1 tambahkan item2
myList.removeChild(item2);		    //Hapus item2
myList.replaceChild(item3, item2);//Ganti item2 dengan item3
document.body.appendChild(myList);	    //Tambahkan ul ke body
```
element.innerHTML // meubah isi sebuah tag html
element.innerText //meubah teks biasa tanpa markup
element.outerHTML //menggandung innerHTML dan tagsnya
element.textContent //meubah text saja tanpa markup
element.style.<property> //meubah style css
element.classList.add(<class>) //menambahkan class
element.classList.remove(<class>) //menghapus class
element.classList.toggle(<class>) //membalikkan status class
element.getAttribute(<attribute name>) //mendapatkan attribute value dari element
element.hasAttribute(<attribute name>) //cek apakah ada attribut tersebut di element
element.removeAttribute(<attribute name>) //menghapus attribute yang dipilih
element.setAttribute(<attribute name>, <value>) //memasukkan attribute baru
element.addEventListener(<event type>,<function>) //memberikan event listener untuk element
element.removeEventListener(<event type>,<function>) //menghapus event listener
element.dispatchEvent(eventObject) //melaksanakan event object
element.focus() // memberikan focus kedalam input ataupun textarea
element.blur() // menghilangkan focus dari input ataupun textarea
element.scrollIntoView([alignToTop]) // memindahkan scroll browser ke atas element
element.click() // mengeksekusi fungsi click pada element
element.cloneNode([deepClone]) // menciptakan clone node
element.closest(<selector>) // cari selector paling dekat dgn element ini
element.matches(<selector>) // cek apakah element cocok dengan selector
element.querySelector(<selector>) //cari satu elemen berdasarkan querySelectorAll
element.querySelectorAll(<selector>) //cari banyak elemen berdasarkan querySelector
element.requestFullscreen() //memunculkan layar full screen
element.webkitRequestFullScreen() //memunculkan layar full screen
element.mozRequestFullScreen() //memunculkan layar full screen
element.msRequestFullscreen() //memunculkan layar full screen
element.exitFullscreen() //keluar dari mode fullscreen
element.webkitExitFullscreen() //keluar dari mode fullscreen
element.mozCancelFullScreen() //keluar dari mode fullscreen
element.msExitFullscreen() //keluar dari mode fullscreen
element.insertAdjacentElement(<position>, <new_node>) //memperluas posisi insert new node
element.insertAdjacentText(<position>, <text>) //memperluas posisi insert text
element.getBoundingClientRect() //mendapatkan bounding box dari element
element.getClientRects() //mendapatkan array of rects (bounding box) dari element
element.getDestinationInsertionPoints() //mendapatkan destination insertion points
element.getRootNode([options]) //mendapatkan root node dari element
element.isConnected() //cek apakah element sedang tersambung ke DOM tree
element.contains(otherElment) //cek apakah otherElement termasuk anak dari element
element.before(...nodes or strings) //tambahkan nodes/strings sebelumnya
element.after(...nodes or strings) //tambahkan nodes/strings setelahnya
element.prepend(...nodes or strings) //tambahkan nodes/strings sebelum childNodes[0]
element.append(...nodes or strings) //tambahkan nodes/strings sesudah childNodes[-1]
element.replaceWith(...) //gantikan element dengan nodes/string lain
element.remove() //menghapus element
element.children //array of children elements
element.firstElementChild //child pertama dalam list
element.lastElementChild //child terakhir dalam list
element.previousElementSibling //sibling sebelumnya
element.nextElementSibling //sibling selanjutnya
element.parentElement //parent element
element.parentNode //parent node
element.childNodes //list semua child nodes
element.firstChild //child pertama
element.lastChild //child terakhir
element.nextSibling //sibling selanjutnya
element.previousSibling //sibling sebelumnya
```
