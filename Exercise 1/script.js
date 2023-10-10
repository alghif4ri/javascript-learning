const btnChange = document.getElementById('btn-change');
btnChange.addEventListener('click', function () {
    // document.body.style.backgroundColor = 'lightblue';
    // document.body.setAttribute('class', 'biru-muda');
    document.body.classList.toggle('biru-muda');
});

const newBtn = document.createElement('button');
const btnText = document.createTextNode('Random Color');

newBtn.appendChild(btnText);
newBtn.setAttribute('type', 'button');

btnChange.after(newBtn);

newBtn.addEventListener('click', function () {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ' )';
});


const sRed = document.querySelector('input[name=sr]');
const sGreen = document.querySelector('input[name=sg]');
const sBlue = document.querySelector('input[name=sb]');

sRed.addEventListener('input', function () {
    const r = sRed.value;
    const g = sGreen.value;
    const b = sBlue.value;
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'
});
sGreen.addEventListener('input', function () {
    const r = sRed.value;
    const g = sGreen.value;
    const b = sBlue.value;
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'
});
sBlue.addEventListener('input', function () {
    const r = sRed.value;
    const g = sGreen.value;
    const b = sBlue.value;
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'
});


document.body.addEventListener('mousemove', function (e) {
    // posisi mouse
    // console.log(e.clientX);
    // ukuran browser
    // console.log(window.innerWidth);
    const xPos = Math.round((e.clientX / window.innerWidth) * 255 + 1);
    const yPos = Math.round((e.clientY / window.innerHeight) * 255 + 1);

    document.body.style.backgroundColor = 'rgb(' + xPos + ',' + yPos + ',100)'
})
