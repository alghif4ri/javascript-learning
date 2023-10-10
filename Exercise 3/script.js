const container = document.querySelector('.container');
const mainImg = document.querySelector('.main-img');
const thumbs = document.querySelectorAll('.thumb');

container.addEventListener('click', function(e){
    if(e.target.className == 'thumb'){
        mainImg.src = e.target.src;
        mainImg.classList.add('fade');
        setTimeout(function(){
            mainImg.classList.remove('fade')
        },500);

        thumbs.forEach(function(thumb){
            // cara pertama : dengan mengecek apakah ada class 'active' pada thumb, jika ada remove class 'active'
            // if(thumb.classList.contains('active')){
            //     thumb.classList.remove('active');
            // }
            // cara kedua : ubah semua class menjadi 'thumb'
            thumb.className = 'thumb';
        })
        
        e.target.classList.add('active');
    }
});