const card = document.querySelector('.card');
const next = document.querySelector('.next');
const previous = document.querySelector('.previous');
const number = document.querySelector('.number');
const price = document.querySelector('.price');
const button = document.querySelector('.boton');

const colors = document.querySelector('.colors');
const rojo = document.querySelector('.rojo');
const azul = document.querySelector('.azul');
const negro = document.querySelector('.negro');
const amarillo = document.querySelector('.amarillo');
const verde = document.querySelector('.verde');
const ul = document.querySelector('ul');
const li = document.querySelectorAll('li');

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
        let rest = (number.textContent * 790990).toLocaleString('en-US');
        price.textContent = `Precio: $${rest}`;
    }
   
});



colors.addEventListener('click', () => {

    ul.style.display = 'block';
    card.style.opacity = '.1';
    button.style.display ='none';

})

ul.addEventListener('click', () =>{

    ul.style.display = 'none';
    card.style.opacity = '1';
    button.style.display = 'block'; 

})

const red = () => {
    let colorRojo = 'Escogiste Rojo';
    colors.textContent = colorRojo;   
};

const blue = () => {
    let colorAzul = 'Escogiste Azul';
    colors.textContent = colorAzul;   
};

const black = () => {
    let colorNegro = 'Escogiste Negro';
    colors.textContent = colorNegro;   
};

const yellow = () => {
    let colorAmarillo= 'Escogiste Amarillo';
    colors.textContent = colorAmarillo;   
};

const green = () => {
    let colorVerde = 'Escogiste Verde';
    colors.textContent = colorVerde;   
};













