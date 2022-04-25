import { CanvasLocal } from './CanvasLocal.js';
let canvas : HTMLCanvasElement;
let graphics : CanvasRenderingContext2D;

canvas = <HTMLCanvasElement>document.getElementById('circlechart');
graphics = canvas.getContext('2d');
