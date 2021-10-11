const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];
const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');
const body = document.querySelector('body')

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

startBtn.addEventListener('click', onStart);
stopBtn.addEventListener('click', onStop);

let intervalId = null;
let isActive = false;
    
function onStart() {
    if(isActive) {
        return
    }
    isActive = true
    intervalId = setInterval(() => {
        const randomColor = randomIntegerFromInterval(0, colors.length-1);
        body.style.background = colors[randomColor];
        console.log('1 сек')
    }, 1000);
};
    
function onStop() {
    clearInterval(intervalId);
    isActive = false
}

