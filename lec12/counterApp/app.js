const countEle = document.querySelector('.count');
const decrement = document.querySelector('#decrement');
const increment = document.querySelector('#increment');
const reset = document.querySelector('#reset');

let count = parseInt(countEle.innerText);
console.log(count);
console.log(typeof (count));

increment.addEventListener('click', () => {
    count = count + 1;
    console.log(count);
    countEle.innerText = count;
});

decrement.addEventListener('click', () => {
    count = count - 1;
    console.log(count);
    countEle.innerText = count;
});

reset.addEventListener('click', () => {
    countEle.innerText = '0';
});