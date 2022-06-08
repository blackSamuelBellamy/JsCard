const next = document.querySelector('.next');
const previous = document.querySelector('.previous');
const number = document.querySelector('.number');
const price = document.querySelector('.price');
const button = document.querySelector('.boton');

next.addEventListener('click', () => {
    number.textContent ++;
    let sum = (number.textContent * 790990).toLocaleString('en-US');
    price.textContent = `Precio: $${sum}`;
});

previous.addEventListener('click', () => {
    if(number.textContent == 0) {
        return;
    } else {
        number.textContent --;
        let sum = (number.textContent * 790990).toLocaleString('en-US');
        price.textContent = `Precio: $${sum}`;
    }
   
});











