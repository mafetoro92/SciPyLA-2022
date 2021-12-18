// hamburger menu
const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.nav');
const barras = document.querySelectorAll('.ham span');



ham.addEventListener('click', () => {
    enlaces.classList.toggle('activado');
    barras.forEach(child => {child.classList.toggle('animado')});
    ham.classList.toggle('girar');
});

// text move 
const textEl = document.getElementById('text')
const text = 'Bienvenidos!'
let idx = 1

writeText()
function writeText() {
    textEl.innerText = text.slice(0, idx)

    idx++

    if (idx > text.length) {
        idx = 1
    }
    setTimeout(writeText, 300)
}

// map section

function startMap(){
    var coord={lat:-24.7280425,lng:-65.4115085 };
    var map= new google.maps.Map(document.getElementById('map'), {
        zoom:10,
        center:coord
    })
    var marker= new google.maps.Marker({
        position:coord,
        map:map
    })
}