/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

import { registerImage } from "./lazy.js";

const URL = "https://randomfox.ca/images";

const maximum=122;
const minimum= 1;

//crea un numero aleatorio para traer las imagenes
const random = () => Math.floor(Math.random() * (maximum - minimum)) + minimum

// reporte en consola de cuantos argumentos han traido y estan cargados
const reportImgs = {
    imgLoaded: 0,
    totalImg: 0
}

const stopContentLoader = (event) => {
    const img = event.target;
    // img.parentElement.lastChild.remove();
    img.style.width = '320px';
    img.style.height= '320px';
    
    reportImgs.imgLoaded++;
    
    // debugger;
    showReportImg();
}

const showReportImg = () => {
    console.log('----------------------------------------')
    console.log(`%c⚪Total Imgs: ${reportImgs.totalImg}`, 'color: white; font-size: 0.8rem');
    console.log(`%c🟣Total Cargadas: ${reportImgs.imgLoaded}`, 'color: hotpink; font-size: 0.8rem');
    console.log('----------------------------------------')
}

const allElementsDeleted = () => {
    console.log(`⚠ Todas las imagenes fueron eliminadas`);
}

const createImageNode = () => {
    const container = document.createElement('div');
    container.className = 'flex flex-col items-center p-4 mx-auto';

    const img = document.createElement('img');
    img.className = 'mx-auto rounded bg-gray-300';
    img.width = "320";
    img.style.minHeight = '300'
    img.dataset.src = `${URL}/${random()}.jpg`; // TODO

    img.onload = stopContentLoader; //onload llama una funcion

    container.appendChild(img);

    return container;
};

const nuevaImagen = createImageNode();

const addImage = () => {
    const newImage = createImageNode();
    mountNode.append(newImage);
    registerImage(newImage);
    
    reportImgs.totalImg++;
    showReportImg();
}

const removeAllImg = () =>{
    mountNode.innerHTML = "";
    reportImgs.imgLoaded = 0;
    reportImgs.totalImg = 0;
    allElementsDeleted()
}


//captura la etiqueta img del html
const mountNode = document.getElementById('images')

//captura el button del html
const addButton = document.querySelector('#addButton');
addButton.className = 'text-white px-3 py-2 rounded-lg bg-indigo-600 focus:outline-none';

const removeButton = document.querySelector('#removeButton')
removeButton.className ='rounded-lg mt-5 px-3 py-2 text-indigo-600 border border-indigo-600 focus:outline-none';

addButton.addEventListener('click', addImage);
removeButton.addEventListener('click', removeAllImg);

