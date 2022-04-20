import { CanvasLocal } from './CanvasLocal.js';
let canvas;
let graphics;
canvas = document.getElementById('circlechart');
graphics = canvas.getContext('2d');
/*
let obtanch = document.getElementById("ejex");
var cnvancho = obtanch.innerHTML;
//var ancho = parseFloat(cnvancho);
let obtlargo = document.getElementById("ejey");
var cnvlargo = obtlargo.innerHTML;
//var largoo =  parseFloat(cnvlargo);
*/
const obtx = document.querySelector('.ejex');
const obty = document.querySelector('.ejey');
//variables para el efecto
let scale = 1;
let b = false;
let lnz = document.getElementById("zom");
lnz.onwheel = zoomm;
function zoomm(e) {
    e.preventDefault();
    scale += e.deltaY * -0.01;
    scale = Math.min(Math.max(0.2, scale), 4);
    lnz.style.transform = `scale(${scale})`;
}
function entrada() {
    reset();
    let cx = parseInt(obtx.value);
    let cy = parseInt(obty.value);
    if (obtx.value === '' && obty.value === '') {
        mapa();
        cx = cx;
        cy = cy;
    }
    else {
        obtx.value = "";
        obty.value = "";
        const miCanvas = new CanvasLocal(graphics, canvas, cx, cy);
        miCanvas.paint();
    }
}
function reset() {
    graphics.clearRect(0, 0, canvas.width, canvas.height);
}
function mapa() {
    let a = 8;
    let l = 8;
    const miCanvas = new CanvasLocal(graphics, canvas, l, a);
    miCanvas.paint();
}
mapa();
// document.getElementById("agzoom").addEventListener('click',zoom, false);
document.getElementById('btnz').addEventListener('click', entrada, false);
