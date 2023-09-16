import joke from './index2.js';
import '../styles/main.scss';
import shrek from '../img/Shrek-Free-PNG-Image.png';
import mySwiper from "./swiperInit.js";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const shrekImg = document.getElementById('shrekImg');
shrekImg.src = shrek;

console.log('TEST 123');
joke();
mySwiper;