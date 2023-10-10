Lesson-4

Apa itu DOM Events?
DOM events adalah event yang terjadi pada HTML element. Misalnya, ketika user mengklik tombol submit maka 
event akan dijalankan dan formulir dikirim ke server.
Dalam JavaScript ada beberapa cara untuk menangani suatu event:
1) Melakukan penanganan secara langsung dengan membuat fungsi baru (function declaration).
2) Menambahkan atribut onclick pada elemen HTML yang ingin ditangani oleh event click.
3) Menggunakan metode addEventListener() dari object document.
*/
// Penanganan Event Langsung
document.getElementById("btn").onclick = function(){
    alert('Hello World!'); // Arahan alert ini tidak bisa berfungsi jika script belum dimuat!
    }
    /*
Penanganan Event Dengan Fungsi Baru
Untuk melakukan penanganan event dengan fungsi baru, buatlah fungsi baru dengan nama "myFunction"
dan gunakan parameter e untuk melihat apa saja yang dilakukan saat event tersebut terjadi.*/
var myFunction=function(e){
    alert ('You clicked on an item with id=' + this.id);
    }
    /*
Tambahkan attribut onclick pada elemen button dengan nilai myFunction(). */
<button type="button" class="btn btn-primary" id="btn" onclick="myFunction()">Click Me!</button>
/*
Gunakan method getElementById() untuk membaca value attribute ID dari <button>.
Setelah itu tambahkan listener pada objek document agar setiap klik mouse pada button akan merujuk pada fungsi
Setelah itu tambahkan property onclick pada objek button agar tipe data dalam properti onclick merupakan fungsi
Kemudian tambahkan listener event click pada elemen button dengan menggunakan metod addEventListener(),
yang merupakan bagian dari objek window.
Parameter pertamanya adalah nama event yang ingin dipicu ("click"), sedangkan parameter kedua adalah
nama fungsi yang harus dieksekusi setelah event terpicu.
*/


