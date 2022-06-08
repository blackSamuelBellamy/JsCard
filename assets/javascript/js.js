const card = document.querySelector('.card');
const next = document.querySelector('.next');
const previous = document.querySelector('.previous');
const number = document.querySelector('.number');
const price = document.querySelector('.price');
const boton = document.querySelector('.boton');
const descuento = document.querySelector('.descuento');
const porcentaje = document.querySelector('.porcentaje');
const escogido = document.querySelector('.escogido');

const colors = document.querySelector('.colors');
const rojo = document.querySelector('.rojo');
const azul = document.querySelector('.azul');
const negro = document.querySelector('.negro');
const amarillo = document.querySelector('.amarillo');
const verde = document.querySelector('.verde');
const ul = document.querySelector('ul');
const li = document.querySelectorAll('li');

const r = 'rgb(216, 32, 32)';
const az = 'rgb(8, 8, 167)';
const n = '#000';
const am = 'rgb(236, 236, 30)';
const v = 'rgb(20, 223, 20)';

const oferta = () => {
    let azar = Math.floor(Math.random() * 5 ) + 1;
    porcentaje.textContent = `Tienes un ${azar * 10}% de descuento!`

};

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
    boton.style.display ='none';

})

ul.addEventListener('click', () =>{

    ul.style.display = 'none';
    card.style.opacity = '1';
    boton.style.display = 'block'; 

})

rojo.addEventListener('click', () => {
    let colorRojo = 'Escogiste Rojo';
    escogido.textContent = 'Rojo';
    escogido.style.background = r;
    escogido.style.color = '#fff';
    colors.textContent = colorRojo;
    colors.style.color = '#FFF';
    colors.style.background = r;
    colors.style.boxShadow = 
    '0 0 5px rgb(216, 32, 32), 0 0 25px rgb(216, 32, 32),0 0 50px rgb(216, 32, 32), 0 0 200px rgb(216, 32, 32)';   

})

azul.addEventListener('click', () => {
    let colorAzul = 'Escogiste Azul';
    escogido.textContent = 'Azul';
    escogido.style.background = az;
    escogido.style.color = '#fff';
    colors.textContent = colorAzul;  
    colors.style.background = az; 
    colors.style.color = '#FFF';
    colors.style.boxShadow =
    '0 0 5px rgb(8, 8, 167), 0 0 25px rgb(8, 8, 167), 0 0 50px rgb(8, 8, 167), 0 0 200px rgb(8, 8, 167)';
})

negro.addEventListener('click', () => {
    let colorNegro = 'Escogiste Negro';
    escogido.textContent = 'Negro';
    escogido.style.background = n;
    escogido.style.color = '#fff';
    colors.textContent = colorNegro;
    colors.style.background = n;
    colors.style.color = '#fff'; 
    colors.style.boxShadow =
    '0 0 5px #000, 0 0 25px #000, 0 0 50px #000, 0 0 200px #000';  
})
    
amarillo.addEventListener('click', () => {
    let colorAmarillo = 'Amarillo';
    escogido.textContent = 'Amarillo';
    escogido.style.background = am;
    escogido.style.color = n;
    colors.textContent = colorAmarillo;
    colors.style.background = am;
    colors.style.color = n;
    colors.style.boxShadow = 
    '0 0 5px rgb(236, 236, 30), 0 0 25px rgb(236, 236, 30), 0 0 50px rgb(236, 236, 30), 0 0 200px rgb(236, 236, 30)';  
})


verde.addEventListener('click', () => {
    let colorVerde = 'Escogiste Verde';
    escogido.textContent = 'Verde';
    escogido.style.background = v;
    escogido.style.color = n;
    colors.textContent = colorVerde;   
    colors.style.background = v;
    colors.style.color = n;
    colors.style.boxShadow =
    '0 0 5px rgb(20, 223, 20), 0 0 25px rgb(20, 223, 20), 0 0 50px rgb(20, 223, 20), 0 0 200px rgb(20, 223, 20)';
})




boton.addEventListener('click', () => {
    if(number.textContent == 0 || colors.textContent == 'Escoge un color') {
        alert('Escoge la cantidad  deseada y también el color para continuar con tu super descuento!');
    } else {
        card.style.transform = 'translateX(-50%) translateY(-50%) rotateY(90deg)';
        descuento.style.transform = 'translateX(-50%) translateY(-50%) rotateY(360deg)';
        oferta();

        
    }
})






