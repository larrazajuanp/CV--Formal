// Variables
/*const eightBit = document.querySelector('.viajandoSiempre');
const overlay = document.querySelector('.overlay');
const imgViajando = document.getElementById('viajandoSiempre');

eightBit.addEventListener('mouseover', (e) => {
    //overlay.style.display = 'none';
    console.log(e.target)
    imgViajando.style.opacity = 0.5;
    const div = document.createElement('div');

    div.innerHTML = `
        <div class="overlay">
            <h1>Visitar el sitio</h1>
        </div>
    `
    eightBit.appendChild(div)

    eightBit.appendChild('mouseout', () => {
        imgViajando.style.opacity = 1;
    })

})*/


const year = new Date().getFullYear();
console.log(year)

document.querySelector('.actualYear').innerHTML = year