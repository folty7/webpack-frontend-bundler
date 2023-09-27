import joke from './index2.js';
import '../scss/main.scss';

// import Atropos library
import Atropos from 'atropos';

const myAtropos = Atropos({
    el: '.my-atropos',
    activeOffset: 40,
    shadowScale: 1.05,
    onEnter() {
        console.log('Enter');
    },
    onLeave() {
        console.log('Leave');
    },
    onRotate(x, y) {
        console.log('Rotate', x, y);
    }
});

// Example ES6 code
const greeting = () => {
    console.log('Hello, world!');
};

console.log('terser funguje');
joke();