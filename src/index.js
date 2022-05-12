
import { registerImage } from "./lazy";

//crear una imagen
// agregar imagen

const minimum = 1;
const maximum = 122;
//crear funcion random q genere numeros del 1 al 122
const random = () => Math.floor(Math.random() * (maximum - minimum)) + minimum;

const createImageNode = () => {
    const container = document.createElement('div');
    container.className = "p-4";

    const imagen = document.createElement('img');
    imagen.className = 'mx-auto';
    imagen.width = '320';
    imagen.dataset.src = `https://randomfox.ca/images/${random()}.jpg`; // to do
    container.appendChild(imagen);

    return container;
};

const mountNode = document.getElementById("images");

const addButton = document.querySelector('button');

const addImage = () => {
    const newImage = createImageNode();
    mountNode.append(newImage);
    registerImage(newImage);
};   

addButton.addEventListener("click", addImage);


