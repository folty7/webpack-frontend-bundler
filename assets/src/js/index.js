import joke from './index2.js';
import '../styles/main.scss';
import shrek from '../img/Shrek-Free-PNG-Image.png';

const shrekImg = document.getElementById('shrekImg');
shrekImg.src = shrek;

// Example ES6 code
const greeting = () => {
    console.log('Hello, world!');
};

console.log('terser funguje');

const $ = require('jquery');
$(document).ready(function (){
    $('#jqueryTest').text('jQuery funguje!');
});

joke();