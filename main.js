let color1 = "#F9CB49" || "#F9CB49";
let color2 = "#d6ae3f" || "#d6ae3f";
let color3 = "#e1ad1c" || "#e1ad1c";
let color4 = "#7a5c07" || "#7a5c07";
let color5 = "orange" || "orange";

document.documentElement.style.setProperty('--color1', color1);
document.documentElement.style.setProperty('--color2', color2);
document.documentElement.style.setProperty('--color3', color3);
document.documentElement.style.setProperty('--color4', color4);
document.documentElement.style.setProperty('--color5', color5);



document.querySelector('.botonazul').addEventListener('click', function () {
    color1 = "#3b4fee";
    color2 = "#3f4ed6";
    color3 = "#101274";
    color4 = "#0d077a";
    color5 = "blue";



    document.documentElement.style.setProperty('--color1', color1);
    document.documentElement.style.setProperty('--color2', color2);
    document.documentElement.style.setProperty('--color3', color3);
    document.documentElement.style.setProperty('--color4', color4);
    document.documentElement.style.setProperty('--color5', color5);

});

document.querySelector('.botonamarillo').addEventListener('click', function () {
    color1 = "#F9CB49";
    color2 = "#d6ae3f";
    color3 = "#e1ad1c";
    color4 = "#7a5c07";
    color5 = "orange";


    document.documentElement.style.setProperty('--color1', color1);
    document.documentElement.style.setProperty('--color2', color2);
    document.documentElement.style.setProperty('--color3', color3);
    document.documentElement.style.setProperty('--color4', color4);
    document.documentElement.style.setProperty('--color5', color5);


});


document.querySelector('.botonrojo').addEventListener('click', function () {
    color1 = "#fb3434";
    color2 = "#d63f3f";
    color3 = "#821111";
    color4 = "#7a0707";
    color5 = "red";



    document.documentElement.style.setProperty('--color1', color1);
    document.documentElement.style.setProperty('--color2', color2);
    document.documentElement.style.setProperty('--color3', color3);
    document.documentElement.style.setProperty('--color4', color4);
    document.documentElement.style.setProperty('--color5', color5);

});

document.querySelector('.botonverde').addEventListener('click', function () {
    color1 = "#83e741";
    color2 = "#41d63f";
    color3 = "#116e1c";
    color4 = "#077a11";
    color5 = "green";



    document.documentElement.style.setProperty('--color1', color1);
    document.documentElement.style.setProperty('--color2', color2);
    document.documentElement.style.setProperty('--color3', color3);
    document.documentElement.style.setProperty('--color4', color4);
    document.documentElement.style.setProperty('--color5', color5);
});

const botonencendido = document.querySelector('.botonesstart');
const luzencendido = document.querySelector('.ledrojo');
const pantallaencendida = document.querySelector('.pantalla');

botonencendido.addEventListener('click', () => {
    luzencendido.classList.toggle('ledrojoON');
    pantallaencendida.classList.toggle('pantallaON');
    if (pantallaencendida.classList.contains('pantallaON')) {
        pantallaencendida.classList.remove('pantallaON');
        void pantallaencendida.offsetWidth;
        pantallaencendida.classList.add('pantallaON');
        pantallaencendida.style.animationPlayState = 'running';
    }
});

let pokemon = document.querySelector(".muneco1");

document.querySelector('.botonazul').addEventListener('click', function () {
    pokemon.classList.remove('muneco3');
    pokemon.classList.remove('muneco4');
    pokemon.classList.remove('muneco1');
    pokemon.classList.toggle('muneco2');
});

document.querySelector('.botonrojo').addEventListener('click', function () {
    pokemon.classList.remove('muneco2');
    pokemon.classList.remove('muneco4');
    pokemon.classList.remove('muneco1');
    pokemon.classList.toggle('muneco3');
});

document.querySelector('.botonverde').addEventListener('click', function () {
    pokemon.classList.remove('muneco2');
    pokemon.classList.remove('muneco3');
    pokemon.classList.remove('muneco1');
    pokemon.classList.toggle('muneco4');
});

document.querySelector('.botonamarillo').addEventListener('click', function () {
    pokemon.classList.remove('muneco2');
    pokemon.classList.remove('muneco3');
    pokemon.classList.remove('muneco4');
    pokemon.classList.toggle('muneco1');
});