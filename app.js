const container = document.querySelector('#container');
const firstContainer = document.querySelector('.random');
const firstImg = document.querySelector('.randomImg');
const urlBasic = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/";

for(let i=1; i<=898; i++){
    const target = document.createElement('div');//Nuevo Div
    target.classList.add('target'); //Nueva clase para el Div
    container.appendChild(target); //Agregar el div

    const p = document.createElement('p'); //Nuevo elemento P
    p.innerText = `#${i}`;//Agrega contenido a la etiqueta P.

    const img = document.createElement('img'); //Nuevo elemento IMG
    img.classList.add('randomImg'); //Crea un classe a la IMG.
    target.appendChild(img); //Agregar la IMG
    target.insertAdjacentElement('beforeend',p);//Agregar la etiqueta P
    if(i<10){
        img.src = `${urlBasic}00${i}.png`; //Ruta para el IMG
    } else if (i >= 10 && i < 100){
        img.src = `${urlBasic}0${i}.png`; //Ruta para el IMG
    } else{
        img.src = `${urlBasic}${i}.png`; //Ruta para el IMG
    }
}

